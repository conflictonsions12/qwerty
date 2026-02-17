import Image from "next/image";
import Link from "next/link";
import { FaUser, FaTag, FaArrowLeft } from "react-icons/fa";
import { blogPosts } from "@/constants/blogData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: String(post.id),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = blogPosts.find((p) => String(p.id) === String(id));

  if (!post) {
    return {
      title: "Post Not Found | Dhorne agro consult",
    };
  }

  return {
    title: `${post.title} | Dhorne agro consult`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const { id } = await params;
  const post = blogPosts.find((p) => String(p.id) === String(id));

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  return (
    <>
      {/* Hero Image */}
     <section className="w-full flex justify-center overflow-hidden py-6">
  <div className="relative w-[90vw] max-w-[500px] aspect-square">
    <Image
      src={post.image}
      alt={post.title}
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/30" />
  </div>
</section>



      {/* Back Link */}
      <section className="py-6 px-6 lg:px-24 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 md:py-20 px-6 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <FaTag className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-green-600">{post.category}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaUser className="w-4 h-4" />
              <span>By {post.author}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8">
            {post.title}
          </h1>

          {/* Content */}
          <p className="text-gray-700 text-lg font-semibold mb-8">
            {post.excerpt}
          </p>

          <div
            className="prose prose-lg max-w-none text-gray-700 space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="bg-green-50 rounded-lg p-8 md:p-12 text-center mt-12 border border-green-200">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Need Expert Consultation?
            </h3>
            <p className="text-gray-600 mb-6">
              Get personalized agricultural advice from our team of experts.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700"
            >
              Schedule a Free Consultation
            </Link>
          </div>

          {/* Related */}
          {relatedPosts.length > 0 && (
            <div className="border-t border-gray-200 pt-12 mt-12">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-8">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="group"
                  >
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-lg font-extrabold text-gray-900 group-hover:text-green-600">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-2">
                      {post.category}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
