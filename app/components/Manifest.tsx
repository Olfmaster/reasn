"use client";

import { useScrollReveal } from "./lib/useGsap";

const gaps = [
  {
    n: "Lücke 01",
    title: ["Niemand,", "mit dem."],
    miss: "— Es fehlt: Gemeinschaft & Sportpartner",
    body: "Wer alleine läuft, hört auf. Wer mit anderen läuft, läuft weiter. Sport ohne Anschluss skaliert nicht.",
  },
  {
    n: "Lücke 02",
    title: ["Nichts,", "was man findet."],
    miss: "— Es fehlt: Sichtbarkeit lokaler Angebote",
    body: "Der Runclub um die Ecke, der Calisthenics-Park, das Yoga im Hof. Alles da. Nirgendwo zusammen sichtbar.",
  },
  {
    n: "Lücke 03",
    title: ["Keine", "spontane Tür."],
    miss: "— Es fehlt: niedrigschwelliger Zugang",
    body: "Mitgliedschaft, Termin, Anmeldung. Sport scheitert oft am ersten Schritt. REASN baut die Tür neu.",
  },
];

export default function Manifest() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 0.12 });

  return (
    <section ref={ref} className="manifest" id="manifest">
      <div className="section-head">
        <div className="num gsap-up">01 · Manifest</div>
        <h2 className="title gsap-up">
          Das Problem<br />
          ist nicht <span style={{ color: "var(--orange)" }}>Motivation.</span>
        </h2>
      </div>

      <p className="lead gsap-up">
        Menschen bleiben aktiv,<br />
        wenn Bewegung <span className="em">sozial</span> wird.<br />
        Die These ist einfach.<br />
        Die Lösung lokal.
      </p>

      <div className="gaps">
        {gaps.map((g, i) => (
          <div key={i} className="gap gsap-up">
            <div className="gap-num">{g.n}</div>
            <div>
              <h3>
                {g.title[0]}
                <br />
                {g.title[1]}
              </h3>
              <div className="fehlt">{g.miss}</div>
              <p>{g.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
