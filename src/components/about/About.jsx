"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-[#121212]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.img
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop"
          alt="Coffee"
          className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[0.3em] text-[#C08B5C] text-sm mb-4">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Hidden Gem in Houston
          </h2>

          <p className="text-zinc-400 leading-8 mb-6">
            Campesino Coffee House blends Latin American coffee culture with a
            warm, cozy atmosphere perfect for conversations, remote work,
            handcrafted coffee, and authentic flavors.
          </p>

          <p className="text-zinc-400 leading-8">
            From Café De Olla to Salvadoran-style tamales, every menu item is
            crafted with comfort, culture, and community in mind.
          </p>
        </motion.div>

      </div>
    </section>
  );
}