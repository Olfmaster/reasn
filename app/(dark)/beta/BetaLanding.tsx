"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../../components/lib/useGsap";
import { useScrollReveal } from "../../components/lib/useGsap";
import FinalsSchedule from "./FinalsSchedule";

const TICKER = "Leinewelle · Maschsee · Linden · Hannover · ";

const features = [
  {
    tag: "01 · Spots",
    title: "Lokale Spots",
    desc: "Finde Sportorte in deiner Nähe — Tischtennis, Calisthenics, Beachvolleyball, Bouldern. Kuratiert, nicht generiert.",
  },
  {
    tag: "02 · Sessions",
    title: "Spontane Sessions",
    desc: "Wer will heute Abend noch kicken? Ruf eine offene Session aus und sieh, wer dabei ist — keine lange Planung.",
  },
  {
    tag: "03 · Matching",
    title: "Sportbuddy-Matching",
    desc: "Finde jemanden auf deinem Level, in deiner Ecke der Stadt, für deine Sportart. Aus der App direkt auf den Court.",
  },
  {
    tag: "04 · Discovery",
    title: "Community-Discovery",
    desc: "Lauf-Gruppen, Calisthenics-Crews, Yoga-Circles — werde sichtbar oder finde Communities, die es schon gibt.",
  },
  {
    tag: "05 · Kurse",
    title: "Kursangebote",
    desc: "Lokale Studios, Vereine und Trainer mit echten Angeboten — gefiltert auf das, was dich wirklich interessiert.",
  },
  {
    tag: "06 · Chats",
    title: "Gruppen & Chats",
    desc: "Deine Community hat einen Platz. Koordiniert, verabredet, bleibt in Bewegung — innerhalb der App.",
  },
];

const finalsSpots = [
  "Leinewelle",
  "Neues Rathaus",
  "Maschsee",
  "Rapid Surfen",
];

/* ── NAV ──────────────────────────────────────────────── */
function BdNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`bd-nav ${scrolled ? "scrolled" : ""}`}>
      <a className="bd-logo" href="#top">
        reasn<span>.fit</span>
      </a>
      <div className="bd-nav-right">
        <a className="bd-nav-link" href="#finals">
          Finals-Spielplan
        </a>
        <a className="bd-nav-cta" href="#beta">
          Beta-Zugang
        </a>
      </div>
    </nav>
  );
}

/* ── HERO ─────────────────────────────────────────────── */
function BdHero() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.set(".bd-hero .bd-eyebrow", { opacity: 0, y: -10 });
      gsap.set(".bd-headline .bd-line", { yPercent: 110, opacity: 0 });
      gsap.set(".bd-sub", { opacity: 0, y: 20 });
      gsap.set(".bd-actions > *", { opacity: 0, y: 18 });
      gsap.set(".bd-hero-ticker", { opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.15,
      });
      tl.to(".bd-hero .bd-eyebrow", { opacity: 1, y: 0, duration: 0.6 }, 0)
        .to(
          ".bd-headline .bd-line",
          { yPercent: 0, opacity: 1, duration: 1.05, stagger: 0.1, ease: "expo.out" },
          0.2,
        )
        .to(".bd-sub", { opacity: 1, y: 0, duration: 0.7 }, 0.6)
        .to(".bd-actions > *", { opacity: 1, y: 0, duration: 0.55, stagger: 0.1 }, 0.75)
        .to(".bd-hero-ticker", { opacity: 0.05, duration: 0.8 }, 0.4);
    }, root);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <header className="bd-hero" id="top" ref={ref}>
      <div className="bd-hero-ticker" aria-hidden>
        <div className="bd-ticker-track">
          <span>{TICKER.repeat(4)}</span>
          <span>{TICKER.repeat(4)}</span>
        </div>
      </div>

      <div className="bd-hero-inner">
        <span className="bd-eyebrow">
          <span className="pulse" /> Hannover · Beta-Launch Juli 2026
        </span>
        <h1 className="bd-headline">
          <span className="bd-line-wrap">
            <span className="bd-line">Sport passiert.</span>
          </span>
          <span className="bd-line-wrap">
            <span className="bd-line">
              <em>Finde</em> dein Team.
            </span>
          </span>
        </h1>
        <p className="bd-sub">
          Die meisten hören auf, weil sie niemanden haben, der mitmacht. REASN
          verbindet dich mit lokalen Sportcommunities, spontanen Sessions und
          Sportpartnern in deiner Stadt.
        </p>
        <div className="bd-actions">
          <a className="bd-btn bd-btn-primary" href="#beta">
            Jetzt für Beta anmelden <span className="arrow">→</span>
          </a>
          <a className="bd-btn bd-btn-ghost" href="#was-ist-reasn">
            Mehr erfahren ↓
          </a>
        </div>
      </div>
    </header>
  );
}

/* ── PROBLEM ──────────────────────────────────────────── */
function BdProblem() {
  const ref = useScrollReveal<HTMLElement>({ start: "top 85%" });
  return (
    <section className="bd-section bd-problem" id="was-ist-reasn" ref={ref}>
      <h2 className="bd-problem-headline gsap-up">
        Das Problem ist nicht fehlende Motivation.
      </h2>
      <div className="bd-problem-text">
        <p className="gsap-up">
          Millionen Menschen wollen aktiv sein — aber sie tun es nicht. Nicht
          weil sie zu faul sind. Sondern weil{" "}
          <strong>Bewegung ohne Community nicht hält.</strong>
        </p>
        <p className="gsap-up">
          Lokale Sportangebote sind unsichtbar. Informelle Gruppen existieren,
          aber man findet sie nicht. Spontane Sessions scheitern daran, dass
          niemand weiß, wo die anderen sind.
        </p>
        <p className="gsap-up">
          <strong>REASN ist die digitale Infrastruktur für lokale
          Sportcommunities.</strong>{" "}
          Keine Buchungsplattform. Kein Fitness-Tracker. Eine soziale Schicht
          über dem Sport, der in deiner Stadt schon passiert.
        </p>
      </div>
    </section>
  );
}

/* ── FEATURES ─────────────────────────────────────────── */
function BdFeatures() {
  const ref = useScrollReveal<HTMLElement>({ start: "top 85%", stagger: 0.07 });
  return (
    <section className="bd-section" ref={ref}>
      <div className="bd-section-label gsap-up">Was REASN kann</div>
      <div className="bd-features-grid">
        {features.map((f) => (
          <div className="bd-feature gsap-up" key={f.title}>
            <div className="bd-feature-icon">{f.tag}</div>
            <h3 className="bd-feature-title">{f.title}</h3>
            <p className="bd-feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── FINALS BANNER ────────────────────────────────────── */
function BdFinals() {
  const ref = useScrollReveal<HTMLElement>({ start: "top 88%" });
  return (
    <section className="bd-finals-wrap" id="finals" ref={ref}>
      <div className="bd-finals gsap-up">
        <div>
          <div className="bd-eyebrow">Finals 2026 · Hannover · 23.–26. Juli</div>
          <h3>Hannover zeigt, was urban Sport bedeutet.</h3>
          <p>
            Breaking am Rathaus. Surfen auf der Leinewelle. 3×3 Basketball mitten
            in der Stadt. Genau das sind die Communities, für die REASN gebaut
            ist. Wir sind vor Ort — komm vorbei und schau dir die Beta an.
          </p>
        </div>
        <div className="bd-finals-spots">
          {finalsSpots.map((s) => (
            <span className="bd-finals-spot" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="bd-finals-schedule gsap-up">
        <div className="bd-finals-schedule-head">
          <span className="bd-section-label">Spielplan · Finals 26</span>
          <p>
            Vier Tage, neun Locations. Filtere nach{" "}
            <strong>REASN-Spots</strong>, um zu sehen, wo wir während der Finals
            vor Ort sind.
          </p>
        </div>
        <FinalsSchedule />
      </div>
    </section>
  );
}

/* ── BETA CTA ─────────────────────────────────────────── */
function BdCta() {
  const ref = useScrollReveal<HTMLElement>({ start: "top 85%" });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current?.value.trim() ?? "";
    if (!value.includes("@")) {
      inputRef.current?.focus();
      return;
    }
    // In production: POST to backend / Mailchimp / etc.
    setSubmitted(true);
  };

  return (
    <section className="bd-cta" id="beta" ref={ref}>
      <span className="bd-eyebrow gsap-up">Beta · Hannover · Juli 2026</span>
      <h2 className="bd-cta-headline gsap-up">Du bist die erste Welle.</h2>
      <p className="bd-cta-sub gsap-up">
        Wir laden eine begrenzte Anzahl Menschen in Hannover in die Beta ein —
        bevor der offizielle Launch. Kein Spam. Nur ein Link, wenn es so weit
        ist.
      </p>

      {submitted ? (
        <p className="bd-cta-success gsap-up">
          ✓ Du bist dabei. Wir melden uns vor dem Launch.
        </p>
      ) : (
        <form className="bd-form gsap-up" onSubmit={onSubmit}>
          <input
            ref={inputRef}
            type="email"
            placeholder="deine@email.de"
            autoComplete="email"
            aria-label="E-Mail-Adresse"
          />
          <button type="submit">Dabei sein</button>
        </form>
      )}

      <p className="bd-cta-note gsap-up">
        Nur für Hannover · Kein Marketing · Abmeldung jederzeit
      </p>
    </section>
  );
}

/* ── FOOTER ───────────────────────────────────────────── */
function BdFooter() {
  return (
    <footer className="bd-footer">
      <span>© 2026 REASN · for moving Communities</span>
      <span>
        <a
          href="https://instagram.com/reasn.fit"
          target="_blank"
          rel="noopener"
        >
          @reasn.fit
        </a>
        {" · "}
        <a href="mailto:hello@reasn.fit">Kontakt</a>
      </span>
    </footer>
  );
}

export default function BetaLanding() {
  return (
    <div className="beta-dark">
      <BdNav />
      <main>
        <BdHero />
        <div className="bd-divider" />
        <BdProblem />
        <div className="bd-divider" />
        <BdFeatures />
        <BdFinals />
        <BdCta />
      </main>
      <BdFooter />
    </div>
  );
}
