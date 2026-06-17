"use client";

import { useState } from "react";

type FinalsEvent = {
  day: string;
  time: string;
  sport: string;
  detail: string;
  loc: string;
  free: boolean;
};

const events: FinalsEvent[] = [
  // Do 23. Juli
  { day: "Do 23. Juli", time: "08:45–14:15", sport: "7er-Rugby", detail: "Gruppenspiele Frauen & Männer", loc: "Erika-Fisch-Stadion", free: true },
  { day: "Do 23. Juli", time: "09:00–11:30", sport: "Beach-Volleyball", detail: "Viertelfinals Frauen", loc: "Opernplatz", free: false },
  { day: "Do 23. Juli", time: "09:00", sport: "Coastal Rowing", detail: "Männer Einer (CM1x)", loc: "Steinhuder Meer", free: true },
  { day: "Do 23. Juli", time: "09:00", sport: "Rudern", detail: "Vorläufe", loc: "Maschsee", free: true },
  { day: "Do 23. Juli", time: "09:30–19:00", sport: "Flag Football", detail: "Herren Gruppenphase", loc: "Erika-Fisch-Stadion", free: true },
  { day: "Do 23. Juli", time: "09:30", sport: "Coastal Rowing", detail: "Frauen Einer (CW1x)", loc: "Steinhuder Meer", free: true },
  { day: "Do 23. Juli", time: "09:30", sport: "Kanu", detail: "Vorläufe Sprint & Polo", loc: "Maschsee", free: true },
  { day: "Do 23. Juli", time: "10:00", sport: "3x3 Basketball", detail: "Vorrundenspiele", loc: "Neues Rathaus", free: true },
  { day: "Do 23. Juli", time: "10:00", sport: "Bogensport", detail: "Qualifikation", loc: "Neues Rathaus", free: true },
  { day: "Do 23. Juli", time: "10:00", sport: "Speed-Klettern", detail: "Qualifikation", loc: "Opernplatz", free: true },
  { day: "Do 23. Juli", time: "11:00", sport: "Gerätturnen", detail: "Männer Mehrkampf", loc: "ZAG Arena", free: false },
  { day: "Do 23. Juli", time: "11:00", sport: "Judo", detail: "Vorrunden", loc: "Swiss Life Hall", free: false },
  { day: "Do 23. Juli", time: "12:00", sport: "Breaking", detail: "Qualifikation B-Boys & B-Girls", loc: "Neues Rathaus", free: true },
  { day: "Do 23. Juli", time: "12:00", sport: "BMX Flatland", detail: "Qualifikation", loc: "Neues Rathaus", free: true },
  { day: "Do 23. Juli", time: "14:00", sport: "Segeln", detail: "Wettfahrten Tag 1", loc: "Steinhuder Meer", free: true },
  { day: "Do 23. Juli", time: "15:00", sport: "Trampolinturnen", detail: "Frauen & Männer Finals", loc: "ZAG Arena", free: false },
  { day: "Do 23. Juli", time: "16:15", sport: "Schwimmen", detail: "Endläufe 50m Rücken", loc: "Stadionbad", free: false },
  { day: "Do 23. Juli", time: "17:00", sport: "Karate", detail: "Vorrunden Kata & Kumite", loc: "Swiss Life Hall", free: false },
  { day: "Do 23. Juli", time: "19:00", sport: "Leichtathletik", detail: "Stabhochsprung", loc: "Opernplatz", free: true },

  // Fr 24. Juli
  { day: "Fr 24. Juli", time: "08:45–14:00", sport: "7er-Rugby", detail: "Finalrunden Frauen & Männer", loc: "Erika-Fisch-Stadion", free: true },
  { day: "Fr 24. Juli", time: "09:00", sport: "Coastal Rowing", detail: "Frauen & Männer Doppelzweier", loc: "Steinhuder Meer", free: true },
  { day: "Fr 24. Juli", time: "09:00", sport: "Rudern", detail: "Vorläufe & Hoffnungsläufe", loc: "Maschsee", free: true },
  { day: "Fr 24. Juli", time: "09:00", sport: "Kanu", detail: "Halbfinale Sprint & Polo", loc: "Maschsee", free: true },
  { day: "Fr 24. Juli", time: "09:00", sport: "Beach-Volleyball", detail: "Halbfinals Männer", loc: "Opernplatz", free: false },
  { day: "Fr 24. Juli", time: "09:00", sport: "Flag Football", detail: "Damen Gruppenphase", loc: "Erika-Fisch-Stadion", free: true },
  { day: "Fr 24. Juli", time: "10:00", sport: "3x3 Basketball", detail: "Vorrunden & Viertelfinals", loc: "Neues Rathaus", free: true },
  { day: "Fr 24. Juli", time: "10:00", sport: "Bogensport", detail: "Elimination Runden", loc: "Neues Rathaus", free: true },
  { day: "Fr 24. Juli", time: "10:00", sport: "Speed-Klettern", detail: "Halbfinale", loc: "Opernplatz", free: true },
  { day: "Fr 24. Juli", time: "10:00", sport: "Gewichtheben", detail: "Ligafinale ESN Bundesliga", loc: "Swiss Life Hall", free: false },
  { day: "Fr 24. Juli", time: "10:00", sport: "Ju-Jutsu", detail: "Vorrunden Fighting & Duo", loc: "Swiss Life Hall", free: false },
  { day: "Fr 24. Juli", time: "11:00", sport: "Judo", detail: "Medaillenkämpfe", loc: "Swiss Life Hall", free: false },
  { day: "Fr 24. Juli", time: "14:00", sport: "Segeln", detail: "Wettfahrten Tag 2", loc: "Steinhuder Meer", free: true },
  { day: "Fr 24. Juli", time: "16:00", sport: "Gerätturnen", detail: "Frauen Mehrkampf", loc: "ZAG Arena", free: false },
  { day: "Fr 24. Juli", time: "17:45", sport: "Schwimmen", detail: "Endläufe Lagen & Freistil", loc: "Stadionbad", free: false },
  { day: "Fr 24. Juli", time: "19:00", sport: "Leichtathletik", detail: "Stabhochsprung Finals", loc: "Opernplatz", free: true },
  { day: "Fr 24. Juli", time: "20:00", sport: "Karate", detail: "Halbfinals & Finals Kata", loc: "Swiss Life Hall", free: false },

  // Sa 25. Juli
  { day: "Sa 25. Juli", time: "09:00", sport: "Triathlon", detail: "Elite Frauen & Männer", loc: "Steinhuder Meer", free: true },
  { day: "Sa 25. Juli", time: "09:00", sport: "Coastal Rowing", detail: "Finals alle Klassen", loc: "Steinhuder Meer", free: true },
  { day: "Sa 25. Juli", time: "09:00", sport: "Rudern", detail: "Kleine Finals & A-Finals", loc: "Maschsee", free: true },
  { day: "Sa 25. Juli", time: "09:00", sport: "Kanu", detail: "Finals Sprint & Polo", loc: "Maschsee", free: true },
  { day: "Sa 25. Juli", time: "09:00", sport: "Segeln", detail: "Medal Race", loc: "Steinhuder Meer", free: true },
  { day: "Sa 25. Juli", time: "09:00", sport: "7er-Rugby", detail: "Platzierungsspiele", loc: "Erika-Fisch-Stadion", free: true },
  { day: "Sa 25. Juli", time: "09:00", sport: "Flag Football", detail: "Finals Damen & Herren", loc: "Erika-Fisch-Stadion", free: true },
  { day: "Sa 25. Juli", time: "10:00", sport: "3x3 Basketball", detail: "Halbfinals & Finals", loc: "Neues Rathaus", free: true },
  { day: "Sa 25. Juli", time: "10:00", sport: "Breaking", detail: "Top 16 B-Boys", loc: "Neues Rathaus", free: true },
  { day: "Sa 25. Juli", time: "10:00", sport: "Beach-Volleyball", detail: "Finals Frauen & Männer", loc: "Opernplatz", free: false },
  { day: "Sa 25. Juli", time: "10:00", sport: "Speed-Klettern", detail: "Finals Frauen & Männer", loc: "Opernplatz", free: true },
  { day: "Sa 25. Juli", time: "10:00", sport: "Bogensport", detail: "Finals", loc: "Neues Rathaus", free: true },
  { day: "Sa 25. Juli", time: "10:00", sport: "Ju-Jutsu", detail: "Finals Fighting & Duo", loc: "Swiss Life Hall", free: false },
  { day: "Sa 25. Juli", time: "11:00", sport: "Gerätturnen", detail: "Gerätefinals I Frauen & Männer", loc: "ZAG Arena", free: false },
  { day: "Sa 25. Juli", time: "12:00", sport: "BMX Flatland", detail: "Finals", loc: "Neues Rathaus", free: true },
  { day: "Sa 25. Juli", time: "15:00", sport: "Rhythmische Sportgymnastik", detail: "Mehrkampf Einzel", loc: "ZAG Arena", free: false },
  { day: "Sa 25. Juli", time: "16:00", sport: "Rapid Surfen", detail: "Qualifikation & Halbfinale", loc: "Leinewelle", free: true },
  { day: "Sa 25. Juli", time: "16:15", sport: "Schwimmen", detail: "Endläufe 50m Brust", loc: "Stadionbad", free: false },
  { day: "Sa 25. Juli", time: "19:00", sport: "Rhythmische Sportgymnastik", detail: "Mehrkampf Gruppe", loc: "ZAG Arena", free: false },
  { day: "Sa 25. Juli", time: "20:00", sport: "Breaking", detail: "Finals B-Boys & B-Girls", loc: "Neues Rathaus", free: true },
  { day: "Sa 25. Juli", time: "20:00", sport: "Windsurfen", detail: "Finals Speed-Windsurfen", loc: "Steinhuder Meer", free: true },

  // So 26. Juli
  { day: "So 26. Juli", time: "10:00", sport: "Rapid Surfen", detail: "Halbfinals & Finals", loc: "Leinewelle", free: true },
  { day: "So 26. Juli", time: "10:00", sport: "Windsurfen", detail: "Freestyle Finals", loc: "Steinhuder Meer", free: true },
  { day: "So 26. Juli", time: "10:00", sport: "Karate", detail: "Finals Kumite", loc: "Swiss Life Hall", free: false },
  { day: "So 26. Juli", time: "11:00", sport: "Gerätturnen", detail: "Gerätefinals II Frauen & Männer", loc: "ZAG Arena", free: false },
  { day: "So 26. Juli", time: "12:00", sport: "3x3 Basketball", detail: "Platzierungsspiele & Medaillen", loc: "Neues Rathaus", free: true },
  { day: "So 26. Juli", time: "15:00", sport: "Rhythmische Sportgymnastik", detail: "Gerätefinals Einzel", loc: "ZAG Arena", free: false },
  { day: "So 26. Juli", time: "16:00", sport: "Schwimmen", detail: "Endläufe Schmetterling", loc: "Stadionbad", free: false },
  { day: "So 26. Juli", time: "18:00", sport: "Rhythmische Sportgymnastik", detail: "Gerätefinals Gruppe", loc: "ZAG Arena", free: false },
];

// Spots, an denen REASN während der Finals vor Ort ist.
const REASN_SPOTS = ["Neues Rathaus", "Leinewelle", "Maschsee"];

const REASN_FILTER = "REASN-Spots";

const LOCATIONS = [
  "Alle Locations",
  REASN_FILTER,
  "Neues Rathaus",
  "Leinewelle",
  "Maschsee",
  "Opernplatz",
  "ZAG Arena",
  "Swiss Life Hall",
  "Stadionbad",
  "Steinhuder Meer",
  "Erika-Fisch-Stadion",
];

const DAYS = ["Do 23. Juli", "Fr 24. Juli", "Sa 25. Juli", "So 26. Juli"];

// Dark-Mode Farbcodierung pro Location (heller Akzent auf dunklem Grund).
const locHue: Record<string, string> = {
  "Neues Rathaus": "#FF5E04",
  Leinewelle: "#5BB8FF",
  Maschsee: "#4FD17E",
  Opernplatz: "#B98BFF",
  "ZAG Arena": "#F5C84B",
  "Swiss Life Hall": "#FF7A7A",
  Stadionbad: "#4FD0E0",
  "Steinhuder Meer": "#5FD0A0",
  "Erika-Fisch-Stadion": "#B8C2C8",
};

function locStyle(loc: string) {
  const c = locHue[loc] ?? "#B8C2C8";
  return { color: c, background: `${c}1f`, borderColor: `${c}55` };
}

export default function FinalsSchedule() {
  const [activeLoc, setActiveLoc] = useState("Alle Locations");

  const matches = (e: FinalsEvent) => {
    if (activeLoc === "Alle Locations") return true;
    if (activeLoc === REASN_FILTER) return REASN_SPOTS.includes(e.loc);
    return e.loc === activeLoc;
  };

  const filtered = (day: string) =>
    events.filter((e) => e.day === day && matches(e));

  return (
    <div className="bd-fs">
      <div className="bd-fs-filters">
        {LOCATIONS.map((loc) => (
          <button
            key={loc}
            type="button"
            onClick={() => setActiveLoc(loc)}
            className={`bd-fs-filter ${activeLoc === loc ? "on" : ""} ${
              loc === REASN_FILTER ? "reasn" : ""
            }`}
          >
            {loc}
          </button>
        ))}
      </div>

      {DAYS.map((day) => {
        const rows = filtered(day);
        if (!rows.length) return null;
        return (
          <div key={day} className="bd-fs-block">
            <div className="bd-fs-day">{day}</div>
            {rows.map((e, i) => {
              const isReasn = REASN_SPOTS.includes(e.loc);
              return (
                <div
                  key={`${e.sport}-${e.time}-${i}`}
                  className={`bd-fs-row ${isReasn ? "reasn" : ""}`}
                >
                  <div className="bd-fs-time">{e.time}</div>
                  <div>
                    <div className="bd-fs-sport">
                      {e.sport}
                      {isReasn && (
                        <span className="bd-fs-reasn-badge">REASN vor Ort</span>
                      )}
                    </div>
                    <div className="bd-fs-detail">{e.detail}</div>
                    <span
                      className={`bd-fs-tag ${e.free ? "free" : "ticket"}`}
                    >
                      {e.free ? "kostenlos" : "Ticket"}
                    </span>
                  </div>
                  <div>
                    <span className="bd-fs-loc" style={locStyle(e.loc)}>
                      {e.loc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      <div className="bd-fs-legend">
        <span>
          <span className="dot" style={{ background: "#4FD17E" }} />
          Kostenloser Eintritt
        </span>
        <span>
          <span className="dot" style={{ background: "var(--orange)" }} />
          Ticket erforderlich
        </span>
        <span>
          <span className="dot reasn" />
          REASN vor Ort
        </span>
      </div>
    </div>
  );
}
