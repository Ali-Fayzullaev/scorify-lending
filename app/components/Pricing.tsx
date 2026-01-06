"use client";

import { motion } from "framer-motion";
import { Check, Gift, Calculator } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const pricingModels = [
    {
      type: "Физические лица",
      model: "Предоплата",
      minimum: "От 500 ₸",
      payment: "Пополнение баланса",
      features: [
        "Мгновенное пополнение",
        "Контроль расходов",
        "История операций",
        "Уведомления о балансе"
      ],
      color: "blue"
    },
    {
      type: "Юридические лица", 
      model: "Постоплата",
      minimum: "Договор",
      payment: "Счёт в конце месяца",
      features: [
        "Работа в долг",
        "Ежемесячная отчетность",
        "Персональный менеджер",
        "Индивидуальные условия"
      ],
      color: "green"
    }
  ];

  const calculatorData = {
    manualCheck: 30,
    scorifyCheck: 2,
    hourlyRate: 3000
  };

  const savings = {
    timePerClient: calculatorData.manualCheck - calculatorData.scorifyCheck,
    monthlySavings: (calculatorData.manualCheck - calculatorData.scorifyCheck) * calculatorData.hourlyRate * 20 / 60
  };

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 font-medium mb-6">
            <Gift className="w-4 h-4 mr-2" />
            Первые 5 скорингов — БЕСПЛАТНО
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Простые и честные цены
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Платите только за реально выполненные проверки. Никаких скрытых комиссий и абонентских плат.
          </p>
        </motion.div>

        {/* Main Price */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <Card className="max-w-2xl mx-auto p-8 sm:p-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-xl">
            <div className="mb-6">
              <div className="text-6xl sm:text-7xl font-bold text-blue-600 mb-2">
                500₸
              </div>
              <div className="text-xl text-slate-600">за один скоринг</div>
            </div>
            
            <div className="space-y-3 mb-8">
              {["ПКБ + ЕНПФ + ГКБ + ЧСИ + БМГ", "Подбор ипотечных программ", "Полный отчёт за 2 минуты", "Сравнение условий банков"].map((item, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300 text-base px-4 py-2">
              🎁 Первые 5 проверок бесплатно для новых пользователей
            </Badge>
          </Card>
        </motion.div>

        {/* Pricing Models */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {pricingModels.map((model, index) => (
            <Card key={model.type} className="p-8 bg-white hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="mb-6">
                <Badge variant="outline" className={`${model.color === 'blue' ? 'text-blue-700 border-blue-300' : 'text-green-700 border-green-300'} mb-4`}>
                  {model.type}
                </Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {model.model}
                </h3>
                <div className="text-lg text-slate-600">
                  <div className="flex justify-between items-center mb-2">
                    <span>Минимум:</span>
                    <span className="font-semibold">{model.minimum}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Оплата:</span>
                    <span className="font-semibold">{model.payment}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
                  Преимущества:
                </h4>
                {model.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Savings Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 sm:p-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Calculator className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Калькулятор экономии времени
              </h3>
              <p className="text-lg text-slate-600">
                Посчитайте сколько вы сэкономите, перейдя на автоматизацию
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Manual Process */}
              <div className="text-center">
                <div className="bg-red-100 rounded-xl p-6 mb-4">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {calculatorData.manualCheck} мин
                  </div>
                  <div className="text-red-700 font-medium">
                    Ручная проверка
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  Время на проверку одного клиента по всем источникам вручную
                </p>
              </div>

              {/* Arrow */}
              <div className="text-center">
                <div className="text-3xl">→</div>
                <div className="text-blue-600 font-semibold text-lg">ScoriFy</div>
              </div>

              {/* ScoriFy Process */}
              <div className="text-center">
                <div className="bg-green-100 rounded-xl p-6 mb-4">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {calculatorData.scorifyCheck} мин
                  </div>
                  <div className="text-green-700 font-medium">
                    Со ScoriFy
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  Автоматическая проверка по всем базам + подбор программ
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="mt-8 pt-8 border-t border-green-200">
              <div className="grid sm:grid-cols-2 gap-6 text-center">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {savings.timePerClient} мин
                  </div>
                  <div className="text-slate-700 font-medium mb-1">
                    экономии на каждом клиенте
                  </div>
                  <div className="text-sm text-slate-500">
                    Это {Math.round((savings.timePerClient / calculatorData.manualCheck) * 100)}% экономии времени
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {savings.monthlySavings.toLocaleString()}₸
                  </div>
                  <div className="text-slate-700 font-medium mb-1">
                    экономии в месяц
                  </div>
                  <div className="text-sm text-slate-500">
                    При обработке 20 клиентов в месяц
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                onClick={() => {
                  const element = document.querySelector('#cta');
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Начать экономить время
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}