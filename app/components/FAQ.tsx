"use client";

import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      id: "sources",
      question: "Откуда ScoriFy берёт данные?",
      answer: "Мы интегрированы с официальными государственными базами: ПКБ (Первое Кредитное Бюро), ЕНПФ (Единый Накопительный Пенсионный Фонд), ГКБ (Государственное Кредитное Бюро), ЧСИ (Частные Судебные Исполнители) и БМГ (База Мобильных Граждан). Все данные получаем легально с согласия клиента."
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

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Часто задаваемые вопросы
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ответы на популярные вопросы
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Собрали самые частые вопросы от наших пользователей. Не нашли ответ? Напишите нам!
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-slate-200 last:border-b-0">
                <AccordionTrigger className="px-6 py-6 text-left hover:bg-slate-50 transition-colors duration-200">
                  <span className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-slate-600 leading-relaxed text-base"
                  >
                    {faq.answer}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Остались вопросы?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Наша команда поддержки готова помочь вам разобраться со всеми особенностями работы ScoriFy
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">15 мин</div>
                <div className="text-slate-600 font-medium">среднее время ответа</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-slate-600 font-medium">поддержка пользователей</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-slate-600 font-medium">довольных клиентов</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@scorify.kz"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Написать в поддержку
              </a>
              <a 
                href="https://wa.me/77777777777"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300"
              >
                WhatsApp чат
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}