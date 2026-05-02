const items = [
  "★ EST. 2020", "BOAR'S HEAD COLD CUTS", "★ AGUAS FRESCAS", "TACOS AL PASTOR",
  "★ BREAKFAST ALL DAY", "PORK ROLL EGG & CHEESE", "★ FRESH DAILY", "OPEN 'TIL 10 PM",
];

export const Ticker = ({ bg = "bg-ink", color = "text-mustard" }: { bg?: string; color?: string }) => (
  <div className={`${bg} ${color} border-y-[3px] border-ink py-3 overflow-hidden`}>
    <div className="flex gap-10 whitespace-nowrap animate-[scroll_30s_linear_infinite]">
      {[...items, ...items, ...items].map((t, i) => (
        <span key={i} className="font-chunky text-lg md:text-xl tracking-wider">{t}</span>
      ))}
    </div>
    <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
  </div>
);