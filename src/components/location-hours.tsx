import { motion } from "framer-motion";
import { MapPin, Clock, Instagram, Facebook, Navigation, Phone, Mail, MessageCircle, Share2 } from "lucide-react";

export function LocationHours() {
  return (
    <section id="location" className="pt-14 pb-24 md:pt-16 md:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-xl border border-border/50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952!2d140.7761275!3d-37.8276671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa9e29007f451a77%3A0xf29f1f36bad99b3c!2sNoto%20Panino!5e0!3m2!1sen!2sau!4v1710000000000!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NOTO Location"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-10"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <Navigation className="w-5 h-5 text-primary" />
              </div>
              <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-3">Come Visit</p>
              <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
                Find Us
              </h2>
              <p className="text-muted-foreground">
                Nestled in the heart of Mount Gambier, your daily slice of Italy awaits.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-primary/15 p-3 rounded-full text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    3–9 Elizabeth St<br />
                    Mount Gambier SA 5290
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-primary/15 p-3 rounded-full text-primary">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">Contact Us</h3>
                  <div className="space-y-1.5">
                    <a
                      href="tel:0408716690"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 shrink-0" />
                      0408 716 690
                    </a>
                    <a
                      href="mailto:notopanino@gmail.com"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      notopanino@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-primary/15 p-3 rounded-full text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">Opening Hours</h3>
                  <ul className="text-muted-foreground space-y-1.5">
                    <li className="flex justify-between w-52"><span>Mon – Fri</span> <span>6:30am – 3:00pm</span></li>
                    <li className="flex justify-between w-52"><span>Saturday</span> <span>7:00am – 3:00pm</span></li>
                    <li className="flex justify-between w-52"><span>Sunday</span> <span className="text-foreground/40">Closed</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-primary/15 p-3 rounded-full text-primary">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">Follow &amp; Connect</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Stay up to date with our specials and daily offers on social media.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com/noto_panino"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors text-sm font-medium"
                    >
                      <Instagram className="w-4 h-4" />
                      @noto_panino
                    </a>
                    <a
                      href="https://www.facebook.com/notopanino"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors text-sm font-medium"
                    >
                      <Facebook className="w-4 h-4" />
                      @noto_panino
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
