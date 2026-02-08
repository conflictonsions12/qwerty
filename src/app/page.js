'use client'

import Carousel from "@/components/Carousel";
import Solutions from "@/components/Solutions";
import AboutSection from "@/components/AboutSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import BlogPreview from "@/components/BlogPreview";
import { carouselData } from "@/constants/carouselData";
import { solutionsData } from "@/constants/solutionsData";
import { aboutData } from "@/constants/aboutData";
import { servicesCarouselData } from "@/constants/servicesCarouselData";
import { featuresData } from "@/constants/featuresData";
import { testimonialsData } from "@/constants/testimonialsData";
// import { blogPosts } from "@/constants/blogData";

export default function HomePage() {
  return (
    <>
      <Carousel slides={carouselData} />
      <Solutions solutions={solutionsData} />
      <AboutSection data={aboutData} />
      <ServicesCarousel services={servicesCarouselData} />
      <Features features={featuresData} />
      <Testimonials testimonials={testimonialsData} />
      <CTASection />
      <BlogPreview />
    </>
  );
}
