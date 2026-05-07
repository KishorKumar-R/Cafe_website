"use client";

import { motion } from "framer-motion";

const drinks = [
  {
    name: "Cafe De Olla",
    desc: "Traditional Mexican coffee with cinnamon and piloncillo.",
    price: "$5.50",
  },

  {
    name: "Maya Mocha Latte",
    desc: "Mocha latte with cayenne, cinnamon, and nutmeg.",
    price: "$5",
  },

  {
    name: "Campesino Cafe Con Leche",
    desc: "Café de olla with cinnamon, honey, and oat milk.",
    price: "$5",
  },
];

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="py-28 px-6 bg-[#0F0F0F]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-[#C08B5C] text-sm mb-4">
            Signature Menu
          </p>

          <h2 className="text-5xl font-bold">
            Specialty Beverages
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {drinks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                {item.name}
              </h3>

              <p className="text-zinc-400 leading-7 mb-6">
                {item.desc}
              </p>

              <span className="text-[#C08B5C] text-xl font-semibold">
                {item.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}