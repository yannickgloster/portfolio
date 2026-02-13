import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yannick Gloster",
  description: "Thoughts on software, AI, and other topics",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">Nothing here.</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
