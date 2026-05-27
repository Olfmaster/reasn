"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./lib/useGsap";

const spots = [
  { idx: "01", name: "Linden Calisthenics Park", kind: "Bars · Open" },
  { idx: "02", name: "Eilenriede Loop", kind: "Run · 8 km" },
  { idx: "03", name: "Maschsee Ring", kind: "Run · 6.4 km" },
  { idx: "04", name: "List Outdoor-Gym", kind: "HIIT · Open" },
  { idx: "05", name: "Leinewelle", kind: "Surf · Finals 26" },
  { idx: "06", name: "Döhrener Wolle 3×3", kind: "Basket · Pickup" },
];

const stats = [
  { v: "06", em: "/ ∞", k: "Spots in Beta" },
  { v: "12+", em: "", k: "Communities aktiv" },
  { v: "30169", em: "", k: "Hannover · PLZ" },
];

export default function Hannover() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.to(el.querySelectorAll(".gsap-up"), {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
      gsap.to(el.querySelectorAll(".gsap-fade"), {
        opacity: 1,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 80%" },
      });

      // Banner parallax + scale on the leinewelle image
      const bannerImg = el.querySelector<HTMLElement>(".hannover-banner img");
      if (bannerImg) {
        gsap.to(bannerImg, {
          yPercent: 12,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: el.querySelector(".hannover-banner"),
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Counter for "12+"
      const counter = el.querySelector<HTMLElement>("[data-counter='12']");
      if (counter) {
        const obj = { v: 0 };
        gsap.to(obj, {
          v: 12,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 70%" },
          onUpdate: () => {
            counter.textContent = String(Math.round(obj.v));
          },
        });
      }
    }, el);
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section ref={ref} className="hannover section-dark" id="hannover">
      <div className="section-head">
        <div className="num gsap-up">04 · Standort</div>
        <h2 className="title gsap-up">
          Erst<br />
          Hannover.
        </h2>
      </div>

      <div className="hannover-banner gsap-fade">
        <Image
          src="/leinewelle.webp"
          alt="Leinewelle Hannover — Rapid Surf"
          fill
          sizes="100vw"
        />
        <span className="corner">52.3759° N · 9.7320° E</span>
        <span className="tag">Leinewelle · Finals-Spot</span>
      </div>

      <div className="lead-row">
        <p className="why gsap-up">
          Wir starten dort, wo wir Stadt lesen können. Hannover ist groß genug
          für ernsthafte Szenen — und klein genug, um sie zusammen­zubringen.{" "}
          <em>Beta = Hannover.</em> Skala kommt, wenn das Modell trägt.
        </p>
        <div className="stats">
          {stats.map((s, i) => (
            <div key={s.k} className="stat gsap-up">
              <div className="v">
                {i === 1 ? (
                  <>
                    <span data-counter="12">0</span>
                    <span className="em">+</span>
                  </>
                ) : (
                  <>
                    {s.v}
                    {s.em && <span className="em">{s.em}</span>}
                  </>
                )}
              </div>
              <div className="k">{s.k}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="spots">
        {spots.map((s) => (
          <div key={s.idx} className="spot gsap-up">
            <div className="idx">{s.idx}</div>
            <div className="name">{s.name}</div>
            <div className="kind">{s.kind}</div>
          </div>
        ))}
      </div>

      <div className="pull">
        <p className="quote gsap-up">
          Beta-Launch 20.–22. Juli.<br />
          <span className="em">Drei Tage vor den Finals.</span>
        </p>
        <div className="attrib gsap-up">
          Die Finals 26 in Hannover (23.–26. Juli) bringen Breaking,
          3×3-Basketball und Rapid-Surfen auf die Leinewelle. Das größte
          Sportereignis der Stadt seit 2006 — und genau das urbane, öffentliche
          Sportbild, das REASN verkörpert.
        </div>
      </div>
    </section>
  );
}
