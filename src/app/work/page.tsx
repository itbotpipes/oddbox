"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CustomCursor from "@/components/CustomCursor";
import { portfolioCategories, getCategoryRepresentativeImage } from "@/data/portfolio";

export default function WorkIndex() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Desktop active image logic
  const activeImage = hoveredCategory 
    ? getCategoryRepresentativeImage(hoveredCategory) 
    : getCategoryRepresentativeImage("couple");

  return (
    <>
      <CustomCursor />
      <SiteHeader />

      <main className="w-full bg-[#FAF9F5] select-none min-h-screen pt-32 pb-16 px-6 md:pt-44 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Asymmetric Category Index */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-baseline mb-12">
                <h1 className="font-serif text-5xl md:text-6xl text-[#111] tracking-tight">
                  WORK
                </h1>
                <span className="font-sans text-xs tracking-widest text-[#707070]">
                  01 — 10
                </span>
              </div>

              <p className="font-sans text-sm md:text-base text-[#707070] font-light max-w-sm mb-12 leading-relaxed">
                Photography as memory, identity, and visual language.
              </p>

              {/* Numbered Category Listings */}
              <div className="flex flex-col border-t border-[#E6E4DD]">
                {portfolioCategories.map((cat, index) => {
                  const displayIndex = String(index + 1).padStart(2, "0");
                  return (
                    <Link
                      key={cat.id}
                      href={`/work/${cat.id}`}
                      onMouseEnter={() => setHoveredCategory(cat.id)}
                      onMouseLeave={() => setHoveredCategory(null)}
                      className="group py-6 border-b border-[#E6E4DD] flex justify-between items-center cursor-pointer transition-colors hover:border-[#111]"
                    >
                      <div className="flex items-center gap-6">
                        <span className="font-sans text-[10px] tracking-widest text-[#707070]">
                          {displayIndex}
                        </span>
                        <h2 className="font-serif text-2xl md:text-3xl text-[#111] group-hover:translate-x-2 transition-transform duration-300">
                          {cat.label}
                        </h2>
                      </div>
                      <span className="font-sans text-xs text-[#707070] tracking-wider">
                        {cat.count} photos
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Fluid Image Showcase (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 relative sticky top-32 h-[70vh] bg-neutral-100 overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src={activeImage}
                alt="Category Preview"
                fill
                priority
                sizes="(max-width: 1200px) 40vw, 500px"
                className="object-cover transition-all duration-500 ease-out"
              />
            </div>
          </div>

        </div>
      </main>

      <SiteFooter />
    </>
  );
}
