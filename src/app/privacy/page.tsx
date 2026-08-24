import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/data/site";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />

      <main className="w-full bg-[#FAF9F5] select-none min-h-screen pt-32 pb-16 px-6 md:pt-44 md:px-16">
        <div className="max-w-3xl mx-auto">
          
          <h1 className="font-serif text-4xl md:text-5xl text-[#111] tracking-tight mb-8">
            PRIVACY POLICY
          </h1>

          <div className="space-y-6 font-sans text-sm text-[#707070] leading-relaxed font-light">
            <p className="font-medium text-[#111]">Last updated: August 2026</p>
            
            <p>
              Oddbox Studio is operated under {siteConfig.legalName}, a private limited company incorporated and registered in Surat, Gujarat, India. This policy explains how we collect, process, and protect client photography metadata and project brief information.
            </p>

            <h2 className="font-serif text-2xl text-[#111] pt-6">1. Data Capture</h2>
            <p>
              We collect your name, email address, and project requirements through our enquiry forms or directly via WhatsApp links to manage project bookings, deliver photoshoot details, and follow up on TV commercial production services.
            </p>

            <h2 className="font-serif text-2xl text-[#111] pt-6">2. Content Ownership</h2>
            <p>
              All creative deliverables, raw footage, and final color-graded photography remain the intellectual property of Oddbox Studio unless explicit transfer agreements are signed during project boarding.
            </p>

            <p className="pt-8 border-t border-[#E6E4DD] text-xs">
              If you have any questions regarding this policy or want to review your captured inquiry data, contact us at {siteConfig.email}.
            </p>
          </div>

        </div>
      </main>

      <SiteFooter />
    </>
  );
}
