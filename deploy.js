const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
const fs = require("fs");
const path = require("path");

// 1. Muat environment variable dari .env.local atau .env
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
        // Fallback jika pembacaan file gagal
      }
    }
  }
}

loadEnv();

// 2. Ambil konfigurasi dari environment variable
const config = {
  host: process.env.FTP_HOST || "145.79.14.141",
  user: process.env.FTP_USER || "u954345722",
  password: process.env.FTP_PASSWORD || "",
  port: parseInt(process.env.FTP_PORT || "21", 10),
  localRoot: path.join(__dirname, "out"),
  remoteRoot: process.env.FTP_REMOTE_ROOT || "/domains/logoscreative.id/public_html/",
  include: ["*", "**/*"],
  deleteRemote: true, // Menghapus file lama di remote agar bersih & up-to-date
  forcePasv: true,
  sftp: false,
};

// 3. Validasi keamanan sebelum koneksi FTP
if (!config.password || config.password === "masukkan_password_ftp_anda_di_sini") {
  console.error("\n=======================================================");
  console.error("❌ [DEPLOY DIBATALKAN: PASSWORD FTP BELUM DIISI]");
  console.error("=======================================================");
  console.error("Untuk menjaga keamanan kode, password tidak ditaruh di dalam kode.");
  console.error("👉 Silakan buka file '.env' di root folder, lalu isi:");
  console.error("   FTP_PASSWORD=password_ftp_hostinger_anda\n");
  process.exit(1);
}

// 4. Pastikan folder output static Next.js (/out) sudah ada
if (!fs.existsSync(config.localRoot)) {
  console.error("\n❌ [DEPLOY GAGAL]: Folder '/out' belum ditemukan.");
  console.error("👉 Pastikan 'npm run build' sudah berjalan dengan sukses terlebih dahulu.\n");
  process.exit(1);
}

console.log("=======================================================");
console.log(`🚀 Memulai Deploy ke Server Hostinger (${config.host})`);
console.log(`📁 User: ${config.user} | Remote: ${config.remoteRoot}`);
console.log("=======================================================\n");

let uploadedCount = 0;

ftpDeploy.on("uploading", function (data) {
  uploadedCount = data.transferredFileCount + 1;
  console.log(`[Upload ${uploadedCount}/${data.totalFilesCount}] -> ${data.filename}`);
});

ftpDeploy.on("upload-error", function (data) {
  console.error(`❌ Gagal upload ${data.filename}:`, data.err);
});

ftpDeploy
  .deploy(config)
  .then(() => {
    console.log("\n=======================================================");
    console.log("🎉 DEPLOY BERHASIL! Website Logos Creative Anda sudah LIVE!");
    console.log("=======================================================\n");
  })
  .catch((err) => {
    console.error("\n❌ Terjadi kesalahan koneksi saat deploy:", err.message || err);
    console.error("Tips: Periksa apakah password FTP di file .env sudah benar.\n");
  });
