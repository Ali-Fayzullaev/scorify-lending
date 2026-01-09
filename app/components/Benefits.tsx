"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Users, FileText, Target, Zap, BarChart3, Building2, Shield, TrendingUp, Sparkles, Rocket, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Benefits() {
  const [activeTab, setActiveTab] = useState<"individual" | "business">("individual");

  const individualBenefits = [
    {
      icon: Clock,
      title: "Экономия времени на проверках",
      description: "Получайте результат за 2 минуты вместо 30 минут ручной работы",
      stat: "93% экономии",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Больше клиентов в день",
      description: "Обслуживайте в 15 раз больше клиентов благодаря автоматизации",
      stat: "15× больше",
      color: "green",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: FileText,
      title: "Профессиональные отчёты",
      description: "Получайте детальные отчёты по каждому клиенту в едином формате",
      stat: "100% детально",
      color: "purple",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Target,
      title: "Мгновенный подбор программ", 
      description: "Автоматический расчёт и сравнение подходящих ипотечных предложений",
      stat: "50+ программ",
      color: "orange",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  const businessBenefits = [
    {
      icon: Building2,
      title: "Единый аккаунт для команды",
      description: "Все менеджеры работают в одной системе с общей статистикой",
      stat: "∞ пользователей",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Контроль расходов и аналитика",
      description: "Детальная отчётность по использованию и ROI от каждого сотрудника",
      stat: "Полная аналитика",
      color: "green",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Постоплата по договору",
      description: "Работайте сейчас, платите потом. Ежемесячная отчётность и счета",
      stat: "Договорная",
      color: "purple",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Zap,
      title: "API-интеграция",
      description: "Интегрируйте ScoriFy в вашу CRM систему через API (скоро)",
      stat: "API доступен",
      color: "orange",
      gradient: "from-orange-500 to-amber-500",
      badge: "Скоро"
    }
  ];

  const stats = [
    { value: "50+", label: "активных брокеров" },
    { value: "10,00+", label: "выполненных скорингов" },
    { value: "93%", label: "экономии времени" },
    { value: "15×", label: "больше клиентов" }
  ];

  return (
    <section id="benefits" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50/30" />
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
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"
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
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
            <span className="text-sm font-medium text-slate-700">Преимущества</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="text-slate-800">Преимущества</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              для вашего бизнеса
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            ScoriFy решает задачи как индивидуальных брокеров, так и крупных агентств
          </motion.p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl blur-lg" />
            <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-1.5">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setActiveTab("individual")}
                  className={`relative px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                    activeTab === "individual"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Users className="w-5 h-5" />
                    Индивидуальные брокеры
                  </span>
                  {activeTab === "individual" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl border-2 border-white"
                    />
                  )}
                </button>
                
                <button
                  onClick={() => setActiveTab("business")}
                  className={`relative px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                    activeTab === "business"
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Агентства (B2B)
                  </span>
                  {activeTab === "business" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl border-2 border-white"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-6">
              {(activeTab === "individual" ? individualBenefits : businessBenefits).map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 border border-slate-200/50 hover:border-blue-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                        <div className={`w-full h-full bg-gradient-to-r ${benefit.gradient}`} />
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            className="flex-shrink-0"
                          >
                            <div className={`w-14 h-14 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                              <IconComponent className="w-7 h-7 text-white" />
                            </div>
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                                {benefit.title}
                              </h4>
                              {benefit.description && (
                                <span className="px-2 py-1 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 text-amber-700 text-xs font-bold rounded-full">
                                  {benefit.stat}
                                </span>
                              )}
                            </div>
                            
                            <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                              {benefit.description}
                            </p>
                            
                            {/* <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200/50">
                              <span className="text-sm font-medium text-slate-700">
                                {benefit.stat}
                              </span>
                              <motion.div
                                whileHover={{ x: 5 }}
                                className="text-blue-500"
                              >
                                <ChevronRight className="w-4 h-4" />
                              </motion.div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl" />
            
            <div className="relative bg-gradient-to-br from-white to-blue-50/30 border border-blue-100/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-xl" />
            
            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10 text-center">
                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 bg-gradient-to-br from-white to-white/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <Rocket className="w-10 h-10 text-blue-600" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Готовы увеличить эффективность в <span className="text-amber-300">15 раз</span>?
                </h3>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Присоединяйтесь к сообществу брокеров, которые экономят время и увеличивают прибыль
                </p>

                {/* CTA Buttons */}
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
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
                    onClick={() => {
                      const element = document.querySelector('#contacts');
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Building2 className="w-5 h-5" />
                      Для агентств
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