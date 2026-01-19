export default function CodeBlock({ children, ...props }) {
  // Extract className from code element if it exists
  const codeProps = children?.props || {};
  const className = codeProps.className || '';
  const language = className?.replace('language-', '') || 'text';
  const codeContent = codeProps.children || children;
  
  return (
    <div className="code-block-wrapper relative group my-8">
      {language !== 'text' && (
        <div className="absolute top-3 right-3 z-10 text-xs text-[var(--muted-foreground)] font-mono opacity-70 bg-[#1e1e1e] px-2 py-1 rounded">
          {language}
        </div>
      )}
      <pre
        className="overflow-x-auto rounded-lg border border-[var(--border)] bg-[#1e1e1e] p-4 text-sm leading-relaxed shadow-lg"
        {...props}
      >
        <code className={className}>{codeContent}</code>
      </pre>
    </div>
  );
}
