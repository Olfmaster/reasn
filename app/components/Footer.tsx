"use client";

import { useScrollReveal } from "./lib/useGsap";

export default function Footer() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 0.1 });

  return (
    <footer ref={ref} className="footer">
      <div className="top">
        <div className="brand-block gsap-up">
          <p className="brand-display">
            REASN<span className="stripe" />
          </p>
          <p className="tag-line">For Moving Communities.</p>
          <p className="sub">Hannover · Made in 30169 · Beta Juli 2026</p>
        </div>

        <div className="col gsap-up">
          <h4>Plattform</h4>
          <ul>
            <li>
              <a href="#manifest">Manifest</a>
            </li>
            <li>
              <a href="#communities">Communities</a>
            </li>
            <li>
              <a href="#hannover">Standort</a>
            </li>
            <li>
              <a href="#beta">Beta</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="col gsap-up">
          <h4>Design</h4>
          <ul>
            <li>
              <a href="/styleguide">Styleguide ↗</a>
            </li>
            <li>
              <a href="#">Brand Assets ↗</a>
            </li>
            <li>
              <a href="#">Pressemappe ↗</a>
            </li>
          </ul>
        </div>

        <div className="col gsap-up">
          <h4>Folgen</h4>
          <ul>
            <li>
              <a
                href="https://instagram.com/reasn.fit"
                target="_blank"
                rel="noopener"
              >
                @reasn.fit ↗
              </a>
            </li>
            <li>
              <a href="#">TikTok ↗</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="mailto:hello@reasn.fit">hello@reasn.fit</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <span>© 2026 REASN · Hannover</span>
        <span>Impressum · Datenschutz · AGB</span>
        <span>Issue 001 / Pre-Launch</span>
      </div>
    </footer>
  );
}
