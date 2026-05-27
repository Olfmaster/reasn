import type { Metadata } from "next";
import { Barlow_Condensed, Barlow, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "REASN — Soziale Infrastruktur für Sport-Communities · Beta Juli 2026 Hannover",
    template: "%s · REASN",
  },
  description:
    "REASN ist die soziale Infrastruktur lokaler Sport- und Bewegungs-Communities. Closed Beta 20.–22. Juli 2026 in Hannover. Keine Fitness-App, keine Buchungsplattform — ein Ort, an dem eine Stadt ihre Bewegung findet.",
  applicationName: "REASN",
  authors: [{ name: "REASN", url: "https://reasn.fit" }],
  creator: "REASN",
  publisher: "REASN",
  keywords: [
    "REASN",
    "Sport Community Hannover",
    "Running Hannover",
    "Calisthenics Hannover",
    "Boulder Hannover",
    "Outdoor Sport Hannover",
    "Hochschulsport",
    "Beta Juli 2026",
    "Sport-App Hannover",
    "lokale Sport-Plattform",
    "soziale Infrastruktur Sport",
    "Leinewelle Surf",
    "Finals 26 Hannover",
  ],
  metadataBase: new URL("https://reasn.fit"),
  alternates: {
    canonical: "/",
    languages: { "de-DE": "/" },
  },
  icons: {
    icon: [{ url: "/rsn.svg", type: "image/svg+xml" }],
    shortcut: "/rsn.svg",
    apple: "/rsn.svg",
  },
  openGraph: {
    title: "REASN — For Moving Communities",
    description:
      "Closed Beta 20.–22. Juli 2026 in Hannover. Drei Tage. Eine Stadt. Eine Bewegung.",
    url: "https://reasn.fit",
    siteName: "REASN",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "REASN — For Moving Communities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REASN — For Moving Communities",
    description:
      "Closed Beta 20.–22. Juli 2026 in Hannover. Soziale Infrastruktur für lokale Sport-Communities.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Sports & Community",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${barlowCondensed.variable} ${barlow.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
