"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Facebook, Instagram, Linkedin, MapPin } from "lucide-react";

export default function Footer() {
  const navigationLinks = [
    { name: "О платформе", href: "#about" },
    { name: "Возможности", href: "#features" },
    { name: "Как работает", href: "#how-it-works" },
    { name: "Тарифы", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Отзывы", href: "#reviews" }
  ];

  const legalLinks = [
    { name: "Политика конфиденциальности", href: "/privacy" },
    { name: "Пользовательское соглашение", href: "/terms" },
    { name: "Публичная оферта", href: "/offer" },
    { name: "Обработка персональных данных", href: "/data-processing" }
  ];

  const socialLinks = [
    { name: "Telegram", href: "https://t.me/scorify_kz", icon: MessageCircle },
    { name: "WhatsApp", href: "https://wa.me/77777777777", icon: Phone },
    { name: "Instagram", href: "https://instagram.com/scorify.kz", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com/company/scorify", icon: Linkedin }
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

  return (
    <footer id="contacts" className="bg-slate-900 text-white pt-16 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">ScoriFy</span>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-6">
              Автоматизируем кредитный скоринг для ипотечных брокеров Казахстана. 
              Экономим время, увеличиваем прибыль.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>г. Алматы, ул. Абая 150/230</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+77777777777" className="hover:text-white transition-colors">
                  +7 (777) 777-77-77
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:info@scorify.kz" className="hover:text-white transition-colors">
                  info@scorify.kz
                </a>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6">Навигация</h3>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6">Документы</h3>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
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
            <h3 className="text-lg font-semibold mb-6">Связаться с нами</h3>
            
            <div className="space-y-4 mb-8">
              <a
                href="https://wa.me/77777777777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-300 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp поддержка</span>
              </a>
              <a
                href="https://t.me/scorify_kz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Telegram канал</span>
              </a>
            </div>

            <div>
              <h4 className="font-medium mb-4">Следите за обновлениями:</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Working Hours & Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-slate-800 pt-8 mb-8"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">Система</h4>
              <p className="text-slate-300 text-sm">Доступна 24/7</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">Поддержка</h4>
              <p className="text-slate-300 text-sm">Пн-Вс: 9:00-21:00</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">Ответ</h4>
              <p className="text-slate-300 text-sm">В течение 15 минут</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">Регистрация</h4>
              <p className="text-slate-300 text-sm">ТОО "ScoriFy Systems"</p>
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
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-slate-400 text-sm text-center lg:text-left">
              © 2025 ScoriFy. Все права защищены. 
              <span className="block lg:inline lg:ml-2">
                Лицензия на обработку кредитной информации №KZ-2024-001
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-slate-400 text-sm">
              <span>Версия 2.1.0</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" title="Система работает"></div>
              <span>Все системы работают</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}