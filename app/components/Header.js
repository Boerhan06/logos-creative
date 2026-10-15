"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { smoothScroll } from "../utils/smoothScroll";
import { getWhatsAppUrl } from "../utils/whatsapp";

const navLinks = [
  { label: "Home", path: "#hero" },
  { label: "About", path: "#about" },
  { label: "Our Clients", path: "#clients" },
  { label: "Portfolio", path: "#portfolio" },
  { label: "Results", path: "#results" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    smoothScroll(e, path);
    setMobileOpen(false);
  };

  const waUrl = getWhatsAppUrl();

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-outline-variant/30"
            : "bg-transparent"
        }`}
      >
        <div className="h-16 lg:h-20 px-margin-mobile lg:px-margin flex items-center justify-between max-w-[1440px] mx-auto w-full">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                smoothScroll(e, "#hero");
              }
            }}
            className="flex items-center group cursor-pointer"
          >
            <Logo variant="badge" size={40} showText={true} />
          </Link>

          {/* Desktop Nav with Loading Line Hover Effect */}
          <nav className="hidden lg:flex items-center gap-space-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="relative py-2 px-1 text-body-sm font-semibold text-on-surface-variant hover:text-primary transition-colors cursor-pointer group flex flex-col items-center"
              >
                <span>{link.label}</span>
                <span className="nav-loading-bar" />
              </a>
            ))}
          </nav>

          {/* Contact Us (WhatsApp) Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary-container hover:bg-primary text-on-primary font-bold text-label-md shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>Contact Us</span>
              <span className="text-[12px] px-2 py-0.5 rounded-full bg-white/20 font-medium">
                WhatsApp
              </span>
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-0.5">
                arrow_forward
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Tutup Menu" : "Buka Menu"}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-16 right-0 left-0 bg-surface border-b border-outline-variant p-6 shadow-xl flex flex-col gap-4 animate-slide-down"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="text-title-md font-bold text-on-surface hover:text-primary transition-colors py-2 border-b border-outline-variant/30 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                  chevron_right
                </span>
              </a>
            ))}

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full py-3.5 px-6 rounded-full bg-primary text-white font-bold text-center flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Contact Us (WhatsApp)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
