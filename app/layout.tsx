import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.fullName} | Riset & Analisis Data Strategis`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.heroSubheadline,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.fullName,
    title: `${siteConfig.name} — ${siteConfig.heroHeadline}`,
    description: siteConfig.heroSubheadline,
    url: siteConfig.baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} — ${siteConfig.heroHeadline}`,
    description: siteConfig.heroSubheadline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.baseUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: siteConfig.heroSubheadline,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
      streetAddress: siteConfig.address,
    },
    knowsAbout: [
      "Data Development",
      "Data Cleaning",
      "Statistical Analysis",
      "Feasibility Study",
      "Market Research",
      "Business Advisory",
    ],
  };

  return (
    <html
      lang="id"
      className={`${inter.variable} ${jetbrainsMono.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container font-body-md">
        <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(orgJsonLd)}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
