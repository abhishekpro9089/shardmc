import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
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
    { name: "Server", href: "/#server", isAnchor: true },
    { name: "Store", href: "/#store", isAnchor: true },
    { name: "Rules", href: "/rules" },
    { name: "Discord", href: "https://discord.gg/ShardMC", isExternal: true },
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
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-orange-500 transition-colors duration-300">
              SHARD<span className="text-orange-500">MC</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isExternal ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium tracking-wide transition-all duration-200 hover:text-orange-400 text-gray-300 uppercase"
                >
                  {link.name}
                </a>
              ) : link.isAnchor ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const id = link.href.replace("/#", "");
                    if (location !== "/") {
                      window.location.href = `/#${id}`;
                    } else {
                      document
                        .getElementById(id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-sm font-medium tracking-wide transition-all duration-200 hover:text-orange-400 text-gray-300 uppercase"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-200 hover:text-orange-400 ${
                    location === link.href
                      ? "text-orange-500"
                      : "text-gray-300"
                  }`}
                >
                  {link.name.toUpperCase()}
                </Link>
              )
            )}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 md:hidden pt-24 px-4"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) =>
                link.isExternal ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-white uppercase"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-white uppercase"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
