import type { Metadata } from "next";
import FlightDeck from "@/components/FlightDeck";

export const metadata: Metadata = {
  title: "Request Assessment | Aircraft Preservation Quote",
  description:
    "Request your aircraft preservation assessment. Military-grade surface protection for private jets and corporate fleets at Craig Airport, Cecil Spaceport, and JAX.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="py-32 pt-40 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-orange-500 text-sm font-heading uppercase tracking-[0.2em] mb-4">
            The Flight Deck
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-white font-bold uppercase mb-4">
            Request Your Preservation Assessment
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Complete the form below and we&apos;ll research your airframe&apos;s FAA registry data
            before making contact.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-28 bg-slate-800/30">
        <div className="max-w-3xl mx-auto px-6">
          <FlightDeck />
        </div>
      </section>

      {/* Info Strip */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-heading text-white text-sm uppercase tracking-wider mb-2">
                Response Time
              </p>
              <p className="text-slate-400 text-sm">Within 24 hours</p>
            </div>
            <div>
              <p className="font-heading text-white text-sm uppercase tracking-wider mb-2">
                Service Area
              </p>
              <p className="text-slate-400 text-sm">CRG, KVQQ, JAX</p>
            </div>
            <div>
              <p className="font-heading text-white text-sm uppercase tracking-wider mb-2">
                Assessment
              </p>
              <p className="text-slate-400 text-sm">Complimentary</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
