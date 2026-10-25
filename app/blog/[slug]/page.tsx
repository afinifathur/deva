import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { markdownToHtml } from "@/lib/markdown";
import { siteConfig } from "@/lib/config";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.seoTitle,
      description: article.seoDescription,
      url: `${siteConfig.baseUrl}/blog/${article.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const html = await markdownToHtml(article.body);
  const url = `${siteConfig.baseUrl}/blog/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "Organization", name: siteConfig.fullName, url: siteConfig.baseUrl },
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    mainEntityOfPage: url,
  };

  return (
    <>
      <Script id={`article-jsonld-${article.slug}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>

      <section className="bg-white py-6 border-b border-slate-200">
        <div className="max-w-container-max mx-auto px-gutter">
          <nav className="flex items-center gap-2 text-slate-400 font-technical-data text-xs uppercase tracking-wider">
            <Link className="hover:text-primary transition-colors" href="/">
              Beranda
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <Link className="hover:text-primary transition-colors" href="/blog">
              Wawasan &amp; Publikasi
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="font-bold text-slate-800 line-clamp-1">{article.title}</span>
          </nav>
        </div>
      </section>

      <article className="max-w-container-max mx-auto px-gutter py-16">
        <div className="mb-10 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary text-white text-[9px] font-technical-data px-2.5 py-1 rounded-sm font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="bg-slate-100 text-slate-600 text-[9px] font-technical-data px-2.5 py-1 rounded-sm font-bold uppercase tracking-wider">
              {article.readingTime}
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl text-slate-900 font-extrabold mb-4 leading-[1.15]">
            {article.title}
          </h1>
          <p className="font-body-md text-slate-600 mb-6 text-base md:text-lg leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 font-technical-data text-xs uppercase tracking-wider font-bold text-slate-400 border-t border-slate-100 pt-4">
            <span>Penulis: {article.author}</span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">event</span> {article.publishedDate}
            </span>
          </div>
        </div>

        {/* Visual Thematic Header Banner */}
        <div className="rounded border border-slate-200 bg-gradient-to-r from-slate-900 via-[#0F1E33] to-slate-900 p-8 md:p-12 mb-12 text-white relative overflow-hidden shadow-xs">
          <div className="absolute right-4 bottom-4 text-white/5 pointer-events-none">
            <span className="material-symbols-outlined text-9xl">analytics</span>
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="text-sky-400 font-technical-data text-xs uppercase tracking-widest font-bold block mb-2">
              DEVA Research Brief
            </span>
            <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
              {article.title}
            </h2>
            <p className="font-body-md text-xs text-slate-300 leading-relaxed">
              Panduan metodologis untuk mendukung pengambilan keputusan berbasis data di sektor industri dan institusi penelitian.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            <div
              className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:font-body-md prose-p:text-sm prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-primary hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:text-slate-600 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded font-body-md"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white border border-slate-200 rounded overflow-hidden shadow-xs">
              <div className="bg-slate-50 p-4 border-b border-slate-200">
                <h4 className="font-display text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">info</span>
                  Ringkasan Metadata
                </h4>
              </div>
              <div className="p-5 space-y-3 text-xs font-technical-data text-slate-600">
                <div className="flex items-center justify-between gap-3">
                  <span>Kategori</span>
                  <span className="font-bold text-slate-800 uppercase tracking-wider">{article.category}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Estimasi Baca</span>
                  <span className="font-bold text-slate-800 uppercase tracking-wider">{article.readingTime}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Tanggal Terbit</span>
                  <span className="font-bold text-slate-800 uppercase tracking-wider">{article.publishedDate}</span>
                </div>
                <div className="pt-3 border-t border-slate-200 mt-2">
                  <Link className="text-primary hover:text-secondary font-bold uppercase tracking-wider flex items-center gap-1" href="/downloads">
                    <span>Contoh Format Deliverable</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Consultation Callout Box */}
            <div className="bg-slate-900 text-white p-7 rounded border border-slate-800 relative overflow-hidden shadow-md">
              <span className="text-sky-400 font-technical-data text-[10px] uppercase tracking-widest font-bold mb-2 block">
                DEVA Research Advisory
              </span>
              <h4 className="font-display text-base font-bold mb-3 leading-snug">
                Butuh Analisis Serupa untuk Organisasi Anda?
              </h4>
              <p className="font-body-md text-xs text-slate-300 mb-6 leading-relaxed">
                Diskusikan tantangan ketersediaan data, perancangan kuesioner, atau studi kelayakan bersama tim DEVA.
              </p>
              <Link
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-primary text-white font-technical-data text-xs font-bold uppercase tracking-wider rounded hover:bg-secondary transition-colors shadow-sm"
                href="/contact"
              >
                <span>Konsultasi Sekarang</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
