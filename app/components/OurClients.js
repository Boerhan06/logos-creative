"use client";

import { smoothScroll } from "../utils/smoothScroll";

const clients = [
  { name: "Sour Sally Group", logo: "/images/clients/sour-sally-group.png", category: "F&B" },
  { name: "Newlab", logo: "/images/clients/client-newlab.png", category: "Beauty & Wellness" },
  { name: "Coco Malatang", logo: "/images/clients/coco-malatang.jpeg", category: "F&B" },
  { name: "Tomaple", logo: "/images/clients/client-tomaple.webp", category: "Artisan Bakery" },
  { name: "Mahjong Society", logo: "/images/clients/mahjong-society.png", category: "Lifestyle & Entertainment" },
  { name: "Madame Arumantara", logo: "/images/clients/madame-arumantara.jpg", category: "Dining & Culinary" },
  { name: "The Teeth Whitener", logo: "/images/clients/the-teeth-whitener.png", category: "Personal Care" },
  { name: "Domino", logo: "/images/clients/client-domino.png", category: "Retail & Lifestyle" },
  { name: "Le Fabuleux", logo: "/images/clients/le-fabuleux.jpeg", category: "Fashion & Beauty" },
  { name: "Icepink", logo: "/images/clients/client-icepink.jpeg", category: "Dessert & Beverages" },
  { name: "A Hwa", logo: "/images/clients/a-hwa.jpg", category: "Culinary" },
  { name: "Fortuner Car Interior", logo: "/images/clients/fortuner-interior.jpg", category: "Automotive" },
  { name: "Infinitys", logo: "/images/clients/client-infinitys.png", category: "Apparel & Style" },
  { name: "Shala", logo: "/images/clients/client-shala.jpeg", category: "Fashion & Beauty" },
  { name: "The Real Family", logo: "/images/clients/the-real-family.png", category: "Community & Lifestyle" },
  { name: "Victory Toys", logo: "/images/clients/victory-toys.png", category: "Kids & Toys" },
  { name: "Wanglai Kids", logo: "/images/clients/wanglai-kids.jpg", category: "Kids Fashion" },
  { name: "Indomakmur", logo: "/images/clients/client-indomakmur.jpg", category: "Factory" },
];

export default function OurClients() {
  return (
    <section
      id="clients"
      className="px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl max-w-[1440px] mx-auto w-full"
    >
      <div className="flex flex-col gap-space-md lg:gap-space-lg">
        {/* Header */}
        <div className="reveal reveal-fade-up max-w-3xl">
          <span className="text-label-md font-bold text-primary tracking-widest uppercase">
            OUR CLIENTS
          </span>
          <h2 className="text-headline-md sm:text-headline-lg lg:text-display-sm text-on-surface font-extrabold tracking-tight mt-1 leading-tight">
            Senang Bisa Jadi Bagian dari Cerita Kalian.
          </h2>

          <div className="mt-4 text-body-md sm:text-body-lg text-on-surface-variant leading-relaxed flex flex-col gap-2">
            <p>
              Setiap brand datang dengan cerita dan tantangan yang berbeda. Ada yang
              ingin tampil lebih menonjol, ada yang sedang mencari arah baru, ada juga
              yang ingin membawa ide besarnya jadi kenyataan.
            </p>
            <p>
              Kami senang bisa ikut terlibat dalam perjalanan tersebut.
            </p>
            <p className="font-semibold text-on-surface">
              Ini beberapa brand yang pernah bekerja bersama Logos Creative.
            </p>
          </div>
        </div>

        {/* Single Line Continuous Marquee (Right to Left) */}
        <div className="relative w-full overflow-hidden py-3 group">
          {/* Gradient Edge Masks for Elegant Fade In/Out */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-surface to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-surface to-transparent z-10" />

          {/* Moving Track: Single Line, Infinite Loop, Smooth Right-to-Left */}
          <div
            className="flex w-max items-center gap-3 sm:gap-4 animate-marquee group-hover:[animation-play-state:paused]"
            style={{ animationDuration: "42s", willChange: "transform" }}
          >
            {[...clients, ...clients].map((client, idx) => {
              const lower = client.name.toLowerCase();
              const isTomaple = lower.includes("tomaple");
              let circleBg = "bg-white border-black/[0.04] shadow-[0_3px_10px_rgba(0,0,0,0.08)]";
              let customStyle = {};

              if (lower.includes("newlab") || lower.includes("a hwa") || lower.includes("fortuner")) {
                circleBg = "bg-[#0d0d0f] border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.3)]";
              } else if (lower.includes("wanglai")) {
                circleBg = "border-[#eedecf] shadow-[0_3px_10px_rgba(0,0,0,0.06)]";
                customStyle = { backgroundColor: "#fdf1e5" };
              } else if (isTomaple) {
                circleBg = "border-transparent shadow-[0_3px_10px_rgba(250,127,182,0.3)]";
                customStyle = { backgroundColor: "#fa7fb6" };
              }

              return (
                <div
                  key={`${client.name}-${idx}`}
                  className="shrink-0 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <div
                    style={customStyle}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex items-center justify-center border shrink-0 transition-transform duration-300 group-hover:scale-105 ${circleBg} ${isTomaple ? "p-1.5" : "p-2"}`}
                  >
                    <img
                      src={`${client.logo}?v=4`}
                      alt={`Logo ${client.name}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col pr-1 text-left">
                    <span className="text-body-sm font-bold text-on-surface whitespace-nowrap">
                      {client.name}
                    </span>
                    <span className="text-[11px] text-on-surface-variant font-medium whitespace-nowrap">
                      {client.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Connection to Portfolio */}
        <div className="mt-2 flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex-col sm:flex-row gap-3 text-center sm:text-left">
          <span className="text-body-sm text-on-surface-variant font-medium">
            Ingin melihat bagaimana karya kami untuk brand-brand ini?
          </span>
          <a
            href="#portfolio"
            onClick={(e) => smoothScroll(e, "#portfolio")}
            className="text-label-md font-bold text-primary hover:text-primary-container flex items-center gap-1 transition-colors"
          >
            <span>Lihat Showcase di Portfolio</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
