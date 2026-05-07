export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-[#0F0F0F]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">
          Contact & Hours
        </h2>

        <p className="text-zinc-400 mb-4">
          Open Daily
        </p>

        <p className="text-zinc-400 mb-10">
          Cozy atmosphere • Free Wi-Fi • Outdoor seating
        </p>

        <button
          className="px-8 py-4 bg-[#C08B5C] text-black rounded-full font-semibold hover:scale-105 transition"
        >
          Get Directions
        </button>
      </div>
    </section>
  );
}