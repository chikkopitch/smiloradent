"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { doctors } from "@/lib/data";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { CTABanner } from "@/components/home/CTABanner";
import { Award, GraduationCap } from "lucide-react";

export default function DoctorsPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-secondary/30">
        <Container>
          <SectionHeading 
            title="Наши специалисты" 
            subtitle="Наша команда высококвалифицированных врачей и специалистов стремится предоставить вам обслуживание по самым высоким стандартам."
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
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8"
          >
            {doctors.map((doctor) => (
              <motion.div key={doctor.id} variants={fadeInUp}>
                <Card hoverLift className="h-full overflow-hidden flex flex-col group">
                  <div className="relative h-80 overflow-hidden bg-gray-100">
                    <Image 
                      src={doctor.imageUrl} 
                      alt={doctor.name} 
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-2">
                      {doctor.specialty}
                    </p>
                    <h3 className="font-serif text-3xl font-bold text-text mb-4">
                      {doctor.name}
                    </h3>
                    <p className="text-text/70 leading-relaxed mb-6 flex-1">
                      {doctor.bio}
                    </p>
                    <div className="space-y-3 pt-6 border-t border-gray-100 mt-auto">
                      <div className="flex items-center text-sm text-text/80">
                        <Award className="w-5 h-5 text-primary mr-3" /> Сертифицированный специалист
                      </div>
                      <div className="flex items-center text-sm text-text/80">
                        <GraduationCap className="w-5 h-5 text-primary mr-3" /> Более 8 лет опыта работы
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
