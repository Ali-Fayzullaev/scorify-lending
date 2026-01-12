// File: app/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Shield, Zap, CreditCard, Phone, Mail, MessageSquare, Home, BarChart3, Calculator, HelpCircle, Users, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = ["hero", "about", "features", "how-it-works", "pricing", "faq", "contacts"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "О платформе", href: "#about", icon: Home },
    { name: "Возможности", href: "#features", icon: BarChart3 },
    { name: "Как работает", href: "#how-it-works", icon: Zap },
    { name: "Тарифы", href: "#pricing", icon: CreditCard },
    { name: "FAQ", href: "#faq", icon: HelpCircle },
    { name: "Контакты", href: "#contacts", icon: Users }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200/30" 
            : "bg-transparent"
        }`}
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="relative flex-shrink-0">
                <Image src="/logo_shar.png" alt="ScoriFy" className="rounded-full" width={45} height={45} />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">ScoriFy</span>
                <span className="block text-xs text-slate-500 group-hover:text-blue-500 transition-colors">
                  Кредитный скоринг
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                const IconComponent = item.icon;
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-2 xl:px-3 py-2 rounded-lg transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-1.5 xl:space-x-2">
                      <div className={`hidden xl:flex w-7 h-7 rounded-lg items-center justify-center transition-all ${
                        isActive 
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md" 
                          : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                      }`}>
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-sm font-medium transition-colors whitespace-nowrap ${
                        isActive 
                          ? "text-blue-600" 
                          : "text-slate-700 group-hover:text-slate-900"
                      }`}>
                        {item.name}
                      </span>
                    </div>
                    
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <motion.div 
              className="hidden lg:flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Button 
                onClick={() => scrollToSection("#cta")}
                className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Попробовать бесплатно
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors duration-200 relative"
              aria-label="Открыть меню"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <>
                  <Menu className="w-6 h-6" />
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </>
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                mass: 0.8
              }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-b from-white to-slate-50 shadow-2xl z-50 lg:hidden flex flex-col"
            >
              {/* Mobile Menu Header */}
              <div className="relative p-6 border-b border-slate-200 bg-gradient-to-r from-blue-50/50 to-cyan-50/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-10 h-10 flex items-center justify-center"
                    >
                      <Image src="/logo.png" alt="ScoriFy" className=" rounded-full" width={45} height={45} />
                    </motion.div>
                  </div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ rotate: 90 }}
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100/50 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>
                
                {/* Quick Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="grid grid-cols-3 gap-4 mt-6"
                >
                  {[
                    { value: "2 мин", label: "Скоринг", color: "text-blue-600" },
                    { value: "5 баз", label: "Проверка", color: "text-blue-600" },
                    { value: "500 ₸", label: "Стоимость", color: "text-emerald-600" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 py-6 overflow-y-auto">
                <div className="space-y-1 px-4">
                  {navigationItems.map((item, index) => {
                    const IconComponent = item.icon;
                    const isActive = activeSection === item.href.replace("#", "");
                    return (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.2 }}
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full text-left py-4 px-4 flex items-center justify-between rounded-xl transition-all duration-200 group ${
                          isActive 
                            ? "bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100" 
                            : "hover:bg-slate-100/50"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            isActive 
                              ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white" 
                              : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                          }`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="text-left">
                            <div className={`font-medium ${
                              isActive ? "text-blue-600" : "text-slate-700 group-hover:text-slate-900"
                            }`}>
                              {item.name}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className={`w-4 h-4 ${
                          isActive ? "text-blue-500" : "text-slate-400 group-hover:text-blue-400"
                        } -rotate-90`} />
                      </motion.button>
                    );
                  })}
                </div>
              </nav>

              {/* Mobile CTA & Contacts */}
              <div className="p-6 border-t border-slate-200 space-y-6">
                {/* Main CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button 
                    onClick={() => {
                      scrollToSection("#cta");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative flex items-center justify-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Попробовать бесплатно
                    </span>
                  </Button>
                  
                  <p className="text-center text-sm text-slate-500 mt-2">
                    5 скорингов бесплатно • Без обязательств
                  </p>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 border-t border-slate-200"
                >
                  <div className="text-sm font-medium text-slate-700 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                    Связаться с нами
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: Phone, text: "+7 (777) 777-77-77", href: "tel:+77777777777", color: "text-blue-600" },
                      { icon: Mail, text: "info@scorify.kz", href: "mailto:info@scorify.kz", color: "text-blue-600" },
                      { icon: MessageSquare, text: "@scorify_kz", href: "https://t.me/scorify_kz", color: "text-blue-600" }
                    ].map((contact, index) => {
                      const IconComponent = contact.icon;
                      return (
                        <motion.a
                          key={index}
                          href={contact.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-100/50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <IconComponent className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                          </div>
                          <span className="text-sm text-slate-700 group-hover:text-blue-600">
                            {contact.text}
                          </span>
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  );
}