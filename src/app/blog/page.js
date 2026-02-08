import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/constants/blogData";
import BlogClient from "@/components/BlogClient";

export const metadata = {
  title: "Blog | Dhorne agro consult",
  description:
    "Stay ahead with expert advice on agricultural innovations, soil management, and sustainable farming practices.",
};

export default function BlogPage() {
  return (
    <>
     
      <section 
  className="py-12 md:py-20 px-6 lg:px-24 relative bg-cover bg-center bg-no-repeat"
  style={{ 
    backgroundImage: "url('/tracktorbg.jpg')"  // Adjust extension if needed: .png / .webp
  }}
>
  {/* Optional: Add a dark/colored overlay for better text readability on the image */}
  <div className="absolute inset-0 bg-black/50 md:bg-black/40 lg:bg-black/30"></div> 
  
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="mb-4">
      <span className="text-sm md:text-base font-semibold text-green-400 tracking-widest uppercase">
        Blog
      </span>
    </div>

    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
      Latest Insights & News
    </h1>

    <p className="text-gray-200 text-base md:text-lg max-w-2xl">
      Stay ahead with expert advice on agricultural innovations, soil management, and sustainable farming practices.
    </p>
  </div>
</section>

      <BlogClient posts={blogPosts} />
    </>
  );
}
