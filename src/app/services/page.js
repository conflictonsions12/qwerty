// src/app/services/page.js
import ServicesCarousel from "@/components/ServicesCarousel";

export const metadata = {
  title: "Services | Dhorne agro consult",
  description:
    "Explore our crop inspections, soil testing, irrigation scheduling, fertilizer advice, and more consulting services.",
};

export default function ServicesPage() {
  return (
    <>
      <section 
  className=" py-12 md:py-26 px-6 lg:px-24 relative bg-cover bg-center bg-no-repeat"
  style={{ 
    backgroundImage: "url('/tracktorbg.jpg')"  // Adjust extension if needed: .png / .webp
  }}
>
  {/* Optional: Add a dark/colored overlay for better text readability on the image */}
  <div className="absolute inset-0 bg-black/50 md:bg-black/40 lg:bg-black/30"></div> 
  
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="mb-4">
      <span className="text-sm md:text-2xl font-semibold text-white tracking-widest uppercase">
        Services
      </span>
    </div>

    
  </div>
</section>

    <main className="max-w-6xl mx-auto px-4 py-16">

      
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold mb-3">
          Our Services
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Explore our range of professional agronomy and consulting services designed
          to improve your farm productivity and sustainability.
        </p>
      </header>

      <section>
        <ServicesCarousel />
      </section>
    </main>
    </>
  );
}
