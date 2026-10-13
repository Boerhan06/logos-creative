"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", path: "#services" },
  { label: "Portfolio", path: "#portfolio" },
  { label: "About", path: "#about" },
  { label: "Insights", path: "#insights" },
  { label: "Contact", path: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="h-16 lg:h-20 px-margin-mobile lg:px-margin flex items-center justify-between max-w-[1440px] mx-auto w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-space-sm group">
            <div className="w-9 h-9 bg-primary-container flex items-center justify-center p-1.5 shadow-sm shrink-0 overflow-hidden rounded-xl transition-transform group-hover:scale-105">
              <span className="text-on-primary font-extrabold text-sm">LC</span>
            </div>
            <span className="text-title-md text-on-surface tracking-tight font-bold">
              Logos
              <span className="text-primary-container font-medium ml-1">
                Creative
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-space-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.path}
                className="text-label-md text-on-surface-variant hover:text-on-surface transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary-container after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-space-sm lg:gap-space-md">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary-container hover:bg-primary text-on-primary px-5 lg:px-7 py-2.5 lg:py-3 text-label-md shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              Start a Project
            </a>
            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle menu"
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-high transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-surface/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 animate-fade-in"
          onClick={() => setMobileOpen(false)}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.path}
              className="text-headline-sm text-on-surface hover:text-primary-container transition-colors animate-slide-up"
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-primary-container text-on-primary px-8 py-3.5 text-label-md shadow-md animate-slide-up"
            style={{ animationDelay: `${navLinks.length * 0.08}s` }}
            onClick={() => setMobileOpen(false)}
          >
            Start a Project
          </a>
        </div>
      )}
    </>
  );
}
