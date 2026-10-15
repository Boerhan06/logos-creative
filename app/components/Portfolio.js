"use client";

import { useState } from "react";
import { getWhatsAppUrl } from "../utils/whatsapp";
import { smoothScroll } from "../utils/smoothScroll";

const portfolioProjects = [
  {
    id: "madame-arumantara",
    brand: "Madame Arumantara",
    logo: "/images/clients/madame-arumantara.jpg",
    type: "Creative Production & Social Media",
    hasVideo: true,
    summary:
      "Dari menu andalan sampai suasana restoran, setiap konten dirancang untuk memperkenalkan hal-hal yang membuat brand ini layak dikunjungi.",
    challenge:
      "Memperkenalkan pengalaman kuliner dining khas yang autentik dan menarik perhatian pecinta kuliner di tengah persaingan restoran yang padat.",
    approach:
      "Menonjolkan detail estetika visual, atmosfer tempat yang nyaman, serta video cinematic food preparation yang menggugah selera.",
    result:
      "Peningkatan jangkauan konten lokal, peningkatan reservasi dining, dan interaksi organik audiens yang konsisten.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=600&fit=crop&q=80",
    tags: ["Food Cinematography", "Ambiance Showcase", "Reels Storytelling"],
  },
  {
    id: "sour-sally",
    brand: "Sour Sally Group",
    logo: "/images/clients/sour-sally-group.png",
    type: "Campaign & Content Production",
    summary:
      "Mengemas kesegaran produk ikonik dalam format visual reels yang fun, relatable, dan memicu rasa ingin mencoba bagi generasi muda.",
    challenge:
      "Menjaga relevansi brand legendaris dengan tren konten cepat di media sosial TikTok dan Instagram.",
    approach:
      "Merancang konsep video pendek dengan visual hook kuat pada 3 detik pertama dan visual pouring yang memanjakan mata.",
    result:
      "Konten viral dengan ratusan ribu tayangan organik dan peningkatan antusiasme pengunjung di outlet.",
    image:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=900&h=600&fit=crop&q=80",
    tags: ["Viral Video Hook", "Youth Engagement", "Short-form Content"],
  },
  {
    id: "coco-malatang",
    brand: "Coco Malatang",
    logo: "/images/clients/coco-malatang.jpeg",
    type: "Social Media Direction & Video",
    summary:
      "Memperkenalkan konsep hotpot malatang yang customizable melalui format video santai, menggoda, dan informatif.",
    challenge:
      "Banyak calon pelanggan yang belum paham cara menimbang bahan dan memilih kuah mala yang sesuai dengan toleransi pedas mereka.",
    approach:
      "Membikin seri konten panduan 'Cara Makan & Racik Sendiri' dengan sound effect ASMR yang memikat dan review jujur.",
    result:
      "Edukasi menu sukses tersampaikan dan mendorong kunjungan langsung pelanggan baru ke outlet.",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=900&h=600&fit=crop&q=80",
    tags: ["Food ASMR", "Step-by-Step Guide", "Culinary Storytelling"],
  },
  {
    id: "newlab",
    brand: "Newlab",
    logo: "/images/clients/client-newlab.png",
    type: "Creative Direction & Beauty Production",
    summary:
      "Menyajikan solusi perawatan tubuh dan kecantikan dalam narasi visual yang bersih, estetik, dan meyakinkan.",
    challenge:
      "Membangun kredibilitas produk perawatan harian di tengah audiens yang kritis terhadap klaim kecantikan.",
    approach:
      "Produksi video estetis dengan pencahayaan studio bersih, demonstrasi tekstur produk secara makro, dan edukasi manfaat bahan aktif.",
    result:
      "Peningkatan engagement rate di feed dan konversi checkout produk dari audiens media sosial.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&h=600&fit=crop&q=80",
    tags: ["Macro Texture Shot", "Clean Aesthetics", "Product Showcase"],
  },
  {
    id: "tomaple",
    brand: "Tomaple",
    logo: "/images/clients/client-tomaple.webp",
    type: "Branding Visuals & Social Media",
    hasVideo: true,
    summary:
      "Membawa citra artisan donut dan kopi ke ranah gaya hidup harian yang hangat dan memanjakan lidah.",
    challenge:
      "Menegaskan positioning Tomaple sebagai artisan bakery berkualitas tinggi untuk camilan keluarga dan hampers spesial.",
    approach:
      "Editorial food styling bernuansa hangat, menonjolkan kelembutan tekstur donat, dan momen berbagi bersama orang terkasih.",
    result:
      "Peningkatan interaksi DM untuk pemesanan hampers dan kunjungan kafe yang stabil.",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=900&h=600&fit=crop&q=80",
    tags: ["Artisan Bakery", "Warm Editorial", "Lifestyle Framing"],
  },
  {
    id: "mahjong-society",
    brand: "Mahjong Society",
    logo: "/images/clients/mahjong-society.png",
    type: "Brand Identity & Community Activation",
    summary:
      "Membangun identitas ruang komunal rekreasi yang modis, dinamis, dan menjadi tempat berkumpul favorit komunitas urban.",
    challenge:
      "Mengubah persepsi permainan tradisional menjadi hiburan sosial modern yang estetik dan instagrammable.",
    approach:
      "Desain visual retro-modern berkarakter berani, konten video keseruan bermain bersama teman, serta aktivasi turnamen komunitas.",
    result:
      "Komunitas aktif yang terus tumbuh dan occupancy meja permainan yang penuh setiap akhir pekan.",
    image:
      "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=900&h=600&fit=crop&q=80",
    tags: ["Community Hub", "Retro-Modern Style", "Brand Activation"],
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const waUrl = getWhatsAppUrl();

  return (
    <section
      id="portfolio"
      className="px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl max-w-[1440px] mx-auto w-full"
    >
      <div className="flex flex-col gap-space-md lg:gap-space-lg">
        {/* Header */}
        <div className="reveal reveal-fade-up max-w-3xl">
          <span className="text-label-md font-bold text-primary tracking-widest uppercase">
            PORTFOLIO
          </span>
          <h2 className="text-headline-md sm:text-headline-lg lg:text-display-sm text-on-surface font-extrabold tracking-tight mt-1 leading-tight">
            Cukup Cerita. Sekarang Lihat Karyanya.
          </h2>

          <div className="mt-4 text-body-md sm:text-body-lg text-on-surface-variant leading-relaxed flex flex-col gap-2">
            <p>
              Ide-ide yang pernah kami pikirkan, konten yang pernah kami produksi,
              dan proyek yang kami kerjakan bersama klien.
            </p>
            <p>
              Ada banyak cara untuk membuat sebuah ide jadi nyata. Di sini, kamu bisa
              melihat beberapa cara yang kami pilih.
            </p>
          </div>

          {/* Quick link to Video Reels */}
          <div className="mt-5">
            <a
              href="#videos"
              onClick={(e) => smoothScroll(e, "#videos")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 text-label-sm font-bold transition-all duration-200 group"
            >
              <span className="material-symbols-outlined text-[18px]">
                videocam
              </span>
              <span>Lihat 5 Featured Video Reels Hasil Produksi</span>
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-0.5">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="stagger-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md mt-4">
          {portfolioProjects.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedProject(item)}
              className="reveal reveal-fade-up group rounded-[28px] bg-surface-container-lowest p-space-xs border border-outline-variant/30 hover:border-primary/40 shadow-xs hover:shadow-[0px_20px_40px_-6px_rgba(107,23,35,0.12)] transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full h-60 sm:h-64 rounded-2xl overflow-hidden bg-surface-container">
                <img
                  src={item.image}
                  alt={`Karya ${item.brand}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Brand Logo Floating Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm">
                  <div className="w-5 h-5 rounded-full overflow-hidden bg-white shrink-0">
                    <img
                      src={item.logo}
                      alt={item.brand}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[12px] font-bold text-on-surface">
                    {item.brand}
                  </span>
                </div>

                {/* Video Reel Badge if Available */}
                {item.hasVideo && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/90 text-white backdrop-blur-md shadow-sm text-[11px] font-bold">
                    <span className="material-symbols-outlined text-[14px]">
                      videocam
                    </span>
                    <span>Reel Video</span>
                  </div>
                )}

                {/* Project Type Badge */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-semibold text-white/80 uppercase tracking-wider block">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-title-md font-bold text-on-surface group-hover:text-primary transition-colors">
                    {item.brand}
                  </h3>
                  <p className="mt-2 text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                  <span className="text-label-sm font-bold text-primary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Lihat Proyek</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </span>
                  <span className="text-[11px] text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-full">
                    Detail Kasus
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Detail Proyek */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-surface rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-space-md sm:p-space-lg shadow-2xl border border-outline-variant animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-white border border-outline-variant/30 p-1 shrink-0">
                    <img
                      src={selectedProject.logo}
                      alt={selectedProject.brand}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-title-lg font-bold text-on-surface">
                      {selectedProject.brand}
                    </h3>
                    <span className="text-label-sm text-primary font-semibold">
                      {selectedProject.type}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              {/* Image Banner */}
              <div className="mt-4 w-full h-56 sm:h-72 rounded-2xl overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.brand}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Breakdown */}
              <div className="mt-6 flex flex-col gap-4 text-body-md text-on-surface-variant">
                <div>
                  <h4 className="text-label-md font-bold text-on-surface uppercase tracking-wider">
                    Gambaran Singkat Proyek
                  </h4>
                  <p className="mt-1 leading-relaxed">{selectedProject.summary}</p>
                </div>

                <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20">
                  <h4 className="text-label-md font-bold text-on-surface uppercase tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      flag
                    </span>
                    <span>Tantangan & Kebutuhan Klien</span>
                  </h4>
                  <p className="mt-1.5 leading-relaxed text-body-sm">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20">
                  <h4 className="text-label-md font-bold text-on-surface uppercase tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      tips_and_updates
                    </span>
                    <span>Ide & Pendekatan yang Dipilih</span>
                  </h4>
                  <p className="mt-1.5 leading-relaxed text-body-sm">
                    {selectedProject.approach}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20">
                  <h4 className="text-label-md font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">
                      trending_up
                    </span>
                    <span>Hasil Proyek</span>
                  </h4>
                  <p className="mt-1.5 leading-relaxed text-body-sm text-on-surface">
                    {selectedProject.result}
                  </p>
                </div>

                {selectedProject.hasVideo && (
                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          videocam
                        </span>
                      </div>
                      <div>
                        <span className="text-body-sm font-bold text-on-surface block">
                          Video Reel Asli Tersedia
                        </span>
                        <span className="text-[12px] text-on-surface-variant">
                          Tonton format video vertical reel yang kami produksi untuk brand ini.
                        </span>
                      </div>
                    </div>
                    <a
                      href="#videos"
                      onClick={(e) => {
                        setSelectedProject(null);
                        smoothScroll(e, "#videos");
                      }}
                      className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary-container transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm shrink-0"
                    >
                      <span>Tonton Reel</span>
                      <span className="material-symbols-outlined text-[15px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                )}
              </div>

              {/* Modal CTA */}
              <div className="mt-6 pt-4 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-body-sm text-on-surface-variant">
                  Ingin proyek kreatif seperti ini untuk brand Anda?
                </span>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-primary text-white font-bold text-label-md text-center hover:bg-primary-container transition-colors shadow-sm"
                >
                  Diskusi Ide Sekarang
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
