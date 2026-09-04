import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { LeafIcon } from "./icons";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/our-story", label: "Our Story" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-accent/40 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:flex sm:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <LeafIcon className="h-7 w-7 shrink-0 text-accent" />
          <span className="min-w-0">
            <span className="block truncate font-display text-xl leading-none text-primary-foreground">
              Farmkala
            </span>
            <span className="block text-[0.55rem] tracking-[0.3em] text-accent uppercase">
              Work for Earth
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-accent bg-forest/50 font-normal" }}
              className="rounded-xl squircle-sm px-3 py-1.5 text-sm tracking-wide text-primary-foreground/85 transition-all hover:bg-forest/40 hover:text-accent"
            >
              {n.label}
            </Link>
          ))}
          <button
            aria-label="Cart"
            className="relative grid h-9 w-9 place-items-center rounded-xl squircle-sm text-primary-foreground/85 transition-colors hover:bg-forest/40 hover:text-accent"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </nav>

        <div className="flex items-center gap-2 sm:hidden">
          <button
            aria-label="Cart"
            className="grid h-9 w-9 place-items-center rounded-xl squircle-sm text-primary-foreground/85 hover:bg-forest/40"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.25} />
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-xl squircle-sm text-primary-foreground/85 hover:bg-forest/40"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.25} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.25} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-4 mb-4 flex flex-col gap-1 rounded-2xl squircle-lg border border-accent/30 bg-primary/95 p-3 backdrop-blur-xs sm:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="rounded-xl squircle-sm px-3 py-2 text-sm text-primary-foreground/85 hover:bg-forest/50 hover:text-accent"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
