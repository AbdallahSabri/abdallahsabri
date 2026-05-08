import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // OpenAI (ChatGPT)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      // Anthropic (Claude)
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      // Common Crawl
      { userAgent: "CCBot", allow: "/" },
      // Google AI (Gemini)
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Gemini-Deep-Research", allow: "/" },
      { userAgent: "GoogleAgent-Mariner", allow: "/" },
      { userAgent: "Google-CloudVertexBot", allow: "/" },
      // ByteDance
      { userAgent: "Bytespider", allow: "/" },
      // Meta AI
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      { userAgent: "Meta-ExternalFetcher", allow: "/" },
      // Amazon AI
      { userAgent: "Amazonbot", allow: "/" },
      // Apple AI
      { userAgent: "Applebot-Extended", allow: "/" },
      // Perplexity AI
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      // DeepSeek
      { userAgent: "DeepSeekBot", allow: "/" },
      // Manus AI
      { userAgent: "manus-user", allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
