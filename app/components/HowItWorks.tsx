"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Send, Zap, Target, CheckCircle, Clock, Database, Users, Shield, ArrowRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      title: "Регистрация",
      description: "Зарегистрируйтесь за 1 минуту",
      details: "Получите 5 бесплатных скорингов для начала работы",
      icon: UserPlus,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      time: "1 минута"
    },
    {
      step: 2, 
      title: "Отправка ссылки",
      description: "Отправьте клиенту ссылку на анкету",
      details: "Клиент заполняет данные и даёт согласие в 1 клик",
      icon: Send,
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      time: "30 секунд"
    },
    {
      step: 3,
      title: "Автоматический скоринг на основе 5 отчетов", 
      description: "Система проверяет по 5 базам",
      details: "Полный отчёт по всем источникам данных",
      icon: Zap,
      color: "purple",
      gradient: "from-purple-500 to-violet-500",
      time: "5 минуты"
    },
    {
      step: 4,
      title: "Подбор программ",
      description: "Автоматический подбор ипотечных программ", 
      details: "Все варианты с расчётом ежемесячного платежа",
      icon: Target,
      color: "orange",
      gradient: "from-orange-500 to-amber-500",
      time: "30 секунд"
    }
  ];

  const stats = [
    { icon: Clock, value: "2 мин", label: "полный скоринг", color: "text-blue-600" },
    { icon: Database, value: "5 баз", label: "государственных источников", color: "text-green-600" },
    { icon: Users, value: "50+", label: "брокеров используют", color: "text-purple-600" },
    { icon: Shield, value: "100%", label: "легальность проверки", color: "text-amber-600" }
  ];

  return (
    <section id="how-it-works" className="relative py-20 lg:py-32 overflow-hidden">
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
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full blur-3xl"
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
              <Zap className="w-4 h-4 text-blue-600" />
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
            <span className="text-sm font-medium text-slate-700">Как это работает</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="text-slate-800">Весь процесс —</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              4 простых шага
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            От регистрации до получения готового скоринга — просто, быстро и эффективно
          </motion.p>
        </motion.div>

        {/* Interactive Steps Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-amber-500/20 -translate-y-1/2" />
          
          {/* Animated Progress Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 -translate-y-1/2 origin-left"
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeStep === item.step;
              
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveStep(item.step)}
                  onMouseLeave={() => setActiveStep(1)}
                  className="group cursor-pointer"
                >
                  {/* Step Connector */}
                  {index > 0 && (
                    <div className="hidden lg:block absolute left-0 top-1/2 w-full h-0.5 -translate-y-1/2">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-slate-300 to-slate-300"
                      />
                    </div>
                  )}

                  <Card className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 border border-slate-200/50 hover:border-blue-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Background Glow */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        opacity: isActive ? 0.15 : 0,
                        scale: isActive ? 1.05 : 1
                      }}
                      className={`absolute inset-0 bg-gradient-to-r ${item.gradient} blur-xl`}
                    />
                    
                    <div className="relative z-10">
                      {/* Step Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <motion.div
                            animate={{ scale: isActive ? 1.1 : 1 }}
                            className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-3`}
                          >
                            <IconComponent className="w-8 h-8 text-white" />
                          </motion.div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-slate-500">Шаг</span>
                            <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                              {item.step.toString().padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                        
                        {/* Time Badge */}
                        <motion.div
                          animate={{ scale: isActive ? 1.1 : 1 }}
                          className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full text-xs font-bold text-slate-700"
                        >
                          {item.time}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-slate-700 font-medium">
                          {item.description}
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {item.details}
                        </p>
                      </div>

                      {/* Progress Indicator */}
                      <div className="mt-6 pt-4 border-t border-slate-200/50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-slate-600">Автоматически</span>
                          </div>
                          <motion.div
                            animate={{ rotate: isActive ? 90 : 0 }}
                            className="text-blue-500"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Step Number Circle for Timeline */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{ 
                        scale: isActive ? 1.2 : 1,
                        borderColor: isActive ? '#3b82f6' : '#e2e8f0'
                      }}
                      className="w-8 h-8 bg-white border-2 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <span className="text-sm font-bold text-slate-700">{item.step}</span>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl" />
            
            <div className="relative bg-gradient-to-br from-white to-blue-50/30 border border-blue-100/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles className="w-6 h-6 text-amber-500" />
                    Результат, который впечатляет
                    <Sparkles className="w-6 h-6 text-amber-500" />
                  </span>
                </h3>
                <p className="text-slate-600">
                  Средние показатели эффективности нашей системы
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <Card className="bg-gradient-to-b from-white to-slate-50 border border-slate-200/50 hover:border-blue-300 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        
                        <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>
                          {stat.value}
                        </div>
                        
                        <div className="text-sm text-slate-600 font-medium leading-tight">
                          {stat.label}
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Process Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl blur-xl" />
          
          <div className="relative bg-gradient-to-br from-white to-emerald-50/30 border border-green-100/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-2/5 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  Весь процесс — <span className="text-emerald-600">менее 5 минут</span>
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  От отправки ссылки клиенту до получения полного отчёта со списком подходящих ипотечных программ
                </p>
                
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <CheckCircle className="w-5 h-5" />
                  <span>Автоматически • Безопасно • Эффективно</span>
                </div>
              </div>

              <div className="lg:w-3/5">
                <div className="relative">
                  {/* Process Timeline */}
                  <div className="flex items-center justify-between mb-8">
                    {[
                      { time: "0:00", label: "Старт" },
                      { time: "1:00", label: "Регистрация" },
                      { time: "1:30", label: "Отправка" },
                      { time: "3:30", label: "Скоринг" },
                      { time: "4:00", label: "Готово" }
                    ].map((mark, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-sm font-bold text-slate-900">{mark.time}</div>
                        <div className="text-xs text-slate-500">{mark.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
                    />
                  </div>

                  {/* Time Indicators */}
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>Начало</span>
                    <span className="font-bold text-emerald-600">4 минуты ровно</span>
                    <span>Результат</span>
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