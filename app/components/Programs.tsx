"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Home, Car, RefreshCw, Calculator, Zap, Target, Filter, TrendingUp, CheckCircle, BarChart3, Shield, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Programs() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);

  const banks = [
    { name: "Halyk Bank", logo: "/banks/halyk.png" },
    { name: "Kaspi Bank", logo: "/banks/kaspi.png" },
    { name: "Forte Bank", logo: "/banks/forte.png" },
    { name: "БЦК", logo: "/banks/bck.png" },
    { name: "Евразийский банк", logo: "/banks/eurasian.png" },
    { name: "Нурбанк", logo: "/banks/nur.png" },
    { name: "Отбасы банк", logo: "/banks/otbasy.png" },
    { name: "Freedom Bank", logo: "/banks/freedom.png" },
    { name: "RBK Bank", logo: "/banks/rbk.webp" },
    { name: "Алтын банк", logo: "/banks/altyn.png" }
  ];

  const programTypes = [
    {
      id: "mortgage",
      title: "Ипотека",
      icon: Home,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      count: "15+ программ",
      programs: [
        { 
          name: "Первичный рынок", 
          rate: "от 12.5%", 
          period: "до 25 лет", 
          minPayment: "от 20%",
          availableIn: 8,
          popular: true
        },
        { 
          name: "Вторичный рынок", 
          rate: "от 13%", 
          period: "до 20 лет", 
          minPayment: "от 25%",
          availableIn: 7
        },
        { 
          name: "Эконом-класс", 
          rate: "от 11%", 
          period: "до 25 лет", 
          minPayment: "от 15%",
          availableIn: 5
        }
      ]
    },
    {
      id: "government",
      title: "Госпрограммы",
      icon: Building2,
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      count: "8+ программ",
      programs: [
        { 
          name: "7-20-25", 
          rate: "от 7%", 
          period: "до 25 лет", 
          minPayment: "от 20%",
          availableIn: 10,
          popular: true
        },
        { 
          name: "Баспана Хит", 
          rate: "от 8.5%", 
          period: "до 25 лет", 
          minPayment: "от 20%",
          availableIn: 9
        },
        { 
          name: "Молодая семья", 
          rate: "от 7%", 
          period: "до 25 лет", 
          minPayment: "от 15%",
          availableIn: 6
        }
      ]
    },
    {
      id: "commercial",
      title: "Коммерческие",
      icon: Calculator,
      color: "purple",
      gradient: "from-purple-500 to-violet-500",
      count: "12+ программ",
      programs: [
        { 
          name: "Коммерческая", 
          rate: "от 15%", 
          period: "до 15 лет", 
          minPayment: "от 30%",
          availableIn: 4
        },
        { 
          name: "Потребительский", 
          rate: "от 18%", 
          period: "до 5 лет", 
          minPayment: "без залога",
          availableIn: 10,
          popular: true
        },
        { 
          name: "Рефинансирование", 
          rate: "от 14%", 
          period: "до 20 лет", 
          minPayment: "от 0%",
          availableIn: 6
        }
      ]
    },
    {
      id: "auto",
      title: "Автокредиты",
      icon: Car,
      color: "orange",
      gradient: "from-orange-500 to-amber-500",
      count: "10+ программ",
      programs: [
        { 
          name: "Новые авто", 
          rate: "от 16%", 
          period: "до 7 лет", 
          minPayment: "от 20%",
          availableIn: 8
        },
        { 
          name: "Подержанные", 
          rate: "от 18%", 
          period: "до 5 лет", 
          minPayment: "от 30%",
          availableIn: 6
        },
        { 
          name: "Лизинг авто", 
          rate: "от 14%", 
          period: "до 5 лет", 
          minPayment: "от 25%",
          availableIn: 5,
          popular: true
        }
      ]
    }
  ];

  const allPrograms = programTypes.flatMap(type => type.programs);

  const features = [
    { icon: Target, text: "Автоматический подбор" },
    { icon: Filter, text: "Фильтрация по взносу" },
    { icon: Calculator, text: "Расчёт платежа" },
    { icon: TrendingUp, text: "Сравнение условий" },
    { icon: CheckCircle, text: "Проверка соответствия" },
    { icon: BarChart3, text: "Актуальные ставки" }
  ];

  return (
    <section id="programs" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-slate-50/30" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
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
              <Building2 className="w-4 h-4 text-blue-600" />
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
            <span className="text-sm font-medium text-slate-700">Программы банков</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              50+ программ
            </span>
            <br />
            <span className="text-slate-800">ипотечного кредитования</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Автоматический подбор на основе скоринга клиента из всех крупных банков Казахстана
          </motion.p>
        </motion.div>

        {/* Banks Visual Grid with Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl blur-xl opacity-50" />
            
            <div className="relative bg-gradient-to-br from-white to-blue-50/30 border border-blue-100/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                  Банки-партнеры
                </h3>
                <p className="text-slate-600">
                  Интеграция со всеми крупнейшими банками Казахстана
                </p>
              </div>

              {/* Banks Grid with Logos */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {banks.map((bank, index) => (
                  <motion.div
                    key={bank.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 border border-slate-200/50 hover:border-blue-300 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-16 h-16 mb-3 rounded-xl bg-white flex items-center justify-center p-2 shadow-inner border border-slate-200 group-hover:scale-110 transition-transform">
                          <div className="relative w-full h-full">
                            <Image
                              src={bank.logo}
                              alt={bank.name}
                              fill
                              className="object-contain"
                              sizes="64px"
                            />
                          </div>
                        </div>
                        <span className="text-sm font-bold text-slate-800">
                          {bank.name}
                        </span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Bank Count */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-center mt-8 pt-8 border-t border-slate-200/50"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">
                    Все программы актуальны и регулярно обновляются
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Program Types */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {programTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <Card className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 border border-slate-200/50 hover:border-blue-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 bg-gradient-to-r ${type.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full text-xs font-bold text-slate-700"
                        >
                          {type.count}
                        </motion.div>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {type.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        {type.programs.length} основных программы с лучшими условиями
                      </p>

                      <div className="space-y-2">
                        {type.programs.slice(0, 2).map((program, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${type.gradient}`} />
                            <span className="text-sm text-slate-700">{program.name}</span>
                            <span className="text-xs font-bold text-green-600 ml-auto">{program.rate}</span>
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

        {/* Interactive Program Selection */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50/30 rounded-3xl blur-xl" />
            
            <div className="relative bg-gradient-to-br from-white to-emerald-50/20 border border-green-100/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl overflow-hidden">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Left Side - Client Profile */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-2/5"
                >
                  <Card className="bg-gradient-to-br from-white to-blue-50/50 border border-blue-100 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Профиль клиента</h4>
                        <p className="text-sm text-slate-500">На основе скоринга</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Кредитный рейтинг</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "78%" }}
                              transition={{ duration: 1 }}
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                            />
                          </div>
                          <span className="font-bold text-blue-600">780</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-slate-500">Доход</div>
                          <div className="font-bold text-slate-900">2.5M ₸</div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-500">Взнос</div>
                          <div className="font-bold text-slate-900">25%</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-slate-500 mb-2">Требования</div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-slate-700">Нет просрочек</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-slate-700">Стаж 2+ года</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* Right Side - Suggested Programs */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-3/5"
                >
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">
                      Подходящие программы
                    </h4>
                    <p className="text-slate-600">
                      На основе вашего профиля система подобрала оптимальные варианты
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {allPrograms.slice(0, 4).map((program, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedProgram(index)}
                        className={`cursor-pointer ${
                          selectedProgram === index ? 'ring-2 ring-blue-500' : ''
                        }`}
                      >
                        <Card className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-blue-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h5 className="font-bold text-slate-900 mb-1">{program.name}</h5>
                              <div className="text-xs text-slate-500">
                                Доступно в {program.availableIn} банках
                              </div>
                            </div>
                            {program.popular && (
                              <div className="px-2 py-1 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 text-amber-700 text-xs font-bold rounded-full">
                                Популярно
                              </div>
                            )}
                          </div>

                          <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="text-center">
                              <div className="text-sm text-slate-500">Ставка</div>
                              <div className="font-bold text-green-600">{program.rate}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-slate-500">Срок</div>
                              <div className="font-bold text-slate-900">{program.period}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-slate-500">Взнос</div>
                              <div className="font-bold text-blue-600">{program.minPayment}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.random() * 40 + 60}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                              />
                            </div>
                            <div className="text-xs text-slate-500">
                              {Math.floor(Math.random() * 40 + 60)}% совпадение
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
              Умный подбор программ
            </h3>
            <p className="text-slate-600">
              Алгоритм учитывает все параметры для оптимального выбора
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="bg-gradient-to-b from-white to-slate-50 border border-slate-200/50 hover:border-blue-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="font-medium text-slate-800">{feature.text}</span>
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