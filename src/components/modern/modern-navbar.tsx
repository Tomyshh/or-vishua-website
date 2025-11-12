"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, BookOpen, Users, Calendar, Phone, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { name: "בית", href: "/", icon: Home },
  { name: "אודות", href: "/about", icon: Users },
  { name: "לימודים", href: "/studies", icon: BookOpen },
  { name: "קהילה", href: "/community", icon: Heart },
  { name: "לוח זמנים", href: "/calendar", icon: Calendar },
  { name: "צור קשר", href: "/contact", icon: Phone },
]

export function ModernNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass shadow-lg py-2 md:py-3' 
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 md:gap-3"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center">
                  <Image
                    src="/logo/or_vishua_logo.png"
                    alt="אור וישועה - ישיבה גבוהה חיפה"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="hidden sm:block">
                  <div className="text-lg md:text-2xl font-bold gradient-text-modern">
                    אור וישועה
                  </div>
                  <div className="text-xs text-gray-500 hidden md:block">ישיבה גבוהה חיפה</div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item, index) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="group relative px-4 py-2 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-gray-700 group-hover:text-cyan-600 transition-colors">
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300 font-medium"
              >
                התחבר
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300"
              >
                הרשמה
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel - Éclaircissant */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-gray-800 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-4 sm:p-6 bg-gradient-to-br from-white via-cyan-50/20 to-teal-50/20 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 min-h-full">
                {/* Close Button */}
                <div className="flex justify-end mb-6 sm:mb-8">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-white/80 dark:bg-gray-700/80 hover:bg-gray-100 dark:hover:bg-gray-600 active:bg-gray-200 dark:active:bg-gray-500 transition-colors shadow-sm"
                  >
                    <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link 
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-white/60 dark:bg-gray-700/60 hover:bg-gradient-to-r hover:from-cyan-100 hover:to-teal-100 dark:hover:from-cyan-900/40 dark:hover:to-teal-900/40 active:scale-95 transition-all duration-300 cursor-pointer group block shadow-sm hover:shadow-md"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 dark:from-cyan-500/30 dark:to-teal-500/30 flex items-center justify-center group-hover:from-cyan-500 group-hover:to-teal-500 transition-all duration-300 flex-shrink-0">
                          <item.icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-medium text-base sm:text-lg text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="space-y-3">
                  <button className="w-full px-6 py-3.5 rounded-xl border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 dark:border-cyan-400 font-semibold text-base bg-white dark:bg-gray-700 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 active:scale-95 transition-all duration-300 shadow-sm">
                    התחבר
                  </button>
                  <button className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold text-base shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300">
                    הרשמה
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
