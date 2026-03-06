import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | USCG Avionics Electrical Technician",
  description:
    "Military aviation technician aircraft preservation. USCG AET trained at Aviation Technical Training Center, Elizabeth City, NC. 20-week avionics program graduate.",
};

const manuals = [
  {
    designation: "COMDTINST M3710.1",
    title: "Coast Guard Air Operations Manual",
    description:
      "Quality assurance, safety precautions, ground handling operations.",
  },
  {
    designation: "COMDTINST M13020.1",
    title: "Aeronautical Engineering Maintenance Management Manual",
    description:
      "Maintenance management protocols and safety compliance.",
  },
  {
    designation: "COMDTINST M5100.47B",
    title: "Coast Guard Safety and Environmental Health Manual",
    description:
      "Safety doctrines for aircraft handling, towing, grounding.",
  },
  {
    designation: "FAA AC 43-4B",
    title: "Corrosion Control for Aircraft",
    description:
      "Corrosion control protocols, chemical compatibility.",
  },
  {
    designation: "MIL-C-43616",
    title: "Military Specification for Corrosion Preventive Compounds",
    description:
      "Verified aircraft-approved cleaners and compounds.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="py-32 pt-40 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-orange-500 text-sm font-heading uppercase tracking-[0.2em] mb-4">
            The AET Difference
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-white font-bold uppercase mb-4">
            Built on Military Aviation Standards
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every protocol we execute is rooted in Coast Guard aviation
            maintenance doctrine and FAA airworthiness directives.
          </p>
        </div>
      </section>

      {/* Meet the Operator */}
      <section className="py-20 md:py-28 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative overflow-hidden rounded-lg border border-slate-700/50">
              <Image
                src="/images/mandan-smith-attc.jpg"
                alt="Mandan Smith addressing fellow graduates at the USCG Aviation Technical Training Center, Elizabeth City, NC"
                width={1200}
                height={800}
                className="object-cover w-full"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent px-6 py-4">
                <p className="text-orange-500 text-xs font-heading uppercase tracking-wider">
                  ATTC Graduation — Elizabeth City, NC
                </p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-orange-500 text-sm font-heading uppercase tracking-[0.2em] mb-4">
                Founder &amp; Operator
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-white font-bold uppercase mb-6">
                Mandan Smith
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Honor Graduate</span> of the
                  United States Coast Guard Aviation Technical Training Center in
                  Elizabeth City, North Carolina — the military&apos;s premier facility
                  for producing aviation maintenance technicians. Class{" "}
                  <span className="text-orange-500 font-heading font-semibold">AET 153-24</span>.
                </p>
                <p>
                  Mandan completed the rigorous 20-week Avionics Electrical
                  Technician program, graduating at the top of his class. The
                  curriculum demanded mastery across avionics systems —
                  communications, navigation, collision avoidance, and sensor
                  suites — as well as power systems, pitot-static instrumentation,
                  and corrosion control procedures governed by FAA AC 43-4B and
                  MIL-C-43616.
                </p>
                <p>
                  Earning Honor Graduate distinction at ATTC is not a
                  participation award. It reflects the highest academic
                  performance, technical proficiency, and leadership evaluation
                  scores in the class. It means the Coast Guard identified Mandan
                  as the most capable technician in his cohort — the one trusted
                  to set the standard.
                </p>
                <p>
                  That same standard now governs every preservation protocol
                  executed on your aircraft. When Mandan approaches your airframe,
                  he sees what a trained avionics technician sees: electromagnetic
                  components, pressurized systems, chemical-sensitive composites,
                  and flight-critical surfaces — not just panels to polish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Pipeline */}
      <section className="py-20 md:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl text-white font-bold uppercase mb-6">
                ATTC Training Pipeline
              </h2>
              <p className="text-slate-400 leading-relaxed">
                The Aviation Technical Training Center in Elizabeth City, NC
                conducts a rigorous 20-week program that produces Coast Guard
                Avionics Electrical Technicians. The curriculum covers avionics
                systems including communications, navigation, and collision
                avoidance; power systems encompassing AC/DC conversion and
                battery protocols; pitot-static systems critical to flight
                instrument accuracy; and corrosion control procedures governed by
                FAA AC 43-4B and MIL-C-43616. Graduates emerge with a
                comprehensive understanding of every electrical and environmental
                system on military rotary and fixed-wing airframes — knowledge
                that directly translates to the preservation of general aviation
                and corporate aircraft.
              </p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=1600&auto=format"
                alt="Aviation maintenance technician working on aircraft systems"
                width={1600}
                height={1067}
                className="rounded-lg border border-slate-700/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Military Manuals / Governing Standards */}
      <section className="py-20 md:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-white font-bold uppercase text-center mb-16">
            Governing Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manuals.map((manual) => (
              <div
                key={manual.designation}
                className="bg-slate-800 border border-slate-700/50 rounded-lg p-6"
              >
                <p className="text-orange-500 font-heading font-semibold uppercase mb-2">
                  {manual.designation}
                </p>
                <h3 className="text-white font-heading text-lg mb-2">
                  {manual.title}
                </h3>
                <p className="text-slate-400 text-sm">{manual.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl text-white font-bold uppercase mb-8">
            Our Philosophy
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            This is not a cleaning service. This is airworthiness preservation
            — the systematic protection of every flight-critical surface,
            sensor, and system on your aircraft. Every protocol we execute is
            informed by the same military maintenance standards that govern
            Coast Guard rotary and fixed-wing operations.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            The individual preserving your aircraft understands the exact
            mechanical thresholds and sensitivities of every rivet, fairing, and
            pneumatic boot. That&apos;s not a marketing claim. It&apos;s the
            product of 20 weeks of intensive military aviation training and
            hands-on operational experience.
          </p>
        </div>
      </section>
    </>
  );
}
