import Link from "next/link";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceAreas = [
  { code: "CRG", name: "Craig Airport" },
  { code: "KVQQ", name: "Cecil Spaceport" },
  { code: "JAX", name: "Jacksonville International" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-white text-lg font-semibold uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading text-white text-lg font-semibold uppercase tracking-wider mb-6">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area.code} className="text-slate-400 text-sm">
                  {area.name}{" "}
                  <span className="text-orange-500 font-heading font-semibold">
                    ({area.code})
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-white text-lg font-semibold uppercase tracking-wider mb-6">
              Contact
            </h3>
            <div className="space-y-3 text-slate-400 text-sm">
              <p>Jacksonville, Florida</p>
              <p>
                <a href="mailto:info@aetaviation.com" className="hover:text-orange-500 transition-colors">
                  info@aetaviation.com
                </a>
              </p>
              <p>
                <a href="tel:+19045550100" className="hover:text-orange-500 transition-colors">
                  (904) 555-0100
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Preservation 6. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs font-heading uppercase tracking-wider">
            USCG AET Veteran-Owned Business
          </p>
        </div>
      </div>
    </footer>
  );
}
