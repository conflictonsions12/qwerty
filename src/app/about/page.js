import AboutHero from '@/components/AboutHero';
import OurTeam from '@/components/OurTeam';
import OurProcess from '@/components/OurProcess';

export default function AboutPage() {
  return (
    <main>
        
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
        About Us
      </span>
    </div>

    
  </div>
</section>

      <AboutHero />
      <OurTeam />
      <OurProcess />
    </main>
  );
}