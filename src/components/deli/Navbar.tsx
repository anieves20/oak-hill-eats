import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b-2 border-deli-red">
      <div className="container flex items-center justify-between py-3">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl md:text-3xl text-deli-red">Oak Hill</span>
          <span className="font-serif-display italic text-foreground/70 text-lg">Deli</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm uppercase tracking-widest font-semibold hover:text-deli-red transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:7324628555" className="px-4 py-2 bg-deli-red text-primary-foreground text-sm uppercase tracking-widest font-bold hover:bg-deli-red-deep transition-colors">
            Call to Order
          </a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-paper">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-widest font-semibold py-2">
                {l.label}
              </a>
            ))}
            <a href="tel:7324628555" className="px-4 py-2 bg-deli-red text-primary-foreground text-sm uppercase tracking-widest font-bold text-center">
              Call (732) 462-8555
            </a>
          </div>
        </div>
      )}
    </header>
  );
};