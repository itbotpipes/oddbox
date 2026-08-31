"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { num: "01", label: "Gallery", path: "/work" },
    { num: "02", label: "About", path: "/about" },
    { num: "03", label: "Services", path: "/services" },
    { num: "04", label: "Journal", path: "/journal" },
    { num: "05", label: "Contact", path: "/contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm py-2.5 px-6 md:px-12 md:py-3.5 text-[#111111]"
            : "px-6 py-3 md:px-12 md:py-4 mix-blend-difference text-white"
        } flex justify-between items-center`}
      >
        <Link href="/" className="flex items-center">
          <img
            src="/images/Oddbox Studio Logo Transperant.png"
            alt="Oddbox Studio"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? "h-9 md:h-11 brightness-0" : "h-14 md:h-18 brightness-0 invert"
            }`}
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
              <span className={`text-[10px] mr-2 font-light transition-colors ${
                scrolled ? "text-neutral-500" : "text-neutral-400"
              }`}>{item.num}</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-full block">
                {item.label}
              </span>
              <span className={`absolute left-0 top-full w-full transition-transform duration-300 group-hover:-translate-y-full block ${
                scrolled ? "text-neutral-600" : "text-neutral-300"
              }`}>
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden focus:outline-none z-50 transition-colors ${
            scrolled ? "text-[#111111]" : "text-white"
          }`}
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
