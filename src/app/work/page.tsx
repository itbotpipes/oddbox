"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CustomCursor from "@/components/CustomCursor";
import GalleryLightbox from "@/components/GalleryLightbox";
import { portfolioCategories } from "@/data/portfolio";
import manifestJson from "@/asset-manifest.json";

interface GalleryImageItem {
  url: string;
  filename: string;
  project: string;
  category: string;
  categoryLabel: string;
}

function GalleryContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Map categories for lookup
  const categoryMap = useMemo(() => {
    const map = new Map<string, string>();
    portfolioCategories.forEach((cat) => {
      map.set(cat.id, cat.label);
      map.set(cat.folder, cat.label);
    });
    return map;
  }, []);

  // Filter images dynamically based on active category
  const filteredImages = useMemo<GalleryImageItem[]>(() => {
    if (selectedCategory === "all") {
      return manifestJson.map((item) => ({
        url: `/images/${item.category}/${item.filename}`,
        filename: item.filename,
        project: item.project,
        category: item.category,
        categoryLabel: categoryMap.get(item.category) || item.category,
      }));
    }

    const currentCat = portfolioCategories.find((c) => c.id === selectedCategory);
    const folder = currentCat ? currentCat.folder : selectedCategory;

    return manifestJson
      .filter((item) => item.category === folder)
      .map((item) => ({
        url: `/images/${item.category}/${item.filename}`,
        filename: item.filename,
        project: item.project,
        category: item.category,
        categoryLabel: currentCat ? currentCat.label : item.category,
      }));
  }, [selectedCategory, categoryMap]);

  // Current active category details
  const activeCategoryObj = portfolioCategories.find((c) => c.id === selectedCategory);
  const displayTitle = selectedCategory === "all" ? "ALL" : (activeCategoryObj ? activeCategoryObj.label : selectedCategory);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    // Smoothly update URL query param without page reload
    if (typeof window !== "undefined") {
      const newUrl = catId === "all" ? "/work" : `/work?category=${catId}`;
      window.history.replaceState(null, "", newUrl);
    }
  };

  const allFilterTabs = [
    { id: "all", label: "All" },
    ...portfolioCategories
  ];

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
                {displayTitle}
              </h1>
            </div>
            <div className="flex items-center gap-8 text-xs font-sans text-[#707070]">
              <span>Oddbox Studio Portfolio</span>
              <span>{filteredImages.length} frames</span>
            </div>
          </div>

          {/* Elegant Horizontal Category Switcher */}
          <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 mb-16 border-b border-[#E6E4DD]/30 scrollbar-none [scrollbar-width:_none] [-ms-overflow-style:_none] [&::-webkit-scrollbar]:hidden">
            {allFilterTabs.map((cat) => {
              const isActive = cat.id === selectedCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`font-sans text-xs tracking-widest uppercase transition-all pb-2 whitespace-nowrap border-b-2 cursor-pointer text-left hover:text-[#111] ${
                    isActive
                      ? "text-[#111] border-[#111] font-medium"
                      : "text-[#707070]/60 border-transparent hover:border-[#E6E4DD]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Premium Masonry Grid with natural aspect ratios */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 w-full [column-fill:_balance]">
            {filteredImages.map((img, index) => {
              return (
                <motion.div
                  key={`${img.category}-${img.filename}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(index * 0.03, 0.3),
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  onClick={() => setLightboxIndex(index)}
                  className="break-inside-avoid relative overflow-hidden bg-neutral-100 cursor-pointer custom-hover-area group rounded-sm shadow-sm transition-all duration-300 hover:shadow-md"
                  data-cursor-text="VIEW"
                >
                  <img
                    src={img.url}
                    alt={img.filename}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                  {/* Subtle Elegant Text Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                    <span className="font-sans text-[9px] tracking-widest text-[#FAF9F5]/70 uppercase mb-1">
                      {img.categoryLabel}
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
          images={filteredImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <SiteFooter />
    </>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF9F5]" />}>
      <GalleryContent />
    </Suspense>
  );
}
