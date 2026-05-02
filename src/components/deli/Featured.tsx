import bec from "@/assets/bec-sandwich.jpg";
import italian from "@/assets/italian-sub.jpg";
import pork from "@/assets/porkroll.jpg";

const items = [
  { img: bec, title: "Bacon, Egg & Cheese", desc: '"Best in New Jersey, hands down." Served on a fresh kaiser roll.', price: "4.99" },
  { img: pork, title: "Pork Roll, Egg & Cheese", desc: "A Jersey institution. Crispy pork roll with melted American.", price: "5.99" },
  { img: italian, title: "The Italian Sub", desc: "Boar's Head ham, salami, provolone, lettuce, tomato, oil & vinegar.", price: "10.99" },
];

export const Featured = () => (
  <section className="py-20 md:py-28 bg-paper">
    <div className="container">
      <div className="text-center mb-14">
        <div className="deli-stamp mx-auto mb-4">Customer Favorites</div>
        <h2 className="font-display text-5xl md:text-6xl text-ink">House Specialties</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((i) => (
          <article key={i.title} className="menu-card overflow-hidden group">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={i.img} alt={i.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h3 className="font-serif-display text-2xl">{i.title}</h3>
                <span className="font-display text-2xl text-deli-red">${i.price}</span>
              </div>
              <p className="text-sm text-muted-foreground italic">{i.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);