import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl mb-6">
            Developer Blog
          </h1>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Latest Articles
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="border border-[var(--border)] rounded-lg p-6 hover:border-[var(--accent)] transition-all duration-200 hover:shadow-lg">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                      {post.meta.title.replace(/[\[\]]/g, "")}
                    </h3>
                  </div>
                  {post.meta.date && (
                    <time className="text-sm text-[var(--muted-foreground)] font-mono">
                      {new Date(post.meta.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
