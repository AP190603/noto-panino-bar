import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Menu } from "@/components/menu";
import { Gallery } from "@/components/gallery";
import { Reviews } from "@/components/reviews";
import { LocationHours } from "@/components/location-hours";
import { CTA } from "@/components/cta";
import { CannedDrinks } from "@/components/canned-drinks";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full font-sans">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Menu />
        <CannedDrinks />
        <Gallery />
        <Reviews />
        <LocationHours />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
