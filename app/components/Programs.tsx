// app/components/Programs.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Home, Car, RefreshCw, Calculator, Zap, Target, Filter, TrendingUp, CheckCircle, BarChart3, Shield, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Programs() {


  const mainbank = [
    { name: "Отбасы банк", logo: "/banks/otbasy.png" },
  ]

  const banks = [
    { name: "Halyk Bank", logo: "/banks/halyk.png" },
    { name: "Forte Bank", logo: "/banks/forte.png" },
    { name: "БЦК", logo: "/banks/bck.png" },
    { name: "Евразийский банк", logo: "/banks/eurasian.png" },
    { name: "Нурбанк", logo: "/banks/nur.png" },
    { name: "Freedom Bank", logo: "/banks/freedom.png" },
    { name: "RBK Bank", logo: "/banks/rbk.webp" },
    { name: "Алтын банк", logo: "/banks/altyn.png" }
  ];

 

  

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
            У нас собраны все ипотечный программы Казахстана
            </span>
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
                  Все ипотечные программы РК
                </h3>
                <p className="text-slate-600">
                  У нас собраны более 50+ всех ипотечных программ Казахстана.
                </p>
              </div>

              {/* Desktop: Two columns layout - Commercial banks left, Main bank right */}
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Right Side - Main Bank (Отбасы банк) */}
                <div className="lg:w-64 order-1 lg:order-2">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-green-300" />
                    <span className="text-sm font-semibold text-green-600 px-3">Госбанк</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-green-300" />
                  </div>
                  
                  <div className="flex justify-center h-full">
                    {mainbank.map((bank) => (
                      <motion.div
                        key={bank.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="group w-full"
                      >
                        <Card className="relative overflow-hidden bg-gradient-to-b from-green-50 to-emerald-50 border-2 border-green-300 hover:border-green-400 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-center">
                          <div className="absolute top-2 right-2">
                            <div className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                              <span className="text-xs font-bold text-white">Госпрограммы</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-center text-center pt-4">
                            <div className="relative w-20 h-20 mb-4 rounded-xl bg-white flex items-center justify-center p-3 shadow-md border border-green-200 group-hover:scale-110 transition-transform">
                              <div className="relative w-full h-full">
                                <Image
                                  src={bank.logo}
                                  alt={bank.name}
                                  fill
                                  className="object-contain"
                                  sizes="80px"
                                />
                              </div>
                            </div>
                            <span className="text-lg font-bold text-slate-800">
                              {bank.name}
                            </span>
                            <span className="text-sm text-green-600 mt-1">
                              7-20-25, Баспана Хит
                            </span>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Left Side - Commercial Banks */}
                <div className="lg:flex-1 order-2 lg:order-1">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-300" />
                    <span className="text-sm font-semibold text-blue-600 px-3">Коммерческие банки</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-300" />
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3">
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
                        <Card className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 border border-slate-200/50 hover:border-blue-300 rounded-2xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
                          <div className="flex flex-col items-center text-center">
                            <div className="relative w-14 h-14 mb-2 rounded-xl bg-white flex items-center justify-center p-2 shadow-inner border border-slate-200 group-hover:scale-110 transition-transform">
                              <div className="relative w-full h-full">
                                <Image
                                  src={bank.logo}
                                  alt={bank.name}
                                  fill
                                  className="object-contain"
                                  sizes="56px"
                                />
                              </div>
                            </div>
                            <span className="text-xs font-bold text-slate-800">
                              {bank.name}
                            </span>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
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