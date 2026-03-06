import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Preservation 6 | Aircraft Preservation Jacksonville FL",
    template: "%s | Preservation 6",
  },
  description:
    "Military-grade aircraft preservation by a USCG Avionics Electrical Technician. Serving Craig Airport (CRG), Cecil Spaceport (KVQQ), and Jacksonville International (JAX).",
  keywords: [
    "aircraft preservation Jacksonville",
    "USCG AET aviation",
    "aircraft corrosion protection",
    "aviation ceramic coating Jacksonville",
    "private jet preservation KVQQ",
    "aircraft decontamination Florida",
  ],
  openGraph: {
    title: "Preservation 6 | Aircraft Preservation Jacksonville FL",
    description:
      "Military-grade aircraft preservation by a USCG Avionics Electrical Technician. Serving Craig Airport, Cecil Spaceport, and Jacksonville International.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
        <SEO />
      </body>
    </html>
  );
}
