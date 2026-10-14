"use client";

import { getWhatsAppUrl } from "../utils/whatsapp";

const performanceHighlights = [
  {
    metric: "956K+",
    unit: "Tayangan Video",
    title: "Viral Video Kampanye",
    context: "Format Short-form Video (Reels & TikTok)",
    brand: "Kampanye Konten F&B Terpilih",
    period: "Q3 2024",
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

export default function Results() {
  const waUrl = getWhatsAppUrl();

  return (
    <section
      id="results"
      className="px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl max-w-[1440px] mx-auto w-full"
    >
      <div className="rounded-[36px] bg-gradient-to-b from-[#1b060a] via-[#150306] to-[#0d0103] p-space-md sm:p-space-lg lg:p-space-xl border border-primary/25 text-white shadow-[0px_24px_50px_-10px_rgba(107,23,35,0.3)] relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ff8090] font-bold text-label-sm uppercase tracking-wider mb-4 border border-white/10">
            <span className="material-symbols-outlined text-[16px]">monitoring</span>
            <span>RESULTS & PERFORMANCE</span>
          </div>

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
              Berikut beberapa hasil dari konten yang pernah kami kerjakan.
            </p>
          </div>
        </div>

        {/* Performance Highlights Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-space-md mt-8 sm:mt-12">
          {performanceHighlights.map((item) => (
            <div
              key={item.metric}
              className="rounded-[28px] bg-white/5 border border-white/10 p-space-md sm:p-space-lg flex flex-col justify-between backdrop-blur-md hover:bg-white/[0.08] hover:border-primary/40 transition-all duration-300 group shadow-sm"
            >
              <div>
                {/* Metric & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-[#ffb3bc] text-[11px] font-bold uppercase tracking-wider border border-primary/30">
                    {item.tag}
                  </span>
                  <span className="material-symbols-outlined text-white/40 group-hover:text-primary transition-colors text-[24px]">
                    {item.icon}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[44px] sm:text-[52px] font-black tracking-tight text-white group-hover:text-[#ff8090] transition-colors leading-none">
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

        {/* Closing Narrative & Transparency Notice */}
        <div className="relative z-10 mt-8 sm:mt-12 p-space-md rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
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
            className="shrink-0 px-7 py-3 rounded-full bg-white text-[#180407] hover:bg-white/90 font-bold text-label-md transition-all shadow-md active:scale-95 flex items-center gap-2"
          >
            <span>Diskusi Strategi Brand Kamu</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
