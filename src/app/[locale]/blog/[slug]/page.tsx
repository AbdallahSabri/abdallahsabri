import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { Link } from "@/i18n/routing";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { getBlogSchemas } from "./seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://abdallahsabri.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: post.image ?? "https://s3.eu-central-1.amazonaws.com/abdallahsabri.com/abdallah00029.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image ?? "https://s3.eu-central-1.amazonaws.com/abdallahsabri.com/abdallah00029.png"],
    },
    alternates: {
      canonical: `https://abdallahsabri.com/en/blog/${slug}`,
      languages: {
        en: `https://abdallahsabri.com/en/blog/${slug}`,
        ar: `https://abdallahsabri.com/ar/blog/${slug}`,
        "x-default": `https://abdallahsabri.com/en/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const { breadcrumbSchema, articleSchema } = getBlogSchemas(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Navbar />
      <main>
        <article className="section-padding" aria-labelledby="post-heading">
          <div dir="ltr" className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="mb-10 inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              ← All posts
            </Link>

            <header className="mb-12">
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs font-medium text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1
                id="post-heading"
                className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white"
              >
                {post.title}
              </h1>
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              {post.image && (
                <div className="mt-8 overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="w-full object-cover"
                    priority
                  />
                </div>
              )}
            </header>

            <div className="prose prose-invert prose-zinc max-w-none prose-headings:font-semibold prose-headings:text-white prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-p:text-zinc-300 prose-p:leading-relaxed prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:text-indigo-300 prose-strong:text-white prose-code:rounded prose-code:bg-zinc-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-zinc-200 prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:border-white/5 prose-pre:bg-[#18181b] prose-li:text-zinc-300 prose-hr:border-white/10">
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    rehypePlugins: [[rehypePrettyCode as any, { theme: "github-dark" }]],
                  },
                }}
              />
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
