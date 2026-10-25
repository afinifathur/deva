import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/data/team";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Tentang DEVA — Profil, Pendekatan & Tim",
  description:
    "Profil DEVA: startup riset, pengembangan, dan analisis data untuk mendukung keputusan strategis industri farmasi, kosmetik, layanan kesehatan, dan institusi penelitian.",
  alternates: { canonical: "/about" },
};

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <>
      {/* Header Profile */}
      <section className="bg-white py-14 border-b border-slate-200">
        <div className="max-w-container-max mx-auto px-gutter">
          <nav className="flex items-center gap-2 text-slate-400 font-technical-data text-xs uppercase tracking-wider mb-4">
            <Link className="hover:text-primary transition-colors" href="/">
              Beranda
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="font-bold text-slate-800">Tentang Kami</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-primary font-technical-data text-xs uppercase tracking-widest font-bold block mb-2">
                Company Profile &amp; Mission
              </span>
              <h1 className="font-display text-3xl md:text-5xl text-slate-900 font-extrabold mb-4">
                Tentang DEVA
              </h1>
              <p className="font-body-md text-base md:text-lg text-primary font-bold mb-6">
                &quot;{siteConfig.coreMessage}&quot;
              </p>

              <div className="font-body-md text-slate-600 leading-relaxed text-sm md:text-base space-y-4">
                <p>
                  <strong>DEVA (Data Development and Analysis)</strong> adalah entitas konsultan data dan riset analitik yang berfokus mendampingi organisasi memecahkan masalah kelangkaan data, fragmentasi informasi, dan kebutuhan validasi bukti empiris.
                </p>
                <p>
                  Kami percaya bahwa di era kelimpahan informasi saat ini, tantangan terbesar bagi organisasi bukan sekadar mengumpulkan data, melainkan bagaimana memastikan data tersebut valid mutunya, dianalisis dengan metodologi yang tepat, serta disintesis menjadi arahan keputusan yang dapat dieksekusi.
                </p>
              </div>
            </div>

            {/* Official Logo Display on About Page */}
            <div className="hidden lg:flex flex-col items-center justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl shadow-xs shrink-0 w-64 text-center">
              <div className="relative w-36 h-36 mb-4">
                <Image
                  src="/images/company/teams/Logo Deva.png"
                  alt="Logo Resmi DEVA"
                  fill
                  priority
                  className="object-contain"
                  sizes="144px"
                />
              </div>
              <span className="font-display font-extrabold text-lg text-slate-900">
                DEVA
              </span>
              <span className="font-technical-data text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                Official Brandmark
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Utama & Fokus Audiens */}
      <main className="max-w-container-max mx-auto px-gutter py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Sektor Fokus */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded p-8">
            <span className="text-primary font-technical-data text-xs uppercase tracking-wider font-bold block mb-2">
              Target Audiens &amp; Mitra Riset
            </span>
            <h2 className="font-display text-xl font-bold text-slate-900 mb-4">
              Sektor Industri yang Kami Dampingi
            </h2>
            <p className="font-body-md text-xs text-slate-500 mb-6 leading-relaxed">
              Layanan DEVA dirancang secara khusus untuk memenuhi tuntutan kepatuhan metodologis dan presisi data tinggi pada dua ekosistem utama:
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-slate-200 rounded p-4 flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">medication</span>
                <div>
                  <h3 className="font-display text-sm font-bold text-slate-900 mb-1">
                    1. Industri Farmasi, Kosmetik &amp; Kesehatan
                  </h3>
                  <p className="font-body-md text-xs text-slate-500 leading-relaxed">
                    Mendukung studi kelayakan formulasi baru, riset tren preferensi konsumen terhadap bahan aktif, hingga pembersihan data registri observasional.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded p-4 flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">school</span>
                <div>
                  <h3 className="font-display text-sm font-bold text-slate-900 mb-1">
                    2. Institusi Penelitian, Rumah Sakit &amp; Perguruan Tinggi
                  </h3>
                  <p className="font-body-md text-xs text-slate-500 leading-relaxed">
                    Membantu perancangan metodologi sampling, validasi instrumen ukur kuesioner, uji signifikansi statistik, dan penyusunan laporan monograf kajian.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Komitmen Kerahasiaan & Etika */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded p-8 flex flex-col justify-between">
            <div>
              <span className="text-primary font-technical-data text-xs uppercase tracking-wider font-bold block mb-2">
                Data Ethics &amp; Governance
              </span>
              <h2 className="font-display text-xl font-bold text-slate-900 mb-4">
                Prinsip Integritas &amp; Kerahasiaan (NDA)
              </h2>
              <p className="font-body-md text-xs text-slate-600 leading-relaxed mb-6">
                Data adalah aset strategis yang bersifat sensitif. DEVA beroperasi dengan komitmen kepatuhan etika data yang tegas:
              </p>

              <div className="space-y-3 font-body-md text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-emerald-600 text-base mt-0.5 shrink-0">verified_user</span>
                  <span><strong>Perjanjian Kerahasiaan (NDA):</strong> Seluruh data klien dilindungi melalui kesepakatan kerahasiaan formal sebelum analisis dimulai.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-emerald-600 text-base mt-0.5 shrink-0">shield</span>
                  <span><strong>Protokol De-identifikasi:</strong> Data observasional atau survei dibersihkan dari atribut pengenal pribadi (*PII*) sesuai kaidah privasi data.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-emerald-600 text-base mt-0.5 shrink-0">sync_alt</span>
                  <span><strong>Audit Trail &amp; Keterulangan:</strong> Seluruh tahapan pembersihan dan pemodelan statistik didokumentasikan sehingga dapat diuji ulang secara transparan.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <span className="font-technical-data text-[10px] text-slate-400 uppercase tracking-wider font-bold block">
                Tagline Resmi
              </span>
              <span className="font-display font-extrabold text-primary text-base">
                {siteConfig.tagline}
              </span>
            </div>
          </div>
        </div>

        {/* Tim Inti DEVA */}
        <section className="border-t border-slate-200 pt-16 mb-16">
          <div className="max-w-2xl mb-12">
            <span className="text-primary font-technical-data text-xs uppercase tracking-widest font-bold block mb-2">
              Leadership &amp; Experts
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-slate-900 font-extrabold mb-3">
              Tim Inti DEVA
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-slate-500 leading-relaxed">
              Keahlian terpadu yang memadukan keahlian metodologi statistik industri, standar mutu kepatuhan data, validasi studi observasional, dan analisis pasar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-slate-200 rounded p-6 flex flex-col text-center items-center justify-between shadow-xs hover:border-primary/40 transition-colors"
              >
                <div className="w-full flex flex-col items-center">
                  {/* Authentic portrait with initials fallback */}
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-primary/20 shadow-xs mb-4 bg-slate-100 shrink-0">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={`Foto resmi ${member.name} — ${member.role}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 112px, 112px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-display font-extrabold text-xl text-primary bg-slate-100">
                        {member.initials}
                      </div>
                    )}
                  </div>

                  <h3 className="font-display text-sm font-bold text-slate-900 leading-tight mb-1">
                    {member.name}
                  </h3>
                  <span className="font-technical-data text-xs text-primary font-bold uppercase tracking-wider block mb-2">
                    {member.role}
                  </span>
                  <div className="bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-[10px] font-technical-data text-slate-600 mb-3 w-full">
                    {member.title || member.expertise}
                  </div>
                </div>

                <p className="font-body-md text-xs text-slate-500 leading-relaxed mt-auto pt-3 border-t border-slate-100">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Reference Link */}
        <div className="mb-16 bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-technical-data text-xs uppercase tracking-wider font-bold block mb-1">
              Rekam Jejak &amp; Metodologi Terapan
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Lihat Contoh Analisis &amp; Studi Kasus Nyata
            </h3>
            <p className="font-body-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              Pelajari bagaimana DEVA mengeksekusi analisis biaya operasional, studi kelayakan pasar farmasi, dan manajemen data observasional secara terstruktur.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:border-primary text-slate-800 hover:text-primary px-5 py-2.5 rounded font-technical-data text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-xs"
          >
            <span>Buka Portofolio DEVA</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        {/* CTA Konsultasi */}
        <div className="bg-slate-900 text-white rounded p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl font-bold mb-3">
            Siap Membangun Keputusan Berbasis Bukti Nyata?
          </h3>
          <p className="font-body-md text-sm text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            Hubungi kami untuk mendiskusikan kebutuhan riset, audit data mentah, atau kajian kelayakan bisnis organisasi Anda.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white hover:bg-secondary px-7 py-3 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-colors shadow-sm"
          >
            <span>Konsultasikan Kebutuhan Anda</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </main>
    </>
  );
}
