import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-semibold tracking-tight text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
          >
            Developer Blog
          </Link>
          <div className="flex items-center gap-6">
            <Link 
              href="/blog" 
              className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              Articles
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
