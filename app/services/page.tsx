import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Layanan Data Development & Analisis Riset",
  description:
    "Katalog layanan komprehensif DEVA: Data Development, Data Management & Cleaning, Data Analysis, Insight Reporting, Feasibility Study, dan Business Plan.",
  alternates: { canonical: "/services" },
};

export const dynamic = "force-static";

export default function ServicesPage() {
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
            <span className="font-bold text-slate-800">Layanan</span>
          </nav>

          <span className="text-primary font-technical-data text-xs uppercase tracking-widest font-bold block mb-2">
            Service Catalog
          </span>
          <h1 className="font-display text-3xl md:text-5xl text-slate-900 font-extrabold mb-4">
            Katalog Layanan DEVA
          </h1>
          <p className="font-body-md text-sm md:text-base text-slate-600 max-w-3xl leading-relaxed">
            DEVA menyediakan pendampingan end-to-end mulai dari perancangan arsitektur data primer, pembersihan dataset terfragmentasi, pemodelan statistika inferensial, hingga penyusunan laporan studi kelayakan bisnis dan monograf kajian kebijakan.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-technical-data text-slate-600">
            <span className="bg-slate-100 px-3 py-1.5 rounded border border-slate-200">
              Biaya Berbasis Asesmen Lingkup Kebutuhan (Quotation-Based)
            </span>
            <span className="bg-primary/5 text-primary px-3 py-1.5 rounded border border-primary/20 font-bold">
              Kerahasiaan Data Terjamin (Perjanjian NDA)
            </span>
          </div>
        </div>
      </section>

      {/* Services List */}
      <main className="max-w-container-max mx-auto px-gutter py-16">
        <div className="space-y-12">
          {services.map((svc, index) => (
            <div
              key={svc.slug}
              id={svc.slug}
              className="bg-white border border-slate-200 rounded p-8 shadow-xs hover:border-primary/40 transition-all scroll-mt-28"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">{svc.icon}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-slate-100 text-slate-600 text-[10px] font-technical-data px-2.5 py-0.5 rounded uppercase font-bold tracking-wider">
                        {svc.category}
                      </span>
                      <span className="text-[10px] font-technical-data text-slate-400 font-bold">
                        #{svc.id}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl font-extrabold text-slate-900 leading-snug">
                      {svc.name}
                    </h2>
                    <p className="font-body-md text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
                      {svc.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <Link
                    href={`/contact?service=${encodeURIComponent(svc.name)}`}
                    className="inline-flex items-center gap-1.5 bg-primary text-white hover:bg-secondary px-5 py-2.5 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-colors shadow-sm"
                  >
                    <span>Ajukan Konsultasi</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {/* Masalah yang Diatasi */}
                <div className="bg-slate-50 rounded p-5 border border-slate-100 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-technical-data text-slate-400 font-bold uppercase tracking-wider block mb-2">
                      Tantangan yang Diatasi:
                    </span>
                    <p className="font-body-md text-xs text-slate-700 leading-relaxed">
                      {svc.problemStatement}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60">
                    <span className="text-[10px] font-technical-data text-slate-400 font-bold uppercase tracking-wider block mb-1.5">
                      Cocok Digunakan Oleh:
                    </span>
                    <ul className="space-y-1 text-slate-600 font-body-md text-[11px]">
                      {svc.suitableFor.map((target, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                          <span>{target}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Alur Pengerjaan */}
                <div className="bg-slate-50 rounded p-5 border border-slate-100">
                  <span className="text-[10px] font-technical-data text-slate-400 font-bold uppercase tracking-wider block mb-2">
                    Tahapan Pengerjaan Umum:
                  </span>
                  <ol className="space-y-2 text-slate-700 font-body-md text-xs">
                    {svc.workflow.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-primary/20 text-primary font-technical-data text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Luaran Kerja / Deliverables */}
                <div className="bg-slate-50 rounded p-5 border border-slate-100">
                  <span className="text-[10px] font-technical-data text-primary font-bold uppercase tracking-wider block mb-2">
                    Luaran Kerja (Deliverables):
                  </span>
                  <ul className="space-y-2 text-slate-700 font-body-md text-xs">
                    {svc.deliverables.map((del, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5 shrink-0">check_circle</span>
                        <span className="leading-relaxed font-semibold">{del}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-3 border-t border-slate-200/60">
                    <span className="text-[10px] font-technical-data text-slate-500 block mb-2">
                      Harga ditentukan melalui evaluasi kebutuhan data &amp; timeline.
                    </span>

                    {/* Relevant Case Study Link */}
                    {svc.slug === "data-development" && (
                      <Link
                        href="/portfolio/pengambilan-data-laboratorium-uji-kosmetik"
                        className="inline-flex items-center gap-1 text-xs font-technical-data font-bold text-primary hover:underline"
                      >
                        <span>Kasus: Uji Laboratorium Kosmetik</span>
                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                      </Link>
                    )}
                    {svc.slug === "data-management" && (
                      <Link
                        href="/portfolio/analisis-kendali-biaya-plafon-bpjs"
                        className="inline-flex items-center gap-1 text-xs font-technical-data font-bold text-primary hover:underline"
                      >
                        <span>Kasus: Analisis Biaya Plafon BPJS</span>
                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                      </Link>
                    )}
                    {svc.slug === "data-analysis" && (
                      <Link
                        href="/portfolio/analisis-trend-produksi-manufaktur"
                        className="inline-flex items-center gap-1 text-xs font-technical-data font-bold text-primary hover:underline"
                      >
                        <span>Kasus: Analisis Trend Produksi</span>
                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                      </Link>
                    )}
                    {svc.slug === "feasibility-study" && (
                      <Link
                        href="/portfolio/laporan-feasibilitas-stem-cell-sekretom-rsud-dr-soetomo"
                        className="inline-flex items-center gap-1 text-xs font-technical-data font-bold text-primary hover:underline"
                      >
                        <span>Kasus: Feasibilitas RSUD Dr. Soetomo</span>
                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Reference Banner */}
        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-technical-data text-xs uppercase tracking-wider font-bold block mb-1">
              Penerapan Terverifikasi
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Jelajahi Portofolio Proyek DEVA
            </h3>
            <p className="font-body-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              Lihat bagaimana setiap layanan diaplikasikan dalam kajian analitik nyata secara kronologis dan terstruktur.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:border-primary text-slate-800 hover:text-primary px-5 py-2.5 rounded font-technical-data text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-xs"
          >
            <span>Buka Portofolio Lengkap</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 bg-slate-900 text-white rounded p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl font-bold mb-3">
            Memerlukan Kombinasi Layanan atau Format Khusus?
          </h3>
          <p className="font-body-md text-sm text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            Setiap organisasi memiliki struktur data dan pertanyaan riset yang unik. Diskusikan konteks kebutuhan Anda dengan tim DEVA untuk mendapatkan proposal ruang lingkup kerja yang terukur.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white hover:bg-secondary px-7 py-3 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-colors shadow-sm"
          >
            <span>Hubungi Tim Konsultan DEVA</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </main>
    </>
  );
}
