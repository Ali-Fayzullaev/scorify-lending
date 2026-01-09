"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Users, TrendingUp, Award, Sparkles, ThumbsUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Reviews() {
  const [activeReview, setActiveReview] = useState<number>(0);

  const reviews = [
    {
      id: 1,
      name: "Алексей Петров",
      position: "Ипотечный брокер",
      company: "Freedom Realty",
      avatar: "https://picsum.photos/seed/alex/100/100",
      rating: 5,
      review: "ScoriFy кардинально изменил мою работу! Раньше тратил по полчаса на каждого клиента, сейчас получаю полный отчёт за 2 минуты. Клиенты довольны быстрой обратной связью.",
      highlight: "Экономлю 4 часа в день",
      color: "blue"
    },
    {
      id: 2,
      name: "Марина Сидорова",
      position: "Руководитель отдела ипотеки",
      company: "Premier Finance",
      avatar: "https://picsum.photos/seed/marina/100/100",
      rating: 5,
      review: "Использую ScoriFy для всей команды из 8 менеджеров. Постоплата очень удобна, а детальная аналитика помогает контролировать эффективность каждого сотрудника.",
      highlight: "Производительность команды выросла в 3 раза",
      color: "green"
    },
    {
      id: 3,
      name: "Дмитрий Козлов",
      position: "Независимый брокер",
      company: "Самозанятый",
      avatar: "https://picsum.photos/seed/dmitry/100/100",
      rating: 5,
      review: "Сначала сомневался в необходимости платить за проверки, но после 5 бесплатных скорингов понял - это окупается уже с первого клиента. Теперь принимаю в 2 раза больше заявок.",
      highlight: "Удвоил количество клиентов",
      color: "purple"
    },
    {
      id: 4,
      name: "Елена Кожевникова",
      position: "Ипотечный консультант",
      company: "Home Credit",
      avatar: "https://picsum.photos/seed/elena/100/100",
      rating: 5,
      review: "Больше всего нравится автоматический подбор программ. Система сама показывает какие банки одобрят клиента. Это просто волшебство! Клиенты в восторге от скорости.",
      highlight: "Конверсия заявок увеличилась на 40%",
      color: "orange"
    },
    {
      id: 5,
      name: "Сергей Волков",
      position: "Директор агентства",
      company: "MortgageKZ",
      avatar: "https://picsum.photos/seed/sergey/100/100",
      rating: 5,
      review: "ScoriFy стал нашим конкурентным преимуществом. Пока другие агентства тратят дни на проверки, мы даём ответ клиенту за час. Это серьёзно влияет на выбор в нашу пользу.",
      highlight: "Обходим конкурентов по скорости",
      color: "indigo"
    }
  ];

  const stats = [
    { icon: Users, value: "50+", label: "довольных брокеров", color: "text-blue-600" },
    { icon: Star, value: "4.9/5", label: "средний рейтинг", color: "text-amber-600" },
    { icon: ThumbsUp, value: "98%", label: "рекомендуют коллегам", color: "text-green-600" },
    { icon: Award, value: "24/7", label: "поддержка пользователей", color: "text-purple-600" }
  ];

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-500 fill-yellow-400' : 'text-gray-200'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-400 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-sm mb-6"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <Quote className="w-4 h-4 text-blue-600" />
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            </div>
            <span className="text-sm font-medium text-slate-700">Отзывы клиентов</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="text-slate-800">Что говорят</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
              наши клиенты
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            
            Более 500 брокеров уже оценили преимущества работы с ScoriFy. Читайте реальные отзывы от наших пользователей.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl blur-xl" />
            
            <div className="relative bg-gradient-to-br from-white to-blue-50/30 border border-blue-100/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="text-center group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      
                      <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>
                        {stat.value}
                      </div>
                      
                      <div className="text-sm text-slate-600 font-medium leading-tight">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Featured Review */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>

            {/* Review Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Main Review Card */}
                <Card className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50 border border-slate-200/50 rounded-3xl p-8 lg:p-12 shadow-xl">
                  {/* Background Quote Icon */}
                  <div className="absolute top-4 right-4 text-slate-100">
                    <Quote className="w-24 h-24" />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-6">
                      {renderStars(reviews[activeReview].rating)}
                      <span className="ml-2 text-sm font-semibold text-slate-700">
                        {reviews[activeReview].rating}.0/5.0
                      </span>
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-lg lg:text-xl text-slate-800 leading-relaxed mb-8 font-medium italic">
                      "{reviews[activeReview].review}"
                    </blockquote>

                    {/* Highlight */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mb-8"
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span className="text-green-700 font-semibold">
                          {reviews[activeReview].highlight}
                        </span>
                      </div>
                    </motion.div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="w-16 h-16 border-2 border-white shadow-lg">
                          <Image
                            src={reviews[activeReview].avatar}
                            alt={reviews[activeReview].name}
                            width={64}
                            height={64}
                            className="object-cover rounded-full"
                          />
                        </Avatar>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xl font-bold text-slate-900">
                            {reviews[activeReview].name}
                          </h4>
                        </div>
                        <div className="text-slate-600">
                          {reviews[activeReview].position}
                        </div>
                        <div className="text-blue-600 font-medium">
                          {reviews[activeReview].company}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Review Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveReview(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeReview 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Reviews Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {reviews.slice(0, 4).map((review, index) => {
              if (index === activeReview) return null; // Skip active review
              return (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setActiveReview(index)}
                >
                  <Card className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 border border-slate-200/50 hover:border-blue-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12 flex-shrink-0">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          width={48}
                          height={48}
                          className="object-cover rounded-full"
                        />
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h5 className="font-bold text-slate-900">{review.name}</h5>
                            <div className="text-sm text-slate-500">{review.position}</div>
                          </div>
                          <div className="flex items-center gap-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        
                        <p className="text-sm text-slate-600 line-clamp-3 mb-2">
                          "{review.review}"
                        </p>
                        
                        <div className="text-xs font-medium text-green-600">
                          {review.highlight}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-xl" />
            
            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10 text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Станьте частью успешного сообщества
                </h3>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Присоединяйтесь к брокерам, которые уже увеличили свою эффективность и прибыль с помощью ScoriFy
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      const element = document.querySelector('#cta');
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      Попробовать бесплатно
                      <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
                    onClick={() => {
                      const element = document.querySelector('#faq');
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Quote className="w-5 h-5" />
                      Ответы на вопросы
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}