"use client";

import { motion } from "framer-motion";
import { UserPlus, Send, Zap, Target, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Регистрация",
      description: "Зарегистрируйтесь за 1 минуту",
      details: "Получите 5 бесплатных скорингов",
      icon: UserPlus,
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2, 
      title: "Отправка ссылки клиенту",
      description: "Отправьте клиенту ссылку на анкету",
      details: "Клиент заполняет данные и даёт согласие",
      icon: Send,
      color: "from-green-500 to-green-600"
    },
    {
      step: 3,
      title: "Автоматический скоринг", 
      description: "Система проверяет по 5 базам за 2 минуты",
      details: "Вы получаете полный отчёт",
      icon: Zap,
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 4,
      title: "Подбор программ",
      description: "Система автоматически подбирает подходящие программы", 
      details: "Вы видите все варианты с расчётом платежа",
      icon: Target,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-slate-50">
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
            Как это работает
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Простой процесс из 4 шагов для получения полного скоринга клиента и подбора ипотечных программ
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <Card className="p-8 bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <div className="flex items-start space-x-6">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-slate-400">
                        {step.step.toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-slate-700 mb-3 font-medium">
                      {step.description}
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      {step.details}
                    </p>

                    {/* Success Indicator */}
                    <div className="flex items-center space-x-2 mt-4">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 font-medium">
                        Автоматически
                      </span>
                    </div>
                  </div>
                </div>

                {/* Connection Line for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      className="w-12 h-0.5 bg-slate-300 origin-left"
                    />
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-blue-500 rounded-full" />
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-white rounded-2xl p-8 sm:p-12 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Результат, который впечатляет
            </h3>
            <p className="text-lg text-slate-600">
              Средние показатели эффективности нашей системы
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">2 мин</div>
              <div className="text-sm sm:text-base text-slate-600 font-medium">время скоринга</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">5</div>
              <div className="text-sm sm:text-base text-slate-600 font-medium">источников проверки</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm sm:text-base text-slate-600 font-medium">программ в базе</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm sm:text-base text-slate-600 font-medium">доступность</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}