"use client";

import { motion } from "framer-motion";
import { X, Check, Clock, Users, TrendingDown, AlertCircle, Zap, BarChart3, Target, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Problem() {
  const problems = [
    {
      icon: Clock,
      title: "Тратите часы на ручную проверку",
      description: "Переход между разными сайтами для проверки каждого клиента",
      color: "text-red-500"
    },
    {
      icon: AlertCircle,
      title: "Не знаете подойдёт ли клиент",
      description: "Узнаете об отказе только после подачи заявки в банк",
      color: "text-red-500"
    },
    {
      icon: TrendingDown,
      title: "Теряете клиентов из-за долгого ответа",
      description: "Клиенты уходят к конкурентам, пока вы проверяете документы",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "Не видите полную картину",
      description: "Отсутствует комплексная информация о финансовом состоянии",
      color: "text-red-500"
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: "Все проверки в одном окне",
      description: "Единая система для получения всей информации о клиенте",
      color: "text-green-500"
    },
    {
      icon: Target,
      title: "Мгновенный подбор программ",
      description: "Автоматический расчет подходящих ипотечных предложений",
      color: "text-green-500"
    },
    {
      icon: Shield,
      title: "Клиент получает ответ сразу",
      description: "Результат скоринга готов через 2 минуты после заполнения",
      color: "text-green-500"
    },
    {
      icon: BarChart3,
      title: "Полный скоринг из 5 источников",
      description: "ЧСИ + БМГ + ПКБ + ГКБ + ЕНПФ в едином отчете",
      color: "text-green-500"
    }
  ];

  return (
    <section id="problem" className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-red-400 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-400 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-slate-700">Проблема и решение</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Без <span className="text-red-500">ScoriFy</span> vs <span className="text-green-500">С</span> ScoriFy
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Узнайте как мы превращаем сложные процессы в простые решения
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="sticky top-24">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl text-red-700 font-semibold mb-4">
                  <X className="w-4 h-4" />
                  Проблемы текущего подхода
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">
                  Ручная проверка клиентов
                </h3>
                <p className="text-slate-500">
                  Традиционный метод отнимает время и ресурсы
                </p>
              </div>

              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="relative overflow-hidden bg-gradient-to-b from-white to-red-50/30 border border-red-100 hover:border-red-200 hover:shadow-lg transition-all duration-300">
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-red-500 to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="p-5">
                        <div className="flex items-start gap-4">
                          <motion.div
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            className="flex-shrink-0"
                          >
                            <div className="relative">
                              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                                <problem.icon className={`w-7 h-7 ${problem.color}`} />
                              </div>
                              <div className="absolute -inset-1 bg-red-400/20 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </motion.div>
                          
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-red-600 transition-colors duration-200">
                              {problem.title}
                            </h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {problem.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Time Indicator - Problems */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6"
              >
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-4xl font-bold mb-2">~60 минут</div>
                  <div className="text-red-100 text-sm font-medium">на одного клиента</div>
                  <div className="text-red-200 text-xs mt-2">+ нервы + риски</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="sticky top-24">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl text-green-700 font-semibold mb-4">
                  <Check className="w-4 h-4" />
                  Решение ScoriFy
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">
                  Автоматизированная система
                </h3>
                <p className="text-slate-500">
                  Умная технология делает всю работу за вас
                </p>
              </div>

              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="relative overflow-hidden bg-gradient-to-b from-white to-green-50/30 border border-green-100 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-green-500 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="p-5">
                        <div className="flex items-start gap-4">
                          <motion.div
                            whileHover={{ rotate: -15, scale: 1.1 }}
                            className="flex-shrink-0"
                          >
                            <div className="relative">
                              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                                <solution.icon className={`w-7 h-7 ${solution.color}`} />
                              </div>
                              <div className="absolute -inset-1 bg-green-400/20 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </motion.div>
                          
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                              {solution.title}
                            </h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {solution.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Time Indicator - Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-4xl font-bold mb-2">2 минуты</div>
                  <div className="text-green-100 text-sm font-medium">полный скоринг</div>
                  <div className="text-green-200 text-xs mt-2">+ точность + уверенность</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Economy Calculator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full text-blue-700 font-medium mb-4">
                  <Zap className="w-4 h-4" />
                  Экономия времени
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  <span className="text-blue-600">58 минут</span> экономии на клиенте
                </h3>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Переведите эти минуты в дополнительные сделки и доход
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    15×
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    больше клиентов в день
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    93%
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    экономия времени
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    точность данных
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}