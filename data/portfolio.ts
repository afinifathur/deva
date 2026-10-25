import type { PortfolioItem } from "@/lib/types";

/**
 * DEVA Project & Portfolio Centralized Dataset
 * Sumber Kebenaran Data: Spreadsheet 'Data DEVA.xlsx' & Arsip Faktur 'INVOICE DEVA_DR.SOETOMO_020926.pdf'
 * 
 * KEBIJAKAN VERSI PRESENTASI KAMPUS / ORGANISASI PENDUKUNG:
 * - Menggunakan nama klien asli yang tercatat dalam sumber (misal: RSUD Dr. Soetomo, Oksi Farma).
 * - Untuk entri yang kolom kliennya kosong pada Excel, ditulis secara faktual "Klien Tidak Dicantumkan di Sumber".
 * - Mempertahankan diferensiasi status: Terdokumentasi Faktur, Selesai, Tercatat dalam Rekapitulasi, dan Sedang Disiapkan.
 * - Tidak mempublikasikan nominal invoice, nomor rekening, tanda tangan, atau syarat pembayaran privat.
 * - Memisahkan secara tegas antara rekam keterlibatan riil dan studi kasus demonstrasi (isIllustrative: true).
 * - Diurutkan kronologis: Proyek terbaru di atas (2026 -> 2025 -> 2024).
 */

export const portfolioItems: PortfolioItem[] = [
  {
    id: "DEV-PRJ-001",
    slug: "laporan-feasibilitas-stem-cell-sekretom-rsud-dr-soetomo",
    title: "Pembuatan Laporan Feasibilitas Produk Stem Cell dan Sekretom RSUD Dr. Soetomo",
    shortTitle: "Feasibilitas Stem Cell RSUD Dr. Soetomo",
    year: "2026",
    clientLabel: "RSUD Dr. Soetomo",
    sector: "Farmasi & Kesehatan",
    thumbnail: "/images/portfolio/bpjs-cost-control.svg",
    imageAlt: "Kajian kelayakan produk terapi stem cell dan metabolit sekretom RSUD Dr. Soetomo",
    isIllustrative: false,
    isIncomplete: false,
    status: "Terdokumentasi Faktur & Selesai",
    publicationStatus: "Rekam Keterlibatan Riil (Sumber: Excel Data DEVA Baris 3 & Faktur 2026)",
    sourceRow: "Excel Data DEVA Baris 3 (No. Invoice 3)",
    team: "Made, Uula, Sagung, Sabil (4 Personel)",
    overview:
      "Penyusunan laporan kajian kelayakan (feasibility study) komprehensif untuk produk terapi sel punca (stem cell) dan metabolit sekretom di lingkungan RSUD Dr. Soetomo. Kajian mengintegrasikan telaah kesiapan sarana pengolahan sel, kepatuhan regulasi terapi berbasis sel dari BPOM/Kemenkes, serta analisis proyeksi kebutuhan layanan medis regeneratif.",
    challenge:
      "Tingginya standar regulasi mutu dan biosecurity fasilitas pengolahan produk biologi terapeutik, serta perlunya justifikasi teknis dan operasional yang solid sebelum implementasi layanan stem cell klinis skala penuh.",
    scope: [
      "Penyusunan kerangka studi kelayakan teknis dan operasional produk terapi sel punca dan sekretom",
      "Telaah regulasi mutu fasilitas Cara Pembuatan Obat yang Baik (CPOB) khusus produk biologi",
      "Analisis kebutuhan sarana, rantai dingin (cold chain), dan alur operasional laboratorium",
      "Kompilasi monograf laporan studi kelayakan formal",
    ],
    methodology:
      "Audit regulatori kepatuhan pedoman Cara Pembuatan Obat yang Baik (CPOB) produk terapi lanjutan, telaah literatur klinis efikasi sekretom, dan pemodelan alur kerja operasional instalasi.",
    deliverables: [
      "Dokumen Laporan Feasibilitas Produk Stem Cell dan Sekretom RSUD Dr. Soetomo",
      "Matriks Evaluasi Regulasi Terapi Regeneratif & Kesiapan Sarana Fasilitas",
    ],
    outcome:
      "Menyediakan dokumen studi kelayakan terstruktur yang menjadi acuan resmi bagi manajemen RSUD Dr. Soetomo dalam mengevaluasi kesiapan operasional dan regulasi layanan terapi sel punca.",
    tags: ["Stem Cell", "Sekretom", "RSUD Dr. Soetomo", "Feasibility Study", "Regenerative Medicine"],
  },
  {
    id: "DEV-PRJ-002",
    slug: "laporan-feasibilitas-pendirian-apotek-oksi-farma",
    title: "Laporan Feasibilitas Pendirian Apotek Oksi Farma",
    shortTitle: "Feasibilitas Pendirian Apotek Oksi Farma",
    year: "2025",
    clientLabel: "Oksi Farma",
    sector: "Farmasi & Kesehatan",
    thumbnail: "/images/portfolio/pharmacy-feasibility.svg",
    imageAlt: "Studi kelayakan pembukaan gerai farmasi Oksi Farma",
    isIllustrative: false,
    isIncomplete: false,
    status: "Terdokumentasi Selesai",
    publicationStatus: "Rekam Keterlibatan Riil (Sumber: Excel Data DEVA Baris 9)",
    sourceRow: "Excel Data DEVA Baris 9 (No. Invoice 9)",
    team: "Diva, Regina (2 Personel)",
    overview:
      "Penyusunan kajian kelayakan pendirian gerai dan fasilitas kefarmasian untuk Oksi Farma. Studi memetakan densitas demografi tangkapan konsumen, analisis radius kompetitor apotek di wilayah target, pemenuhan persyaratan izin operasional sarana (SIA/SIPA), serta simulasi titik impas investasi.",
    challenge:
      "Tingginya kepadatan apotek ritel di area perkotaan dan tipisnya margin obat resep generik memerlukan strategi pemilihan lokasi dan bauran produk yang tepat agar modal pembukaan gerai dapat kembali sesuai target.",
    scope: [
      "Analisis demografi dan densitas populasi area tangkapan mikro (catchment area analysis)",
      "Pemetaan sebaran radius apotek kompetitor dan fasilitas pelayanan kesehatan sekitar",
      "Proyeksi kebutuhan belanja modal (CAPEX) dan pengeluaran operasional (OPEX)",
      "Penyusunan dokumen studi kelayakan pendirian sarana apotek Oksi Farma",
    ],
    methodology:
      "Survei observasional radius primer-sekunder, analisis bauran produk margin tinggi (alat kesehatan/OTC) versus etikal, dan pemodelan keuangan Break-Even Point (BEP).",
    deliverables: [
      "Dokumen Laporan Feasibilitas Pendirian Apotek Oksi Farma",
      "Model Finansial Proyeksi Arus Kas, Estimasi Penjualan, & Periode Pengembalian Modal",
    ],
    outcome:
      "Memberikan justifikasi berbasis data kuantitatif bagi manajemen Oksi Farma untuk mengambil keputusan ekspansi pembukaan gerai farmasi secara terukur dan terencana.",
    tags: ["Apotek", "Oksi Farma", "Feasibility Study", "Retail Farmasi", "Financial Projection"],
  },
  {
    id: "DEV-PRJ-003",
    slug: "analisis-kendali-biaya-plafon-bpjs",
    title: "Analisis Kendali Biaya Plafon BPJS",
    shortTitle: "Analisis Kendali Biaya Plafon BPJS",
    year: "2026",
    clientLabel: "Institusi Layanan Kesehatan (Klien Tidak Dicantumkan di Sumber)",
    sector: "Farmasi & Kesehatan",
    thumbnail: "/images/portfolio/bpjs-cost-control.svg",
    imageAlt: "Analisis efisiensi biaya klaim paket plafon BPJS Kesehatan",
    isIllustrative: false,
    isIncomplete: false,
    status: "Tercatat dalam Rekapitulasi",
    publicationStatus: "Rekam Keterlibatan Riil (Sumber: Excel Data DEVA Baris 13)",
    sourceRow: "Excel Data DEVA Baris 13 (No. Invoice 13)",
    team: "Anita, Diva (2 Personel)",
    overview:
      "Kajian evaluasi retrospektif terhadap pos-pos pembiayaan tindakan medis dan peresepan obat dibandingkan terhadap plafon tarif paket INA-CBGs BPJS Kesehatan. Analisis berfokus mendeteksi unit pelayanan dengan varians selisih biaya tertinggi untuk mendukung pengendalian mutu dan kendali biaya rumah sakit.",
    challenge:
      "Ketidaksesuaian antara biaya riil tindakan/obat dengan plafon klaim yang ditetapkan BPJS berpotensi menimbulkan defisit unit operasional bila tidak dipetakan faktor pemicu biayanya (cost drivers).",
    scope: [
      "Pembersihan dan harmonisasi rekam data klaim serta catatan penagihan",
      "Analisis varians tarif riil rumah sakit terhadap paket plafon INA-CBGs",
      "Pemetaan kelompok diagnosis dengan deviasi biaya obat dan tindakan tertinggi",
    ],
    methodology:
      "Audit data hygiene penagihan, pengelompokan kode diagnosis berbasis severity level, analisis korelasi lama hari rawat (LOS) terhadap biaya obat, dan benchmarking deviasi biaya.",
    deliverables: [
      "Laporan Evaluasi Analisis Kendali Biaya Plafon BPJS",
      "Dataset Analitik Bersih Rekapitulasi Varians Biaya per Kategori Tindakan",
    ],
    outcome:
      "Menghasilkan pemetaan pos tindakan medis dengan deviasi biaya paling signifikan, membantu manajemen menyusun protokol formularium klinis internal yang lebih efisien.",
    tags: ["BPJS", "Healthcare Cost Control", "Claims Analysis", "Hospital Economics"],
  },
  {
    id: "DEV-PRJ-004",
    slug: "analisis-penggunaan-kosmetik-remaja-putri-sidoarjo",
    title: "Analisis Penggunaan Kosmetik pada Remaja Putri di Wilayah Sidoarjo",
    shortTitle: "Riset Kosmetik Remaja Putri Sidoarjo",
    year: "2025",
    clientLabel: "Riset Pasar Konsumen (Klien Tidak Dicantumkan di Sumber)",
    sector: "Kosmetik & Personal Care",
    thumbnail: "/images/portfolio/cosmetic-testing.svg",
    imageAlt: "Riset preferensi dan perilaku penggunaan produk kosmetik remaja di Sidoarjo",
    isIllustrative: false,
    isIncomplete: false,
    status: "Tercatat dalam Rekapitulasi",
    publicationStatus: "Rekam Keterlibatan Riil (Sumber: Excel Data DEVA Baris 18)",
    sourceRow: "Excel Data DEVA Baris 18 (No. Invoice 18)",
    team: "Angli, Mutia (2 Personel)",
    overview:
      "Kajian riset pasar dan perilaku konsumen yang mengkaji pola pemilihan, persepsi keamanan bahan aktif, dan faktor pendorong keputusan pembelian produk kosmetik pada segmen remaja putri di wilayah Kabupaten Sidoarjo, Jawa Timur.",
    challenge:
      "Tingginya penetrasi promosi kosmetik di media sosial yang sering kali tidak diimbangi pemahaman literasi keamanan BPOM oleh konsumen remaja, serta kebutuhan memetakan elastisitas harga pada segmen pelajar.",
    scope: [
      "Kompilasi dan validasi dataset survei preferensi kosmetik remaja",
      "Segmentasi kategori produk (perawatan kulit/skincare vs kosmetik dekoratif)",
      "Analisis pengaruh ulasan media sosial, harga, dan izin BPOM terhadap keputusan pembelian",
    ],
    methodology:
      "Survei kuantitatif dengan sampling terstratifikasi, tabulasi silang (cross-tabulation), uji signifikansi chi-square, dan analisis regresi preferensi konsumen.",
    deliverables: [
      "Laporan Riset Analisis Penggunaan Kosmetik pada Remaja Putri di Wilayah Sidoarjo",
      "Ringkasan Eksekutif Profil Segmentasi Pasar & Pola Pembelian Konsumen Muda",
    ],
    outcome:
      "Memberikan gambaran empiris mengenai kriteria utama remaja dalam memilih kosmetik, menjadi acuan penting bagi produsen kosmetik dalam merancang formula ramah remaja dan komunikasi merek yang tepat.",
    tags: ["Kosmetik", "Consumer Behavior", "Survei Sidoarjo", "Market Research", "Personal Care"],
  },
  {
    id: "DEV-PRJ-005",
    slug: "pengambilan-data-laboratorium-uji-kosmetik",
    title: "Pengambilan Data Laboratorium Uji Kosmetik & Pengujian Sediaan",
    shortTitle: "Manajemen Data Laboratorium Uji Kosmetik",
    year: "2025",
    clientLabel: "Laboratorium Pengujian Kosmetik (Klien Tidak Dicantumkan di Sumber)",
    sector: "Kosmetik & Personal Care",
    thumbnail: "/images/portfolio/cosmetic-testing.svg",
    imageAlt: "Protokol pengumpulan dan standardisasi data laboratorium uji kosmetik",
    isIllustrative: false,
    isIncomplete: false,
    status: "Tercatat dalam Rekapitulasi",
    publicationStatus: "Rekam Keterlibatan Riil (Sumber: Excel Data DEVA Baris 2 & 4)",
    sourceRow: "Excel Data DEVA Baris 2 & Baris 4 (No. Invoice 2 & 4)",
    team: "Mutia, Edna, Luqman, Anita (4 Personel)",
    overview:
      "Manajemen pengumpulan data primer hasil pengujian sediaan kosmetik di laboratorium. Meliputi protokol input data observasi pengujian stabilitas, organoleptis, dan parameter keamanan fisikokimia untuk memastikan integritas data siap analisis.",
    challenge:
      "Pencatatan data laboratorium manual rentan terhadap inkonsistensi pencatatan nilai desimal, human error saat transkripsi, serta hilangnya keterlacakan (traceability) riwayat replikasi pengujian.",
    scope: [
      "Penyusunan format digital data entry observasi laboratorium",
      "Pembersihan, verifikasi duplikasi, dan standardisasi satuan ukur hasil uji",
      "Penyusunan dataset analitik hasil pengujian sediaan yang siap diaudit",
    ],
    methodology:
      "Protokol verifikasi entri ganda (double data entry), penyusunan kamus data parameter uji laboratorium, dan validasi rentang batas kelayakan (range checking).",
    deliverables: [
      "Clean Analytical Dataset Hasil Pengujian Sediaan Laboratorium",
      "Laporan Verifikasi Mutu & Audit Integritas Data Observasi",
    ],
    outcome:
      "Meningkatkan akurasi dan keterlacakan rekam pengujian sediaan laboratorium sehingga mempercepat proses kompilasi berkas registrasi dan sertifikasi produk.",
    tags: ["Data Collection", "Uji Laboratorium", "Kosmetik", "Quality Assurance", "Data Hygiene"],
  },
  {
    id: "DEV-PRJ-006",
    slug: "analisis-trend-produksi-manufaktur",
    title: "Analisis Trend Produksi",
    shortTitle: "Analisis Trend Produksi Manufaktur",
    year: "2025",
    clientLabel: "Industri Manufaktur (Klien Tidak Dicantumkan di Sumber)",
    sector: "Market & Bisnis",
    thumbnail: "/images/portfolio/production-trends.svg",
    imageAlt: "Analisis fluktuasi output dan tren kapasitas lini produksi",
    isIllustrative: false,
    isIncomplete: false,
    status: "Tercatat dalam Rekapitulasi",
    publicationStatus: "Rekam Keterlibatan Riil (Sumber: Excel Data DEVA Baris 10)",
    sourceRow: "Excel Data DEVA Baris 10 (No. Invoice 10)",
    team: "Luqman, Made (2 Personel)",
    overview:
      "Analisis tren deret waktu (time-series) terhadap volume output batch produksi lini manufaktur. Kajian ini mengidentifikasi fluktuasi musiman, variasi utilisasi mesin per shift kerja, serta memetakan potensi titik kemacetan (bottlenecks) dalam alur produksi.",
    challenge:
      "Variabilitas output antar lini produksi yang belum terpola secara kuantitatif menyulitkan tim perencanaan produksi (PPIC) dalam mengalokasikan stok bahan baku dan jadwal perawatan mesin.",
    scope: [
      "Kompilasi dan agregasi data catatan batch produksi lini manufaktur",
      "Analisis dekomposisi tren musiman dan evaluasi deviasi output terhadap target",
      "Penyusunan model proyeksi beban kapasitas lini produksi",
    ],
    methodology:
      "Dekomposisi time-series dengan moving average, kalkulasi utilisasi kapasitas efektif, dan analisis deviasi siklus waktu kerja (cycle time variance).",
    deliverables: [
      "Laporan Kajian Analisis Trend Produksi & Kapasitas Lini",
      "Dashboard Ringkasan Eksekutif Pemantauan Deviasi Output Batch",
    ],
    outcome:
      "Memberikan proyeksi berbasis data bagi perencana operasional untuk meminimalkan waktu henti (downtime) dan mengoptimalkan penyeimbangan beban lini produksi.",
    tags: ["Production Trends", "Time Series", "Manufacturing", "Capacity Planning", "PPIC"],
  },
  {
    id: "DEV-PRJ-007",
    slug: "pembelian-data-coa-dan-halal-statement",
    title: "Pembelian Data COA dan Halal Statement",
    shortTitle: "Data COA & Halal Statement",
    year: "2024",
    clientLabel: "Klien Tidak Dicantumkan dalam Rekap",
    sector: "Farmasi & Kesehatan",
    thumbnail: "/images/portfolio/survey-validation.svg",
    imageAlt: "Kompilasi berkas sertifikat COA dan pernyataan halal bahan baku",
    isIllustrative: false,
    isIncomplete: true,
    status: "Tercatat dalam Rekapitulasi — Detail Sedang Disiapkan",
    publicationStatus: "Rekam Keterlibatan Riil (Sumber: Excel Data DEVA Baris 6 — Dalam Proses Kurasi)",
    sourceRow: "Excel Data DEVA Baris 6 (No. Invoice 6)",
    team: "Sabil, Made, Sagung (3 Personel)",
    overview:
      "Pekerjaan pengadaan, kompilasi, dan verifikasi kelengkapan dokumen Certificate of Analysis (COA) serta Halal Statement untuk bahan baku sediaan farmasi/nutrasetika.",
    challenge:
      "Verifikasi spesifikasi teknis bahan baku dari berbagai pemasok guna memastikan kesesuaian parameter mutu dan keabsahan sertifikat kehalalan.",
    scope: [
      "Inventarisasi dokumen COA dan surat pernyataan halal pemasok",
      "Pengecekan kesesuaian parameter uji bahan baku terhadap standar acuan",
    ],
    methodology:
      "Audit kepatuhan dokumen administratif bahan baku sediaan.",
    deliverables: [
      "Arsip Terkompilasi Data COA & Pernyataan Halal Bahan Baku",
    ],
    outcome:
      "Informasi detail narasi metodologis dan dampak sedang dikurasi dan diverifikasi oleh tim arsip DEVA.",
    tags: ["COA", "Halal Statement", "Data Acquisition", "Raw Material Verification"],
  },
  {
    id: "DEV-PRJ-008",
    slug: "validasi-metodologi-survei-prevalensi-institusi",
    title: "Validasi Metodologi Survei & Evaluasi Konsistensi Instrumen Riset Institusional",
    shortTitle: "Validasi Metodologi Survei Institusi",
    year: "2024",
    clientLabel: "Institusi Penelitian & Akademik (Data Simulasi)",
    sector: "Institusi Riset / Universitas",
    thumbnail: "/images/portfolio/survey-validation.svg",
    imageAlt: "Validasi metodologi instrumen survei dan uji reliabilitas statistik",
    isIllustrative: true,
    isIncomplete: false,
    status: "Studi Kasus Ilustratif — Data Simulasi",
    publicationStatus: "Studi Kasus Ilustratif — Data Simulasi (Simulated Benchmark)",
    sourceRow: "Kerangka Metodologis Demonstratif DEVA",
    team: "Tim Konsultan Statistika DEVA",
    overview:
      "Uji coba komparasi validitas konstruk dan reliabilitas instrumen kuesioner berskala besar untuk membuktikan reprodusibilitas data sebelum instrumen digunakan pada riset observasional skala nasional.",
    challenge:
      "Instrumen pengukuran yang diadaptasi dari studi literatur memerlukan validasi statistik kontekstual agar tidak menghasilkan bias misklasifikasi pada studi prevalensi.",
    scope: [
      "Uji coba instrumen kuesioner pada kelompok sampel awal (pilot study)",
      "Analisis faktor konfirmatori (Confirmatory Factor Analysis / CFA)",
      "Uji konsistensi internal menggunakan koefisien Cronbach's Alpha",
      "Penyusunan panduan penyempurnaan item instrumen dengan reliabilitas rendah",
    ],
    methodology:
      "Uji validitas isi dan konstruk, kalkulasi korelasi Pearson item-total terdiskon, evaluasi reliabilitas skala, serta analisis konsistensi waktu (test-retest).",
    deliverables: [
      "Laporan Uji Psikometri & Validasi Metodologi Instrumen",
      "Draft Final Kuesioner Tervalidasi dengan Panduan Scoring",
      "Dataset Hasil Uji Coba beserta Skrip Analisis Terbuka",
    ],
    outcome:
      "Menghasilkan instrumen ukur yang terbukti valid dan reliabel secara statistik sehingga data yang diperoleh pada studi skala besar memiliki integritas ilmiah tinggi.",
    tags: ["Method Validation", "Survey Reliability", "Psychometrics", "Simulated Benchmark"],
  },
];
