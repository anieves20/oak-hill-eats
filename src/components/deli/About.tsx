export const About = () => (
  <section id="about" className="py-16 sm:py-20 md:py-28 bg-ink text-paper relative overflow-hidden">
    <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-tomato/20 border-[3px] border-mustard/30" aria-hidden />
    <div className="container relative grid md:grid-cols-5 gap-8 md:gap-12 items-center">
      <div className="md:col-span-2">
        <div className="stamp !bg-mustard mb-5">Since 2020</div>
        <h2 className="font-chunky text-4xl sm:text-5xl md:text-7xl text-mustard leading-none">
          A NEIGHBORHOOD <span className="text-tomato">DELI</span> WITH HEART.
        </h2>
      </div>
      <div className="md:col-span-3 space-y-5 text-paper/85 text-base sm:text-lg leading-relaxed">
        <p className="font-serif-italic text-xl sm:text-2xl md:text-3xl text-paper">
          "This place just changed owners — and the food now is amazing."
        </p>
        <p>
          Tucked on South Street in downtown Freehold, Oak Hill Deli is where breakfast starts before sunrise
          and lunch never stops. From classic Jersey pork roll, egg & cheese to fresh aguas frescas,
          tacos al pastor, and Boar's Head cold cuts sliced to order — every bite is fresh, generous, and
          made with care by Omar and the crew.
        </p>
        <p>
          Whether you're a regular grabbing your morning roll or stopping in for the first time, you'll
          get treated like family. Come hungry, leave happy.
        </p>
        <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4">
          <Stat n="4.5★" l="Google Rating" />
          <Stat n="75+" l="Reviews" />
          <Stat n="6AM" l="Open Daily" />
        </div>
      </div>
    </div>
  </section>
);

const Stat = ({ n, l }: { n: string; l: string }) => (
  <div className="border-[3px] border-mustard p-3 sm:p-4 text-center">
    <div className="font-chunky text-2xl sm:text-3xl md:text-4xl text-mustard">{n}</div>
    <div className="font-mono text-[0.6rem] sm:text-xs uppercase tracking-widest text-paper/70 mt-1">{l}</div>
  </div>
);