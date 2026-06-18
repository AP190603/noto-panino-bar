import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@assets/175b8506-a4ad-419a-a047-7af61f178955_1773648940204.jpg";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Hours & Location", href: "#location" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border/50 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="NOTO logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col leading-none">
              <span className={cn(
                "font-display font-bold text-xl tracking-wider transition-colors",
                isScrolled || mobileMenuOpen ? "text-foreground" : "text-white"
              )}>
                NOTO
              </span>
              <span className={cn(
                "text-[9px] tracking-[0.2em] uppercase font-medium transition-colors",
                isScrolled || mobileMenuOpen ? "text-primary" : "text-white/70"
              )}>
                Panino · Dolce · Caffé
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isScrolled ? "text-foreground/80" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-[70] p-2 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay — outside header so it's never clipped */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center space-y-8 md:hidden transition-all duration-300",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Close button inside the overlay */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
          className="absolute top-5 right-4 p-2 rounded-full hover:bg-border/40 transition-colors"
        >
          <X className="w-7 h-7 text-foreground" />
        </button>

        <img src={logoImg} alt="NOTO logo" className="w-20 h-20 rounded-full object-cover mb-2" />
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-display text-foreground hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
}
