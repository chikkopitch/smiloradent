"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/home/CTABanner";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Heart, Shield, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-secondary/30">
        <Container>
          <SectionHeading 
            title="О клинике Complident" 
            subtitle="Устанавливаем новые стандарты премиального стоматологического ухода с 2010 года. Мы сочетаем искусство с медицинской точностью."
            centered
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-premium"
            >
              <Image 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                alt="Современный интерьер стоматологической клиники" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-6">Наша философия</h2>
              <div className="space-y-6 text-text/80 leading-relaxed text-lg">
                <p>
                  В Complident мы верим, что визит к стоматологу должен быть событием, которого ждут с нетерпением, а не боятся. Именно поэтому мы превратили традиционную клинику в уютное пространство, напоминающее спа-салон.
                </p>
                <p>
                  Наш подход основан на убеждении, что каждая улыбка — это шедевр. Мы не просто лечим зубы; мы создаем улыбки, которые подчеркивают вашу естественную красоту и дарят уверенность в себе.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Heart, title: "Забота с любовью", text: "Мы относимся к каждому пациенту как к члену семьи, обеспечивая абсолютный комфорт и отсутствие тревоги во время каждого визита." },
              { icon: Shield, title: "Передовые технологии", text: "От 3D-сканирования до безболезненного лазерного лечения — мы инвестируем в лучшее оборудование ради идеального результата." },
              { icon: Clock, title: "Уважение к вашему времени", text: "Никаких очередей в приемной. Ваш прием начинается точно в назначенное время, потому что мы ценим ваш плотный график." }
            ].map((value, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-8 rounded-3xl bg-white shadow-premium border border-gray-50 text-center">
                <div className="w-16 h-16 mx-auto bg-secondary text-primary rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-text mb-4">{value.title}</h3>
                <p className="text-text/70">{value.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
