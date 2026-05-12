import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
};

export type BlogPost = BlogPostMeta & { content: string };

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf-8");
      const { data } = matter(raw);
      return { slug, ...(data as Omit<BlogPostMeta, "slug">) };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, ...(data as Omit<BlogPostMeta, "slug">), content };
}
