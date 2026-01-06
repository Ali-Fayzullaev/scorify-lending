"use client";

import { motion } from "framer-motion";
import { Building2, Home, Car, RefreshCw, Calculator } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Programs() {
  const banks = [
    { name: "Halyk Bank", logo: "/banks/halyk.png" },
    { name: "Kaspi Bank", logo: "/banks/kaspi.png" },
    { name: "Forte Bank", logo: "/banks/forte.png" },
    { name: "БЦК", logo: "/banks/БЦК.png" },
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
      title: "Ипотечное кредитование",
      icon: Home,
      color: "blue",
      programs: [
        { name: "Первичный рынок", rate: "от 12.5%", period: "до 25 лет", minPayment: "от 20%" },
        { name: "Вторичный рынок", rate: "от 13%", period: "до 20 лет", minPayment: "от 25%" },
        { name: "Жилье эконом-класса", rate: "от 11%", period: "до 25 лет", minPayment: "от 15%" }
      ]
    },
    {
      id: "government",
      title: "Государственные программы",
      icon: Building2,
      color: "green",
      programs: [
        { name: "7-20-25", rate: "от 7%", period: "до 25 лет", minPayment: "от 20%" },
        { name: "Баспана Хит", rate: "от 8.5%", period: "до 25 лет", minPayment: "от 20%" },
        { name: "Молодая семья", rate: "от 7%", period: "до 25 лет", minPayment: "от 15%" }
      ]
    },
    {
      id: "commercial",
      title: "Коммерческие кредиты",
      icon: Calculator,
      color: "purple",
      programs: [
        { name: "Коммерческая недвижимость", rate: "от 15%", period: "до 15 лет", minPayment: "от 30%" },
        { name: "Потребительский кредит", rate: "от 18%", period: "до 5 лет", minPayment: "без залога" },
        { name: "Рефинансирование", rate: "от 14%", period: "до 20 лет", minPayment: "от 0%" }
      ]
    },
    {
      id: "auto",
      title: "Автокредитование",
      icon: Car,
      color: "orange",
      programs: [
        { name: "Новые авто", rate: "от 16%", period: "до 7 лет", minPayment: "от 20%" },
        { name: "Подержанные авто", rate: "от 18%", period: "до 5 лет", minPayment: "от 30%" },
        { name: "Лизинг авто", rate: "от 14%", period: "до 5 лет", minPayment: "от 25%" }
      ]
    }
  ];

  const features = [
    "Автоматический подбор подходящих программ",
    "Фильтрация по первоначальному взносу", 
    "Расчёт ежемесячного платежа",
    "Сравнение условий банков",
    "Проверка соответствия требованиям",
    "Актуальные процентные ставки"
  ];

  return (
    <section id="programs" className="py-16 lg:py-24 bg-white">
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
            <span className="text-blue-600">50+</span> ипотечных программ
            <span className="block mt-2">всех банков Казахстана</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Автоматический подбор подходящих программ на основе скоринга клиента из базы всех крупных банков
          </p>
        </motion.div>

        {/* Banks Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-slate-900 text-center mb-8">
            Наши банки-партнеры
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {banks.map((bank, index) => (
              <motion.div
                key={bank.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="p-4 bg-white hover:shadow-lg transition-all duration-300 border border-slate-200 group-hover:border-blue-300">
                  <div className="relative h-12 flex items-center justify-center">
                    <Image
                      src={bank.logo}
                      alt={bank.name}
                      width={120}
                      height={60}
                      className="object-contain group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Programs Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <Tabs defaultValue="mortgage" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-2 bg-slate-100 rounded-xl">
              {programTypes.map((type) => (
                <TabsTrigger
                  key={type.id}
                  value={type.id}
                  className="flex flex-col items-center gap-2 py-4 px-6 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg transition-all duration-200"
                >
                  <type.icon className="w-5 h-5" />
                  <span className="text-sm font-medium text-center leading-tight">
                    {type.title}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {programTypes.map((type) => (
              <TabsContent key={type.id} value={type.id} className="mt-8">
                <div className="grid lg:grid-cols-3 gap-6">
                  {type.programs.map((program, index) => (
                    <motion.div
                      key={program.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 h-full">
                        <div className="mb-4">
                          <h4 className="text-xl font-bold text-slate-900 mb-2">
                            {program.name}
                          </h4>
                          <Badge variant="outline" className="text-blue-600 border-blue-200">
                            {type.title}
                          </Badge>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">Ставка:</span>
                            <span className="font-semibold text-green-600">{program.rate}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">Период:</span>
                            <span className="font-semibold text-slate-900">{program.period}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">Взнос:</span>
                            <span className="font-semibold text-blue-600">{program.minPayment}</span>
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-200">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-500">Доступно в</span>
                            <span className="text-sm font-medium text-slate-700">
                              {Math.floor(Math.random() * 5) + 3} банках
                            </span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 sm:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Автоматический подбор программ
            </h3>
            <p className="text-lg text-slate-600">
              Система анализирует скоринг клиента и подбирает наиболее подходящие предложения
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}