import { createFileRoute } from "@tanstack/react-router";
import { ScallopDivider } from "@/components/site/icons";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Farmkala — Orders, Bulk & Farm Visits" },
      {
        name: "description",
        content:
          "Write to Farmkala about orders, bulk enquiries or farm visits. We reply to every message within two working days.",
      },
      { property: "og:title", content: "Contact — Farmkala" },
      {
        property: "og:description",
        content: "Questions about orders, bulk supply or farm visits? Write to us.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      <div className="text-center">
        <p className="eyebrow">Say Hello</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Contact</h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-foreground/75">
          Orders, bulk enquiries, or a visit to the press — write to us and we'll reply within two
          working days.
        </p>
        <ScallopDivider className="mt-6" />
      </div>

      <form
        className="mt-12 rounded-3xl squircle-2xl rule-double bg-card p-8 sm:p-10 shadow-xs"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="eyebrow block">Name</span>
            <input className="mt-2 w-full rounded-xl squircle-md border border-accent/50 bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-honey" />
          </label>
          <label className="block text-sm">
            <span className="eyebrow block">Email</span>
            <input
              type="email"
              className="mt-2 w-full rounded-xl squircle-md border border-accent/50 bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-honey"
            />
          </label>
        </div>
        <label className="mt-6 block text-sm">
          <span className="eyebrow block">Message</span>
          <textarea
            rows={5}
            className="mt-2 w-full rounded-xl squircle-md border border-accent/50 bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-honey"
          />
        </label>
        <button className="mt-8 rounded-xl squircle-md border border-primary bg-primary px-8 py-3.5 text-xs tracking-[0.22em] text-primary-foreground uppercase transition-all hover:bg-secondary shadow-xs">
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center text-sm text-foreground/70">
        <p>hello@farmkala.in</p>
        <p className="mt-1">www.farmkala.in</p>
      </div>
    </section>
  );
}
