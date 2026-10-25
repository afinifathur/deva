import Link from "next/link";
import type { Article } from "@/lib/types";

export function ArticleCard({ article }: { article: Article }) {
  // Category-based icon for the visual header
  const iconMap: Record<string, string> = {
    "Quality & Validation": "fact_check",
    "Market Intelligence": "trending_up",
    "Strategic Insights": "psychology",
    "Health & Pharma Analytics": "medical_services",
    "Data Methodology": "schema",
  };

  const icon = iconMap[article.category] || "analytics";

  return (
    <article className="group bg-white border border-slate-200 hover:border-primary/40 rounded overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Visual Header */}
      <div className="h-44 w-full bg-gradient-to-br from-slate-900 via-[#0F2942] to-slate-800 p-6 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-primary/20 rounded-full blur-xl pointer-events-none" />
        <div className="absolute right-4 bottom-4 text-white/10 group-hover:text-white/20 transition-colors">
          <span className="material-symbols-outlined text-7xl">{icon}</span>
        </div>

        <div className="flex items-center justify-between z-10">
          <span className="bg-primary/90 text-white text-[9px] font-technical-data px-2.5 py-1 rounded-sm font-bold uppercase tracking-wider backdrop-blur-xs">
            {article.category}
          </span>
          <span className="text-white/60 font-technical-data text-[10px] uppercase tracking-wider">
            DEVA Insight
          </span>
        </div>

        <div className="z-10 flex items-center gap-2 text-white/80 font-technical-data text-[10px]">
          <span className="material-symbols-outlined text-xs">calendar_today</span>
          <span>{article.publishedDate}</span>
          <span className="text-white/40">•</span>
          <span className="material-symbols-outlined text-xs">schedule</span>
          <span>{article.readingTime}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-base font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200 leading-snug">
          {article.title}
        </h3>

        <p className="font-body-md text-xs text-slate-500 mb-6 line-clamp-3 leading-relaxed flex-1">
          {article.excerpt}
        </p>

        <Link
          className="mt-auto inline-flex items-center gap-1.5 text-xs font-technical-data font-bold uppercase tracking-wider text-primary group-hover:text-secondary transition-colors"
          href={`/blog/${article.slug}`}
        >
          <span>Baca Analisis Lengkap</span>
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-200">
            arrow_forward
          </span>
        </Link>
      </div>
    </article>
  );
}
