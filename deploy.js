#!/usr/bin/env node

/**
 * ==============================================================================
 * Smart Incremental FTP Deploy - Logos Creative
 * ==============================================================================
 * Only deploys files that are newly added, modified, or deleted.
 * Files that haven't changed (especially large videos & images) are skipped,
 * resulting in 99% faster deployments and massive time/bandwidth savings.
 *
 * Usage:
 *   node deploy.js          -> Smart incremental deploy (hanya file berubah)
 *   node deploy.js --full   -> Force re-upload semua file dari nol
 *   node deploy.js --dry-run -> Preview perubahan tanpa mengunggah ke FTP
 * ==============================================================================
 */

const FtpDeploy = require("ftp-deploy");
const PromiseFtp = require("promise-ftp");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const MANIFEST_FILE = path.join(__dirname, ".deploy-manifest.json");
const LOCAL_OUT_DIR = path.join(__dirname, "out");

// 1. Muat environment variables (.env.local atau .env)
function loadEnv() {
  const envFiles = [".env.local", ".env"];
  for (const file of envFiles) {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
      try {
        const content = fs.readFileSync(fullPath, "utf8");
        content.split(/\r?\n/).forEach((line) => {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith("#")) return;
          const match = trimmed.match(/^([\w.-]+)\s*=\s*(.*)?$/);
          if (match) {
            const key = match[1];
            let val = (match[2] || "").trim();
            if (
              (val.startsWith('"') && val.endsWith('"')) ||
              (val.startsWith("'") && val.endsWith("'"))
            ) {
              val = val.slice(1, -1);
            }
            if (!process.env[key]) {
              process.env[key] = val;
            }
          }
        });
      } catch (err) {
        // Fallback jika pembacaan gagal
      }
    }
  }
}

loadEnv();

// 2. Konfigurasi FTP dari environment
const ftpConfig = {
  host: process.env.FTP_HOST || "145.79.14.141",
  user: process.env.FTP_USER || "u954345722",
  password: process.env.FTP_PASSWORD || "",
  port: parseInt(process.env.FTP_PORT || "21", 10),
  localRoot: LOCAL_OUT_DIR,
  remoteRoot: process.env.FTP_REMOTE_ROOT || "/domains/logoscreative.id/public_html/",
  deleteRemote: false, // Tidak pernah menghapus seluruh folder root di Hostinger
  forcePasv: true,
  sftp: false,
};

// 3. Validasi keamanan
if (!ftpConfig.password || ftpConfig.password === "masukkan_password_ftp_anda_di_sini") {
  console.error("\n=======================================================");
  console.error("❌ [DEPLOY DIBATALKAN: PASSWORD FTP BELUM DIISI]");
  console.error("=======================================================");
  console.error("Untuk menjaga keamanan kode, password tidak ditaruh di dalam kode.");
  console.error("👉 Silakan buka file '.env' di root folder, lalu isi:");
  console.error("   FTP_PASSWORD=password_ftp_hostinger_anda\n");
  process.exit(1);
}

if (!fs.existsSync(ftpConfig.localRoot)) {
  console.error("\n❌ [DEPLOY GAGAL]: Folder '/out' belum ditemukan.");
  console.error("👉 Pastikan 'npm run build' sudah berjalan dengan sukses terlebih dahulu.\n");
  process.exit(1);
}

// 4. Utilitas File Scanning & Hashing
function computeFileHash(filePath) {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    return crypto.createHash("md5").update(fileBuffer).digest("hex");
  } catch (err) {
    return null;
  }
}

function scanLocalFiles(baseDir) {
  const result = {};

  function walk(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (stat.isFile()) {
        const relPath = path.relative(baseDir, fullPath).replace(/\\/g, "/");
        result[relPath] = {
          fullPath,
          size: stat.size,
          mtime: stat.mtimeMs,
        };
      }
    }
  }

  walk(baseDir);
  return result;
}

function loadManifest() {
  if (fs.existsSync(MANIFEST_FILE)) {
    try {
      const data = JSON.parse(fs.readFileSync(MANIFEST_FILE, "utf8"));
      return data.files || {};
    } catch {
      return {};
    }
  }
  return {};
}

function saveManifest(currentFilesMap) {
  const toSave = {
    lastDeploy: new Date().toISOString(),
    files: {},
  };

  for (const [relPath, info] of Object.entries(currentFilesMap)) {
    toSave.files[relPath] = {
      size: info.size,
      mtime: info.mtime,
      hash: info.hash,
    };
  }

  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(toSave, null, 2), "utf8");
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

// 5. Eksekusi Deploy Cerdas (Incremental)
async function runDeploy() {
  const startTime = Date.now();
  const args = process.argv.slice(2);
  const isFullDeploy = args.includes("--full") || args.includes("--force");
  const isDryRun = args.includes("--dry-run");

  console.log("=======================================================");
  console.log(`🚀 [SMART DEPLOY] Hostinger: ${ftpConfig.host}`);
  console.log(`📁 User: ${ftpConfig.user} | Remote: ${ftpConfig.remoteRoot}`);
  console.log(`⚙️  Mode: ${isFullDeploy ? "FULL UPLOAD (Semua file)" : "INCREMENTAL (Hanya yang berubah)"}`);
  if (isDryRun) console.log("🔍 DRY RUN: Tidak ada perubahan nyata yang dikirim.");
  console.log("=======================================================\n");

  process.stdout.write("🔍 Memeriksa diff antara file lokal dan manifest server... ");
  const localFiles = scanLocalFiles(ftpConfig.localRoot);

  if (args.includes("--init-manifest")) {
    for (const [relPath, info] of Object.entries(localFiles)) {
      info.hash = computeFileHash(info.fullPath);
    }
    saveManifest(localFiles);
    console.log("✓ Selesai\n");
    console.log("=======================================================");
    console.log(`✓ Manifest berhasil diinisialisasi dengan ${Object.keys(localFiles).length} file.`);
    console.log("⚡ Mulai sekarang, deploy hanya akan mengunggah file yang benar-benar berubah!");
    console.log("=======================================================\n");
    return;
  }

  const manifest = isFullDeploy ? {} : loadManifest();

  const toUpload = [];
  const toDelete = [];
  let bytesToUpload = 0;
  let bytesSkipped = 0;
  let unchangedCount = 0;

  // Analisis file yang bertambah atau berubah
  for (const [relPath, info] of Object.entries(localFiles)) {
    const prev = manifest[relPath];

    // Cek optimasi: jika ukuran dan mtime sama, pakai hash lama
    let currentHash;
    if (prev && prev.size === info.size && Math.abs(prev.mtime - info.mtime) < 1000) {
      currentHash = prev.hash;
    } else {
      currentHash = computeFileHash(info.fullPath);
    }
    info.hash = currentHash;

    if (!prev) {
      toUpload.push({ path: relPath, reason: "new", size: info.size });
      bytesToUpload += info.size;
    } else if (prev.hash !== currentHash) {
      toUpload.push({ path: relPath, reason: "modified", size: info.size });
      bytesToUpload += info.size;
    } else {
      unchangedCount++;
      bytesSkipped += info.size;
    }
  }

  // Analisis file yang dihapus secara lokal
  for (const relPath of Object.keys(manifest)) {
    if (!localFiles[relPath]) {
      toDelete.push(relPath);
    }
  }

  console.log("✓ Selesai\n");

  // Rangkuman Perubahan
  console.log("📊 RANGKUMAN DIFF:");
  console.log(`  🟢 Baru / Tambah : ${toUpload.filter((f) => f.reason === "new").length} file`);
  console.log(`  🟡 Diperbarui     : ${toUpload.filter((f) => f.reason === "modified").length} file`);
  console.log(`  🔴 Dihapus       : ${toDelete.length} file`);
  console.log(`  ⚪ Tidak Berubah : ${unchangedCount} file (${formatBytes(bytesSkipped)}) -> 🚀 DILEWATI!\n`);

  if (toUpload.length === 0 && toDelete.length === 0) {
    console.log("=======================================================");
    console.log("✨ SEMUA FILE DI SERVER SUDAH UP-TO-DATE!");
    console.log("⚡ Tidak ada file yang perlu diunggah. Hemat bandwidth & waktu 100%!");
    console.log("=======================================================\n");
    return;
  }

  if (toUpload.length > 0) {
    console.log(`📦 File yang akan diunggah (${formatBytes(bytesToUpload)}):`);
    toUpload.slice(0, 15).forEach((f) => {
      const icon = f.reason === "new" ? "🟢 [BARU]" : "🟡 [MODIF]";
      console.log(`   ${icon} ${f.path} (${formatBytes(f.size)})`);
    });
    if (toUpload.length > 15) {
      console.log(`   ... dan ${toUpload.length - 15} file lainnya`);
    }
    console.log("");
  }

  if (isDryRun) {
    console.log("🛑 Mode Dry-Run selesai. Tidak ada perubahan yang dikirim ke server.\n");
    return;
  }

  // Lakukan Upload jika ada file baru / termodifikasi
  if (toUpload.length > 0) {
    console.log("⏳ Memulai pengunggahan file ke FTP...");
    const ftpDeploy = new FtpDeploy();

    // Set include HANYA ke file-file yang perlu diunggah
    const uploadPaths = toUpload.map((f) => f.path);
    const deployConfig = {
      ...ftpConfig,
      include: uploadPaths,
    };

    let uploadedCount = 0;
    ftpDeploy.on("uploading", (data) => {
      uploadedCount = data.transferredFileCount + 1;
      console.log(`[Upload ${uploadedCount}/${data.totalFilesCount}] -> ${data.filename}`);
    });

    ftpDeploy.on("upload-error", (data) => {
      console.error(`❌ Gagal upload ${data.filename}:`, data.err);
    });

    await ftpDeploy.deploy(deployConfig);
  }

  // Bersihkan file remote yang sudah dihapus secara lokal
  if (toDelete.length > 0) {
    console.log(`\n⏳ Menghapus ${toDelete.length} file usang di remote server...`);
    const ftpClient = new PromiseFtp();
    try {
      await ftpClient.connect({
        host: ftpConfig.host,
        user: ftpConfig.user,
        password: ftpConfig.password,
        port: ftpConfig.port,
        pasv: ftpConfig.forcePasv,
      });

      for (const relPath of toDelete) {
        const remoteFilePath = path.posix.join(ftpConfig.remoteRoot, relPath);
        try {
          await ftpClient.delete(remoteFilePath);
          console.log(`🗑️ [Hapus Remote] -> ${remoteFilePath}`);
        } catch (delErr) {
          // Abaikan jika file memang sudah tidak ada di remote
        }
      }
      await ftpClient.end();
    } catch (ftpErr) {
      console.warn("⚠️ Gagal menghapus beberapa file usang di remote:", ftpErr.message);
    }
  }

  // Simpan manifest terbaru
  saveManifest(localFiles);

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log("\n=======================================================");
  console.log(`🎉 DEPLOY BERHASIL DALAM ${elapsed} DETIK!`);
  console.log(`⚡ Menghemat transfer data ${formatBytes(bytesSkipped)}!`);
  console.log("🌐 Website Logos Creative Anda sudah LIVE & tersinkronisasi!");
  console.log("=======================================================\n");
}

runDeploy().catch((err) => {
  console.error("\n❌ Terjadi kesalahan saat deploy:", err.message || err);
  console.error("Tips: Periksa apakah koneksi internet aktif dan password FTP di .env sudah benar.\n");
  process.exit(1);
});
