"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    text: "The cafe de olla was phenomenal. Cozy house-converted coffee shop with fireplace and comfy couches. Must visit.",
    author: "H D",
  },

  {
    text: "One of my favorite coffee places in Houston. Perfect for remote work and the staff are always incredibly friendly.",
    author: "Luke Ging",
  },

  {
    text: "What a hidden gem in Montrose. Cozy ambiance, top-notch coffee, and perfect for relaxing or getting work done.",
    author: "Ariyah Mandel",
  },

  {
    text: "The Maya Mocha had such a satisfying spice to it. I'm genuinely daydreaming about this place.",
    author: "Jamie",
  },

  {
    text: "The Horchata Latte with oat milk was lovely. Not too sweet and not too strong. 10/10 experience.",
    author: "Lexy G",
  },

  {
    text: "One of the coziest coffee shops in Houston with delicious Mexican treats and amazing Cafe De Olla.",
    author: "hanieh nasrollahi",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#0F0F0F] overflow-hidden">
      
      <div className="text-center mb-16 px-6">
        <h2 className="text-5xl font-bold">
          What Customers Say
        </h2>
      </div>

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="flex gap-8 w-max"
      >
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            className="w-[420px] backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition"
          >
            <div className="flex mb-4 text-[#C08B5C] text-xl">
              ★★★★★
            </div>

            <p className="text-zinc-300 text-lg leading-8 mb-6">
              “{review.text}”
            </p>

            <p className="text-[#C08B5C] uppercase tracking-[0.3em] text-sm">
              {review.author}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}