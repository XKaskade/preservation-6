import Image from "next/image";
import Hero from "@/components/Hero";
import CredentialBanner from "@/components/CredentialBanner";
import WhyAET from "@/components/WhyAET";
import ServiceMatrix from "@/components/ServiceMatrix";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredentialBanner />
      <WhyAET />
      <ServiceMatrix />

      {/* CTA Section with tarmac-wide background */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/tarmac-wide.png"
          alt="Mandan Smith walking across tarmac with jets on either side"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/80 z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-orange-500 text-sm font-heading uppercase tracking-[0.2em] mb-4">
            Ready for Military-Grade Preservation?
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-white font-bold leading-tight max-w-3xl mx-auto mb-6">
            Protect Your Aircraft Like the Coast Guard Protects Theirs
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
            Request your preservation assessment today. We&apos;ll research your airframe&apos;s
            history via FAA registry before making contact.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded font-heading font-semibold uppercase tracking-wide transition-colors text-sm"
          >
            Schedule Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
