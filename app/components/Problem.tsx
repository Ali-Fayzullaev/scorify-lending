"use client";

import { motion } from "framer-motion";
import { X, Check, Clock, Users, TrendingDown, AlertCircle } from "lucide-react";
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
      description: "Узнаете о отказе только после подачи заявки в банк",
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
      icon: Check,
      title: "Все проверки в одном окне",
      description: "Единая система для получения всей информации о клиенте",
      color: "text-green-500"
    },
    {
      icon: Check,
      title: "Мгновенный подбор программ",
      description: "Автоматический расчет подходящих ипотечных предложений",
      color: "text-green-500"
    },
    {
      icon: Check,
      title: "Клиент получает ответ сразу",
      description: "Результат скоринга готов через 2 минуты после заполнения",
      color: "text-green-500"
    },
    {
      icon: Check,
      title: "Полный скоринг из 5 источников",
      description: "ПКБ + ЕНПФ + ГКБ + ЧСИ + БМГ в едином отчете",
      color: "text-green-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="problem" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Хватит терять время и клиентов
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Традиционные методы проверки клиентов устарели. Время перейти на автоматизацию.
          </p>
        </motion.div>

        {/* Problems vs Solutions Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problems Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 font-medium mb-4">
                <X className="w-4 h-4 mr-2" />
                Проблемы текущего подхода
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                До ScoriFy
              </h3>
              <p className="text-slate-600">
                Что происходит при ручной проверке клиентов
              </p>
            </div>

            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <Card className="p-6 bg-red-50/50 border border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                        <problem.icon className={`w-6 h-6 ${problem.color}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">
                        {problem.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Time Waste Indicator */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-xl text-center"
            >
              <div className="text-3xl font-bold mb-2">~30 минут</div>
              <div className="text-red-100">на одного клиента</div>
            </motion.div>
          </motion.div>

          {/* Solutions Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 font-medium mb-4">
                <Check className="w-4 h-4 mr-2" />
                Решение ScoriFy
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                С ScoriFy
              </h3>
              <p className="text-slate-600">
                Как работает автоматизированная система
              </p>
            </div>

            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <Card className="p-6 bg-green-50/50 border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                        <solution.icon className={`w-6 h-6 ${solution.color}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Time Save Indicator */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl text-center"
            >
              <div className="text-3xl font-bold mb-2">2 минуты</div>
              <div className="text-green-100">полный скоринг</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Экономьте <span className="text-blue-600">28 минут</span> на каждом клиенте
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Представьте сколько дополнительных клиентов вы сможете обслужить за день
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">15×</div>
                <div className="text-sm text-slate-600">больше клиентов в день</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">93%</div>
                <div className="text-sm text-slate-600">экономия времени</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-slate-600">точность данных</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}