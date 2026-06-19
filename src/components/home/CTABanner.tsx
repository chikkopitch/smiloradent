"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export const CTABanner = () => {
  return (
    <section className="py-24">
      <Container>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-primary rounded-4xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20"
        >
          {/* Abstract background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
              Готовы к безупречной улыбке?
            </h2>
            <p className="text-lg md:text-xl text-secondary/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              Запишитесь на консультацию сегодня и сделайте первый шаг к исключительному здоровью зубов в расслабляющей атмосфере нашей клиники.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/appointment">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto px-10">
                  Записаться на приём
                </Button>
              </Link>
              <Link href="/contacts">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 px-10">
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
