import { MapPin, Phone, Clock, Star } from "lucide-react";

export const Hero = () => (
  <section id="top" className="relative bg-mustard border-b-[3px] border-ink overflow-hidden">
    {/* decorative blobs */}
    <div className="absolute -top-16 -right-16 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-tomato border-[3px] border-ink" aria-hidden />
    <div className="absolute top-1/3 -left-20 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-pickle border-[3px] border-ink" aria-hidden />
    <div className="absolute bottom-10 right-1/4 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-pink border-[3px] border-ink hidden sm:block" aria-hidden />

    <div className="container relative py-16 sm:py-24 md:py-32">
      <div className="max-w-4xl">
        <div className="stamp !bg-paper mb-6">★ Est. 2020 · Freehold, NJ ★</div>
        <h1 className="font-chunky text-[3.5rem] xs:text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] text-ink">
          OAK <span className="text-tomato">HILL</span><br/>
          <span className="text-outline">DELI</span>
        </h1>
        <p className="font-serif-italic text-2xl sm:text-3xl md:text-4xl mt-6 text-ink max-w-2xl">
          "Best bacon, egg & cheese in New Jersey — hands down."
        </p>

        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
          <a href="#menu" className="px-6 sm:px-8 py-3 sm:py-4 bg-ink text-mustard font-chunky text-lg sm:text-xl tracking-wider border-[3px] border-ink shadow-[var(--shadow-block)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[var(--shadow-block-lg)] transition-all">
            SEE THE MENU →
          </a>
          <a href="tel:7324628555" className="px-6 sm:px-8 py-3 sm:py-4 bg-paper text-ink font-chunky text-lg sm:text-xl tracking-wider border-[3px] border-ink shadow-[var(--shadow-block)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[var(--shadow-block-lg)] transition-all">
            ORDER BY PHONE
          </a>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl">
          <InfoTile icon={<MapPin className="w-5 h-5" />} label="Find Us" value="78 South St, Freehold NJ" bg="bg-paper" />
          <InfoTile icon={<Phone className="w-5 h-5" />} label="Call Us" value="(732) 462-8555" bg="bg-pickle text-paper" />
          <InfoTile icon={<Clock className="w-5 h-5" />} label="Open" value="Daily · Til 10 PM" bg="bg-tomato text-paper" />
        </div>

        <div className="mt-8 flex items-center gap-2">
          <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-ink text-ink" />)}</div>
          <span className="font-mono font-bold text-sm sm:text-base">4.5 / 5 · 75 Google reviews</span>
        </div>
      </div>
    </div>
  </section>
);

const InfoTile = ({ icon, label, value, bg }: { icon: React.ReactNode; label: string; value: string; bg: string }) => (
  <div className={`${bg} border-[3px] border-ink p-4 shadow-[var(--shadow-block-sm)]`}>
    <div className="flex items-center gap-2 mb-1">{icon}<span className="font-chunky text-xs tracking-widest uppercase">{label}</span></div>
    <div className="font-bold text-sm sm:text-base leading-tight">{value}</div>
  </div>
);