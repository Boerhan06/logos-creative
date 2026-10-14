"use client";

import { smoothScroll } from "../utils/smoothScroll";

const services = [
  {
    number: "01",
    title: "Social Media",
    desc: "Biar akun brand kamu bukan sekadar aktif, tetapi juga punya arah, karakter, dan alasan untuk diikuti.",
    icon: "public",
    gradient: "from-[#8a0709]/20 to-transparent",
    tags: ["Arah & Strategi Akun", "Karakter Konten", "Audience Engagement"],
  },
  {
    number: "02",
    title: "Creative Production",
    desc: "Dari ide di kepala sampai jadi konten yang siap tayang. Kami bantu menghidupkan konsep lewat video, foto, dan desain.",
    icon: "videocam",
    gradient: "from-[#6b1723]/20 to-transparent",
    tags: ["Produksi Video Reels/TikTok", "Aesthetic Photography", "Graphic Design"],
  },
  {
    number: "03",
    title: "Branding & Creative Direction",
    desc: "Membantu brand menemukan cara tampil dan berbicara yang terasa paling sesuai dengan dirinya.",
    icon: "palette",
    gradient: "from-[#521019]/20 to-transparent",
    tags: ["Brand Persona & Voice", "Visual System", "Creative Guidelines"],
  },
  {
    number: "04",
    title: "Campaign & Brand Activation",
    desc: "Membawa ide keluar dari layar dan menciptakan pengalaman yang bisa dirasakan langsung oleh audiens.",
    icon: "campaign",
    gradient: "from-[#3d0910]/20 to-transparent",
    tags: ["On-ground Activation", "Kolaborasi Kreatif", "Special Launch Campaign"],
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl max-w-[1440px] mx-auto w-full"
    >
      {/* Section 1: Bukan Cuma Bikin Konten */}
      <div className="rounded-[32px] bg-surface-container-low p-space-md sm:p-space-lg lg:p-space-xl mb-space-lg lg:mb-space-xl border border-outline-variant/30 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-label-sm uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-[16px]">lightbulb</span>
            <span>Bukan Cuma Bikin Konten</span>
          </div>

          <h2 className="text-headline-md sm:text-headline-lg lg:text-display-sm text-on-surface font-extrabold tracking-tight leading-tight">
            Konten bisa dibuat siapa saja.
          </h2>

          <p className="mt-4 text-body-md sm:text-body-lg text-on-surface-variant leading-relaxed">
            Tapi menemukan ide yang tepat, tahu apa yang mau disampaikan, dan
            membuatnya menarik untuk audiens?{" "}
            <span className="text-on-surface font-semibold">
              Nah, itu cerita yang berbeda.
            </span>
          </p>

          <p className="mt-3 text-body-md sm:text-body-lg text-on-surface-variant leading-relaxed">
            Kami suka mengulik ide, mencoba pendekatan baru, dan mencari cara supaya
            setiap brand punya sesuatu yang layak dilihat, didengar, dan diingat.
          </p>

          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-surface-container border-l-4 border-primary">
            <p className="text-body-md font-semibold text-on-surface">
              Karena kami nggak mau cuma jadi tim yang mengisi kalender posting.{" "}
              <span className="text-primary font-bold">
                Kami mau jadi tim yang bisa kamu andalkan.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: What We Do */}
      <div className="flex flex-col gap-space-md">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-label-md font-bold text-primary tracking-widest uppercase">
              SERVICES
            </span>
            <h3 className="text-headline-md sm:text-headline-lg text-on-surface font-extrabold tracking-tight mt-1">
              What We Do
            </h3>
          </div>
          <p className="text-body-sm sm:text-body-md text-on-surface-variant max-w-md">
            Empat pilar utama bagaimana kami menjadi support system menyeluruh bagi
            pertumbuhan brand Anda.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm lg:gap-space-md mt-2">
          {services.map((item) => (
            <div
              key={item.number}
              className="group rounded-[28px] bg-surface-container-lowest p-space-md lg:p-space-lg border border-outline-variant/30 hover:border-primary/40 shadow-sm hover:shadow-[0px_16px_36px_-6px_rgba(107,23,35,0.1)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-[26px]">
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-label-lg font-mono font-bold text-outline">
                    {item.number}
                  </span>
                </div>

                <h4 className="text-title-lg sm:text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                  {item.title}
                </h4>

                <p className="mt-3 text-body-md text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-outline-variant/20 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[12px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA: Lihat Apa yang Bisa Kita Kerjakan */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <a
            href="#portfolio"
            onClick={(e) => smoothScroll(e, "#portfolio")}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface hover:text-primary font-bold text-label-md transition-all duration-300 group shadow-xs hover:shadow-sm"
          >
            <span>Lihat Apa yang Bisa Kita Kerjakan</span>
            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-y-0.5">
              arrow_downward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
