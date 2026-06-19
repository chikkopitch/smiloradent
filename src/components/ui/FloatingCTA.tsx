"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CalendarClock } from "lucide-react";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link 
            href="/appointment" 
            className="group flex items-center justify-center bg-gradient-to-r from-accent to-primary text-white p-4 rounded-full shadow-premium hover:shadow-glass-hover transition-shadow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/50"
            aria-label="Записаться на прием"
          >
            <CalendarClock className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
