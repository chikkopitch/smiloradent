"use client";

import React, { useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { motion } from "framer-motion";

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

const stats: Stat[] = [
  { label: "Лет опыта работы", value: 15, suffix: "+" },
  { label: "Счастливых пациентов", value: 10, suffix: "k+" },
  { label: "Опытных врачей", value: 12, suffix: "" },
  { label: "Полученных наград", value: 25, suffix: "+" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    
    const totalMilSecDur = 2000;
    const incrementTime = (totalMilSecDur / end) * 2;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="font-serif text-5xl md:text-6xl font-bold text-white">
      {count}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col gap-2"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-secondary/80 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
