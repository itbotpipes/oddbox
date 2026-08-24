import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CustomCursor from "@/components/CustomCursor";
import { siteConfig } from "@/data/site";

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <SiteHeader />

      <main className="w-full bg-[#FAF9F5] select-none min-h-screen pt-32 pb-16 px-6 md:pt-44 md:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Asymmetric Editorial Header */}
          <div className="border-b border-[#E6E4DD]/60 pb-12 mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <span className="font-sans text-[10px] tracking-widest text-[#707070] uppercase">
                Biography
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-[#111] tracking-tight mt-4 uppercase">
                BUNTY PATEL
              </h1>
            </div>
            <div className="md:col-span-4 font-sans text-xs text-[#707070] md:text-right">
              <p>Photographer & Filmmaker</p>
              <p className="mt-1">Surat, Gujarat, India</p>
            </div>
          </div>

          {/* Manually Paced Photographic Story Sequence */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start my-16">
            
            {/* Left side: Large Editorial Image */}
            <div className="lg:col-span-6 relative aspect-[3/4] bg-neutral-100 overflow-hidden">
              <Image
                src="/images/portraits/portraits-06.jpg"
                alt="Bunty Patel Creative Portraits"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>

            {/* Right side: Editorial text flow */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-10 lg:pl-12">
              <h2 className="font-serif text-3xl md:text-4xl text-[#111] tracking-tight leading-snug">
                "Bunty is not simply taking photographs; his approach is about capturing meaningful moments through emotion, storytelling, and style."
              </h2>
              
              <div className="h-[1px] bg-[#E6E4DD]" />

              <div className="space-y-6 font-sans text-sm text-[#707070] leading-relaxed font-light">
                <p>
                  Oddbox Studio is a creative photography and cinematography studio operated under Wireverse Private Limited, based in Surat, Gujarat. We serve modern brands, agencies, and families globally.
                </p>
                <p>
                  {siteConfig.aboutPhilosophies[0]}
                </p>
                <p>
                  We believe that photography is a personal experience intended to make people feel seen, celebrated, and remembered.
                </p>
              </div>

              <div className="border-l-2 border-[#111] pl-6 py-2 italic font-serif text-xl text-[#111] max-w-md">
                "{siteConfig.aboutPhilosophies[2]}"
              </div>
            </div>

          </div>

        </div>
      </main>

      <SiteFooter />
    </>
  );
}
