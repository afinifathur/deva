"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/components/Header";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors text-slate-700"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Tutup menu" : "Buka menu"}
      >
        <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-20 bg-white border-b border-slate-200 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-container-max mx-auto px-gutter py-5 flex flex-col gap-2">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-colors ${
                    active
                      ? "text-primary bg-primary/5 border-l-4 border-primary"
                      : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-slate-100 mt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white hover:bg-secondary rounded font-technical-data text-xs uppercase tracking-wider font-bold transition-colors shadow-sm"
              >
                <span>Konsultasikan Kebutuhan Anda</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
