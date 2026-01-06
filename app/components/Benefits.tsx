"use client";

import { motion } from "framer-motion";
import { Clock, Users, FileText, Target, Zap, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Benefits() {
  const individualBenefits = [
    {
      icon: Clock,
      title: "Экономия времени на проверках",
      description: "Получайте результат за 2 минуты вместо 30 минут ручной работы",
      color: "blue"
    },
    {
      icon: Users,
      title: "Больше клиентов в день",
      description: "Обслуживайте в 15 раз больше клиентов благодаря автоматизации",
      color: "green"
    },
    {
      icon: FileText,
      title: "Профессиональные отчёты",
      description: "Получайте детальные отчёты по каждому клиенту в едином формате",
      color: "purple"
    },
    {
      icon: Target,
      title: "Мгновенный подбор программ", 
      description: "Автоматический расчёт и сравнение подходящих ипотечных предложений",
      color: "orange"
    }
  ];

  const businessBenefits = [
    {
      icon: Users,
      title: "Единый аккаунт для команды",
      description: "Все менеджеры работают в одной системе с общей статистикой",
      color: "blue"
    },
    {
      icon: BarChart3,
      title: "Контроль расходов и аналитика",
      description: "Детальная отчётность по использованию и ROI от каждого сотрудника",
      color: "green"
    },
    {
      icon: FileText,
      title: "Постоплата по договору",
      description: "Работайте сейчас, платите потом. Ежемесячная отчётность и счета",
      color: "purple"
    },
    {
      icon: Zap,
      title: "API-интеграция",
      description: "Интегрируйте ScoriFy в вашу CRM систему через API (скоро)",
      color: "orange",
      badge: "Скоро"
    }
  ];

  return (
    <section id="benefits" className="py-16 lg:py-24 bg-slate-50">
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
            Преимущества для вашего бизнеса
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            ScoriFy решает проблемы как индивидуальных брокеров, так и крупных агентств
          </p>
        </motion.div>

        {/* Individual Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Для индивидуальных брокеров
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Увеличьте эффективность работы и количество обслуживаемых клиентов
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {individualBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="p-8 bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                        benefit.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                        benefit.color === 'green' ? 'bg-green-100 text-green-600' :
                        benefit.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        <benefit.icon className="w-7 h-7" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-900 mb-3">
                        {benefit.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Для агентств и компаний (B2B)
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Масштабируйте бизнес с корпоративными возможностями ScoriFy
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {businessBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="p-8 bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full relative overflow-hidden">
                  {benefit.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1 rounded-full">
                        {benefit.badge}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                        benefit.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                        benefit.color === 'green' ? 'bg-green-100 text-green-600' :
                        benefit.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        <benefit.icon className="w-7 h-7" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-900 mb-3">
                        {benefit.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 sm:p-12 text-center text-white"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Готовы увеличить эффективность в 15 раз?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к 500+ брокерам, которые уже экономят время и увеличивают прибыль с ScoriFy
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">активных брокеров</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">выполненных скорингов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">93%</div>
              <div className="text-blue-100">экономии времени</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.querySelector('#cta');
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              Попробовать бесплатно
            </button>
            <button 
              onClick={() => {
                const element = document.querySelector('#contacts');
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Связаться с нами
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}