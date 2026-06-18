import { Coffee, Leaf, Snowflake } from "lucide-react";
import { motion } from "framer-motion";


const coffees = [
  { name: "Iced Latte",       tag: "COFFEE",        price: "$7", signature: false },
  { name: "Iced NOTO",        tag: "⭐ SIGNATURE",   price: "$9", signature: true  },
  { name: "Iced NOTOTRON",    tag: "⭐ SIGNATURE",   price: "$9", signature: true  },
  { name: "Iced Long Black",  tag: "COFFEE",        price: "$7", signature: false },
  { name: "Iced Chai",        tag: "COFFEE",        price: "$7", signature: false },
  { name: "Iced Chocolate",   tag: "COFFEE",        price: "$7", signature: false },
  { name: "Iced Matcha",      tag: "COFFEE",        price: "$7", signature: false },
];

const teas = [
  { name: "Iced Peach Tea",   tag: "TEA",           price: "$7", signature: false },
  { name: "Iced Mango Tea",   tag: "TEA",           price: "$7", signature: false },
  { name: "Iced Lemon Tea",   tag: "TEA",           price: "$7", signature: false },
  { name: "Iced Pomegranate", tag: "TEA",           price: "$7", signature: false },
];

const allDrinks = [...coffees, ...teas];
const track = [...allDrinks, ...allDrinks, ...allDrinks];

const CARD_W = 200;
const GAP    = 16;

export function CannedDrinks() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "hsl(25 18% 5%)" }}
    >
      {/* ── HERO PANEL — 3 columns on desktop ─────────────────── */}
      <div className="flex flex-col md:flex-row items-stretch" style={{ minHeight: 560 }}>

        {/* Col 1: text */}
        <div className="w-full md:w-[38%] flex flex-col justify-center px-8 md:px-12 py-16 order-3 md:order-1 flex-shrink-0 relative">
          {/* Decorative top watermark */}
          <div className="absolute top-4 right-4 md:top-8 md:right-auto md:left-1/2 md:-translate-x-1/2 pointer-events-none select-none flex flex-col items-center gap-1">
            <Snowflake size={64} strokeWidth={1} style={{ color: "hsl(42 78% 58%)", opacity: 0.3 }} />
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans" style={{ color: "rgba(240,196,106,0.4)" }}>Iced</span>
          </div>
          <div className="flex flex-col gap-6">

            {/* Label + heading */}
            <div>
              <p
                className="text-xs tracking-[0.35em] uppercase mb-3 font-sans font-semibold"
                style={{ color: "hsl(42 78% 58%)" }}
              >
                Now Available
              </p>
              <h2
                className="font-display leading-tight"
                style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.8rem)", color: "#fff" }}
              >
                Try Your Iced<br />
                Drink <span style={{ color: "hsl(42 78% 58%)" }}>Canned!</span>
              </h2>
            </div>

            {/* Pricing tiers */}
            <div className="flex items-start gap-5">
              <div className="flex flex-col items-center">
                <div
                  className="flex items-center justify-center rounded-full font-display font-bold mb-1.5"
                  style={{
                    width: 74, height: 74,
                    background: "hsl(42 78% 58%)",
                    color: "hsl(25 18% 8%)",
                    fontSize: "1.6rem",
                  }}
                >
                  $9
                </div>
                <span className="text-xs text-white/40 font-sans text-center leading-tight">Signature<br />drinks</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="flex items-center justify-center rounded-full font-display font-bold mb-1.5"
                  style={{
                    width: 74, height: 74,
                    background: "rgba(240,196,106,0.15)",
                    border: "1px solid rgba(240,196,106,0.35)",
                    color: "hsl(42 78% 58%)",
                    fontSize: "1.6rem",
                  }}
                >
                  $7
                </div>
                <span className="text-xs text-white/40 font-sans text-center leading-tight">All other<br />drinks</span>
              </div>
            </div>

            {/* Menu */}
            <div className="flex flex-col gap-4">
              <div>
                <p className="flex items-center gap-1.5 text-xs tracking-widest uppercase font-sans font-semibold mb-2" style={{ color: "hsl(42 78% 58%)" }}>
                  <Coffee size={13} strokeWidth={2} /> Coffees
                </p>
                <p className="text-white/80 text-base font-sans leading-relaxed">
                  <span className="text-white font-medium">Iced NOTO · Iced NOTOTRON</span>
                  <span className="text-white/40 text-sm ml-1">(signatures)</span>
                </p>
                <p className="text-white/70 text-base font-sans leading-relaxed">
                  Iced Latte · Iced Long Black · Iced Chai · Iced Chocolate · Iced Matcha
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-xs tracking-widest uppercase font-sans font-semibold mb-2" style={{ color: "hsl(160 60% 55%)" }}>
                  <Leaf size={13} strokeWidth={2} /> Teas
                </p>
                <p className="text-white/70 text-base font-sans leading-relaxed">
                  Iced Peach · Iced Mango · Iced Lemon · Iced Pomegranate
                  <span className="text-white/40 text-sm ml-1">(+ Lemon Sorbet $2)</span>
                </p>
              </div>
            </div>

            {/* Extras */}
            <p className="text-sm font-sans" style={{ color: "rgba(255,255,255,0.32)" }}>
              Extras: Syrups +50¢ &nbsp;·&nbsp; Alt milks +50¢ &nbsp;·&nbsp; Extra shot +50¢
            </p>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-3 pt-1">
              {[
                { icon: <Snowflake size={13} strokeWidth={1.8} />, label: "Iced Fresh Daily" },
                { icon: <Coffee size={13} strokeWidth={1.8} />,    label: "Italian Espresso" },
                { icon: <Leaf size={13} strokeWidth={1.8} />,      label: "Premium Teas" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-xs"
                  style={{
                    border: "1px solid rgba(240,196,106,0.18)",
                    color: "rgba(255,255,255,0.35)",
                    background: "rgba(240,196,106,0.04)",
                  }}
                >
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Art icons — can · NOTO sign · cup */}
            <div className="flex items-center justify-center gap-6 pt-2" style={{ marginTop: "40px" }}>

              {/* Can */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0 }}
                className="relative flex flex-col items-center gap-2"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex flex-col items-center gap-2"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full blur-2xl pointer-events-none" style={{ background: "rgba(240,196,106,0.28)" }} />
                  {/* Can image + NOTO overlay */}
                  <div className="relative h-20 w-auto flex items-center justify-center" style={{ opacity: 0.85 }}>
                    <img src="/images/icon-can.png" alt="Canned drink" className="h-20 w-auto" />
                    <span
                      className="absolute font-display font-bold pointer-events-none"
                      style={{
                        top: "56%", left: "50%", transform: "translate(-50%, -50%)",
                        fontSize: "0.52rem", letterSpacing: "0.18em",
                        color: "hsl(42 78% 58%)", opacity: 0.95,
                      }}
                    >NOTO</span>
                  </div>
                  <span className="text-[9px] tracking-[0.25em] uppercase font-sans" style={{ color: "rgba(240,196,106,0.45)" }}>Canned</span>
                </motion.div>
              </motion.div>

              {/* NOTO sign badge */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
                className="relative flex flex-col items-center gap-2 self-center"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full blur-2xl pointer-events-none" style={{ background: "rgba(240,196,106,0.12)" }} />
                <div
                  className="relative flex flex-col items-center justify-center px-4 py-2.5"
                  style={{ border: "1.5px solid rgba(240,196,106,0.55)", borderRadius: 5, minWidth: 64 }}
                >
                  <div className="absolute pointer-events-none" style={{ inset: 3, border: "1px solid rgba(240,196,106,0.22)", borderRadius: 2 }} />
                  <span className="font-display font-bold leading-none" style={{ fontSize: "1.1rem", letterSpacing: "0.12em", color: "hsl(42 78% 58%)", opacity: 0.9 }}>NOTO</span>
                  <span className="font-sans leading-none mt-1" style={{ fontSize: "0.35rem", letterSpacing: "0.25em", color: "rgba(240,196,106,0.5)", textTransform: "uppercase" }}>Est. 2024</span>
                </div>
              </motion.div>

              {/* Cup */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.24 }}
                className="relative flex flex-col items-center gap-2"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="relative flex flex-col items-center gap-2"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full blur-2xl pointer-events-none" style={{ background: "rgba(240,196,106,0.28)" }} />
                  {/* Cup image + NOTO overlay */}
                  <div className="relative h-20 w-auto flex items-center justify-center" style={{ opacity: 0.85 }}>
                    <img src="/images/icon-cup-togo.png" alt="Drink in a cup" className="h-20 w-auto" />
                    <span
                      className="absolute font-display font-bold pointer-events-none"
                      style={{
                        top: "68%", left: "50%", transform: "translate(-50%, -50%)",
                        fontSize: "0.5rem", letterSpacing: "0.18em",
                        color: "hsl(42 78% 58%)", opacity: 0.95,
                      }}
                    >NOTO</span>
                  </div>
                  <span className="text-[9px] tracking-[0.25em] uppercase font-sans" style={{ color: "rgba(240,196,106,0.45)" }}>In a Cup</span>
                </motion.div>
              </motion.div>

            </div>

          </div>
        </div>

        {/* Right: 2×2 collage — all cells fill flush */}
        <div
          className="w-full md:w-[62%] flex-shrink-0 order-1 md:order-2 relative grid grid-cols-2"
          style={{ minHeight: 1100, gridTemplateRows: "1fr 1fr", gap: 2, background: "hsl(25 18% 5%)" }}
        >
          {/* [0,0] Photo — frosted can (slight width crop is fine) */}
          <div className="relative overflow-hidden">
            <img
              src="/images/gallery-canned-dionne1.jpg"
              alt="Dionne holding a frosted NOTO canned drink"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center 5%" }}
            />
          </div>

          {/* [0,1] Video — making of #1 */}
          <div className="relative overflow-hidden">
            <video
              src="/videos/canned-making1.mp4"
              autoPlay muted loop playsInline preload="none"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center top" }}
            />
          </div>

          {/* [1,0] Video — making of #2 */}
          <div className="relative overflow-hidden">
            <video
              src="/videos/canned-making2.mp4"
              autoPlay muted loop playsInline preload="none"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center top" }}
            />
          </div>

          {/* [1,1] Photo — two NOTO cans */}
          <div className="relative overflow-hidden">
            <img
              src="/images/gallery-canned-dionne2.jpg"
              alt="Dionne holding two branded NOTO canned drinks"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center 10%" }}
            />
          </div>

          {/* Outer perimeter fade — blends just the 4 outer edges into bg */}
          <div className="absolute inset-0 pointer-events-none z-10" style={{
            background: `
              linear-gradient(to right,  hsl(25 18% 5%) 0%, transparent 8%),
              linear-gradient(to left,   hsl(25 18% 5%) 0%, transparent 8%),
              linear-gradient(to bottom, hsl(25 18% 5%) 0%, transparent 8%),
              linear-gradient(to top,    hsl(25 18% 5%) 0%, transparent 8%)
            `
          }} />
        </div>
      </div>

      {/* ── SCROLLING TICKER ───────────────────────────────────── */}
      <div
        className="relative py-5 border-t border-b"
        style={{ borderColor: "rgba(240,196,106,0.12)" }}
      >
        <div className="pointer-events-none absolute top-0 left-0 h-full w-20 z-10"
          style={{ background: "linear-gradient(to right, hsl(25 18% 5%), transparent)" }} />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-20 z-10"
          style={{ background: "linear-gradient(to left, hsl(25 18% 5%), transparent)" }} />

        <div style={{ overflow: "hidden" }}>
          <div
            className="drinks-track flex"
            style={{ gap: GAP, width: "max-content", paddingRight: GAP }}
          >
            {track.map((drink, i) => {
              const isTea = teas.some((t) => t.name === drink.name);
              const isSig = drink.signature;
              return (
                <div
                  key={i}
                  className="flex-shrink-0 flex flex-col justify-between rounded-xl px-5 py-4"
                  style={{
                    width: CARD_W,
                    height: 110,
                    background: isSig
                      ? "rgba(240,196,106,0.14)"
                      : isTea
                        ? "rgba(50,110,80,0.18)"
                        : "rgba(240,196,106,0.06)",
                    border: `1px solid ${
                      isSig
                        ? "rgba(240,196,106,0.35)"
                        : isTea
                          ? "rgba(100,200,140,0.2)"
                          : "rgba(240,196,106,0.12)"
                    }`,
                  }}
                >
                  <span
                    className="text-[10px] tracking-widest uppercase font-sans font-semibold"
                    style={{ color: isTea && !isSig ? "hsl(160 60% 55%)" : "hsl(42 78% 58%)" }}
                  >
                    {drink.tag}
                  </span>
                  <span className="font-display text-white text-base leading-snug font-semibold">
                    {drink.name}
                  </span>
                  <span
                    className="text-xs font-sans font-medium"
                    style={{ color: isSig ? "hsl(42 78% 68%)" : "rgba(255,255,255,0.3)" }}
                  >
                    {isSig ? "$9 canned" : "$7 canned"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .drinks-track {
          animation: drinks-scroll ${allDrinks.length * 3}s linear infinite;
        }
        .drinks-track:hover {
          animation-play-state: paused;
        }
        @keyframes drinks-scroll {
          0%   { transform: translateX(calc(-${CARD_W}px * ${allDrinks.length} - ${GAP}px * ${allDrinks.length})); }
          100% { transform: translateX(0); }
        }

        @media (min-width: 768px) {
          .canned-col-text  { width: 38%; }
          .canned-col-photo { width: 31%; }
        }
      `}</style>
    </section>
  );
}
