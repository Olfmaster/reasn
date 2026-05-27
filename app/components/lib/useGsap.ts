"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealOptions = {
  selector?: string;
  start?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
};

/**
 * Reveal child elements when the container scrolls into view.
 * Targets descendants with .gsap-up / .gsap-left / .gsap-right / .gsap-fade / .gsap-scale.
 */
export function useScrollReveal<T extends HTMLElement>(
  options: RevealOptions = {},
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll<HTMLElement>(
        options.selector ??
          ".gsap-up, .gsap-left, .gsap-right, .gsap-fade, .gsap-scale",
      );
      if (targets.length === 0) return;

      const groups = {
        up: [] as HTMLElement[],
        left: [] as HTMLElement[],
        right: [] as HTMLElement[],
        fade: [] as HTMLElement[],
        scale: [] as HTMLElement[],
      };
      targets.forEach((t) => {
        if (t.classList.contains("gsap-up")) groups.up.push(t);
        else if (t.classList.contains("gsap-left")) groups.left.push(t);
        else if (t.classList.contains("gsap-right")) groups.right.push(t);
        else if (t.classList.contains("gsap-scale")) groups.scale.push(t);
        else if (t.classList.contains("gsap-fade")) groups.fade.push(t);
      });

      const trigger = {
        trigger: el,
        start: options.start ?? "top 82%",
        toggleActions: "play none none none",
      };
      const dur = options.duration ?? 0.9;
      const stagger = options.stagger ?? 0.08;
      const delay = options.delay ?? 0;

      if (groups.up.length)
        gsap.to(groups.up, {
          opacity: 1,
          y: 0,
          duration: dur,
          ease: "power3.out",
          stagger,
          delay,
          scrollTrigger: trigger,
        });
      if (groups.left.length)
        gsap.to(groups.left, {
          opacity: 1,
          x: 0,
          duration: dur,
          ease: "power3.out",
          stagger,
          delay,
          scrollTrigger: trigger,
        });
      if (groups.right.length)
        gsap.to(groups.right, {
          opacity: 1,
          x: 0,
          duration: dur,
          ease: "power3.out",
          stagger,
          delay,
          scrollTrigger: trigger,
        });
      if (groups.scale.length)
        gsap.to(groups.scale, {
          opacity: 1,
          scale: 1,
          duration: dur,
          ease: "power3.out",
          stagger,
          delay,
          scrollTrigger: trigger,
        });
      if (groups.fade.length)
        gsap.to(groups.fade, {
          opacity: 1,
          duration: dur,
          ease: "power2.out",
          stagger,
          delay,
          scrollTrigger: trigger,
        });
    }, el);

    return () => ctx.revert();
  }, [
    options.selector,
    options.start,
    options.stagger,
    options.delay,
    options.duration,
  ]);

  return ref;
}

export { gsap, ScrollTrigger };
