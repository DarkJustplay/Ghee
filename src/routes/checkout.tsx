import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { ScallopDivider } from "@/components/site/icons";
import { products } from "@/lib/products";
import { ChevronRight, CreditCard, ShieldCheck, Truck } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  component: Checkout,
});

function Checkout() {
  const [step, setStep] = useState(1);
  const cartItem = products[0]!; // Simulating one item in cart for demo

  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="text-center">
        <p className="eyebrow">Secure Checkout</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Finalize Your Harvest</h1>
        <ScallopDivider className="mt-6" />
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${step >= 1 ? 'border-primary bg-primary text-primary-foreground' : 'border-accent/30'}`}>1</div>
            <div className="h-px flex-1 bg-accent/30" />
            <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${step >= 2 ? 'border-primary bg-primary text-primary-foreground' : 'border-accent/30'}`}>2</div>
            <div className="h-px flex-1 bg-accent/30" />
            <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${step >= 3 ? 'border-primary bg-primary text-primary-foreground' : 'border-accent/30'}`}>3</div>
          </div>

          <Reveal>
            <div className="rounded-3xl squircle-xl border border-accent/40 bg-card p-6 sm:p-10">
              <h2 className="font-display text-2xl mb-6">Shipping Details</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-xs eyebrow">First Name</label>
                  <input type="text" className="rounded-xl border border-accent/40 bg-background/50 p-3 outline-hidden focus:border-honey" placeholder="Arjun" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs eyebrow">Last Name</label>
                  <input type="text" className="rounded-xl border border-accent/40 bg-background/50 p-3 outline-hidden focus:border-honey" placeholder="Sharma" />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-xs eyebrow">Full Address</label>
                  <input type="text" className="rounded-xl border border-accent/40 bg-background/50 p-3 outline-hidden focus:border-honey" placeholder="Apartment, Street, Area" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs eyebrow">City</label>
                  <input type="text" className="rounded-xl border border-accent/40 bg-background/50 p-3 outline-hidden focus:border-honey" placeholder="New Delhi" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs eyebrow">PIN Code</label>
                  <input type="text" className="rounded-xl border border-accent/40 bg-background/50 p-3 outline-hidden focus:border-honey" placeholder="110001" />
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="mt-10 w-full flex items-center justify-center gap-3 rounded-xl squircle-md bg-primary py-4 text-xs tracking-[0.24em] text-primary-foreground uppercase transition-all hover:bg-forest/90"
              >
                Continue to Payment <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="rounded-3xl squircle-xl border border-accent/40 bg-secondary/10 p-8">
            <h3 className="font-display text-xl mb-6">Order Summary</h3>
            <div className="flex gap-4 mb-6">
              <div className="h-20 w-20 overflow-hidden rounded-xl squircle-md border border-accent/30">
                <img src={cartItem.image} alt={cartItem.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-display text-lg">{cartItem.name}</p>
                <p className="text-xs text-foreground/60">500ml · Qty: 1</p>
                <p className="mt-1 font-semibold">₹1,250</p>
              </div>
            </div>

            <div className="space-y-3 border-t border-accent/30 pt-6">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹1,250</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span className="text-honey">Free</span>
              </div>
              <div className="flex justify-between font-display text-xl pt-3 border-t border-accent/30">
                <span>Total</span>
                <span>₹1,250</span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-foreground/70">
                <Truck className="h-4 w-4 text-honey" />
                <span>Delivered in 2-4 working days</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-foreground/70">
                <ShieldCheck className="h-4 w-4 text-honey" />
                <span>Quality Tested & Batch Coded</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-foreground/70">
                <CreditCard className="h-4 w-4 text-honey" />
                <span>Secure SSL Encrypted Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
