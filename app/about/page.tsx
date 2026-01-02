import Link from "next/link";

const faqs = [
	{ question: "How fast is turnaround?", answer: "Most brand films deliver in 10–14 days; photo sets in 5–7." },
	{ question: "Do you travel?", answer: "Yes—available for travel across the US and EU with streamlined packing lists." },
	{ question: "How do you price?", answer: "Scoped by deliverables and usage. Flat project fees with clear milestones." },
];

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-slate-950 text-slate-50">
			<section className="relative isolate overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
				<div className="absolute inset-0" aria-hidden>
					<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/30" />
					<img
						src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
						alt="Studio background"
						className="h-full w-full object-cover opacity-20"
						loading="lazy"
					/>
				</div>

				<div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
					<div className="space-y-6">
						<p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">About</p>
						<h1 className="text-4xl sm:text-5xl font-semibold leading-tight max-w-3xl">
							Human-first visuals for brands that want to feel alive.
						</h1>
						<p className="text-lg text-slate-200/85 max-w-2xl">
							I’m Josie, a videographer and photographer who blends cinematic pacing with candid realism. I like
							quiet prep, fast sets, and stories that breathe. Brands trust me when they need small-footprint crews
							and deliverables that move quickly.
						</p>
						<div className="flex flex-wrap gap-4">
							<Link
								href="#contact"
								className="rounded-full bg-amber-300 px-6 py-3 text-slate-950 font-semibold shadow-lg shadow-amber-200/30 transition hover:-translate-y-0.5"
							>
								Let’s work together
							</Link>
							<a
								href="mailto:hello@example.com"
								className="rounded-full border border-slate-500/60 px-6 py-3 font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-amber-200 hover:text-amber-200"
							>
								Email Josie
							</a>
						</div>
					</div>

					<div className="grid gap-6 sm:grid-cols-2">
						<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
							<img
								src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
								alt="Portrait"
								className="h-full w-full object-cover"
								loading="lazy"
							/>
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 via-transparent p-4 text-sm">
								<p className="font-semibold">Josie Hart</p>
								<p className="text-slate-200/80">Director / DP / Photographer</p>
							</div>
						</div>

						<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
							<video
								className="h-full w-full object-cover"
								autoPlay
								loop
								muted
								playsInline
								poster="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"
							>
								<source
									src="https://cdn.coverr.co/videos/coverr-behind-the-scenes-9685/1080p.mp4"
									type="video/mp4"
								/>
							</video>
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 via-transparent p-4 text-sm">
								<p className="font-semibold">Behind the scenes</p>
								<p className="text-slate-200/80">Handheld b-roll + light test</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="px-6 py-16 sm:px-10 lg:px-16 bg-slate-900/60 border-t border-white/5" aria-labelledby="approach">
				<div className="grid gap-10 lg:grid-cols-3">
					<div className="space-y-3 lg:col-span-1">
						<p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Approach</p>
						<h2 id="approach" className="text-3xl font-semibold">How I work</h2>
						<p className="text-slate-200/80 text-sm">
							Lean crews, natural light when possible, and fast edits with clear check-ins. I keep sets calm so talent
							feels like themselves, not like they’re in a production machine.
						</p>
					</div>

					<div className="lg:col-span-2 grid gap-4 sm:grid-cols-3">
						{["Pre-pro & story", "On-set direction", "Edit + grade"].map((item) => (
							<div key={item} className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 shadow-lg">
								<h3 className="text-lg font-semibold mb-2">{item}</h3>
								<p className="text-sm text-slate-200/75">
									Clean briefs, simple shotlists, and open notes so you always know what’s next.
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="contact" className="px-6 py-16 sm:px-10 lg:px-16" aria-labelledby="contact-heading">
				<div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
					<div className="space-y-6">
						<p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Contact</p>
						<h2 id="contact-heading" className="text-3xl sm:text-4xl font-semibold">Let’s make something vivid</h2>
						<p className="text-slate-200/80 text-sm">
							Tell me about the project, timeline, and where you are based. I respond within one business day.
						</p>
						<div className="space-y-2 text-sm text-slate-200/80">
							<p>Email: <a className="text-amber-200 hover:text-amber-100" href="mailto:hello@example.com">hello@example.com</a></p>
							<p>Location: Denver, USA → available to travel</p>
							<div className="flex flex-wrap gap-3">
								<a className="rounded-full border border-white/10 px-3 py-1 text-xs hover:border-amber-200 hover:text-amber-200" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
								<a className="rounded-full border border-white/10 px-3 py-1 text-xs hover:border-amber-200 hover:text-amber-200" href="https://vimeo.com" target="_blank" rel="noreferrer">Vimeo</a>
								<a className="rounded-full border border-white/10 px-3 py-1 text-xs hover:border-amber-200 hover:text-amber-200" href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
								<a className="rounded-full border border-white/10 px-3 py-1 text-xs hover:border-amber-200 hover:text-amber-200" href="https://calendly.com" target="_blank" rel="noreferrer">Book a call</a>
							</div>
						</div>
					</div>

					<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl">
						<form className="grid gap-4">
							<div className="grid gap-2">
								<label className="text-sm font-semibold" htmlFor="name">Name</label>
								<input id="name" name="name" type="text" className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-50 placeholder:text-slate-400 focus:border-amber-200 focus:outline-none" placeholder="Your name" />
							</div>
							<div className="grid gap-2">
								<label className="text-sm font-semibold" htmlFor="email">Email</label>
								<input id="email" name="email" type="email" className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-50 placeholder:text-slate-400 focus:border-amber-200 focus:outline-none" placeholder="you@email.com" />
							</div>
							<div className="grid gap-2">
								<label className="text-sm font-semibold" htmlFor="type">Project type</label>
								<select id="type" name="type" className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-50 focus:border-amber-200 focus:outline-none">
									<option>Brand film</option>
									<option>Product launch</option>
									<option>Social campaign</option>
									<option>Event recap</option>
									<option>Photo campaign</option>
									<option>Other</option>
								</select>
							</div>
							<div className="grid gap-2">
								<label className="text-sm font-semibold" htmlFor="location">Location (city / country)</label>
								<input id="location" name="location" type="text" className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-50 placeholder:text-slate-400 focus:border-amber-200 focus:outline-none" placeholder="Denver, USA" />
							</div>
							<div className="grid gap-2">
								<label className="text-sm font-semibold" htmlFor="message">Project details</label>
								<textarea id="message" name="message" rows={4} className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-50 placeholder:text-slate-400 focus:border-amber-200 focus:outline-none" placeholder="Timeline, deliverables, vibe."></textarea>
							</div>
							<button type="submit" className="mt-2 rounded-full bg-amber-300 px-6 py-3 text-slate-950 font-semibold shadow-lg shadow-amber-200/30 transition hover:-translate-y-0.5">
								Send message
							</button>
						</form>
					</div>
				</div>
			</section>

			<section className="px-6 pb-20 sm:px-10 lg:px-16" aria-labelledby="faq">
				<div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-xl">
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
						<div>
							<p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">FAQ</p>
							<h2 id="faq" className="text-3xl font-semibold">Quick answers</h2>
						</div>
						<a
							href="https://calendly.com"
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-slate-500/60 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-amber-200 hover:text-amber-200"
						>
							Book a call
						</a>
					</div>

				<div className="grid gap-4 md:grid-cols-3">
					{faqs.map((item) => (
						<div key={item.question} className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 shadow-lg">
							<h3 className="text-lg font-semibold mb-2">{item.question}</h3>
							<p className="text-sm text-slate-200/80">{item.answer}</p>
						</div>
					))}
				</div>
				</div>
			</section>
		</main>
	);
}
