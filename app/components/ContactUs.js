"use client";

import { getWhatsAppUrl } from "../utils/whatsapp";
import Logo from "./Logo";

export default function ContactUs() {
  const waUrl = getWhatsAppUrl();

  return (
    <section
      id="contact"
      className="px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl max-w-[1440px] mx-auto w-full"
    >
      {/* Outer Card: Carries the Crimson Shadow and Rounded Radius - NO overflow:hidden */}
      <div className="relative rounded-[32px] sm:rounded-[40px] crimson-card-shadow-lg bg-[#240409]">
        {/* Inner Container: Clips Blurs and Ambient Gradients cleanly to rounded corners on iOS Safari */}
        <div className="relative rounded-[32px] sm:rounded-[40px] ios-clip-rounded bg-gradient-to-br from-[#240409] via-primary to-[#180306] text-white p-6 sm:p-10 lg:p-12 border border-primary/40">
          
          {/* Subtle Ambient Silk Wave & Glow */}
          <div
            className="absolute inset-0 opacity-30 mix-blend-screen bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 85% 25%, rgba(255,255,255,0.18) 0%, transparent 45%), radial-gradient(circle at 20% 85%, rgba(138,15,35,0.5) 0%, transparent 55%)",
            }}
          />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#8a0f23]/30 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Block: Narrative & Headline */}
          <div className="reveal reveal-slide-left lg:col-span-7 flex flex-col gap-4 max-w-xl">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-[1.1] text-white drop-shadow-sm">
              Jadi, Lagi Punya Ide Apa?
            </h2>

            {/* Subtext description */}
            <div className="text-sm sm:text-base text-white/80 leading-relaxed flex flex-col gap-3 font-normal mt-1">
              <p>
                Mau mengembangkan media sosial, bikin konten baru, menyiapkan
                campaign, atau masih mencari tahu harus mulai dari mana?
              </p>
              <p>
                Ceritain saja dulu. Nggak harus sudah punya konsep matang untuk mulai
                ngobrol.
              </p>
              <p className="font-bold text-white text-base sm:text-lg text-[#ffdada]">
                Yuk, ngobrol bareng Logos.
              </p>
            </div>
          </div>

          {/* Right Block: Clean Floating Glass Card */}
          <div className="reveal reveal-slide-right delay-150 lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-[26px] bg-[#140205]/70 backdrop-blur-2xl border border-white/15 p-6 sm:p-7 flex flex-col gap-5 shadow-[0px_20px_40px_rgba(0,0,0,0.45)]">
              
              {/* Account Header */}
              <div className="flex items-center gap-3.5 pb-3 border-b border-white/10">
                <Logo variant="badge" size={44} showText={false} />
                <div className="flex flex-col">
                  <span className="text-base font-bold text-white leading-tight">
                    Logos Creative Support
                  </span>
                  <span className="text-xs text-white/60 font-medium mt-0.5">
                    WhatsApp Bisnis Resmi • Siap Respon
                  </span>
                </div>
              </div>

              {/* Official CTA Button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-full bg-white text-primary hover:bg-[#fff0f2] font-black text-sm sm:text-base text-center flex items-center justify-center gap-3 shadow-[0px_8px_20px_rgba(0,0,0,0.25)] hover:shadow-[0px_12px_28px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group cursor-pointer"
              >
                <span className="material-symbols-outlined text-[24px] text-[#25D366] transition-transform group-hover:scale-110">
                  chat
                </span>
                <span>Chat with Logos Creative</span>
              </a>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 text-xs text-white/70 text-center">
                <span className="material-symbols-outlined text-[16px] text-[#4ade80]">
                  verified
                </span>
                <span>Pesan otomatis siap terhubung langsung</span>
              </div>

              {/* Social Channels Connection */}
              <div className="pt-3.5 border-t border-white/10 flex flex-col gap-2.5">
                <span className="text-[11px] font-bold text-white/60 uppercase tracking-wider text-center">
                  Temukan Kami di Media Sosial
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href="https://www.instagram.com/logoscreative.id?exln=MWl0c3JxN2tkcXhxeg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 flex flex-col items-center justify-center gap-1 text-white/80 hover:text-white transition-all text-center group active:scale-95"
                  >
                    <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-[10px] font-bold">Instagram</span>
                  </a>

                  <a
                    href="https://www.tiktok.com/@logos.creative?_r=1&_t=ZS-9AbjG8m2UD2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 flex flex-col items-center justify-center gap-1 text-white/80 hover:text-white transition-all text-center group active:scale-95"
                  >
                    <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.83 4.46 6.3 6.3 0 0 0 1.83-4.46V8.92a8.28 8.28 0 0 0 4.93 1.6v-3.5a4.83 4.83 0 0 1-1-.33z"/>
                    </svg>
                    <span className="text-[10px] font-bold">TikTok</span>
                  </a>

                  <a
                    href="https://youtube.com/@logoscreative23?si=0QU3FIP8Fqvw_r3V"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 flex flex-col items-center justify-center gap-1 text-white/80 hover:text-white transition-all text-center group active:scale-95"
                  >
                    <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-[10px] font-bold">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  );
}
