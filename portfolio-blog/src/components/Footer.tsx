export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center gap-4 text-sm text-[var(--muted-foreground)]">
          <p>© {new Date().getFullYear()} Developer Blog</p>
          <p className="text-xs">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
