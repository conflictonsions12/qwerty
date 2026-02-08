// src/components/about/TeamMemberCard.jsx
import Image from "next/image";

export default function TeamMemberCard({ name, title, imageUrl }) {
  return (
    /* Added 'max-w-sm' to limit size and 'mx-auto' to keep it centered */
    <div className="group relative rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-all duration-300 max-w-[350px] mx-auto w-full">
      
      {/* Aspect ratio container - 4/5 is quite tall, consider 1/1 for a square look if preferred */}
      <div className="aspect-[4/5] relative">
        <Image
          src={imageUrl}
          alt={`${name} - ${title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={85}
        />
      </div>

      {/* Overlay text at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent">
        <div className="w-16 md:w-20 h-1 bg-green-600 mb-3 md:mb-4 rounded-full" />
        <h3 className="text-lg md:text-xl font-bold leading-tight">
          {name}
        </h3>
        <p className="text-green-300 mt-1 text-sm md:text-base font-medium">
          {title}
        </p>
      </div>
    </div>
  );
}