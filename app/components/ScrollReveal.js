"use client";

import { useEffect, useRef } from "react";

/**
 * Global Scroll Reveal & Entrance Animation Engine
 * Automatically tracks elements with .reveal, .reveal-* classes
 * and triggers Apple-grade smooth animations when scrolling into viewport.
 */
export function ScrollRevealProvider({ children }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const selector =
      ".reveal, .reveal-fade-up, .reveal-fade-down, .reveal-fade-in, .reveal-scale-up, .reveal-slide-left, .reveal-slide-right, .reveal-blur, [data-reveal]";

    if (prefersReducedMotion) {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const observerCallback = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    });

    const observeAll = () => {
      document.querySelectorAll(selector).forEach((el) => {
        if (!el.classList.contains("is-revealed")) {
          observer.observe(el);
        }
      });
    };

    // Initial scan
    observeAll();

    // Listen for DOM changes (dynamic content, filtering, etc.)
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Fallback safety: ensure all content becomes visible after timeout
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.add("is-revealed");
      });
    }, 2500);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return <>{children}</>;
}

/**
 * Reusable ScrollReveal wrapper component
 * @param {string} as - HTML tag name (div, section, article, etc.)
 * @param {'fade-up'|'fade-down'|'fade-in'|'scale-up'|'slide-left'|'slide-right'|'blur'} variant
 * @param {number} delay - Delay in milliseconds
 * @param {boolean} stagger - Whether children should stagger
 */
export default function ScrollReveal({
  as: Component = "div",
  variant = "fade-up",
  delay = 0,
  stagger = false,
  className = "",
  children,
  ...props
}) {
  const ref = useRef(null);

  const variantClass = `reveal-${variant}`;
  const delayClass = delay ? `delay-${delay}` : "";
  const staggerClass = stagger ? "stagger-container" : "";

  return (
    <Component
      ref={ref}
      className={`reveal ${variantClass} ${delayClass} ${staggerClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
