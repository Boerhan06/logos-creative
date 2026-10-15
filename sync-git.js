#!/usr/bin/env node

/**
 * ==============================================================================
 * Smart Git Sync Script - Logos Creative
 * ==============================================================================
 * Fast, token-efficient, and automated Git staging, committing, and pushing.
 *
 * Usage:
 *   npm run push
 *   npm run push -- "Pesan commit custom kamu"
 *   node sync-git.js "Pesan commit custom kamu"
 * ==============================================================================
 */

const { execSync } = require("child_process");

function runGit(cmd) {
  try {
    return execSync(cmd, { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] }).trim();
  } catch (err) {
    const stderr = err.stderr ? err.stderr.toString().trim() : "";
    const stdout = err.stdout ? err.stdout.toString().trim() : "";
    throw new Error(stderr || stdout || err.message);
  }
}

function getActiveBranch() {
  try {
    return runGit("git rev-parse --abbrev-ref HEAD") || "main";
  } catch {
    return "main";
  }
}

function parseStatus() {
  const raw = runGit("git status --porcelain");
  if (!raw) return [];

  const lines = raw.split(/\r?\n/).filter(Boolean);
  return lines.map((line) => {
    const code = line.slice(0, 2);
    const file = line.slice(3).trim().replace(/^"|"$/g, "");
    let type = "modified";
    let icon = "🟡";

    if (code.includes("?")) {
      type = "untracked";
      icon = "🟢";
    } else if (code.includes("A")) {
      type = "added";
      icon = "🟢";
    } else if (code.includes("D")) {
      type = "deleted";
      icon = "🔴";
    } else if (code.includes("R")) {
      type = "renamed";
      icon = "🟣";
    }

    return { code, file, type, icon };
  });
}

function autoCommitMessage(changes) {
  const userMsg = process.argv.slice(2).join(" ").trim();
  if (userMsg) return userMsg;

  if (changes.length === 0) return "Routine sync";

  const fileNames = changes.map((c) => {
    const parts = c.file.split(/[\\/]/);
    return parts[parts.length - 1];
  });

  const uniqueNames = Array.from(new Set(fileNames));
  if (uniqueNames.length <= 3) {
    return `Update: ${uniqueNames.join(", ")}`;
  } else {
    return `Update: ${uniqueNames.slice(0, 3).join(", ")} (+${uniqueNames.length - 3} lainnya)`;
  }
}

function main() {
  const startTime = Date.now();
  console.log("=======================================================");
  console.log("🐙 [SMART GIT SYNC] Sinkronisasi Perubahan ke GitHub");
  console.log("=======================================================");

  const branch = getActiveBranch();
  const changes = parseStatus();

  if (changes.length === 0) {
    console.log("\n✨ Working tree bersih! Tidak ada perubahan yang perlu di-commit.");
    console.log(`🌿 Branch: ${branch} sudah up-to-date.\n`);
    return;
  }

  console.log(`\n📁 Ditemukan ${changes.length} file yang berubah:`);
  changes.forEach((c) => {
    console.log(`  ${c.icon} [${c.type.toUpperCase()}] ${c.file}`);
  });

  const commitMsg = autoCommitMessage(changes);
  console.log(`\n💬 Pesan Commit: "${commitMsg}"`);
  console.log(`🌿 Target Branch: ${branch}`);

  try {
    process.stdout.write("\n⏳ Menambahkan file (git add) ... ");
    runGit("git add -A");
    console.log("✓ Selesai");

    process.stdout.write("⏳ Membuat commit ... ");
    runGit(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`);
    console.log("✓ Selesai");

    process.stdout.write(`⏳ Mendorong ke GitHub (origin/${branch}) ... `);
    runGit(`git push origin ${branch}`);
    console.log("✓ Selesai");

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log("\n=======================================================");
    console.log(`🎉 BERHASIL PUSH KE GITHUB! (${elapsed}s)`);
    console.log(`🔗 Branch: ${branch} | ${changes.length} file tersinkronisasi.`);
    console.log("=======================================================\n");
  } catch (err) {
    console.error("\n❌ Gagal melakukan push ke GitHub:");
    console.error(err.message);
    console.error("\nTips: Pastikan koneksi internet aktif dan kredensial Git Anda valid.\n");
    process.exit(1);
  }
}

main();
