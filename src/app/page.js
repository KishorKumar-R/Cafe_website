import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import MenuSection from "@/components/menu/MenuSection";
import Testimonials from "@/components/testimonials/Testimonials";
import Gallery from "@/components/gallery/Gallery";
import Location from "@/components/location/Location";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="bg-[#0F0F0F] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}