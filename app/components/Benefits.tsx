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
      description: "Получайте результат за 5 минуты вместо 30 минут ручной работы",
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
                    <span className="flex items-center justify-center gap-2 text-black">
                      <Building2 className="w-5 h-5 text-black" />
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