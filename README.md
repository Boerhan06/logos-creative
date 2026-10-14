🚀 Logos Creative — Agency Landing PageWebsite portofolio dan landing page resmi untuk Logos Creative — Agensi Kreatif spesialis branding visual, manajemen media sosial, dan produksi konten video untuk UMKM & Startup.Dirancang dengan pendekatan estetika sleek & luxury berstandar dunia, performa tinggi, serta navigasi super mulus.✨ Fitur Utama🎨 Design System Crimson Luxury: Menggunakan token warna Material Design 3 (Crimson Luxury Palette) dengan kontras tinggi dan tampilan modern.⚡ Fast & Static Export: Dikonfigurasi penuh dengan Next.js output: 'export' untuk waktu pemuatan instan pada shared hosting.🌀 Custom Smooth Scroll Engine: Menggunakan kalkulasi requestAnimationFrame kustom dengan kurva easing presisi tanpa delay atau lag saat navigasi antar section.📱 Responsif & PWA-Ready: Tampilan responsif sempurna dari layar seluler hingga monitor beresolusi tinggi.🔄 Automated CI/CD Deployment: Terintegrasi penuh dengan GitHub Actions untuk penyebaran otomatis ke Hostinger via FTP setiap kali melakukan git push.🛠️ Teknologi & ToolsKategoriTeknologiFrameworkNext.js (React 18+)StylingTailwind CSS v4, Material Design 3 Design TokensIconsGoogle Material SymbolsAnimation EngineCustom JavaScript Smooth Scroll (requestAnimationFrame)HostingHostinger Shared Hosting (public_html)AutomationGitHub Actions (FTP Deploy Action)📁 Struktur Direktori Proyeklogos-creative/
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
🚀 Panduan Memulai (Local Development)1. PrasyaratPastikan kamu telah menginstal:Node.js versi 18.x atau lebih baru.npm atau yarn.2. InstalasiKloning repositori ini dan instal semua dependensi:git clone https://github.com/USERNAME_KAMU/logos-creative.git
cd logos-creative
npm install
3. Jalankan Server LokalJalankan server pengembangan lokal:npm run dev
Buka http://localhost:3000 di browser kamu untuk melihat hasilnya.📦 Build & DeploymentBuild ManualUntuk menghasilkan file statis siap rilis di dalam folder out/:npm run build
Semua isi di dalam folder out/ siap diunggah langsung ke direktori public_html di Hostinger.Deployment Otomatis (GitHub Actions)Repository ini sudah dilengkapi workflow deployment otomatis. Cukup tambahkan Secrets berikut di GitHub Repo (Settings > Secrets and variables > Actions):FTP_SERVER: FTP Hostname dari HostingerFTP_USERNAME: Username FTP HostingerFTP_PASSWORD: Password FTP HostingerSetiap kali melakukan push ke branch main, proyek akan otomatis di-build dan di-upload ke hosting:git add .
git commit -m "Update konten & komponen website"
git push origin main
📄 LisensiProyek ini dikembangkan khusus untuk Logos Creative. Seluruh hak cipta dilindungi.
