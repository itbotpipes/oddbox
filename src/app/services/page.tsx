import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CustomCursor from "@/components/CustomCursor";
import { servicesData } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <CustomCursor />
      <SiteHeader />

      <main className="w-full bg-[#FAF9F5] select-none min-h-screen pt-32 pb-16 px-6 md:pt-44 md:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Metadata */}
          <div className="border-b border-[#E6E4DD]/60 pb-12 mb-16">
            <span className="font-sans text-[10px] tracking-widest text-[#707070] uppercase">
              Disciplines
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-[#111] tracking-tight mt-4 uppercase">
              SERVICES
            </h1>
          </div>

          {/* Manually Paced Services Index Layout */}
          <div className="flex flex-col space-y-24 md:space-y-36">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-[#E6E4DD] pt-12 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Left content block */}
                  <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                    <span className="font-sans text-xs text-[#707070] tracking-widest uppercase">
                      Chapter {service.num}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-[#111] tracking-tight">
                      {service.title}
                    </h2>
                    <p className="font-sans text-sm text-[#707070] leading-relaxed font-light max-w-md">
                      {service.description}
                    </p>
                  </div>

                  {/* Spacer column */}
                  <div className="hidden lg:block lg:col-span-1" />

                  {/* Right imagery showcase (Asymmetrical Layouts) */}
                  <div className="lg:col-span-6 relative aspect-[16/10] bg-neutral-100 overflow-hidden">
                    <img
                      src={`${service.image}?v=2`}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>

      <SiteFooter />
    </>
  );
}
