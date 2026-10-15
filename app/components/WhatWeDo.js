"use client";

import { smoothScroll } from "../utils/smoothScroll";

const services = [
  {
    number: "01",
    title: "Social Media",
    desc: "Biar akun brand kamu bukan sekadar aktif, tetapi juga punya arah, karakter, dan alasan untuk diikuti.",
    icon: "public",
    tags: ["Arah & Strategi Akun", "Karakter Konten", "Audience Engagement"],
  },
  {
    number: "02",
    title: "Creative Production",
    desc: "Dari ide di kepala sampai jadi konten yang siap tayang. Kami bantu menghidupkan konsep lewat video, foto, dan desain.",
    icon: "videocam",
    tags: ["Produksi Video Reels/TikTok", "Aesthetic Photography", "Graphic Design"],
  },
  {
    number: "03",
    title: "Branding & Creative Direction",
    desc: "Membantu brand menemukan cara tampil dan berbicara yang terasa paling sesuai dengan dirinya.",
    icon: "palette",
    tags: ["Brand Persona & Voice", "Visual System", "Creative Guidelines"],
  },
  {
    number: "04",
    title: "Campaign & Brand Activation",
    desc: "Membawa ide keluar dari layar dan menciptakan pengalaman yang bisa dirasakan langsung oleh audiens.",
    icon: "campaign",
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
      <div className="rounded-[32px] bg-surface-container-low p-6 sm:p-8 lg:p-10 mb-8 lg:mb-12 border border-outline-variant/30 shadow-xs relative overflow-hidden">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-2">
            Bukan Cuma Bikin Konten
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-on-surface font-black tracking-tight leading-tight">
            Konten bisa dibuat siapa saja.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Tapi menemukan ide yang tepat, tahu apa yang mau disampaikan, dan
            membuatnya menarik untuk audiens?{" "}
            <span className="text-on-surface font-bold">
              Nah, itu cerita yang berbeda.
            </span>
          </p>

          <p className="mt-3 text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Kami suka mengulik ide, mencoba pendekatan baru, dan mencari cara supaya
            setiap brand punya sesuatu yang layak dilihat, didengar, dan diingat.
          </p>

          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white border border-outline-variant/20 shadow-xs">
            <p className="text-sm sm:text-base font-semibold text-on-surface">
              Karena kami nggak mau cuma jadi tim yang mengisi kalender posting.{" "}
              <span className="text-primary font-bold">
                Kami mau jadi tim yang bisa kamu andalkan.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: What We Do */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-primary tracking-widest uppercase block">
              SERVICES
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-on-surface font-black tracking-tight mt-1">
              What We Do
            </h3>
          </div>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-md leading-relaxed">
            Empat pilar utama bagaimana kami menjadi support system menyeluruh bagi
            pertumbuhan brand Anda.
          </p>
        </div>

        {/* 4 Cards Grid - Refined with clean white container, rich maroon icon badges & subtle hover dynamics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-2">
          {services.map((item) => (
            <div
              key={item.number}
              className="group relative rounded-[28px] bg-white p-6 sm:p-8 border border-outline-variant/30 hover:border-primary/40 shadow-xs hover:shadow-[0px_16px_36px_-6px_rgba(94,9,25,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#5e0919]/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xs">
                    <span className="material-symbols-outlined text-[26px]">
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-sm font-mono font-bold text-on-surface-variant/40 group-hover:text-primary transition-colors">
                    {item.number}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-outline-variant/20 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-xs font-semibold group-hover:bg-[#5e0919]/5 group-hover:text-primary transition-colors"
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
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-primary hover:bg-[#7a0d22] text-white font-bold text-sm sm:text-base transition-all duration-300 group shadow-md hover:shadow-lg hover:-translate-y-0.5"
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
