import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-card/60 via-transparent to-card/60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-8">

          {/* Panino image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-72 lg:w-80 flex-shrink-0"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-primary/20">
              <img
                src="/images/cta-panino-crosssection.jpg"
                alt="Hands holding a fresh NOTO panino cross-section"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Centre text */}
          <div className="flex-1 text-center px-0 md:px-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              <img
                src="/images/italy-flag.png"
                alt="Italian flag"
                className="w-24 h-16 object-cover rounded shadow-lg"
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6"
            >
              Stop By Today!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Grab a fresh panino and quality coffee in the heart of Mount Gambier.
            </motion.p>
          </div>

          {/* Coffee image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-72 lg:w-80 flex-shrink-0"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-primary/20">
              <img
                src="/images/gallery-latte-fern-hq.jpg"
                alt="NOTO fern latte art overhead"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
