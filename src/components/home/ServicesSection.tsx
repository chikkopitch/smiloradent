"use client";

import React, { useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { motion } from "framer-motion";
import { ServiceCard, ServiceCardSkeleton, ServiceData } from "./ServiceCard";
import { Activity, Sparkles, Smile, ShieldPlus, Baby, Droplets } from "lucide-react";

const servicesList: ServiceData[] = [
  {
    id: "therapy",
    title: "Терапия",
    description: "Комплексное лечение кариеса и эстетическая реставрация зубов.",
    icon: Activity
  },
  {
    id: "whitening",
    title: "Отбеливание",
    description: "Профессиональное отбеливание для достижения идеальной улыбки.",
    icon: Sparkles
  },
  {
    id: "ortho",
    title: "Ортодонтия",
    description: "Исправление прикуса с помощью брекетов и современных элайнеров.",
    icon: Smile
  },
  {
    id: "implants",
    title: "Имплантация",
    description: "Установка имплантов под ключ с пожизненной гарантией.",
    icon: ShieldPlus
  },
  {
    id: "pediatric",
    title: "Детская стоматология",
    description: "Бережное и безболезненное лечение для малышей от 3 лет.",
    icon: Baby
  },
  {
    id: "hygiene",
    title: "Гигиена",
    description: "Профессиональная чистка и профилактика заболеваний полости рта.",
    icon: Droplets
  }
];

export const ServicesSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching for skeleton demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle abstract background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4 tracking-tighter">
            Наши услуги
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="relative">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <ServiceCardSkeleton key={`skeleton-${i}`} />
              ))}
            </div>
          ) : (
            // Actual Cards with Stagger Reveal
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {servicesList.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
};
