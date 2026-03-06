import Image from "next/image";
import { Radio, Zap, Gauge, Shield } from "lucide-react";

const competencies = [
  {
    icon: Radio,
    title: "Avionics Systems Mastery",
    description:
      "Communications, navigation, collision avoidance, and sensor suites. Radomes and antenna arrays treated as electromagnetic components requiring strict fluid isolation, not surfaces to scrub.",
  },
  {
    icon: Zap,
    title: "Power Systems Authority",
    description:
      "AC/DC conversion and distribution, aviation batteries, battery venting protocols. Full awareness of hydrogen gas emissions during charging cycles and acidic corrosion neutralization procedures.",
  },
  {
    icon: Gauge,
    title: "Pitot-Static Protection",
    description:
      "Military-grade Remove Before Flight masking protocols. Every static port, pitot mast, and static drain hermetically isolated. Manufacturer static line diagrams consulted before any surface work.",
  },
  {
    icon: Shield,
    title: "Corrosion Mitigation",
    description:
      "FAA AC 43-4B compliant decontamination. Targeted treatment of seams, rivet lines, and fastener heads with aviation-grade anti-corrosion compounds per MIL-C-43616.",
  },
];

export default function WhyAET() {
  return (
    <section className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl text-white font-bold uppercase mb-4">
            Why a USCG Avionics Electrical Technician
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The individual preserving your aircraft understands the exact mechanical thresholds and
            sensitivities of every rivet, fairing, and pneumatic boot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Competency blocks */}
          <div className="space-y-4">
            {competencies.map((comp) => {
              const Icon = comp.icon;
              return (
                <div
                  key={comp.title}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      <Icon size={24} className="text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-heading text-white text-xl font-semibold uppercase mb-2">
                        {comp.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {comp.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Atmospheric image */}
          <div className="relative overflow-hidden rounded-lg border border-slate-700/50">
            <Image
              src="/images/hangar-interior.png"
              alt="Manden Smith inside aircraft hangar next to a turboprop, golden light streaming through hangar doors"
              width={800}
              height={1000}
              className="object-cover w-full h-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
