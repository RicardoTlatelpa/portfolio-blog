import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Welcome to my blog m%#&!f^cker
          </li>
          <li className="tracking-[-.01em]">Saving my changes soon b!@#$</li>
          <li className="mb-2 tracking-[-.01em]">
            <Link href="/blog"> blog</Link>
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>my footer</p>
      </footer>
    </div>
  );
}
