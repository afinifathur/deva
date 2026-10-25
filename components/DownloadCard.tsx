import type { Download } from "@/lib/types";

export function DownloadCard({ item }: { item: Download }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white border border-slate-200 hover:border-primary/40 rounded shadow-sm hover:shadow-md transition-all duration-300 gap-4">
      <div className="flex items-start gap-4">
        {/* Document Icon */}
        <div className="bg-primary/10 p-2.5 rounded text-primary flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-2xl font-bold">description</span>
        </div>

        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-slate-100 text-slate-700 text-[9px] font-technical-data px-2 py-0.5 rounded-sm font-bold uppercase tracking-wider">
              {item.category}
            </span>
            <span className="bg-primary/10 text-primary text-[9px] font-technical-data px-2 py-0.5 rounded-sm font-bold uppercase tracking-wider">
              {item.format} | {item.fileSize}
            </span>
          </div>
          <h4 className="font-display text-sm font-bold text-slate-900 leading-snug">
            {item.title}
          </h4>
          <p className="font-body-md text-xs text-slate-500 max-w-xl leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      <div className="shrink-0 flex items-center justify-end">
        <a
          href={item.url === "#download-preview" ? "/contact" : item.url}
          className="inline-flex items-center gap-1.5 bg-primary text-white hover:bg-secondary px-4 py-2 rounded text-[10px] font-technical-data font-bold uppercase tracking-wider transition-colors duration-200 shadow-sm"
        >
          <span>Minta Dokumen</span>
          <span className="material-symbols-outlined text-xs">arrow_forward</span>
        </a>
      </div>
    </div>
  );
}
