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

            <div className="mt-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-label-sm transition-all duration-300 w-fit"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Chat WhatsApp Resmi</span>
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
