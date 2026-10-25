import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative min-h-[580px] md:min-h-[640px] flex items-center overflow-hidden py-16 md:py-20 bg-gradient-to-b from-[#091524] via-[#0F1E33] to-[#0A1322] text-white">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Subtle Luminous Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#0284C7]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-[#0284C7] to-primary" />

      <div className="relative max-w-container-max mx-auto px-gutter w-full z-10">
        <div className="max-w-3xl">
          {/* Badge Tagline */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/20 border border-primary/40 text-white rounded font-technical-data text-[10px] uppercase tracking-wider mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{siteConfig.tagline}</span>
            <span className="text-white/40">•</span>
            <span className="text-slate-200">Data Development &amp; Analysis</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-tight leading-[1.15] mb-6">
            Data yang Valid untuk <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-sky-300">
              Keputusan yang Tepat.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="font-body-lg text-base md:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
            DEVA membantu organisasi merumuskan kebutuhan data, menjalankan riset metodologis dan analisis statistik yang disiplin, serta mengubah bukti empiris menjadi rekomendasi strategis untuk keputusan bisnis dan produk.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-primary text-white hover:bg-secondary px-8 py-3.5 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-primary/25 border border-primary/50"
            >
              <span>Konsultasikan Kebutuhan Anda</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>

            <Link
              href="/services"
              className="flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 px-7 py-3.5 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              <span>Lihat Layanan DEVA</span>
              <span className="material-symbols-outlined text-sm">visibility</span>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/80 pt-8">
            {[
              { icon: "schema", label: "Metodologi Terstandar" },
              { icon: "verified_user", label: "Kerahasiaan Data (NDA)" },
              { icon: "query_stats", label: "Analisis Statistik Inferensial" },
              { icon: "fact_check", label: "Rekomendasi Berbasis Bukti" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary text-lg shrink-0">{badge.icon}</span>
                <span className="font-technical-data text-[10px] text-slate-300 font-semibold tracking-wider uppercase">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
