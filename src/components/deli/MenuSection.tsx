import { useState } from "react";
import { menu } from "@/data/menu";

export const MenuSection = () => {
  const [active, setActive] = useState(menu[0].id);
  const current = menu.find((m) => m.id === active)!;

  return (
    <section id="menu" className="py-20 md:py-28 bg-cream relative">
      <div className="container">
        <div className="text-center mb-12">
          <div className="deli-stamp mx-auto mb-4">Fresh · Made to Order</div>
          <h2 className="font-display text-5xl md:text-7xl text-deli-red">The Menu</h2>
          <p className="font-serif-display italic text-muted-foreground mt-3 max-w-xl mx-auto">
            Boar's Head cold cuts, breakfast all day, tacos &amp; aguas frescas. Prices subject to change.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {menu.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-4 py-2 font-display tracking-widest text-sm border-2 transition-all ${
                active === s.id
                  ? "bg-deli-red text-primary-foreground border-deli-red"
                  : "bg-paper text-ink border-border hover:border-deli-red"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div className="menu-card p-6 md:p-12 max-w-4xl mx-auto relative">
          <div className="absolute -top-3 left-8 right-8 h-3 bg-[repeating-linear-gradient(90deg,hsl(var(--deli-red))_0,hsl(var(--deli-red))_18px,transparent_18px,transparent_28px)]" />
          <div className="text-center mb-8">
            <h3 className="font-display text-4xl md:text-5xl text-deli-red">{current.title}</h3>
            {current.subtitle && (
              <p className="font-serif-display italic text-muted-foreground mt-2">{current.subtitle}</p>
            )}
          </div>

          {current.twoCol && (
            <div className="hidden sm:grid grid-cols-[1fr_auto_auto] gap-x-8 pb-2 mb-2 border-b border-foreground/30 text-xs uppercase tracking-widest font-bold text-muted-foreground">
              <span>Item</span>
              <span className="w-16 text-right">{current.twoCol.rollLabel}</span>
              <span className="w-16 text-right">{current.twoCol.subLabel}</span>
            </div>
          )}

          <ul className="divide-y divide-dotted divide-foreground/20">
            {current.items.map((it) => (
              <li key={it.name} className="py-3">
                {current.twoCol ? (
                  <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-x-8 items-baseline">
                    <div>
                      <span className="font-semibold">{it.name}</span>
                      {it.note && <p className="text-xs text-muted-foreground italic mt-1">{it.note}</p>}
                    </div>
                    <span className="font-display text-lg text-deli-red w-16 text-right">{it.priceRoll && it.priceRoll !== "—" ? `$${it.priceRoll}` : "—"}</span>
                    <span className="font-display text-lg text-deli-red w-16 text-right">{it.priceSub && it.priceSub !== "—" ? `$${it.priceSub}` : "—"}</span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-3">
                    <span className="font-semibold">{it.name}</span>
                    <span className="flex-1 border-b border-dotted border-foreground/30 translate-y-[-4px]" />
                    <span className="font-display text-lg text-deli-red">{it.price === "Market" || it.price === "Mkt" ? it.price : `$${it.price}`}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-xs uppercase tracking-widest text-muted-foreground">
            Prices subject to change · Precios sujetos a cambios
          </p>
        </div>
      </div>
    </section>
  );
};