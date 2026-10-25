import type { Metadata } from "next";
import Link from "next/link";
import { methodologySteps } from "@/data/methodology";

export const metadata: Metadata = {
  title: "Metodologi Kerja 6-Tahap Riset Data",
  description:
    "Pelajari kerangka kerja metodologis 6-tahap DEVA: Define, Design, Collect, Validate, Analyze, dan Deliver untuk menghasilkan bukti empiris yang teruji dan dapat direproduksi.",
  alternates: { canonical: "/methodology" },
};

export const dynamic = "force-static";

export default function MethodologyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white py-14 border-b border-slate-200">
        <div className="max-w-container-max mx-auto px-gutter">
          <nav className="flex items-center gap-2 text-slate-400 font-technical-data text-xs uppercase tracking-wider mb-4">
            <Link className="hover:text-primary transition-colors" href="/">
              Beranda
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="font-bold text-slate-800">Cara Kerja</span>
          </nav>

          <span className="text-primary font-technical-data text-xs uppercase tracking-widest font-bold block mb-2">
            Standardized Workflow
          </span>
          <h1 className="font-display text-3xl md:text-5xl text-slate-900 font-extrabold mb-4">
            Metodologi Kerja 6-Tahap DEVA
          </h1>
          <p className="font-body-md text-sm md:text-base text-slate-600 max-w-3xl leading-relaxed mb-6">
            Riset dan analisis data yang bermutu menuntut disiplin prosedur yang terstandar. DEVA menerapkan siklus kerja 6-tahap terpadu untuk memastikan setiap kesimpulan memiliki fondasi data yang kuat, dapat diverifikasi, dan bebas dari bias interpretasi.
          </p>

          <div className="flex flex-wrap gap-3 text-xs font-technical-data text-slate-700">
            <span className="bg-slate-100 px-3 py-1.5 rounded border border-slate-200">
              Disiplin Metodologi Penelitian
            </span>
            <span className="bg-slate-100 px-3 py-1.5 rounded border border-slate-200">
              Keterulangan (Reproducibility)
            </span>
            <span className="bg-slate-100 px-3 py-1.5 rounded border border-slate-200">
              Audit Mutu &amp; Kepatuhan Variabel
            </span>
          </div>
        </div>
      </section>

      {/* Main Workflow Details */}
      <main className="max-w-container-max mx-auto px-gutter py-16">
        <div className="space-y-12">
          {methodologySteps.map((m, idx) => (
            <div
              key={m.step}
              className="bg-white border border-slate-200 rounded p-8 shadow-xs hover:border-primary/40 transition-all relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary text-white font-display font-extrabold text-lg flex items-center justify-center shrink-0 shadow-sm">
                    {m.step}
                  </div>
                  <div>
                    <span className="text-primary font-technical-data text-xs uppercase tracking-wider font-bold block mb-1">
                      Fase {m.step} — {m.name}
                    </span>
                    <h2 className="font-display text-2xl font-bold text-slate-900">
                      {m.title}
                    </h2>
                    <p className="font-body-md text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 bg-slate-50 border border-slate-200 rounded p-4 md:max-w-xs w-full">
                  <span className="text-[10px] font-technical-data text-slate-400 uppercase tracking-wider font-bold block mb-1">
                    Output Terverifikasi:
                  </span>
                  <span className="font-technical-data text-xs font-bold text-slate-800 block">
                    {m.output}
                  </span>
                </div>
              </div>

              {/* Key Activities Grid */}
              <div className="pt-6">
                <span className="text-[10px] font-technical-data text-slate-400 uppercase tracking-wider font-bold block mb-3">
                  Aktivitas Kunci &amp; Pengendalian Mutu:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {m.keyActivities.map((act, aIdx) => (
                    <div
                      key={aIdx}
                      className="bg-slate-50 rounded p-4 border border-slate-100 flex items-start gap-3"
                    >
                      <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">check</span>
                      <span className="font-body-md text-xs text-slate-700 leading-relaxed">
                        {act}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 bg-slate-900 text-white rounded p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl font-bold mb-3">
            Ingin Menerapkan Alur Kerja Ini pada Proyek Data Anda?
          </h3>
          <p className="font-body-md text-sm text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            DEVA siap membantu merancang protokol riset dan instrumen yang tepat sejak fase awal perumusan masalah.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white hover:bg-secondary px-7 py-3 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-colors shadow-sm"
          >
            <span>Konsultasikan Proyek Riset</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </main>
    </>
  );
}
