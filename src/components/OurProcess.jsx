// src/components/about/OurProcess.jsx
import ProcessStep from "./ProcessStep";

const steps = [
  {
    
    title: "Consult",
    description: "Free initial consultation to understand your needs.",
    icon: "🔍",
  },
  {
  
    title: "Analyze",
    description: "Detailed soil testing and crop analysis to identify issues.",
    icon: "📊",
  },
  {
   
    title: "Optimize",
    description: "Tailored solutions for optimal yield and environmental care.",
    icon: "⚙️",
  },
];

export default function OurProcess() {
  return (
    <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-16 xl:px-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm md:text-base font-semibold text-gray-500 tracking-widest uppercase">
            OUR PROCESS
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Complete Every Step Carefully
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
      
         

          {steps.map((step, idx) => (
            <ProcessStep key={idx} {...step} isLast={idx === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}