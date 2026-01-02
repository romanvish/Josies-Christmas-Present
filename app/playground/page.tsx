import Link from "next/link";

const featured = [
  {
    title: "Aurora House",
    blurb: "Launch film and stills for a boutique stay surrounded by pines.",
    href: "/portfolio/aurora-house",
    badge: "Film + Photo",
  },
  {
    title: "Neon District",
    blurb: "Nighttime brand reel with light trails and motion typography.",
    href: "/portfolio/neon-district",
    badge: "Video",
  },
  {
    title: "Harvest Table",
    blurb: "Chef-driven spot with macro food shots and cozy ambience.",
    href: "/portfolio/harvest-table",
    badge: "Photo",
  },
];

const services = [
  { title: "Video", items: ["Launch films", "Brand reels", "Social cuts"] },
  { title: "Photo", items: ["Campaign stills", "Product sets", "Lifestyle"] },
  { title: "Post", items: ["Edit + grade", "Sound design", "Motion titles"] },
];

const testimonials = [
  {
    quote: "Fast, collaborative, and visuals that made our launch feel premium.",
    name: "Jess M.",
    role: "Marketing Lead, Northline",
  },
  {
    quote: "They captured the atmosphere exactly how we imagined it.",
    name: "Evan R.",
    role: "Founder, Aurora House",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <section className="relative isolate overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0" aria-hidden>
          <video
            className="h-full w-full object-cover opacity-70"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-camera-capturing-happy-moments-6437/1080p.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
        </div>

        <div className="relative grid items-center justify-items-center text-center gap-6">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300/90">Videography / Photography</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl">
            Cinematic video and photography for brands and creators.
          </h1>
          <p className="text-lg text-slate-200/85 max-w-3xl">
            Visual stories built to move quickly and speak clearly. Minimal copy, maximal feeling.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-500 px-7 py-3 text-slate-950 font-semibold shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
            >
              View portfolio
            </Link>
            <a
              href="mailto:hello@example.com"
              className="rounded-full border border-indigo-300/60 px-7 py-3 font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-fuchsia-300 hover:text-fuchsia-200"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16" aria-labelledby="featured-work">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sky-200/80">Featured work</p>
            <h2 id="featured-work" className="text-3xl sm:text-4xl font-semibold">3 projects that set the tone</h2>
          </div>
          <Link href="/portfolio" className="text-sm font-semibold text-sky-200 hover:text-fuchsia-200">
            All projects →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.04] p-6 shadow-xl transition hover:-translate-y-1 hover:border-sky-300/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative space-y-3">
                <span className="inline-flex rounded-full bg-sky-400/15 px-3 py-1 text-xs font-semibold text-sky-100 border border-sky-300/40">
                  {item.badge}
                </span>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-slate-200/85">{item.blurb}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-sky-200">
                  <span>View</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 sm:px-10 lg:px-16 bg-slate-900/60 border-t border-white/5" aria-labelledby="services">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sky-200/80">Services</p>
            <h2 id="services" className="text-3xl font-semibold">What we handle</h2>
          </div>
          <p className="text-sm text-slate-300/80 max-w-xl">
            End-to-end coverage: planning, capture, and post so you can stay focused on the story.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-sky-200/10 bg-white/[0.03] p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2 text-slate-200/80 text-sm">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-300" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 sm:px-10 lg:px-16" aria-labelledby="social-proof">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-200/80">Social proof</p>
            <h2 id="social-proof" className="text-3xl font-semibold">Trusted by teams who move fast</h2>
            <div className="flex flex-wrap gap-3 text-xs text-slate-200/80">
              <span className="rounded-full border border-white/10 px-3 py-1">Northline</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Aurora House</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Kind Studio</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Brightside Labs</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:w-1/2">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 shadow-lg">
                <p className="text-slate-100">“{t.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-sky-200">{t.name}</p>
                <p className="text-xs text-slate-300/80">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-sky-400/20 via-indigo-400/15 to-fuchsia-400/15 px-8 py-10 shadow-2xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold text-slate-50">Ready for a launch-worthy story?</h2>
              <p className="text-slate-200/85 max-w-2xl">Short timelines welcome. Let visuals do the talking.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-500 px-6 py-3 text-slate-950 font-semibold shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
              >
                View portfolio
              </Link>
              <a
                href="mailto:hello@example.com"
                className="rounded-full border border-indigo-300/60 px-6 py-3 font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-fuchsia-300 hover:text-fuchsia-200"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
