"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Zap,
  Shield,
  BarChart3,
  TrendingUp,
  Clock,
  Database,
  Target,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Hero() {
  const handleCTAClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "CTA",
        event_label: "Hero CTA Button",
      });
    }

    const element = document.querySelector("#cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    {
      number: "5",
      label: "минуты на скоринг",
      suffix: "",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      number: "5",
      label: "источников данных",
      suffix: "",
      icon: <Database className="w-5 h-5" />,
    },
    {
      number: "50",
      label: "ипотечных программ",
      suffix: "+",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      number: "500",
      label: "тенге за проверку",
      suffix: " ₸",
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ];

  const approvedPrograms = [
    {
      name: "7-20-25",
      bank: "Отбасы банк",
      logo: "/banks/otbasy.png",
      rate: "7%",
      period: "25 лет",
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-200",
      badge: "Лучшая ставка",
    },
    {
      name: "Баспана Хит",
      bank: "Отбасы банк",
      logo: "/banks/otbasy.png",
      rate: "8.5%",
      period: "25 лет",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      badge: "Популярная",
    },
    {
      name: "Ипотека 10-10-20",
      bank: "Halyk Bank",
      logo: "/banks/halyk.png",
      rate: "10%",
      period: "20 лет",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      badge: "Быстрое одобрение",
    },
  ];

  return (
    <section
      id="main"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center overflow-hidden pb-10 md:pb-0"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-8 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Первые 5 скорингов — бесплатно</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="block text-slate-900 leading-[1.1]">
                  Полный скоринг
                </span>
                <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent leading-[1.1] mt-2">
                  за 5 минуты
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
              >
                Комплексная проверка по{" "}
                <span className="font-semibold text-blue-600">
                  5 отчётам из государственных баз
                </span>{" "}
                и автоматический подбор более чем{" "}
                <span className="font-semibold text-emerald-600">
                  50 ипотечных программ
                </span>{" "}
                банков Казахстана
              </motion.p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative flex items-center justify-center">
                  Начать бесплатно
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-2 border-slate-300 hover:border-blue-400 text-slate-700 hover:text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                  >
                    <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    Смотреть демо
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[95vw] max-w-[800px] p-0 bg-white/95 backdrop-blur-lg border border-slate-200/70 shadow-2xl rounded-2xl overflow-hidden">
                  <DialogHeader className="px-4 pt-4 pb-2 sm:px-6 sm:pt-6">
                    <DialogTitle className="text-lg sm:text-xl font-bold text-slate-900">
                      Демонстрация ScoriFy
                    </DialogTitle>
                    <DialogDescription className="text-sm text-slate-500">
                      Посмотрите, как работает наш сервис скоринга
                    </DialogDescription>
                  </DialogHeader>
                  <div className="relative w-full aspect-video bg-black">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/Po4w52SsNMk?si=loyas4UcT6OEczRZ"
                      title="ScoriFy демонстрация"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <DialogFooter className="px-4 py-3 sm:px-6 sm:py-4 bg-slate-50/50">
                    <DialogClose asChild>
                      <Button variant="outline" className="w-full sm:w-auto">
                        Закрыть
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group"
                >
                  <Card className="relative bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:border-blue-300 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                        {stat.icon}
                      </div>
                      <div className="text-left">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            {stat.number}
                          </span>
                          <span className="text-xl font-bold text-slate-900">
                            {stat.suffix}
                          </span>
                        </div>
                        <div className="text-xs text-slate-600 font-medium mt-1 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative mt-5"
          >
            {/* Main Dashboard */}
            <Card className="relative bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm shadow-2xl border border-white/40 rounded-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                  </div>
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium text-slate-300">
                    ScoriFy Dashboard
                  </span>
                </div>
                <div className="text-xs text-slate-400">Режим: Live</div>
              </div>

              <div className="p-6">
                {/* Client Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mb-8"
                >
                  <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">
                          Иванов Иван Иванович
                        </h3>
                        <p className="text-sm text-slate-500">
                          ИИН: 123456789012
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1, type: "spring" }}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold rounded-full"
                        >
                          <CheckCircle className="w-3 h-3" />
                          Одобрен
                        </motion.span>
                        <span className="text-xs text-slate-400 mt-1">
                          Кредитный рейтинг: 780
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          25M
                        </div>
                        <div className="text-xs text-slate-500">Доход</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">
                          ✓
                        </div>
                        <div className="text-xs text-slate-500">
                          ПКБ проверен
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-amber-600">
                          8
                        </div>
                        <div className="text-xs text-slate-500">Программы</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* Sources Progress */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-500" />
                    Проверка источников
                  </h4>

                  {[
                    {
                      name: "ЧСИ",
                      desc: "Судебные производства",
                      progress: 100,
                      color: "bg-indigo-500",
                    },
                    {
                      name: "БМГ",
                      desc: "Верификация телефона",
                      progress: 100,
                      color: "bg-purple-500",
                    },
                    {
                      name: "ПКБ",
                      desc: "Кредитная история",
                      progress: 100,
                      color: "bg-emerald-500",
                    },
                    {
                      name: "ГКБ",
                      desc: "Долги и банкротство",
                      progress: 95,
                      color: "bg-cyan-500",
                    },
                    {
                      name: "ЕНПФ",
                      desc: "Доходы и стаж",
                      progress: 100,
                      color: "bg-blue-500",
                    },
                  ].map((source, index) => (
                    <motion.div
                      key={source.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-2 h-2 rounded-full ${source.color}`}
                          />
                          <span className="font-medium text-slate-800">
                            {source.name}
                          </span>
                          <span className="text-sm text-slate-500">
                            {source.desc}
                          </span>
                        </div>
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${source.progress}%` }}
                          transition={{ duration: 1, delay: 1.4 + index * 0.1 }}
                          className={`h-full ${source.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Approved Programs Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2 }}
                  className="mt-6 space-y-3"
                >
                  {/* Header with celebration */}
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5, delay: 2.2, repeat: 2 }}
                      >
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      </motion.div>
                      Вам одобрено
                    </h4>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.1, type: "spring" }}
                      className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold rounded-full"
                    >
                      топ 3 программы
                    </motion.span>
                  </div>

                  {/* Program Cards */}
                  <div className="space-y-2">
                    {approvedPrograms.map((program, index) => (
                      <motion.div
                        key={program.name}
                        initial={{ opacity: 0, x: -20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: 2.2 + index * 0.15,
                          type: "spring",
                        }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="group cursor-pointer"
                      >
                        <div
                          className={`relative overflow-hidden bg-gradient-to-r ${program.bgColor} border ${program.borderColor} rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300`}
                        >
                          {/* Badge */}
                          <div className="absolute top-2 right-2">
                            <span
                              className={`px-2 py-0.5 bg-gradient-to-r ${program.color} text-white text-[10px] font-bold rounded-full`}
                            >
                              {program.badge}
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            {/* Logo */}
                            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                              <Image
                                src={program.logo}
                                alt={program.bank}
                                width={40}
                                height={40}
                              />
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-slate-900 text-sm">
                                {program.name}
                              </div>
                              <div className="text-xs text-slate-500">
                                {program.bank}
                              </div>
                            </div>

                            {/* Rate */}
                            <div className="text-right">
                              <div
                                className={`text-xl font-bold bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}
                              >
                                {program.rate}
                              </div>
                              <div className="text-[10px] text-slate-500">
                                {program.period}
                              </div>
                            </div>
                          </div>

                          {/* Progress bar decoration */}
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{
                              duration: 0.8,
                              delay: 2.4 + index * 0.15,
                            }}
                            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${program.color}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Card>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
              className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2.5 rounded-xl shadow-xl text-sm font-bold flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              Результат за 5 минуты
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
