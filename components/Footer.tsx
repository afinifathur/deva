import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800 pt-16 pb-12 mt-auto">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0 bg-white/10 p-1 rounded-full">
                <Image
                  src="/images/company/teams/Logo Deva.png"
                  alt="Logo Resmi DEVA"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-tight text-white">
                  DEVA
                </span>
                <span className="font-technical-data text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                  Data Development &amp; Analysis
                </span>
              </div>
            </div>

            <p className="font-technical-data text-xs text-primary font-bold tracking-wider uppercase">
              &quot;{siteConfig.tagline}&quot;
            </p>

            <p className="font-body-md text-xs text-slate-400 leading-relaxed">
              Membantu organisasi merumuskan kebutuhan data, menjalankan riset metodologis, dan mengubah bukti empiris menjadi rekomendasi terukur untuk keputusan bisnis dan produk.
            </p>

            <div className="pt-1">
              <span className="inline-block bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-technical-data px-3 py-1 rounded">
                B2B Research &amp; Analytics Consulting
              </span>
            </div>
          </div>

          {/* Layanan Utama */}
          <div>
            <h5 className="font-technical-data text-xs font-semibold mb-6 text-white uppercase tracking-wider">
              Layanan Utama
            </h5>
            <ul className="space-y-3 text-xs text-slate-400 font-body-md">
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/services#data-development">
                  Data Development &amp; Collection
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/services#data-management">
                  Data Management &amp; Cleaning
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/services#data-analysis">
                  Data Analysis &amp; Statistics
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/services#feasibility-study">
                  Feasibility Study (Studi Kelayakan)
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/services#business-plan">
                  Business Plan &amp; Laporan Kajian
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/services#kapsul-insight">
                  Kapsul Insight Cepat
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigasi & Sumber Daya */}
          <div>
            <h5 className="font-technical-data text-xs font-semibold mb-6 text-white uppercase tracking-wider">
              Navigasi &amp; Metodologi
            </h5>
            <ul className="space-y-3 text-xs text-slate-400 font-body-md">
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/methodology">
                  Alur Kerja 6-Tahap DEVA
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/portfolio">
                  Studi Kasus &amp; Portofolio
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/blog">
                  Wawasan &amp; Publikasi
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/downloads">
                  Contoh Deliverable &amp; Profil
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-200" href="/about">
                  Tentang Kami &amp; Profil Tim
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak & Konsultasi */}
          <div>
            <h5 className="font-technical-data text-xs font-semibold mb-6 text-white uppercase tracking-wider">
              Konsultasi &amp; Kontak
            </h5>
            <ul className="space-y-4 text-xs text-slate-400 font-body-md">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-base mt-0.5">location_on</span>
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-base">mail</span>
                <a className="hover:text-primary transition-colors duration-200 font-technical-data" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-400 text-base">chat</span>
                <a
                  className="hover:text-emerald-400 transition-colors duration-200 font-technical-data text-slate-300"
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {siteConfig.whatsappDisplay}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-4 py-2 rounded text-[11px] font-technical-data uppercase tracking-wider font-bold transition-colors shadow-sm"
              >
                <span>Mulai Konsultasi Data</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-body-md">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved. {siteConfig.coreMessage}
          </p>
          <div className="flex items-center gap-6 font-technical-data text-[11px]">
            <Link href="/about" className="hover:text-slate-400 transition-colors">
              Tentang DEVA
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Kontak
            </Link>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
