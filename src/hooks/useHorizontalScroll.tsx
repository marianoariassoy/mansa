"use client";
import { useEffect } from "react";

export default function useHorizontalScroll() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      ".horizontal-section",
    );

    let rafId: number;

    const update = () => {
      sections.forEach((section) => {
        const track = section.querySelector<HTMLElement>(".horizontal-track");
        if (!track) return;

        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const viewportH = window.innerHeight;

        // ✅ progreso real dentro de la zona sticky
        const scrollable = sectionHeight - viewportH;
        const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);

        const progress = scrollable > 0 ? scrolled / scrollable : 0;

        const maxTranslate = track.scrollWidth - window.innerWidth;

        const x = -maxTranslate * progress;

        track.style.transform = `translate3d(${x}px,0,0)`;
      });

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);
}
