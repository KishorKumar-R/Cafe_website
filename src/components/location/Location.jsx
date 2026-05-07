export default function Location() {
  return (
    <section
      id="location"
      className="py-28 px-6 bg-[#121212]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">
          Visit Us
        </h2>

        <p className="text-zinc-400 text-lg mb-12">
          2602 Waugh Dr, Houston, TX 77006, United States
        </p>

        <div className="rounded-3xl overflow-hidden border border-white/10">
          <iframe
            src="https://www.google.com/maps?q=2602+Waugh+Dr,+Houston,+TX+77006,+United+States&output=embed"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}