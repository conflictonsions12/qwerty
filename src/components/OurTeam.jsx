// src/components/about/OurTeam.jsx
import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
  {
    name: "David Horne",
    title: "Owner",
    imageUrl: "/David.jpeg",
  },
  // {
  //   name: "Cody Bierlink",
  //   title: "Agronomist, CCA",
  //   imageUrl: "/cody.jpg",
  // },
  // {
  //   name: "Tyler T. Zinne",
  //   title: "Agronomist, CCA",
  //   imageUrl: "/tyler.jpg",
  // },
  // add more team members here if needed in the future
];

export default function OurTeam() {
  return (
    <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-16 xl:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm md:text-base font-semibold text-gray-500 tracking-widest uppercase">
            Meet The Founder
          </span>
        
        </div>

        {/* Added "justify-center" to the container */}
<div className="justify-center">
  {teamMembers.map((member, idx) => (
    <TeamMemberCard key={idx} {...member} />
  ))}
</div>
      </div>
    </section>
  );
}
