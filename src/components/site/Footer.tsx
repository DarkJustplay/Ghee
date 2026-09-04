import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { LeafIcon, ScallopDivider } from "./icons";

export function Footer() {
  return (
    <footer className="grain border-t border-accent/40 bg-primary px-5 py-14 text-primary-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-3 text-center">
          <LeafIcon className="h-9 w-9 text-accent" />
          <p className="font-display text-3xl">Farmkala</p>
          <p className="eyebrow text-accent">Work for Earth</p>
        </div>

        <ScallopDivider className="my-9" />

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80">
            <Link
              to="/"
              className="rounded-xl squircle-sm px-3 py-1 hover:bg-forest/40 hover:text-accent transition-all"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="rounded-xl squircle-sm px-3 py-1 hover:bg-forest/40 hover:text-accent transition-all"
            >
              Shop
            </Link>
            <Link
              to="/our-story"
              className="rounded-xl squircle-sm px-3 py-1 hover:bg-forest/40 hover:text-accent transition-all"
            >
              Our Story
            </Link>
            <Link
              to="/contact"
              className="rounded-xl squircle-sm px-3 py-1 hover:bg-forest/40 hover:text-accent transition-all"
            >
              Contact
            </Link>
          </nav>
          <div className="flex gap-3 text-primary-foreground/80">
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-xl squircle-sm hover:bg-forest/40 hover:text-accent transition-all"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.25} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-xl squircle-sm hover:bg-forest/40 hover:text-accent transition-all"
            >
              <Facebook className="h-5 w-5" strokeWidth={1.25} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="grid h-9 w-9 place-items-center rounded-xl squircle-sm hover:bg-forest/40 hover:text-accent transition-all"
            >
              <Youtube className="h-5 w-5" strokeWidth={1.25} />
            </a>
          </div>
          <p className="text-xs tracking-[0.25em] text-accent uppercase">Est. 2021</p>
        </div>
      </div>
    </footer>
  );
}
