"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "./Logo";
import TeamModal from "./TeamModal";

export default function About() {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  return (
    <section
      id="about"
      className="px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl max-w-[1440px] mx-auto w-full"
    >
      {/* Outer Card: Carries the Crimson Shadow and Rounded Radius - NO overflow:hidden */}
      <div className="relative rounded-[32px] sm:rounded-[36px] crimson-card-shadow bg-primary">
        {/* Inner Container: Clips Blurs and Ambient Gradients cleanly to rounded corners on iOS Safari */}
        <div className="relative rounded-[32px] sm:rounded-[36px] ios-clip-rounded p-space-md sm:p-space-lg lg:p-space-xl border border-white/15 text-white flex flex-col gap-space-lg lg:gap-space-xl">
          {/* Ambient Glow matching Hero */}
          <div
            className="absolute inset-0 pointer-events-none opacity-50 mix-blend-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "radial-gradient(circle at 75% 25%, #7a1523 0%, #5e0919 55%, #3b0d13 100%)",
            }}
          />
          <div className="absolute -top-24 -right-24 w-[450px] h-[450px] bg-[#8a0f23]/30 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-[#6b1723]/30 rounded-full blur-[90px] pointer-events-none" />

        {/* Top Header */}
        <div className="reveal reveal-fade-up relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-6">
          <div className="flex items-center gap-3.5">
            <Logo variant="glass" size={48} showText={false} />
            <div>
              <span className="text-label-sm font-bold text-[#ffdada] tracking-widest uppercase block">
                ABOUT LOGOS CREATIVE
              </span>
              <h2 className="text-headline-md sm:text-headline-lg lg:text-display-sm text-white font-extrabold tracking-tight">
                Kenalan, Yuk.
              </h2>
            </div>
          </div>
          <div className="text-label-sm font-semibold text-white/90 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full w-fit backdrop-blur-sm">
            Teman Berpikir • Tim Eksekusi • Support System
          </div>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center">
          {/* Text Description (Left Col) */}
          <div className="reveal reveal-slide-left delay-100 lg:col-span-6 flex flex-col gap-4 text-body-md sm:text-body-lg text-white/90 leading-relaxed font-normal">
            <p className="text-white font-bold text-title-md sm:text-title-lg leading-snug">
              Kami Logos Creative. Teman berpikir, tim eksekusi, dan support system
              untuk brand yang ingin terus berkembang.
            </p>

            <p>
              Kami percaya setiap brand punya ceritanya sendiri. Tugas kami adalah
              membantu menemukan cara terbaik untuk menceritakannya, lalu memastikan
              ide tersebut nggak berhenti sebagai wacana.
            </p>

            <p>
              Kadang kami mulai dari strategi. Kadang dari ide sederhana yang
              ternyata bisa dikembangkan jauh lebih besar. Apa pun titik mulainya,
              kami senang terlibat dalam prosesnya.
            </p>

            <p>
              Kami bukan tim yang datang membawa semua jawaban. Kami lebih suka
              memahami dulu, berdiskusi, lalu mencari jalan terbaik bersama.
            </p>

            <div className="p-4 rounded-2xl bg-white/10 border-l-4 border-[#ffdada] mt-1 backdrop-blur-sm shadow-xs">
              <p className="text-body-md font-medium text-white italic">
                “Karena buat kami, kerja sama yang baik bukan cuma soal hasil
                akhirnya. Cara kita sampai ke sana juga penting.”
              </p>
            </div>
          </div>

          {/* Team Photo & Personal Touch (Right Col) */}
          <div className="reveal reveal-slide-right delay-200 lg:col-span-6 flex flex-col items-center justify-center">
            {/* Outer shadow wrapper - separate from overflow:hidden container so shadow is visible */}
            <div
              className="relative w-full max-w-[500px] lg:max-w-none group"
              style={{
                filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.55)) drop-shadow(0 8px 20px rgba(139,15,35,0.45))",
              }}
            >
              {/* Inner card clips content but shadow bleeds through outer wrapper */}
              <div className="relative rounded-[32px] overflow-hidden border border-white/20 bg-gradient-to-b from-[#5a1020] via-[#3b0a14] to-[#1e0509] transition-all duration-300 hover:border-white/40">

                {/* Subtle radial warm backlight */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-50"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse at 50% 30%, rgba(255,160,160,0.18) 0%, rgba(120,10,30,0.35) 55%, transparent 80%)",
                  }}
                />

                {/* Team photo frame — clipped at waist with soft fade so no cut edge ever peeks below the card */}
                <div className="relative z-10 pt-4 px-4 sm:pt-6 sm:px-6">
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ maxHeight: "clamp(250px, 52vw, 380px)" }}
                  >
                    <img
                      src="/images/kenalan-yuk-transparent.png?v=3"
                      alt="Tim Logos Creative"
                      className="w-full h-auto object-cover object-top block transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{
                        filter:
                          "drop-shadow(0px 18px 28px rgba(0,0,0,0.65)) drop-shadow(0px 6px 12px rgba(90,8,20,0.45))",
                      }}
                      loading="eager"
                      decoding="async"
                    />
                    {/* Soft bottom fade to card base color: eliminates any harsh cutoff line */}
                    <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#1e0509] to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Bottom Card — cleanly covers the faded waist */}
                <div className="relative z-20 -mt-10 sm:-mt-12 mx-3 sm:mx-4 mb-3 sm:mb-4 p-3.5 rounded-2xl bg-[#110204] border border-white/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <div>
                      <span className="text-[12px] sm:text-label-sm font-bold tracking-wide block">
                        Logos Creative Team
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-white/75 font-medium">
                        Teman Berpikir &amp; Tim Eksekusi
                      </span>
                    </div>
                  </div>

                  {/* Apple-style Action Pill Button */}
                  <button
                    type="button"
                    onClick={() => setIsTeamModalOpen(true)}
                    className="px-4 py-2 rounded-full bg-white text-primary hover:bg-[#ffdada] active:scale-95 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 shadow-md cursor-pointer shrink-0"
                  >
                    <span>Lihat Selengkapnya</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="relative z-10 pt-6 border-t border-white/15 flex flex-col gap-6">
          <div className="reveal reveal-fade-up">
            <span className="text-label-md font-bold text-[#ffdada] tracking-widest uppercase">
              OUR CORE PHILOSOPHY
            </span>
            <h3 className="text-headline-sm sm:text-headline-md font-extrabold text-white tracking-tight mt-1">
              Our Values
            </h3>
          </div>

          <div className="stagger-container grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {/* Value 1 */}
            <div className="reveal reveal-fade-up p-space-md sm:p-space-lg rounded-[28px] bg-white/10 border border-white/15 hover:border-white/30 hover:bg-white/15 transition-all duration-300 flex flex-col gap-3 relative overflow-hidden backdrop-blur-md shadow-sm group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-black group-hover:bg-white group-hover:text-primary transition-all duration-300">
                  1
                </div>
                <h4 className="text-title-lg sm:text-headline-sm font-black text-white uppercase tracking-wide">
                  DO THE BEST.
                </h4>
              </div>
              <p className="text-body-md text-white/80 leading-relaxed">
                Memberikan yang terbaik bukan sekadar menyelesaikan pekerjaan,
                tetapi benar-benar peduli dengan apa yang kita kerjakan.
              </p>
            </div>

            {/* Value 2 */}
            <div className="reveal reveal-fade-up p-space-md sm:p-space-lg rounded-[28px] bg-white/10 border border-white/15 hover:border-white/30 hover:bg-white/15 transition-all duration-300 flex flex-col gap-3 relative overflow-hidden backdrop-blur-md shadow-sm group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-black group-hover:bg-white group-hover:text-primary transition-all duration-300">
                  2
                </div>
                <h4 className="text-title-lg sm:text-headline-sm font-black text-white uppercase tracking-wide">
                  BEYOND THE LIMIT.
                </h4>
              </div>
              <p className="text-body-md text-white/80 leading-relaxed">
                Selalu ada ruang untuk belajar, bereksplorasi, dan mencoba
                kemungkinan yang sebelumnya belum terpikirkan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* All Team Members Apple-style Modal */}
    <TeamModal
      isOpen={isTeamModalOpen}
      onClose={() => setIsTeamModalOpen(false)}
    />
  </section>
  );
}
