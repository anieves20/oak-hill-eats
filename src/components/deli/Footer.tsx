export const Footer = () => (
  <footer className="bg-ink text-paper py-10 border-t-[3px] border-ink">
    <div className="container flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
      <div>
        <div className="font-chunky text-2xl sm:text-3xl text-mustard">OAK HILL <span className="text-tomato">DELI</span></div>
        <div className="font-mono text-xs sm:text-sm text-paper/70 mt-1">78 South St · Freehold, NJ · (732) 462-8555</div>
      </div>
      <div className="font-mono text-[0.65rem] sm:text-xs uppercase tracking-widest text-paper/60">
        © {new Date().getFullYear()} Oak Hill Deli · Est. 2020 · Made with ★ in Jersey
      </div>
    </div>
  </footer>
);