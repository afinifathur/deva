import type { MethodologyStep } from "@/lib/types";

export const methodologySteps: MethodologyStep[] = [
  {
    step: "01",
    name: "Define",
    title: "Perumusan Masalah & Ruang Lingkup",
    description:
      "Mendefinisikan pertanyaan bisnis atau riset inti yang hendak dijawab. Menetapkan batas masalah, tujuan akhir, variabel kunci yang relevan, serta kriteria keberhasilan kajian.",
    keyActivities: [
      "Diskusi penentuan sasaran strategis bersama pemangku kepentingan",
      "Perumusan pertanyaan riset spesifik dan hipotesis kerja",
      "Identifikasi batasan teknis, etika data, dan ketersediaan sumber daya",
    ],
    output: "Project Scope & Research Framework Document",
    icon: "psychology",
  },
  {
    step: "02",
    name: "Design",
    title: "Perancangan Metodologi & Sampling",
    description:
      "Menentukan kerangka kerja metodologis yang tepat, desain sampling representatif, instrumen pengukuran terstandardisasi, dan protokol kontrol kualitas data.",
    keyActivities: [
      "Penentuan desain studi (observasional, komparatif, atau eksploratif)",
      "Kalkulasi kecukupan ukuran sampel dan teknik sampling",
      "Penyusunan instrumen ukur dan uji keterbacaan kuesioner",
    ],
    output: "Metodologi Riset & Rencana Manajemen Data (DMP)",
    icon: "design_services",
  },
  {
    step: "03",
    name: "Collect",
    title: "Akuisisi & Konsolidasi Data",
    description:
      "Pengumpulan data primer secara terstandar atau penarikan data sekunder dari sumber yang terverifikasi dengan pengawasan protokol ketat untuk menghindari bias pengumpulan.",
    keyActivities: [
      "Pelaksanaan akuisisi data lapangan / digital secara terstruktur",
      "Pencatatan metadata, waktu akuisisi, dan log pengumpulan data",
      "Audit kelengkapan batch data secara berkala",
    ],
    output: "Raw Dataset Terkatalog & Log Akuisisi",
    icon: "folder_zip",
  },
  {
    step: "04",
    name: "Validate",
    title: "Validasi, Pembersihan & Audit Mutu",
    description:
      "Tahapan krusial untuk mendeteksi anomali, inkonsistensi, duplikasi, dan pencilan (outliers). Memastikan data memenuhi standar kepatuhan mutu dan integritas sebelum dianalisis.",
    keyActivities: [
      "Data profiling dan deteksi kesalahan entri atau formatting",
      "Harmonisasi variabel dan imputasi berbasis metode valid",
      "Audit kepatuhan standar mutu dan dokumentasi perubahan (audit trail)",
    ],
    output: "Clean Analytical Dataset & Data Hygiene Audit Report",
    icon: "verified",
  },
  {
    step: "05",
    name: "Analyze",
    title: "Analisis Statistik & Pemodelan",
    description:
      "Menerapkan teknik statistika yang tepat, mulai dari eksplorasi data mendalam hingga pemodelan multivariat untuk menguji hipotesis dan mengekstraksi pola esensial.",
    keyActivities: [
      "Exploratory Data Analysis (EDA) dan visualisasi pola dasar",
      "Pengujian hipotesis dan estimasi parameter statistik",
      "Uji ketahanan (robustness check) dan interpretasi signifikansi",
    ],
    output: "Statistical Analysis Summary & Model Diagnostics",
    icon: "query_stats",
  },
  {
    step: "06",
    name: "Deliver",
    title: "Sintesis Insight & Rekomendasi Aksi",
    description:
      "Menerjemahkan temuan analisis matematis ke dalam laporan eksekutif yang aplikatif, presentasi visual yang jelas, dan rekomendasi strategis yang dapat dieksekusi.",
    keyActivities: [
      "Penyusunan narasi analitik yang komunikatif dan terstruktur",
      "Pembuatan infografis, visualisasi data, atau dashboard eksekutif",
      "Formulasi rekomendasi aksi bertahap dan diskusi tindak lanjut",
    ],
    output: "Executive Report, Presentation Deck & Actionable Recommendations",
    icon: "task_alt",
  },
];
