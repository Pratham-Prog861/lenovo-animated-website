"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-black/50 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-2xl font-bold tracking-tighter text-white">LOQ</div>

      <div className="hidden md:flex items-center gap-8">
        {["Features", "Technology", "Reviews"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <button className="px-6 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-200 transition-colors">
        Buy Now
      </button>
    </motion.nav>
  );
}
