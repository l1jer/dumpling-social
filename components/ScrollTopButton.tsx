"use client";

import { useEffect, useState } from "react";

/** Matches the original theme's data-jupiterx-scroll offset. */
const REVEAL_AFTER_PX = 1000;

/**
 * Scroll-to-top control that slides in from the right once the page has been
 * scrolled past 1000px, reproducing the JupiterX corner button.
 */
export function ScrollTopButton() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > REVEAL_AFTER_PX);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-0 z-[990] transition-[right] duration-150 ${
        scrolled ? "right-0" : "right-[-100px]"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        tabIndex={scrolled ? 0 : -1}
        className="m-[1rem] inline-block cursor-pointer rounded-[4px] border border-[#e9ecef] bg-[#e9ecef] px-[1.2rem] py-[1rem] text-[1.3rem] leading-[0.8] text-[#adb5bd] transition-colors duration-150 hover:text-[#6c757d] focus:text-[#6c757d] focus:shadow-[0_0_0_0.2rem_rgba(180,180,180,0.5)] focus:outline-0"
      >
        <svg
          viewBox="0 0 16 16"
          width="16"
          height="13"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
          className="block"
        >
          <path d="M3 10l5-5 5 5" />
        </svg>
      </button>
    </div>
  );
}
