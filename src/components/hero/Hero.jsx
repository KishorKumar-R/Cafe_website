"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <p className="uppercase tracking-[0.4em] text-sm text-[#C08B5C] mb-6">
          Houston • Latin American Coffee Experience
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Campesino <br />
          Coffee House
        </h1>

        <p className="text-zinc-300 text-lg mb-10">
          Cozy handcrafted coffee experience inspired by Latin American culture,
          artisan flavors, and community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#menu">
            <button className="px-8 py-4 bg-[#C08B5C] text-black font-semibold rounded-full hover:scale-105 transition">
              View Menu
            </button>
          </a>

          <a href="#location">
            <button className="px-8 py-4 border border-white/20 backdrop-blur-md rounded-full hover:bg-white/10 transition">
              Visit Cafe
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}