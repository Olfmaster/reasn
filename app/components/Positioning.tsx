"use client";

import { useScrollReveal } from "./lib/useGsap";

export default function Positioning() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 0.15 });

  return (
    <section ref={ref} className="positioning section-dark">
      <div className="section-head">
        <div className="num gsap-up">02 · Positionierung</div>
        <h2 className="title gsap-up">
          Was REASN<br />
          nicht ist.
        </h2>
      </div>

      <div className="pos-grid">
        <div className="pos-col no gsap-left">
          <div className="label">Nicht</div>
          <ul>
            <li>Klassische Fitness-App</li>
            <li>Buchungsplattform</li>
            <li>Vereinsportal</li>
            <li>Sport-Marktplatz</li>
          </ul>
        </div>
        <div className="pos-col yes gsap-right">
          <div className="label">Sondern</div>
          <ul>
            <li>Soziale Infrastruktur</li>
            <li>für lokale Sport- &</li>
            <li>Bewegungs-</li>
            <li>Communities.</li>
          </ul>
          <p>
            Eine Plattform, die Menschen, Orte und Angebote miteinander
            verbindet — statt sie zu monetarisieren.
          </p>
        </div>
      </div>
    </section>
  );
}
