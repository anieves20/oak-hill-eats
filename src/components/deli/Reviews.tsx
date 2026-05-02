import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Jaime Zamorano",
    when: "2 months ago",
    text: "Oak Hill Deli consistently delivers fresh, flavorful sandwiches and a great selection of deli items. The staff is friendly — especially Omar, who made my order and made my day. It was a stormy day and they were efficient and warm.",
  },
  {
    name: "Henry Lugo Rivera",
    when: "2 months ago",
    text: "I absolutely love this place. Bacon egg and cheese, a juice box, and a torta for just $11. Absolute 10/10 would recommend.",
  },
  {
    name: "Salvatore DeVito",
    when: "2 months ago",
    text: "Came in with only $11 and left full. The California rolls and juice boxes were tasty. Service and atmosphere amazing — would recommend.",
  },
];

export const Reviews = () => (
  <section id="reviews" className="py-20 md:py-28 bg-cream">
    <div className="container">
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-1 mb-3 text-mustard">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
        </div>
        <p className="font-display text-3xl text-ink">4.5 / 5 · 75 Reviews on Google</p>
        <h2 className="font-display text-5xl md:text-6xl text-deli-red mt-2">What Folks Are Saying</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <blockquote key={r.name} className="menu-card p-7 relative">
            <Quote className="absolute top-4 right-4 w-8 h-8 text-deli-red/20" />
            <div className="flex gap-0.5 mb-3 text-mustard">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="font-serif-display italic text-foreground/90 leading-relaxed">"{r.text}"</p>
            <footer className="mt-5 pt-4 border-t border-border">
              <div className="font-bold">{r.name}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">{r.when}</div>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);