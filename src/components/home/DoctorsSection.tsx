"use client";

import React from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const doctorsList = [
  {
    id: "dr-sokolova",
    name: "Анна Соколова",
    specialty: "Терапевт",
    experience: "12 лет",
    image: "/dr-sokolova.png"
  },
  {
    id: "dr-volkov",
    name: "Дмитрий Волков",
    specialty: "Хирург-имплантолог",
    experience: "15 лет",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=533"
  },
  {
    id: "dr-kuznetsova",
    name: "Мария Кузнецова",
    specialty: "Ортодонт",
    experience: "9 лет",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=533"
  },
  {
    id: "dr-morozov",
    name: "Павел Морозов",
    specialty: "Детский стоматолог",
    experience: "8 лет",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=533"
  }
];

export const DoctorsSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionHeading 
            title="Наша команда" 
            subtitle="Высококвалифицированные специалисты, которые постоянно совершенствуют свои навыки для вашего здоровья."
            className="mb-0 flex-1"
          />
          <Link href="/doctors" className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full">
            <Button variant="outline">Все врачи</Button>
          </Link>
        </div>

        {/* 
          Mobile: Horizontal Scroll Snap
          Desktop: 4 Column Grid 
        */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-6 pb-8 -mx-4 px-4 lg:mx-0 lg:px-0 lg:pb-0 hide-scrollbar"
        >
          {doctorsList.map((doctor) => (
            <motion.div 
              key={doctor.id} 
              variants={fadeInUp}
              className="min-w-[280px] lg:min-w-0 snap-center group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer shadow-premium isolate focus-within:ring-2 focus-within:ring-accent"
            >
              {/* Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={doctor.image} 
                  alt={`Фото врача: ${doctor.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B35] via-[#1C2B35]/50 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Info Block */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col justify-end h-full">
                <div className="transform transition-transform duration-500 ease-[0.22,1,0.36,1] translate-y-12 group-hover:translate-y-0 group-focus-within:translate-y-0">
                  <p className="text-accent font-medium tracking-wide uppercase text-xs mb-1">
                    {doctor.specialty}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2 leading-tight">
                    {doctor.name}
                  </h3>
                  <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium mb-6 opacity-100 transition-opacity">
                    Опыт: {doctor.experience}
                  </div>
                  
                  {/* Hidden CTA that slides up */}
                  <div className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 delay-100">
                    <Link href={`/appointment?doctor=${doctor.id}`} className="block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full">
                      <Button size="sm" variant="ghost" className="w-full bg-white text-text hover:bg-secondary border-0">
                        Записаться
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
