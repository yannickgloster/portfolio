import Link from "next/link";
import { BlogPostMeta, formatDate } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/thoughts/${post.slug}`} className="block group">
      <article className="border-b border-border pb-8 hover:border-teal-600/50 transition-colors">
        <time className="text-sm text-muted-foreground font-mono mb-2 block">
          {formatDate(post.date)}
        </time>
        <h2 className="text-2xl font-semibold text-foreground group-hover:text-teal-600 transition-colors mb-2">
          {post.title}
        </h2>
        {post.description && (
          <p className="text-muted-foreground">{post.description}</p>
        )}
      </article>
    </Link>
  );
}
