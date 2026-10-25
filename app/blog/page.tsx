import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { downloads } from "@/data/downloads";
import { BlogClient } from "@/app/blog/blog-client";

export const metadata: Metadata = {
  title: "Wawasan & Publikasi Analitik Data",
  description:
    "Pusat wawasan teknis dan publikasi DEVA: metodologi penelitian, audit mutu data, analisis pasar industri farmasi & kosmetik, serta strategi berbasis bukti.",
  alternates: { canonical: "/blog" },
};

export const dynamic = "force-static";

export default function BlogPage() {
  return <BlogClient articles={articles} downloads={downloads} />;
}
