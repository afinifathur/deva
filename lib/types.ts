export type ServiceSlug =
  | "data-development"
  | "data-management"
  | "data-analysis"
  | "insight-reporting"
  | "feasibility-study"
  | "business-plan"
  | "kapsul-insight"
  | "laporan-kajian";

export interface ServiceItem {
  id: string;
  slug: ServiceSlug;
  name: string;
  category: "Data Engineering" | "Analytics & Statistics" | "Strategic Research";
  shortDescription: string;
  problemStatement: string;
  workflow: string[];
  deliverables: string[];
  icon: string;
  suitableFor: string[];
}

export type SectorCategory =
  | "Farmasi & Kesehatan"
  | "Kosmetik & Personal Care"
  | "Market & Bisnis"
  | "Institusi Riset / Universitas";

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  year: string; // e.g. "2026", "2025", "2024"
  clientLabel: string; // Approved anonymous label, e.g. "Institusi Pelayanan Kesehatan, Surabaya"
  sector: SectorCategory;
  thumbnail: string;
  imageAlt?: string;
  isIllustrative: boolean; // true if simulated, false if based on actual engagement with anonymized details
  publicationStatus: string; // e.g. "Ringkasan Proyek Terdokumentasi (Anonim)" | "Studi Kasus Ilustratif — Data Simulasi"
  overview: string;
  challenge: string;
  scope: string[];
  methodology: string;
  deliverables: string[];
  outcome: string;
  tags: string[];
  isIncomplete?: boolean; // true if project is recorded but detailed narrative is still being curated
  status?: string; // e.g. "Terdokumentasi Selesai", "Tercatat dalam Rekapitulasi", "Sedang Disiapkan"
  sourceRow?: string; // Reference to Excel Data DEVA row for auditability
  team?: string; // Freelance / analyst team involved
}

export type ArticleCategory =
  | "Data Methodology"
  | "Market Intelligence"
  | "Quality & Validation"
  | "Health & Pharma Analytics"
  | "Strategic Insights";

export interface Article {
  title: string;
  slug: string;
  excerpt: string;
  category: ArticleCategory;
  author: string;
  publishedDate: string; // ISO string
  readingTime: string;
  seoTitle: string;
  seoDescription: string;
  featuredImage: string;
  body: string; // Markdown text
}

export interface Download {
  id: string;
  title: string;
  category: "Company Profile" | "Sample Deliverable" | "Methodology Brief" | "Framework Guide";
  description: string;
  fileSize: string;
  format: "PDF" | "Template";
  url: string;
}

export interface MethodologyStep {
  step: string;
  name: string;
  title: string;
  description: string;
  keyActivities: string[];
  output: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  initials: string;
  role: string;
  title: string;
  expertise: string;
  description: string;
  image?: string;
}

