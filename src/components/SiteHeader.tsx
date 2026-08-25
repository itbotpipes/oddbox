"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { num: "01", label: "Gallery", path: "/work" },
    { num: "02", label: "About", path: "/about" },
    { num: "03", label: "Services", path: "/services" },
    { num: "04", label: "Journal", path: "/journal" },
    { num: "05", label: "Contact", path: "/contact" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 px-6 py-3 md:px-12 md:py-4 flex justify-between items-center mix-blend-difference text-white">
        <Link href="/" className="flex items-center">
          <img
            src="/images/Oddbox Studio Logo Transperant.png"
            alt="Oddbox Studio"
            className="h-14 md:h-18 w-auto object-contain brightness-0 invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="group font-sans text-xs tracking-[0.2em] uppercase relative py-1 overflow-hidden"
            >
              <span className="text-[10px] text-neutral-400 mr-2 font-light">{item.num}</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-full block">
                {item.label}
              </span>
              <span className="absolute left-0 top-full w-full transition-transform duration-300 group-hover:-translate-y-full block text-neutral-300">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none z-50 text-white"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Immersive Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#111] z-30 flex flex-col justify-between px-8 py-24 md:hidden"
          >
            <div className="flex flex-col space-y-8 mt-12">
              {menuItems.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  key={item.label}
                >
                  <Link
                    onClick={() => setMenuOpen(false)}
                    href={item.path}
                    className="font-serif text-4xl uppercase tracking-wider block text-[#FAF9F5] hover:text-neutral-400 transition-colors"
                  >
                    <span className="font-sans text-xs tracking-widest mr-4 text-neutral-500 font-light">{item.num}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-neutral-800 pt-8 flex justify-between items-center">
              <div>
                <p className="text-[10px] text-neutral-500 font-sans tracking-widest uppercase">Operated by</p>
                <p className="text-xs text-neutral-300 font-sans">{siteConfig.legalName}</p>
              </div>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-300 font-sans tracking-wider hover:underline"
              >
                INSTAGRAM ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
