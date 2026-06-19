"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  return (
    <section className="min-h-[90vh] py-24 bg-gradient-to-br from-secondary/50 to-white flex items-center">
      <Container className="w-full max-w-3xl">
        <SectionHeading 
          title="Запись на приём" 
          subtitle="Сделайте первый шаг к идеальной улыбке. Заполните форму ниже для онлайн-записи на консультацию."
          centered
        />

        <Card className="p-8 md:p-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {/* Progress bar */}
                <div className="flex gap-2 mb-10">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i} 
                      className={`h-2 flex-1 rounded-full transition-colors duration-300 ${i <= step ? "bg-primary" : "bg-gray-100"}`} 
                    />
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {step === 1 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                      <h3 className="font-serif text-2xl font-bold text-text">1. Какая услуга вас интересует?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { key: "General Checkup", val: "Профилактический осмотр" },
                          { key: "Cosmetic Consultation", val: "Эстетическая консультация" },
                          { key: "Tooth Pain / Emergency", val: "Зубная боль / Экстренный случай" },
                          { key: "Orthodontics", val: "Ортодонтия (брекеты/элайнеры)" },
                          { key: "Implants", val: "Имплантация" },
                          { key: "Other", val: "Другое" }
                        ].map((service) => (
                          <label key={service.key} className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                            <input type="radio" name="service" className="w-4 h-4 text-primary focus:ring-primary border-gray-300" required />
                            <span className="ml-3 font-medium text-text/80">{service.val}</span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                      <h3 className="font-serif text-2xl font-bold text-text">2. Когда бы вы хотели прийти?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Удобная дата" type="date" required />
                        <div className="w-full flex flex-col gap-1.5">
                          <label className="text-sm font-medium text-text/80">Удобное время</label>
                          <select className="h-12 px-4 rounded-xl border border-primary/20 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent transition-all" required>
                            <option value="">Выберите время</option>
                            <option value="morning">Утро (с 08:00 до 12:00)</option>
                            <option value="afternoon">День (с 12:00 до 16:00)</option>
                            <option value="evening">Вечер (с 16:00 до 19:00)</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                      <h3 className="font-serif text-2xl font-bold text-text">3. Контактные данные</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Имя" required />
                        <Input label="Фамилия" required />
                        <Input label="Электронная почта" type="email" required />
                        <Input label="Номер телефона" type="tel" required />
                      </div>
                    </motion.div>
                  )}

                  <div className="flex justify-between pt-6 border-t border-gray-100">
                    {step > 1 ? (
                      <Button type="button" variant="ghost" onClick={() => setStep(step - 1)}>
                        Назад
                      </Button>
                    ) : <div></div>}
                    <Button type="submit" isLoading={isSubmitting}>
                      {step === 3 ? "Подтвердить запись" : "Продолжить"}
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-success" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-text mb-4">Заявка успешно отправлена!</h3>
                <p className="text-lg text-text/70 mb-8 max-w-md mx-auto">
                  Спасибо, что выбрали Complident. Наш администратор свяжется с вами в ближайшее время для подтверждения точного времени приема.
                </p>
                <Button onClick={() => window.location.href = "/"}>На главную</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </Container>
    </section>
  );
}
