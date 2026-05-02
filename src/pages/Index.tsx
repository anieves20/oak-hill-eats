import { Navbar } from "@/components/deli/Navbar";
import { Hero } from "@/components/deli/Hero";
import { Ticker } from "@/components/deli/Ticker";
import { Specialties } from "@/components/deli/Specialties";
import { MenuSection } from "@/components/deli/MenuSection";
import { About } from "@/components/deli/About";
import { Reviews } from "@/components/deli/Reviews";
import { Visit } from "@/components/deli/Visit";
import { Footer } from "@/components/deli/Footer";

const Index = () => (
  <div className="min-h-screen bg-cream">
    <Navbar />
    <main>
      <Hero />
      <Ticker />
      <Specialties />
      <MenuSection />
      <About />
      <Reviews />
      <Visit />
    </main>
    <Footer />
  </div>
);

export default Index;