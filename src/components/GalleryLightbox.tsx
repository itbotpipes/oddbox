"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { url: string; project?: string; filename: string }[];
  initialIndex: number;
  onClose: () => void;
}

export default function GalleryLightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    document.body.classList.add("lightbox-open");
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [index]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[index];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[#111111] flex flex-col justify-between p-6 select-none">
        
        {/* Lightbox Header Controls */}
        <div className="flex justify-between items-center w-full text-white z-10">
          <div className="font-sans text-xs tracking-widest text-neutral-400">
            {index + 1} / {images.length} — {currentImage.project || "ODDBOX GALLERY"}
          </div>
          <button
            onClick={onClose}
            className="p-3 text-neutral-400 hover:text-white hover:scale-105 transition-all focus:outline-none"
            aria-label="Close Gallery"
          >
            <X size={20} />
          </button>
        </div>

        {/* Central Visual Screen */}
        <div className="flex-1 w-full flex items-center justify-center relative my-4">
          <button
            onClick={handlePrev}
            className="absolute left-4 p-4 text-neutral-400 hover:text-white transition-colors z-10 focus:outline-none hidden md:block"
            aria-label="Previous Image"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="relative w-full h-full max-w-5xl max-h-[75vh] flex items-center justify-center">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image
                src={currentImage.url}
                alt={currentImage.filename}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
              />
            </motion.div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 p-4 text-neutral-400 hover:text-white transition-colors z-10 focus:outline-none hidden md:block"
            aria-label="Next Image"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Mobile Swipe / Tap Hint & Caption */}
        <div className="w-full text-center text-neutral-400 text-xs font-sans pb-4">
          <div className="md:hidden flex justify-center space-x-12 mb-2">
            <button onClick={handlePrev} className="px-4 py-2 border border-neutral-800 rounded">PREV</button>
            <button onClick={handleNext} className="px-4 py-2 border border-neutral-800 rounded">NEXT</button>
          </div>
          <span className="tracking-widest uppercase font-light text-[10px]">
            Use Arrow keys to navigate · Tap ESC to close
          </span>
        </div>
      </div>
    </AnimatePresence>
  );
}
