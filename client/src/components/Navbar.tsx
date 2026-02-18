import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Store", href: "/store" },
    { name: "News", href: "/news" },
    { name: "Vote", href: "/vote" },
    { name: "Wiki", href: "/wiki" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-orange-500/20">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold font-display tracking-tight text-white group-hover:text-orange-500 transition-colors duration-300">
              SHARD<span className="text-orange-500">MC</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-all duration-200 hover:text-orange-400 hover:scale-105 ${
                  location === link.href ? "text-orange-500" : "text-gray-300"
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/5">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button 
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg px-6 shadow-lg shadow-orange-600/20 border border-orange-500/50 hover:shadow-orange-600/40 transition-all duration-300"
            >
              <User className="w-4 h-4 mr-2" />
              LOGIN
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden pt-24 px-4"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-bold font-display ${
                    location === link.href ? "text-orange-500" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Button className="w-full bg-orange-600 py-6 text-lg">LOGIN</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
