"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxVisualBreak() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Understated slow parallax shift
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-neutral-900">
      <motion.div style={{ y, height: "120%" }} className="absolute top-[-10%] left-0 w-full relative">
        <Image
          src="/images/lifestyle/lifestyle-06.jpeg"
          alt="Visual Moment"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.85]"
        />
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-serif text-[10vw] md:text-[6vw] tracking-widest text-[#FAF9F5]/40 select-none uppercase">
          03 / 10
        </span>
      </div>
    </section>
  );
}
