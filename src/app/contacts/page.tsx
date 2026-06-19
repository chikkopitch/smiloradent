"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactsPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-secondary/30">
        <Container>
          <SectionHeading 
            title="Контакты" 
            subtitle="Мы всегда готовы ответить на любые ваши вопросы об услугах, стоимости лечения или помочь вам записаться на приём."
            centered
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <Card className="p-8 md:p-12">
              <h3 className="font-serif text-3xl font-bold text-text mb-8">Напишите нам</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Имя" placeholder="Иван" required />
                  <Input label="Фамилия" placeholder="Иванов" required />
                </div>
                <Input label="Электронная почта" type="email" placeholder="ivan@example.com" required />
                <Input label="Номер телефона" type="tel" placeholder="+7 (999) 123-45-67" />
                
                <div className="w-full flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-text/80">Сообщение</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="p-4 rounded-xl border border-primary/20 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    placeholder="Чем мы можем вам помочь?"
                    required
                  ></textarea>
                </div>

                <Button size="lg" className="w-full">Отправить сообщение</Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-3xl font-bold text-text mb-8">Контактная информация</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary text-primary rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text mb-1">Адрес клиники</h4>
                    <p className="text-text/70">г. Москва, ул. Ленина, д. 45<br/>БЦ &quot;Премиум&quot;, 1 этаж</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text mb-1">Телефон</h4>
                    <p className="text-text/70">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text mb-1">Электронная почта</h4>
                    <p className="text-text/70">hello@complident.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text mb-1">Режим работы</h4>
                    <p className="text-text/70">Понедельник - Пятница: 08:00 - 21:00<br/>Суббота: 09:00 - 19:00<br/>Воскресенье: Выходной</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 w-full h-64 bg-gray-200 rounded-3xl overflow-hidden relative border border-gray-300">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.305105206277!2d37.61529121593051!3d55.75322048055375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sThe%20Moscow%20Kremlin!5e0!3m2!1sen!2sru!4v1628156172658!5m2!1sen!2sru" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  title="Клиника на карте"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
