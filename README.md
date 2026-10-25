# DEVA — Data Development and Analysis Website (Next.js)

Website profil bisnis dan katalog layanan riset **DEVA (Data Development and Analysis)** berbasis Next.js 14 App Router, TypeScript, dan Tailwind CSS dengan static export (`output: "export"`).

> **Tagline:** "Vision in our hands."  
> **Core Message:** "Data is everywhere. We turn it into meaningful decisions."

---

## Fitur Utama

- **Katalog Layanan Riset (`/services`):** 8 layanan inti dari Data Development, Cleaning, Analisis Statistik, Feasibility Study, hingga Laporan Kajian.
- **Portofolio & Studi Kasus (`/portfolio`):** Studi kasus ilustratif dengan label kepatuhan integritas data transparan.
- **Metodologi 6-Tahap (`/methodology`):** Alur kerja riset Define, Design, Collect, Validate, Analyze, dan Deliver.
- **Wawasan & Publikasi (`/blog`):** Artikel berbasis markdown dengan optimasi Schema.org Article.
- **Konsultasi & Kontak (`/contact`):** Formulir konsultasi yang terhubung langsung ke WhatsApp konsultasi dan email.
- **Pusat Unduhan (`/downloads`):** Materi pengantar profil dan format luaran riset.

---

## Menjalankan Secara Lokal

Persyaratan:
- Node.js 18+ (Disarankan 20+)

Instalasi dependensi:
```bash
npm install
```

Mode pengembangan:
```bash
npm run dev
```

Build produksi (Static Export ke folder `out/`):
```bash
npm run build
```

---

## Konfigurasi Terpusat

Seluruh informasi kontak, nomor WhatsApp, alamat, dan tagline dikonfigurasi melalui:
- `lib/config.ts` → `siteConfig`

Struktur data statis:
- Layanan: `data/services.ts`
- Portofolio: `data/portfolio.ts`
- Metodologi: `data/methodology.ts`
- Tim: `data/team.ts`
- Artikel: `data/articles.ts`
- Unduhan: `data/downloads.ts`
