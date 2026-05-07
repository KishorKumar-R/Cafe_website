export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-[#0F0F0F]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12">
          What Customers Say
        </h2>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">
          <p className="text-2xl text-zinc-300 leading-10">
            “One of Houston’s coziest hidden gems. Amazing coffee, warm vibes,
            and authentic Latin flavors.”
          </p>

          <p className="mt-8 text-[#C08B5C] uppercase tracking-[0.3em] text-sm">
            Google Review
          </p>
        </div>
      </div>
    </section>
  );
}