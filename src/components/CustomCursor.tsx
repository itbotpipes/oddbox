"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverArea = target.closest(".custom-hover-area");
      
      if (hoverArea) {
        setHovered(true);
        const text = hoverArea.getAttribute("data-cursor-text") || "VIEW";
        setCursorText(text);
      } else {
        setHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        marginLeft: "-6px",
        marginTop: "-6px",
      }}
    >
      <motion.div
        animate={{
          scale: hovered ? 4 : 1,
          backgroundColor: hovered ? "rgba(250, 249, 245, 0.9)" : "rgba(250, 249, 245, 1)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.2 }}
        className="w-3 h-3 rounded-full flex items-center justify-center relative"
      >
        {hovered && (
          <span className="text-[2px] font-sans font-bold tracking-widest text-[#111] uppercase select-none pointer-events-none scale-[0.35]">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
