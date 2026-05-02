export const About = () => (
  <section id="about" className="py-20 md:py-28 bg-ink text-paper">
    <div className="container grid md:grid-cols-5 gap-12 items-center">
      <div className="md:col-span-2">
        <div className="deli-stamp !bg-ink !border-mustard !text-mustard mb-6">Since 2020</div>
        <h2 className="font-display text-5xl md:text-6xl text-mustard leading-none">A Neighborhood Deli with Heart.</h2>
      </div>
      <div className="md:col-span-3 space-y-5 text-paper/85 text-lg leading-relaxed">
        <p className="font-serif-display italic text-2xl text-paper">
          "This place just changed owners — and the food now is amazing."
        </p>
        <p>
          Tucked on South Street in downtown Freehold, Oak Hill Deli is where breakfast starts before sunrise
          and where lunch never stops. From classic Jersey pork roll, egg and cheese to fresh aguas frescas,
          tacos al pastor, and Boar's Head cold cuts sliced to order — every bite is fresh, generous, and made
          with care by Omar and the crew.
        </p>
        <p>
          Whether you're a regular grabbing your morning roll or stopping in for the first time, you'll get
          treated like family. Come hungry, leave happy.
        </p>
      </div>
    </div>
  </section>
);