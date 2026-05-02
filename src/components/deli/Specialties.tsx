const items = [
  { tag: "#1 SELLER", title: "Bacon, Egg & Cheese", desc: "Crispy bacon, runny yolk, melted American on a fresh kaiser.", price: "4.99", bg: "bg-tomato", text: "text-paper" },
  { tag: "JERSEY CLASSIC", title: "Pork Roll, Egg & Cheese", desc: "Four crispy slices of pork roll. The reason you wake up.", price: "5.99", bg: "bg-mustard", text: "text-ink" },
  { tag: "FAN FAVE", title: "The Italian Sub", desc: "Boar's Head ham, salami, provolone, oil & vinegar.", price: "10.99", bg: "bg-pickle", text: "text-paper" },
  { tag: "HOT", title: "Tacos al Pastor", desc: "Marinated pork with pineapple. Hecho con amor.", price: "12.99", bg: "bg-teal", text: "text-paper" },
];

export const Specialties = () => (
  <section className="py-16 sm:py-20 md:py-28 bg-cream">
    <div className="container">
      <div className="max-w-3xl mb-10 sm:mb-14">
        <div className="stamp mb-4">House Specialties</div>
        <h2 className="font-chunky text-4xl sm:text-5xl md:text-7xl text-ink">
          THE <span className="text-tomato">HITS</span>.
        </h2>
        <p className="font-serif-italic text-lg sm:text-xl text-ink/70 mt-3">The orders we make on repeat, all day long.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {items.map((i) => (
          <article key={i.title} className={`${i.bg} ${i.text} border-[3px] border-ink p-5 sm:p-6 shadow-[var(--shadow-block)] block-card-hover relative overflow-hidden`}>
            <div className="inline-block bg-paper text-ink border-[2px] border-ink px-2 py-0.5 font-chunky text-[0.65rem] tracking-widest mb-4">{i.tag}</div>
            <h3 className="font-chunky text-2xl sm:text-3xl leading-tight mb-3">{i.title}</h3>
            <p className="text-sm leading-snug opacity-90 mb-6 min-h-[3.5rem]">{i.desc}</p>
            <div className="flex items-baseline justify-between border-t-2 border-current/30 pt-3">
              <span className="font-mono uppercase text-xs tracking-widest opacity-80">price</span>
              <span className="font-chunky text-3xl">${i.price}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);