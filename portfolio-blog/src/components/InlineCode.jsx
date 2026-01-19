export default function InlineCode({ children, ...props }) {
  return (
    <code
      className="relative rounded bg-[var(--border)] px-1.5 py-0.5 text-sm font-mono text-[var(--accent)] before:content-[''] after:content-['']"
      {...props}
    >
      {children}
    </code>
  );
}
