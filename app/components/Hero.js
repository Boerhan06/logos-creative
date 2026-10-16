"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { getWhatsAppUrl } from "../utils/whatsapp";
import { smoothScroll } from "../utils/smoothScroll";

export default function Hero() {
  const [showTeam, setShowTeam] = useState(true);
  const baseDPR = useRef(null); // Simpan devicePixelRatio awal agar zoom dihitung relatif terhadap OS scaling
  const waUrl = getWhatsAppUrl();

  useEffect(() => {
    // Baseline OS scaling yang umum digunakan di Windows & Mac:
    const standardScales = [1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5];
    const getBaseDPR = (dpr) => {
      let closest = standardScales[0];
      let minDiff = Math.abs(dpr - closest);
      for (const scale of standardScales) {
        const diff = Math.abs(dpr - scale);
        if (diff < minDiff) {
          minDiff = diff;
          closest = scale;
        }
      }
      return closest;
    };

    const updateVisibility = () => {
      if (typeof window === "undefined") return;

      // 1. Cek Mobile: layar di bawah 768px (HP/tablet kecil) pasti dihilangkan
      const isMobile = window.innerWidth < 768;

      // 2. Cek Browser Zoom secara presisi:
      // Di Chrome/Edge, zoom mengubah window.devicePixelRatio secara proporsional.
      // Kita hitung zoomFactor relatif terhadap OS baseline scale.
      const currentDPR = window.devicePixelRatio || 1;
      if (!baseDPR.current) {
        baseDPR.current = getBaseDPR(currentDPR);
      }

      const zoomFactor = currentDPR / baseDPR.current;

      // Zoom 100% (~1.00) & 110% (~1.10) => TAMPIL
      // Zoom > 110% (misal 125% -> 1.25, 150% -> 1.50) => HILANG
      const isOverZoom = zoomFactor > 1.18;

      setShowTeam(!isMobile && !isOverZoom);
    };

    updateVisibility();
    window.addEventListener("resize", updateVisibility);
    return () => window.removeEventListener("resize", updateVisibility);
  }, []);

  return (
    <section
      id="hero"
      className="w-full relative px-margin-mobile lg:px-margin pt-space-xs lg:pt-space-md pb-space-lg lg:pb-space-xl"
    >
      <div id="home" className="absolute -top-24 pointer-events-none" />
      {/* Outer Card: Carries the Crimson Shadow and Rounded Radius - NO overflow:hidden so shadow is never clipped */}
      <div className="relative w-full rounded-[28px] lg:rounded-xl crimson-card-shadow bg-primary max-w-[1440px] mx-auto">
        {/* Inner Container: Clips Video, Gradients, and Blurs cleanly to rounded corners on iOS Safari */}
        <div className="relative w-full rounded-[28px] lg:rounded-xl ios-clip-rounded flex flex-col justify-between min-h-[600px] sm:min-h-[540px] lg:min-h-[600px] xl:min-h-[620px] p-space-md lg:p-space-xl">
          {/* Ambient Video Background */}
          <div className="absolute inset-0 pointer-events-none z-0 ios-clip-rounded">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover rounded-[28px] lg:rounded-xl filter brightness-[1.50] contrast-[1.05] saturate-[0.7]"
              style={{ objectPosition: 'center 30%' }}
            >
              <source src="/Video/hero-bg.mp4" type="video/mp4" />
              <source src="/Video/1015%30(1).mp4" type="video/mp4" />
            </video>
          </div>

          {/* Ambient Color Gradient & Readability Scrims (Responsive for Mobile & Desktop) */}
          <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-t from-[#1a0a0e]/90 via-[#1f0c10]/50 to-[#1a0a0e]/60 lg:bg-gradient-to-r lg:from-[#1a0a0e]/92 lg:via-[#2a0f14]/65 lg:to-transparent" />
          <div className="absolute inset-0 pointer-events-none z-[1] bg-[#2a0f14]/18 mix-blend-multiply" />

          {/* SVG Wave Overlay */}
          <svg
            className="absolute top-0 right-0 w-[65%] h-full pointer-events-none opacity-20 z-[1]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 800 600"
          >
            <path
              d="M100 0C300 120 450 80 600 240C750 400 850 150 900 0V600H0C80 420 180 200 100 0Z"
              fill="url(#hero-gradient)"
            />
            <defs>
              <linearGradient
                id="hero-gradient"
                x1="0%"
                x2="100%"
                y1="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3d1018" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#2a0f14" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#1a0a0e" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>

        {/* Top Status Indicator */}
        <div className="relative z-10 flex items-center justify-end w-full">
          <div className="text-surface-container-highest/70 text-label-sm tracking-wider uppercase font-semibold">
            <span>SELECTED WORKS</span>
          </div>
        </div>

        {/* Team Photo (Responsive: Mobile di-hide via showTeam, di atas 110% zoom di-hide, di 110% ke bawah tetap tampil) */}
        {showTeam && (
          <div className="reveal reveal-scale-up delay-350 absolute right-2 sm:right-4 md:right-6 lg:right-8 xl:right-12 bottom-0 pointer-events-none z-10 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px] xl:w-[540px] 2xl:w-[600px] flex items-end justify-end">
            <img
              src="/images/team-hero.png"
              alt="Tim Kreatif Logos"
              className="w-full h-auto object-contain max-h-[260px] sm:max-h-[300px] md:max-h-[380px] lg:max-h-[420px] xl:max-h-[480px] select-none drop-shadow-[-15px_15px_30px_rgba(0,0,0,0.45)]"
              loading="eager"
            />
          </div>
        )}

        {/* Main Content Grid */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center my-auto pt-space-lg pb-space-lg">
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-space-md">
            {/* Step Pill */}
            <div className="reveal reveal-fade-down delay-100 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center text-label-sm font-bold">
                1
              </span>
              <span className="text-label-md text-secondary-fixed uppercase tracking-wider font-semibold">
                YOUR SUPPORT SYSTEM
              </span>
            </div>

            {/* Headline */}
            <h1 className="reveal reveal-fade-up delay-200 text-display-xl-mobile lg:text-display-xl text-on-primary font-extrabold tracking-tight max-w-3xl leading-[1.08] uppercase">
              HELLO BRAND OWNER!
            </h1>

            {/* Deskripsi */}
            <div className="reveal reveal-fade-up delay-300 text-body-md lg:text-body-lg text-primary-fixed max-w-xl font-normal leading-relaxed flex flex-col gap-3">
              <p>
                Kami di sini untuk membantu brand menemukan ide, bikin sesuatu yang
                menarik, dan mewujudkannya jadi karya nyata.
              </p>
              <p className="text-primary-fixed/80 text-sm">
                Mulai dari media sosial, produksi konten, sampai aktivasi brand, kami
                siap jadi tim di balik layar yang ikut memikirkan, mengerjakan, dan
                mengembangkan brand kamu.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="reveal reveal-fade-up delay-400 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-space-xs sm:gap-space-md pt-space-sm">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-surface-container-lowest text-primary text-label-md px-6 sm:px-8 py-3 sm:py-3.5 shadow-md hover:bg-surface-bright transition-all duration-200 hover:-translate-y-0.5 font-bold active:scale-95"
              >
                Punya ide? Yuk, ngobrol.
                <span className="material-symbols-outlined ml-2 text-[18px]">
                  chat
                </span>
              </a>
              <a
                href="#what-we-do"
                onClick={(e) => smoothScroll(e, "#what-we-do")}
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-on-primary text-label-md px-6 sm:px-7 py-3 sm:py-3.5 transition-all duration-200 font-semibold active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">
                  arrow_downward
                </span>
                <span>Lihat Apa yang Kita Kerjakan</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Floating Stats & Info Card */}
        <div className="reveal reveal-fade-up delay-500 relative z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-space-md pt-space-md">
          {/* Micro Stats */}
          <div className="flex items-center gap-6 text-on-primary">
            <div className="flex flex-col">
              <span className="text-headline-sm font-bold text-white">18+</span>
              <span className="text-label-sm text-primary-fixed-dim uppercase tracking-wider">
                Brand Ditangani
              </span>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-headline-sm font-bold text-white">
                15M+
              </span>
              <span className="text-label-sm text-primary-fixed-dim uppercase tracking-wider">
                Total Video Views
              </span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            <div className="hidden sm:flex flex-col">
              <span className="text-headline-sm font-bold text-white">
                99.4%
              </span>
              <span className="text-label-sm text-primary-fixed-dim uppercase tracking-wider">
                KLIEN PUAS
              </span>
            </div>
          </div>

          {/* Frosted Glass Info Card */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface/90 backdrop-blur-xl rounded-lg p-space-sm shadow-[0px_10px_30px_-4px_rgba(94,9,25,0.25)] flex items-center gap-4 text-on-surface hover:shadow-lg transition-all group cursor-pointer"
          >
            <div className="flex -space-x-2.5 overflow-hidden pl-1">
              <div className="inline-flex h-10 w-10 rounded-full bg-secondary-fixed items-center justify-center text-label-md font-bold text-on-secondary-fixed shadow-sm">
                LV
              </div>
              <div className="inline-flex h-10 w-10 rounded-full bg-[#6b1723] p-1.5 items-center justify-center shadow-sm">
                <img
                  src="/images/logo-mark.png"
                  alt="Logos Creative Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="inline-flex h-10 w-10 rounded-full bg-secondary-container text-white items-center justify-center text-label-md font-bold shadow-sm">
                AT
              </div>
            </div>
            <div className="flex flex-col pr-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-label-sm font-bold text-primary">
                  Ditangani oleh Tim Kreatif Ahli
                </span>
              </div>
              <span className="text-body-sm text-on-surface-variant font-medium">
                Spesialis Branding, Desain &amp; Video Editor
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-container-high group-hover:bg-primary group-hover:text-white flex items-center justify-center text-on-surface transition-all duration-200 shrink-0">
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}
