import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { X, Aperture, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryItem = {
  src: string;
  alt: string;
  span: string;
  type?: "video";
  objectPosition?: string;
};

const images: GalleryItem[] = [
  // ARRIVE — step off the street and into NOTO
  { src: "/images/hero-sign.jpg",               alt: "The NOTO sign glowing outside the cafe",                   span: "col-span-1 row-span-2" },
  { src: "/images/gallery-exterior2.jpg",       alt: "NOTO Panino storefront on Elizabeth St, Mount Gambier",    span: "col-span-2 row-span-1" },
  { src: "/images/gallery-bw-leon-laugh.jpg",   alt: "Leon laughing with a coffee at NOTO",                      span: "col-span-1 row-span-2" },
  { src: "/images/hero-storefront-door.jpg",    alt: "NOTO Panino entrance and opening hours on Elizabeth St",   span: "col-span-1 row-span-1" },
  { src: "/images/hero-storefront-customer.jpg",alt: "A customer ordering at the NOTO Panino window",            span: "col-span-1 row-span-1" },
  { src: "/images/hero-barista-window.jpg",     alt: "Barista at work through the cafe window",                  span: "col-span-2 row-span-1" },
  { src: "/images/hero-pastry.jpg",             alt: "Two croissants held up at NOTO",                           span: "col-span-1 row-span-1" },
  { src: "/images/gallery-latte-fern-hq.jpg",  alt: "Fern latte art overhead on timber table",                  span: "col-span-1 row-span-1" },
  // THE MORNING RITUAL — espresso, paper, a moment
  { src: "/images/gallery-newspaper-espresso.jpg", alt: "Italian newspaper and espresso at NOTO",                span: "col-span-2 row-span-1" },
  { src: "/images/gallery-bw-leon.jpg",         alt: "Leon at the counter at NOTO",                              span: "col-span-1 row-span-2" },
  { src: "/images/gallery-panino-newspaper-flag.jpg", alt: "NOTO panino served in a basket on newspaper with Italian flag", span: "col-span-1 row-span-1" },
  { src: "/images/hero-swan-latte.jpg",         alt: "Barista holding a coffee with swan latte art",             span: "col-span-1 row-span-1" },
  { src: "/images/gallery-panino-hand.jpg",     alt: "Hand presenting a NOTO panino basket",                    span: "col-span-2 row-span-1" },
  // THE CRAFT — behind the counter, with care
  { src: "/images/gallery-kitchen-prep.jpg",    alt: "Leon preparing food at NOTO's arched dark-wood counter",  span: "col-span-1 row-span-2" },
  { src: "/images/hero-barista.jpg",            alt: "Barista crafting coffee",                                  span: "col-span-1 row-span-1" },
  { src: "/images/gallery-couple-coffee.jpg",   alt: "Couple toasting with NOTO coffees",                       span: "col-span-1 row-span-2" },
  { src: "/images/gallery-panino-tray.jpg",     alt: "Two fresh NOTO paninos on branded paper with Italian flags", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-panino-flag-hq.jpg",  alt: "Fresh NOTO panino with Italian flag",                     span: "col-span-1 row-span-1" },
  { src: "/images/gallery-latte-heart.jpg",     alt: "Hands holding a latte with heart art",                    span: "col-span-2 row-span-1" },
  // PANINO · DOLCE — the heart of the menu
  { src: "/images/gallery-pastry-case.jpg",     alt: "Display case full of fresh pastries",                     span: "col-span-2 row-span-1" },
  { src: "/images/gallery-girl-croissant.jpg",  alt: "Happy customer with a NOTO croissant",                    span: "col-span-1 row-span-2" },
  { src: "/images/gallery-panino-halves.jpg",   alt: "NOTO panino sliced in half in a wicker basket",           span: "col-span-2 row-span-1" },
  { src: "/images/hero-panino-basket.jpg",      alt: "NOTO panino with Italian flag in wicker basket",          span: "col-span-1 row-span-1" },
  { src: "/images/gallery-latte-swan2.jpg",     alt: "Swan latte art on rustic timber",                         span: "col-span-1 row-span-1" },
  { src: "/images/gallery-panino-eating.jpg",   alt: "Enjoying a NOTO panino at the counter",                   span: "col-span-1 row-span-1" },
  // THE PEOPLE — who NOTO is for
  { src: "/images/gallery-family-counter.jpg",  alt: "Dionne, Kathy and Leon De Cesaris behind the NOTO counter with pastries on display", span: "col-span-2 row-span-1", objectPosition: "center 35%" },
  { src: "/images/noto-reel.mp4",               alt: "NOTO barista in action",                                  span: "col-span-1 row-span-2", type: "video" },
  { src: "/images/gallery-two-paninos.jpg",     alt: "Two NOTO panino baskets held up",                         span: "col-span-1 row-span-2" },
  { src: "/images/gallery-coffees.jpg",         alt: "Two lattes with beautiful latte art",                     span: "col-span-1 row-span-1" },
  { src: "/images/gallery-bw-panino-eat.jpg",   alt: "Overhead view of eating a NOTO panino",                   span: "col-span-1 row-span-1" },
  { src: "/images/gallery-panino-basket2.jpg",  alt: "NOTO panino in basket with Italian flag",                 span: "col-span-1 row-span-1" },
  { src: "/images/gallery-friends-panino.jpg",  alt: "Friends sharing panini at NOTO",                          span: "col-span-2 row-span-1" },
  // THE DETAILS — every bite, every sip
  { src: "/images/gallery-panino-closeup.jpg",  alt: "Close-up cross-section of a NOTO panino showing fresh fillings", span: "col-span-2 row-span-1" },
  { src: "/images/gallery-panino-crosssection.jpg", alt: "Hands holding a NOTO panino cross-section showing layers of fresh filling", span: "col-span-1 row-span-2" },
  { src: "/images/gallery-latte-art2.jpg",      alt: "Overhead latte art on timber table at NOTO",              span: "col-span-1 row-span-1" },
  { src: "/images/gallery-latte-heart2.jpg",    alt: "Two hands sharing a latte at NOTO",                       span: "col-span-1 row-span-1" },
  { src: "/images/gallery-guy-panino.jpg",      alt: "Guest enjoying a NOTO panino in style",                   span: "col-span-1 row-span-2" },
  { src: "/images/gallery-bw-toast.jpg",        alt: "Toasting coffees at NOTO",                                span: "col-span-1 row-span-1" },
  { src: "/images/gallery-biscotti-jars.jpg",   alt: "Italian biscotti jars and latte on the counter",          span: "col-span-1 row-span-1" },
  { src: "/images/gallery-panino-ham.jpg",      alt: "Panino loaded with meats",                                span: "col-span-1 row-span-1" },
  { src: "/images/gallery-latte-leaf2.jpg",     alt: "Leaf latte art in golden cup on timber",                  span: "col-span-1 row-span-1" },
  { src: "/images/gallery-croissants.jpg",      alt: "Croissants and cappuccinos at NOTO",                      span: "col-span-1 row-span-2" },
  { src: "/images/gallery-panino-basket3.jpg",  alt: "Panino in basket on timber table",                        span: "col-span-1 row-span-1" },
  { src: "/images/gallery-latte.jpg",           alt: "Cappuccino with fern latte art",                          span: "col-span-1 row-span-1" },
  { src: "/images/gallery-panino-basket-hq.jpg",alt: "Panino in basket with Italian flag",                      span: "col-span-1 row-span-1" },
  { src: "/images/gallery-latte-swan3.jpg",     alt: "Swan latte art on dark table",                            span: "col-span-1 row-span-1" },
  { src: "/images/gallery-juices.jpg",          alt: "Santa Vittoria juices and drinks",                        span: "col-span-1 row-span-1" },
  { src: "/images/gallery-iced-coffee.jpg",     alt: "Hot cappuccino and iced coffee",                          span: "col-span-1 row-span-1" },
  { src: "/images/gallery-latte-feather.jpg",   alt: "Latte with feather art on timber table",                  span: "col-span-1 row-span-1" },
  // FINALE — the space that holds it all
  { src: "/images/gallery-coffee-bar.jpg",      alt: "The NOTO coffee bar setup",                               span: "col-span-1 row-span-1" },
  { src: "/images/gallery-counter-mirror.jpg",  alt: "NOTO counter with ornate mirror and warm light",          span: "col-span-2 row-span-1" },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  // All items (photos + video) are navigable in the lightbox
  const lightboxIndices = images.map((_, i) => i);

  const navigate = useCallback((dir: 1 | -1) => {
    if (lightbox === null) return;
    const pos = lightboxIndices.indexOf(lightbox);
    const next = (pos + dir + lightboxIndices.length) % lightboxIndices.length;
    setLightbox(lightboxIndices[next]);
  }, [lightbox, lightboxIndices]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "Escape")     setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, navigate]);

  const currentPos = lightbox !== null ? lightboxIndices.indexOf(lightbox) + 1 : 0;

  return (
    <section id="gallery" className="pt-14 pb-24 md:pt-16 md:pb-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-5">
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Aperture className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4">The Experience</p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground">A Glimpse Inside NOTO</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            From our handcrafted panino to the warmth of our space — every visit tells a story.
          </p>
          <p className="mt-3 text-primary/80 text-base max-w-lg mx-auto italic font-light">
            Crafted in the true Italian tradition — our espresso is rich, smooth, and made with the same passion that's been at the heart of Italian café culture for generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-3 md:gap-4 grid-flow-dense">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (idx % 4) * 0.06 }}
              className={`${image.span} overflow-hidden rounded-2xl relative cursor-pointer group`}
              onClick={() => setLightbox(idx)}
            >
              {image.type === "video" ? (
                <video
                  src={image.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <>
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={idx < 8 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-white p-2 transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              <X className="w-7 h-7" />
            </button>

            {/* Counter */}
            <div
              className="absolute top-4 left-1/2 -translate-x-1/2 font-sans text-xs tracking-[0.2em] uppercase z-10"
              style={{ color: "rgba(240,196,106,0.6)" }}
            >
              {currentPos} / {lightboxIndices.length}
            </div>

            {/* Left arrow */}
            <button
              className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full transition-all z-10"
              style={{ background: "rgba(240,196,106,0.12)", border: "1px solid rgba(240,196,106,0.25)" }}
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" style={{ color: "hsl(42 78% 65%)" }} />
            </button>

            {/* Right arrow */}
            <button
              className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full transition-all z-10"
              style={{ background: "rgba(240,196,106,0.12)", border: "1px solid rgba(240,196,106,0.25)" }}
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7" style={{ color: "hsl(42 78% 65%)" }} />
            </button>

            {/* Media */}
            <AnimatePresence mode="wait">
              {images[lightbox].type === "video" ? (
                <motion.video
                  key={lightbox}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.22 }}
                  src={images[lightbox].src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="max-w-[calc(100%-80px)] md:max-w-[calc(100%-140px)] max-h-[88vh] rounded-xl shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <motion.img
                  key={lightbox}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.22 }}
                  src={images[lightbox].src}
                  alt={images[lightbox].alt}
                  className="max-w-[calc(100%-80px)] md:max-w-[calc(100%-140px)] max-h-[88vh] object-contain rounded-xl shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
