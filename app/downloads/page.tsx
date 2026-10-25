import type { Metadata } from "next";
import { downloads } from "@/data/downloads";
import { DownloadsClient } from "@/app/downloads/downloads-client";

export const metadata: Metadata = {
  title: "Pusat Unduhan & Format Deliverable",
  description:
    "Unduh ringkasan profil DEVA, panduan kerangka kerja metodologi riset 6-tahap, dan contoh struktur format laporan kajian analitik.",
  alternates: { canonical: "/downloads" },
};

export const dynamic = "force-static";

export default function DownloadsPage() {
  return <DownloadsClient downloads={downloads} />;
}
