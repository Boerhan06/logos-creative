"use client";

import { useEffect } from "react";

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    // Easing function: easeInOutCubic for luxury Apple-like glide
    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const smoothScrollTo = (targetY, duration = 950) => {
      const startY = window.pageYOffset || document.documentElement.scrollTop;
      const distance = targetY - startY;

      // Don't animate if distance is negligible
      if (Math.abs(distance) < 5) return;

      let startTime = null;

      const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * ease);

        if (elapsed < duration) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const handleClick = (e) => {
      // Find the closest anchor element
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Handle top of page scroll
      if (href === "#" || href === "/") {
        if (window.location.pathname === "/" && anchor.getAttribute("href") === "/") {
          e.preventDefault();
          smoothScrollTo(0, 750);
          return;
        }
        return;
      }

      // Check if it's an internal section hash link
      if (href.startsWith("#")) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();

          // Calculate precise target offset subtracting fixed header
          const headerOffset = 80;
          const elementPosition =
            targetElement.getBoundingClientRect().top + window.pageYOffset;
          const targetY = Math.max(0, elementPosition - headerOffset);

          smoothScrollTo(targetY, 950);

          // Update URL hash cleanly without jumping
          if (window.history.pushState) {
            window.history.pushState(null, "", href);
          }
        }
      }
    };

    document.addEventListener("click", handleClick, { passive: false });

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return <>{children}</>;
}
