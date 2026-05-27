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
  title: "REASN — For Moving Communities",
  description:
    "REASN ist die soziale Infrastruktur lokaler Sport- und Bewegungs-Communities. Beta 20.–22. Juli 2026 in Hannover.",
  metadataBase: new URL("https://reasn.fit"),
  icons: {
    icon: [{ url: "/rsn.svg", type: "image/svg+xml" }],
    shortcut: "/rsn.svg",
    apple: "/rsn.svg",
  },
  openGraph: {
    title: "REASN — For Moving Communities",
    description:
      "Beta-Launch 20.–22. Juli 2026 in Hannover. Drei Tage. Eine Stadt. Eine Bewegung.",
    type: "website",
    locale: "de_DE",
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
