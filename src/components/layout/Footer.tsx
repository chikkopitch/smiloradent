"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";

// Inline Tooth SVG Logo for Footer
const ToothLogo = () => (
  <svg 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="text-primary"
  >
    <path d="M12 21c-2-1-3-3-3-5s1-3 1-5-1-4-3-4c-2 0-3 2-3 4s1 3 1 5-1 4-3 4" />
    <path d="M12 21c2-1 3-3 3-5s-1-3-1-5 1-4 3-4c2 0 3 2 3 4s-1 3-1 5 1 4 3 4" />
    <path d="M8 6c0-2 1-4 4-4s4 2 4 4" />
    <path d="M12 11v1" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-primary/10 relative z-10 pt-16 mt-20">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
      
      <Container className="pb-8">
        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Logo & Vision */}
          <div className="flex flex-col gap-6 max-w-sm">
            <Link 
              href="/" 
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1 -ml-1 w-max" 
              aria-label="Complident Home"
            >
              <div className="bg-secondary p-2 rounded-xl group-hover:scale-105 transition-transform duration-300">
                <ToothLogo />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-text">
                Complident
              </span>
            </Link>
            <p className="text-text/70 text-sm leading-relaxed">
              Ваша улыбка — наше призвание. Современная стоматология с заботой о каждом пациенте. Мы объединяем передовые технологии и высочайший уровень комфорта.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col md:items-center">
            <div>
              <h3 className="font-serif text-lg font-bold text-text mb-6">Навигация</h3>
              <ul className="flex flex-col gap-4">
                <li><Link href="/services" className="text-sm font-medium text-text/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 -mx-1">Услуги</Link></li>
                <li><Link href="/doctors" className="text-sm font-medium text-text/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 -mx-1">Врачи</Link></li>
                <li><Link href="/about" className="text-sm font-medium text-text/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 -mx-1">О нас</Link></li>
                <li><Link href="/privacy" className="text-sm font-medium text-text/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 -mx-1">Политика конфиденциальности</Link></li>
              </ul>
            </div>
          </div>

          {/* Col 3: Legal & Actions */}
          <div className="flex flex-col md:items-end text-left md:text-right">
            <div>
              <h3 className="font-serif text-lg font-bold text-text mb-6">Связь</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="tel:+74951234567" className="text-sm font-bold text-text hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 -mx-1 md:mx-0">
                    +7 (495) 123-45-67
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@complident.com" className="text-sm font-medium text-text/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 -mx-1 md:mx-0">
                    hello@complident.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium text-text/50">
            © {new Date().getFullYear()} Стоматология Complident. Все права защищены.
          </p>
          <div className="text-xs font-medium text-text/40">
            Лицензия № ЛО-77-01-000000 от 01.01.2023
          </div>
        </div>
      </Container>
    </footer>
  );
};
