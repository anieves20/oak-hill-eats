import heroImg from "@/assets/hero-deli.jpg";
import { MapPin, Phone, Clock } from "lucide-react";

export const Hero = () => (
  <section id="top" className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Inside Oak Hill Deli, Freehold NJ" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/85" />
    </div>
    <div className="relative container py-24 md:py-36 text-paper">
      <div className="deli-stamp mb-6 !bg-paper/90">Est. 2020 · Freehold, NJ</div>
      <h1 className="font-display text-6xl sm:text-7xl md:text-9xl leading-[0.9] text-mustard drop-shadow-[0_4px_0_hsl(var(--deli-red-deep))]">
        OAK HILL<br/>DELI
      </h1>
      <p className="font-serif-display italic text-xl md:text-2xl mt-6 max-w-2xl text-paper/90">
        "Best bacon egg cheese in New Jersey, hands down."
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a href="#menu" className="px-7 py-3 bg-mustard text-ink font-display text-xl tracking-wider hover:translate-y-[-2px] transition-transform shadow-[var(--shadow-stamp)]">
          See the Menu
        </a>
        <a href="tel:7324628555" className="px-7 py-3 border-2 border-paper text-paper font-display text-xl tracking-wider hover:bg-paper hover:text-ink transition-colors">
          Call to Order
        </a>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl text-sm">
        <div className="flex items-start gap-3"><MapPin className="w-5 h-5 mt-0.5 text-mustard"/> 78 South St,<br/>Freehold, NJ 07728</div>
        <div className="flex items-start gap-3"><Phone className="w-5 h-5 mt-0.5 text-mustard"/> (732) 462-8555</div>
        <div className="flex items-start gap-3"><Clock className="w-5 h-5 mt-0.5 text-mustard"/> Open Daily<br/>until 10 PM</div>
      </div>
    </div>
  </section>
);