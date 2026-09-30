"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CustomCursor from "@/components/CustomCursor";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

export default function AboutPage() {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  const ethosList = [
    {
      number: "01",
      title: "Cinematic Direction",
      description:
        "Sculpting ambient light, shadow, and rich color tones to elevate real moments into filmic frames.",
    },
    {
      number: "02",
      title: "Emotional Authenticity",
      description:
        "Prioritizing candid connection over rigid posing, creating space for raw and genuine human emotion.",
    },
    {
      number: "03",
      title: "Archival Craftsmanship",
      description:
        "Every photograph and film is retouched with fine-art precision for generational longevity.",
    },
    {
      number: "04",
      title: "Global Production",
      description:
        "Tailored logistics for destination weddings, fashion editorials, and luxury campaigns worldwide.",
    },
  ];

  const milestones = [
    { value: "10+", label: "Years of Crafting Cinema & Photo" },
    { value: "400+", label: "Stories Captured Worldwide" },
    { value: "25+", label: "Destination Cities Filmed" },
    { value: "100%", label: "Bespoke Editorial Workflow" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Conceptual Alignment",
      subtitle: "Pre-Production & Creative Discovery",
      description:
        "In-depth dialogue mapping narrative tone, lighting preferences, location scouting, and custom moodboards before shooting begins.",
      deliverables: ["Creative Moodboard", "Lighting Blueprint", "Timeline Alignment"],
    },
    {
      step: "02",
      title: "On-Location Direction",
      subtitle: "Principal Capture & Filming",
      description:
        "Discreet, low-profile capture blending master composition with spontaneous, unprompted emotional storytelling.",
      deliverables: ["Dual-Operator Cinema", "Ambient Lighting Setup", "Unscripted Coverage"],
    },
    {
      step: "03",
      title: "Frame Mastering",
      subtitle: "Post-Production & Color Science",
      description:
        "Bespoke film emulation, high-end skin retouching, color grading, and custom acoustic mastering for cinema cuts.",
      deliverables: ["Custom Film Emulation", "Master Color Grade", "4K Cinema Cut"],
    },
    {
      step: "04",
      title: "Archival Delivery",
      subtitle: "Exhibition & Legacy Artifacts",
      description:
        "Private digital master gallery release accompanied by handcrafted legacy print albums and keepsake film cuts.",
      deliverables: ["Master Digital Gallery", "Fine-Art Leather Album", "Archival Drive"],
    },
  ];

  return (
    <>
      <CustomCursor />
      <SiteHeader />

      <main className="w-full bg-[#FAF9F5] select-none min-h-screen pt-32 pb-24 px-6 md:pt-44 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Exact Original Asymmetric Editorial Header */}
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

          {/* Exact Original Photographic Story Sequence */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start my-16">
            {/* Left side: Large Editorial Image */}
            <div className="lg:col-span-6 relative aspect-[3/4] bg-transparent overflow-hidden">
              <Image
                src="/images/bunty_patel.avif"
                alt="Bunty Patel Creative Portraits"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover mix-blend-multiply"
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
                <p>{siteConfig.aboutPhilosophies[0]}</p>
                <p>
                  We believe that photography is a personal experience intended to make people feel seen, celebrated, and remembered.
                </p>
              </div>

              <div className="border-l-2 border-[#111] pl-6 py-2 italic font-serif text-xl text-[#111] max-w-md">
                "{siteConfig.aboutPhilosophies[2]}"
              </div>
            </div>
          </div>

          {/* SECTION 2: CREATIVE ETHOS */}
          <section className="pt-24 pb-20 border-t border-[#E6E4DD]/70 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
            >
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-[#111] tracking-tight font-medium">
                  The Art of Intentional Storytelling
                </h2>
              </div>
              <p className="font-sans text-xs text-[#707070] max-w-sm font-light leading-relaxed">
                Core principles guiding our camera work, color science, and cinematic direction.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {ethosList.map((item, idx) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="pt-6 border-t border-[#E6E4DD] flex flex-col justify-between group"
                >
                  <div>
                    <span className="font-serif text-sm text-[#707070] block mb-6 font-light tracking-widest">
                      {item.number} /
                    </span>
                    <h3 className="font-serif text-2xl text-[#111] mb-3 font-medium group-hover:translate-x-1 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-[#707070] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SECTION 3: MILESTONES & RECOGNITION */}
          <section className="py-24 border-t border-[#E6E4DD]/70">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
            >
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-[#111] tracking-tight font-medium">
                  Crafting Cinema Across Continents
                </h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-b border-[#E6E4DD] py-16">
              {milestones.map((m, idx) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="flex flex-col space-y-3"
                >
                  <span className="font-serif text-5xl md:text-7xl text-[#111] font-light tracking-tighter">
                    {m.value}
                  </span>
                  <span className="font-sans text-xs text-[#707070] tracking-wider uppercase font-light">
                    {m.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SECTION 4: THE CREATIVE EXECUTION (REDESIGNED INTERACTIVE ACCORDION) */}
          <section className="py-24 border-b border-[#E6E4DD]/70">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16"
            >
              <div className="lg:col-span-5">
                <h2 className="font-serif text-4xl md:text-6xl text-[#111] tracking-tight font-medium leading-tight">
                  The Creative Execution
                </h2>
                <p className="font-sans text-xs text-[#707070] font-light leading-relaxed mt-6 max-w-md">
                  An intentional four-stage journey from initial narrative discovery to master archival delivery.
                </p>
              </div>

              <div className="lg:col-span-7 divide-y divide-[#E6E4DD] border-t border-b border-[#E6E4DD]">
                {processSteps.map((step, idx) => {
                  const isOpen = activeStep === idx;
                  return (
                    <div
                      key={step.step}
                      className="py-8 cursor-pointer transition-colors group"
                      onClick={() => setActiveStep(isOpen ? null : idx)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline space-x-6">
                          <span className="font-serif text-xl text-[#707070]/60 font-light">
                            {step.step}
                          </span>
                          <div>
                            <h3 className="font-serif text-2xl md:text-3xl text-[#111] font-medium group-hover:translate-x-1 transition-transform duration-300">
                              {step.title}
                            </h3>
                            <span className="font-sans text-[11px] tracking-wider text-[#707070] uppercase font-light mt-1 block">
                              {step.subtitle}
                            </span>
                          </div>
                        </div>
                        <button
                          aria-label="Toggle step details"
                          className="w-10 h-10 rounded-full border border-[#E6E4DD] flex items-center justify-center text-[#111] group-hover:border-[#111] transition-colors"
                        >
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </button>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 pl-12 pr-4 space-y-6">
                              <p className="font-sans text-sm text-[#707070] font-light leading-relaxed">
                                {step.description}
                              </p>

                              <div className="flex flex-wrap gap-2 pt-2">
                                {step.deliverables.map((item) => (
                                  <span
                                    key={item}
                                    className="font-sans text-[10px] tracking-widest text-[#111] border border-[#E6E4DD] px-3 py-1.5 uppercase rounded-full"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </section>

          {/* SECTION 5: EDITORIAL CALL TO ACTION */}
          <section className="pt-24 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-12 border-t border-[#E6E4DD]"
            >
              <div>
                <h2 className="font-serif text-3xl md:text-5xl text-[#111] tracking-tight leading-tight">
                  Available for select global projects.
                </h2>
              </div>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 bg-[#111] text-[#FAF9F5] px-8 py-4 rounded-full text-xs font-sans tracking-widest uppercase hover:bg-[#333] transition-colors shrink-0"
              >
                <span>Start A Conversation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}



