// src/components/about/ProcessStep.jsx
export default function ProcessStep({  title, description, icon }) {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-green-50 border-4 border-green-600 flex items-center justify-center mb-6 shadow-md">
        <span className="text-4xl md:text-5xl">{icon}</span>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 max-w-xs">{description}</p>

      
      
    </div>
  );
}