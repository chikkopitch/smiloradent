import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import dynamic from "next/dynamic";

const TestimonialsCarousel = dynamic(
  () => import("@/components/home/TestimonialsCarousel").then(mod => mod.TestimonialsCarousel),
  { ssr: false, loading: () => <div className="py-24 text-center text-text/50">Загрузка отзывов...</div> }
);

const AppointmentSection = dynamic(
  () => import("@/components/home/AppointmentSection").then(mod => mod.AppointmentSection),
  { ssr: false, loading: () => <div className="py-24 text-center text-text/50">Загрузка формы записи...</div> }
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <TestimonialsCarousel />
      <AppointmentSection />
    </>
  );
}
