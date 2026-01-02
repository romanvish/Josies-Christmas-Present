"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const portfolioItems = [
//   { title: "Immersive Storybook", href: "/portfolio/immersive-storybook", tag: "Experience" },
//   { title: "Kindness Tracker", href: "/portfolio/kindness-tracker", tag: "Product" },
//   { title: "Holiday Market", href: "/portfolio/holiday-market", tag: "Ecommerce" },
//   { title: "Lights & Lyrics", href: "/portfolio/lights-lyrics", tag: "Creative" },
//   { title: "Aurora House", href: "/portfolio/aurora-house", tag: "Film + Photo" },
//   { title: "Neon District", href: "/portfolio/neon-district", tag: "Video" },
//   { title: "Harvest Table", href: "/portfolio/harvest-table", tag: "Photo" },
  { title: "Disney 2025", href: "/portfolio/disney-2025", tag: "Video + Photo" },
//   { title: "Disney Playground", href: "/portfolio/disney-playground", tag: "Video + Photo" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const portfolioDesktopRef = useRef<HTMLDivElement | null>(null);
  const portfolioMobileRef = useRef<HTMLDivElement | null>(null);

  const closeAll = () => {
    setMenuOpen(false);
    setPortfolioOpen(false);
  };

  useEffect(() => {
    const handleOutside = (event: MouseEvent | TouchEvent) => {
      if (!portfolioOpen) return;
      const target = event.target as Node | null;
      const insideDesktop = portfolioDesktopRef.current?.contains(target ?? null);
      const insideMobile = portfolioMobileRef.current?.contains(target ?? null);
      if (!insideDesktop && !insideMobile) {
        setPortfolioOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [portfolioOpen]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/70 border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-amber-200 hover:text-amber-100"
          onClick={closeAll}
        >
          Josie Coleman
        </Link>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="rounded-full border border-white/15 bg-white/5 p-2 text-slate-100 hover:border-amber-200 hover:text-amber-200"
          >
            <span className="block h-0.5 w-5 bg-current mb-1" />
            <span className="block h-0.5 w-5 bg-current mb-1" />
            <span className="block h-0.5 w-5 bg-current" />
          </button>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-100 md:flex">
          <Link href="/" className="hover:text-amber-200" onClick={closeAll}>
            Home
          </Link>
          <div className="relative" ref={portfolioDesktopRef}>
            <button
              onClick={() => setPortfolioOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full border border-transparent px-3 py-2 hover:text-amber-200 hover:border-amber-200/40"
            >
              Portfolio
              <span className={`transition ${portfolioOpen ? "rotate-180" : ""}`}>▼</span>
            </button>
            {portfolioOpen && (
              <div className="absolute right-0 mt-3 w-72 rounded-2xl border border-white/10 bg-slate-900/95 p-3 shadow-2xl">
                <div className="grid gap-2">
                  {portfolioItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between rounded-xl px-3 py-2 hover:bg-white/5 hover:text-amber-200"
                      onClick={closeAll}
                    >
                      <span className="text-sm font-semibold">{item.title}</span>
                      <span className="text-[11px] text-slate-300">{item.tag}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/about" className="hover:text-amber-200" onClick={closeAll}>
            About
          </Link>
          <Link href="/about#contact" className="hover:text-amber-200" onClick={closeAll}>
            Contact
          </Link>
          <a
            href="mailto:hello@example.com"
            className="rounded-full bg-amber-300 px-4 py-2 text-slate-950 shadow-lg shadow-amber-200/30 transition hover:-translate-y-0.5"
          >
            Book a call
          </a>
        </nav>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:px-8 lg:px-10 text-slate-100">
            <Link href="/" className="rounded-xl px-3 py-2 hover:bg-white/5 hover:text-amber-200" onClick={closeAll}>
              Home
            </Link>
            <div ref={portfolioMobileRef}>
              <button
                onClick={() => setPortfolioOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 hover:bg-white/5 hover:text-amber-200"
              >
                <span>Portfolio</span>
                <span className={`text-xs transition ${portfolioOpen ? "rotate-180" : ""}`}>▼</span>
              </button>
            {portfolioOpen && (
              <div className="ml-2 grid gap-1 rounded-xl border border-white/5 bg-white/5 p-2">
                {portfolioItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-white/10 hover:text-amber-200"
                    onClick={closeAll}
                  >
                    <span>{item.title}</span>
                    <span className="text-[11px] text-slate-300">{item.tag}</span>
                  </Link>
                ))}
              </div>
            )}
            </div>
            <Link href="/about" className="rounded-xl px-3 py-2 hover:bg-white/5 hover:text-amber-200" onClick={closeAll}>
              About
            </Link>
            <Link href="/about#contact" className="rounded-xl px-3 py-2 hover:bg-white/5 hover:text-amber-200" onClick={closeAll}>
              Contact
            </Link>
            <a
              href="mailto:hello@example.com"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-300 px-4 py-2 text-slate-950 font-semibold shadow-lg shadow-amber-200/30"
              onClick={closeAll}
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
