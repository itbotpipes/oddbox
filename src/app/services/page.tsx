"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CustomCursor from "@/components/CustomCursor";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function ServicesPage() {
  return (
    <>
      <CustomCursor />
      <SiteHeader />

      <main className="w-full bg-[#FAF9F5] select-none min-h-screen pt-32 pb-24 px-6 md:pt-44 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* 01: EDITORIAL HERO HEADER */}
          <section className="border-b border-[#E6E4DD]/80 pb-12 md:pb-20 mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <span className="w-2 h-2 rounded-full bg-[#111] animate-pulse" />
                  <span className="font-sans text-[10px] tracking-[0.3em] text-[#707070] uppercase font-medium">
                    Oddbox Production Capabilities
                  </span>
                </motion.div>

                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#111] tracking-tight uppercase leading-[0.92]"
                  >
                    SERVICES
                  </motion.h1>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-sans text-xs text-[#707070] md:text-right max-w-sm font-light leading-relaxed"
              >
                <p className="font-serif italic text-base text-[#111] mb-2">
                  "Some moments deserve more than memory — let's capture them forever."
                </p>
                <p className="tracking-widest uppercase text-[10px] text-[#707070]">
                  06 Creative Disciplines · Surat / Global
                </p>
              </motion.div>
            </div>
          </section>

          {/* 02: ASYMMETRICAL EDITORIAL MAGAZINE GRID */}
          <section className="space-y-16 md:space-y-24">
            
            {/* ROW 1: Service 01 (Wide 7 cols) & Service 02 (Vertical 5 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Service 01: Commercial Photography */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 group bg-white border border-[#E6E4DD] rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={servicesData[0].image}
                    alt={servicesData[0].title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-xs rounded-full text-[10px] font-sans tracking-widest text-white uppercase font-light">
                    CHAPTER {servicesData[0].num}
                  </div>
                </div>

                <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-sans text-[10px] tracking-widest text-[#707070] uppercase block mb-2">
                      Campaigns & Lookbooks
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#111] tracking-tight mb-4 group-hover:text-neutral-700 transition-colors">
                      {servicesData[0].title}
                    </h2>
                    <p className="font-sans text-sm text-[#707070] font-light leading-relaxed mb-6">
                      {servicesData[0].description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6E4DD]/60 flex items-center justify-between">
                    <Link
                      href={`/work?category=${servicesData[0].categorySlug}`}
                      className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#111] font-semibold group/link"
                    >
                      <span>Explore Commercial Works</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/contact"
                      className="text-[11px] font-sans tracking-wider uppercase text-[#707070] hover:text-[#111] transition-colors"
                    >
                      Inquire ↗
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Service 02: Product Photography */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 group bg-white border border-[#E6E4DD] rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={servicesData[1].image}
                    alt={servicesData[1].title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-xs rounded-full text-[10px] font-sans tracking-widest text-white uppercase font-light">
                    CHAPTER {servicesData[1].num}
                  </div>
                </div>

                <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-sans text-[10px] tracking-widest text-[#707070] uppercase block mb-2">
                      E-Commerce & Tabletop
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#111] tracking-tight mb-4 group-hover:text-neutral-700 transition-colors">
                      {servicesData[1].title}
                    </h2>
                    <p className="font-sans text-sm text-[#707070] font-light leading-relaxed mb-6">
                      {servicesData[1].description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6E4DD]/60 flex items-center justify-between">
                    <Link
                      href={`/work?category=${servicesData[1].categorySlug}`}
                      className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#111] font-semibold group/link"
                    >
                      <span>Explore Works</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/contact"
                      className="text-[11px] font-sans tracking-wider uppercase text-[#707070] hover:text-[#111] transition-colors"
                    >
                      Inquire ↗
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* ROW 2: Service 03 (Vertical 5 cols) & Service 04 (Wide 7 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Service 03: Commercial Films / TVC */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 group bg-white border border-[#E6E4DD] rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={servicesData[2].image}
                    alt={servicesData[2].title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-xs rounded-full text-[10px] font-sans tracking-widest text-white uppercase font-light">
                    CHAPTER {servicesData[2].num}
                  </div>
                </div>

                <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-sans text-[10px] tracking-widest text-[#707070] uppercase block mb-2">
                      Cinematic TVC Production
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#111] tracking-tight mb-4 group-hover:text-neutral-700 transition-colors">
                      {servicesData[2].title}
                    </h2>
                    <p className="font-sans text-sm text-[#707070] font-light leading-relaxed mb-6">
                      {servicesData[2].description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6E4DD]/60 flex items-center justify-between">
                    <Link
                      href={`/work?category=${servicesData[2].categorySlug}`}
                      className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#111] font-semibold group/link"
                    >
                      <span>Explore Films</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/contact"
                      className="text-[11px] font-sans tracking-wider uppercase text-[#707070] hover:text-[#111] transition-colors"
                    >
                      Inquire ↗
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Service 04: Brand Story Films & Podcast */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 group bg-white border border-[#E6E4DD] rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={servicesData[3].image}
                    alt={servicesData[3].title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-xs rounded-full text-[10px] font-sans tracking-widest text-white uppercase font-light">
                    CHAPTER {servicesData[3].num}
                  </div>
                </div>

                <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-sans text-[10px] tracking-widest text-[#707070] uppercase block mb-2">
                      Documentary & Podcasts
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#111] tracking-tight mb-4 group-hover:text-neutral-700 transition-colors">
                      {servicesData[3].title}
                    </h2>
                    <p className="font-sans text-sm text-[#707070] font-light leading-relaxed mb-6">
                      {servicesData[3].description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6E4DD]/60 flex items-center justify-between">
                    <Link
                      href={`/work?category=${servicesData[3].categorySlug}`}
                      className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#111] font-semibold group/link"
                    >
                      <span>Explore Stories</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/contact"
                      className="text-[11px] font-sans tracking-wider uppercase text-[#707070] hover:text-[#111] transition-colors"
                    >
                      Inquire ↗
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* ROW 3: Service 05 (Wide 7 cols) & Service 06 (Vertical 5 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Service 05: Social Media Content Creation */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 group bg-white border border-[#E6E4DD] rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={servicesData[4].image}
                    alt={servicesData[4].title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-xs rounded-full text-[10px] font-sans tracking-widest text-white uppercase font-light">
                    CHAPTER {servicesData[4].num}
                  </div>
                </div>

                <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-sans text-[10px] tracking-widest text-[#707070] uppercase block mb-2">
                      Digital & Short-Form Video
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#111] tracking-tight mb-4 group-hover:text-neutral-700 transition-colors">
                      {servicesData[4].title}
                    </h2>
                    <p className="font-sans text-sm text-[#707070] font-light leading-relaxed mb-6">
                      {servicesData[4].description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6E4DD]/60 flex items-center justify-between">
                    <Link
                      href={`/work?category=${servicesData[4].categorySlug}`}
                      className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#111] font-semibold group/link"
                    >
                      <span>Explore Social Works</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/contact"
                      className="text-[11px] font-sans tracking-wider uppercase text-[#707070] hover:text-[#111] transition-colors"
                    >
                      Inquire ↗
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Service 06: Fashion & Textile Photography */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 group bg-white border border-[#E6E4DD] rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={servicesData[5].image}
                    alt={servicesData[5].title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-xs rounded-full text-[10px] font-sans tracking-widest text-white uppercase font-light">
                    CHAPTER {servicesData[5].num}
                  </div>
                </div>

                <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-sans text-[10px] tracking-widest text-[#707070] uppercase block mb-2">
                      Couture & Textile Heritage
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#111] tracking-tight mb-4 group-hover:text-neutral-700 transition-colors">
                      {servicesData[5].title}
                    </h2>
                    <p className="font-sans text-sm text-[#707070] font-light leading-relaxed mb-6">
                      {servicesData[5].description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6E4DD]/60 flex items-center justify-between">
                    <Link
                      href={`/work?category=${servicesData[5].categorySlug}`}
                      className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#111] font-semibold group/link"
                    >
                      <span>Explore Fashion Works</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/contact"
                      className="text-[11px] font-sans tracking-wider uppercase text-[#707070] hover:text-[#111] transition-colors"
                    >
                      Inquire ↗
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>

          </section>

          {/* 03: MINIMALIST STUDIO INQUIRY BANNER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24 md:mt-32 pt-12 border-t border-[#E6E4DD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <p className="font-serif text-2xl md:text-3xl text-[#111]">
                Have a campaign or production in mind?
              </p>
              <p className="font-sans text-xs text-[#707070] font-light mt-1">
                Reach out directly to discuss dates, creative treatment, and booking packages.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-[#111] text-[#FAF9F5] text-xs font-sans tracking-widest uppercase hover:bg-neutral-800 transition-colors"
              >
                START AN INQUIRY ↗
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#E6E4DD] text-[#111] text-xs font-sans tracking-widest uppercase hover:border-[#111] transition-colors"
              >
                WHATSAPP ↗
              </a>
            </div>
          </motion.div>

        </div>
      </main>

      <SiteFooter />
    </>
  );
}
