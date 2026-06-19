"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, scaleOnHover } from "@/lib/animations";
import Link from "next/link";
import { Star } from "lucide-react";
import Image from "next/image";

// Abstract Dental SVG Shape for background
const AbstractDentalShape = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 200 200" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      fill="currentColor" 
      d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18.1,97.6,-2.4C98.4,13.3,94,29.3,84.7,42.5C75.4,55.7,61.2,66.1,46.3,73.5C31.4,80.9,15.7,85.3,0.3,84.7C-15.1,84.1,-30.2,78.5,-44.6,70.9C-59,63.3,-72.6,53.7,-81.4,40.6C-90.2,27.5,-94.1,10.9,-91.7,-4.8C-89.3,-20.5,-80.6,-35.3,-70.2,-47.5C-59.8,-59.7,-47.7,-69.3,-34.5,-76.9C-21.3,-84.5,-7,-90.1,6.5,-91.3C20,-92.5,40.6,-89.3,44.7,-76.4Z" 
      transform="translate(100 100)" 
    />
  </svg>
);

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-background pt-20">
      
      {/* Soft radial background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-secondary rounded-full mix-blend-multiply filter blur-[80px] opacity-70" />
        <div className="absolute bottom-[20%] left-[5%] w-[500px] h-[500px] bg-accent/10 rounded-full mix-blend-multiply filter blur-[80px] opacity-70" />
        
        {/* Abstract shapes */}
        <AbstractDentalShape className="absolute top-[15%] right-[5%] w-64 h-64 text-primary opacity-5 animate-[spin_60s_linear_infinite]" />
        <AbstractDentalShape className="absolute bottom-[10%] left-[10%] w-48 h-48 text-accent opacity-5 animate-[spin_40s_linear_infinite_reverse]" />
      </div>
      
      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT: Text Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8 max-w-xl"
          >
            <motion.h1 
              variants={fadeInUp} 
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-text leading-[1.1] tracking-tighter"
            >
              Ваша улыбка —<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent inline-block mt-2">
                наше призвание
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp} 
              className="text-lg md:text-xl text-text/70 leading-relaxed font-sans"
            >
              Современная стоматология с заботой о каждом пациенте. Мы сочетаем передовые технологии и высочайший уровень комфорта.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp} 
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <Link href="/appointment" className="w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="w-full shadow-premium hover:shadow-lg hover:shadow-primary/20"
                >
                  Записаться на приём
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full">
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="w-full border-2 border-transparent hover:border-primary/10 hover:bg-white"
                >
                  Узнать о нас
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT: Image and Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative h-[500px] lg:h-[700px] w-full"
          >
            {/* Main Image */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 border-8 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000" 
                alt="Счастливый пациент стоматологии" 
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}
            <motion.div 
              {...scaleOnHover}
              className="absolute -left-6 bottom-16 lg:bottom-24 glass-panel rounded-2xl p-4 md:p-5 flex items-center gap-4 border border-white/60 shadow-glass cursor-default"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white shadow-inner">
                <Star className="w-6 h-6 fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl md:text-2xl font-bold text-text">4.9</span>
                <span className="text-sm font-medium text-text/70">1200+ пациентов</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
