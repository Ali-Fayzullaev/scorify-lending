"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, DollarSign, Building, Scale, Smartphone, CheckCircle, Database, Shield, Lock, Zap, Target, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Sources() {
  const [activeSource, setActiveSource] = useState<string | null>("pkb");
  const [mobileSlide, setMobileSlide] = useState<number>(0);

  const sources = [
     {
      id: "chsi",
      icon: Scale,
      title: "ЧСИ",
      subtitle: "Частные Судебные Исполнители",
      description: "Исполнительные производства",
      features: ["Производства", "Должники ЧСИ", "Взыскания", "Исп. листы", "История"],
      color: "red",
      gradient: "from-red-500 to-rose-500",
    },
     {
      id: "bmg",
      icon: Smartphone,
      title: "БМГ",
      subtitle: "База Мобильных Граждан",
      description: "Верификация номера телефона",
      features: ["Подтверждение", "Telegram", "Контакты", "Мессенджеры", "Активность"],
      color: "indigo",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      id: "pkb",
      icon: BarChart3,
      title: "ПКБ",
      subtitle: "Первое Кредитное Бюро",
      description: "Полная кредитная история клиента",
      features: ["Производства", "Должники ЧСИ", "Взыскания", "Исп. листы", "История"],
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "gkb",
      icon: Building,
      title: "ГКБ",
      subtitle: "Государственное Кредитное Бюро",
      description: "Проверка на банкротство и долги",
      features: ["Статус банкротства", "Гос. долги", "Налоги", "Штрафы", "Статус должника"],
      color: "purple",
      gradient: "from-purple-500 to-violet-500",
    },
    
    {
      id: "enpf",
      icon: DollarSign,
      title: "ЕНПФ",
      subtitle: "Единый Накопительный Пенсионный Фонд",
      description: "Реальные доходы на основе отчислений",
      features: ["Зарплата", "Стаж работы", "Трудоустройство", "Динамика доходов", "Налоги"],
      color: "green",
      gradient: "from-green-500 to-emerald-500",
    },
   
  ];

  const nextMobileSlide = () => {
    setMobileSlide((prev) => (prev + 1) % sources.length);
  };

  const prevMobileSlide = () => {
    setMobileSlide((prev) => (prev - 1 + sources.length) % sources.length);
  };

  return (
    <section id="sources" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-blue-50/30" />
      
      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.1, y: 0 }}
        viewport={{ once: true }}
        className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-400 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-sm mb-6"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <Database className="w-4 h-4 text-blue-600" />
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
            <span className="text-sm font-medium text-slate-700">Источники данных</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              5 источников
            </span>
            <br />
            <span className="text-slate-800">комплексной проверки</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Все официальные государственные базы Казахстана в одной системе
          </motion.p>
        </motion.div>

        {/* Mobile Carousel (Visible on mobile only) */}
        <div className="lg:hidden mb-12">
          <motion.div
            key={mobileSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Navigation Buttons */}
            <button
              onClick={prevMobileSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>
            
            <button
              onClick={nextMobileSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>

            {/* Source Card */}
            <div className="px-2">
              <Card className="relative w-full bg-gradient-to-br from-white to-slate-50 border border-slate-200/50 rounded-2xl p-6 shadow-xl overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    {/* Icon */}
                      {(() => {
                        const IconComponent = sources[mobileSlide].icon;
                        return (
                          <motion.div
                            transition={{ duration: 0.6 }}
                            className={`w-16 h-16 bg-gradient-to-r ${sources[mobileSlide].gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                          >
                            <IconComponent className="w-8 h-8 text-white" />
                          </motion.div>
                        );
                      })()}
                    <div>
                      <div className="flex items-baseline gap-2">
                        <h3 className="text-2xl font-bold text-slate-900">{sources[mobileSlide].title}</h3>
                        <span className="text-sm text-slate-500">({sources[mobileSlide].subtitle})</span>
                      </div>
                      <p className="text-slate-600 text-sm mt-1">
                        {sources[mobileSlide].description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-900">Что проверяем:</h4>
                    {sources[mobileSlide].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {sources.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setMobileSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === mobileSlide 
                      ? 'bg-blue-600 w-6' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to source ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop Grid (Visible on desktop only) */}
        <div className="hidden lg:block mb-16">
          <div className="grid grid-cols-5 gap-4">
            {sources.map((source, index) => {
              const IconComponent = source.icon;
              const isActive = activeSource === source.id;
              
              return (
                <motion.div
                  key={source.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group"
                >
                  <Card 
                    className="relative bg-gradient-to-b from-white to-slate-50 border border-slate-200/50 hover:border-blue-300 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                    onMouseEnter={() => setActiveSource(source.id)}
                    onMouseLeave={() => setActiveSource(null)}
                  >
                    {/* Background Glow */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        opacity: isActive ? 0.1 : 0,
                        scale: isActive ? 1.02 : 1
                      }}
                      className={`absolute inset-0 bg-gradient-to-r ${source.gradient} rounded-xl blur-lg`}
                    />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        animate={{ rotate: isActive ? 360 : 0 }}
                        transition={{ duration: 0.6 }}
                        className={`w-10 h-10 bg-gradient-to-r ${source.gradient} rounded-lg flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </motion.div>

                      {/* Title */}
                      <div className="mb-2">
                        <h3 className="text-lg font-bold text-slate-900">{source.title}</h3>
                        <p className="text-slate-500 text-[10px] leading-tight">
                          {source.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-xs mb-3 leading-relaxed line-clamp-2">
                        {source.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-1">
                        {source.features.slice(0, 2).map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={false}
                            animate={{ 
                              x: isActive ? 3 : 0,
                              opacity: isActive ? 1 : 0.7 
                            }}
                            className="flex items-center gap-1.5"
                          >
                            <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${source.gradient}`} />
                            <span className="text-[10px] text-slate-500">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}