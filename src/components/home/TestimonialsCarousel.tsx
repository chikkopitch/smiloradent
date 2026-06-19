"use client";

import React, { useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsList = [
  {
    id: "r1",
    name: "Елена Смирнова",
    text: "Потрясающая клиника! Очень боялась стоматологов с детства, но здесь подход просто невероятный. Врач Анна Соколова всё подробно объясняла и процедура прошла абсолютно безболезненно. Огромное спасибо!",
    rating: 5
  },
  {
    id: "r2",
    name: "Иван Алексеев",
    text: "Ставил импланты у Дмитрия Волкова. Высший пилотаж! От первичной консультации до конечного результата — премиальный сервис. Всё зажило быстро и без осложнений.",
    rating: 5
  },
  {
    id: "r3",
    name: "Марина Ковалёва",
    text: "Долго выбирала где поставить элайнеры. Выбрала Complident и не пожалела. Удобное расположение, идеальная чистота и действительно заботливый персонал. Результат уже вижу!",
    rating: 5
  },
  {
    id: "r4",
    name: "Олег Дмитриев",
    text: "Привел сына на первый осмотр. Доктор Павел Морозов быстро нашел общий язык с ребенком, включил мультики, подарил игрушку в конце. Сын даже не понял, что ему лечили зубик.",
    rating: 5
  },
  {
    id: "r5",
    name: "Светлана Романова",
    text: "Делала профессиональное отбеливание перед свадьбой. Эффект 'вау'! Никакой чувствительности после процедуры. Сервис в клинике на уровне хорошего отеля 5 звезд.",
    rating: 5
  }
];

export const TestimonialsCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % testimonialsList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollPrev = () => {
    setSelectedIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  const scrollNext = () => {
    setSelectedIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-primary text-white">
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      />
      
      {/* Abstract blurred background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/20 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Истории улыбок
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-accent rounded-full mx-auto"
          />
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto px-4 md:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          <div className="relative h-[400px] sm:h-[300px] overflow-hidden rounded-3xl" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl flex flex-col"
              >
                <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonialsList[selectedIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl font-sans leading-relaxed text-white/90 mb-8 italic flex-1">
                  &ldquo;{testimonialsList[selectedIndex].text}&rdquo;
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent font-serif text-xl border border-accent/30">
                    {testimonialsList[selectedIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white tracking-wide">{testimonialsList[selectedIndex].name}</h4>
                    <p className="text-sm text-white/50">Пациент Complident</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center mt-12 gap-8">
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={scrollPrev}
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-3" role="tablist">
              {testimonialsList.map((_, index) => (
                <button
                  key={index}
                  role="tab"
                  aria-selected={index === selectedIndex}
                  aria-label={`Перейти к отзыву ${index + 1}`}
                  onClick={() => setSelectedIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    index === selectedIndex ? "w-8 bg-accent" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={scrollNext}
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
};
