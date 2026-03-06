const credentials = [
  "20-Week ATTC Training",
  "COMDTINST M3710.1 Certified",
  "FAA AC 43-4B Compliant",
  "Full Avionics Systems Fluency",
];

export default function CredentialBanner() {
  return (
    <section className="bg-navy-900 py-4 border-y border-slate-700/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {credentials.map((cred, i) => (
            <div
              key={cred}
              className={`text-center text-slate-400 text-xs md:text-sm uppercase tracking-wider font-heading ${
                i < credentials.length - 1 ? "md:border-r md:border-slate-700/50" : ""
              }`}
            >
              {cred}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
