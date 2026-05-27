const SITE_URL = "https://reasn.fit";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "REASN",
  alternateName: "REASN — For Moving Communities",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  slogan: "For Moving Communities.",
  description:
    "Soziale Infrastruktur für lokale Sport- und Bewegungs-Communities. Beta-Launch 20.–22. Juli 2026 in Hannover.",
  foundingDate: "2026",
  foundingLocation: {
    "@type": "Place",
    name: "Hannover, Deutschland",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hannover",
      addressRegion: "Niedersachsen",
      postalCode: "30169",
      addressCountry: "DE",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Hannover",
    sameAs: "https://www.wikidata.org/wiki/Q1715",
  },
  sameAs: ["https://instagram.com/reasn.fit"],
  knowsAbout: [
    "Running",
    "Calisthenics",
    "Boulder",
    "Hochschulsport",
    "Outdoor-Fitness",
    "Yoga",
    "3×3 Basketball",
    "Skate",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "REASN",
  inLanguage: "de-DE",
  description:
    "REASN ist die soziale Infrastruktur lokaler Sport- und Bewegungs-Communities in Hannover.",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const event = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": `${SITE_URL}/#beta`,
  name: "REASN Beta Launch",
  description:
    "Drei Tage. Eine Stadt. Eine Bewegung. Closed Beta von REASN in Hannover, drei Tage vor den Finals 26.",
  startDate: "2026-07-20",
  endDate: "2026-07-22",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Hannover",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.3759,
      longitude: 9.732,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hannover",
      addressRegion: "Niedersachsen",
      postalCode: "30169",
      addressCountry: "DE",
    },
  },
  image: `${SITE_URL}/leinewelle.webp`,
  organizer: { "@id": `${SITE_URL}/#organization` },
  offers: {
    "@type": "Offer",
    name: "REASN Beta · Closed",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    url: `${SITE_URL}/#beta`,
    validFrom: "2026-05-01",
    validThrough: "2026-07-10",
  },
  maximumAttendeeCapacity: 500,
  inLanguage: "de-DE",
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [organization, website, event],
};

export default function Schema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
