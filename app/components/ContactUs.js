"use client";

import { getWhatsAppUrl, WHATSAPP_NUMBER } from "../utils/whatsapp";
import Logo from "./Logo";

export default function ContactUs() {
  const waUrl = getWhatsAppUrl();

  return (
    <section
      id="contact"
      className="px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl max-w-[1440px] mx-auto w-full"
    >
      <div className="relative rounded-[36px] bg-gradient-to-br from-[#1b060a] via-primary to-[#5a111c] text-white p-space-md sm:p-space-lg lg:p-space-xl shadow-[0px_24px_60px_-8px_rgba(107,23,35,0.4)] border border-primary/40 overflow-hidden">
        {/* Background Ambient Radiance */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(138,7,9,0.5) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-lg lg:gap-space-xl">
          {/* Left Block */}
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
              <span className="text-label-sm font-bold tracking-wider uppercase text-white/95">
                YOUR SUPPORT SYSTEM IS READY
              </span>
            </div>

            <h2 className="text-headline-md sm:text-headline-lg lg:text-display-sm font-extrabold tracking-tight uppercase leading-tight text-white drop-shadow-sm">
              Jadi, Lagi Punya Ide Apa?
            </h2>

            <div className="text-body-md sm:text-body-lg text-white/85 leading-relaxed flex flex-col gap-3 font-normal">
              <p>
                Mau mengembangkan media sosial, bikin konten baru, menyiapkan
                campaign, atau masih mencari tahu harus mulai dari mana?
              </p>
              <p>
                Ceritain saja dulu. Nggak harus sudah punya konsep matang untuk mulai
                ngobrol.
              </p>
              <p className="font-semibold text-white">
                Yuk, ngobrol bareng Logos.
              </p>
            </div>
          </div>

          {/* Right Action Block */}
          <div className="flex flex-col gap-4 shrink-0 lg:min-w-[340px]">
            <div className="p-6 rounded-3xl bg-black/25 backdrop-blur-md border border-white/15 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Logo variant="badge" size={38} showText={false} />
                <div>
                  <span className="text-body-sm font-bold text-white block">
                    Logos Creative Support
                  </span>
                  <span className="text-[12px] text-white/70 block">
                    WhatsApp Bisnis Resmi
                  </span>
                </div>
              </div>

              {/* Official CTA Button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-full bg-white text-primary hover:bg-[#fff5f6] font-extrabold text-label-md sm:text-label-lg text-center flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group cursor-pointer"
              >
                <span className="material-symbols-outlined text-[24px] text-[#25D366]">
                  chat
                </span>
                <span>Chat with Logos Creative</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-[12px] text-white/70 text-center">
                <span className="material-symbols-outlined text-[15px] text-[#4ade80]">
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
