"use client";

import React from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { services } from "@/lib/data";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Link from "next/link";
import { Button } from "../ui/Button";

export const ServicesPreview = () => {
  return (
    <section className="py-24 bg-white relative">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionHeading 
            title="Наши премиум-услуги" 
            subtitle="Комплексный уход, созданный специально для вашей уникальной улыбки. Мы используем самые современные технологии для обеспечения комфорта и высочайших результатов."
            className="mb-0 flex-1"
          />
          <Link href="/services" className="shrink-0">
            <Button variant="outline">Все услуги</Button>
          </Link>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.slice(0, 3).map((service) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            
            return (
              <motion.div key={service.id} variants={fadeInUp}>
                <Link href={`/services#${service.id}`} className="block h-full">
                  <Card hoverLift className="h-full p-8 border border-gray-100 flex flex-col group">
                    <div className="w-14 h-14 rounded-2xl bg-secondary text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {IconComponent && <IconComponent className="w-7 h-7" />}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-text mb-4">
                      {service.title}
                    </h3>
                    <p className="text-text/70 leading-relaxed flex-1 mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:text-accent transition-colors">
                      Подробнее <Icons.ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
