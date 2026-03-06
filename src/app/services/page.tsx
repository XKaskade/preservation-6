import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceMatrix from "@/components/ServiceMatrix";

export const metadata: Metadata = {
  title: "Aircraft Preservation Services | Craig Airport & KVQQ",
  description:
    "Military-grade aircraft preservation protocols for private and corporate fleets. Ceramic coatings, corrosion protection, and pitot-static safe decontamination at CRG and KVQQ.",
};

const technicalCards = [
  {
    title: "Coastal Corrosion Threat",
    body: "The DOD spends $23 billion annually on corrosion-related maintenance. Jacksonville\u2019s dense humidity, persistent airborne salinity, and coastal proximity accelerate galvanic corrosion on unprotected aerospace alloys. General aviation aircraft without factory anti-corrosive treatments are especially vulnerable to pitting and material fatigue.",
    image: "/images/inspection-closeup.png",
    alt: "Mandan Smith inspecting aircraft surface",
  },
  {
    title: "Parasitic Drag Elimination",
    body: "Environmental grime on leading edges increases parasitic drag. Oxidized paint disrupts laminar flow across aerodynamic surfaces. Aviation-grade ceramic hydrophobic coatings restore the aerodynamic profile, directly improving operational range and fuel efficiency.",
    image: "/images/hangar-interior.png",
    alt: "Mandan Smith in aircraft hangar with golden light",
  },
  {
    title: "Pitot-Static System Safety",
    body: "Microscopic wax layers can alter pressure differentials in pitot-static systems. Residual chemical solvents near flush-mounted static ports compromise instrument accuracy. Our military-grade masking protocols hermetically isolate every sensor opening before any surface work begins.",
    image: "/images/hero-tarmac.png",
    alt: "Mandan Smith on tarmac with corporate jet at golden hour",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner with background image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/inspection-closeup.png"
          alt="Mandan Smith inspecting the leading edge of an aircraft wing"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950 z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-32 pt-40">
          <p className="text-orange-500 text-sm font-heading uppercase tracking-[0.2em] mb-4">
            Our Protocols
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-white font-bold uppercase mb-4">
            Preservation Protocols
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Four tiers of airworthiness preservation engineered for
            Jacksonville&apos;s coastal operating environment.
          </p>
        </div>
      </section>

      <ServiceMatrix />

      {/* Technical Details — with images */}
      <section className="py-20 md:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-white font-bold uppercase text-center mb-16">
            Why Preservation Matters
          </h2>
          <div className="space-y-16">
            {technicalCards.map((card, i) => (
              <div
                key={card.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="font-heading text-white text-2xl md:text-3xl font-bold uppercase mb-4">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {card.body}
                  </p>
                </div>
                <div className={`relative overflow-hidden rounded-lg border border-slate-700/50 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={1200}
                    height={800}
                    className="object-cover w-full aspect-[3/2]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandan CTA Section */}
      <section className="py-20 md:py-28 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg border border-slate-700/50">
              <Image
                src="/images/mandan-smith-attc.jpg"
                alt="Mandan Smith, USCG AET Honor Graduate, at Aviation Technical Training Center"
                width={1200}
                height={800}
                className="object-cover w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent px-6 py-4">
                <p className="text-orange-500 text-xs font-heading uppercase tracking-wider">
                  Honor Graduate — USCG ATTC
                </p>
              </div>
            </div>
            <div>
              <p className="text-orange-500 text-sm font-heading uppercase tracking-[0.2em] mb-4">
                Your Technician
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-white font-bold uppercase mb-6">
                Every Protocol Backed by Military Training
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Preservation 6 is operated by Mandan Smith — Honor Graduate of the
                U.S. Coast Guard Aviation Technical Training Center, class AET 153-24.
                Every service tier above is executed with the same systems-level awareness
                that governs Coast Guard rotary and fixed-wing maintenance.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                When Mandan approaches your airframe, he sees electromagnetic components,
                pressurized systems, and chemical-sensitive composites — not just surfaces.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded font-heading font-semibold uppercase text-sm tracking-wide transition-colors"
              >
                Schedule Your Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-16 bg-navy-900 noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl text-white font-bold mb-6">
            Ready to discuss your aircraft?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded font-heading font-semibold uppercase text-sm tracking-wide transition-colors"
          >
            Request Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
