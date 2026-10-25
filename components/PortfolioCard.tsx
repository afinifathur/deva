import Link from "next/link";
import Image from "next/image";
import type { PortfolioItem } from "@/lib/types";

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="group bg-white border border-slate-200 hover:border-primary/50 rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* 1. Image Thumbnail (16:9 Aspect Ratio) */}
      <Link
        href={`/portfolio/${item.slug}`}
        className="block aspect-video w-full overflow-hidden relative bg-slate-900 border-b border-slate-100"
      >
        <Image
          src={item.thumbnail}
          alt={item.imageAlt || item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Year Pill & Sector Badge overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
          <span className="bg-slate-900/90 backdrop-blur-xs text-white text-[10px] font-technical-data font-bold px-2.5 py-1 rounded shadow-xs">
            {item.year}
          </span>
          <span className="bg-primary/90 backdrop-blur-xs text-white text-[10px] font-technical-data font-bold px-2.5 py-1 rounded shadow-xs uppercase tracking-wider">
            {item.sector}
          </span>
        </div>

        {/* Data integrity status badge if illustrative */}
        {item.isIllustrative && (
          <div className="absolute bottom-3 right-3 z-10">
            <span className="bg-amber-900/90 backdrop-blur-xs text-amber-200 border border-amber-500/40 text-[9px] font-technical-data font-semibold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Data Simulasi</span>
            </span>
          </div>
        )}

        {/* Curation status badge if incomplete */}
        {item.isIncomplete && (
          <div className="absolute bottom-3 right-3 z-10">
            <span className="bg-slate-900/90 backdrop-blur-xs text-amber-300 border border-amber-500/40 text-[9px] font-technical-data font-semibold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Detail Sedang Disiapkan</span>
            </span>
          </div>
        )}
      </Link>

      {/* 2. Content Body (Concise, Clean, Scannable) */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Client / Institution Anonymous Label */}
          <div className="flex items-center gap-1.5 text-slate-500 font-technical-data text-[11px] font-semibold mb-2">
            <span className="material-symbols-outlined text-sm text-slate-400 shrink-0">apartment</span>
            <span className="truncate">{item.clientLabel}</span>
          </div>

          {/* Project Title */}
          <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-primary transition-colors duration-200 leading-snug mb-3">
            <Link href={`/portfolio/${item.slug}`} className="hover:underline">
              {item.shortTitle || item.title}
            </Link>
          </h3>
        </div>

        {/* 3. Action Link */}
        <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
          <span className="text-[10px] font-technical-data text-slate-400 font-medium">
            Tahun Pengerjaan: {item.year}
          </span>
          <Link
            href={`/portfolio/${item.slug}`}
            className="inline-flex items-center gap-1 text-xs font-technical-data font-bold uppercase tracking-wider text-primary group-hover:text-secondary transition-colors"
          >
            <span>Lihat Detail</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
