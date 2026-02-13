import Link from "next/link";
import { BlogPost, formatDate } from "@/lib/blog";

interface BlogHeaderProps {
  post: BlogPost;
}

export function BlogHeader({ post }: BlogHeaderProps) {
  return (
    <header className="border-b border-border pb-8 mb-8">
      <nav className="text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-foreground transition-colors">
          home
        </Link>
        {" / "}
        <Link
          href="/thoughts"
          className="hover:text-foreground transition-colors"
        >
          thoughts
        </Link>
      </nav>

      <time className="text-sm text-muted-foreground font-mono block mb-4">
        {formatDate(post.date)}
      </time>

      <div className="flex flex-row gap-4 items-end">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          {post.title}
        </h1>

        <div>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-md bg-teal-600/10 text-teal-600 border border-teal-600/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
