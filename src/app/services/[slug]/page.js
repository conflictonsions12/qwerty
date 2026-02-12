import Image from "next/image";
import Link from "next/link";
import { services } from "@/constants/services";
import { notFound } from "next/navigation";

/*
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}
*/

export async function generateMetadata({ params }) {
  const { slug } = params; // removed incorrect await
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Dhorne agro consult",
    };
  }

  return {
    title: `${service.title} | Dhorne agro consult`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = params; // removed incorrect await
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      {/* Mobile: column (list on top) / Desktop: row (list left) */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar list */}
        <aside className="w-full md:w-1/3">
          <div className="bg-white shadow-md rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-4">
              Our Services
            </h2>
            <ul className="space-y-2">
              {services.map((s) => {
                const isActive = s.slug === slug;

                return (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className={`group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-green-700 text-white"
                          : "bg-gray-50 text-gray-800 hover:bg-green-50"
                      }`}
                    >
                      <span>{s.title}</span>
                      {/* green arrow appears on hover */}
                      <span
                        className={`ml-2 transition-all duration-200 ${
                          isActive
                            ? "text-white"
                            : "text-green-700 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                        }`}
                      >
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <section className="w-full md:w-2/3">
          <h1 className="text-4xl font-extrabold mb-6">{service.title}</h1>
          <p className="text-gray-600 mb-6">{service.shortDescription}</p>

          {service.image && (
            <div className="relative w-full h-72 mb-8">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          )}

          <div className="prose max-w-none text-gray-700 whitespace-pre-line mb-6">
            {service.fullDescription}
          </div>

          {service.highlights && service.highlights.length > 0 && (
            <section className="mt-8">
              {service.highlightsTitle && (
                <h2 className="text-2xl font-semibold mb-4">
                  {service.highlightsTitle}
                </h2>
              )}
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {service.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </section>
      </div>
    </main>
  );
}
