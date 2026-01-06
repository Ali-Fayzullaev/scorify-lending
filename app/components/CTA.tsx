"use client";

import { motion } from "framer-motion";
import { ArrowRight, Gift, CheckCircle, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CTA() {
  const handleCTAClick = () => {
    // Google Analytics event tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Final CTA Button',
      });
    }
    
    // Here would be registration logic
    alert('Переход на страницу регистрации');
  };

  const guarantees = [
    {
      icon: Gift,
      title: "5 бесплатных скорингов",
      description: "Попробуйте без рисков"
    },
    {
      icon: CheckCircle,
      title: "Результат за 2 минуты",
      description: "Или вернём деньги"
    },
    {
      icon: Users,
      title: "500+ довольных брокеров",
      description: "Присоединяйтесь к успешным"
    }
  ];

  const stats = [
    { number: "93%", label: "экономии времени" },
    { number: "15×", label: "больше клиентов" },
    { number: "500₸", label: "стоимость скоринга" },
    { number: "2 мин", label: "время получения отчёта" }
  ];

  return (
    <section id="cta" className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Начните экономить время уже сегодня
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Готовы увеличить прибыль
            <span className="block text-blue-200">в 15 раз?</span>
          </h2>

          <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
            Присоединяйтесь к 500+ успешным брокерам, которые уже зарабатывают больше благодаря автоматизации скоринга
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Зарегистрироваться бесплатно
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            
            <div className="mt-4 text-blue-200 text-sm">
              5 скорингов бесплатно • Без обязательств • Отменить в любой момент
            </div>
          </motion.div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <guarantee.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {guarantee.title}
              </h3>
              <p className="text-blue-200 leading-relaxed">
                {guarantee.description}
              </p>
            </Card>
          ))}
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-blue-200 mb-6 text-lg">
            Нужна консультация? Свяжитесь с нами любым удобным способом
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/77777777777"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              WhatsApp
            </a>
            <a 
              href="mailto:info@scorify.kz"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold border border-white/30 transition-all duration-300"
            >
              Email
            </a>
            <a 
              href="tel:+77777777777"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold border border-white/30 transition-all duration-300"
            >
              Телефон
            </a>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 pt-16 border-t border-white/20 text-center"
        >
          <p className="text-blue-200 text-lg mb-6">
            🏆 Лидер рынка автоматизации скоринга в Казахстане
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
            <div>✓ Соответствие законам РК</div>
            <div>✓ Защищённые каналы передачи данных</div>
            <div>✓ Техническая поддержка 24/7</div>
            <div>✓ Постоянное развитие продукта</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}