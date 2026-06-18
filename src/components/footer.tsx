import { Instagram, Facebook, Heart } from "lucide-react";
import logoImg from "@assets/175b8506-a4ad-419a-a047-7af61f178955_1773648940204.jpg";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/30 text-muted-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-border/30 pb-12">

          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="NOTO logo" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h3 className="font-display font-bold text-2xl text-foreground tracking-wider">NOTO</h3>
                <p className="text-[10px] tracking-[0.2em] uppercase text-primary font-medium">Panino · Dolce · Caffé</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Fresh ingredients, great flavour, and a warm Italian welcome. Mount Gambier's local spot for handmade panini, piadina, and specialty coffee.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-3 italic">#ladolcevita</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg text-foreground mb-4">Visit Us</h4>
            <ul className="space-y-2 text-sm">
              <li>3–9 Elizabeth St</li>
              <li>Mount Gambier SA 5290</li>
              <li className="pt-2">Mon–Fri: 6:30am – 3:00pm</li>
              <li>Saturday: 7:00am – 3:00pm</li>
              <li className="text-muted-foreground/50">Sunday: Closed</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg text-foreground mb-4">Follow Us</h4>
            <div className="flex space-x-3 mb-4">
              <a
                href="https://instagram.com/noto_panino"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/notopanino"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">@noto_panino</p>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/50">
          <p>&copy; {new Date().getFullYear()} Noto Panino. All rights reserved.</p>
          <p className="mt-3 md:mt-0 italic tracking-wide flex items-center gap-1.5">
            fatto con amore
            <Heart className="w-3 h-3 fill-red-400 text-red-400 not-italic" />
            <img src="/images/italy-flag.png" alt="Italian flag" className="h-3.5 w-auto object-cover rounded-sm shadow-sm not-italic" />
          </p>
        </div>
      </div>
    </footer>
  );
}
