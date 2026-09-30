import { notFound } from "next/navigation";
import { CopyEmail } from "@/components/CopyEmail";
import { HeroVisual } from "@/components/HeroVisual";
import { ArrowIcon, CheckIcon, Logo, MailIcon, featureIcons } from "@/components/Icons";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { CONTACT_EMAIL, hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

function SectionHeader({ eyebrow, title, desc, center = true }: { eyebrow: string; title: string; desc?: string; center?: boolean }) {
  return (
    <Reveal className={`mb-14 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold tracking-widest text-azure uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-sky" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl">{title}</h2>
      {desc && <p className="mt-5 text-lg leading-relaxed text-ink-soft text-pretty">{desc}</p>}
    </Reveal>
  );
}

const featureAccents = [
  "from-amber-400 to-orange-500 shadow-amber-500/30",
  "from-sky-400 to-cyan-500 shadow-sky-500/30",
  "from-violet-500 to-fuchsia-500 shadow-violet-500/30",
  "from-blue-500 to-indigo-600 shadow-blue-500/30",
];

const appGradients = [
  "from-sky-100 to-blue-50",
  "from-orange-100 to-amber-50",
  "from-cyan-100 to-teal-50",
  "from-emerald-100 to-lime-50",
  "from-violet-100 to-indigo-50",
  "from-fuchsia-100 to-pink-50",
];

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(lang === "zh" ? "StarWeave 投资与合作咨询" : "StarWeave — Investment & Partnership")}`;

  return (
    <>
      <Nav lang={lang} t={t.nav} />

      <main>
        {/* Hero */}
        <section className="hero-bg relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
          <div className="grid-bg pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="fade-up">
                <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white bg-white/70 px-4 py-1.5 text-sm font-medium text-ink-soft shadow-sm backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sky" />
                  </span>
                  {t.hero.badge}
                </p>
              </div>
              <div className="fade-up" style={{ animationDelay: "80ms" }}>
                <h1 className="font-display text-[clamp(2rem,9vw,4.1rem)] leading-[1.1] font-bold tracking-tight lg:text-[clamp(2.5rem,5vw,4.1rem)]">
                  <span className="block">{t.hero.title1}</span>
                  <span className={`text-gradient block pb-2 ${lang === "zh" ? "whitespace-nowrap" : ""}`}>{t.hero.title2}</span>
                </h1>
              </div>
              <div className="fade-up" style={{ animationDelay: "160ms" }}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">{t.hero.desc}</p>
              </div>
              <div className="fade-up" style={{ animationDelay: "240ms" }}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#invest"
                    className="bg-brand group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white shadow-xl shadow-blue-500/30 transition hover:brightness-110"
                  >
                    {t.hero.primary}
                    <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#features"
                    className="inline-flex items-center rounded-full border border-line bg-white px-7 py-3.5 font-semibold text-ink shadow-sm transition hover:border-azure hover:text-azure"
                  >
                    {t.hero.secondary}
                  </a>
                </div>
              </div>
              <div className="fade-up" style={{ animationDelay: "320ms" }}>
                <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink-soft">
                  {t.hero.tags.map((tag) => (
                    <li key={tag} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet to-sky" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="float relative mx-auto aspect-square w-full max-w-[560px]">
              <HeroVisual />
            </div>
          </div>

          {/* Physical facts */}
          <div className="relative mx-auto mt-14 max-w-7xl px-5 sm:px-8">
            <div className="fade-up" style={{ animationDelay: "400ms" }}>
              <dl className="grid grid-cols-2 overflow-hidden rounded-3xl border border-white bg-white/70 shadow-xl shadow-blue-900/5 backdrop-blur lg:grid-cols-4">
                {t.facts.map((f, i) => (
                  <div key={f.label} className={`p-6 sm:p-8 ${i % 2 === 1 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}>
                    <dt className="font-display text-3xl font-bold sm:text-4xl">
                      <span className="text-gradient">{f.value}</span>
                      <span className="ml-1.5 text-lg font-semibold text-ink-soft">{f.unit}</span>
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{f.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeader eyebrow={t.vision.eyebrow} title={t.vision.title} desc={t.vision.desc} />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {t.vision.eq.map((e, i) => {
                const last = i === t.vision.eq.length - 1;
                return (
                  <Reveal key={e.code} delay={i * 90} className="relative">
                    {e.sym && (
                      <span className="absolute top-1/2 -left-5 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white font-display text-lg font-bold text-azure shadow-md lg:flex">
                        {e.sym}
                      </span>
                    )}
                    <div className={`card h-full p-7 ${last ? "bg-brand border-transparent text-white" : ""}`}>
                      <p className={`font-display text-sm font-bold tracking-widest ${last ? "text-white/80" : "text-azure"}`}>{e.code}</p>
                      <h3 className="mt-3 font-display text-2xl font-bold">{e.name}</h3>
                      <p className={`mt-3 leading-relaxed ${last ? "text-white/85" : "text-ink-soft"}`}>{e.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="relative bg-mist py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeader eyebrow={t.features.eyebrow} title={t.features.title} desc={t.features.desc} />
            <div className="grid gap-6 md:grid-cols-2">
              {t.features.items.map((f, i) => {
                const Icon = featureIcons[f.icon as keyof typeof featureIcons];
                return (
                  <Reveal key={f.title} delay={(i % 2) * 100}>
                    <article className="card group h-full overflow-hidden p-8 sm:p-10">
                      <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br from-blue-100 to-transparent opacity-70 transition group-hover:scale-125" />
                      <div className="relative flex items-start justify-between gap-4">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${featureAccents[i]}`}>
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className="font-display text-5xl font-bold text-blue-100">0{i + 1}</span>
                      </div>
                      <h3 className="relative mt-7 font-display text-2xl font-bold">{f.title}</h3>
                      <p className="relative mt-3 leading-relaxed text-ink-soft">{f.text}</p>
                      <p className="relative mt-6 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-azure ring-1 ring-blue-100">{f.tag}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeader eyebrow={t.how.eyebrow} title={t.how.title} desc={t.how.desc} />
            <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="absolute top-8 right-[12%] left-[12%] hidden h-0.5 bg-gradient-to-r from-violet via-sky to-sun lg:block" />
              {t.how.steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 100}>
                  <li className="relative text-center">
                    <div className="bg-brand relative mx-auto flex h-16 w-16 items-center justify-center rounded-full font-display text-xl font-bold text-white shadow-xl ring-8 shadow-blue-500/30 ring-white">
                      0{i + 1}
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                    <p className="mx-auto mt-2 max-w-xs leading-relaxed text-ink-soft">{s.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal className="mt-16">
              <div className="card p-8 sm:p-10">
                <h3 className="font-display text-lg font-bold">{t.how.compareTitle}</h3>
                <div className="mt-6 space-y-6">
                  <div>
                    <div className="mb-2 flex flex-wrap justify-between gap-2 text-sm">
                      <span className="font-semibold">{t.how.before}</span>
                      <span className="text-ink-soft">{t.how.beforeNote}</span>
                    </div>
                    <div className="h-4 overflow-hidden rounded-full bg-slate-100">
                      <div className="bar-grow h-full w-full rounded-full bg-gradient-to-r from-slate-300 to-slate-400" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex flex-wrap justify-between gap-2 text-sm">
                      <span className="font-semibold text-azure">{t.how.after}</span>
                      <span className="text-ink-soft">{t.how.afterNote}</span>
                    </div>
                    <div className="h-4 overflow-hidden rounded-full bg-slate-100">
                      <div className="bar-grow h-full w-[8%] rounded-full bg-gradient-to-r from-violet to-sky" style={{ animationDelay: "0.3s" }} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Applications */}
        <section id="apps" className="relative bg-mist py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeader eyebrow={t.apps.eyebrow} title={t.apps.title} desc={t.apps.desc} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.apps.items.map((a, i) => (
                <Reveal key={a.title} delay={(i % 3) * 90}>
                  <article className={`card h-full bg-gradient-to-br p-7 ${appGradients[i]}`}>
                    <span className="font-display text-sm font-bold text-azure">/ 0{i + 1}</span>
                    <h3 className="mt-4 font-display text-xl font-bold">{a.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">{a.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why now */}
        <section className="relative py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader eyebrow={t.why.eyebrow} title={t.why.title} center={false} />
            <div className="grid gap-5 sm:grid-cols-2">
              {t.why.items.map((w, i) => (
                <Reveal key={w.title} delay={i * 80}>
                  <div className="h-full border-l-2 border-sky/60 py-1 pl-6">
                    <h3 className="font-display text-xl font-bold">{w.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">{w.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="relative overflow-hidden bg-mist py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeader eyebrow={t.roadmap.eyebrow} title={t.roadmap.title} />
            <div className="relative mx-auto max-w-5xl">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {t.roadmap.steps.map((s, i) => (
                  <Reveal key={s.title} delay={i * 100}>
                    <div className="card h-full p-7 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 font-display font-bold text-azure">0{i + 1}</div>
                      <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal className="mt-8 flex justify-center">
                <div className="bg-brand inline-flex items-center gap-3 rounded-full px-6 py-3 font-display font-bold text-white shadow-xl shadow-blue-500/30">
                  <Logo className="h-6 w-6 rounded-full bg-white p-0.5" />
                  {t.roadmap.center}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Invest */}
        <section id="invest" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeader eyebrow={t.invest.eyebrow} title={t.invest.title} desc={t.invest.desc} />
            <div className="grid gap-6 lg:grid-cols-2">
              {t.invest.cards.map((c, i) => (
                <Reveal key={c.title} delay={i * 120}>
                  <article className="card flex h-full flex-col overflow-hidden p-8 sm:p-10">
                    <div className={`absolute inset-x-0 top-0 h-1.5 ${i === 0 ? "bg-gradient-to-r from-sun to-coral" : "bg-gradient-to-r from-violet to-sky"}`} />
                    <p className={`text-sm font-bold tracking-widest uppercase ${i === 0 ? "text-sun" : "text-violet"}`}>{c.kicker}</p>
                    <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{c.title}</h3>
                    <p className="mt-4 leading-relaxed text-ink-soft">{c.text}</p>
                    <ul className="mt-6 space-y-3">
                      {c.points.map((p) => (
                        <li key={p} className="flex items-center gap-3 font-medium">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-azure">
                            <CheckIcon className="h-3.5 w-3.5" />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={mailto}
                      className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-line px-5 py-2.5 font-semibold transition hover:border-azure hover:text-azure"
                    >
                      {t.invest.cta}
                      <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-5 pb-24 sm:px-8 sm:pb-32">
          <Reveal>
            <div className="bg-brand relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-16 text-center text-white shadow-2xl shadow-blue-500/30 sm:px-12 sm:py-24">
              <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-amber-300/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 -left-10 h-80 w-80 rounded-full bg-cyan-300/40 blur-3xl" />
              <div className="relative">
                <p className="text-sm font-semibold tracking-widest text-white/80 uppercase">{t.contact.eyebrow}</p>
                <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{t.contact.title}</h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{t.contact.desc}</p>
                <a href={mailto} className="mt-10 inline-flex items-center gap-3 font-display text-2xl font-bold break-all underline-offset-8 hover:underline sm:text-4xl">
                  <MailIcon className="h-8 w-8 shrink-0" />
                  {CONTACT_EMAIL}
                </a>
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  <a href={mailto} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-azure shadow-lg transition hover:bg-blue-50">
                    <MailIcon className="h-5 w-5" />
                    {t.contact.send}
                  </a>
                  <CopyEmail email={CONTACT_EMAIL} label={t.contact.copy} copiedLabel={t.contact.copied} />
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-ink-soft sm:flex-row sm:px-8">
          <div className="flex items-center gap-2.5">
            <Logo className="h-6 w-6" />
            <span className="font-display font-bold text-ink">StarWeave</span>
            <span className="hidden sm:inline">· {t.footer.tagline}</span>
          </div>
          <p>
            © {new Date().getFullYear()} StarWeave. {t.footer.rights}
          </p>
        </div>
      </footer>
    </>
  );
}
