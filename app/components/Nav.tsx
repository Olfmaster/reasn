"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="left">
        <a href="#top" aria-label="REASN — Startseite" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="logo-img"
            src="/logo.png"
            alt="REASN — For Moving Communities"
          />
        </a>
        <span className="locale">Hannover · DE</span>
      </div>
      <div className="mid">
        <a className="link" href="#manifest">Manifest</a>
        <a className="link" href="#communities">Communities</a>
        <a className="link" href="#hannover">Hannover</a>
        <a className="link" href="#beta">Beta</a>
        <a className="link" href="/styleguide">Styleguide ↗</a>
      </div>
      <div className="right">
        <a
          className="link external"
          href="https://instagram.com/reasn.fit"
          target="_blank"
          rel="noopener"
        >
          @reasn.fit ↗
        </a>
        <a className="btn orange" href="#beta">
          Beta · Juli 26 <span className="arrow">→</span>
        </a>
      </div>
    </nav>
  );
}
