import { Navbar } from "@/components/deli/Navbar";
import { Hero } from "@/components/deli/Hero";
import { Featured } from "@/components/deli/Featured";
import { MenuSection } from "@/components/deli/MenuSection";
import { About } from "@/components/deli/About";
import { Reviews } from "@/components/deli/Reviews";
import { Visit } from "@/components/deli/Visit";
import { Footer } from "@/components/deli/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <MenuSection />
        <About />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </div>
  );
};

export default Index;