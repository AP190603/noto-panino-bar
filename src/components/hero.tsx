import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface Slide {
  src: string;
  alt: string;
  position: string;
  color?: boolean;
}

const slides: Slide[] = [
  {
    src: "/images/hero-exterior.jpg",
    alt: "Noto Panino storefront on Elizabeth St",
    position: "object-[center_40%] md:object-center",
  },
  {
    src: "/images/hero-sign.jpg",
    alt: "The NOTO sign — panino, dolce, caffé",
    position: "object-[center_42%]",
  },
  {
    src: "/images/hero-storefront-door.jpg",
    alt: "NOTO Panino entrance and opening hours on Elizabeth St",
    position: "object-[center_40%]",
  },
  {
    src: "/images/hero-storefront-customer.jpg",
    alt: "A customer ordering at the NOTO Panino window",
    position: "object-[center_45%]",
  },
  {
    src: "/images/hero-bw-newspaper2.jpg",
    alt: "Italian morning ritual — espresso and newspaper at NOTO",
    position: "object-center",
    color: true,
  },
  {
    src: "/images/hero-barista-window.jpg",
    alt: "Barista at work through the cafe window",
    position: "object-[center_25%] md:object-center",
  },
  {
    src: "/images/hero-bw-pour2.jpg",
    alt: "Barista pouring milk into a latte",
    position: "object-[center_40%]",
    color: true,
  },
  {
    src: "/images/painted-latte.jpg",
    alt: "Swan latte art",
    position: "object-center",
    color: true,
  },
  {
    src: "/images/hero-bw-friends2.jpg",
    alt: "Friends enjoying NOTO panini",
    position: "object-[center_40%]",
    color: true,
  },
  {
    src: "/images/painted-pastry.jpg",
    alt: "Two croissants held up at NOTO",
    position: "object-[center_40%]",
    color: true,
  },
  {
    src: "/images/hero-panino-hands2.jpg",
    alt: "Customer about to take a bite of a NOTO panino",
    position: "object-[center_30%]",
    color: true,
  },
  {
    src: "/images/painted-panino.jpg",
    alt: "NOTO panino with Italian flag in wicker basket",
    position: "object-[center_46%]",
    color: true,
  },
  {
    src: "/images/hero-barista.jpg",
    alt: "Barista making coffee",
    position: "object-[center_20%] md:object-center",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  // Prefetch all slides after initial load so transitions are instant
  useEffect(() => {
    const kickoff = setTimeout(() => {
      slides.forEach((slide, idx) => {
        if (idx === 0) return;
        const img = new Image();
        img.src = slide.src;
      });
    }, 2500);
    return () => clearTimeout(kickoff);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        // Eagerly prefetch the one after next
        const afterNext = (next + 1) % slides.length;
        const img = new Image();
        img.src = slides[afterNext].src;
        return next;
      });
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];
  const grayscaleFilter = slide.color ? undefined : "grayscale(100%)";

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden h-[72svh] md:h-screen"
      style={{ minHeight: "500px" }}
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={current}
            src={slide.src}
            alt={slide.alt}
            fetchPriority={current === 0 ? "high" : "auto"}
            decoding="async"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className={`absolute inset-0 w-full h-full object-cover ${slide.position}`}
            style={{ filter: grayscaleFilter }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/55" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 mb-5 text-xs sm:text-sm font-medium tracking-wider text-white uppercase border border-white/30 rounded-full backdrop-blur-sm"
        >
          Mangia bene, ridi spesso, ama molto
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display text-white mb-5 drop-shadow-lg leading-tight"
        >
          Authentic Panini,<br />Pastry & Coffee
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Fresh, simple, and delicious. Visit Noto Panino for handmade panini,
          fresh pastries, great coffee, and friendly local vibes in the heart of Mount Gambier.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="w-full sm:w-auto text-base h-12 sm:h-14 px-8 rounded-full">
            <a href="#menu">View Menu</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-base h-12 sm:h-14 px-8 rounded-full bg-white/10 text-white border-white/50 hover:bg-white hover:text-primary backdrop-blur-sm"
          >
            <a
              href="https://www.google.com/maps/place/Noto+Panino/@-37.8276628,140.7735526,17z/data=!3m1!4b1!4m6!3m5!1s0xaa9e29007f451a77:0xf29f1f36bad99b3c!8m2!3d-37.8276671!4d140.7761275!16s%2Fg%2F11wh3n5vks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
