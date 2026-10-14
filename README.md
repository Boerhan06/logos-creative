# 🚀 Logos Creative — Agency Landing Page

![Next.js](https://img.shields.io/badge/Next.js-14%2B-black?style=for-the-badge&logo=nextdotjs)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Deployment](https://img.shields.io/badge/Deploy-Hostinger_Shared_Hosting-7F56D9?style=for-the-badge&logo=hostinger)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Website portofolio dan *landing page* resmi untuk **Logos Creative** — Agensi Kreatif spesialis branding visual, manajemen media sosial, dan produksi konten video untuk UMKM & Startup. 

Dirancang dengan pendekatan estetika *sleek & luxury* berstandar dunia, performa tinggi, serta navigasi super mulus.

---

## ✨ Fitur Utama

- **🎨 Design System Crimson Luxury:** Menggunakan token warna Material Design 3 (*Crimson Luxury Palette*) dengan kontras tinggi dan tampilan modern.
- **⚡ Fast & Static Export:** Dikonfigurasi penuh dengan Next.js `output: 'export'` untuk waktu pemuatan instan pada shared hosting.
- **🌀 Custom Smooth Scroll Engine:** Menggunakan kalkulasi `requestAnimationFrame` kustom dengan kurva *easing* presisi tanpa *delay* atau *lag* saat navigasi antar *section*.
- **📱 Responsif & PWA-Ready:** Tampilan responsif sempurna dari layar seluler hingga monitor beresolusi tinggi.
- **🔄 Automated CI/CD Deployment:** Terintegrasi penuh dengan GitHub Actions untuk penyebaran otomatis ke Hostinger via FTP setiap kali melakukan `git push`.

---

## 🛠️ Teknologi & Tools

| Kategori | Teknologi |
|---|---|
| **Framework** | Next.js (React 18+) |
| **Styling** | Tailwind CSS v4, Material Design 3 Design Tokens |
| **Icons** | Google Material Symbols |
| **Animation Engine** | Custom JavaScript Smooth Scroll (`requestAnimationFrame`) |
| **Hosting** | Hostinger Shared Hosting (`public_html`) |
| **Automation** | GitHub Actions (FTP Deploy Action) |

---

## 📁 Struktur Direktori Proyek

```text
logos-creative/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Otomatisasi deployment ke Hostinger
├── app/
│   ├── components/             # Komponen UI (Header, Hero, Services, Portfolio, dll)
│   ├── utils/
│   │   └── smoothScroll.js     # Engine animasi scroll navigasi
│   ├── globals.css             # Konfigurasi Tailwind & MD3 design tokens
│   ├── layout.js               # Root Layout
│   └── page.js                 # Homepage utama
├── public/
│   └── images/                 # Aset gambar, logo, dan favicon
├── next.config.mjs             # Konfigurasi static export Next.js
└── package.json
```

---

## 🚀 Panduan Memulai (Local Development)

### 1. Prasyarat
Pastikan kamu telah menginstal:
- [Node.js](https://nodejs.org/) versi 18.x atau lebih baru.
- `npm` atau `yarn`.

### 2. Instalasi
Kloning repositori ini dan instal semua dependensi:

```bash
git clone https://github.com/USERNAME_KAMU/logos-creative.git
cd logos-creative
npm install
```

### 3. Jalankan Server Lokal
Jalankan server pengembangan lokal:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser kamu untuk melihat hasilnya.

---

## 📦 Build & Deployment

### Build Manual
Untuk menghasilkan file statis siap rilis di dalam folder `out/`:

```bash
npm run build
```

Semua isi di dalam folder `out/` siap diunggah langsung ke direktori `public_html` di Hostinger.

### Deployment Otomatis (GitHub Actions)
Repository ini sudah dilengkapi workflow deployment otomatis. Cukup tambahkan *Secrets* berikut di GitHub Repo (**Settings > Secrets and variables > Actions**):

- `FTP_SERVER`: FTP Hostname dari Hostinger
- `FTP_USERNAME`: Username FTP Hostinger
- `FTP_PASSWORD`: Password FTP Hostinger

Setiap kali melakukan *push* ke branch `main`, proyek akan otomatis di-*build* dan di-*upload* ke hosting:

```bash
git add .
git commit -m "Update konten & komponen website"
git push origin main
```

---

## 📄 Lisensi

Proyek ini dikembangkan khusus untuk **Logos Creative**. Seluruh hak cipta dilindungi.
