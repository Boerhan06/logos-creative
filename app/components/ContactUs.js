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
      {/* ── Main Container ── */}
      <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[#240409] via-primary to-[#180306] text-white p-6 sm:p-10 lg:p-12 shadow-[0px_25px_60px_-10px_rgba(94,9,25,0.45)] border border-primary/40 overflow-hidden">
        
        {/* Subtle Ambient Silk Wave */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none mix-blend-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 25%, rgba(255,255,255,0.18) 0%, transparent 45%), radial-gradient(circle at 20% 85%, rgba(138,15,35,0.5) 0%, transparent 55%)",
          }}
        />

        {/* Vector Background Accent */}
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
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
