"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Услуги", href: "/services" },
  { name: "Врачи", href: "/doctors" },
  { name: "О клинике", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];

// Inline Tooth SVG Logo
const ToothLogo = () => (
  <svg 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="text-primary"
  >
    <path d="M12 21c-2-1-3-3-3-5s1-3 1-5-1-4-3-4c-2 0-3 2-3 4s1 3 1 5-1 4-3 4" />
    <path d="M12 21c2-1 3-3 3-5s-1-3-1-5 1-4 3-4c2 0 3 2 3 4s-1 3-1 5 1 4 3 4" />
    <path d="M8 6c0-2 1-4 4-4s4 2 4 4" />
    <path d="M12 11v1" />
  </svg>
);

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll-triggered border after 80px
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-primary/10 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1 -ml-1" 
            aria-label="Complident Home"
          >
            <div className="bg-secondary p-2 rounded-xl group-hover:scale-105 transition-transform duration-300">
              <ToothLogo />
            </div>
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-text">
              Complident
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="relative text-[15px] font-medium text-text hover:text-primary transition-colors group py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1"
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/appointment" className="hidden md:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full">
              <Button 
                size="md" 
                className="bg-gradient-to-r from-accent to-primary border-0 text-white hover:shadow-lg hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
              >
                Записаться
              </Button>
            </Link>
            
            <button 
              className="md:hidden p-2 text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-text/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, y: -20, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -20, scaleY: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 z-50 bg-white border-b border-primary/10 shadow-xl shadow-primary/5 origin-top md:hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-text hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/50"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="pt-6 border-t border-secondary">
                  <Link href="/appointment" onClick={() => setMobileMenuOpen(false)}>
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-accent to-primary text-white border-0 shadow-md"
                    >
                      Записаться на приём
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
