import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { BlogHeader } from "@/components/blog/blog-header";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    const title = `${post.title} | Yannick Gloster`;
    return {
      title,
      description: post.description,
      openGraph: {
        title,
        description: post.description,
        type: "article",
        publishedTime: post.date,
        authors: [post.author],
        url: `/thoughts/${slug}`,
        images: ["/opengraph-image"],
      },
      twitter: {
        card: "summary",
        title,
        description: post.description,
        images: ["/opengraph-image"],
      },
    };
  } catch {
    return {
      title: "Post not found | Yannick Gloster",
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <BlogHeader post={post} />
        <div
          className="prose prose-lg mt-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
