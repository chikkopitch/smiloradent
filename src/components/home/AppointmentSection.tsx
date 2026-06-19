"use client";

import React, { useState } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { MapPin, Phone, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type AppointmentFormData = {
  name: string;
  phone: string;
  service: string;
  date: string;
  comment: string;
};

// Custom generic mask function for +7 (___) ___-__-__
const applyPhoneMask = (val: string) => {
  const digits = val.replace(/\D/g, "").substring(0, 11);
  if (digits.length === 0) return "";
  let res = "+7";
  if (digits.length > 1) res += ` (${digits.substring(1, 4)}`;
  if (digits.length > 4) res += `) ${digits.substring(4, 7)}`;
  if (digits.length > 7) res += `-${digits.substring(7, 9)}`;
  if (digits.length > 9) res += `-${digits.substring(9, 11)}`;
  return res;
};

// Custom Floating Label Input
const FloatingInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }>(
  ({ label, error, className = "", onChange, value, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          className={`peer w-full h-14 px-4 pt-4 pb-1 rounded-xl border-2 outline-none transition-all duration-300 bg-white/50 focus:bg-white placeholder-transparent ${
            error 
              ? "border-red-500 focus:border-red-500 animate-shake" 
              : "border-primary/10 hover:border-primary/30 focus:border-accent"
          } ${className}`}
          placeholder={label}
          aria-invalid={!!error}
          aria-describedby={error ? `${props.name}-error` : undefined}
          {...props}
        />
        <label 
          htmlFor={props.id}
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            value || props.type === "date"
              ? "top-2 text-xs text-text/60" 
              : "top-4 text-text/60 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent"
          }`}
        >
          {label}
        </label>
        {error && (
          <p id={`${props.name}-error`} className="text-red-500 text-xs mt-1 absolute -bottom-5">
            {error}
          </p>
        )}
      </div>
    );
  }
);
FloatingInput.displayName = "FloatingInput";

export const AppointmentSection = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: "",
    phone: "",
    service: "",
    date: "",
    comment: ""
  });
  type AppointmentErrors = Partial<Record<keyof AppointmentFormData, string>>;
  const [errors, setErrors] = useState<AppointmentErrors>({});

  const validate = () => {
    const newErrors: AppointmentErrors = {};
    if (formData.name.trim().length === 0 || formData.name.trim().length === 1) {
      newErrors.name = "Имя должно содержать минимум 2 символа";
    }
    if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(formData.phone)) newErrors.phone = "Введите корректный номер телефона";
    if (!formData.service) newErrors.service = "Выберите услугу";
    if (!formData.date) newErrors.date = "Выберите желаемую дату";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(formData);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section className="py-24 bg-background relative z-10" id="appointment">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
          
          {/* LEFT: Form Panel */}
          <div className="flex-1 w-full max-w-2xl mx-auto lg:max-w-none">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-glass relative overflow-hidden h-full">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-8 tracking-tight">
                      Запишитесь онлайн
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                      <FloatingInput 
                        label="Имя" 
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        error={errors.name} 
                        id="name"
                      />

                      <FloatingInput 
                        label="Телефон" 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: applyPhoneMask(e.target.value) })}
                        error={errors.phone} 
                        id="phone"
                      />

                      <div className="relative w-full">
                        <select
                          name="service"
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className={`peer w-full h-14 px-4 pt-4 pb-1 rounded-xl border-2 outline-none transition-all duration-300 bg-white/50 focus:bg-white appearance-none cursor-pointer ${
                            errors.service ? "border-red-500 animate-shake" : "border-primary/10 hover:border-primary/30 focus:border-accent"
                          }`}
                          aria-invalid={!!errors.service}
                        >
                          <option value="" disabled hidden></option>
                          <option value="therapy">Терапия</option>
                          <option value="ortho">Ортодонтия</option>
                          <option value="surgery">Хирургия</option>
                          <option value="pediatric">Детская стоматология</option>
                        </select>
                        <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${formData.service ? "top-2 text-xs text-text/60" : "top-4 text-text/60 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent"}`}>
                          Услуга
                        </label>
                        {/* Custom arrow */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-transparent border-r-transparent border-t-text/50 border-l-[5px] border-r-[5px] border-t-[5px]" />
                        {errors.service && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.service}</p>}
                      </div>

                      <FloatingInput 
                        label="Удобная дата" 
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        error={errors.date} 
                        id="date"
                        className="appearance-none"
                      />

                      <div className="relative w-full">
                        <textarea
                          name="comment"
                          id="comment"
                          rows={3}
                          value={formData.comment}
                          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                          className="peer w-full px-4 pt-6 pb-2 rounded-xl border-2 outline-none transition-all duration-300 bg-white/50 focus:bg-white resize-none border-primary/10 hover:border-primary/30 focus:border-accent"
                        />
                        <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${formData.comment ? "top-2 text-xs text-text/60" : "top-4 text-text/60 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent"}`}>
                          Комментарий (необязательно)
                        </label>
                      </div>

                      <div>
                        <Button 
                          type="submit" 
                          size="lg" 
                          isLoading={isSubmitting}
                          className="w-full bg-gradient-to-r from-accent to-primary border-0 text-white shadow-premium hover:shadow-glass-hover"
                        >
                          Отправить заявку
                        </Button>
                        <p className="text-xs text-center text-text/50 mt-4 leading-relaxed max-w-sm mx-auto">
                          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных
                        </p>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                    <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-12 h-12 text-success" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-text mb-4">Заявка принята!</h3>
                    <p className="text-text/70 mb-8 max-w-sm">
                      Спасибо за обращение. Наш администратор свяжется с вами в течение 10 минут для подтверждения времени.
                    </p>
                    <Button onClick={() => { setIsSuccess(false); setFormData({name: "", phone: "", service: "", date: "", comment: ""}); }} variant="outline">
                      Отправить еще
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Info Panel & Map */}
          <div className="flex-1 w-full flex flex-col gap-8 max-w-2xl mx-auto lg:max-w-none">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-glass flex flex-col justify-center">
              <h3 className="font-serif text-3xl font-bold text-text mb-8">Контакты клиники</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text mb-1">Адрес</h4>
                    <p className="text-text/70">г. Москва, ул. Ленина, д. 45<br/>БЦ &quot;Премиум&quot;, 1 этаж</p>
                  </div>
                </div>

                {/* Working hours table-like */}
                <div className="bg-secondary/50 rounded-2xl p-6">
                  <h4 className="font-bold text-text mb-4 text-sm uppercase tracking-wider">Часы работы</h4>
                  <ul className="space-y-3 text-sm text-text/80">
                    <li className="flex justify-between items-center border-b border-primary/5 pb-2">
                      <span>Пн - Пт</span>
                      <span className="font-semibold text-text">08:00 - 21:00</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-primary/5 pb-2">
                      <span>Суббота</span>
                      <span className="font-semibold text-text">09:00 - 19:00</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Воскресенье</span>
                      <span className="font-semibold text-accent">Выходной</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text mb-1">Телефоны</h4>
                    <a href="tel:+74951234567" className="block text-text/70 hover:text-primary transition-colors text-lg">+7 (495) 123-45-67</a>
                  </div>
                </div>

                {/* Social Links Custom SVGs */}
                <div className="pt-4 flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="VK">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M15.071 16.442c-2.316 0-4.66-1.391-6.195-3.805-2.613-4.103-3.048-8.529-3.072-8.916h2.721c.024.12 1.096 3.992 2.766 6.551 1.706 2.615 2.502 2.923 2.825 2.923.136 0 .399-.072.399-1.077V6.024c0-1.006-.296-1.464-1.127-1.464h-.888C12.876 3.732 13.921 3.5 15.228 3.5c1.479 0 1.954.108 2.381.251.688.232.658.822.658 2.398v4.06c0 1.082.518 1.189.702 1.189.366 0 1.03-.232 2.805-3.056 1.042-1.657 1.488-3.328 1.554-3.618h2.768c-.048.24-1.258 3.593-4.137 7.037-1.353 1.621-2.072 2.455-2.072 2.81 0 .356.592.936 2.333 2.628 2.062 1.996 2.615 3.195 2.748 3.55H22.1c-.248-.553-1.614-2.315-3.023-3.708-1.579-1.56-2.228-1.896-2.822-1.896-.708 0-.97.355-.97 1.041v1.855c0 .901-.264 1.405-1.214 1.405z"/></svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="WhatsApp">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 21.493l-3.139-.001-.001-3.139c-1.89-1.89-3.064-4.5-3.064-7.382 0-5.772 4.685-10.457 10.457-10.457 5.771 0 10.457 4.685 10.457 10.457 0 5.772-4.686 10.457-10.457 10.457-2.883 0-5.492-1.174-7.382-3.064l3.129 3.129z" opacity="0.1"/><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.668.148-.198.297-.766.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.575-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.98 1-3.646-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.431-9.875 9.882-9.875 2.64 0 5.12 1.028 6.985 2.895 1.866 1.867 2.893 4.347 2.893 6.988 0 5.446-4.432 9.884-9.878 9.884m8.413-18.29C18.219 1.256 15.228 0 12.055 0 5.433 0 .046 5.385.044 12.008c0 2.118.552 4.186 1.603 6.008l-2.27 8.286 8.473-2.222c1.764.954 3.745 1.458 5.795 1.458h.005c6.621 0 12.01-5.388 12.012-12.012 0-3.21-1.25-6.23-3.518-8.498"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-64 rounded-[2.5rem] overflow-hidden shadow-glass relative border border-white/50 bg-white">
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
  );
};
