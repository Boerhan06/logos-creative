"use client";

import Link from "next/link";
import Logo from "./Logo";
import { getWhatsAppUrl } from "../utils/whatsapp";
import { smoothScroll } from "../utils/smoothScroll";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Clients", href: "#clients" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Results", href: "#results" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  const waUrl = getWhatsAppUrl();

  return (
    <footer className="mt-space-lg lg:mt-space-xl bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pt-space-lg lg:pt-space-xl pb-space-lg">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg pb-space-lg border-b border-outline-variant/20">
          {/* Brand Info (Left Col) */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <Link href="/" className="inline-flex items-center w-fit">
              <Logo variant="badge" size={42} showText={true} />
            </Link>

            <p className="text-body-md text-on-surface-variant max-w-md leading-relaxed mt-1">
              <span className="font-semibold text-on-surface">YOUR SUPPORT SYSTEM</span> — Teman berpikir, tim eksekusi, dan partner kreatif di balik layar untuk membantu brand Anda berkembang nyata.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-label-sm transition-all duration-300"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp Resmi</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/logoscreative.id?exln=MWl0c3JxN2tkcXhxeg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Logos Creative"
                className="w-10 h-10 rounded-full bg-surface-container hover:bg-primary text-on-surface hover:text-white flex items-center justify-center transition-all duration-300 border border-outline-variant/30"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@logos.creative?_r=1&_t=ZS-9AbjG8m2UD2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Logos Creative"
                className="w-10 h-10 rounded-full bg-surface-container hover:bg-black text-on-surface hover:text-[#25F4EE] flex items-center justify-center transition-all duration-300 border border-outline-variant/30"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.83 4.46 6.3 6.3 0 0 0 1.83-4.46V8.92a8.28 8.28 0 0 0 4.93 1.6v-3.5a4.83 4.83 0 0 1-1-.33z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@logoscreative23?si=0QU3FIP8Fqvw_r3V"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Logos Creative"
                className="w-10 h-10 rounded-full bg-surface-container hover:bg-[#FF0000] text-on-surface hover:text-white flex items-center justify-center transition-all duration-300 border border-outline-variant/30"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Nav (Right Col) */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row justify-start lg:justify-end gap-space-lg">
            <div className="flex flex-col gap-2.5">
              <span className="text-label-sm font-bold text-on-surface uppercase tracking-wider">
                Navigasi Website
              </span>
              <ul className="flex flex-col gap-2">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => smoothScroll(e, item.href)}
                      className="text-body-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2.5 sm:pl-10">
              <span className="text-label-sm font-bold text-on-surface uppercase tracking-wider">
                Layanan Utama
              </span>
              <ul className="flex flex-col gap-2 text-body-sm text-on-surface-variant">
                <li>Social Media Direction</li>
                <li>Creative Production</li>
                <li>Branding & Strategy</li>
                <li>Campaign & Activation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-3 text-label-sm text-on-surface-variant">
          <p>
            © {new Date().getFullYear()} Logos Creative. Your Support System. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-2">
            <span>Indonesia</span>
            <span>•</span>
            <span className="text-primary font-semibold">Digital Creative Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
