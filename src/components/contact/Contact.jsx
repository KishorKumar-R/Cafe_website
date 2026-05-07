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

        <p className="text-zinc-400 mb-4">
          Cozy atmosphere • Free Wi-Fi • Outdoor seating
        </p>

        <p className="text-[#C08B5C] text-xl mb-10">
          +1 (832) 831-6486
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="https://maps.google.com/?q=2602+Waugh+Dr,+Houston,+TX+77006"
            target="_blank"
          >
            <button className="px-8 py-4 bg-[#C08B5C] text-black rounded-full font-semibold hover:scale-105 transition">
              Get Directions
            </button>
          </a>

          <a
            href="https://www.google.com/maps/place/Campesino+Coffee/@29.746053,-95.3939516,17z/data=!4m15!1m8!3m7!1s0x8640c09fd4f66fa3:0xdc0f171bdde4e8f8!2sCampesino+Coffee!8m2!3d29.7459968!4d-95.3941935!10e9!16s%2Fg%2F11bc71344z!3m5!1s0x8640c09fd4f66fa3:0xdc0f171bdde4e8f8!8m2!3d29.7459968!4d-95.3941935!16s%2Fg%2F11bc71344z?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <button className="px-8 py-4 border border-white/20 backdrop-blur-md rounded-full hover:bg-white/10 transition">
              Leave a Review
            </button>
          </a>

        </div>
      </div>
    </section>
  );
}