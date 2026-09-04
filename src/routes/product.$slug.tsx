import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { products } from "@/lib/products";
import { Reveal } from "@/components/site/Reveal";
import {
  BeeIcon,
  CowIcon,
  GheePotIcon,
  HoneycombIcon,
  LeafIcon,
  MustardIcon,
  WheatIcon,
  ScallopDivider,
} from "@/components/site/icons";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product unavailable — Farmkala" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — Farmkala`;
    return {
      meta: [
        { title },
        { name: "description", content: product.blurb.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: product.blurb.slice(0, 155) },
      ],
    };
  },
  component: ProductPage,
});

type Blocks = {
  benefits: { Icon: typeof LeafIcon; label: string }[];
  details: { q: string; a: string }[];
  faqs: { q: string; a: string }[];
};

const content: Record<string, Blocks> = {
  Ghee: {
    benefits: [
      { Icon: LeafIcon, label: "Gut-Friendly by Design" },
      { Icon: GheePotIcon, label: "Traditional Bilona Method" },
      { Icon: CowIcon, label: "Pure A2 Desi Cow Sourcing" },
      { Icon: HoneycombIcon, label: "Deep Aroma, Visible Grain" },
    ],
    details: [
      {
        q: "How It's Made",
        a: "Fresh A2 desi cow milk is cultured overnight into curd, hand-churned into makkhan with a wooden bilona, then simmered slowly until the solids caramelise and the ghee turns clear gold. Roughly 30 litres of milk go into every litre of ghee.",
      },
      {
        q: "Storage & Usage Tips",
        a: "Keep the jar tightly closed at room temperature, away from direct sun, and always use a dry spoon. No refrigeration needed. Ghee holds up to high-heat cooking — tadka, roasting, deep frying — without breaking down.",
      },
      {
        q: "Purity & Quality Assurance",
        a: "Single-source milk from named indigenous-breed herds, batch-coded jars, and lab checks for moisture, free fatty acids and adulterants on every batch. No palm oil, no vanaspati, no colour, no essence.",
      },
    ],
    faqs: [
      {
        q: "How is A2 ghee different from regular ghee?",
        a: "A2 ghee is made only from indigenous desi cow milk, which carries the A2 beta-casein protein. Most market ghee blends buffalo and crossbred cow milk, and much of it is separated by machine from cream rather than churned from cultured curd.",
      },
      {
        q: "Why does the texture vary between batches?",
        a: "Grain depends on the season, the herd's feed, and how quickly the ghee cools. Winter jars set firmer and more granular; summer jars stay softer and sometimes liquid. Both are the same ghee.",
      },
      {
        q: "How much should I use daily?",
        a: "For most adults, one to two teaspoons a day across meals is plenty — a spoon in dal, a smear on roti, or a tempering for rice.",
      },
    ],
  },
  Oils: {
    benefits: [
      { Icon: MustardIcon, label: "Kachi-Ghani Cold Pressed" },
      { Icon: LeafIcon, label: "Unrefined, Undeodorised" },
      { Icon: WheatIcon, label: "Single-Origin Mustard Seed" },
      { Icon: GheePotIcon, label: "Full Pungency, Deep Colour" },
    ],
    details: [
      {
        q: "How It's Made",
        a: "Cleaned mustard seed is crushed slowly in a wooden ghani. The press turns cool, so nothing in the oil is cooked off — it is then settled and cloth-filtered, never refined, bleached or deodorised.",
      },
      {
        q: "Storage & Usage Tips",
        a: "Store in a cool, dark cupboard with the cap closed; a little sediment at the bottom is normal. Heat the oil to smoking point once before cooking to mellow the sharpness, the way most Indian kitchens do.",
      },
      {
        q: "Purity & Quality Assurance",
        a: "Single-origin seed, batch-coded bottles, and testing for argemone, mineral oil and free fatty acids on every press. No blending with refined oils.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between black and yellow mustard oil?",
        a: "Black seed presses sharper and more pungent — the classic Bengali and pickling oil. Yellow seed is milder and lighter, better for everyday tadka and sautéing.",
      },
      {
        q: "Why does it smell so strong?",
        a: "That bite is allyl isothiocyanate, which survives only in cold-pressed oil. Refined mustard oil has it stripped out, along with most of the flavour.",
      },
      {
        q: "Can I use it for deep frying?",
        a: "Yes. Mustard oil has a high smoke point and is traditionally used for frying fish, pakoras and puris.",
      },
    ],
  },
  Honey: {
    benefits: [
      { Icon: BeeIcon, label: "Raw and Unheated" },
      { Icon: HoneycombIcon, label: "Cloth-Strained Only" },
      { Icon: LeafIcon, label: "Enzymes Left Intact" },
      { Icon: WheatIcon, label: "Single-Season Floral Source" },
    ],
    details: [
      {
        q: "How It's Made",
        a: "Combs are spun at room temperature and the honey is strained through cloth to remove wax alone. No heating, no pressure filtering, no added glucose or syrup.",
      },
      {
        q: "Storage & Usage Tips",
        a: "Keep at room temperature with a dry spoon; never refrigerate. If it crystallizes, stand the jar in warm — not hot — water to loosen it. Stir into warm drinks rather than boiling ones.",
      },
      {
        q: "Purity & Quality Assurance",
        a: "Batch-coded jars, moisture-tested for shelf stability, and screened for added sugars. Colour and taste shift with the season's flowering, and we don't blend to hide it.",
      },
    ],
    faqs: [
      {
        q: "Why has my honey turned solid?",
        a: "Crystallization is what raw honey does. Processed honey stays liquid because it is heated and micro-filtered — the very steps that strip enzymes and aroma.",
      },
      {
        q: "Is it safe for children?",
        a: "Yes, above one year of age. Raw honey should never be given to infants under twelve months.",
      },
      {
        q: "Why does each batch taste different?",
        a: "The bees forage whatever is flowering. Mustard-season honey is pale and quick to set; later batches run darker and fruitier.",
      },
    ],
  },
};

const cardIcons = { cow: CowIcon, mustard: MustardIcon, bee: BeeIcon };

function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div
          key={item.q}
          className="rounded-2xl squircle-lg border border-accent/30 bg-card/50 transition-colors"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 p-5 text-left"
          >
            <span className="font-display text-lg">{item.q}</span>
            {open === i ? (
              <Minus className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.25} />
            ) : (
              <Plus className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.25} />
            )}
          </button>
          {open === i && (
            <p className="px-5 pb-5 text-sm leading-relaxed text-foreground/80">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  const gallery = product.gallery.length > 0 ? product.gallery : [product.image];
  const [active, setActive] = useState(0);
  const [size, setSize] = useState(product.sizes[0]);
  const Icon = cardIcons[product.icon];
  const isGhee = product.category === "Ghee";
  const { benefits, details, faqs } = content[product.category] ?? content["Ghee"]!;

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-12">
        <p className="text-xs tracking-[0.2em] uppercase text-foreground/60">
          <Link to="/shop" className="hover:text-honey">
            Shop
          </Link>{" "}
          / {product.name}
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="overflow-hidden rounded-3xl squircle-2xl border border-accent/50 shadow-xs">
              <img
                src={gallery[active]}
                alt={`Farmkala ${product.name}`}
                className="h-[520px] w-full object-cover transition-transform duration-700 ease-g3"
              />
            </div>
            {gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {gallery.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setActive(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`h-24 overflow-hidden rounded-2xl squircle-md border transition-all duration-300 ease-g3 ${
                      active === i
                        ? "border-honey ring-2 ring-honey/40"
                        : "border-accent/40 hover:border-accent"
                    }`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-3">
              <Icon className="h-8 w-8 text-primary" />
              <p className="eyebrow">{product.category} · Small Batch</p>
            </div>
            <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              {isGhee ? "A2 Cow Ghee — Bilona Churned" : product.name}
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-foreground/80">
              {isGhee
                ? "Golden, granular, and deeply aromatic — our A2 Cow Ghee is hand-churned the traditional Bilona way from cultured, indigenous A2 desi cow milk."
                : product.blurb}
            </p>

            <div className="mt-8">
              <p className="eyebrow">Size</p>
              <div className="mt-3 flex gap-3">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`rounded-xl squircle-md border px-6 py-2.5 text-xs tracking-[0.18em] uppercase transition-all ${
                      size === s
                        ? "border-primary bg-primary text-primary-foreground shadow-xs"
                        : "border-accent/60 text-primary hover:border-honey hover:bg-card hover:text-honey"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <Link
              to="/checkout"
              className="mt-8 inline-block w-full text-center rounded-xl squircle-md border border-accent bg-accent px-8 py-4 text-xs tracking-[0.24em] text-primary uppercase transition-all hover:border-honey hover:bg-honey shadow-xs sm:w-auto"
            >
              Add to Cart
            </Link>
            <p className="mt-3 text-xs text-foreground/60">
              Ships in glass. Dispatched within two working days.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 border-y border-accent/40 py-8">
              {benefits.map(({ Icon: B, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl squircle-md border border-accent/20 bg-background/50 p-4 backdrop-blur-xs"
                >
                  <B className="h-7 w-7 shrink-0 text-primary" />
                  <span className="text-sm leading-snug">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Accordion items={details} />
            </div>
          </div>
        </div>
      </section>

      <section className="grain border-t border-accent/40 bg-secondary/15 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <p className="eyebrow">Questions</p>
            <h2 className="mt-3 font-display text-3xl">Before you cook with it</h2>
            <ScallopDivider className="mt-6 mb-10" />
          </Reveal>
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}
