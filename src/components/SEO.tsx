interface SEOProps {
  jsonLd?: Record<string, unknown>;
}

export default function SEO({ jsonLd }: SEOProps) {
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "Preservation 6",
    description:
      "Military-grade aircraft preservation by a USCG Avionics Electrical Technician. Serving Craig Airport (CRG), Cecil Spaceport (KVQQ), and Jacksonville International (JAX).",
    areaServed: [
      { "@type": "Airport", name: "Jacksonville Executive at Craig Airport", iataCode: "CRG" },
      { "@type": "Airport", name: "Cecil Spaceport", iataCode: "VQQ" },
      { "@type": "Airport", name: "Jacksonville International Airport", iataCode: "JAX" },
    ],
    founder: {
      "@type": "Person",
      name: "Manden Smith",
      jobTitle: "USCG Avionics Electrical Technician",
      affiliation: {
        "@type": "GovernmentOrganization",
        name: "United States Coast Guard",
      },
    },
    knowsAbout: [
      "Aircraft surface preservation",
      "Avionics systems protection",
      "Corrosion mitigation",
      "Pitot-static system safety",
      "FAA AC 43-4B compliance",
    ],
  };

  const data = jsonLd || defaultJsonLd;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
