import Link from "next/link";

const projects = [
	{
		title: "Disney 2025",
		summary: "A fun weekend-long story of fun with friends",
		href: "/portfolio/Disney-2025",
		tags: ["Dusk", "Photo", "Color"],
	},
	{
		title: "Immersive Storybook",
		summary: "A narrated, scroll-driven story with layered illustration and ambient sound cues.",
		href: "/portfolio/immersive-storybook",
		tags: ["experience", "react"],
	},
	{
		title: "Kindness Tracker",
		summary: "A playful micro-app that turns acts of kindness into a daily streak with shareable badges.",
		href: "/portfolio/kindness-tracker",
		tags: ["product", "ui"],
	},
	{
		title: "Holiday Market",
		summary: "A curated gifting guide with motion-forward cards, wishlists, and checkout flow.",
		href: "/portfolio/holiday-market",
		tags: ["ecommerce", "motion"],
	},
	{
		title: "Lights & Lyrics",
		summary: "Music visualizer that syncs lyric snippets with animated light forms in real-time.",
		href: "/portfolio/lights-lyrics",
		tags: ["creative", "webgl"],
	},
];

export default function Page() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-50">
			<section className="relative isolate overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
				<div className="absolute inset-0" aria-hidden>
					<video
						className="h-full w-full object-cover opacity-65"
						autoPlay
						loop
						muted
						playsInline
						poster="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
					>
						<source
							src="https://cdn.coverr.co/videos/coverr-festive-lights-9916/1080p.mp4"
							type="video/mp4"
						/>
					</video>
					<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-transparent" />
				</div>

				<div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
					<div className="space-y-6 max-w-2xl">
						<p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Portfolio</p>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
							Stories in motion, built to feel like a moment you can step inside.
						</h1>
						<p className="text-lg text-slate-200/90 max-w-xl">
							Video-forward experiences, playful interactions, and thoughtful flows. Here are a few pieces I loved
							crafting this year.
						</p>
						<div className="flex flex-wrap items-center gap-4">
							<Link
								href="#projects"
								className="rounded-full bg-amber-300 px-5 py-3 text-slate-950 font-medium shadow-lg shadow-amber-300/30 transition hover:-translate-y-0.5 hover:shadow-xl"
							>
								View the work
							</Link>
							<a
								href="mailto:hello@example.com"
								className="rounded-full border border-slate-500/60 px-5 py-3 font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-amber-200 hover:text-amber-200"
							>
								Say hello
							</a>
						</div>
					</div>

					<div className="relative">
						<div className="absolute -inset-6 rounded-3xl bg-amber-300/10 blur-3xl" aria-hidden />
						<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
							<div className="aspect-[4/3]">
								<video
									className="h-full w-full object-cover"
									autoPlay
									loop
									muted
									playsInline
									poster="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
								>
									<source
										src="https://cdn.coverr.co/videos/coverr-holiday-window-1577/1080p.mp4"
										type="video/mp4"
									/>
								</video>
							</div>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent" />
							<div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between text-sm text-slate-100">
								<div>
									<p className="font-semibold">Behind the scenes</p>
									<p className="text-slate-200/80">Micro-interactions + lighting tests</p>
								</div>
								<span className="rounded-full bg-amber-300/80 px-3 py-1 text-slate-950 font-semibold">Live</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="projects" className="px-6 pb-24 sm:px-10 lg:px-16">
				<div className="flex items-center justify-between gap-4 mb-8">
					<div>
						<p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Projects</p>
						<h2 className="text-3xl sm:text-4xl font-semibold text-slate-50">Featured builds</h2>
					</div>
					<span className="text-sm text-slate-300/80">4 projects • crafted with care</span>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
					{projects.map((project) => (
						<Link
							key={project.href}
							href={project.href}
							className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-6 shadow-xl transition hover:-translate-y-1 hover:border-amber-200/40 hover:shadow-amber-200/10"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent opacity-0 transition group-hover:opacity-100" />
							<div className="relative flex flex-col gap-4">
								<div className="flex items-center gap-3">
									<span className="rounded-full bg-amber-300/20 px-3 py-1 text-amber-100 text-xs font-semibold">
										New
									</span>
									<div className="flex gap-2 text-xs text-slate-200/80">
										{project.tags.map((tag) => (
											<span key={tag} className="rounded-full border border-slate-600/60 px-3 py-1">
												{tag}
											</span>
										))}
									</div>
								</div>
								<h3 className="text-2xl font-semibold text-slate-50">{project.title}</h3>
								<p className="text-slate-200/90 leading-relaxed">{project.summary}</p>
								<div className="flex items-center gap-2 text-sm font-medium text-amber-200">
									<span>See the build</span>
									<span className="transition group-hover:translate-x-1">→</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}
