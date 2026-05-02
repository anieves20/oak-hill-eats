export const Footer = () => (
  <footer className="bg-deli-red-deep text-paper py-10">
    <div className="container flex flex-col md:flex-row gap-4 items-center justify-between">
      <div>
        <div className="font-display text-2xl text-mustard">OAK HILL DELI</div>
        <div className="text-sm text-paper/70">78 South St · Freehold, NJ · (732) 462-8555</div>
      </div>
      <div className="text-xs uppercase tracking-widest text-paper/60">
        © {new Date().getFullYear()} Oak Hill Deli · Est. 2020
      </div>
    </div>
  </footer>
);