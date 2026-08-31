"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
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
          <div className="border-b border-[#E6E4DD]/60 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
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

          {/* Elegant Horizontal Category Switcher */}
          <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 mb-16 border-b border-[#E6E4DD]/30 scrollbar-none [scrollbar-width:_none] [-ms-overflow-style:_none] [&::-webkit-scrollbar]:hidden">
            {portfolioCategories.map((cat) => {
              const isActive = cat.id === categorySlug;
              return (
                <Link
                  key={cat.id}
                  href={`/work/${cat.id}`}
                  className={`font-sans text-xs tracking-widest uppercase transition-all pb-2 whitespace-nowrap border-b-2 hover:text-[#111] ${
                    isActive
                      ? "text-[#111] border-[#111] font-medium"
                      : "text-[#707070]/60 border-transparent hover:border-[#E6E4DD]"
                  }`}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>

          {/* Premium Masonry Grid with natural aspect ratios */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 w-full [column-fill:_balance]">
            {categoryImages.map((img, index) => {
              return (
                <motion.div
                  key={img.filename}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: Math.min(index * 0.04, 0.4), ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setLightboxIndex(index)}
                  className="break-inside-avoid relative overflow-hidden bg-neutral-100 cursor-pointer custom-hover-area group rounded-sm shadow-sm transition-all duration-300 hover:shadow-md"
                  data-cursor-text="VIEW"
                >
                  <img
                    src={img.url}
                    alt={img.filename}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                  {/* Subtle Elegant Text Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                    <span className="font-sans text-[9px] tracking-widest text-[#FAF9F5]/70 uppercase mb-1">
                      {currentCategory.label}
                    </span>
                    <h3 className="font-serif text-base text-[#FAF9F5] leading-snug">
                      {img.project}
                    </h3>
                  </div>
                </motion.div>
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
