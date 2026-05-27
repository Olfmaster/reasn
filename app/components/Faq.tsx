"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "./lib/useGsap";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "Was ist REASN?",
    a: "REASN ist die soziale Infrastruktur für lokale Sport- und Bewegungs-Communities. Keine Fitness-App, keine Buchungsplattform und kein Vereinsportal — sondern ein Ort, der Menschen, Spots und Angebote in einer Stadt verbindet. Beta-Start ist Hannover.",
  },
  {
    q: "Wann startet die REASN Beta?",
    a: "Die Closed Beta läuft vom 20. bis 22. Juli 2026 in Hannover — drei Tage vor den Finals 26. Wir öffnen die App für rund 500 ausgewählte Teilnehmer:innen.",
  },
  {
    q: "Wo findet die Beta statt?",
    a: "Hannover, Niedersachsen. Sechs Beta-Spots in den ersten Stadtteilen: Linden (Calisthenics), Eilenriede (Run), Maschsee (Run), List (Outdoor-Gym), Leinewelle (Surf) und Döhrener Wolle (3×3-Basket).",
  },
  {
    q: "Wer kann sich bewerben?",
    a: "Jede:r in Hannover, der oder die regelmäßig Sport macht oder eine Community lokal mitgestalten will. Wir bevorzugen Bewerbungen, die zeigen, was du bewegst und mit wem. Du bekommst entweder eine Zusage oder eine ehrliche Absage bis 10. Juli 2026.",
  },
  {
    q: "Was kostet die Beta?",
    a: "Nichts. Die Beta ist kostenlos. REASN ist während der Pre-Launch-Phase ohne Paywall, ohne Werbung und ohne Drittweitergabe der Daten.",
  },
  {
    q: "Welche Sportarten deckt REASN ab?",
    a: "Beta-Start mit den Kern-Communities Running, Calisthenics, Boulder, Hochschulsport, Outdoor-Fitness, Yoga, 3×3-Basketball und Skate. Die Plattform ist Sport-agnostisch — weitere Communities kommen mit den Nutzer:innen.",
  },
  {
    q: "Auf welchen Plattformen läuft REASN?",
    a: "iOS und Android für die App. Eine Web-Variante ist für die Beta verfügbar. Die App ist deutschsprachig, multilingual ist ab Public-Launch geplant.",
  },
  {
    q: "Warum erst Hannover?",
    a: "Weil soziale Infrastruktur lokal funktioniert oder gar nicht. Hannover ist groß genug für ernsthafte Sport-Szenen und klein genug, um sie zusammenzubringen. Skalierung kommt, wenn das Modell trägt — nicht vorher.",
  },
  {
    q: "Wie unterscheidet sich REASN von Strava, Eversports oder Meetup?",
    a: "Strava trackt Leistung. Eversports verkauft Buchungen. Meetup ist horizontal über alle Themen. REASN ist vertikal nur für Sport und Bewegung — und legt den Fokus auf Communities und niedrigschwelligen Zugang statt auf Tracking oder Monetarisierung.",
  },
];

export default function Faq() {
  const ref = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.to(el.querySelectorAll(".gsap-up"), {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
    }, el);
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section ref={ref} className="faq" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="section-head">
        <div className="num gsap-up">06 · Häufige Fragen</div>
        <h2 className="title gsap-up">
          Was du<br />
          wissen willst.
        </h2>
      </div>

      <ul className="faq-list">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <li key={f.q} className={`faq-item gsap-up ${isOpen ? "open" : ""}`}>
              <button
                type="button"
                className="faq-q"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="faq-idx">— 0{i + 1}</span>
                <span className="faq-text">{f.q}</span>
                <span className="faq-toggle" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                id={`faq-panel-${i}`}
                className="faq-a"
                role="region"
                hidden={!isOpen}
              >
                <p>{f.a}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
