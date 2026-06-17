import type { Metadata } from "next";
import BetaLanding from "./BetaLanding";
import "./beta.css";

export const metadata: Metadata = {
  title: "Beta-Zugang · For Moving Communities",
  description:
    "Sport passiert — finde dein Team. REASN verbindet dich mit lokalen Sportcommunities, spontanen Sessions und Sportpartnern in Hannover. Sichere dir den Beta-Zugang.",
  alternates: {
    canonical: "/beta",
  },
  // Variant landing page — kept out of the index to avoid duplicate
  // content with the main homepage while both versions coexist.
  robots: {
    index: false,
    follow: true,
  },
};

export default function BetaPage() {
  return <BetaLanding />;
}
