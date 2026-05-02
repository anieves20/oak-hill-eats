import { useState } from "react";
import { menu } from "@/data/menu";

const tabColors = ["bg-tomato text-paper", "bg-mustard text-ink", "bg-pickle text-paper", "bg-teal text-paper", "bg-pink text-ink", "bg-paper text-ink"];

export const MenuSection = () => {
  const [active, setActive] = useState(menu[0].id);
  const current = menu.find((m) => m.id === active)!;

  return (
    <section id="menu" className="py-16 sm:py-20 md:py-28 bg-paper border-y-[3px] border-ink">
      <div className="container">
        <div className="text-center mb-10 sm:mb-14">
          <div className="stamp mx-auto mb-4">Fresh · Made to Order</div>
          <h2 className="font-chunky text-5xl sm:text-6xl md:text-8xl text-ink leading-none">
            THE <span className="text-tomato">MENU</span>
          </h2>
          <p className="font-serif-italic text-base sm:text-lg text-ink/70 mt-3 max-w-xl mx-auto px-4">
            Boar's Head cold cuts, breakfast all day, tacos & aguas frescas.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {menu.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-3 sm:px-4 py-2 font-chunky tracking-wider text-xs sm:text-sm border-[3px] border-ink transition-all shadow-[3px_3px_0_hsl(var(--ink))] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_hsl(var(--ink))] ${
                active === s.id ? tabColors[idx % tabColors.length] : "bg-paper text-ink"
              }`}
            >
              {s.title.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Menu card */}
        <div className="block-card max-w-4xl mx-auto p-5 sm:p-8 md:p-12 relative">
          <div className="absolute -top-4 left-6 right-6 h-2 bg-ink" aria-hidden />
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="font-chunky text-3xl sm:text-4xl md:text-5xl text-tomato">{current.title.toUpperCase()}</h3>
            {current.subtitle && (
              <p className="font-serif-italic text-ink/60 mt-2 text-sm sm:text-base">{current.subtitle}</p>
            )}
          </div>

          {current.twoCol && (
            <div className="hidden sm:grid grid-cols-[1fr_auto_auto] gap-x-8 pb-2 mb-2 border-b-2 border-ink text-[0.65rem] uppercase tracking-widest font-chunky">
              <span>Item</span>
              <span className="w-20 text-right">{current.twoCol.rollLabel}</span>
              <span className="w-20 text-right">{current.twoCol.subLabel}</span>
            </div>
          )}

          <ul className="divide-y-2 divide-dotted divide-ink/30">
            {current.items.map((it) => (
              <li key={it.name} className="py-3">
                {current.twoCol ? (
                  <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_auto] gap-x-4 sm:gap-x-8 items-baseline">
                    <div>
                      <span className="font-bold text-sm sm:text-base">{it.name}</span>
                      {it.note && <p className="text-xs text-ink/60 italic mt-1">{it.note}</p>}
                      <div className="sm:hidden mt-1 flex gap-3 text-xs font-mono">
                        {it.priceRoll && it.priceRoll !== "—" && <span><span className="opacity-60">Roll</span> <span className="font-chunky text-tomato text-base">${it.priceRoll}</span></span>}
                        {it.priceSub && it.priceSub !== "—" && <span><span className="opacity-60">Sub</span> <span className="font-chunky text-tomato text-base">${it.priceSub}</span></span>}
                      </div>
                    </div>
                    <span className="hidden sm:inline font-chunky text-lg text-tomato w-20 text-right">{it.priceRoll && it.priceRoll !== "—" ? `$${it.priceRoll}` : "—"}</span>
                    <span className="hidden sm:inline font-chunky text-lg text-tomato w-20 text-right">{it.priceSub && it.priceSub !== "—" ? `$${it.priceSub}` : "—"}</span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-3">
                    <span className="font-bold text-sm sm:text-base">{it.name}</span>
                    <span className="flex-1 border-b-2 border-dotted border-ink/30 translate-y-[-4px]" />
                    <span className="font-chunky text-lg sm:text-xl text-tomato">{it.price === "Market" || it.price === "Mkt" ? it.price : `$${it.price}`}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-6 sm:mt-8 text-center text-[0.65rem] sm:text-xs uppercase tracking-widest text-ink/60 font-mono">
            Prices subject to change · Precios sujetos a cambios
          </p>
        </div>
      </div>
    </section>
  );
};