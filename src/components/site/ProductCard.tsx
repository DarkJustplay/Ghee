import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { BeeIcon, CowIcon, MustardIcon } from "./icons";

const icons = { cow: CowIcon, mustard: MustardIcon, bee: BeeIcon };

export function ProductCard({ product }: { product: Product }) {
  const Icon = icons[product.icon];
  return (
    <article className="group flex h-full flex-col rounded-3xl squircle-2xl overflow-hidden border border-accent/50 bg-card transition-[border-color,box-shadow] duration-500 hover:border-accent">
      <div className="relative overflow-hidden border-b border-accent/40">
        <img
          src={product.image}
          alt={`Farmkala ${product.name} in glass packaging`}
          loading="lazy"
          className="h-72 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-2xl squircle-md border border-accent/70 bg-background/90 text-primary shadow-xs backdrop-blur-xs">
          <Icon className="h-6 w-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="eyebrow">{product.category}</p>
        <h3 className="font-display text-2xl">{product.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-foreground/80">{product.blurb}</p>
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="mt-2 inline-flex w-fit items-center rounded-xl squircle-sm border border-accent/60 px-4 py-2 text-xs tracking-[0.22em] text-primary uppercase transition-colors hover:border-honey hover:bg-honey/10 hover:text-honey"
        >
          View Product
        </Link>
      </div>
    </article>
  );
}
