"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export const teamMembers = [
  {
    name: "Gunawan",
    role: "Chief Executive Officer (CEO)",
    category: "Leadership",
    image: "/images/team-web/gunawan-ceo.webp",
    description: "Memimpin visi strategis, pertumbuhan bisnis, dan arah kreatif Logos Creative.",
  },
  {
    name: "Clayren",
    role: "Social Media Specialist",
    category: "Creative",
    image: "/images/team-web/clayren-content-creator.webp",
    description: "Mengembangkan strategi konten media sosial, riset tren terkini, dan optimasi interaksi audiens brand.",
  },
  {
    name: "Glen",
    role: "Operational Management",
    category: "Operations",
    image: "/images/team-web/glen-operational.webp",
    description: "Memastikan timeline, alur kerja produksi, dan eksekusi proyek berjalan presisi.",
  },
  {
    name: "Fara",
    role: "KOL Specialist & Talent Director",
    category: "Talent Lead",
    image: "/images/team-web/fara-head-of-talent.webp",
    description: "Mengkurasi, mengarahkan talenta brand, serta mengelola kolaborasi strategis bersama KOL & influencer.",
  },
  {
    name: "Burhan",
    role: "Graphic Design & Video Editor",
    category: "Creative",
    image: "/images/team-web/burhan-design-editor.webp",
    description: "Menerjemahkan ide ke dalam visual modern, motion dinamis, dan editing video berirama tinggi.",
  },
  {
    name: "Jacelyn",
    role: "Chief Content Officer (CCO)",
    category: "Leadership",
    image: "/images/team-web/jacelyn-cco.webp",
    description: "Merancang storytelling, standar estetika, dan narasi konten brand.",
  },
  {
    name: "Felicia",
    role: "Talent",
    category: "Talent",
    image: "/images/team-web/felicia-talent.webp",
    description: "Membawakan pesan brand dengan autentik, komunikatif, dan memikat audiens.",
  },
  {
    name: "Ordelia",
    role: "Talent",
    category: "Talent",
    image: "/images/team-web/ordelia-talent.webp",
    description: "Ekspresif di depan kamera untuk menghidupkan karakter kampanye produk klien.",
  },
];

export default function TeamModal({ isOpen, onClose }) {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const categories = ["Semua", "Leadership", "Creative", "Talent", "Operations"];

  const filteredMembers =
    activeFilter === "Semua"
      ? teamMembers
      : teamMembers.filter((m) =>
          activeFilter === "Talent"
            ? m.category === "Talent" || m.category === "Talent Lead"
            : m.category === activeFilter
        );

  // Close on ESC key and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 lg:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-modal-title"
    >
      {/* Apple-style Frosted Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-[28px] sm:rounded-[36px] bg-[#1a0509]/95 border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.85)] overflow-hidden text-white z-10 animate-scaleUp">
        {/* Ambient Top Glow */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#8a0f23]/30 rounded-full blur-[100px] pointer-events-none"
        />

        {/* Modal Header */}
        <div className="relative z-10 px-6 sm:px-8 pt-6 sm:pt-8 pb-4 border-b border-white/10 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ffb3b5] animate-pulse" />
              <span className="text-[11px] sm:text-label-sm font-bold tracking-widest uppercase text-[#ffdada]">
                LOGOS CREATIVE FAMILY
              </span>
            </div>
            <h2
              id="team-modal-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white"
            >
              Meet The Creative Team
            </h2>
            <p className="text-xs sm:text-body-sm text-white/70 mt-1">
              Teman berpikir, tim eksekusi, dan orang-orang kreatif di balik setiap strategi &amp; karya.
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Tutup popup"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white/80 hover:text-white border border-white/15 flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[20px] sm:text-[22px]">
              close
            </span>
          </button>
        </div>

        {/* Filter Badges */}
        <div className="relative z-10 px-6 sm:px-8 py-3 bg-black/20 border-b border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 shrink-0 cursor-pointer ${
                activeFilter === cat
                  ? "bg-white text-primary shadow-sm"
                  : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="text-[11px] text-white/50 ml-auto hidden sm:block">
            {filteredMembers.length} Tim
          </span>
        </div>

        {/* Scrollable Team Grid */}
        <div className="relative z-10 p-5 sm:p-8 overflow-y-auto max-h-[calc(92vh-180px)] custom-scrollbar">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredMembers.map((member) => (
              <div
                key={member.name}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#5e0919] via-[#3d0611] to-[#1a0307] border border-[#ffb3b5]/25 hover:border-[#ffb3b5]/55 shadow-[0_12px_28px_rgba(94,9,25,0.45)] hover:shadow-[0_18px_42px_rgba(94,9,25,0.7)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Ambient glow matching Hero card */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-35 mix-blend-screen"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 25%, rgba(255, 218, 218, 0.35) 0%, rgba(138, 15, 35, 0.45) 50%, transparent 80%)",
                  }}
                />

                {/* Photo Frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#240409]">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Scrim for seamless blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0307] via-transparent to-[#5e0919]/25 pointer-events-none" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#3d0611]/85 backdrop-blur-md border border-[#ffb3b5]/30 text-[10px] font-bold text-[#ffdada] shadow-sm">
                    {member.category}
                  </div>
                </div>

                {/* Member Info */}
                <div className="relative z-10 p-3.5 sm:p-4 flex flex-col gap-1 bg-[#140205]/80 backdrop-blur-md border-t border-white/10 flex-1 justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight group-hover:text-[#ffdada] transition-colors">
                      {member.name}
                    </h3>
                    <span className="text-[11px] sm:text-xs font-bold text-[#ffb3b5] leading-snug block mt-0.5">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/75 leading-relaxed mt-1 line-clamp-2">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="relative z-10 px-6 sm:px-8 py-4 border-t border-white/10 bg-black/30 flex items-center justify-between text-xs text-white/60">
          <span>Logos Creative • Kolaborasi &amp; Eksekusi Handal</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white/15 hover:bg-white text-white hover:text-primary font-bold text-xs transition-all duration-200 cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
