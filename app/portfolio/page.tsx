import type { Metadata } from "next";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";
import { PortfolioClient } from "./portfolio-client";

export const metadata: Metadata = {
  title: "Studi Kasus & Portofolio Analitik",
  description:
    "Eksplorasi studi kasus demonstratif penerapan metodologi data development, data cleaning, dan analisis statistik DEVA pada sektor farmasi, kosmetik, dan riset bisnis.",
  alternates: { canonical: "/portfolio" },
};

export const dynamic = "force-static";

export default function PortfolioPage() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-white py-14 border-b border-slate-200">
        <div className="max-w-container-max mx-auto px-gutter">
          <nav className="flex items-center gap-2 text-slate-400 font-technical-data text-xs uppercase tracking-wider mb-4">
            <Link className="hover:text-primary transition-colors" href="/">
              Beranda
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="font-bold text-slate-800">Portofolio</span>
          </nav>

          <span className="text-primary font-technical-data text-xs uppercase tracking-widest font-bold block mb-2">
            Selected Case Studies
          </span>
          <h1 className="font-display text-3xl md:text-5xl text-slate-900 font-extrabold mb-4">
            Studi Kasus &amp; Portofolio Analitik
          </h1>
          <p className="font-body-md text-sm md:text-base text-slate-600 max-w-3xl leading-relaxed mb-6">
            Menunjukkan bagaimana kerangka kerja data terstruktur memecahkan permasalahan nyata: mulai dari standardisasi dataset observasional klinis hingga pemodelan preferensi pasar bahan baku kosmetik.
          </p>

          {/* Mandatory Data Integrity Alert */}
          <div className="bg-amber-50/80 border border-amber-300/80 rounded p-4 max-w-3xl flex items-start gap-3">
            <span className="material-symbols-outlined text-amber-700 text-lg mt-0.5 shrink-0">info</span>
            <div className="text-xs font-body-md text-amber-900 leading-relaxed">
              <span className="font-bold font-technical-data text-[11px] uppercase tracking-wider block mb-0.5">
                Pernyataan Integritas Data &amp; Kerahasiaan Klien (NDA):
              </span>
              Portofolio ini menampilkan rekapitulasi keterlibatan analitik DEVA dengan label institusi yang <strong>dianonimkan (Anonymized Engagements)</strong> untuk mematuhi kewajiban kerahasiaan klien, serta <strong>studi kasus ilustratif dengan data simulasi (Illustrative Case Studies)</strong> untuk mendemonstrasikan kerangka metodologis. Tidak ada data rahasia, nomor invoice, maupun rekam medis/personal yang dipublikasikan.
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-container-max mx-auto px-gutter py-16">
        <PortfolioClient items={portfolioItems} />

        {/* Consultation Callout */}
        <div className="mt-16 bg-slate-900 text-white rounded p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl font-bold mb-3">
            Punya Tantangan Data Spesifik di Organisasi Anda?
          </h3>
          <p className="font-body-md text-sm text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            Tim konsultan DEVA siap membantu memetakan kebutuhan, mengaudit kualitas data, dan menyusun kerangka studi yang sesuai dengan konteks industri Anda.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white hover:bg-secondary px-7 py-3 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-colors shadow-sm"
          >
            <span>Jadwalkan Diskusi Awal</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </main>
    </>
  );
}
