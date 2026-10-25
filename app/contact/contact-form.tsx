"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";

export function ContactForm({ prefilledService }: { prefilledService?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    sector: "Farmasi & Kesehatan",
    service: prefilledService || "Data Analysis & Statistics",
    timeline: "1 - 3 Bulan",
    dataAvailability: "Sudah memiliki dataset mentah (butuh cleaning/analisis)",
    description: "",
    privacyConsent: false,
  });

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(
      `*KONSULTASI KEBUTUHAN DATA — DEVA*\n` +
      `------------------------------------\n` +
      `*Nama:* ${formData.name || "-"}\n` +
      `*Organisasi / Instansi:* ${formData.organization || "-"}\n` +
      `*Sektor Industri:* ${formData.sector}\n` +
      `*Layanan yang Dibutuhkan:* ${formData.service}\n` +
      `*Ketersediaan Data:* ${formData.dataAvailability}\n` +
      `*Target Timeline:* ${formData.timeline}\n` +
      `------------------------------------\n` +
      `*Uraian Kebutuhan:* \n${formData.description || "-"}\n\n` +
      `_Mohon informasi asesmen awal dan penjadwalan diskusi lebih lanjut._`
    );
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.organization.trim()) {
      alert("Mohon lengkapi Nama dan Organisasi Anda.");
      return;
    }
    const message = generateWhatsAppMessage();
    const url = `https://api.whatsapp.com/send/?phone=${siteConfig.whatsappNumber}&text=${message}`;
    window.open(url, "_blank");
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.organization.trim()) {
      alert("Mohon lengkapi Nama dan Organisasi Anda.");
      return;
    }
    const subject = encodeURIComponent(`Konsultasi Kebutuhan Data: ${formData.organization} - ${formData.service}`);
    const body = generateWhatsAppMessage();
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white border border-slate-200 rounded p-8 shadow-xs">
      <div className="mb-8 pb-6 border-b border-slate-100">
        <span className="text-primary font-technical-data text-xs uppercase tracking-wider font-bold block mb-1">
          Formulir Konsultasi Kebutuhan Data
        </span>
        <h2 className="font-display text-2xl font-extrabold text-slate-900">
          Mulai Diskusi Asesmen Bersama Tim DEVA
        </h2>
        <p className="text-slate-500 font-body-md text-xs mt-2 leading-relaxed">
          Sampaikan gambaran umum tantangan data organisasi Anda. Tim kami akan mengevaluasi ruang lingkup riset dan menghubungi Anda untuk diskusi teknis lanjutan.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleWhatsAppSubmit}>
        {/* Nama & Organisasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="font-technical-data text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1.5">
              Nama Lengkap Narahubung *
            </label>
            <input
              className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white focus:outline-none rounded px-3.5 py-2.5 font-technical-data text-xs transition-colors"
              placeholder="Contoh: Dr. Budi Santoso"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="font-technical-data text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1.5">
              Organisasi / Perusahaan / Institusi *
            </label>
            <input
              className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white focus:outline-none rounded px-3.5 py-2.5 font-technical-data text-xs transition-colors"
              placeholder="Contoh: PT Farmasi Nusantara / Lab Riset"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Sektor & Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="font-technical-data text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1.5">
              Sektor Industri / Bidang
            </label>
            <select
              className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white focus:outline-none rounded px-3 py-2.5 font-technical-data text-xs transition-colors"
              value={formData.sector}
              onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
            >
              <option value="Farmasi & Kesehatan">Farmasi &amp; Produk Kesehatan</option>
              <option value="Kosmetik & Personal Care">Kosmetik &amp; Perawatan Kulit</option>
              <option value="Institusi Riset / Universitas">Institusi Penelitian / Perguruan Tinggi</option>
              <option value="Layanan Kesehatan & RS">Rumah Sakit &amp; Fasilitas Pelayanan Kesehatan</option>
              <option value="Korporasi & Bisnis Umum">Korporasi / Unit Bisnis Umum</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
          <div>
            <label className="font-technical-data text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1.5">
              Layanan yang Dibutuhkan
            </label>
            <select
              className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white focus:outline-none rounded px-3 py-2.5 font-technical-data text-xs transition-colors"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="Data Development">Data Development &amp; Collection</option>
              <option value="Data Management & Cleaning">Data Management &amp; Data Cleaning</option>
              <option value="Data Analysis & Statistics">Data Analysis &amp; Statistical Modeling</option>
              <option value="Insight & Reporting">Insight &amp; Executive Reporting</option>
              <option value="Feasibility Study">Feasibility Study (Studi Kelayakan)</option>
              <option value="Business Plan">Business Plan &amp; Laporan Kajian</option>
              <option value="Kapsul Insight">Kapsul Insight Cepat</option>
              <option value="Kombinasi / Konsultasi Awal">Kombinasi / Konsultasi Awal</option>
            </select>
          </div>
        </div>

        {/* Ketersediaan Data & Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="font-technical-data text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1.5">
              Status Ketersediaan Data Saat Ini
            </label>
            <select
              className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white focus:outline-none rounded px-3 py-2.5 font-technical-data text-xs transition-colors"
              value={formData.dataAvailability}
              onChange={(e) => setFormData({ ...formData, dataAvailability: e.target.value })}
            >
              <option value="Sudah memiliki dataset mentah (butuh cleaning/analisis)">Sudah ada dataset mentah (butuh cleaning/analisis)</option>
              <option value="Belum ada data (butuh pengumpulan primer / survei)">Belum ada data (butuh pengumpulan primer / survei)</option>
              <option value="Data terfragmentasi di berbagai sistem/format">Data terfragmentasi di berbagai sistem/format</option>
              <option value="Kombinasi data sekunder & primer">Kombinasi data sekunder &amp; primer</option>
            </select>
          </div>
          <div>
            <label className="font-technical-data text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1.5">
              Target Waktu Pengerjaan
            </label>
            <select
              className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white focus:outline-none rounded px-3 py-2.5 font-technical-data text-xs transition-colors"
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            >
              <option value="Segera (< 1 Bulan)">Segera (&lt; 1 Bulan)</option>
              <option value="1 - 3 Bulan">1 - 3 Bulan</option>
              <option value="3 - 6 Bulan">3 - 6 Bulan</option>
              <option value="Eksplorasi / Rencana Masa Depan">Eksplorasi / Rencana Masa Depan</option>
            </select>
          </div>
        </div>

        {/* Uraian Kebutuhan */}
        <div>
          <label className="font-technical-data text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1.5">
            Uraian Masalah / Pertanyaan Riset Utama
          </label>
          <textarea
            className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white focus:outline-none rounded px-3.5 py-2.5 font-technical-data text-xs transition-colors min-h-[120px] leading-relaxed"
            placeholder="Jelaskan secara ringkas tantangan yang dihadapi atau output yang diharapkan (misal: analisis faktor preferensi konsumen, validasi kuesioner survei, atau studi kelayakan produk baru)..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
          <p className="text-[10px] text-slate-400 font-technical-data mt-1">
            * Jangan mencantumkan data rahasia pribadi atau proprietary yang sensitif pada formulir pengantar ini.
          </p>
        </div>

        {/* Privacy Consent */}
        <div className="flex items-start gap-2.5 pt-1">
          <input
            type="checkbox"
            id="privacyConsent"
            checked={formData.privacyConsent}
            onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
            className="mt-1 accent-primary"
            required
          />
          <label htmlFor="privacyConsent" className="font-body-md text-xs text-slate-600 leading-relaxed cursor-pointer">
            Saya memahami bahwa informasi pengantar ini akan digunakan untuk asesmen lingkup diskusi awal dan dilindungi oleh prinsip kerahasiaan data DEVA.
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded font-technical-data text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            <span>Kirim via WhatsApp (Respon Cepat)</span>
          </button>

          <button
            type="button"
            onClick={handleEmailSubmit}
            className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded font-technical-data text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            <span>Kirim via Email</span>
          </button>
        </div>

        {/* Demo Mode Notice */}
        <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 font-technical-data leading-relaxed bg-slate-50 p-3 rounded">
          <span className="font-bold text-slate-700 block mb-0.5">Catatan Teknis Arsitektur:</span>
          Website ini beroperasi dalam mode static-export (tanpa server database publik). Tombol di atas akan langsung mengarahkan pesan terstruktur Anda ke saluran WhatsApp resmi atau aplikasi email narahubung DEVA.
        </div>
      </form>
    </div>
  );
}
