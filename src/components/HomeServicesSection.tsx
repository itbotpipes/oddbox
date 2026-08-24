"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { servicesData } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeServicesSection() {
  const [activeImage, setActiveImage] = useState(servicesData[0].image);

  return (
    <section className="w-full bg-[#FAF9F5] py-20 px-6 md:py-32 md:px-16 border-t border-[#E6E4DD]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Numbered list with triggers */}
        <div className="flex flex-col space-y-6">
          <p className="font-sans text-[10px] tracking-widest text-[#707070] uppercase mb-8">
            03 — Scope of Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#111] mb-12 max-w-lg">
            Creative visual production for modern brands.
          </h2>

          <div className="flex flex-col">
            {servicesData.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveImage(service.image)}
                className="group border-t border-[#E6E4DD] py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 cursor-pointer transition-colors hover:border-[#111]"
              >
                <div className="flex items-start gap-6">
                  <span className="font-sans text-[10px] tracking-widest text-[#707070] mt-1.5">
                    {service.num}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#111] transition-transform duration-300 group-hover:translate-x-2">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-[#707070] mt-2 max-w-md font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-[#E6E4DD]" />
          </div>
        </div>

        {/* Right Column: Large Dynamic Photograph */}
        <div className="sticky top-32 hidden lg:block w-full aspect-[4/5] bg-neutral-100 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={activeImage}
                alt="Service Preview"
                fill
                priority
                sizes="(max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
