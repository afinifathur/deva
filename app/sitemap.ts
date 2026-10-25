import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { articles } from "@/data/articles";
import { portfolioItems } from "@/data/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl.replace(/\/$/, "");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/portfolio/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/methodology/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/downloads/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/blog/${a.slug}/`,
    lastModified: new Date(a.publishedDate),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioItems.map((p) => ({
    url: `${base}/portfolio/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes, ...portfolioRoutes];
}

