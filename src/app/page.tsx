"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CustomCursor from "@/components/CustomCursor";
import ParallaxVisualBreak from "@/components/ParallaxVisualBreak";
import HomeServicesSection from "@/components/HomeServicesSection";
import ContactFormSection from "@/components/ContactFormSection";
import { siteConfig } from "@/data/site";
import { selectedWorkItems, portfolioCategories } from "@/data/portfolio";
import { journalPosts } from "@/data/journal";

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    // Reveal hero elements sequentially on initial mount
    const timer = setTimeout(() => setHeroLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <SiteHeader />

      <main className="w-full bg-[#FAF9F5] select-none overflow-hidden">
        
        {/* 01 & 02: HERO SECTION - Cinematic Mask Reveal */}
        <section className="relative w-full h-screen bg-[#111] overflow-hidden flex items-center justify-center">
          <motion.div
            initial={{ clipPath: "polygon(15% 15%, 85% 15%, 85% 85%, 15% 85%)", scale: 1.05 }}
            animate={
              heroLoaded
                ? { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", scale: 1 }
                : {}
            }
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src="/images/couple/couple-01.jpg?v=2"
              alt="Cinematic Portrait"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
            />
          </motion.div>

          {/* Floating Minimal HUD Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16 pointer-events-none text-[#FAF9F5] z-10">
            <div />
            
            {/* Massive Editorial Header */}
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                className="font-serif text-[13vw] leading-none tracking-tight uppercase font-medium"
              >
                ODDBOX
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={heroLoaded ? { opacity: 0.8 } : {}}
                transition={{ duration: 1, delay: 1 }}
                className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase mt-4"
              >
                Photography · Films · Creative Production
              </motion.p>
            </div>

            {/* Footer Metadata */}
            <div className="flex justify-between items-center text-[10px] tracking-widest uppercase">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={heroLoaded ? { opacity: 0.6, x: 0 } : {}}
                transition={{ delay: 1.2 }}
              >
                Surat / India
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={heroLoaded ? { opacity: 0.6, x: 0 } : {}}
                transition={{ delay: 1.2 }}
                className="animate-pulse"
              >
                Scroll down ↓
              </motion.span>
            </div>
          </div>
        </section>

        {/* 03: INTRO / POSITIONING */}
        <section className="w-full bg-[#FAF9F5] py-24 px-6 md:py-36 md:px-16 flex flex-col items-center">
          <div className="max-w-4xl text-center md:text-left">
            <span className="font-sans text-[10px] tracking-widest text-[#707070] uppercase">
              01 — Identity
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#111] tracking-tight leading-tight mt-8 mb-6">
              We don't just document moments. We give them a visual language.
            </h2>
            <p className="font-sans text-[#707070] text-sm md:text-base leading-relaxed font-light max-w-2xl mt-4">
              {siteConfig.aboutBrief} Operated under {siteConfig.legalName}, we construct memories into cinema-grade compositions.
            </p>
          </div>
        </section>

        {/* 04: SELECTED WORK (Signature Section with sticky elements) */}
        <section className="w-full bg-[#FAF9F5] py-20 px-6 md:py-32 md:px-16 border-t border-[#E6E4DD]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16 border-b border-[#E6E4DD]/60 pb-8">
              <div>
                <span className="font-sans text-[10px] tracking-widest text-[#707070] uppercase">
                  02 — Showcase
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-[#111] tracking-tight mt-4">
                  Selected Work
                </h2>
              </div>
              <Link href="/work" className="font-sans text-xs tracking-widest text-[#111] hover:underline uppercase">
                GALLERY ↗
              </Link>
            </div>

            {/* Asymmetrical Editorial Grid */}
            <div className="flex flex-col space-y-32 md:space-y-48">
              {selectedWorkItems.map((item, index) => {
                // Layout pattern toggling between left offset, right offset, and centered layout
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.num}
                    className={`flex flex-col ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center justify-between gap-12 md:gap-24`}
                  >
                    {/* Visual Container */}
                    <div
                      className={`w-full ${
                        item.aspect === "portrait" ? "md:w-5/12 aspect-[3/4]" : "md:w-7/12 aspect-[16/10]"
                      } relative overflow-hidden bg-neutral-100 custom-hover-area`}
                      data-cursor-text="OPEN"
                    >
                      <img
                        src={`${item.image}?v=2`}
                        alt={item.label}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                      />
                    </div>

                    {/* Meta Container */}
                    <div className="w-full md:w-4/12 flex flex-col justify-center">
                      <span className="font-sans text-xs text-[#707070] tracking-wider mb-2">
                        {item.num} / {item.subtitle}
                      </span>
                      <h3 className="font-serif text-4xl text-[#111] tracking-tight mb-4">
                        {item.label}
                      </h3>
                      <Link
                        href="/work"
                        className="font-sans text-[10px] text-[#111] tracking-widest uppercase hover:underline mt-2 self-start"
                      >
                        EXPLORE PROJECT ↗
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 05: IMMERSIVE VISUAL TRANSITION */}
        <ParallaxVisualBreak />

        {/* 06: SERVICES */}
        <HomeServicesSection />

        {/* ABOUT PREVIEW WITH BUNTY PATEL PHILOSOPHY */}
        <section className="w-full bg-[#FAF9F5] py-20 px-6 md:py-32 md:px-16 border-t border-[#E6E4DD]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[3/4] bg-transparent overflow-hidden">
              <Image
                src="/images/bunty_patel.avif"
                alt="Bunty Patel"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover mix-blend-multiply"
              />
            </div>
            
            <div className="lg:col-span-7 flex flex-col justify-center lg:pl-12">
              <span className="font-sans text-[10px] tracking-widest text-[#707070] uppercase mb-4">
                04 — Founder
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#111] tracking-tight mb-6">
                Bunty Patel
              </h2>
              <p className="font-sans text-sm text-[#707070] leading-relaxed font-light mb-8 max-w-xl">
                {siteConfig.aboutPhilosophies[0]}
              </p>
              <div className="flex flex-col space-y-4 border-l-2 border-[#111] pl-6 py-2 italic font-serif text-[#111]">
                <p>"{siteConfig.aboutPhilosophies[1]}"</p>
                <p className="text-xs font-sans tracking-widest uppercase text-[#707070] not-italic">
                  — Philosophy
                </p>
              </div>
              <Link
                href="/about"
                className="inline-block mt-12 self-start px-6 py-3 bg-[#111] text-[#FAF9F5] text-xs font-sans tracking-widest uppercase hover:bg-neutral-800 transition-colors"
              >
                READ STORY ↗
              </Link>
            </div>
          </div>
        </section>

        {/* JOURNAL FEATURES */}
        <section className="w-full bg-[#FAF9F5] py-20 px-6 md:py-32 md:px-16 border-t border-[#E6E4DD]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16 pb-8 border-b border-[#E6E4DD]/60">
              <div>
                <span className="font-sans text-[10px] tracking-widest text-[#707070] uppercase">
                  Insights
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-[#111] tracking-tight mt-4">
                  Journal
                </h2>
              </div>
              <Link href="/journal" className="font-sans text-xs tracking-widest text-[#111] hover:underline uppercase">
                ALL ARTICLES ↗
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {journalPosts.map((post) => (
                <article key={post.slug} className="flex flex-col">
                  <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover"
                    />
                  </div>
                  <span className="font-sans text-[10px] text-[#707070] tracking-widest uppercase mb-2 block">
                    {post.category} · {post.date}
                  </span>
                  <h3 className="font-serif text-2xl text-[#111] mb-4 hover:underline">
                    <Link href={`/journal/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="font-sans text-xs text-[#707070] leading-relaxed font-light mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/journal/${post.slug}`}
                    className="font-sans text-[10px] text-[#111] tracking-widest uppercase hover:underline self-start font-medium"
                  >
                    READ ARTICLE ↗
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 12: EMOTIONAL CALL TO ACTION */}
        <section className="w-full bg-[#FAF9F5] py-28 px-6 md:py-44 md:px-16 border-t border-[#E6E4DD] text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="font-serif text-4xl md:text-6xl text-[#111] tracking-tight leading-tight mb-8">
              Some moments deserve more than memory.
            </h2>
            <p className="font-sans text-base text-[#707070] tracking-widest uppercase mb-12 font-light">
              Let's capture them forever.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#111] text-[#FAF9F5] text-xs font-sans tracking-widest uppercase hover:bg-neutral-800 transition-colors"
            >
              BOOK YOUR MOMENT ↗
            </Link>
          </div>
        </section>

        {/* 13: CONTACT */}
        <ContactFormSection />

        <SiteFooter />
      </main>
    </>
  );
}
