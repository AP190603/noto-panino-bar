import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    text: "The owners are traditional Italian, the coffee is perfect, so many options. The panini is to die for — I love the prosciutto but the others are ridiculously good too. So friendly and nothing is too much trouble. You won't be disappointed here unless you come too late and all the food is gone!",
    author: "Rob B.",
    date: "January 2026"
  },
  {
    text: "The first time visiting this shop blew me away at how much the friendliness, craft, and care was given to their guests and products. The coffee, panini, and filled sfogliatelle are the best I've ever had in South Australia. I was here for work for a few days and visited every single day.",
    author: "Anthony D.",
    date: "September 2025"
  },
  {
    text: "The very friendly young lady was very welcoming into the aesthetic cozy caffé — very pleasant. The food did not disappoint at all and I have definitely found my favourite breakfast place. Would highly recommend for a great breakfast experience!",
    author: "Gianni G.",
    date: "December 2024"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-foreground text-card relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <img
              src="/images/noto-logo-banner.jpg"
              alt="NOTO Panino · Dolce · Caffé"
              className="w-72 md:w-96 rounded-xl object-cover opacity-90"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1 text-yellow-500 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display mb-2"
          >
            5.0 Stars
          </motion.h2>
          <p className="text-card/70 font-medium mb-3">Loved by our community — see for yourself</p>
          <a
            href="https://www.google.com/maps/place/Noto+Panino/@-37.8276628,140.7735526,17z/data=!4m8!3m7!1s0xaa9e29007f451a77:0xf29f1f36bad99b3c!8m2!3d-37.8276671!4d140.7761275!9m1!1b1!16s%2Fg%2F11wh3n5vks?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary/80 hover:text-primary transition-colors duration-200 underline underline-offset-4"
          >
            Read all reviews on Google
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex space-x-1 text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-lg font-display italic leading-relaxed mb-8 text-card/90">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold tracking-wider uppercase text-primary">
                  — {review.author}
                </p>
                <p className="text-xs text-card/40">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
