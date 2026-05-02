import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Jaime Zamorano", when: "2 months ago", color: "bg-mustard text-ink",
    text: "Oak Hill Deli consistently delivers fresh, flavorful sandwiches and a great selection of deli items. The staff is friendly — especially Omar, who made my order and made my day." },
  { name: "Henry Lugo Rivera", when: "2 months ago", color: "bg-pink text-ink",
    text: "I absolutely love this place. Bacon, egg & cheese, a juice box, and a torta for just $11. Absolute 10/10 would recommend." },
  { name: "Salvatore DeVito", when: "2 months ago", color: "bg-teal text-paper",
    text: "Came in with only $11 and left full. The California rolls and juice boxes were tasty. Service and atmosphere amazing — would recommend." },
];

export const Reviews = () => (
  <section id="reviews" className="py-16 sm:py-20 md:py-28 bg-cream">
    <div className="container">
      <div className="text-center mb-10 sm:mb-14">
        <div className="flex items-center justify-center gap-1 mb-3 text-tomato">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />)}
        </div>
        <p className="font-mono font-bold text-sm sm:text-base text-ink/70">4.5 / 5 · 75 Google Reviews</p>
        <h2 className="font-chunky text-4xl sm:text-5xl md:text-7xl text-ink mt-2">
          WORD ON THE <span className="text-tomato">STREET</span>.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {reviews.map((r, i) => (
          <blockquote key={r.name} className={`${r.color} border-[3px] border-ink p-6 sm:p-7 relative shadow-[var(--shadow-block)] ${i === 1 ? "md:translate-y-6" : ""}`}>
            <Quote className="absolute top-4 right-4 w-8 h-8 opacity-30" />
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="font-serif-italic text-base sm:text-lg leading-snug">"{r.text}"</p>
            <footer className="mt-5 pt-4 border-t-2 border-current/30">
              <div className="font-chunky text-base sm:text-lg">{r.name}</div>
              <div className="font-mono text-[0.65rem] uppercase tracking-widest opacity-70">{r.when}</div>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);