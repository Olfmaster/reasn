"use client";

import Image from "next/image";
import { useScrollReveal } from "./lib/useGsap";

type Card = {
  n: string;
  tag: string;
  title: string[];
  scene: string;
  src: string;
  alt: string;
  finals?: boolean;
};

const cards: Card[] = [
  {
    n: "01",
    tag: "Running",
    title: ["Running", "Communities"],
    scene:
      "Hohe soziale Dynamik. Frühaufsteher, Feierabend-Gruppen, Halbmarathon-Crews.",
    src: "/marathon-runners-on-the-street-healthy-lifestyle-2026-01-07-06-37-22-utc.webp",
    alt: "Marathon-Läufer auf der Straße",
  },
  {
    n: "02",
    tag: "Calisthenics",
    title: ["Calis-", "thenics"],
    scene: "Urban, draußen, kostenlos. Die Bars sind da — die Crews bauen sich.",
    src: "/woman-doing-push-ups-outdoors-with-man-exercising-2026-01-11-10-14-53-utc.webp",
    alt: "Push-Ups outdoor",
  },
  {
    n: "03",
    tag: "Boulder",
    title: ["Boulder"],
    scene: "Extrem sozial. Hohe Bindung.",
    src: "/Boulderhalle-Beta.webp",
    alt: "Boulderhalle Beta",
  },
  {
    n: "04",
    tag: "Hochschule",
    title: ["Hochschul-", "sport"],
    scene: "Junge Zielgruppe, starke Netzwerk­effekte.",
    src: "/happy-girl-friends-playing-ping-pong-table-tennis-2026-03-17-00-07-27-utc.webp",
    alt: "Tischtennis mit Freundinnen",
  },
  {
    n: "05",
    tag: "Outdoor",
    title: ["Outdoor-", "Fitness & Yoga"],
    scene:
      "Niedrigschwellig, öffentlich, sichtbar. Sport, der die Stadt einnimmt.",
    src: "/calisthenics-class-at-outdoor-gym-women-and-men-p-2026-01-09-11-13-54-utc.webp",
    alt: "Outdoor Fitness Klasse",
  },
  {
    n: "06",
    tag: "Watch",
    title: ["Finals", "2026"],
    scene: "Breaking · 3×3 · Leinewelle. 23.–26. Juli. Hannover.",
    src: "/young-men-play-basketball-outdoors-on-a-sunny-day-2026-03-27-00-32-37-utc.webp",
    alt: "Streetball-Spieler im Sonnenlicht",
    finals: true,
  },
];

export default function Communities() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 0.1, start: "top 88%" });

  return (
    <section ref={ref} className="communities" id="communities">
      <div className="section-head">
        <div className="num gsap-up">03 · Communities</div>
        <h2 className="title gsap-up">
          Wo Hannover<br />
          sich bewegt.
        </h2>
      </div>

      <div className="community-grid">
        {cards.map((c) => (
          <div
            key={c.n}
            className={`community-card gsap-up ${c.finals ? "finals" : ""}`}
          >
            <div className="photo">
              <Image
                src={c.src}
                alt={c.alt}
                fill
                sizes="(max-width: 960px) 100vw, (max-width: 1400px) 50vw, 33vw"
              />
            </div>
            <div className="overlay" />
            <div className="meta">
              <div className="top">
                <span className="num">{c.n}</span>
                <span>{c.tag}</span>
              </div>
              <div>
                <h3 className="name">
                  {c.title[0]}
                  {c.title[1] && (
                    <>
                      <br />
                      {c.title[1]}
                    </>
                  )}
                </h3>
                <p className="scene">{c.scene}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
