"use client";

import { motion } from "framer-motion";
import { BarChart3, DollarSign, Building, Scale, Smartphone, CheckCircle, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Sources() {
  const sources = [
    {
      id: "pkb",
      icon: BarChart3,
      title: "ПКБ (Первое Кредитное Бюро)",
      description: "Полная кредитная история: активные кредиты, просрочки, скоринговый балл",
      features: [
        "Количество активных кредитов",
        "Общий долг по кредитам",
        "Максимальная просрочка",
        "История микрозаймов",
        "Скоринговый балл"
      ],
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: "enpf",
      icon: DollarSign,
      title: "ЕНПФ (Пенсионный фонд)",
      description: "Реальные доходы клиента на основе пенсионных отчислений",
      features: [
        "Расчётная заработная плата",
        "Общий стаж работы",
        "Статус трудоустройства",
        "Динамика доходов",
        "Налоговые отчисления"
      ],
      color: "green",
      gradient: "from-green-500 to-green-600"
    },
    {
      id: "gkb",
      icon: Building,
      title: "ГКБ (Госкредбюро)",
      description: "Проверка на банкротство и государственные долги",
      features: [
        "Статус банкротства",
        "Долги перед государством",
        "Налоговые задолженности",
        "Административные штрафы",
        "Статус должника"
      ],
      color: "purple",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: "chsi",
      icon: Scale,
      title: "ЧСИ (Судебные исполнители)",
      description: "Исполнительные производства и судебные взыскания",
      features: [
        "Активные производства",
        "Реестр должников ЧСИ",
        "Судебные взыскания",
        "Исполнительные листы",
        "История производств"
      ],
      color: "red",
      gradient: "from-red-500 to-red-600"
    },
    {
      id: "bmg",
      icon: Smartphone,
      title: "БМГ (База мобильных граждан)",
      description: "Верификация номера телефона через Telegram",
      features: [
        "Подтверждение номера",
        "Верификация через Telegram",
        "Актуальность контактов",
        "Связь с мессенджерами",
        "Проверка активности"
      ],
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  const stats = [
    { number: "5", label: "государственных источников", color: "text-blue-600" },
    { number: "100%", label: "легальность получения данных", color: "text-green-600" },
    { number: "2", label: "минуты на полную проверку", color: "text-purple-600" },
    { number: "24/7", label: "доступность системы", color: "text-indigo-600" }
  ];

  return (
    <section id="sources" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium mb-6">
            <Database className="w-4 h-4 mr-2" />
            Источники данных
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            5 официальных государственных
            <span className="block text-blue-600 mt-2">источников данных</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Мы интегрированы с основными государственными базами Казахстана для получения полной картины о финансовом состоянии клиента
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Sources Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* First two sources - larger cards */}
          {sources.slice(0, 2).map((source, index) => {
            const IconComponent = source.icon;
            return (
              <motion.div
                key={source.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="lg:col-span-1"
              >
                <Card className="h-full p-6 bg-white hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${source.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {source.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {source.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
                    Что получаете:
                  </h4>
                  {source.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
            );
          })}

          {/* Third source - spans full width on mobile, normal on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <Card className="h-full p-6 bg-white hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${sources[2].gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {(() => {
                    const IconComponent = sources[2].icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {sources[2].title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {sources[2].description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
                  Что получаете:
                </h4>
                {sources[2].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Last two sources - side by side */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {sources.slice(3).map((source, index) => {
            const IconComponent = source.icon;
            return (
              <motion.div
                key={source.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              >
                <Card className="h-full p-6 bg-white hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${source.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {source.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {source.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
                    Что получаете:
                  </h4>
                  {source.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
            )   ;
          })}
        </div>

        {/* Legal Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 sm:p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              100% легально и безопасно
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Все данные получаем с письменного согласия клиента в соответствии с законодательством Республики Казахстан. 
              Информация передается по защищенным каналам связи.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-2">
                <Badge variant="outline" className="border-green-300 text-green-700">
                  Согласие клиента
                </Badge>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Badge variant="outline" className="border-green-300 text-green-700">
                  Защищенные каналы
                </Badge>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Badge variant="outline" className="border-green-300 text-green-700">
                  Соответствие законам РК
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}