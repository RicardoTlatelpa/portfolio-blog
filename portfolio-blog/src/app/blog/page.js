import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Blog() {
  const posts = getAllPosts();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.meta.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
