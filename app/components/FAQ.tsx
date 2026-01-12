"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown, MessageSquare, Mail, Zap, Clock, Users, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>(["sources", "legal"]);

  const faqs = [
    {
      id: "sources",
      question: "Откуда ScoriFy берёт данные?",
      answer: "Мы интегрированы с официальными государственными базами: ПКБ, ЕНПФ, ГКБ, ЧСИ. Все данные получаем легально с согласия клиента."
    },
    {
      id: "legal",
      question: "Законно ли это?",
      answer: "Да, полностью законно. Клиент даёт письменное согласие на проверку через нашу защищённую форму. Мы работаем в строгом соответствии с законодательством Республики Казахстан о защите персональных данных и получении кредитной информации."
    },
    {
      id: "speed",
      question: "Как быстро приходит отчёт?",
      answer: "В среднем 2-3 минуты после того, как клиент заполнит анкету и даст согласие на проверку. В редких случаях, когда государственные системы работают медленно, это может занять до 5 минут."
    },
    {
      id: "trial",
      question: "Можно ли попробовать бесплатно?",
      answer: "Да! Все новые пользователи получают 5 бесплатных скорингов. Этого достаточно, чтобы оценить качество системы и понять как она поможет вашему бизнесу. Никаких обязательств и автоматических списаний."
    },
    {
      id: "payment-corporate",
      question: "Как работает постоплата для юридических лиц?",
      answer: "Заключаем официальный договор на оказание услуг. Вы пользуетесь сервисом в течение месяца, в конце месяца мы выставляем счёт по факту использования. Минимальный лимит и персональный менеджер для решения всех вопросов."
    },
    {
      id: "programs-update",
      question: "Актуальна ли база ипотечных программ?",
      answer: "Да, мы постоянно отслеживаем изменения условий во всех банках Казахстана. База обновляется еженедельно. Сейчас в системе более 50 актуальных программ от всех крупных банков: Halyk, Kaspi, Forte, БЦК и других."
    },
    {
      id: "integration",
      question: "Можно ли интегрировать ScoriFy с нашей CRM?",
      answer: "Да, мы разрабатываем API для интеграции с популярными CRM системами. Пилотная версия будет готова в первом квартале 2025 года. Пока что работа происходит через веб-интерфейс, который очень удобен и быстр."
    },
    {
      id: "accuracy",
      question: "Насколько точны данные из государственных баз?",
      answer: "Данные поступают напрямую из официальных источников без обработки с нашей стороны. Точность данных зависит от актуальности информации в государственных системах. Обычно это 98-99% точности, что значительно выше любых альтернативных источников."
    },
    {
      id: "support",
      question: "Какая поддержка предоставляется пользователям?",
      answer: "Для всех пользователей доступна техническая поддержка через чат на сайте, email и WhatsApp. Корпоративные клиенты получают персонального менеджера и приоритетную поддержку. Среднее время ответа — 15 минут в рабочие часы."
    },
    {
      id: "data-storage",
      question: "Как долго хранятся данные клиентов?",
      answer: "Отчёты по скорингу хранятся в вашем личном кабинете 12 месяцев для удобства работы. После этого данные автоматически удаляются в соответствии с требованиями законодательства о защите персональных данных."
    }
  ];

  const stats = [
    { icon: Clock, value: "15 мин", label: "среднее время ответа", color: "text-blue-600" },
    { icon: Users, value: "24/7", label: "поддержка пользователей", color: "text-green-600" },
    { icon: Zap, value: "98%", label: "довольных клиентов", color: "text-purple-600" }
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50/30" />
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
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            </div>
            <span className="text-sm font-medium text-slate-700">Частые вопросы</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="text-slate-800">Ответы на</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              популярные вопросы
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Собрали самые частые вопросы от наших пользователей. Не нашли ответ? Напишите нам!
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openItems.includes(faq.id);
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  className="group"
                >
                  <Card className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 border border-slate-200/50 hover:border-blue-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full text-left p-6 lg:p-8 focus:outline-none"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            className="w-10 h-10 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                          >
                            <HelpCircle className="w-5 h-5 text-blue-600" />
                          </motion.div>
                          
                          <div>
                            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                              {faq.question}
                            </h3>
                            
                            <motion.div
                              initial={false}
                              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="text-slate-600 leading-relaxed pt-2">
                                {faq.answer}
                              </p>
                            </motion.div>
                          </div>
                        </div>
                        
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          className="flex-shrink-0 ml-4"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-full flex items-center justify-center">
                            <ChevronDown className="w-4 h-4 text-slate-600" />
                          </div>
                        </motion.div>
                      </div>
                    </button>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Support Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl blur-xl" />
            
            <div className="relative bg-gradient-to-br from-white to-blue-50/30 border border-blue-100/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="text-center group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      
                      <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>
                        {stat.value}
                      </div>
                      
                      <div className="text-sm text-slate-600 font-medium leading-tight">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-xl" />
            
            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10 text-center">
                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 bg-gradient-to-br from-white to-white/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <MessageSquare className="w-10 h-10 text-blue-600" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Остались вопросы?
                </h3>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Наша команда поддержки готова помочь вам разобраться со всеми особенностями работы ScoriFy
                </p>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <motion.a
                    href="mailto:support@scorify.kz"
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="bg-gradient-to-b from-white/90 to-white/80 border border-white/30 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-slate-900">Email поддержка</div>
                          <div className="text-sm text-slate-600">support@scorify.kz</div>
                        </div>
                      </div>
                    </Card>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/77777777777"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="bg-gradient-to-b from-white/90 to-white/80 border border-white/30 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-slate-900">WhatsApp чат</div>
                          <div className="text-sm text-slate-600">+7 (777) 777-77-77</div>
                        </div>
                      </div>
                    </Card>
                  </motion.a>
                </div>

                {/* Final CTA */}
                <Button
                  size="lg"
                  variant="secondary"
                  className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    const element = document.querySelector('#cta');
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Попробовать бесплатно
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}