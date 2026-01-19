import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Carousel from "../../../components/Carousel";
import CodeBlock from "../../../components/CodeBlock";
import InlineCode from "../../../components/InlineCode";
import Link from "next/link";
import { getReadingTime } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }) {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const postTitle = post.meta.title.replace(/[\[\]]/g, '');
  const readingTime = getReadingTime(post.content);

  const components = {
    Carousel,
    pre: (props) => <CodeBlock {...props} />,
    code: (props) => {
      // If it has className, it's part of a code block (handled by pre)
      // Otherwise it's inline code
      if (props.className) {
        return <code {...props} />;
      }
      return <InlineCode {...props} />;
    },
    h1: (props) => <h1 className="text-4xl font-bold mt-16 mb-8 text-[var(--foreground)] leading-tight scroll-mt-20 tracking-tight" {...props} />,
    h2: (props) => <h2 className="text-3xl font-semibold mt-16 mb-6 text-[var(--foreground)] leading-tight scroll-mt-20 tracking-tight" {...props} />,
    h3: (props) => <h3 className="text-2xl font-semibold mt-12 mb-5 text-[var(--foreground)] leading-tight scroll-mt-20 tracking-tight" {...props} />,
    h4: (props) => <h4 className="text-xl font-semibold mt-10 mb-4 text-[var(--foreground)] leading-tight tracking-tight" {...props} />,
    p: (props) => <p className="mb-7 text-[var(--foreground)] leading-[1.7]" {...props} />,
    a: (props) => <a className="text-[var(--accent)] no-underline hover:underline font-medium" {...props} />,
    strong: (props) => <strong className="font-semibold text-[var(--foreground)]" {...props} />,
    ul: (props) => <ul className="list-disc mb-6" {...props} />,
    ol: (props) => <ol className="list-decimal mb-6" {...props} />,
    li: (props) => <li className="text-[var(--foreground)] my-2" {...props} />,
    blockquote: (props) => (
      <blockquote 
        className="border-l-4 border-[var(--accent)] pl-6 italic my-6 bg-[var(--border)]/30 py-3 rounded-r text-[var(--foreground)]" 
        {...props} 
      />
    ),
    hr: (props) => <hr className="border-[var(--border)] my-8" {...props} />,
    img: (props) => (
      <img 
        className="rounded-lg border border-[var(--border)] shadow-md my-8 w-full max-w-full" 
        {...props} 
      />
    ),
  };

  return (
    <article className="min-h-screen bg-[var(--background)]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 pt-12 pb-32">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] mb-12 transition-colors font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to articles
        </Link>

        {/* Header */}
        <header className="mb-24 border-b border-[var(--border)] pb-12 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-8 leading-[1.1] article-title">
            {postTitle}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
            {post.meta.date && (
              <time className="font-mono">
                {new Date(post.meta.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
            {readingTime > 0 && (
              <>
                <span className="text-[var(--border)]">•</span>
                <span>{readingTime} min read</span>
              </>
            )}
          </div>
        </header>

        {/* Content - Constrained to optimal reading width (65 characters) */}
        <div className="article-content article-text-float">
          <MDXRemote source={post.content} components={components} />
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-[var(--border)] max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to articles
          </Link>
        </footer>
      </div>
    </article>
  );
}
