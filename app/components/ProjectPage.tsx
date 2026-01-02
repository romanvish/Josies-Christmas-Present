"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { ImageList, ImageListItem, Box } from "@mui/material";

type MediaType =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster?: string; alt: string };

type ProjectMedia = {
  kind?: "image" | "video"; // default image
  src: string;
  alt: string;
  caption?: string;
  poster?: string;
  loop?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
};

type ProjectPageProps = {
  title: string;
  subtitle?: string;
  summary: string;
  heroMedia: MediaType;
  heroBackground?: { src: string; alt?: string };
  story: string[];
  details?: ReactNode;
  images: ProjectMedia[];
};

export function ProjectPage({ title, subtitle, summary, heroMedia, heroBackground, story, details, images }: ProjectPageProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [lightboxVisible, setLightboxVisible] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (activeIndex !== null) {
        if (e.key === "ArrowRight") setActiveIndex((idx) => (idx === null ? idx : (idx + 1) % images.length));
        if (e.key === "ArrowLeft") setActiveIndex((idx) => (idx === null ? idx : (idx - 1 + images.length) % images.length));
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [activeIndex, images.length]);

  useEffect(() => {
    if (activeIndex !== null) {
      const id = requestAnimationFrame(() => setLightboxVisible(true));
      return () => cancelAnimationFrame(id);
    }
    setLightboxVisible(false);
  }, [activeIndex]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="relative isolate overflow-hidden px-6 py-16 sm:px-10 lg:px-16">
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/40" />
          {(() => {
            const bg = heroBackground ??
              (heroMedia.kind === "image"
                ? { src: heroMedia.src, alt: heroMedia.alt }
                : heroMedia.poster
                ? { src: heroMedia.poster, alt: heroMedia.alt }
                : undefined);
            if (!bg) return null;
            return (
              <img
                src={bg.src}
                alt={bg.alt ?? "Project background"}
                className="h-full w-full object-cover opacity-30"
                loading="lazy"
              />
            );
          })()}
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-6">
            <Link href="/portfolio" className="text-xs uppercase tracking-[0.3em] text-amber-200/80">
              Portfolio
            </Link>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">{title}</h1>
            {subtitle && <p className="text-lg text-slate-200/85 max-w-2xl">{subtitle}</p>}
            <p className="text-base text-slate-200/80 max-w-2xl">{summary}</p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200/80">
              <span className="rounded-full border border-white/10 px-3 py-1">Short timelines welcome</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Run-and-gun friendly</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Sound + grade included</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            {heroMedia.kind === "image" ? (
              <img src={heroMedia.src} alt={heroMedia.alt} className="h-full w-full object-cover" loading="lazy" />
            ) : (
              <video
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster={heroMedia.poster}
              >
                <source src={heroMedia.src} type="video/mp4" />
              </video>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-sm flex items-center justify-between">
              <div>
                <p className="font-semibold">Behind the scenes</p>
                <p className="text-slate-200/80">Captured handheld with a soft LED key</p>
              </div>
              <span className="rounded-full bg-amber-300/85 px-3 py-1 text-slate-950 font-semibold">Live</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-10 lg:px-16" aria-labelledby="story">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Story</p>
            <h2 id="story" className="text-3xl font-semibold">How it came together</h2>
            <div className="space-y-4 text-slate-200/85">
              {story.map((para, idx) => (
                <p key={idx} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg space-y-3">
            <p className="text-sm font-semibold text-amber-200">Snapshot</p>
            {details ?? (
              <ul className="space-y-2 text-sm text-slate-200/80">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  Small crew: director/DP + AC + audio
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  Deliverables: hero film + socials + stills
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  Tools: FX3, 35/50 primes, handheld + gimbal
                </li>
              </ul>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10 lg:px-16" aria-labelledby="gallery">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Gallery</p>
            <h2 id="gallery" className="text-3xl font-semibold">Highlights</h2>
          </div>
          <span className="text-xs text-slate-300/80">Hover or tap to explore</span>
        </div>

        <ImageList
          sx={{
            width: "100%",
            height: "auto",
            // gap: 2,
            columnCount: {
                xs: 2,
                sm: 3,
                md: 4,
                lg: 5,
            },
            gap: "16px !important",
          }}
          variant="masonry"
        >
          {images.map((img, idx) => (
            <ImageListItem
              key={img.src + idx}
              sx={{
                overflow: "hidden",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                cursor: "pointer",
                transition: "all 0.3s ease-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.15)",
                },
                "&:focus-visible": {
                  outline: "2px solid #fed7aa",
                },
              }}
              component="button"
              onClick={() => setActiveIndex(idx)}
            >
                {img.kind === "video" ? (
                  <video
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.7s ease-out",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    autoPlay={img.autoPlay ?? true}
                    loop={img.loop ?? true}
                    muted={img.muted ?? true}
                    playsInline
                    poster={img.poster}
                  >
                    <source src={img.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.7s ease-out",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    loading="lazy"
                  />
                )}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgb(15 23 42 / 0.8), transparent)",
                    opacity: 0,
                    transition: "opacity 0.5s ease-out",
                  }}
                />
                {(img.caption || img.alt) && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: 2,
                      opacity: 0,
                      transition: "opacity 0.5s ease-out",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "rgb(248 250 252)",
                        textShadow: "0 1px 2px rgb(0 0 0 / 0.5)",
                      }}
                    >
                      {img.caption ?? img.alt}
                    </p>
                  </Box>
                )}
            </ImageListItem>
          ))}
        </ImageList>
      </section>

      {activeIndex !== null && (
        <div
          className={`fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-6 transition-opacity duration-300 ease-out ${lightboxVisible ? "opacity-100" : "opacity-0"}`}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className={`relative max-h-[90vh] max-w-6xl w-full overflow-hidden rounded-3xl border border-white/15 bg-slate-950/80 shadow-2xl transition duration-300 ease-out ${lightboxVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold text-slate-50 hover:border-amber-200 hover:text-amber-200"
              onClick={() => setActiveIndex(null)}
            >
              Close
            </button>
            <div className="flex h-full w-full items-center justify-center bg-black">
              {images[activeIndex].kind === "video" ? (
                <video
                  className="max-h-[80vh] max-w-full object-contain"
                  controls
                  autoPlay={images[activeIndex].autoPlay ?? true}
                  loop={images[activeIndex].loop ?? true}
                  muted={images[activeIndex].muted ?? true}
                  playsInline
                  poster={images[activeIndex].poster}
                >
                  <source src={images[activeIndex].src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  className="max-h-[80vh] max-w-full object-contain"
                />
              )}
            </div>
            {(images[activeIndex].caption || images[activeIndex].alt) && (
              <div className="border-t border-white/10 bg-slate-900/70 px-6 py-4 text-sm text-slate-100">
                {images[activeIndex].caption ?? images[activeIndex].alt}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
