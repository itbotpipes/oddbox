import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactFormSection from "@/components/ContactFormSection";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      
      <main className="w-full bg-[#FAF9F5] select-none pt-24 min-h-screen">
        {/* Reuse the custom line-based enquiry form */}
        <ContactFormSection />
      </main>

      <SiteFooter />
    </>
  );
}
