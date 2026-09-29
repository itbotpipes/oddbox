import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#FAF9F5] border-t border-[#E6E4DD] px-6 py-16 md:px-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full">
        {/* Large Logo Statement */}
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="font-serif text-[12vw] leading-none tracking-tighter text-[#111111] font-semibold select-none">
            ODDBOX          </h2>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pt-8 border-t border-[#E6E4DD]">
          {/* Column 1: Services Scope */}
          <div>
            <p className="text-[10px] tracking-widest text-[#707070] uppercase font-sans mb-4">Focus</p>
            <p className="text-sm text-[#111111] leading-relaxed font-sans font-light">
              Photography / Films / Creative Production
            </p>
            <p className="text-sm text-[#707070] font-sans font-light mt-1">Surat, Gujarat, India</p>
          </div>

          {/* Column 2: Inquiries */}
          <div>
            <p className="text-[10px] tracking-widest text-[#707070] uppercase font-sans mb-4">Connect</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-[#111111] hover:underline block font-sans font-light"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="text-sm text-[#111111] hover:underline block font-sans font-light mt-1"
            >
              {siteConfig.phone}
            </a>
          </div>

          {/* Column 3: Navigation Scope */}
          <div>
            <p className="text-[10px] tracking-widest text-[#707070] uppercase font-sans mb-4">Sitemap</p>
            <div className="flex flex-col space-y-1">
              <Link href="/work" className="text-sm text-[#111111] hover:underline font-sans font-light">
                Selected Work
              </Link>
              <Link href="/about" className="text-sm text-[#111111] hover:underline font-sans font-light">
                Bunty Patel
              </Link>
              <Link href="/services" className="text-sm text-[#111111] hover:underline font-sans font-light">
                Disciplines
              </Link>
              <Link href="/journal" className="text-sm text-[#111111] hover:underline font-sans font-light">
                Journal
              </Link>
              <Link href="/privacy" className="text-sm text-[#111111] hover:underline font-sans font-light">
                Privacy
              </Link>
            </div>
          </div>

          {/* Column 4: Studio Philosophy */}
          <div>
            <p className="text-[10px] tracking-widest text-[#707070] uppercase font-sans mb-4">Social</p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#111111] hover:underline block font-sans font-light"
            >
              Instagram ↗
            </a>
          </div>
        </div>

        {/* Lower copyright */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-[#E6E4DD]/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] text-[#707070] font-sans">
          <p>© 2026 {siteConfig.name}. All Rights Reserved.</p>
          <p>Operated by {siteConfig.legalName} under Wireverse Private Limited.</p>
        </div>
      </div>
    </footer>
  );
}
