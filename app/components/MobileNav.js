"use client";

import { useState } from "react";
import { smoothScroll } from "../utils/smoothScroll";

const tabs = [
  { icon: "home", label: "Home", path: "#home" },
  { icon: "info", label: "About", path: "#about" },
  { icon: "verified", label: "Clients", path: "#clients" },
  { icon: "auto_awesome", label: "Karya", path: "#portfolio" },
  { icon: "monitoring", label: "Results", path: "#results" },
  { icon: "chat", label: "Kontak", path: "#contact" },
];

export default function MobileNav() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (e, path, index) => {
    setActiveTab(index);
    smoothScroll(e, path);
  };

  return (
    <nav className="fixed bottom-0 w-full z-50 lg:hidden pb-safe bg-surface/90 backdrop-blur-xl border-t border-outline-variant/30 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-around h-16 px-1">
        {tabs.map((tab, i) => (
          <a
            key={tab.label}
            href={tab.path}
            className={`flex flex-col items-center justify-center min-w-[48px] h-12 transition-colors cursor-pointer ${
              i === activeTab
                ? "text-primary font-bold"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            onClick={(e) => handleTabClick(e, tab.path, i)}
          >
            <span className="material-symbols-outlined text-[20px]">
              {tab.icon}
            </span>
            <span className="text-[10px] mt-0.5 tracking-tight">{tab.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
