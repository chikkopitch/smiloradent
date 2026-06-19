"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className = "" 
}) => {
  return (
    <motion.div 
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-12 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4 tracking-tighter">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-text/70 max-w-2xl mx-auto font-sans">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-1 w-20 bg-accent rounded-full ${centered ? "mx-auto" : ""}`} />
    </motion.div>
  );
};
