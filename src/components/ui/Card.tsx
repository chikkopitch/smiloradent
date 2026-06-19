"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  glass?: boolean;
  hoverLift?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = "", 
  glass = false, 
  hoverLift = false,
  ...props 
}) => {
  const baseStyles = "rounded-3xl overflow-hidden";
  const glassStyles = glass ? "glass-panel shadow-premium" : "bg-white shadow-premium";
  const hoverStyles = hoverLift ? "hover:-translate-y-1 hover:shadow-glass-hover transition-all duration-300" : "";

  return (
    <motion.div 
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
