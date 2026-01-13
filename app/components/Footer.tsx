"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Facebook, Instagram, Linkedin, MapPin, Shield, Users, Clock, Zap, ArrowUpRight, Building, FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";

// Контент для юридических документов
const legalContent = {
  privacy: {
    title: "Политика конфиденциальности",
    content: `
      <h3>1. Общие положения</h3>
      <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сервиса ScoriFy (далее — «Сервис»).</p>
      <p>Используя Сервис, вы соглашаетесь с условиями данной Политики конфиденциальности.</p>
      
      <h3>2. Сбор информации</h3>
      <p>Мы собираем следующие данные:</p>
      <ul>
        <li>ФИО и контактные данные</li>
        <li>ИИН клиентов для проведения скоринга</li>
        <li>Информация о кредитной истории</li>
        <li>Технические данные (IP-адрес, тип браузера)</li>
      </ul>
      
      <h3>3. Использование информации</h3>
      <p>Собранная информация используется для:</p>
      <ul>
        <li>Предоставления услуг кредитного скоринга</li>
        <li>Улучшения качества сервиса</li>
        <li>Связи с пользователями</li>
        <li>Соблюдения законодательных требований</li>
      </ul>
      
      <h3>4. Защита данных</h3>
      <p>Мы применяем современные методы защиты данных, включая шифрование SSL/TLS, двухфакторную аутентификацию и регулярное резервное копирование.</p>
      
      <h3>5. Права пользователей</h3>
      <p>Вы имеете право:</p>
      <ul>
        <li>Получить доступ к своим данным</li>
        <li>Исправить неточные данные</li>
        <li>Удалить свои данные</li>
        <li>Отозвать согласие на обработку</li>
      </ul>
      
      <h3>6. Контакты</h3>
      <p>По вопросам конфиденциальности: info@scorify.kz</p>
    `
  },
  terms: {
    title: "Пользовательское соглашение",
    content: `
      <h3>1. Предмет соглашения</h3>
      <p>Настоящее Соглашение регулирует отношения между ТОО «ScoriFy Systems» (далее — «Компания») и пользователем сервиса ScoriFy (далее — «Пользователь»).</p>
      
      <h3>2. Описание услуг</h3>
      <p>Сервис предоставляет следующие услуги:</p>
      <ul>
        <li>Автоматизированный кредитный скоринг</li>
        <li>Проверка кредитной истории</li>
        <li>Анализ платежеспособности</li>
        <li>Формирование отчетов для банков</li>
      </ul>
      
      <h3>3. Права и обязанности сторон</h3>
      <p><strong>Пользователь обязуется:</strong></p>
      <ul>
        <li>Предоставлять достоверную информацию</li>
        <li>Соблюдать законодательство РК</li>
        <li>Не передавать доступ третьим лицам</li>
        <li>Своевременно оплачивать услуги</li>
      </ul>
      
      <p><strong>Компания обязуется:</strong></p>
      <ul>
        <li>Обеспечивать работоспособность сервиса</li>
        <li>Защищать персональные данные</li>
        <li>Предоставлять техническую поддержку</li>
      </ul>
      
      <h3>4. Ограничение ответственности</h3>
      <p>Компания не несет ответственности за решения, принятые на основе данных скоринга. Окончательное решение о выдаче кредита принимает банк.</p>
      
      <h3>5. Срок действия</h3>
      <p>Соглашение вступает в силу с момента регистрации и действует бессрочно до расторжения одной из сторон.</p>
    `
  },
  offer: {
    title: "Публичная оферта",
    content: `
      <h3>1. Общие положения</h3>
      <p>Настоящий документ является официальным предложением (публичной офертой) ТОО «ScoriFy Systems» заключить договор на оказание услуг кредитного скоринга.</p>
      
      <h3>2. Акцепт оферты</h3>
      <p>Акцептом оферты является:</p>
      <ul>
        <li>Регистрация в системе ScoriFy</li>
        <li>Оплата выбранного тарифа</li>
        <li>Использование сервиса</li>
      </ul>
      
      <h3>3. Стоимость и порядок оплаты</h3>
      <p>Актуальные тарифы размещены на сайте в разделе «Тарифы». Оплата производится безналичным способом на расчетный счет Компании.</p>
      
      <h3>4. Предмет оферты</h3>
      <p>Компания обязуется предоставить доступ к системе автоматизированного кредитного скоринга, включая:</p>
      <ul>
        <li>Проверку по базам ПКБ и ГКБ</li>
        <li>Анализ кредитоспособности</li>
        <li>Расчет долговой нагрузки</li>
        <li>Формирование рекомендаций по банкам</li>
      </ul>
      
      <h3>5. Гарантии и возврат</h3>
      <p>Возврат средств возможен в течение 14 дней с момента оплаты, если услуга не была использована.</p>
      
      <h3>6. Реквизиты</h3>
      <p>ТОО «ScoriFy Systems»<br/>
      БИН: 123456789012<br/>
      Адрес: г. Алматы, ул. Абая 150/230</p>
    `
  },
  dataProcessing: {
    title: "Обработка персональных данных",
    content: `
      <h3>1. Согласие на обработку</h3>
      <p>Используя сервис ScoriFy, вы даете согласие на обработку персональных данных в соответствии с Законом РК «О персональных данных и их защите».</p>
      
      <h3>2. Категории обрабатываемых данных</h3>
      <ul>
        <li>Идентификационные данные (ФИО, ИИН)</li>
        <li>Контактные данные (телефон, email)</li>
        <li>Финансовые данные (кредитная история, доходы)</li>
        <li>Технические данные (IP, cookies)</li>
      </ul>
      
      <h3>3. Цели обработки</h3>
      <ul>
        <li>Оказание услуг кредитного скоринга</li>
        <li>Идентификация пользователя</li>
        <li>Исполнение договорных обязательств</li>
        <li>Улучшение качества сервиса</li>
        <li>Маркетинговые коммуникации (с согласия)</li>
      </ul>
      
      <h3>4. Сроки хранения</h3>
      <p>Персональные данные хранятся в течение срока действия договора и 5 лет после его прекращения в соответствии с требованиями законодательства.</p>
      
      <h3>5. Передача данных третьим лицам</h3>
      <p>Данные могут передаваться:</p>
      <ul>
        <li>Кредитным бюро (ПКБ, ГКБ) для проверки</li>
        <li>Банкам-партнерам (с согласия клиента)</li>
        <li>Государственным органам по запросу</li>
      </ul>
      
      <h3>6. Отзыв согласия</h3>
      <p>Вы можете отозвать согласие на обработку персональных данных, направив запрос на info@scorify.kz. Отзыв согласия может привести к невозможности использования сервиса.</p>
    `
  }
};

export default function Footer() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const navigationLinks = [
    { name: "О платформе", href: "#main" },
    { name: "Возможности", href: "#features" },
    { name: "Как работает", href: "#how-it-works" },
    { name: "Тарифы", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Отзывы", href: "#reviews" }
  ];

  const legalLinks = [
    { name: "Политика конфиденциальности", key: "privacy", icon: Shield },
    { name: "Пользовательское соглашение", key: "terms", icon: FileText },
    { name: "Публичная оферта", key: "offer", icon: FileText },
    { name: "Обработка персональных данных", key: "dataProcessing", icon: Shield }
  ];

  const socialLinks = [
    { name: "Telegram", href: "https://t.me/scorify_kz", icon: MessageCircle, color: "hover:text-blue-400" },
    { name: "WhatsApp", href: "https://wa.me/77777777777", icon: MessageCircle, color: "hover:text-green-400" },
    { name: "Instagram", href: "https://instagram.com/scorify.kz", icon: Instagram, color: "hover:text-pink-400" },
    { name: "LinkedIn", href: "https://linkedin.com/company/scorify", icon: Linkedin, color: "hover:text-blue-400" }
  ];

  const quickStats = [
    { icon: Users, value: "50+", label: "активных брокеров", color: "text-blue-400" },
    { icon: Zap, value: "5 мин", label: "среднее время скоринга", color: "text-emerald-400" },
    { icon: Clock, value: "24/7", label: "доступность системы", color: "text-amber-400" },
    { icon: Shield, value: "100%", label: "законность проверки", color: "text-purple-400" }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contacts" className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 py-16 lg:py-20">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo_shar.png" alt="ScoriFy" className=" rounded-full" width={50} height={50} />
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-8 max-w-md">
              Автоматизируем кредитный скоринг для ипотечных брокеров Казахстана. 
              Экономим время, увеличиваем прибыль, обеспечиваем точность данных.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {quickStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center">
                      <IconComponent className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-slate-400">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <span>Вернуться наверх</span>
              <ChevronRight className="w-4 h-4 rotate-90" />
            </motion.button>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-slate-800/50">Навигация</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Documents */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-slate-800/50">Документы</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  >
                    <button
                      onClick={() => setOpenModal(link.key)}
                      className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200 text-sm w-full text-left"
                    >
                      <IconComponent className="w-4 h-4 text-blue-400" />
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-slate-800/50">Контакты</h3>
            
            <div className="space-y-4 mb-8">
              <motion.a
                href="mailto:info@scorify.kz"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-xs text-slate-400 group-hover:text-slate-300">info@scorify.kz</div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+77777777777"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Телефон</div>
                  <div className="text-xs text-slate-400 group-hover:text-slate-300">+7 (777) 777-77-77</div>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-300 group cursor-default"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Адрес</div>
                  <div className="text-xs text-slate-400">Алматы, Абая 150/230</div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4 text-slate-300">Социальные сети</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 hover:shadow-lg`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Support Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-slate-800 pt-8 pb-8"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold text-white">Система</h4>
              </div>
              <p className="text-slate-300 text-sm">Доступна 24/7</p>
              <div className="mt-2 w-3 h-3 bg-green-400 rounded-full mx-auto animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-emerald-400" />
                <h4 className="font-semibold text-white">Поддержка</h4>
              </div>
              <p className="text-slate-300 text-sm">24/7</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <MessageCircle className="w-5 h-5 text-amber-400" />
                <h4 className="font-semibold text-white">Ответ</h4>
              </div>
              <p className="text-slate-300 text-sm">В течение 15 минут</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Building className="w-5 h-5 text-purple-400" />
                <h4 className="font-semibold text-white">Регистрация</h4>
              </div>
              <p className="text-slate-300 text-sm">ТОО "ScoriFy Systems"</p>
              <p className="text-xs text-slate-400 mt-1">БИН: 123456789012</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-slate-800 pt-8 pb-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-center gap-2">
                <span>© 2025 ScoriFy. Все права защищены.</span>
                <span className="hidden lg:inline">•</span>
                <span>Лицензия №KZ-2024-001</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Все системы работают</span>
              </div>
              <div className="text-xs text-slate-500 px-3 py-1 bg-slate-800/50 rounded-full">
                Версия 2.1.0
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-8"
          >
            <Button
              onClick={() => scrollToSection("#cta")}
              className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 text-white border border-blue-500/30 px-8 py-3 rounded-xl backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Начать бесплатно
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Legal Modals */}
      {Object.entries(legalContent).map(([key, { title, content }]) => (
        <Dialog key={key} open={openModal === key} onOpenChange={(open) => setOpenModal(open ? key : null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 border-slate-700 text-white">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-white">{title}</DialogTitle>
              <DialogDescription className="text-slate-400">
                ТОО «ScoriFy Systems» — Документ актуален на 2025 год
              </DialogDescription>
            </DialogHeader>
            <div 
              className="prose prose-invert prose-sm max-w-none mt-4
                [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-3
                [&_p]:text-slate-300 [&_p]:leading-relaxed [&_p]:mb-3
                [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:text-slate-300
                [&_li]:mb-1.5
                [&_strong]:text-white [&_strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </DialogContent>
        </Dialog>
      ))}
    </footer>
  );
}