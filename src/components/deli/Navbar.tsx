import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-paper border-b-[3px] border-ink">
      <div className="container flex items-center justify-between py-3 md:py-4">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-8 h-8 md:w-10 md:h-10 bg-tomato border-[3px] border-ink grid place-items-center font-chunky text-paper text-lg md:text-xl rotate-[-6deg] group-hover:rotate-0 transition-transform">O</span>
          <span className="font-chunky text-xl md:text-2xl text-ink">OAK HILL <span className="text-tomato">DELI</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm uppercase tracking-widest font-bold hover:text-tomato transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:7324628555" className="flex items-center gap-2 px-4 py-2 bg-ink text-mustard font-chunky text-sm tracking-wider border-[3px] border-ink hover:bg-tomato hover:text-paper transition-colors">
            <Phone className="w-4 h-4" /> CALL
          </a>
        </nav>
        <button className="md:hidden p-2 border-[3px] border-ink bg-mustard" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t-[3px] border-ink bg-paper">
          <div className="container py-4 flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-chunky text-lg tracking-wider py-2 border-b border-ink/20 hover:text-tomato">
                {l.label}
              </a>
            ))}
            <a href="tel:7324628555" className="mt-3 px-4 py-3 bg-tomato text-paper font-chunky text-base tracking-wider text-center border-[3px] border-ink">
              CALL (732) 462-8555
            </a>
          </div>
        </div>
      )}
    </header>
  );
};