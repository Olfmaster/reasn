"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./lib/useGsap";

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const imageBandRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.set(".hero-meta-item", { opacity: 0, y: -10 });
      gsap.set(".hero-title .line", { yPercent: 110, opacity: 0 });
      gsap.set(".hero-strike-bar", { scaleX: 0, transformOrigin: "left center" });
      gsap.set(".hero-copy p", { opacity: 0, y: 20 });
      gsap.set(".hero-copy .ctas > *", { opacity: 0, y: 18 });
      gsap.set(".hero-photo", { opacity: 0, y: 30, scale: 1.04 });
      gsap.set(".hero-ticker", { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.15 });

      tl.to(".hero-meta-item", { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, 0)
        .to(
          ".hero-title .line",
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.05,
            stagger: 0.09,
            ease: "expo.out",
          },
          0.25,
        )
        .to(
          ".hero-strike-bar",
          { scaleX: 1, duration: 0.55, ease: "expo.inOut" },
          0.95,
        )
        .to(".hero-copy p", { opacity: 1, y: 0, duration: 0.7 }, 0.65)
        .to(
          ".hero-copy .ctas > *",
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.1 },
          0.8,
        )
        .to(
          ".hero-photo",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            stagger: 0.12,
            ease: "expo.out",
          },
          0.5,
        )
        .to(".hero-ticker", { opacity: 1, duration: 0.6 }, 1.1);

      // Parallax on image band
      if (imageBandRef.current) {
        gsap.to(imageBandRef.current, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Looping subtle scale on hero photos
      gsap.to(".hero-photo img", {
        scale: 1.06,
        duration: 14,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
      });
    }, root);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <header className="hero" id="top" ref={rootRef}>
      <div className="hero-meta-row">
        <span className="hero-meta-item">
          <span className="pulse" /> Beta · 20.–22. Juli 2026 · Hannover
        </span>
        <span className="hero-meta-item">Issue 001 / Pre-Launch</span>
        <span className="hero-meta-item">52.3759° N · 9.7320° E</span>
      </div>

      <div className="hero-stage">
        <h1 className="hero-title">
          <span className="line-wrap">
            <span className="line">Bewegung</span>
          </span>
          <span className="line-wrap">
            <span className="line">
              ist <span className="accent">sozial.</span>
            </span>
          </span>
          <span className="line-wrap">
            <span className="line strike">
              Allein.<span className="hero-strike-bar" aria-hidden />
            </span>
          </span>
        </h1>

        <div className="hero-copy">
          <p>
            REASN ist die soziale Infrastruktur lokaler Sport- und
            Bewegungs-Communities. Keine Fitness-App. Keine Buchungsplattform.
            Ein Ort, an dem Hannover seine Bewegung findet.
          </p>
          <div className="ctas">
            <a className="btn orange" href="#beta">
              Beta beitreten <span className="arrow">→</span>
            </a>
            <a
              className="btn outline"
              href="#manifest"
              style={{ color: "var(--paper)", borderColor: "var(--paper-20)" }}
            >
              Das Manifest lesen
            </a>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-image-band" ref={imageBandRef}>
          <div className="hero-photo">
            <Image
              src="/marathon-runners-on-the-street-healthy-lifestyle-2026-01-07-06-37-22-utc.webp"
              alt="Marathon-Läufer auf der Strecke"
              fill
              priority
              sizes="(max-width: 960px) 60vw, 35vw"
            />
            <span className="badge">01 / Run</span>
            <span className="caption">Run · Marathon</span>
          </div>
          <div className="hero-photo">
            <Image
              src="/calisthenics-class-at-outdoor-gym-women-and-men-p-2026-01-09-11-13-54-utc.webp"
              alt="Outdoor Calisthenics Klasse"
              fill
              priority
              sizes="(max-width: 960px) 40vw, 25vw"
            />
            <span className="badge">02 / Outdoor</span>
            <span className="caption">Outdoor · Park</span>
          </div>
          <div className="hero-photo">
            <Image
              src="/woman-doing-push-ups-outdoors-with-man-exercising-2026-01-11-10-14-53-utc.webp"
              alt="Push-Ups im Park"
              fill
              sizes="20vw"
            />
            <span className="badge">03 / Cali</span>
            <span className="caption">Calisthenics</span>
          </div>
        </div>

        <div className="hero-ticker" aria-hidden>
          <div className="ticker-track">
            <span>
              Running · Calisthenics · Boulder · Hochschulsport · Outdoor · Yoga
              · 3×3 Basketball · Breaking · Leinewelle · Skate ·{" "}
            </span>
            <span>
              Running · Calisthenics · Boulder · Hochschulsport · Outdoor · Yoga
              · 3×3 Basketball · Breaking · Leinewelle · Skate ·{" "}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
