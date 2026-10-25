import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/data/portfolio";
import { siteConfig } from "@/lib/config";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioItems
    .filter((item) => Boolean(item.slug && item.slug.trim()))
    .map((item) => ({
      slug: item.slug.trim(),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const project = portfolioItems.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Proyek Tidak Ditemukan | Portofolio DEVA",
      description: "Halaman dokumentasi proyek yang Anda cari tidak ditemukan atau telah dipindahkan.",
    };
  }

  const pageTitle = `${project.shortTitle || project.title} | Portofolio DEVA`;
  const pageDesc = (project.overview || "Kajian analitik dan riset data terstruktur DEVA.").slice(0, 160);

  return {
    title: pageTitle,
    description: pageDesc,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      type: "article",
      title: pageTitle,
      description: pageDesc,
      url: `${siteConfig.baseUrl}/portfolio/${project.slug}`,
      images: [
        {
          url: `${siteConfig.baseUrl}${project.thumbnail}`,
          width: 1200,
          height: 675,
          alt: project.imageAlt || project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: [`${siteConfig.baseUrl}${project.thumbnail}`],
    },
  };
}

export default function PortfolioDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = portfolioItems.find((p) => p.slug === slug);

  // 1. Unknown or Invalid Slug Fallback
  if (!project) {
    return (
      <main className="max-w-container-max mx-auto px-gutter py-24 text-center">
        <div className="max-w-lg mx-auto bg-slate-50 border border-slate-200 rounded-lg p-8 shadow-xs">
          <span className="material-symbols-outlined text-4xl text-slate-400 mb-3 block">
            search_off
          </span>
          <h1 className="font-display text-2xl font-bold text-slate-900 mb-2">
            Dokumentasi Proyek Tidak Ditemukan
          </h1>
          <p className="font-body-md text-sm text-slate-600 mb-6 leading-relaxed">
            Rute portofolio dengan pengenal &ldquo;{slug}&rdquo; tidak terdaftar dalam arsip publik DEVA.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-primary text-white hover:bg-secondary px-6 py-2.5 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Kembali ke Portofolio</span>
          </Link>
        </div>
      </main>
    );
  }

  // Find other projects for recommendation
  const otherProjects = portfolioItems
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  // 2. Known Project with Incomplete Information (Curation in progress state)
  if (project.isIncomplete) {
    return (
      <>
        {/* Header Profile */}
        <section className="bg-white py-10 md:py-14 border-b border-slate-200">
          <div className="max-w-container-max mx-auto px-gutter">
            <nav className="flex items-center gap-2 text-slate-400 font-technical-data text-xs uppercase tracking-wider mb-6 flex-wrap">
              <Link className="hover:text-primary transition-colors" href="/">
                Beranda
              </Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <Link className="hover:text-primary transition-colors" href="/portfolio">
                Portofolio
              </Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="font-bold text-slate-800 truncate max-w-xs md:max-w-md">
                {project.shortTitle || project.title}
              </span>
            </nav>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs font-technical-data font-bold uppercase tracking-wider text-slate-500 hover:text-primary transition-colors mb-6"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              <span>Kembali ke Semua Portofolio</span>
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-slate-900 text-white text-xs font-technical-data font-bold px-3 py-1 rounded">
                Tahun {project.year}
              </span>
              <span className="bg-primary text-white text-xs font-technical-data font-bold px-3 py-1 rounded uppercase tracking-wider">
                {project.sector}
              </span>
              <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs font-technical-data font-bold px-3 py-1 rounded flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                <span>Dokumentasi Sedang Disiapkan</span>
              </span>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl md:text-5xl text-slate-900 font-extrabold leading-tight max-w-4xl mb-4">
              {project.title}
            </h1>

            <div className="flex items-center gap-2 text-slate-600 font-technical-data text-xs md:text-sm">
              <span className="material-symbols-outlined text-base text-primary">apartment</span>
              <span>Klien / Institusi:</span>
              <strong className="text-slate-900 font-bold">{project.clientLabel}</strong>
            </div>
          </div>
        </section>

        {/* Content Body for Incomplete / Curated Item */}
        <main className="max-w-container-max mx-auto px-gutter py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <article className="lg:col-span-8 space-y-8">
              {/* Verified Facts Notice */}
              <div className="bg-amber-50/80 border border-amber-300/80 rounded-lg p-6 flex items-start gap-4">
                <span className="material-symbols-outlined text-amber-700 text-2xl shrink-0 mt-0.5">
                  hourglass_top
                </span>
                <div>
                  <h2 className="font-display text-base font-bold text-amber-950 mb-2">
                    Detail Proyek Sedang Dalam Proses Kurasi Internal
                  </h2>
                  <p className="font-body-md text-xs sm:text-sm text-amber-900 leading-relaxed mb-4">
                    Pekerjaan ini tercatat resmi dalam basis data operasional DEVA. Rincian narasi metodologis, ruang lingkup lengkap, dan luaran dokumen teknis saat ini sedang dalam proses penyusunan dan tinjauan kepatuhan sebelum dipublikasikan secara utuh.
                  </p>
                  <div className="bg-white/80 rounded border border-amber-200 p-4 space-y-2 text-xs font-technical-data text-slate-700">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 uppercase">Status Pencatatan:</span>
                      <strong className="text-slate-900">{project.status}</strong>
                    </div>
                    {project.sourceRow && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 uppercase">Sumber Referensi:</span>
                        <strong className="text-slate-900">{project.sourceRow}</strong>
                      </div>
                    )}
                    {project.team && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 uppercase">Tim Pelaksana Terlibat:</span>
                        <strong className="text-slate-900">{project.team}</strong>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Verified Summary */}
              <section className="bg-slate-50 rounded-lg border border-slate-200 p-6">
                <h3 className="font-technical-data text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Ringkasan Kebutuhan &amp; Ruang Lingkup Terverifikasi:
                </h3>
                <p className="font-body-md text-sm text-slate-700 leading-relaxed mb-4">
                  {project.overview}
                </p>
                <ul className="space-y-2 font-body-md text-xs sm:text-sm text-slate-700">
                  {project.scope.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                        check_circle
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Return Link */}
              <div className="pt-4">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-6 py-2.5 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  <span>Kembali ke Indeks Portofolio</span>
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h3 className="font-technical-data text-xs font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-200 mb-4">
                  Metadata Terverifikasi
                </h3>
                <dl className="space-y-3.5 text-xs font-technical-data">
                  <div>
                    <dt className="text-slate-500 uppercase tracking-wider text-[10px]">Tahun</dt>
                    <dd className="font-bold text-slate-900 text-sm mt-0.5">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 uppercase tracking-wider text-[10px]">Sektor</dt>
                    <dd className="font-bold text-slate-900 mt-0.5">{project.sector}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 uppercase tracking-wider text-[10px]">Klien</dt>
                    <dd className="font-bold text-slate-900 mt-0.5">{project.clientLabel}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 uppercase tracking-wider text-[10px]">Tim Pelaksana</dt>
                    <dd className="font-bold text-slate-900 mt-0.5">{project.team || "Tim Konsultan DEVA"}</dd>
                  </div>
                </dl>
              </div>

              {/* Consultation Card */}
              <div className="bg-slate-900 text-white rounded-lg p-6">
                <h3 className="font-display text-base font-bold mb-2">
                  Konsultasikan Kebutuhan Serupa
                </h3>
                <p className="font-body-md text-xs text-slate-300 leading-relaxed mb-4">
                  Hubungi analis DEVA untuk mendiskusikan studi kelayakan, riset pasar, atau audit data organisasi Anda.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-technical-data text-xs uppercase tracking-wider font-bold py-2.5 px-4 rounded transition-colors text-center"
                >
                  <span>Hubungi Tim DEVA</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </div>
            </aside>
          </div>
        </main>
      </>
    );
  }

  // 3. Known Project with Complete Information
  return (
    <>
      {/* Top Header & Breadcrumb */}
      <section className="bg-white py-10 md:py-14 border-b border-slate-200">
        <div className="max-w-container-max mx-auto px-gutter">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-slate-400 font-technical-data text-xs uppercase tracking-wider mb-6 flex-wrap">
            <Link className="hover:text-primary transition-colors" href="/">
              Beranda
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <Link className="hover:text-primary transition-colors" href="/portfolio">
              Portofolio
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="font-bold text-slate-800 truncate max-w-xs md:max-w-md">
              {project.shortTitle || project.title}
            </span>
          </nav>

          {/* Back button */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-xs font-technical-data font-bold uppercase tracking-wider text-slate-500 hover:text-primary transition-colors mb-6"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Kembali ke Semua Portofolio</span>
          </Link>

          {/* Badges Strip */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-slate-900 text-white text-xs font-technical-data font-bold px-3 py-1 rounded">
              Tahun {project.year}
            </span>
            <span className="bg-primary text-white text-xs font-technical-data font-bold px-3 py-1 rounded uppercase tracking-wider">
              {project.sector}
            </span>
            {project.isIllustrative ? (
              <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs font-technical-data font-bold px-3 py-1 rounded flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                <span>Illustrative Case Study — Simulated Data</span>
              </span>
            ) : (
              <span className="bg-emerald-50 text-emerald-900 border border-emerald-300 text-xs font-technical-data font-bold px-3 py-1 rounded flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>{project.status || "Rekam Keterlibatan Riil"}</span>
              </span>
            )}
          </div>

          {/* Project Title */}
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl text-slate-900 font-extrabold leading-tight max-w-4xl mb-4">
            {project.title}
          </h1>

          {/* Client Label */}
          <div className="flex items-center gap-2 text-slate-600 font-technical-data text-xs md:text-sm">
            <span className="material-symbols-outlined text-base text-primary">apartment</span>
            <span>Klien / Institusi:</span>
            <strong className="text-slate-900 font-bold">{project.clientLabel}</strong>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-container-max mx-auto px-gutter py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Main Article Body (8 cols) */}
          <article className="lg:col-span-8 space-y-10">
            {/* 1. Featured Image Thumbnail */}
            <div className="aspect-video w-full relative rounded-lg overflow-hidden border border-slate-200 bg-slate-950 shadow-xs">
              <Image
                src={project.thumbnail}
                alt={project.imageAlt || project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 750px"
              />
            </div>

            {/* Source transparency note */}
            <div className="bg-slate-50 border-l-4 border-primary rounded-r p-4 text-xs font-body-md text-slate-600 leading-relaxed">
              <strong className="font-technical-data uppercase tracking-wider block text-slate-800 mb-1">
                Transparansi Sumber Rekam Kerja:
              </strong>
              {project.publicationStatus}. Dokumen ini disajikan sebagai pembuktian rekam jejak analitik tanpa mempublikasikan nomor dokumen privat, nomor rekening, maupun nominal biaya faktur.
            </div>

            {/* 2. Overview Section */}
            <section className="border-b border-slate-200 pb-8">
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">overview</span>
                <span>Ringkasan Proyek</span>
              </h2>
              <p className="font-body-md text-slate-700 text-base md:text-lg leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* 3. Challenge Section */}
            <section className="border-b border-slate-200 pb-8">
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-600 text-xl">warning</span>
                <span>Tantangan &amp; Latar Belakang Masalah</span>
              </h2>
              <p className="font-body-md text-slate-700 text-sm md:text-base leading-relaxed bg-slate-50 p-5 rounded-lg border border-slate-200">
                {project.challenge}
              </p>
            </section>

            {/* 4. Scope Section */}
            <section className="border-b border-slate-200 pb-8">
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">checklist</span>
                <span>Ruang Lingkup Pekerjaan DEVA</span>
              </h2>
              <ul className="space-y-3 font-body-md text-slate-700 text-sm md:text-base">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. Methodology Section */}
            <section className="border-b border-slate-200 pb-8">
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">biotech</span>
                <span>Pendekatan &amp; Metodologi Analitik</span>
              </h2>
              <p className="font-body-md text-slate-700 text-sm md:text-base leading-relaxed">
                {project.methodology}
              </p>
            </section>

            {/* 6. Deliverables Section */}
            <section className="border-b border-slate-200 pb-8">
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">inventory_2</span>
                <span>Luaran Kerja (Deliverables)</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-technical-data text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="font-body-md text-slate-800 text-sm font-medium leading-snug">
                      {deliv}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Outcome Section */}
            <section className="border-b border-slate-200 pb-8">
              <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-xl">trending_up</span>
                <span>Dampak &amp; Relevansi Hasil</span>
              </h2>
              <p className="font-body-md text-slate-700 text-sm md:text-base leading-relaxed bg-emerald-50/60 border border-emerald-200/80 p-5 rounded-lg">
                {project.outcome}
              </p>
            </section>

            {/* Tags strip */}
            {project.tags && project.tags.length > 0 && (
              <div>
                <span className="font-technical-data text-xs uppercase tracking-wider text-slate-400 font-bold block mb-2">
                  Kata Kunci Teknis:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-technical-data bg-slate-100 text-slate-700 px-3 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Project Summary Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-technical-data text-xs font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-200 mb-4">
                Metadata Proyek
              </h3>

              <dl className="space-y-4 text-xs font-technical-data">
                <div>
                  <dt className="text-slate-500 uppercase tracking-wider text-[10px]">Tahun Pengerjaan</dt>
                  <dd className="font-bold text-slate-900 text-sm mt-0.5">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-slate-500 uppercase tracking-wider text-[10px]">Sektor</dt>
                  <dd className="font-bold text-slate-900 mt-0.5">{project.sector}</dd>
                </div>
                <div>
                  <dt className="text-slate-500 uppercase tracking-wider text-[10px]">Klien / Institusi</dt>
                  <dd className="font-bold text-slate-900 mt-0.5">{project.clientLabel}</dd>
                </div>
                <div>
                  <dt className="text-slate-500 uppercase tracking-wider text-[10px]">Status Pekerjaan</dt>
                  <dd className="font-bold text-slate-900 mt-0.5">{project.status || "Terdokumentasi"}</dd>
                </div>
                {project.team && (
                  <div>
                    <dt className="text-slate-500 uppercase tracking-wider text-[10px]">Tim Pelaksana</dt>
                    <dd className="font-bold text-slate-900 mt-0.5">{project.team}</dd>
                  </div>
                )}
                {project.sourceRow && (
                  <div>
                    <dt className="text-slate-500 uppercase tracking-wider text-[10px]">Arsip Basis Data</dt>
                    <dd className="font-mono text-slate-600 mt-0.5">{project.sourceRow}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Consultation CTA Card */}
            <div className="bg-slate-900 text-white rounded-lg p-6">
              <span className="material-symbols-outlined text-primary text-3xl mb-3 block">
                support_agent
              </span>
              <h3 className="font-display text-lg font-bold mb-2">
                Memiliki Kebutuhan Analitik Serupa?
              </h3>
              <p className="font-body-md text-xs text-slate-300 leading-relaxed mb-5">
                Konsultasikan kebutuhan data audit, feasibility study, atau kajian pasar organisasi Anda bersama analis DEVA.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-technical-data text-xs uppercase tracking-wider font-bold py-3 px-4 rounded transition-colors text-center"
              >
                <span>Jadwalkan Konsultasi</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>

            {/* Recommendations / Other Projects */}
            {otherProjects.length > 0 && (
              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                <h3 className="font-technical-data text-xs font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-200 mb-4">
                  Studi Kasus Lainnya
                </h3>
                <div className="space-y-4">
                  {otherProjects.map((item) => (
                    <Link
                      key={item.id}
                      href={`/portfolio/${item.slug}`}
                      className="block group"
                    >
                      <div className="flex items-center gap-2 text-[10px] font-technical-data text-slate-400 mb-1">
                        <span>{item.year}</span>
                        <span>•</span>
                        <span className="text-primary font-semibold">{item.sector}</span>
                      </div>
                      <h4 className="font-display text-xs font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                        {item.shortTitle || item.title}
                      </h4>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <Link
                    href="/portfolio"
                    className="text-xs font-technical-data font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>Lihat Seluruh Portofolio</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </Link>
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>
    </>
  );
}
