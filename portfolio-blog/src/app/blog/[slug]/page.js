import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Carousel from "../../../components/Carousel";

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

  return (
    <div className="max-w-[1200px] m-auto">
      <h1>{post.meta.title}</h1>
      <article className="prose prose-lg dark:prose-invert mx-auto">
        <MDXRemote source={post.content} components={Carousel} />
      </article>
    </div>
  );
}
