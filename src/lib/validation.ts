import { z } from "zod";

export const appointmentSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Введите корректный номер телефона"),
  service: z.string().min(1, "Выберите услугу"),
  date: z.string().min(1, "Выберите желаемую дату"),
  comment: z.string().optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
