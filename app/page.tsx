import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PortfolioCard } from "@/components/PortfolioCard";
import { ArticleCard } from "@/components/ArticleCard";
import { DownloadCard } from "@/components/DownloadCard";
import { services } from "@/data/services";
import { portfolioItems } from "@/data/portfolio";
import { methodologySteps } from "@/data/methodology";
import { teamMembers } from "@/data/team";
import { articles } from "@/data/articles";
import { downloads } from "@/data/downloads";
import { siteConfig } from "@/lib/config";

export default function Home() {
  const featuredPortfolio = portfolioItems.slice(0, 3);
  const latestArticles = articles.slice(0, 2);
  const featuredDownloads = downloads.slice(0, 2);

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. The Challenge (Mengapa Riset Data Sering Gagal) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="max-w-3xl mb-12">
            <span className="text-primary font-technical-data text-xs uppercase tracking-widest font-bold block mb-2">
              The Critical Challenge
            </span>
            <h2 className="font-display text-2xl md:text-4xl text-slate-900 font-extrabold mb-4 leading-tight">
              Tantangan Pengambilan Keputusan Berbasis Data
            </h2>
            <p className="font-body-md text-sm md:text-base text-slate-600 leading-relaxed">
              Banyak organisasi mengumpulkan volume data besar, namun menghadapi kendala saat hendak menggunakannya sebagai dasar keputusan strategis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "warning",
                title: "Sampling Tidak Representatif",
                desc: "Pengambilan sampel yang bias atau instrumen survei yang tidak tervalidasi menghasilkan ilusi penerimaan pasar semu.",
              },
              {
                icon: "rule",
                title: "Data Mentah Fragmented",
                desc: "Data tersimpan di berbagai format terpisah dengan anomali dan missing values tinggi yang menghambat pemodelan.",
              },
              {
                icon: "query_stats",
                title: "Analisis Tanpa Uji Signifikansi",
                desc: "Klaim tren bisnis yang hanya bertumpu pada korelasi kebetulan tanpa uji statistika inferensial dan validasi metode.",
              },
              {
                icon: "navigation",
                title: "Insight Tanpa Rekomendasi Aksi",
                desc: "Laporan yang hanya menampilkan dashboard visual deskriptif tanpa arahan implementasi yang dapat dieksekusi manajemen.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded p-6 shadow-xs hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-red-50 text-red-600 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Solution Banner */}
          <div className="mt-8 bg-primary/5 border border-primary/20 rounded p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-primary font-technical-data text-xs font-bold uppercase tracking-wider block mb-1">
                Pendekatan DEVA
              </span>
              <p className="font-body-md text-sm text-slate-800 font-semibold max-w-2xl leading-relaxed">
                DEVA menjembatani kesenjangan ini dengan disiplin metodologis ketat: memastikan data dikumpulkan dengan benar, divalidasi mutunya, dianalisis secara saintifik, dan disintesis menjadi rekomendasi yang terukur.
              </p>
            </div>
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 bg-primary text-white hover:bg-secondary px-5 py-2.5 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-colors shrink-0"
            >
              <span>Pelajari Cara Kerja</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Our Services (Katalog Layanan Inti DEVA) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-primary font-technical-data text-xs uppercase tracking-widest font-bold block mb-2">
                Core Capabilities
              </span>
              <h2 className="font-display text-2xl md:text-4xl text-slate-900 font-extrabold mb-2">
                Layanan Riset &amp; Analisis Data
              </h2>
              <p className="font-body-md text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed">
                Dari perancangan dataset mentah hingga laporan kajian strategis, kami mendampingi organisasi menghasilkan bukti yang dapat diandalkan.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-primary px-5 py-3 rounded font-technical-data text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
            >
              <span>Lihat Detail Semua Layanan</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div
                key={svc.slug}
                className="group bg-slate-50 border border-slate-200 hover:border-primary/40 rounded p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:bg-white"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    <span className="material-symbols-outlined text-xl">{svc.icon}</span>
                  </div>
                  <span className="text-[10px] font-technical-data text-slate-400 font-bold uppercase tracking-wider block mb-1">
                    {svc.category}
                  </span>
                  <h3 className="font-display text-base font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {svc.name}
                  </h3>
                  <p className="font-body-md text-xs text-slate-500 leading-relaxed mb-4">
                    {svc.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 mt-auto">
                  <Link
                    href={`/services#${svc.slug}`}
                    className="inline-flex items-center gap-1.5 text-[11px] font-technical-data font-bold uppercase tracking-wider text-primary group-hover:text-secondary"
                  >
                    <span>Cakupan &amp; Deliverable</span>
                    <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Methodology (Alur Kerja 6 Tahap) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary font-technical-data text-xs uppercase tracking-widest font-bold block mb-2">
              Structured Methodology
            </span>
            <h2 className="font-display text-2xl md:text-4xl text-slate-900 font-extrabold mb-3">
              Alur Kerja Metodologis 6-Tahap
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-slate-500 leading-relaxed">
              Memastikan setiap proyek riset dan analisis dapat dipertanggungjawabkan keabsahan ilmiahnya serta direproduksi secara konsisten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologySteps.map((m) => (
              <div
                key={m.step}
                className="bg-white border border-slate-200 rounded p-6 shadow-xs relative flex flex-col justify-between hover:border-primary/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-technical-data text-xs font-bold flex items-center justify-center">
                      {m.step}
                    </span>
                    <span className="material-symbols-outlined text-slate-300 text-2xl">{m.icon}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900 mb-2">
                    {m.name} — {m.title}
                  </h3>
                  <p className="font-body-md text-xs text-slate-500 leading-relaxed mb-4">
                    {m.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 bg-slate-50/60 -mx-6 -mb-6 p-4 rounded-b">
                  <span className="text-[9px] font-technical-data text-slate-400 uppercase tracking-wider font-bold block mb-0.5">
                    Hasil Luaran (Output):
                  </span>
                  <span className="font-technical-data text-[11px] font-semibold text-slate-700 block">
                    {m.output}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 text-xs font-technical-data font-bold uppercase tracking-wider text-primary hover:text-secondary"
            >
              <span>Pelajari Rincian Aktivitas Tiap Tahap</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Selected Portfolio / Case Studies */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-primary font-technical-data text-xs uppercase tracking-widest font-bold block mb-2">
                Demonstrated Case Studies
              </span>
              <h2 className="font-display text-2xl md:text-4xl text-slate-900 font-extrabold mb-2">
                Studi Kasus &amp; Portofolio
              </h2>
              <p className="font-body-md text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed">
                Contoh penerapan metodologi riset dan analisis data terstruktur pada sektor industri farmasi, kosmetik, dan riset observasional.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-primary text-white hover:bg-secondary px-5 py-3 rounded font-technical-data text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
            >
              <span>Lihat Semua Portofolio</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPortfolio.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Deliverables (Standar Luaran Kerja DEVA) */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="max-w-2xl mb-14">
            <span className="text-primary font-technical-data text-xs uppercase tracking-widest font-bold block mb-2">
              Clear &amp; Concrete Outputs
            </span>
            <h2 className="font-display text-2xl md:text-4xl text-white font-extrabold mb-3">
              Format Luaran Kerja (Deliverables)
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-slate-400 leading-relaxed">
              Klien menerima dokumen terstruktur yang siap digunakan untuk diskusi eksekutif, audit kepatuhan, maupun pengambilan tindakan operasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                icon: "table_chart",
                title: "Dataset Terstandardisasi",
                desc: "Clean analytical dataset lengkap dengan data dictionary dan metadata variabel terstruktur.",
              },
              {
                icon: "query_stats",
                title: "Laporan Uji Statistik",
                desc: "Rangkuman komparasi, signifikansi model, dan pengujian hipotesis dengan interpretasi praktis.",
              },
              {
                icon: "monitoring",
                title: "Visualisasi Tematik",
                desc: "Grafik tematik, infografis data, atau dashboard ringkasan yang mudah dipahami pemangku kepentingan.",
              },
              {
                icon: "menu_book",
                title: "Laporan Kajian Lengkap",
                desc: "Dokumen monograf komprehensif berstandar riset formal untuk dasar kebijakan dan telaah regulasi.",
              },
              {
                icon: "lightbulb",
                title: "Rekomendasi Strategis",
                desc: "Matriks rekomendasi bertahap (Action Plan) dengan pertimbangan risiko dan proyeksi dampak.",
              },
            ].map((d) => (
              <div
                key={d.title}
                className="bg-slate-800/80 border border-slate-700 rounded p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-primary/20 text-sky-400 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-xl">{d.icon}</span>
                  </div>
                  <h3 className="font-display text-sm font-bold text-white mb-2 leading-snug">
                    {d.title}
                  </h3>
                  <p className="font-body-md text-xs text-slate-400 leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. About the Team (Susunan Tim Inti Sesuai Data Resmi) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="max-w-2xl mb-12">
            <span className="text-primary font-technical-data text-xs uppercase tracking-widest font-bold block mb-2">
              Multidisciplinary Expertise
            </span>
            <h2 className="font-display text-2xl md:text-4xl text-slate-900 font-extrabold mb-3">
              Tim Inti DEVA
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-slate-500 leading-relaxed">
              Memadukan kompetensi metodologi statistika industri, validasi metode observasional, kepatuhan standar mutu, dan analisis pasar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-slate-50 border border-slate-200 rounded p-5 flex flex-col text-center items-center justify-between shadow-xs hover:border-primary/40 transition-colors"
              >
                <div className="w-full flex flex-col items-center">
                  {/* Authentic portrait with initials fallback */}
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 shadow-xs mb-4 bg-slate-100 shrink-0">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={`Foto resmi ${member.name} — ${member.role}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 96px, 96px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-display font-extrabold text-lg text-primary bg-slate-200">
                        {member.initials}
                      </div>
                    )}
                  </div>

                  <h3 className="font-display text-sm font-bold text-slate-900 leading-tight mb-1">
                    {member.name}
                  </h3>
                  <span className="font-technical-data text-[10px] text-primary font-bold uppercase tracking-wider block mb-2">
                    {member.role}
                  </span>
                  <div className="bg-white border border-slate-200/80 rounded px-2.5 py-1 text-[10px] font-technical-data text-slate-600 mb-3 w-full">
                    {member.title || member.expertise}
                  </div>
                </div>

                <p className="font-body-md text-[11px] text-slate-500 leading-relaxed mt-auto pt-2 border-t border-slate-100">
                  {member.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-technical-data font-bold uppercase tracking-wider text-primary hover:text-secondary"
            >
              <span>Pelajari Profil &amp; Filosofi DEVA</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Wawasan & Dokumen Preview */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Wawasan Terbaru */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
                <div>
                  <span className="text-primary font-technical-data text-[10px] uppercase tracking-wider font-bold block">
                    Knowledge Sharing
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    Wawasan &amp; Publikasi
                  </h3>
                </div>
                <Link
                  href="/blog"
                  className="font-technical-data text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary"
                >
                  Semua Artikel
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {latestArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>

            {/* Pusat Unduhan Preview */}
            <div className="lg:col-span-5">
              <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
                <div>
                  <span className="text-primary font-technical-data text-[10px] uppercase tracking-wider font-bold block">
                    Materials &amp; Overviews
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    Contoh Format &amp; Panduan
                  </h3>
                </div>
                <Link
                  href="/downloads"
                  className="font-technical-data text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary"
                >
                  Pusat Unduhan
                </Link>
              </div>

              <div className="space-y-4">
                {featuredDownloads.map((dl) => (
                  <DownloadCard key={dl.id} item={dl} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Consultation CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-[#0F1E33] via-slate-900 to-[#0A1322] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center max-w-3xl">
          <span className="text-sky-400 font-technical-data text-xs uppercase tracking-widest font-bold block mb-3">
            Start Your Consultation
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Konsultasikan Kebutuhan Data &amp; Riset Organisasi Anda
          </h2>
          <p className="font-body-md text-sm md:text-base text-slate-300 leading-relaxed mb-8">
            Diskusikan lingkup riset, tantangan ketersediaan data, atau rencana studi kelayakan produk bersama tim DEVA untuk mendapatkan asesmen awal yang jelas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-secondary px-8 py-3.5 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-all shadow-lg shadow-primary/25"
            >
              <span>Konsultasikan Kebutuhan Anda</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>

            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 px-7 py-3.5 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-colors"
            >
              <span className="material-symbols-outlined text-base text-emerald-400">chat</span>
              <span>Hubungi via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
