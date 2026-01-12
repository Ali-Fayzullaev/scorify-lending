"use client";

import { motion } from "framer-motion";
import { Check, Gift, Sparkles, Clock, Building2, Users, TrendingUp, Target, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Pricing() {
  const pricingModels = [
    {
      type: "Физические лица",
      model: "Предоплата",
      minimum: "От 500 ₸",
      payment: "Пополнение баланса",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Мгновенное пополнение",
        "Контроль расходов",
        "История операций",
        "Уведомления о балансе"
      ]
    },
    {
      type: "Юридические лица", 
      model: "Постоплата",
      minimum: "Договор",
      payment: "Счёт в конце месяца",
      icon: Building2,
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Постоплата",
        "Ежемесячная отчетность",
        "Персональный менеджер",
        "Индивидуальные условия",
        "Филиалы",
        "Статистика по менеджерам",
      ]
    }
  ];

 

  return (
    <section id="pricing" className="relative py-20 lg:py-32 overflow-hidden">
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
              <Gift className="w-4 h-4 text-blue-600" />
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
            <span className="text-sm font-medium text-slate-700">Тарифы и цены</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="text-slate-800">Просто</span>
            <span className="text-blue-600 mx-2">500 ₸</span>
            <span className="text-slate-800">за скоринг</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Платите только за реально выполненные проверки. Никаких скрытых комиссий и абонентских плат
          </motion.p>
        </motion.div>

        {/* Main Price Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl" />
            
            <Card className="relative bg-gradient-to-br from-white to-blue-50/50 border border-blue-100/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Price Display */}
                  <div className="lg:w-1/3 text-center">
                    <motion.div
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="inline-block"
                    >
                      <div className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                        500₸
                      </div>
                      <div className="text-lg text-slate-600 mb-6">за один скоринг</div>
                      
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span className="font-bold text-green-700">5 скорингов бесплатно</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Included Features */}
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { icon: Shield, text: "ЧСИ + БМГ + ПКБ + ГКБ + ЕНПФ" },
                        { icon: Target, text: "Подбор ипотечных программ" },
                        { icon: Clock, text: "Полный отчёт за 2 минуты" },
                        { icon: TrendingUp, text: "Сравнение условий банков" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                          className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-slate-200/50"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="text-sm font-medium text-slate-800">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Pricing Models */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-6">
            {pricingModels.map((model, index) => {
              const IconComponent = model.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <Card className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 border border-slate-200/50 hover:border-blue-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                      <div className={`w-full h-full bg-gradient-to-r ${model.gradient}`} />
                    </div>
                    
                    <div className="relative z-10">
                      {/* Model Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 bg-gradient-to-r ${model.gradient} rounded-xl flex items-center justify-center`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">{model.type}</h3>
                            <div className="text-sm text-slate-500">{model.model}</div>
                          </div>
                        </div>
                      </div>

                      {/* Price Info */}
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center p-3 bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl">
                          <span className="text-slate-700 font-medium">Минимум:</span>
                          <span className="text-lg font-bold text-slate-900">{model.minimum}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl">
                          <span className="text-slate-700 font-medium">Оплата:</span>
                          <span className="text-lg font-bold text-slate-900">{model.payment}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-slate-700 mb-2">Преимущества:</div>
                        {model.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}