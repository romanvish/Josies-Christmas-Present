"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const portfolioItems = [
  { title: "Disney 2025", href: "/portfolio/disney-2025", tag: "Video + Photo" },
];

const christmasMessages = [
  {
    title: "Hi Jo!",
    message: "First of all, Merry Christmas! Hope it's been a fun week for you and that all the fun has been great!"
  },
  {
    // title: "",
    message: "When we were chatting about what you wanted for Christmas, I asked if you wanted something or some experience."
  },
  {
    title: "You gave me no answer",
    message: "That was not helpful. So I thought I'd make you something a little unique! So..."
  },
  {
    title: "✨ Welcome to your Portfolio Site! ✨",
    message: "Feel no pressure to like it, or even use it! It was a fun little project for me and I wanted to give you a chance to show off or organize your talents if you chose to."
  },
  {
    title: "If you do want to use it...",
    message: "We'll need to chat a little bit to talk about what images you want to include, and if you want to change the layout or colors or anything like that."
  },
  {
    title: "But it's your present!",
    message: "So feel free to tell me what you'd like to change, and I'd be happy to get this looking just right for you."
  },
  {
    title: "Merry Christmas again!",
    message: "Thanks for being a great friend."
  },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [christmasModalOpen, setChristmasModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const portfolioDesktopRef = useRef<HTMLDivElement | null>(null);
  const portfolioMobileRef = useRef<HTMLDivElement | null>(null);

  const closeAll = () => {
    setMenuOpen(false);
    setPortfolioOpen(false);
  };

  // Auto-open modal on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem("christmasModalSeen");
    if (!hasVisited) {
      setChristmasModalOpen(true);
      localStorage.setItem("christmasModalSeen", "true");
    }
  }, []);

  // Close modal when clicking outside
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

  const openChristmasModal = () => {
    setCurrentPage(0);
    setChristmasModalOpen(true);
  };

  const closeChristmasModal = () => {
    setChristmasModalOpen(false);
    setCurrentPage(0);
  };

  const nextPage = () => {
    if (currentPage < christmasMessages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
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
            <button
              onClick={openChristmasModal}
              className="rounded-full border-2 border-red-400/50 bg-red-500/20 px-4 py-2 text-red-100 shadow-lg shadow-red-500/20 transition hover:border-red-300 hover:bg-red-500/30 hover:-translate-y-0.5"
            >
              🎄 Merry Christmas!
            </button>
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
              <button
                onClick={openChristmasModal}
                className="rounded-xl border-2 border-red-400/50 bg-red-500/20 px-3 py-2 text-red-100 hover:bg-red-500/30"
              >
                🎄 Merry Christmas!
              </button>
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

      {/* Christmas Modal */}
      {christmasModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={closeChristmasModal}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl border-2 border-red-300/30 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeChristmasModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 text-2xl font-bold"
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-red-200">
                {christmasMessages[currentPage].title}
              </h2>
              <p className="text-lg text-slate-200 leading-relaxed">
                {christmasMessages[currentPage].message}
              </p>

              <div className="flex items-center justify-center gap-2 pt-4">
                {christmasMessages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentPage
                        ? "w-8 bg-red-300"
                        : "w-2 bg-slate-500 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-3 justify-center pt-2">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="px-6 py-2 rounded-full border border-slate-500 text-slate-300 hover:border-slate-400 hover:text-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  Previous
                </button>
                <button
                  onClick={nextPage}
                  disabled={currentPage === christmasMessages.length - 1}
                  className="px-6 py-2 rounded-full bg-red-500/80 text-white hover:bg-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}