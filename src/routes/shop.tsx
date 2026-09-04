import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { ScallopDivider } from "@/components/site/icons";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Farmkala Ghee, Mustard Oils & Raw Honey" },
      {
        name: "description",
        content:
          "Browse Farmkala small-batch A2 Bilona ghee, black and yellow kachi-ghani mustard oils, and raw unfiltered honey — all in glass.",
      },
      { property: "og:title", content: "Shop — Farmkala" },
      {
        property: "og:description",
        content: "Small-batch A2 ghee, cold-pressed mustard oils and raw hive honey.",
      },
    ],
  }),
  component: Shop,
});

const tabs = ["All", "Ghee", "Oils", "Honey"] as const;

function Shop() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const list = tab === "All" ? products : products.filter((p) => p.category === tab);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="text-center">
        <p className="eyebrow">The Shop</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Everything we make</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-foreground/75">
          Four products, pressed and churned in small batches. Nothing refined, nothing rushed, and
          nothing that ships in plastic.
        </p>
        <ScallopDivider className="mt-6" />
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-xl squircle-md border px-6 py-2.5 text-xs tracking-[0.22em] uppercase transition-all ${
              tab === t
                ? "border-primary bg-primary text-primary-foreground shadow-xs"
                : "border-accent/60 text-primary hover:border-honey hover:bg-card hover:text-honey"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <Reveal key={p.slug} delay={i * 70}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
