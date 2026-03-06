import Link from "next/link";

const services = [
  {
    id: "ramp_turnaround",
    name: "Ramp Turnaround",
    target: "Flight School Trainers (CRG)",
    featured: false,
    protocols: [
      "Dry-wash exterior preservation",
      "Leading-edge contaminant removal",
      "Aerodynamic surface clearing",
      "Rapid interior sanitization",
    ],
  },
  {
    id: "a_check",
    name: "A-Check Decontamination",
    target: "Private General Aviation",
    featured: false,
    protocols: [
      "Comprehensive wet/dry wash",
      "Exhaust soot neutralization",
      "Landing gear bay degreasing",
      "Instrument panel safe-cleaning",
    ],
  },
  {
    id: "c_check",
    name: "C-Check Preservation",
    target: "Corporate Fleets (KVQQ)",
    featured: true,
    protocols: [
      "Machine polishing for drag elimination",
      "Ceramic polymer coatings (UV + saline protection)",
      "Deep interior extraction",
    ],
  },
  {
    id: "pneumatic_boot",
    name: "Pneumatic Boot Restoration",
    target: "Multi-Engine / Turboprops",
    featured: false,
    protocols: [
      "Leading-edge polishing",
      "Pneumatic de-ice boot sealant application",
      "Dry rot and cracking prevention",
    ],
  },
];

export default function ServiceMatrix() {
  return (
    <section className="py-20 md:py-28 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl text-white font-bold uppercase mb-4">
            Preservation Protocols
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Four tiers of airworthiness preservation, each engineered for a specific class of
            aircraft and operational tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col bg-slate-800 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300 ${
                service.featured
                  ? "border-2 border-orange-500"
                  : "border border-slate-700/50"
              }`}
            >
              {service.featured && (
                <div className="bg-orange-500 text-white text-xs font-heading font-semibold uppercase tracking-wider py-1.5 text-center">
                  Most Popular
                </div>
              )}

              <div className="p-6 flex-1">
                <h3 className="font-heading text-white text-xl font-bold uppercase mb-1">
                  {service.name}
                </h3>
                <p className="text-orange-500 text-sm font-heading uppercase tracking-wider mb-6">
                  {service.target}
                </p>
                <ul className="space-y-3">
                  {service.protocols.map((protocol) => (
                    <li key={protocol} className="flex items-start gap-3 text-slate-400 text-sm">
                      <span className="text-orange-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {protocol}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/contact"
                  className="block w-full border border-slate-700 hover:border-orange-500 text-slate-300 hover:text-white py-2.5 rounded font-heading text-sm uppercase tracking-wider transition-colors text-center"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
