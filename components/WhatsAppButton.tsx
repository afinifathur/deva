import { siteConfig } from "@/lib/config";

export function WhatsAppButton() {
  return (
    <a
      className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
      href={siteConfig.whatsappLink}
      aria-label="Konsultasi via WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="material-symbols-outlined text-3xl">chat</span>
      <div className="absolute right-16 bg-slate-900 text-white px-3.5 py-1.5 rounded shadow-xl font-technical-data text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 pointer-events-none">
        Konsultasikan Kebutuhan Anda
      </div>
    </a>
  );
}
