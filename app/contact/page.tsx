import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ContactForm } from "@/app/contact/contact-form";

export const metadata: Metadata = {
  title: "Konsultasi Kebutuhan Data & Kontak",
  description:
    "Hubungi tim konsultan DEVA untuk konsultasi kebutuhan data development, data cleaning, analisis statistik, studi kelayakan, dan rencana bisnis.",
  alternates: { canonical: "/contact" },
};

export const dynamic = "force-static";

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { service?: string };
}) {
  const prefilledService = searchParams?.service;

  return (
    <>
      {/* Header Section */}
      <section className="bg-white py-14 border-b border-slate-200">
        <div className="max-w-container-max mx-auto px-gutter">
          <nav className="flex items-center gap-2 text-slate-400 font-technical-data text-xs uppercase tracking-wider mb-4">
            <Link className="hover:text-primary transition-colors" href="/">
              Beranda
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="font-bold text-slate-800">Konsultasi &amp; Kontak</span>
          </nav>

          <span className="text-primary font-technical-data text-xs uppercase tracking-widest font-bold block mb-2">
            Get in Touch
          </span>
          <h1 className="font-display text-3xl md:text-5xl text-slate-900 font-extrabold mb-4">
            Konsultasikan Kebutuhan Data Anda
          </h1>
          <p className="font-body-md text-sm md:text-base text-slate-600 max-w-3xl leading-relaxed">
            Mulai dari perumusan masalah, audit kesiapan dataset, hingga studi kelayakan pasar. Tim konsultan DEVA siap membantu memetakan solusi analitik yang paling tepat untuk konteks organisasi Anda.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-container-max mx-auto px-gutter py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm prefilledService={prefilledService} />
          </div>

          {/* Sidebar Info Column */}
          <aside className="lg:col-span-5 space-y-8">
            {/* Contact Details Card */}
            <div className="bg-white border border-slate-200 rounded p-7 shadow-xs">
              <h3 className="font-display text-base font-bold text-slate-900 mb-6 uppercase tracking-wider">
                Informasi Narahubung DEVA
              </h3>
              
              <div className="space-y-6 text-slate-600 font-body-md text-xs">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">location_on</span>
                  <div>
                    <div className="font-technical-data text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Jaringan Operasional
                    </div>
                    <div className="text-slate-800 leading-relaxed font-semibold">
                      {siteConfig.address}
                    </div>
                    <div className="text-slate-500 text-[11px] mt-0.5">
                      Melayani konsultasi tatap muka dan daring (virtual) untuk seluruh wilayah Indonesia.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">mail</span>
                  <div>
                    <div className="font-technical-data text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Email Konsultasi Resmi
                    </div>
                    <a
                      className="text-slate-800 hover:text-primary font-technical-data font-bold transition-colors text-xs"
                      href={`mailto:${siteConfig.email}`}
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-600 text-xl mt-0.5 shrink-0">chat</span>
                  <div>
                    <div className="font-technical-data text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      WhatsApp Konsultasi Cepat
                    </div>
                    <a
                      className="text-slate-800 hover:text-emerald-600 font-technical-data font-bold transition-colors text-xs"
                      href={siteConfig.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {siteConfig.whatsappDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 text-white hover:bg-emerald-700 rounded font-technical-data text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Chat Langsung via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Alur Konsultasi Card */}
            <div className="bg-slate-50 border border-slate-200 rounded p-7">
              <span className="text-primary font-technical-data text-[10px] uppercase tracking-wider font-bold block mb-1">
                Workflow Konsultasi
              </span>
              <h3 className="font-display text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Tahapan Setelah Anda Menghubungi DEVA
              </h3>

              <ol className="space-y-4 text-xs font-body-md text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary font-technical-data text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="text-slate-900 block font-technical-data text-[11px]">Asesmen Awal Kebutuhan</strong>
                    <span>Tim mengevaluasi deskripsi kebutuhan data dan pertanyaan riset yang Anda ajukan.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary font-technical-data text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="text-slate-900 block font-technical-data text-[11px]">Sesi Diskusi Teknis &amp; NDA</strong>
                    <span>Pembahasan mendalam via pertemuan virtual atau tatap muka yang dilindungi perjanjian kerahasiaan.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary font-technical-data text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="text-slate-900 block font-technical-data text-[11px]">Penyusunan Proposal Ruang Lingkup</strong>
                    <span>DEVA menyusun dokumen rencana metodologi, estimasi waktu, serta penawaran komersial resmi.</span>
                  </div>
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
