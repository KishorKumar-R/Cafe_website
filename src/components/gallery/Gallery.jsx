"use client";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-28 px-6 bg-[#121212]"
    >
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            Cafe Atmosphere
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-[420px] object-cover hover:scale-110 transition duration-700"
              alt="Cafe"
            />
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-[420px] object-cover hover:scale-110 transition duration-700"
              alt="Coffee"
            />
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-[420px] object-cover hover:scale-110 transition duration-700"
              alt="Interior"
            />
          </div>

        </div>
      </div>
    </section>
  );
}