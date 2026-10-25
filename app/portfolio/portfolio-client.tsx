"use client";

import { useState } from "react";
import type { PortfolioItem } from "@/lib/types";
import { PortfolioCard } from "@/components/PortfolioCard";

export function PortfolioClient({ items }: { items: PortfolioItem[] }) {
  const [selectedSector, setSelectedSector] = useState<string>("Semua");

  const sectors = [
    "Semua",
    "Farmasi & Kesehatan",
    "Kosmetik & Personal Care",
    "Market & Bisnis",
    "Institusi Riset / Universitas",
  ];

  // Filter items
  const filtered = selectedSector === "Semua"
    ? items
    : items.filter((item) => item.sector === selectedSector);

  // Group filtered items by year in descending order (newest first)
  const years = Array.from(new Set(filtered.map((item) => item.year || "Tidak Ditentukan"))).sort(
    (a, b) => {
      if (a === "Tidak Ditentukan") return 1;
      if (b === "Tidak Ditentukan") return -1;
      return Number(b) - Number(a);
    }
  );

  return (
    <>
      {/* Sector Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-technical-data text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
            Filter Sektor:
          </span>
          {sectors.map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedSector(sec)}
              className={`px-3 py-1.5 rounded text-xs font-technical-data font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedSector === sec
                  ? "bg-primary text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Counter & Reset */}
        <div className="flex items-center gap-3">
          <span className="font-technical-data text-xs text-slate-500">
            Menampilkan <strong className="text-slate-800">{filtered.length}</strong> proyek
          </span>
          {selectedSector !== "Semua" && (
            <button
              onClick={() => setSelectedSector("Semua")}
              className="text-xs font-technical-data text-primary hover:underline font-bold cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Chronological Timeline Layout */}
      {filtered.length > 0 ? (
        <div className="relative space-y-12 before:absolute before:inset-0 before:left-4 md:before:left-6 before:w-0.5 before:bg-slate-200 before:hidden md:before:block">
          {years.map((year) => {
            const yearItems = filtered.filter((item) => (item.year || "Tidak Ditentukan") === year);

            return (
              <section key={year} className="relative">
                {/* Timeline Year Marker */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white font-technical-data text-sm font-extrabold shadow-md z-10 shrink-0">
                    {year}
                  </div>
                  <div className="flex md:hidden items-center gap-2 bg-slate-900 text-white font-technical-data text-xs font-extrabold px-3 py-1 rounded">
                    <span className="material-symbols-outlined text-xs">calendar_today</span>
                    <span>Tahun {year}</span>
                  </div>
                  <div className="h-px bg-slate-200 flex-1" />
                  <span className="text-xs font-technical-data text-slate-400 font-semibold uppercase tracking-wider">
                    {yearItems.length} {yearItems.length === 1 ? "Proyek" : "Proyek"}
                  </span>
                </div>

                {/* Cards Grid for this year */}
                <div className="md:pl-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {yearItems.map((item) => (
                    <PortfolioCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-lg border border-slate-200 text-slate-500">
          <span className="material-symbols-outlined text-3xl text-slate-400 mb-2 block">folder_off</span>
          <p className="font-display font-bold text-slate-700 mb-1">
            Tidak ada proyek pada sektor &ldquo;{selectedSector}&rdquo;
          </p>
          <p className="font-technical-data text-xs text-slate-500 mb-4">
            Silakan pilih sektor lain atau reset filter untuk melihat seluruh proyek.
          </p>
          <button
            onClick={() => setSelectedSector("Semua")}
            className="px-4 py-2 bg-primary text-white text-xs font-technical-data font-bold rounded uppercase tracking-wider hover:bg-secondary transition-colors cursor-pointer"
          >
            Tampilkan Semua Proyek
          </button>
        </div>
      )}
    </>
  );
}

