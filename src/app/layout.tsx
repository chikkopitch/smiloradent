import type { Metadata } from "next";
import { inter, playfair } from "@/lib/fonts";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

export const metadata: Metadata = {
  title: "Complident | Премиальная стоматология в Москве",
  description: "Клиника Complident предлагает передовые методы лечения зубов, имплантацию и ортодонтию. Современное оборудование и врачи с большим опытом.",
  openGraph: {
    title: "Complident | Премиальная стоматология в Москве",
    description: "Передовые методы лечения зубов, имплантация и ортодонтия. Запишитесь на прием онлайн.",
    url: "https://complident.example.com",
    siteName: "Complident Dental Clinic",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complident | Премиальная стоматология",
    description: "Профессиональная забота о ваших зубах.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col pt-20">
        <LocalBusinessSchema />
        <SkipToContent />
        <CustomCursor />
        <ScrollProgress />
        <FloatingCTA />
        
        <Header />
        <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
