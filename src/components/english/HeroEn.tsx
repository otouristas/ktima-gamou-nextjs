import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const heroSrc = "/images/hero-image.jpg";

export function HeroEn() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroSrc}
          alt="Ktima Orion - Enchanting Event Venue"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Ktima <span className="text-gradient-brand">Orion</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light">
          Event Planning & Venue - Keratea
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="button button4 text-lg" asChild>
            <a href="/en/services">EXPLORE SERVICES</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-10 py-4"
            asChild
          >
            <a href="/en/contact">CONTACT US</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/70 w-8 h-8" />
      </div>
    </section>
  );
}
