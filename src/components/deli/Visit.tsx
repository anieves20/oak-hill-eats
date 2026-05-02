import { MapPin, Phone, Clock } from "lucide-react";

export const Visit = () => (
  <section id="visit" className="py-20 md:py-28 bg-paper">
    <div className="container grid md:grid-cols-2 gap-10 items-stretch">
      <div className="menu-card p-8 md:p-12">
        <div className="deli-stamp mb-6">Stop By</div>
        <h2 className="font-display text-5xl md:text-6xl text-deli-red leading-none mb-8">Visit the Deli</h2>
        <ul className="space-y-6">
          <li className="flex gap-4">
            <MapPin className="w-6 h-6 text-deli-red shrink-0 mt-1" />
            <div>
              <div className="font-bold uppercase tracking-widest text-xs text-muted-foreground mb-1">Address</div>
              <a href="https://maps.google.com/?q=78+South+St,+Freehold,+NJ+07728" target="_blank" rel="noopener" className="font-serif-display text-xl hover:text-deli-red">
                78 South St, Freehold, NJ 07728
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <Phone className="w-6 h-6 text-deli-red shrink-0 mt-1" />
            <div>
              <div className="font-bold uppercase tracking-widest text-xs text-muted-foreground mb-1">Phone</div>
              <a href="tel:7324628555" className="font-serif-display text-xl hover:text-deli-red">(732) 462-8555</a>
            </div>
          </li>
          <li className="flex gap-4">
            <Clock className="w-6 h-6 text-deli-red shrink-0 mt-1" />
            <div>
              <div className="font-bold uppercase tracking-widest text-xs text-muted-foreground mb-1">Hours</div>
              <div className="font-serif-display text-xl">Open Daily · Closes 10 PM</div>
              <div className="text-sm text-muted-foreground mt-1">Takeout available</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="menu-card overflow-hidden min-h-[400px]">
        <iframe
          title="Oak Hill Deli location"
          src="https://www.google.com/maps?q=78+South+St,+Freehold,+NJ+07728&output=embed"
          className="w-full h-full min-h-[400px] border-0"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);