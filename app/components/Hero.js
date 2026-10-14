"use client";

import Image from "next/image";
import { getWhatsAppUrl } from "../utils/whatsapp";
import { smoothScroll } from "../utils/smoothScroll";
import Logo from "./Logo";

export default function Hero() {
  const waUrl = getWhatsAppUrl();

  return (
    <section
      id="home"
      className="relative w-full px-margin-mobile lg:px-margin pt-4 sm:pt-6 lg:pt-8 pb-10 sm:pb-12 lg:pb-16 max-w-[1440px] mx-auto overflow-hidden"
    >
      {/* ── Outer Hero Showcase Container ── */}
      <div className="relative w-full rounded-2xl sm:rounded-[36px] lg:rounded-[44px] shadow-[0px_20px_50px_-10px_rgba(77,0,16,0.38)] overflow-hidden bg-primary p-6 sm:p-10 lg:p-14 min-h-[580px] lg:min-h-[640px] flex flex-col justify-between">
        
        {/* Ambient Fluid Silk Wave Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "radial-gradient(circle at 75% 30%, rgb(107, 23, 35) 0%, rgb(59, 13, 19) 55%, rgb(39, 9, 13) 100%)",
          }}
        />

        {/* Vector Subtle Top Wave Overlay */}
        <svg
          className="absolute top-0 right-0 w-[70%] h-full pointer-events-none opacity-20 text-primary-fixed-dim"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 800 600"
        >
          <path
            d="M100 0C300 120 450 80 600 240C750 400 850 150 900 0V600H0C80 420 180 200 100 0Z"
            fill="url(#hero-gradient)"
          />
          <defs>
            <linearGradient id="hero-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#6b1723" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#4d0010" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#27090d" stopOpacity="0.95" />
            </linearGradient>
          </defs>
        </svg>

        {/* ── Top Mini Indicator / Status Bar ── */}
        <div className="relative z-10 flex items-center justify-between w-full mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
            <span className="text-[11px] sm:text-[12px] uppercase tracking-wider text-primary-fixed font-bold">
              YOUR SUPPORT SYSTEM
            </span>
          </div>
          <div className="flex items-center gap-2 text-surface-container-highest/60 text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase">
            <span>SELECTED WORKS</span>
            <span>•</span>
            <span>LOGOS CREATIVE</span>
          </div>
        </div>

        {/* ── Hero Main Content Grid ── */}
        <div className="relative z-10 grid grid-cols-12 gap-y-8 lg:gap-x-10 items-center my-auto">
          {/* Left Column: Typography & CTAs */}
          <div className="col-span-12 xl:col-span-7 flex flex-col gap-4 sm:gap-5 max-w-2xl">
            {/* Step indicator pill */}
            <div className="inline-flex items-center gap-2.5 w-fit">
              <span className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-bold shrink-0">
                1
              </span>
              <span className="text-xs sm:text-sm text-secondary-fixed uppercase tracking-wider font-bold">
                AGENCY KREATIF &amp; PARTNER STRATEGIS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] text-on-primary font-extrabold tracking-tight leading-[1.1] uppercase">
              HELLO BRAND OWNER!
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-2xl text-secondary-container font-semibold tracking-tight -mt-1 sm:-mt-2">
              Your Support System
            </p>

            {/* Description */}
            <div className="text-sm sm:text-base text-primary-fixed font-normal leading-relaxed flex flex-col gap-2.5 max-w-xl">
              <p>
                Kami di sini untuk membantu brand menemukan ide, bikin sesuatu yang
                menarik, dan mewujudkannya jadi karya nyata.
              </p>
              <p className="text-primary-fixed/80 text-xs sm:text-sm">
                Mulai dari media sosial, produksi konten, sampai aktivasi brand, kami
                siap jadi tim di balik layar yang ikut memikirkan, mengerjakan, dan
                mengembangkan brand kamu.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 sm:pt-4">
              {/* Primary Consultation Button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-surface-container-lowest text-primary font-bold text-sm sm:text-base px-7 py-3.5 shadow-md hover:bg-surface-bright transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Punya ide? Yuk, ngobrol.</span>
              </a>

              {/* Secondary Button */}
              <a
                href="#what-we-do"
                onClick={(e) => smoothScroll(e, "#what-we-do")}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-on-primary font-semibold text-sm sm:text-base px-6 py-3.5 transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[18px]">
                  play_circle
                </span>
                <span>Lihat Yang Kita Kerjakan</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Team Photo
              Hidden on mobile and on screens smaller than 1280px (xl breakpoint) 
              so when zoomed 110%+ or on mobile/tablet, the layout cleanly hides the photo
              leaving the content elegant and non-cluttered */}
          <div className="hidden xl:flex col-span-5 relative justify-end items-end h-full">
            <div className="relative w-full max-w-[440px] aspect-[4/5] flex items-end justify-center pointer-events-none select-none">
              <img
                src="/images/team-hero.png"
                alt="Tim Logos Creative"
                className="w-full h-auto object-contain max-h-[500px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>

        {/* ── Bottom Floating Badge & Micro Stats ── */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pt-6 sm:pt-8 mt-4 border-t border-white/10">
          {/* Micro Stats */}
          <div className="flex items-center gap-6 sm:gap-8 text-on-primary">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-white">48+</span>
              <span className="text-[11px] sm:text-xs text-primary-fixed-dim uppercase tracking-wider font-semibold">
                Brand Partner
              </span>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-white">100%</span>
              <span className="text-[11px] sm:text-xs text-primary-fixed-dim uppercase tracking-wider font-semibold">
                Dedikasi Penuh
              </span>
            </div>
          </div>

          {/* Overlapping Frosted Glass Pill Card */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface/95 backdrop-blur-xl rounded-2xl p-2.5 sm:p-3 shadow-[0px_10px_30px_-4px_rgba(107,23,35,0.25)] flex items-center gap-3 sm:gap-4 text-on-surface hover:shadow-lg transition-all duration-200 group max-w-full"
          >
            {/* Stacked Avatars / Badges */}
            <div className="flex -space-x-2.5 overflow-hidden pl-1 shrink-0">
              <div className="inline-block h-9 w-9 rounded-full bg-secondary-fixed flex items-center justify-center text-xs font-bold text-on-secondary-fixed shadow-sm">
                LV
              </div>
              <div className="inline-block h-9 w-9 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shadow-sm">
                LC
              </div>
              <div className="inline-block h-9 w-9 rounded-full bg-secondary-container text-white flex items-center justify-center text-xs font-bold shadow-sm">
                AT
              </div>
            </div>

            <div className="flex flex-col pr-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                <span className="text-xs font-bold text-primary truncate">
                  Ditangani oleh Tim Kreatif Ahli
                </span>
              </div>
              <span className="text-xs text-on-surface-variant font-medium truncate">
                Spesialis Branding, Desain &amp; Video Editor
              </span>
            </div>

            <div className="w-9 h-9 rounded-full bg-surface-container-high group-hover:bg-primary group-hover:text-white flex items-center justify-center text-on-surface transition-all duration-200 shrink-0">
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
