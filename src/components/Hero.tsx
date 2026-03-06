import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Background image */}
      <Image
        src="/images/hero-tarmac.png"
        alt="Mandan Smith standing on airport tarmac at golden hour in front of a Gulfstream corporate jet"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950 z-[2]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p
          className="animate-fade-up text-orange-500 text-xs md:text-sm uppercase tracking-[0.25em] font-heading font-semibold mb-6"
          style={{ animationDelay: "0.1s" }}
        >
          USCG Avionics Electrical Technician
        </p>

        <h1
          className="animate-fade-up font-heading text-5xl md:text-7xl text-white font-bold leading-tight mb-6"
          style={{ animationDelay: "0.2s" }}
        >
          Flight-Critical Surface
          <br />
          Preservation
        </h1>

        <p
          className="animate-fade-up text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          style={{ animationDelay: "0.3s" }}
        >
          Military-grade aircraft preservation for Jacksonville&apos;s private and corporate fleets.
          Every system protected. Every surface preserved.
        </p>

        <div
          className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "0.5s" }}
        >
          <Link
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded font-heading font-semibold uppercase text-sm tracking-wide transition-colors"
          >
            Schedule Assessment
          </Link>
          <Link
            href="/services"
            className="border border-white/30 hover:border-white/60 text-white px-8 py-3.5 rounded font-heading font-semibold uppercase text-sm tracking-wide transition-colors"
          >
            View Protocols
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="animate-bounce-slow text-slate-400" size={28} />
      </div>
    </section>
  );
}
