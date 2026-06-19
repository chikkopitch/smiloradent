import { Doctor, Service, Testimonial } from "./types";

export const services: Service[] = [
  {
    id: "therapy",
    title: "Терапия",
    description: "Комплексное лечение кариеса и эстетическая реставрация зубов.",
    icon: "Activity"
  },
  {
    id: "whitening",
    title: "Отбеливание",
    description: "Профессиональное отбеливание для достижения идеальной улыбки.",
    icon: "Sparkles"
  },
  {
    id: "ortho",
    title: "Ортодонтия",
    description: "Исправление прикуса с помощью брекетов и современных элайнеров.",
    icon: "Smile"
  },
  {
    id: "implants",
    title: "Имплантация",
    description: "Установка имплантов под ключ с пожизненной гарантией.",
    icon: "ShieldPlus"
  },
  {
    id: "pediatric",
    title: "Детская стоматология",
    description: "Бережное и безболезненное лечение для малышей от 3 лет.",
    icon: "Baby"
  },
  {
    id: "hygiene",
    title: "Гигиена",
    description: "Профессиональная чистка и профилактика заболеваний полости рта.",
    icon: "Droplets"
  }
];

export const doctors: Doctor[] = [
  {
    id: "dr-sokolova",
    name: "Анна Соколова",
    specialty: "Терапевт",
    bio: "Анна специализируется на терапевтическом лечении и художественной реставрации зубов с опытом более 12 лет.",
    imageUrl: "/dr-sokolova.png"
  },
  {
    id: "dr-volkov",
    name: "Дмитрий Волков",
    specialty: "Хирург-имплантолог",
    bio: "Дмитрий — эксперт в области хирургической стоматологии и дентальной имплантации повышенной сложности.",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=533"
  },
  {
    id: "dr-kuznetsova",
    name: "Мария Кузнецова",
    specialty: "Ортодонт",
    bio: "Мария создает безупречные улыбки с помощью современных элайнеров и брекет-систем любой сложности.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=533"
  },
  {
    id: "dr-morozov",
    name: "Павел Морозов",
    specialty: "Детский стоматолог",
    bio: "Павел легко находит подход к самым маленьким пациентам, превращая визит к стоматологу в веселую игру.",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=533"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Екатерина Р.",
    text: "Самый комфортный опыт лечения зубов в моей жизни. Персонал невероятно профессионален, а клиника великолепна.",
    rating: 5
  },
  {
    id: "t2",
    name: "Дмитрий Т.",
    text: "Доктор Соколова полностью преобразила мою улыбку. Теперь не могу перестать улыбаться! Рекомендую Complident.",
    rating: 5
  },
  {
    id: "t3",
    name: "София Л.",
    text: "Мои дети с удовольствием ходят к доктору Морозову. Атмосфера очень спокойная и премиальная.",
    rating: 5
  }
];
