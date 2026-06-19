"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { services } from "@/lib/data";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { CTABanner } from "@/components/home/CTABanner";

export default function ServicesPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-secondary/30">
        <Container>
          <SectionHeading 
            title="Наши стоматологические услуги" 
            subtitle="Ознакомьтесь с полным спектром наших услуг. От регулярных профилактических осмотров до передовой эстетической стоматологии — мы поможем вам обрести идеальную улыбку."
            centered
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
              return (
                <motion.div key={service.id} variants={fadeInUp} id={service.id}>
                  <Card hoverLift className="h-full p-8 border border-gray-100 flex flex-col">
                    <div className="w-16 h-16 rounded-2xl bg-secondary text-primary flex items-center justify-center mb-6">
                      {IconComponent && <IconComponent className="w-8 h-8" />}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-text mb-4">
                      {service.title}
                    </h3>
                    <p className="text-text/70 leading-relaxed mb-8 flex-1">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {/* Placeholder for specific service features */}
                      <li className="flex items-center text-sm text-text/80">
                        <Icons.Check className="w-4 h-4 text-success mr-2 shrink-0" /> Современное оборудование
                      </li>
                      <li className="flex items-center text-sm text-text/80">
                        <Icons.Check className="w-4 h-4 text-success mr-2 shrink-0" /> Опытные специалисты
                      </li>
                    </ul>
                    <a href="/appointment" className="text-primary font-semibold text-sm hover:text-accent transition-colors mt-auto inline-flex items-center">
                      Записаться на {service.title.toLowerCase()} <Icons.ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
