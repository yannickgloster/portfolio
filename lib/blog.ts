import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrism from "rehype-prism-plus";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  published: boolean;
  content: string; // HTML
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
}

/**
 * Process markdown content to HTML with syntax highlighting
 */
async function processMarkdown(content: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrism, { ignoreMissing: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return result.toString();
}

/**
 * Get all published blog posts sorted by date (newest first)
 */
export async function getAllPosts(): Promise<BlogPostMeta[]> {
  try {
    const files = await fs.readdir(BLOG_DIR);
    const mdFiles = files.filter((file) => file.endsWith(".md"));

    const posts = await Promise.all(
      mdFiles.map(async (filename) => {
        const filePath = path.join(BLOG_DIR, filename);
        const fileContent = await fs.readFile(filePath, "utf-8");
        const { data } = matter(fileContent);

        const slug = filename.replace(/\.md$/, "");

        return {
          slug,
          title: data.title || "Untitled",
          description: data.description || "",
          date: data.date || "",
          author: data.author || "Unknown",
          tags: data.tags || [],
          published: data.published !== false,
        };
      })
    );

    // Filter published posts and sort by date (newest first)
    return posts
      .filter((post) => post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

/**
 * Get a single blog post by slug with full HTML content
 */
export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const fileContent = await fs.readFile(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const htmlContent = await processMarkdown(content);

  return {
    slug,
    title: data.title || "Untitled",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "Unknown",
    tags: data.tags || [],
    published: data.published !== false,
    content: htmlContent,
  };
}

/**
 * Get all post slugs for static generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(BLOG_DIR);
    return files
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""));
  } catch (error) {
    console.error("Error reading blog directory:", error);
    return [];
  }
}

/**
 * Format date string to readable format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
