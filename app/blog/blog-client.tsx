"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Article, Download } from "@/lib/types";
import { ArticleCard } from "@/components/ArticleCard";

const categoryTiles = [
  { label: "Quality & Validation", icon: "fact_check" },
  { label: "Market Intelligence", icon: "trending_up" },
  { label: "Strategic Insights", icon: "psychology" },
  { label: "Health & Pharma Analytics", icon: "medical_services" },
  { label: "Data Methodology", icon: "schema" },
];

export function BlogClient({ articles, downloads }: { articles: Article[]; downloads: Download[] }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const featured = articles[0];

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return articles;
    return articles.filter((a) => `${a.title} ${a.category} ${a.excerpt}`.toLowerCase().includes(query));
  }, [q, articles]);

  const list = filtered.filter((a) => a.slug !== featured?.slug);
  const resourceDownloads = downloads.slice(0, 3);

  return (
    <>
      {/* Sub-Header: Search & Breadcrumbs */}
      <section className="bg-white py-6 border-b border-slate-200">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <nav className="flex items-center gap-2 text-slate-400 font-technical-data text-xs uppercase tracking-wider">
              <Link className="hover:text-primary transition-colors" href="/">
                Beranda
              </Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="font-bold text-slate-800">Wawasan &amp; Publikasi</span>
            </nav>

            <div className="relative w-full md:w-96">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-lg">
                search
              </span>
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full pl-11 pr-20 py-2.5 bg-slate-50 border border-slate-200 hover:border-primary/20 focus:border-primary focus:bg-white focus:outline-none focus:ring-0 rounded font-technical-data text-xs transition-all duration-200 shadow-inner"
                placeholder="Cari topik (e.g. Sampling, Validasi)..."
                type="text"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 font-technical-data text-[9px] text-slate-400 bg-slate-200/60 px-1.5 py-0.5 rounded font-bold">
                CTRL + K
              </span>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-container-max mx-auto px-gutter py-16">
        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-14">
          {categoryTiles.map((c) => (
            <button
              key={c.label}
              onClick={() => setQ(c.label)}
              className="flex flex-col items-center p-4 bg-white border border-slate-200 hover:border-primary/40 rounded hover:shadow-sm transition-all duration-200 text-center group cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl mb-2 text-slate-400 group-hover:text-primary transition-colors duration-200">
                {c.icon}
              </span>
              <span className="font-technical-data text-[10px] uppercase tracking-wider font-bold text-slate-700">
                {c.label}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article List */}
          <div className="lg:col-span-8 space-y-14">
            {featured && (
              <div className="space-y-3">
                <span className="text-primary font-technical-data text-xs uppercase tracking-widest font-bold">
                  Artikel Pilihan
                </span>
                <ArticleCard article={featured} />
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-4">
                <h3 className="font-display text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">menu_book</span>
                  Daftar Analisis &amp; Artikel
                </h3>
                <span className="text-slate-400 font-technical-data text-[10px] uppercase tracking-wider font-bold">
                  {q ? `Filter: ${q}` : `${articles.length} Publikasi Tersedia`}
                </span>
              </div>

              <div className="divide-y divide-slate-100 border border-slate-200 rounded overflow-hidden">
                {list.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    className="group flex flex-col md:flex-row md:items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors duration-150 gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-slate-400 mt-0.5 text-lg group-hover:text-primary transition-colors duration-200">
                        article
                      </span>
                      <div>
                        <h4 className="font-display text-sm font-bold text-slate-900 group-hover:text-primary transition-colors duration-200 leading-snug">
                          {a.title}
                        </h4>
                        <p className="text-[10px] text-slate-400 font-technical-data uppercase tracking-wider font-semibold mt-1">
                          Kategori: {a.category} • {a.readingTime}
                        </p>
                      </div>
                    </div>
                    <span className="font-technical-data text-[10px] text-slate-400 font-bold uppercase tracking-wider shrink-0">
                      {a.publishedDate}
                    </span>
                  </Link>
                ))}
              </div>

              {q && (
                <button
                  className="w-full mt-6 py-2.5 border border-dashed border-slate-300 text-slate-500 hover:text-primary hover:border-primary font-technical-data text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-all cursor-pointer rounded"
                  onClick={() => setQ("")}
                >
                  Tampilkan Semua Artikel
                </button>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white border border-slate-200 rounded p-6 shadow-xs">
              <span className="font-technical-data text-[10px] text-primary font-bold uppercase tracking-wider block mb-2">
                Format Deliverable Terkait
              </span>
              <h4 className="font-display text-sm font-bold text-slate-900 mb-4">
                Dokumen &amp; Panduan Riset
              </h4>
              <div className="space-y-3">
                {resourceDownloads.map((d) => (
                  <div key={d.id} className="p-3 bg-slate-50 rounded border border-slate-100">
                    <span className="text-[9px] font-technical-data text-primary font-bold uppercase block mb-1">
                      {d.category}
                    </span>
                    <h5 className="font-display text-xs font-bold text-slate-800 mb-1 leading-snug">
                      {d.title}
                    </h5>
                    <p className="font-body-md text-[11px] text-slate-500 mb-2 leading-relaxed">
                      {d.description}
                    </p>
                    <Link
                      href="/downloads"
                      className="text-[10px] font-technical-data font-bold text-primary hover:text-secondary uppercase tracking-wider inline-flex items-center gap-1"
                    >
                      <span>Lihat Dokumen</span>
                      <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded p-6 text-center">
              <span className="material-symbols-outlined text-3xl text-sky-400 mb-2">contact_support</span>
              <h4 className="font-display text-sm font-bold mb-2">
                Butuh Kajian Khusus untuk Organisasi Anda?
              </h4>
              <p className="font-body-md text-xs text-slate-300 mb-4 leading-relaxed">
                Diskusikan pertanyaan riset bersama tim DEVA untuk menentukan metodologi dan instrumen yang tepat.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-primary hover:bg-secondary text-white py-2.5 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-colors"
              >
                <span>Konsultasi Sekarang</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
