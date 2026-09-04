import { createFileRoute, Link } from "@tanstack/react-router";
import { products, heroImage, groupImage } from "@/lib/products";
import { Reveal } from "@/components/site/Reveal";
import {
  ScallopDivider,
  CowIcon,
  MustardIcon,
  BeeIcon,
  LeafIcon,
  WheatIcon,
  GheePotIcon,
} from "@/components/site/icons";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — How Farmkala Makes Its Food" },
      {
        name: "description",
        content:
          "Bilona churning, kachi-ghani wood pressing and cold hive extraction: the three slow processes behind every Farmkala jar and bottle, since 2021.",
      },
      { property: "og:title", content: "Our Story — Farmkala" },
      {
        property: "og:description",
        content: "The three slow processes behind every Farmkala jar and bottle.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Story,
});

const steps = [
  {
    Icon: GheePotIcon,
    title: "Bilona Churning",
    time: "Three days per batch",
    body: "Whole A2 desi cow milk is set into curd overnight, hand-churned into makkhan, then simmered on a low flame until the milk solids brown and the ghee turns amber. Roughly 30 litres of milk make one litre of ghee. A centrifuge would do it in an hour; it would also strip the aroma we are churning for.",
  },
  {
    Icon: MustardIcon,
    title: "Kachi-Ghani Pressing",
    time: "Pressed cool, never heated",
    body: "Mustard seed is crushed slowly in a wooden ghani. The press stays cool enough that the pungency survives, so the oil goes into the bottle exactly as it left the seed — unrefined, undeodorised, unbleached. That sting in your nose is the point.",
  },
  {
    Icon: BeeIcon,
    title: "Cold Hive Extraction",
    time: "Room temperature, cloth-strained",
    body: "Honey is spun out of the comb at room temperature and strained through cloth only. Nothing is heated and nothing is thinned, so the enzymes stay intact and the jar crystallizes on its own schedule — usually by the second cold month.",
  },
];

const timeline = [
  {
    year: "2021",
    body: "Farmkala starts with two bilona pots and one herd of desi cows in the Doab belt.",
  },
  {
    year: "2022",
    body: "A wooden ghani is added, and the first kachi-ghani mustard oil goes out in glass.",
  },
  {
    year: "2024",
    body: "Beekeepers join from the mustard-flowering fields; raw honey enters the range.",
  },
  {
    year: "2026",
    body: "Four products, batch-coded, still made in small lots and still bottled by hand.",
  },
];

const values = [
  {
    Icon: LeafIcon,
    title: "Process over promise",
    body: "We describe how a thing is made, not how it makes you feel.",
  },
  {
    Icon: CowIcon,
    title: "Named sources",
    body: "Single-source milk from indigenous-breed herds we visit, not spot-market cream.",
  },
  {
    Icon: WheatIcon,
    title: "Seasonal, not standard",
    body: "Colour, grain and pungency shift with the season. We don't correct for it.",
  },
  {
    Icon: BeeIcon,
    title: "Glass, always",
    body: "No plastic anywhere in the pack, even where it costs us on freight.",
  },
];

function Story() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative border-b border-accent/40 px-4 py-6 sm:px-6">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl squircle-3xl border border-accent/40 shadow-xs">
          <div className="plate h-[420px] w-full sm:h-[520px] !rounded-none !border-none">
            <img src={heroImage} alt="The Farmkala range of ghee, mustard oil and honey" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--forest)_60%,transparent),color-mix(in_oklab,var(--forest)_82%,transparent))] px-5 text-center">
            <p className="eyebrow text-accent">Est. 2021</p>
            <h1 className="mt-3 font-display text-4xl text-primary-foreground sm:text-6xl">
              Work for Earth.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-primary-foreground/85">
              Farmkala began with a plain frustration: the ghee, oil and honey on urban shelves were
              made by machines built for speed, not for taste. We went back to the older methods and
              kept them, even where they cost us days.
            </p>
          </div>
        </div>
      </section>

      {/* Processes */}
      <section className="mx-auto max-w-4xl px-5 py-20">
        <Reveal className="text-center">
          <p className="eyebrow">The three slow processes</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Purity is a method, not a label
          </h2>
          <ScallopDivider className="mt-6 mb-4" />
        </Reveal>
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <div className="border-b border-accent/30 py-10">
              <div className="flex items-start gap-5">
                <s.Icon className="mt-1 h-10 w-10 shrink-0 text-primary" />
                <div>
                  <p className="eyebrow">
                    Step {String(i + 1).padStart(2, "0")} · {s.time}
                  </p>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl">{s.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">{s.body}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Timeline */}
      <section className="grain border-y border-accent/40 bg-secondary/15 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className="eyebrow">A short history</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Five years, four products</h2>
            <ScallopDivider className="mt-6 mb-12" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 80}>
                <div className="h-full rounded-2xl squircle-lg border border-accent/30 bg-background/60 p-6 backdrop-blur-xs transition-colors hover:border-accent/60 shadow-xs">
                  <p className="font-display text-3xl text-primary">{t.year}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values + portrait */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="plate rule-double h-[520px]">
              <img
                src={groupImage}
                alt="Farmkala jars and bottles on a wooden surface"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">What we hold to</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Four rules we don't bend</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl squircle-lg border border-accent/30 bg-card/60 p-6 shadow-xs"
                >
                  <v.Icon className="h-9 w-9 text-primary" />
                  <h3 className="mt-4 font-display text-xl">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{v.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quote */}
      <section className="grain border-y border-accent/40 bg-secondary/15 px-5 py-20 text-center">
        <Reveal>
          <p className="mx-auto max-w-3xl font-display text-2xl leading-relaxed text-primary sm:text-3xl">
            “We accept the extra days, the extra pungency, and the occasional crystallized jar —
            because that's what real looks like.”
          </p>
          <ScallopDivider className="mt-8" />
        </Reveal>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal className="text-center">
          <p className="eyebrow">Made this way</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">The four we make</h2>
          <ScallopDivider className="mt-6 mb-12" />
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <Link to="/product/$slug" params={{ slug: p.slug }} className="group block">
                <div className="plate h-64 rounded-2xl squircle-xl">
                  <img src={p.image} alt={`Farmkala ${p.name}`} loading="lazy" />
                </div>
                <h3 className="mt-4 font-display text-xl group-hover:text-honey">{p.name}</h3>
                <p className="mt-1 text-xs tracking-[0.18em] uppercase text-foreground/60">
                  {p.category}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-block rounded-xl squircle-md border border-accent bg-accent px-10 py-4 text-xs tracking-[0.24em] text-primary uppercase transition-all hover:border-honey hover:bg-honey shadow-xs"
          >
            Shop the Harvest
          </Link>
        </div>
      </section>
    </>
  );
}
