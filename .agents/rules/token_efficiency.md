# Aturan Efisiensi Token & Panduan Cepat AI Agent (Logos Creative)

Dokumen ini adalah panduan otomatis untuk Antigravity dan AI Assistant lainnya agar bekerja cepat, tepat sasaran, dan **hemat token**.

---

## 🚫 1. File yang DILARANG DIBACA (Hemat Token & Waktu)
1. **`package-lock.json`**: File ini sangat besar (>240 KB / ~60.000 token). JANGAN PERNAH membacanya. Jika butuh info dependencies, baca saja [package.json](file:///d:/Projek/2026/Logos_creative/logos-creative/package.json).
2. **`node_modules/`**: Dilarang di-grep atau di-scan secara rekursif.
3. **`.next/` & `out/`**: Folder hasil build/kompilasi. Jangan dibaca atau dimodifikasi secara manual.
4. **Binary & Media Files**: Gambar (`.png`, `.jpg`, `.webp`) atau font tidak boleh dimuat sebagai teks mentah.
5. **`.env`**: Jangan membaca atau menampilkan kredensial privat (password FTP) ke dalam chat.

---

## ⚡ 2. Praktik Efisiensi Kode & Pembacaan
1. **Targeted View (Gunakan Line Slice)**: Selalu gunakan `StartLine` dan `EndLine` saat membaca file. Jangan membaca seluruh file sekaligus jika hanya butuh melihat 20-50 baris.
2. **Targeted Edit**: Gunakan `replace_file_content` pada baris spesifik. Jangan me-rewrite keseluruhan isi file yang panjang.
3. **Respons Padat & Solutif**: Berikan penjelasan ringkas (*concise*) tanpa mengulang-ulang teori atau kode yang tidak berubah.

---

## 🗺️ 3. Peta Singkat Proyek (Fast Reference Map)
Tidak perlu grep seluruh folder, berikut lokasi setiap fitur:
* **Primary Color Palette**: `#5e0919` (Maroon pekat). Didefinisikan di [globals.css](file:///d:/Projek/2026/Logos_creative/logos-creative/app/globals.css).
* **Header & Navigasi**: [Header.js](file:///d:/Projek/2026/Logos_creative/logos-creative/app/components/Header.js) (Memiliki efek loading line di bawah navigasi, tautan Home mengarah ke `#hero`).
* **Hero Section**: [Hero.js](file:///d:/Projek/2026/Logos_creative/logos-creative/app/components/Hero.js) (Headline "HELLO BRAND OWNER!", tombol WA, logika zoom foto tim kalibrasi OS baseline scale).
* **What We Do**: [WhatWeDo.js](file:///d:/Projek/2026/Logos_creative/logos-creative/app/components/WhatWeDo.js) (4 kartu layanan utama).
* **Our Clients**: [OurClients.js](file:///d:/Projek/2026/Logos_creative/logos-creative/app/components/OurClients.js) (18 logo klien. Wajib gunakan prefix lowercase `client-*` untuk menghindari case-sensitivity di Linux host).
* **Portfolio Showcase**: [Portfolio.js](file:///d:/Projek/2026/Logos_creative/logos-creative/app/components/Portfolio.js).
* **Results / Testimoni**: [Results.js](file:///d:/Projek/2026/Logos_creative/logos-creative/app/components/Results.js) (Kolase 5 screenshot analitik TikTok Studio).
* **Contact Us**: [ContactUs.js](file:///d:/Projek/2026/Logos_creative/logos-creative/app/components/ContactUs.js).
* **WhatsApp Utility**: [whatsapp.js](file:///d:/Projek/2026/Logos_creative/logos-creative/app/utils/whatsapp.js) (Nomor: `+62 896-9988-1323` dengan pesan pembuka otomatis).
* **Smooth Scroll**: [smoothScroll.js](file:///d:/Projek/2026/Logos_creative/logos-creative/app/utils/smoothScroll.js).
* **Deploy ke Hostinger**: Jalankan `npm run build` lalu `node deploy.js`.
