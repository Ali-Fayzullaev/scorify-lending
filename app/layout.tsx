import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "./components/Analytics";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ScoriFy — Полный кредитный скоринг за 5 минуты | Казахстан",
  description: "Проверяем по 5 государственным базам + подбираем подходящие ипотечные программы из 50+ предложений банков Казахстана. Первые 5 скорингов бесплатно!",
  keywords: "кредитный скоринг, ипотечные программы, брокеры Казахстан, ПКБ, ЕНПФ, ГКБ, ЧСИ, БМГ, ScoriFy",
  authors: [{ name: "ScoriFy Team" }],
  creator: "ScoriFy",
  publisher: "ScoriFy",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    url: "https://scorify.kz",
    title: "ScoriFy — Полный кредитный скоринг за 5 минуты | Казахстан",
    description: "Проверяем по 5 государственным базам + подбираем подходящие ипотечные программы из 50+ предложений банков Казахстана. Первые 5 скорингов бесплатно!",
    siteName: "ScoriFy",
    images: [
      {
        url: "https://scorify.kz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ScoriFy - Кредитный скоринг за 5 минуты",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScoriFy — Полный кредитный скоринг за 5 минуты | Казахстан",
    description: "Проверяем по 5 государственным базам + подбираем подходящие ипотечные программы из 50+ предложений банков Казахстана",
    images: ["https://scorify.kz/og-image.jpg"],
  },
  verification: {
    google: "Dif8ORhksjpV-_9-DZ87cI3xDZrxvGf1IC1wfTqAQ9k",
  },
  other: {
    "yandex-verification": "подтверждено через DNS",
    // Разрешаем Яндексу переводить страницу
    "yandex-translate": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-inter bg-slate-50 text-slate-900 antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
