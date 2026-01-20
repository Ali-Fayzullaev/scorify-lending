"use client";

import { motion } from "framer-motion";
import { ArrowRight, Gift, CheckCircle, Users, Zap, Sparkles, Target, Shield, Rocket, TrendingUp, Mail, Phone, MessageSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CTA() {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Final CTA Button',
      });
    }
    alert('Переход на страницу регистрации');
  };

  const guarantees = [
    {
      icon: Gift,
      title: "5 бесплатных скорингов",
      description: "Попробуйте без рисков",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: Shield,
      title: "Гарантия результата",
      description: "Результат за 5 минуты",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Комьюнити экспертов",
      description: "50+ брокеров с нами",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const stats = [
    { number: "93%", label: "экономии времени", icon: TrendingUp },
    { number: "15×", label: "больше клиентов", icon: Target },
    { number: "1490₸", label: "стоимость скоринга", icon: Zap },
    { number: "5 мин", label: "время отчёта", icon: CheckCircle }
  ];

  const contactOptions = [
    { icon: MessageSquare, label: "WhatsApp", href: "https://wa.me/77777777777", color: "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600" },
    { icon: Mail, label: "Email", href: "mailto:scorifyskoring@gmail.com", color: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600" },
    { icon: Phone, label: "Телефон", href: "tel:+77777777777", color: "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600" }
  ];

  return (
    <section id="cta" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/95 to-indigo-950">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Subtle Gradient Orbs */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl" />
        
        {/* Accent Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-emerald-500/20 backdrop-blur-sm border border-white/20 rounded-full text-white mb-8"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span className="font-medium bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Премиум решение для брокеров
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Ваш путь к успеху
            </span>
            <br />
            <span className="text-white/90">начинается здесь</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Присоединяйтесь к элитному сообществу брокеров, которые зарабатывают больше благодаря умной автоматизации
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-gradient-to-b from-white/10 via-white/5 to-white/0 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:border-white/30 hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-3">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-1">
                        {stat.number}
                      </div>
                      <div className="text-white/70 text-sm font-medium text-center">
                        {stat.label}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="group relative bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 hover:from-blue-600 hover:via-cyan-600 hover:to-emerald-600 text-white px-14 py-7 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="relative flex items-center justify-center gap-3">
                <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Начать бесплатно
                </span>
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-4 text-white/60 text-sm"
            >
              <div className="flex flex-wrap justify-center items-center gap-4">
                {/* <span className="hidden sm:inline">•</span> */}
                <span>Персональный демо-тур</span>
                <span className="hidden sm:inline">•</span>
                <span>5 бесплатных проверок</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Premium Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="group"
                >
                  <Card className="relative bg-gradient-to-b from-white/10 via-white/5 to-white/0 backdrop-blur-sm border border-white/15 rounded-2xl p-8 hover:border-white/30 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`w-full h-full bg-gradient-to-r ${guarantee.gradient}`} />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${guarantee.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3">
                          {guarantee.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {guarantee.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Premium Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <p className="text-white/80 text-lg mb-2">
              Эксклюзивная поддержка для премиум-клиентов
            </p>
            <p className="text-white/60 text-sm">
              Персональный менеджер ответит в течение 5 минут
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.a
                  key={index}
                  href={option.href}
                  target={option.href.startsWith('http') ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`${option.color} text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{option.label}</span>
                  <ArrowRight className="w-4 h-4 ml-2 opacity-70" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Trust Seals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-b from-white/5 via-white/2 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full mb-4">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-white/90 font-medium">Гарантии безопасности</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Доверьтесь лидеру рынка
                </h4>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Shield, text: "ISO 27001 Сертификат", color: "text-blue-400" },
                  { icon: CheckCircle, text: "GDPR Соответствие", color: "text-emerald-400" },
                  { icon: Users, text: "500+ Довольных клиентов", color: "text-cyan-400" },
                  { icon: Star, text: "Рекомендации 98%", color: "text-amber-400" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center mb-3">
                        <IconComponent className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <span className="text-white/80 text-sm font-medium">
                        {item.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}