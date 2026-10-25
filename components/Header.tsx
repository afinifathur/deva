"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/MobileNav";

export const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/services", label: "Layanan" },
  { href: "/portfolio", label: "Portofolio" },
  { href: "/methodology", label: "Cara Kerja" },
  { href: "/blog", label: "Wawasan" },
  { href: "/about", label: "Tentang Kami" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20 relative">
        {/* Official DEVA Brand Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 shrink-0 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/images/company/teams/Logo Deva.png"
                alt="Logo Resmi DEVA"
                width={44}
                height={44}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                  DEVA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <span className="font-technical-data text-[9px] uppercase tracking-wider text-slate-500 font-bold -mt-0.5">
                Data Development &amp; Analysis
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-all duration-200 font-technical-data text-xs uppercase tracking-wider font-bold py-1 border-b-2 ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-slate-600 border-transparent hover:text-primary hover:border-primary/30"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-white hover:bg-secondary px-5 py-2.5 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-all duration-200 shadow-md shadow-primary/15 hover:shadow-primary/25 active:scale-98"
          >
            <span>Konsultasi</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
