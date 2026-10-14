"use client";

import { getWhatsAppUrl } from "../utils/whatsapp";
import { smoothScroll } from "../utils/smoothScroll";
import Logo from "./Logo";

export default function Hero() {
  const waUrl = getWhatsAppUrl();

  return (
    <section
      id="home"
      className="relative w-full px-margin-mobile lg:px-margin pt-6 lg:pt-10 pb-12 lg:pb-16 max-w-[1440px] mx-auto overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Hero Card Container */}
      <div className="relative rounded-[32px] lg:rounded-[40px] bg-gradient-to-b from-[#180407] via-[#24080d] to-[#120204] text-white p-space-md sm:p-space-lg lg:p-space-xl shadow-[0px_24px_60px_-12px_rgba(107,23,35,0.35)] border border-primary/20 overflow-hidden">
        {/* Background Decorative Grid & Watermark */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient Maroon Flare */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/40 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#8a0709]/30 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto py-6 lg:py-10">
          {/* Eyebrow / Concept Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#ff4d64] animate-pulse" />
            <span className="text-label-sm lg:text-label-md font-bold tracking-widest uppercase text-white/95">
              YOUR SUPPORT SYSTEM
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[38px] sm:text-[54px] lg:text-[72px] font-black tracking-tight uppercase leading-[1.05] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            HELLO BRAND OWNER!
          </h1>

          {/* Subheadline & Lead */}
          <p className="text-title-lg sm:text-headline-sm font-semibold text-[#ffb3bc] mt-3 tracking-tight">
            Your Support System
          </p>

          {/* Deskripsi */}
          <div className="mt-6 text-body-md sm:text-body-lg text-white/80 max-w-2xl leading-relaxed flex flex-col gap-3 font-normal">
            <p>
              Kami di sini untuk membantu brand menemukan ide, bikin sesuatu yang
              menarik, dan mewujudkannya jadi karya nyata.
            </p>
            <p className="text-white/70 text-body-sm sm:text-body-md">
              Mulai dari media sosial, produksi konten, sampai aktivasi brand, kami
              siap jadi tim di balik layar yang ikut memikirkan, mengerjakan, dan
              mengembangkan brand kamu.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primary CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-[#8a0709] text-white font-extrabold text-label-lg shadow-[0_10px_25px_-5px_rgba(107,23,35,0.6)] hover:shadow-[0_12px_30px_-5px_rgba(107,23,35,0.8)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <span>Punya ide? Yuk, ngobrol.</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-[20px]">
                  chat
                </span>
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#what-we-do"
              onClick={(e) => smoothScroll(e, "#what-we-do")}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white font-semibold text-label-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Lihat Apa yang Kita Kerjakan</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_downward
              </span>
            </a>
          </div>

          {/* Visual Trust Indicator */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/70 text-label-sm font-medium">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-[#ff8090]">
                psychology
              </span>
              <span>Teman Berpikir & Strategi</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-[#ff8090]">
                movie_filter
              </span>
              <span>Produksi Konten Kreatif</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-[#ff8090]">
                hub
              </span>
              <span>Aktivasi & Pertumbuhan Brand</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
