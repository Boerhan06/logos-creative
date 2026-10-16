"use client";

import Image from "next/image";
import { getWhatsAppUrl } from "../utils/whatsapp";

const performanceHighlights = [
  {
    metric: "1M+",
    unit: "Tayangan Video",
    title: "Viral Video Kampanye",
    context: "Format Short-form Video (Reels & TikTok)",
    brand: "Kampanye Konten Terpilih",
    period: "Peak Record",
    desc: "Menembus batas algoritma organik dengan formulasi hook visual 3 detik pertama yang memicu rasa penasaran audiens luas.",
    icon: "visibility",
    tag: "Peak Performance",
  },
  {
    metric: "100K+",
    unit: "Tayangan Konsisten",
    title: "Sejumlah Konten Terpilih",
    context: "Lintas Akun Klien UMKM & Startup",
    brand: "Lifestyle, F&B & Retail Projects",
    period: "2024 - 2025",
    desc: "Jangkauan stabil yang dicapai berkat konsistensi pilar konten, gaya visual berkarakter, dan pemahaman jadwal rilis audiens aktif.",
    icon: "trending_up",
    tag: "Consistent Reach",
  },
  {
    metric: "Organik",
    unit: "Keterlibatan Nyata",
    title: "Percakapan & Respon Positif",
    context: "Komentar, Shares & Tanya Jawab",
    brand: "Komunitas Audiens Klien",
    period: "Continuous",
    desc: "Bukan sekadar angka tontonan pasif, konten dirancang memancing diskusi nyata, interaksi DM, dan antusiasme audiens terhadap produk.",
    icon: "forum",
    tag: "Meaningful Engagement",
  },
];

const analyticsScreenshots = [
  {
    src: "/images/results/analytics-stat-1m.jpg",
    caption: "TikTok Studio Viral Breakthrough: 1M Views • 6,403 Jam Total Play Time • 1.9K New Followers",
    highlight: "1M Views",
    client: "Viral Campaign Record",
  },
  {
    src: "/images/results/analytics-stat-222k.jpg",
    caption: "High Impact Reach: 222.6K Views • 1,430 Jam Play Time • 1.9K New Followers",
    highlight: "222.6K Views",
    client: "Retail & Apparel Launch",
  },
  {
    src: "/images/results/analytics-stat-5.jpg",
    caption: "TikTok Studio Viral Campaign: 956.2K Views • 6,078 Jam Total Play Time • 1.8K New Followers",
    highlight: "956.2K Views",
    client: "F&B & Lifestyle Campaign",
  },
  {
    src: "/images/results/analytics-stat-4.jpg",
    caption: "High Impact Reach: 121.8K Views • 647 Jam Play Time • 1.2K New Followers",
    highlight: "121.8K Views",
    client: "Retail & Apparel Launch",
  },
  {
    src: "/images/results/analytics-stat-3.jpg",
    caption: "Consistent Performance: 32.8K Views • 269 Jam Play Time • 28.0s Avg Watch Time",
    highlight: "High Retention",
    client: "Culinary & Dining Project",
  },
  {
    src: "/images/results/analytics-stat-2.jpg",
    caption: "Targeted Audience Growth: 22K Views • 57 Jam Play Time • 25.99% Full Watch Rate",
    highlight: "22K Views",
    client: "Brand Awareness Activation",
  },
  {
    src: "/images/results/analytics-stat-1.jpg",
    caption: "Stable Organic Reach: 12.9K Views • 26 Jam Play Time • 28.86% Watched Full",
    highlight: "Organic Reach",
    client: "Beauty & Personal Care",
  },
];

export default function Results() {
  const waUrl = getWhatsAppUrl();

  return (
    <section
      id="results"
      className="px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl max-w-[1440px] mx-auto w-full"
    >
      {/* Outer Card: Carries the Crimson Shadow and Rounded Radius - NO overflow:hidden */}
      <div className="relative rounded-[36px] crimson-card-shadow bg-primary">
        {/* Inner Container: Clips Blurs and Ambient Gradients cleanly to rounded corners on iOS Safari */}
        <div className="relative rounded-[36px] ios-clip-rounded p-space-md sm:p-space-lg lg:p-space-xl border border-white/15 text-white">
          {/* Ambient Background matching Hero */}
          <div
            className="absolute inset-0 pointer-events-none opacity-50 mix-blend-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "radial-gradient(circle at 75% 25%, #7a1523 0%, #5e0919 55%, #3b0d13 100%)",
            }}
          />
          <div className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-[#8a0f23]/35 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#6b1723]/30 rounded-full blur-[90px] pointer-events-none" />

        {/* Section Header */}
        <div className="reveal reveal-fade-up relative z-10 max-w-3xl">

          <h2 className="text-headline-md sm:text-headline-lg lg:text-display-sm font-extrabold tracking-tight text-white leading-tight">
            Angka Juga Punya Cerita.
          </h2>

          <div className="mt-4 text-body-md sm:text-body-lg text-white/80 leading-relaxed flex flex-col gap-3 font-normal">
            <p>
              Kami suka ide kreatif. Kami juga suka melihat bagaimana ide tersebut
              bekerja setelah dipublikasikan.
            </p>
            <p>
              Ada konten yang menjangkau lebih banyak orang, ada yang memancing
              percakapan, dan ada yang membantu brand mendapatkan perhatian baru.
            </p>
            <p className="font-semibold text-white">
              Berikut beberapa hasil nyata dari konten yang pernah kami kelola.
            </p>
          </div>
        </div>

        {/* Performance Highlights Grid */}
        <div className="stagger-container relative z-10 grid grid-cols-1 md:grid-cols-3 gap-space-md mt-8 sm:mt-12">
          {performanceHighlights.map((item) => (
            <div
              key={item.metric}
              className="reveal reveal-fade-up rounded-[28px] bg-white/10 border border-white/20 p-space-md sm:p-space-lg flex flex-col justify-between backdrop-blur-md hover:bg-white/15 hover:border-white/35 transition-all duration-300 group shadow-md"
            >
              <div>
                {/* Metric & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-bold uppercase tracking-wider border border-white/20">
                    {item.tag}
                  </span>
                  <span className="material-symbols-outlined text-white/40 group-hover:text-white transition-colors text-[24px]">
                    {item.icon}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[44px] sm:text-[52px] font-black tracking-tight text-white group-hover:text-[#ffdada] transition-colors leading-none">
                    {item.metric}
                  </span>
                  <span className="text-label-sm font-bold text-white/60">
                    {item.unit}
                  </span>
                </div>

                <h3 className="mt-3 text-title-md font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-body-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Context Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-1 text-[12px] text-white/60">
                <div className="flex items-center justify-between">
                  <span>Proyek:</span>
                  <span className="font-semibold text-white/80">{item.brand}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Periode:</span>
                  <span className="font-medium text-white/60">{item.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── BUKTI TANGKAPAN LAYAR ANALITIK / TESTIMONI PERFORMA ── */}
        <div className="reveal reveal-fade-up relative z-10 mt-10 sm:mt-14 pt-8 border-t border-white/10 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs uppercase font-bold text-[#ffdada] tracking-widest block">
                AUTHENTIC ANALYTICS SHOWCASE
              </span>
              <h3 className="text-title-lg sm:text-headline-sm font-extrabold text-white tracking-tight mt-1">
                Data Performa Asli Akun Klien Kami
              </h3>
            </div>
            <span className="text-xs text-white/60 font-medium">
              *Tangkapan layar live dari dashboard TikTok Studio
            </span>
          </div>

          {/* Collage of Analytics Testimonials */}
          <div className="stagger-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {analyticsScreenshots.map((shot, idx) => (
              <div
                key={idx}
                className="reveal reveal-scale-up group relative rounded-2xl overflow-hidden bg-black/20 hover:bg-black/30 border border-white/20 p-2 backdrop-blur-md shadow-md hover:border-white/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[9/16] w-full rounded-xl overflow-hidden bg-black/50 flex items-center justify-center">
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    className="w-full h-full object-contain object-top group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-bold text-white border border-white/20">
                    {shot.highlight}
                  </div>
                </div>

                <div className="p-2.5 flex flex-col gap-1">
                  <span className="text-xs font-bold text-white line-clamp-1">
                    {shot.client}
                  </span>
                  <p className="text-[11px] text-white/70 line-clamp-2 leading-relaxed">
                    {shot.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Narrative & Transparency Notice */}
        <div className="relative z-10 mt-10 sm:mt-12 p-space-md rounded-2xl bg-black/15 border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="max-w-2xl">
            <p className="text-body-md sm:text-body-lg text-white/90 leading-relaxed font-medium">
              Kami nggak bisa menjanjikan setiap konten akan viral. Tapi kami bisa
              terus mencari ide yang tepat, mengerjakannya dengan serius, dan belajar
              dari apa yang terjadi setelah konten tayang.
            </p>
            <span className="text-[12px] text-white/50 block mt-2">
              *Catatan: Hasil performa bergantung pada relevansi ide, algoritma
              platform, dan keterikatan audiens pada masing-masing sektor industri.
            </span>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-3 rounded-full bg-white text-primary hover:bg-[#fff0f2] font-bold text-label-md transition-all shadow-md active:scale-95 flex items-center gap-2"
          >
            <span>Diskusi Strategi Brand Kamu</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}
