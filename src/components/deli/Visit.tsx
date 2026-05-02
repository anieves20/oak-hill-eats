import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export const Visit = () => (
  <section id="visit" className="py-16 sm:py-20 md:py-28 bg-paper border-t-[3px] border-ink">
    <div className="container">
      <div className="max-w-3xl mb-10 sm:mb-14">
        <div className="stamp mb-4">Stop By</div>
        <h2 className="font-chunky text-4xl sm:text-5xl md:text-7xl text-ink leading-none">
          COME <span className="text-tomato">VISIT</span> US.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        <div className="bg-mustard border-[3px] border-ink p-6 sm:p-8 md:p-10 shadow-[var(--shadow-block)] space-y-6">
          <Row icon={<MapPin className="w-5 h-5" />} label="Address">
            <a href="https://maps.google.com/?q=78+South+St,+Freehold,+NJ+07728" target="_blank" rel="noopener" className="font-chunky text-xl sm:text-2xl hover:text-tomato">78 South St, Freehold NJ 07728</a>
          </Row>
          <Row icon={<Phone className="w-5 h-5" />} label="Phone">
            <a href="tel:7324628555" className="font-chunky text-xl sm:text-2xl hover:text-tomato">(732) 462-8555</a>
          </Row>
          <Row icon={<Clock className="w-5 h-5" />} label="Hours">
            <div className="font-chunky text-xl sm:text-2xl">Open Daily · Til 10 PM</div>
            <div className="font-mono text-xs uppercase tracking-widest opacity-70 mt-1">Takeout available</div>
          </Row>
          <a href="https://maps.google.com/?q=78+South+St,+Freehold,+NJ+07728" target="_blank" rel="noopener"
             className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-mustard font-chunky tracking-wider border-[3px] border-ink hover:bg-tomato hover:text-paper transition-colors">
            <Navigation className="w-4 h-4" /> GET DIRECTIONS
          </a>
        </div>

        <div className="bg-pickle border-[3px] border-ink p-6 sm:p-8 md:p-10 shadow-[var(--shadow-block)] text-paper grid place-items-center text-center min-h-[300px]">
          <div>
            <div className="font-chunky text-7xl sm:text-8xl md:text-9xl text-mustard leading-none">7P4G</div>
            <div className="font-mono text-xs sm:text-sm uppercase tracking-widest mt-3 opacity-80">Plus Code · Freehold, NJ</div>
            <div className="mt-6 inline-block bg-paper text-ink border-[3px] border-ink px-4 py-2 font-chunky tracking-widest">★ DOWNTOWN ★</div>
            <p className="font-serif-italic text-base sm:text-lg mt-6 max-w-xs mx-auto opacity-90">Right on Main Street, next to MoneyGram. You can't miss us.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Row = ({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) => (
  <div className="flex gap-4">
    <div className="shrink-0 w-10 h-10 bg-ink text-mustard grid place-items-center border-[3px] border-ink">{icon}</div>
    <div className="min-w-0">
      <div className="font-mono text-[0.65rem] uppercase tracking-widest text-ink/60 mb-1">{label}</div>
      {children}
    </div>
  </div>
);