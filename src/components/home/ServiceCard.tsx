"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
    >
      <Link 
        href={`/services#${service.id}`}
        className="block h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-3xl"
        aria-label={`Узнать подробнее об услуге: ${service.title}`}
      >
        <div className="h-full bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-premium hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 flex flex-col">
          
          {/* Icon in Aqua Circle */}
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:bg-accent group-hover:rotate-12">
            <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
          </div>

          {/* Title */}
          <h3 className="font-serif text-2xl font-bold text-text mb-3 tracking-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-text/70 leading-relaxed mb-8 flex-1 line-clamp-2">
            {service.description}
          </p>

          {/* Animated Link */}
          <div className="mt-auto flex items-center text-primary font-semibold text-sm tracking-wide uppercase group-hover:text-accent transition-colors">
            <span className="relative overflow-hidden">
              Подробнее
              <span className="absolute bottom-0 left-0 w-full h-px bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </div>

        </div>
      </Link>
    </motion.div>
  );
};

export const ServiceCardSkeleton = () => {
  return (
    <div className="h-full bg-white/40 backdrop-blur-md border border-white/30 p-8 rounded-3xl shadow-sm flex flex-col animate-pulse" aria-hidden="true">
      <div className="w-14 h-14 rounded-full bg-gray-200/50 mb-6" />
      <div className="h-7 w-3/4 bg-gray-200/50 rounded-md mb-4" />
      <div className="h-4 w-full bg-gray-200/50 rounded-md mb-2" />
      <div className="h-4 w-5/6 bg-gray-200/50 rounded-md mb-8 flex-1" />
      <div className="mt-auto h-4 w-24 bg-gray-200/50 rounded-md" />
    </div>
  );
};
