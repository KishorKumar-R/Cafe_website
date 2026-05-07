"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50
      backdrop-blur-md bg-black/20 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold tracking-wide hover:text-[#C08B5C] transition"
        >
          Campesino Coffee
        </a>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <a href="#about" className="hover:text-[#C08B5C] transition">
            About
          </a>

          <a href="#menu" className="hover:text-[#C08B5C] transition">
            Menu
          </a>

          <a href="#gallery" className="hover:text-[#C08B5C] transition">
            Gallery
          </a>

          <a href="#contact" className="hover:text-[#C08B5C] transition">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}