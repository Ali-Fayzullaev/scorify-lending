"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, DollarSign, Building, Scale, Smartphone, CheckCircle, Database, Shield, Lock, Zap, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Sources() {
  const [activeSource, setActiveSource] = useState<string | null>(null);

  const sources = [
    {
      id: "pkb",
      icon: BarChart3,
      title: "ПКБ",
      subtitle: "Первое Кредитное Бюро",
      description: "Полная кредитная история клиента",
      features: ["Активные кредиты", "Просрочки", "Скоринговый балл", "Микрозаймы", "Общий долг"],
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      stats: ["780", "4", "25M"]
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
      stats: ["12 лет", "₸", "Стабильный"]
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
      stats: ["Нет", "0 ₸", "Чистый"]
    },
    {
      id: "chsi",
      icon: Scale,
      title: "ЧСИ",
      subtitle: "Частные Судебные Исполнители",
      description: "Исполнительные производства",
      features: ["Производства", "Должники ЧСИ", "Взыскания", "Исп. листы", "История"],
      color: "red",
      gradient: "from-red-500 to-rose-500",
      stats: ["0", "Нет", "Чисто"]
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
      stats: ["✓", "Привязан", "Активен"]
    }
  ];

  return (
    <section id="sources" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent" />
      
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

        {/* Interactive Sources Grid */}
        <div className="relative mb-20">
          {/* Central Connection Lines */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M50,30 C50,30 65,40 70,50 C75,60 50,70 50,70 C50,70 25,60 30,50 C35,40 50,30 50,30"
                stroke="url(#gradient)"
                strokeWidth="0.5"
                fill="none"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Sources Circle */}
          <div className="relative lg:w-[600px] lg:h-[600px] mx-auto">
            {sources.map((source, index) => {
              const IconComponent = source.icon;
              const angle = (index * 72) * (Math.PI / 180);
              const radius = 200;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={source.id}
                  initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100 
                  }}
                  animate={{
                    x: window.innerWidth >= 1024 ? x : 0,
                    y: window.innerWidth >= 1024 ? y : 0
                  }}
                  className={`
                    absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                    lg:transform-none lg:left-auto lg:top-auto
                    ${index === 0 ? 'lg:top-1/2 lg:left-full lg:-translate-y-1/2 -translate-x-1/2' : ''}
                    ${index === 1 ? 'lg:top-full lg:left-3/4 lg:-translate-x-1/2 -translate-y-1/2' : ''}
                    ${index === 2 ? 'lg:top-full lg:left-1/4 lg:-translate-x-1/2 -translate-y-1/2' : ''}
                    ${index === 3 ? 'lg:top-1/2 lg:left-0 lg:-translate-y-1/2 -translate-x-1/2' : ''}
                    ${index === 4 ? 'lg:top-0 lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2' : ''}
                  `}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setActiveSource(source.id)}
                    onHoverEnd={() => setActiveSource(null)}
                    className="cursor-pointer group"
                  >
                    <Card className="relative w-64 h-64 bg-gradient-to-br from-white to-slate-50 border border-slate-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {/* Background Glow */}
                      <motion.div
                        initial={false}
                        animate={{ 
                          opacity: activeSource === source.id ? 0.1 : 0,
                          scale: activeSource === source.id ? 1.2 : 1
                        }}
                        className={`absolute inset-0 bg-gradient-to-r ${source.gradient} rounded-2xl blur-xl`}
                      />
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          animate={{ rotate: activeSource === source.id ? 360 : 0 }}
                          transition={{ duration: 0.6 }}
                          className={`w-16 h-16 bg-gradient-to-r ${source.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>

                        {/* Title */}
                        <div className="mb-3">
                          <div className="flex items-baseline gap-2 mb-1">
                            <h3 className="text-2xl font-bold text-slate-900">{source.title}</h3>
                            <span className="text-sm text-slate-500">({source.subtitle})</span>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {source.description}
                          </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {source.stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-sm font-bold text-slate-900">{stat}</div>
                            </div>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="space-y-2">
                          {source.features.slice(0, 3).map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={false}
                              animate={{ 
                                x: activeSource === source.id ? 5 : 0,
                                opacity: activeSource === source.id ? 1 : 0.8 
                              }}
                              className="flex items-center gap-2"
                            >
                              <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${source.gradient}`} />
                              <span className="text-xs text-slate-600">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Center Hub */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-blue-200 rounded-full"
                />
                
                <Card className="relative w-48 h-48 bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">5 баз</div>
                    <div className="text-sm text-slate-600 font-medium">комплексная проверка</div>
                    <div className="text-xs text-slate-400 mt-2">2 минуты</div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-3xl blur-xl" />
            
            <div className="relative bg-gradient-to-br from-white to-green-50/30 border border-green-100/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500 rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg"
                      >
                        <Shield className="w-10 h-10 text-white" />
                      </motion.div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 border-2 border-green-300/30 rounded-2xl"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                      <span className="text-green-600">100% легально</span> и безопасно
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Все данные получаются с письменного согласия клиента по защищенным каналам связи в соответствии с законодательством РК
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-700">
                        <Lock className="w-3 h-3" />
                        Согласие клиента
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-700">
                        <Zap className="w-3 h-3" />
                        Защищенные каналы
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-700">
                        <CheckCircle className="w-3 h-3" />
                        Соответствие законам
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}