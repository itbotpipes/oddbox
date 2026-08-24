"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CustomCursor from "@/components/CustomCursor";
import GalleryLightbox from "@/components/GalleryLightbox";
import { portfolioCategories } from "@/data/portfolio";
import manifestJson from "@/asset-manifest.json";

// Define mapping helper to match routes to manifest categories
const routeToManifestCategory = (slug: string): string => {
  return slug; // Folder categories match route slugs directly
};

interface PageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryGallery({ params }: PageProps) {
  const resolvedParams = use(params);
  const { category: categorySlug } = resolvedParams;
  
  const currentCategory = portfolioCategories.find((c) => c.id === categorySlug);
  
  if (!currentCategory) {
    notFound();
  }

  // Filter images dynamically from the asset manifest matching active folder
  const categoryImages = manifestJson
    .filter((item) => item.category === currentCategory.folder)
    .map((item) => ({
      url: `/images/${item.category}/${item.filename}`,
      filename: item.filename,
      project: item.project
    }));

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <CustomCursor />
      <SiteHeader />

      <main className="w-full bg-[#FAF9F5] select-none min-h-screen pt-32 pb-16 px-6 md:pt-44 md:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Metadata */}
          <div className="border-b border-[#E6E4DD]/60 pb-12 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="font-sans text-[10px] tracking-widest text-[#707070] uppercase">
                Collection
              </span>
              <h1 className="font-serif text-5xl md:text-6xl text-[#111] tracking-tight mt-4 uppercase">
                {currentCategory.label}
              </h1>
            </div>
            <div className="flex items-center gap-8 text-xs font-sans text-[#707070]">
              <span>Oddbox Studio Portfolio</span>
              <span>{categoryImages.length} frames</span>
            </div>
          </div>

          {/* Manually Paced Asymmetric Photo Essay Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            {categoryImages.map((img, index) => {
              // Dynamically resolve different layouts based on image position to prevent standard cards grid
              let gridClasses = "md:col-span-6"; // Fallback
              
              const pos = index % 8;
              if (pos === 0) {
                // Image 01 — Large landscape
                gridClasses = "md:col-span-12 aspect-[16/10]";
              } else if (pos === 1) {
                // Image 02 — Narrow portrait aligned right
                gridClasses = "md:col-span-5 md:col-start-8 aspect-[3/4]";
              } else if (pos === 2 || pos === 3) {
                // Images 03 + 04 — Asymmetric pair
                gridClasses = pos === 2 ? "md:col-span-7 aspect-[4/3]" : "md:col-span-5 aspect-[3/4] md:mt-24";
              } else if (pos === 4) {
                // Image 05 — Full bleed
                gridClasses = "md:col-span-12 aspect-[16/9]";
              } else if (pos === 5) {
                // Image 06 — Smaller centered photograph surrounded by whitespace
                gridClasses = "md:col-span-6 md:col-start-4 aspect-[4/5] my-12";
              } else {
                // Images 07 + 08 — Editorial closing pair
                gridClasses = "md:col-span-6 aspect-[4/3]";
              }

              return (
                <div
                  key={img.filename}
                  onClick={() => setLightboxIndex(index)}
                  className={`${gridClasses} relative overflow-hidden bg-neutral-100 cursor-pointer custom-hover-area group`}
                  data-cursor-text="VIEW"
                >
                  <Image
                    src={img.url}
                    alt={img.filename}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-4 left-4 font-sans text-[10px] tracking-widest text-[#FAF9F5] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase">
                    {img.project}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>

      {/* Fullscreen premium Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={categoryImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <SiteFooter />
    </>
  );
}
