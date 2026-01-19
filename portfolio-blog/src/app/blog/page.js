import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] mb-4">
              All Articles
            </h1>
            <p className="text-lg text-[var(--muted-foreground)]">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'}
            </p>
          </div>

          {/* Posts Grid */}
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="border border-[var(--border)] rounded-lg p-6 hover:border-[var(--accent)] transition-all duration-200 hover:shadow-lg bg-[var(--background)]">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="text-2xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors flex-1">
                      {post.meta.title.replace(/[\[\]]/g, '')}
                    </h2>
                  </div>
                  {post.meta.date && (
                    <time className="text-sm text-[var(--muted-foreground)] font-mono">
                      {new Date(post.meta.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  )}
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
