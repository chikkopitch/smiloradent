import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] // Custom ease-out cubic for premium feel
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const scaleOnHover = {
  whileHover: { 
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" as const }
  },
  whileTap: { 
    scale: 0.98 
  }
};

export const glassFadeIn: Variants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)", y: 20 },
  visible: {
    opacity: 1,
    backdropFilter: "blur(12px)",
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};
