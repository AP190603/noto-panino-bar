import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Leaf, Zap, Heart, BookOpen } from "lucide-react";
import { FamilyAnnotated } from "./family-annotated";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "Quality produce sourced for maximum flavour, prepared fresh every day."
  },
  {
    icon: Zap,
    title: "Fast Takeaway",
    description: "Perfect for your morning commute or a quick, satisfying lunch break."
  },
  {
    icon: Heart,
    title: "Local Favourite",
    description: "Proudly serving the Mount Gambier community with love and Italian soul."
  }
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

function PhotoFrame({ src, alt, position }: { src: string; alt: string; position: string }) {
  return (
    <div className="aspect-square rounded-2xl overflow-hidden relative max-w-md mx-auto w-full">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${position}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-2">
          <p className="text-white font-display italic text-lg drop-shadow">"La Dolce Vita"</p>
          <img src="/images/italy-flag.png" alt="Italian flag" className="h-4 w-auto object-cover rounded shadow-sm" />
        </div>
      </div>
    </div>
  );
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const familyOpacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
  const teamOpacity = useTransform(scrollYProgress, [0.25, 0.55], [1, 0]);

  return (
    <div
      ref={containerRef}
      id="about"
      style={{ height: isDesktop ? "280vh" : "auto" }}
      className="relative"
    >
      <div className={`bg-background py-14 md:py-20${isDesktop ? " sticky top-0" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Mobile layout ── */}
          <div className="lg:hidden space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Our Story</p>
              <h2 className="text-4xl font-display text-foreground leading-tight">
                A Taste of Italy in <span className="text-primary italic">Mount Gambier</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Noto Panino is Mount Gambier's new Italian Panini bar. Run by Leon, his mother Kathy, sister Dionne and Vincenzo, the De Cesaris family bring the heritage and taste of Italy to the heart of Mount Gambier. The rich aromas of freshly hand-made panini, delectable pastries and espresso fill the air, while the beautifully decorated interior — richly adorned with dark wood and large framed mirrors against sunlit walls — creates a cosy, authentic charm. Each bite of the panini transports you to the heart of San Benedetto del Tronto, offering you the true taste of Italian family tradition.
              </p>
            </motion.div>

            {/* Team photo — underneath the description */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <PhotoFrame
                src="/images/about-team-hq.jpg"
                alt="Leon and Kathy at Noto Panino"
                position="object-[40%_100%]"
              />
            </motion.div>

            {/* Feature cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2"
            >
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Family photo — underneath the feature cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <FamilyAnnotated />
            </motion.div>

            {/* Panino · Dolce · Caffé icons — mobile only, below family photo */}
            <div className="flex items-end justify-between w-full pt-4">
              {[
                { src: "/images/icon-panino.png", label: "Panino", cls: "h-20 w-auto", shift: 0 },
                { src: "/images/icon-croissant.png", label: "Dolce", cls: "h-14 w-auto", shift: 0 },
                { src: "/images/icon-coffee.png", label: "Caffé", cls: "h-14 w-auto", shift: 5 },
              ].map(({ src, label, cls, shift }, idx) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.15 }}
                  className="relative flex flex-col items-center gap-3"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/20 blur-2xl pointer-events-none" />
                  <img
                    src={src}
                    alt={label}
                    className={cls}
                    style={{ opacity: 0.82, transform: shift ? `translateX(${shift}px)` : undefined }}
                  />
                  <span className="text-[9px] tracking-[0.25em] uppercase font-sans" style={{ color: "rgba(240,196,106,0.5)" }}>{label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Desktop layout (two-column sticky) ── */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8 self-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-display text-foreground leading-tight">
                A Taste of Italy in <span className="text-primary italic">Mount Gambier</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Noto Panino is Mount Gambier's new Italian Panini bar. Run by Leon, his mother Kathy, sister Dionne and Vincenzo, the De Cesaris family bring the heritage and taste of Italy to the heart of Mount Gambier. The rich aromas of freshly hand-made panini, delectable pastries and espresso fill the air, while the beautifully decorated interior — richly adorned with dark wood and large framed mirrors against sunlit walls — creates a cosy, authentic charm. Each bite of the panini transports you to the heart of San Benedetto del Tronto, offering you the true taste of Italian family tradition.
              </p>
              <div className="pt-4 grid grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative max-w-md mx-auto lg:mx-0 self-stretch flex flex-col justify-between"
            >
              <div />

              <div className="relative">
                <motion.div style={{ opacity: teamOpacity }} className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="/images/about-team-hq.jpg"
                      alt="Leon and Kathy at Noto Panino"
                      className="w-full h-full object-cover object-[40%_100%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2">
                        <p className="text-white font-display italic text-xl drop-shadow">"La Dolce Vita"</p>
                        <img src="/images/italy-flag.png" alt="Italian flag" className="h-5 w-auto object-cover rounded shadow-sm" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  style={{ opacity: familyOpacity }}
                  className="absolute inset-0 overflow-visible"
                >
                  <FamilyAnnotated className="!max-w-none overflow-visible" />
                </motion.div>
              </div>

              {/* ── Sign art icons extracted from the actual NOTO sign photo ── */}
              <div className="flex items-end justify-between w-full pt-2 pb-24">

                {[
                  { src: "/images/icon-panino.png", label: "Panino", cls: "h-20 w-auto", shift: 0 },
                  { src: "/images/icon-croissant.png", label: "Dolce", cls: "h-14 w-auto", shift: 0 },
                  { src: "/images/icon-coffee.png", label: "Caffé", cls: "h-14 w-auto", shift: 5 },
                ].map(({ src, label, cls, shift }, idx) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.15 }}
                    className="relative flex flex-col items-center gap-3"
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/20 blur-2xl pointer-events-none" />
                    <img
                      src={src}
                      alt={label}
                      className={cls}
                      style={{ opacity: 0.82, transform: shift ? `translateX(${shift}px)` : undefined }}
                    />
                    <span className="text-[9px] tracking-[0.25em] uppercase font-sans" style={{ color: "rgba(240,196,106,0.5)" }}>{label}</span>
                  </motion.div>
                ))}

              </div>

              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
