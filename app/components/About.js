"use client";

import Image from "next/image";
import Logo from "./Logo";

export default function About() {
  return (
    <section
      id="about"
      className="px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl max-w-[1440px] mx-auto w-full"
    >
      <div className="rounded-[36px] bg-surface-container-lowest p-space-md sm:p-space-lg lg:p-space-xl border border-outline-variant/30 shadow-sm flex flex-col gap-space-lg lg:gap-space-xl">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant/20 pb-6">
          <div className="flex items-center gap-3">
            <Logo variant="badge" size={44} showText={false} />
            <div>
              <span className="text-label-sm font-bold text-primary tracking-widest uppercase block">
                ABOUT LOGOS CREATIVE
              </span>
              <h2 className="text-headline-md sm:text-headline-lg lg:text-display-sm text-on-surface font-extrabold tracking-tight">
                Kenalan, Yuk.
              </h2>
            </div>
          </div>
          <div className="text-label-sm font-semibold text-on-surface-variant bg-surface-container px-3.5 py-1.5 rounded-full w-fit">
            Teman Berpikir • Tim Eksekusi • Support System
          </div>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center">
          {/* Text Description (Left Col) */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-body-md sm:text-body-lg text-on-surface-variant leading-relaxed">
            <p className="text-on-surface font-semibold text-title-md">
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

            <div className="p-4 rounded-2xl bg-surface-container border-l-4 border-primary mt-2">
              <p className="text-body-md font-medium text-on-surface italic">
                “Karena buat kami, kerja sama yang baik bukan cuma soal hasil
                akhirnya. Cara kita sampai ke sana juga penting.”
              </p>
            </div>
          </div>

          {/* Team Photo & Personal Touch (Right Col) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-outline-variant/30 group">
              <img
                src="/images/team-hero.png"
                alt="Tim Logos Creative Sedang Berdiskusi"
                className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-label-sm uppercase font-bold text-white/70 block">
                  Behind The Scenes
                </span>
                <span className="text-title-sm font-semibold">
                  Di Balik Layar: Selalu Ada Diskusi Hangat & Kopi Segar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="pt-6 border-t border-outline-variant/20 flex flex-col gap-6">
          <div>
            <span className="text-label-md font-bold text-primary tracking-widest uppercase">
              OUR CORE PHILOSOPHY
            </span>
            <h3 className="text-headline-sm sm:text-headline-md font-extrabold text-on-surface tracking-tight mt-1">
              Our Values
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {/* Value 1 */}
            <div className="p-space-md sm:p-space-lg rounded-[28px] bg-surface-container-low border border-outline-variant/30 flex flex-col gap-3 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black">
                  1
                </div>
                <h4 className="text-title-lg sm:text-headline-sm font-black text-on-surface uppercase tracking-wide">
                  DO THE BEST.
                </h4>
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Memberikan yang terbaik bukan sekadar menyelesaikan pekerjaan,
                tetapi benar-benar peduli dengan apa yang kita kerjakan.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-space-md sm:p-space-lg rounded-[28px] bg-surface-container-low border border-outline-variant/30 flex flex-col gap-3 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary font-black">
                  2
                </div>
                <h4 className="text-title-lg sm:text-headline-sm font-black text-on-surface uppercase tracking-wide">
                  BEYOND THE LIMIT.
                </h4>
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Selalu ada ruang untuk belajar, bereksplorasi, dan mencoba
                kemungkinan yang sebelumnya belum terpikirkan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
