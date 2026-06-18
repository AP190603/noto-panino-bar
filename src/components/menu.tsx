import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { UtensilsCrossed } from "lucide-react";

type Category = "Breakfast" | "Panino" | "Piadina" | "Drinks";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  tag?: string;
}

const MENU_DATA: Record<Category, { subtitle?: string; note?: string; items: MenuItem[] }> = {
  "Breakfast": {
    subtitle: "Served till 11AM",
    items: [
      {
        name: "Brioche Bun",
        price: "$14",
        description: "Scrambled egg, crispy pancetta, tomato salsa (relish)",
      },
      {
        name: "Margherita Wrap",
        price: "$10",
        description: "Tomato salsa, mozzarella. Add ham +$2",
        tag: "VEG",
      },
      {
        name: "Pizza Bianca",
        price: "$5",
        description: "Our in-house white pizza aromatized with olive oil, garlic, rosemary, salt",
        tag: "VEG",
      },
    ],
  },
  "Panino": {
    subtitle: "Served from 10AM",
    note: "Gluten free bread available +$4",
    items: [
      {
        name: ".1 Prosciutto",
        price: "$18",
        description: "Sliced premium Italian prosciutto, stracciatella, rocket, olive oil",
      },
      {
        name: ".2 Mortadella",
        price: "$17",
        description: "Shaved mortadella al pistaccio (contains nuts), giardiniera, stracciatella, almond pesto",
      },
      {
        name: ".3 Contadina",
        price: "$16",
        description: "A mixed fresh and marinated veg, fior di latte mozzarella, rocket, olive oil",
        tag: "VEG",
      },
      {
        name: ".4 Caprese",
        price: "$16",
        description: "Fior di latte mozzarella, fresh tomato, rocket, olive oil, basil pesto",
        tag: "VEG",
      },
      {
        name: ".5 Tonnato",
        price: "$17",
        description: "Yellow fin tuna, provolone cheese, giardiniera, salsa mayo, red onion",
      },
      {
        name: ".6 Salami",
        price: "$17",
        description: "Salami casareccio, fior di latte mozzarella, tomato, marinated artichokes",
      },
    ],
  },
  "Piadina": {
    subtitle: "Toasted Piadina",
    note: "Gluten free bread available +$4",
    items: [
      {
        name: ".1 Funghi",
        price: "$16",
        description: "Mushroom ragú, provolone cheese, mozzarella, truffle oil. Add ham +$4",
        tag: "VEG",
      },
      {
        name: ".2 Ham",
        price: "$15",
        description: "Premium off the bone ham, provolone cheese, cheddar, fresh tomato",
      },
      {
        name: ".3 Mortadella",
        price: "$16",
        description: "Mortadella, provolone cheese, fresh tomato",
      },
    ],
  },
  "Drinks": {
    subtitle: "Beverages",
    items: [
      { name: "Acqua Still", price: "$5.50" },
      { name: "Acqua Sparkling", price: "$6" },
      { name: "Chinotto", price: "$7" },
      { name: "Limonata", price: "$7" },
      { name: "Cola", price: "$7" },
      { name: "Aranciata Rossa", price: "$7" },
      { name: "Santa Vittoria Juice", price: "$4.50", description: "Pear or peach" },
    ],
  },
};

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("Panino");
  const current = MENU_DATA[activeCategory];

  return (
    <section id="menu" className="pt-14 pb-24 md:pt-16 md:pb-24 bg-card relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-5"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5 text-primary" />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-3"
          >
            What We Serve
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display text-foreground"
          >
            Our Menu
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-10">
            {(Object.keys(MENU_DATA) as Category[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 border",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground bg-transparent"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-8">
                {current.subtitle && (
                  <span className="text-primary font-display italic text-lg">{current.subtitle}</span>
                )}
                {current.note && (
                  <>
                    <span className="text-border">·</span>
                    <span className="text-muted-foreground text-sm">{current.note}</span>
                  </>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {current.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group border-b border-border/40 pb-5 hover:border-primary/40 transition-colors duration-300"
                  >
                    <div className="flex items-baseline justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        {item.tag && (
                          <span className="text-[10px] font-bold tracking-widest uppercase border border-primary/60 text-primary px-1.5 py-0.5 rounded">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <span className="text-primary font-semibold font-display ml-4 shrink-0">
                        {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

              {(activeCategory === "Panino" || activeCategory === "Piadina") && (
                <div className="mt-8 p-4 border border-border/30 rounded-xl bg-muted/30">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Extras: </span>
                    +Gourmet meats +$4 · +Tomato/pesto +$2
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
