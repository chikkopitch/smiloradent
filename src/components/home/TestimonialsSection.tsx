"use client";

import React from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { testimonials } from "@/lib/data";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <Container>
        <SectionHeading 
          title="Patient Stories" 
          subtitle="Don't just take our word for it. Read what our patients have to say about their experience at Complident."
          centered
        />
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={fadeInUp}>
              <Card glass className="p-8 h-full relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-text/80 text-lg leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary font-serif text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-text">{testimonial.name}</h4>
                    <p className="text-sm text-text/50">Проверенный пациент</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
