import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { products, heroImage } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import {
  CowIcon,
  HoneycombIcon,
  LeafIcon,
  ScallopDivider,
  WheatIcon,
} from "@/components/site/icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farmkala — Nothing Refined. Nothing Rushed." },
      {
        name: "description",
        content:
          "Bilona-churned A2 ghee, kachi-ghani cold-pressed mustard oils and raw hive honey — small batches, farm-direct, always in glass.",
      },
      { property: "og:title", content: "Farmkala — Nothing Refined. Nothing Rushed." },
      {
        property: "og:description",
        content:
          "Heritage-process A2 ghee, cold-pressed mustard oils and raw honey from Indian farms.",
      },
    ],
  }),
  component: Home,
});

const trust = [
  {
    Icon: LeafIcon,
    title: "Bilona-Churned, Kachi-Ghani Pressed",
    text: "No heat shortcuts, no solvents.",
  },
  {
    Icon: CowIcon,
    title: "True A2 Desi Cow Purity",
    text: "Only indigenous A2 cow milk, nothing blended in.",
  },
  { Icon: HoneycombIcon, title: "Zero Plastic, Ever", text: "Every product ships in glass." },
  {
    Icon: WheatIcon,
    title: "Farm-Direct, Small Batch",
    text: "Sourced from named farms and hives.",
  },
];

const comparison = [
  {
    row: "Ghee Making",
    ours: "Hand-churned over days, cultured curd to butter to ghee.",
    theirs: "Centrifuge-separated from cream in a few hours.",
  },
  {
    row: "Oil Pressing",
    ours: "Slow, low-temperature kachi-ghani wood pressing.",
    theirs: "Heat- and solvent-extracted, then refined and deodorised.",
  },
  {
    row: "Honey",
    ours: "Cold-extracted, crystallizes naturally in the jar.",
    theirs: "Heated and filtered to prevent crystallization.",
  },
];

const reviews = [
  {
    quote:
      "The ghee smells like my grandmother's kitchen in Kanpur. Grainy at the top, deep yellow, and one spoon is enough for a whole dal.",
    name: "Ananya Rao",
    city: "Bengaluru",
  },
  {
    quote:
      "Black mustard oil that actually catches at the back of your throat. My fish curry finally tastes the way it should.",
    name: "Debjani Sen",
    city: "Kolkata",
  },
  {
    quote:
      "The honey set into crystals within a month and I was thrilled — that's how I knew nothing had been cooked out of it.",
    name: "Vikram Joshi",
    city: "Pune",
  },
];

function Home() {
  const [index, setIndex] = useState(0);
  const review = reviews[index] ?? reviews[0]!;

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <img
          src={heroImage}
          alt="The full Farmkala range — A2 cow ghee jars, yellow and black mustard oil bottles, and raw honey — on dark wood against palm fronds"
          className="h-[78vh] min-h-[520px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-5">
            <div className="max-w-xl text-primary-foreground">
              <p className="eyebrow text-accent">Est. 2021 · Work for Earth</p>
              <h1 className="mt-5 font-display text-4xl leading-tight text-primary-foreground sm:text-6xl">
                Nothing Refined. Nothing Rushed.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/85">
                Bilona-churned A2 ghee, kachi-ghani cold-pressed mustard oils, and raw hive honey —
                made in small batches, straight from Indian farms to your kitchen.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="rounded-xl squircle-md border border-accent bg-accent px-7 py-3 text-xs tracking-[0.22em] text-primary uppercase transition-all hover:bg-honey hover:border-honey"
                >
                  Shop the Harvest
                </Link>
                <Link
                  to="/our-story"
                  className="rounded-xl squircle-md border border-primary-foreground/60 px-7 py-3 text-xs tracking-[0.22em] text-primary-foreground uppercase transition-all hover:border-accent hover:text-accent"
                >
                  See How It's Made
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="grain border-y border-accent/40 bg-secondary/15">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="flex flex-col items-center gap-3 text-center rounded-2xl squircle-lg border border-accent/20 bg-background/50 p-6 backdrop-blur-xs transition-colors hover:border-accent/40">
                <Icon className="h-11 w-11 text-primary" />
                <h3 className="font-display text-lg leading-snug">{title}</h3>
                <p className="text-sm text-foreground/75">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal className="text-center">
          <p className="eyebrow">The Harvest</p>
          <h2 className="mt-3 font-display text-4xl">Four things, made properly</h2>
          <ScallopDivider className="mt-6" />
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Farmkala */}
      <section className="grain border-y border-accent/40 bg-secondary/15 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className="eyebrow">Why Farmkala</p>
            <h2 className="mt-3 font-display text-4xl">The difference is the method</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-12 overflow-x-auto rounded-3xl squircle-xl border border-accent/40 bg-card/60 p-6 sm:p-8 shadow-xs">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-accent/60">
                    <th className="py-4 pr-4 eyebrow font-normal">Process</th>
                    <th className="py-4 pr-4 font-display text-lg">Traditional (Farmkala)</th>
                    <th className="py-4 font-display text-lg text-foreground/60">Mass-Produced</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((c) => (
                    <tr key={c.row} className="border-b border-accent/30 align-top">
                      <td className="py-6 pr-4 font-display text-lg">{c.row}</td>
                      <td className="py-6 pr-4 text-sm leading-relaxed">{c.ours}</td>
                      <td className="py-6 text-sm leading-relaxed text-foreground/55">
                        {c.theirs}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-10 max-w-2xl text-center font-display text-xl leading-relaxed">
              "We accept the extra days, the extra pungency, and the occasional crystallized jar —
              because that's what real looks like."
            </p>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal className="text-center">
          <p className="eyebrow">From Our Kitchens</p>
          <h2 className="mt-3 font-display text-4xl">What people notice first</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl squircle-2xl rule-double bg-card p-8 text-center sm:p-12">
            <div className="flex justify-center gap-1 text-honey">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" strokeWidth={1} />
              ))}
            </div>
            <p className="mt-6 font-display text-xl leading-relaxed sm:text-2xl">
              "{review.quote}"
            </p>
            <p className="mt-6 text-xs tracking-[0.22em] uppercase text-foreground/70">
              {review.name} · {review.city}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            aria-label="Previous review"
            onClick={() => setIndex((i) => (i - 1 + reviews.length) % reviews.length)}
            className="grid h-10 w-10 place-items-center rounded-2xl squircle-md border border-accent/60 text-primary transition-colors hover:border-honey hover:text-honey"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.25} />
          </button>
          <div className="flex gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                aria-label={`Review ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-8 rounded-full squircle-full transition-all ${i === index ? "bg-accent" : "bg-accent/30"}`}
              />
            ))}
          </div>
          <button
            aria-label="Next review"
            onClick={() => setIndex((i) => (i + 1) % reviews.length)}
            className="grid h-10 w-10 place-items-center rounded-2xl squircle-md border border-accent/60 text-primary transition-colors hover:border-honey hover:text-honey"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.25} />
          </button>
        </div>

        <ScallopDivider className="my-16" />

        <Reveal>
          <h3 className="text-center font-display text-3xl">Pair It With</h3>
          <div className="mt-10 grid gap-px rounded-3xl squircle-xl overflow-hidden border border-accent/40 bg-accent/40 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div key={p.slug} className="bg-background p-6">
                <p className="font-display text-lg">{p.name}</p>
                <p className="mt-2 text-sm text-foreground/75">{p.pairing}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
