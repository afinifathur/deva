/**
 * Konfigurasi Terpusat Website DEVA (Data Development and Analysis)
 * 
 * CATATAN PENTING UNTUK DEMO & CLIENT PRESENTATION:
 * Kontak berikut menggunakan placeholder terpusat yang aman untuk demonstrasi.
 * Ganti nilai placeholder ini dengan kontak operasional resmi sebelum go-live.
 */

export const siteConfig = {
  name: "DEVA",
  fullName: "DEVA — Data Development and Analysis",
  tagline: "Vision in our hands.",
  coreMessage: "Data is everywhere. We turn it into meaningful decisions.",
  heroHeadline: "Data yang Valid untuk Keputusan yang Tepat.",
  heroSubheadline:
    "DEVA membantu organisasi merumuskan kebutuhan data, menjalankan riset dan analisis metodologis, serta mengubah bukti empiris terpercaya menjadi rekomendasi strategis untuk keputusan bisnis dan produk.",
  baseUrl: "https://deva-analytics.id",
  
  // Kontak Terpusat Resmi DEVA
  whatsappNumber: "62895350181785",
  whatsappDisplay: "+62 895-3501-81785",
  whatsappDefaultMessage:
    "Halo Tim DEVA, saya ingin berkonsultasi mengenai kebutuhan data dan analisis.\n\nNama :\n\nInstitusi / Perusahaan :",
  whatsappLink:
    "https://api.whatsapp.com/send/?phone=62895350181785&text=" +
    encodeURIComponent(
      "Halo Tim DEVA, saya ingin berkonsultasi mengenai kebutuhan data dan analisis.\n\nNama :\n\nInstitusi / Perusahaan :"
    ),
  email: "consult@deva-analytics.id",
  phone: "+62 895-3501-81785",
  address: "Jawa Timur, Indonesia",
  
  // Target Audience / Sektor Kunci
  targetSectors: [
    "Industri Farmasi & Kosmetik",
    "Layanan Kesehatan & Rumah Sakit",
    "Institusi Penelitian & Universitas",
    "Korporasi & Lembaga Kajian Bisnis",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
