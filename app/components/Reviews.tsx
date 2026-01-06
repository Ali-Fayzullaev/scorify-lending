"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Алексей Петров",
      position: "Ипотечный брокер",
      company: "Freedom Realty",
      avatar: "https://picsum.photos/seed/alex/80/80",
      rating: 5,
      review: "ScoriFy кардинально изменил мою работу! Раньше тратил по полчаса на каждого клиента, сейчас получаю полный отчёт за 2 минуты. Клиенты довольны быстрой обратной связью.",
      highlight: "Экономлю 4 часа в день"
    },
    {
      id: 2,
      name: "Марина Сидорова",
      position: "Руководитель отдела ипотеки",
      company: "Premier Finance",
      avatar: "https://picsum.photos/seed/marina/80/80",
      rating: 5,
      review: "Использую ScoriFy для всей команды из 8 менеджеров. Постоплата очень удобна, а детальная аналитика помогает контролировать эффективность каждого сотрудника.",
      highlight: "Производительность команды выросла в 3 раза"
    },
    {
      id: 3,
      name: "Дмитрий Козлов",
      position: "Независимый брокер",
      company: "Самозанятый",
      avatar: "https://picsum.photos/seed/dmitry/80/80",
      rating: 5,
      review: "Сначала сомневался в необходимости платить за проверки, но после 5 бесплатных скорингов понял - это окупается уже с первого клиента. Теперь принимаю в 2 раза больше заявок.",
      highlight: "Удвоил количество клиентов"
    },
    {
      id: 4,
      name: "Елена Кожевникова",
      position: "Ипотечный консультант",
      company: "Home Credit",
      avatar: "https://picsum.photos/seed/elena/80/80",
      rating: 5,
      review: "Больше всего нравится автоматический подбор программ. Система сама показывает какие банки одобрят клиента. Это просто волшебство! Клиенты в восторге от скорости.",
      highlight: "Конверсия заявок увеличилась на 40%"
    },
    {
      id: 5,
      name: "Сергей Волков",
      position: "Директор агентства",
      company: "MortgageKZ",
      avatar: "https://picsum.photos/seed/sergey/80/80",
      rating: 5,
      review: "ScoriFy стал нашим конкурентным преимуществом. Пока другие агентства тратят дни на проверки, мы даём ответ клиенту за час. Это серьёзно влияет на выбор в нашу пользу.",
      highlight: "Обходим конкурентов по скорости"
    }
  ];

  const stats = [
    { number: "500+", label: "довольных брокеров" },
    { number: "4.9/5", label: "средний рейтинг" }, 
    { number: "98%", label: "рекомендуют коллегам" },
    { number: "24/7", label: "поддержка пользователей" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Что говорят наши клиенты
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Более 500 брокеров уже оценили преимущества работы с ScoriFy. Читайте реальные отзывы от наших пользователей.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 border border-slate-200 h-full relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute -top-2 -right-2 text-blue-100 opacity-50">
                  <Quote className="w-16 h-16 transform rotate-12" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <blockquote className="text-slate-700 leading-relaxed mb-6 relative z-10">
                  "{review.review}"
                </blockquote>

                {/* Highlight */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                  <div className="text-green-700 font-semibold text-sm">
                    💡 {review.highlight}
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="object-cover rounded-full"
                    />
                  </Avatar>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {review.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {review.position}
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      {review.company}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-blue-200 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Станьте частью успешного сообщества
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к брокерам, которые уже увеличили свою эффективность и прибыль с помощью ScoriFy
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.querySelector('#cta');
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Попробовать бесплатно
              </button>
              <button 
                onClick={() => {
                  const element = document.querySelector('#faq');
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300"
              >
                Ответы на вопросы
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}