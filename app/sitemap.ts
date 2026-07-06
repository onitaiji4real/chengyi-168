import type { MetadataRoute } from "next";
import { blogPosts, site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/blog", "/faq", "/privacy", "/terms"];
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...blogRoutes].map((route) => ({
    url: `${site.url}${route}/`,
    lastModified: new Date("2026-07-07"),
    changeFrequency: route.includes("/blog/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
