"use client";

import {
  FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap, ScrollTrigger } from "./lib/useGsap";

const BETA_START = new Date("2026-07-20T00:00:00+02:00");
const TOTAL_SLOTS = 500;
const TAKEN_SLOTS = 173;

const interests = [
  "Running",
  "Calisthenics",
  "Boulder",
  "Hochschulsport",
  "Outdoor",
  "Yoga",
  "3×3 Basketball",
  "Skate",
];

const benefits = [
  {
    n: "01",
    title: "Erster Zugang",
    body: "Du bist drin, bevor REASN öffentlich wird. iOS · Android · Web.",
  },
  {
    n: "02",
    title: "Lokal verankert",
    body: "Beta nur in Hannover. Echte Spots, echte Crews. Kein Demo-Content.",
  },
  {
    n: "03",
    title: "Stimme im Produkt",
    body: "Wöchentliche Sessions. Was du sagst, formt was wir bauen.",
  },
];

function diffParts(target: Date, now: Date) {
  const ms = Math.max(0, target.getTime() - now.getTime());
  const sec = Math.floor(ms / 1000);
  const days = Math.floor(sec / 86400);
  const hours = Math.floor((sec % 86400) / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;
  return { days, hours, minutes, seconds };
}

const pad = (n: number, w = 2) => String(n).padStart(w, "0");

export default function Beta() {
  const ref = useRef<HTMLElement | null>(null);
  const fillRef = useRef<HTMLSpanElement | null>(null);
  const [now, setNow] = useState(() => new Date());
  const [pills, setPills] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const { days, hours, minutes, seconds } = useMemo(
    () => diffParts(BETA_START, now),
    [now],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Section header + intro
      gsap.to(el.querySelectorAll(".beta-head .gsap-up"), {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: "top 80%" },
      });

      // Date rows
      gsap.from(el.querySelectorAll(".beta-date .row"), {
        opacity: 0,
        x: -60,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: el.querySelector(".beta-date"),
          start: "top 78%",
        },
      });

      // Countdown cells flip in
      gsap.from(el.querySelectorAll(".beta-countdown .cell"), {
        opacity: 0,
        y: 30,
        scale: 0.96,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: el.querySelector(".beta-countdown"),
          start: "top 85%",
        },
      });

      // Slot meter fill
      if (fillRef.current) {
        const pct = (TAKEN_SLOTS / TOTAL_SLOTS) * 100;
        gsap.fromTo(
          fillRef.current,
          { width: "0%" },
          {
            width: `${pct}%`,
            duration: 1.6,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el.querySelector(".beta-slots"),
              start: "top 80%",
            },
          },
        );

        // Counter for taken slots
        const counter = el.querySelector<HTMLElement>("[data-slot-count]");
        if (counter) {
          const obj = { v: 0 };
          gsap.to(obj, {
            v: TAKEN_SLOTS,
            duration: 1.6,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el.querySelector(".beta-slots"),
              start: "top 80%",
            },
            onUpdate: () => {
              counter.textContent = String(Math.round(obj.v));
            },
          });
        }
      }

      // Benefits stagger
      gsap.from(el.querySelectorAll(".beta-benefit"), {
        opacity: 0,
        y: 36,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: el.querySelector(".beta-benefits"),
          start: "top 82%",
        },
      });

      // Form wrap reveal
      gsap.from(el.querySelector(".beta-form-wrap"), {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el.querySelector(".beta-form-wrap"),
          start: "top 85%",
        },
      });
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  const togglePill = (label: string) => {
    setPills((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const remaining = TOTAL_SLOTS - TAKEN_SLOTS;

  return (
    <section ref={ref} className="beta" id="beta">
      <div className="beta-head">
        <div>
          <span className="num gsap-up">05 · Werde Teil der Beta</span>
          <h2 className="gsap-up">
            Drei Tage.<br />
            Eine Stadt.<br />
            Eine Bewegung.
          </h2>
        </div>
        <p className="small gsap-up">
          Closed Beta · 20.–22. Juli 2026 · Hannover. Wir öffnen die App für
          eine ausgewählte Gruppe, drei Tage vor den Finals 26. Wer dabei ist,
          sieht REASN zuerst — und prägt, was es wird.
        </p>
      </div>

      <div className="beta-date">
        <div className="row">
          <span className="big">20—22</span>
          <span className="label">Daten · Beta-Fenster</span>
        </div>
        <div className="row">
          <span className="big">Juli</span>
          <span className="label">Monat · Sommer Hannover</span>
        </div>
        <div className="row">
          <span className="big">2026</span>
          <span className="label">Jahr · Issue 001</span>
        </div>
      </div>

      <div className="beta-countdown" aria-label="Countdown zum Beta-Launch">
        <div className="cell">
          <span className="v">{pad(days, days > 99 ? 3 : 2)}</span>
          <span className="k">Tage</span>
        </div>
        <div className="cell">
          <span className="v">{pad(hours)}</span>
          <span className="k">Stunden</span>
        </div>
        <div className="cell">
          <span className="v">{pad(minutes)}</span>
          <span className="k">Minuten</span>
        </div>
        <div className="cell">
          <span className="v">{pad(seconds)}</span>
          <span className="k">Sekunden</span>
        </div>
      </div>

      <div className="beta-slots">
        <div>
          <span className="heading">Status · Plätze in der Beta</span>
          <div className="count">
            <span data-slot-count>0</span>
            <span style={{ color: "var(--paper-60)" }}>
              {" "}
              / {TOTAL_SLOTS}
            </span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--paper-60)",
              marginTop: 6,
            }}
          >
            <span className="em" style={{ color: "var(--orange)" }}>
              {remaining}
            </span>{" "}
            Plätze offen
          </div>
        </div>
        <div>
          <div className="meter" aria-hidden>
            <span className="fill" ref={fillRef} />
          </div>
          <div className="meter-meta">
            <span>Vergeben · {TAKEN_SLOTS}</span>
            <span>{Math.round((TAKEN_SLOTS / TOTAL_SLOTS) * 100)} %</span>
          </div>
        </div>
      </div>

      <div className="beta-benefits">
        {benefits.map((b) => (
          <div key={b.n} className="beta-benefit">
            <span className="b-num">— {b.n}</span>
            <h3 className="b-title">{b.title}</h3>
            <p className="b-body">{b.body}</p>
          </div>
        ))}
      </div>

      <div className="beta-form-wrap">
        <div className="beta-form-side">
          <span className="eyebrow">— Beta-Bewerbung · ehrlich</span>
          <h3 className="h">
            Du<br />
            kommst<br />
            <span className="em">rein.</span>
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              lineHeight: 1.55,
              color: "var(--paper-80)",
              margin: 0,
              maxWidth: "36ch",
            }}
          >
            Oder du bekommst eine ehrliche Absage. Wir verschicken keine
            Bestätigungs-Mails ins Leere. Wer dabei ist, weiß es bis 10. Juli.
          </p>
          <div className="meta">
            <span>Hannover</span>
            <span>iOS · Android</span>
            <span>500 Plätze</span>
            <span>Closed Beta</span>
          </div>
        </div>

        <form className="beta-form" onSubmit={onSubmit}>
          <div className="row">
            <div className="lbl">01 · Name</div>
            <input
              type="text"
              placeholder="Vorname Nachname"
              required
              disabled={submitted}
            />
          </div>
          <div className="row">
            <div className="lbl">02 · E-Mail</div>
            <input
              type="email"
              placeholder="du@hannover.de"
              required
              disabled={submitted}
            />
          </div>
          <div className="row">
            <div className="lbl">03 · Was bewegt dich?</div>
            <div className="pills">
              {interests.map((label) => (
                <button
                  key={label}
                  type="button"
                  className={`pill ${pills.has(label) ? "on" : ""}`}
                  onClick={() => togglePill(label)}
                  disabled={submitted}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className={`submit ${submitted ? "done" : ""}`}
            disabled={submitted}
          >
            <span>
              {submitted ? "Eingetragen · Danke" : "Beta beantragen"}
            </span>
            <span>{submitted ? "✓" : "→"}</span>
          </button>
          <div className="fineprint">
            Keine Werbung. Keine Drittweitergabe. Du bekommst eine Zusage oder
            eine Absage — beides ehrlich.
          </div>
        </form>
      </div>
    </section>
  );
}
