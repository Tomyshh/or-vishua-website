"use client"

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { gsap } from 'gsap'
import Tilt from 'react-parallax-tilt'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    // Animation d'entrée GSAP pour le texte
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      
      tl.from('.hero-title-line', {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.1,
      })
      .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5')
      .from('.hero-cta', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
      }, '-=0.4')
      .from('.hero-stat', {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
        stagger: 0.1,
      }, '-=0.3')
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 md:pt-40 pb-100"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="blob absolute top-0 right-0 w-96 h-96 bg-cyan-400"
          style={{ y: smoothY }}
        />
        <motion.div
          className="blob absolute bottom-0 left-0 w-96 h-96 bg-teal-400 animation-delay-2000"
          style={{ y: smoothY }}
        />
        <motion.div
          className="blob absolute top-1/2 left-1/2 w-96 h-96 bg-amber-400 animation-delay-4000"
          style={{ y: smoothY }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/80" />

      <motion.div 
        className="container relative z-10"
        style={{ opacity, scale }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Badge animé */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="glass px-6 py-3 rounded-full inline-flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                ברוכים הבאים לישיבת אור וישועה
              </span>
            </div>
          </motion.div>

          {/* Titre avec animation split */}
          <div className="text-center mb-8 overflow-hidden">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <div className="overflow-hidden">
                <div className="hero-title-line">
                  <span className="inline-block">מרכז</span>{' '}
                  <span className="inline-block">תורני</span>
                </div>
              </div>
              <div className="overflow-hidden mt-2">
                <div className="hero-title-line gradient-text-modern">
                  <span className="inline-block">לדורות</span>{' '}
                  <span className="inline-block">הבאים</span>
                </div>
              </div>
            </h1>
          </div>

          {/* Sous-titre */}
          <p className="hero-subtitle text-xl md:text-2xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            ישיבת אור וישועה בחיפה - בית מדרש לתורה ולחכמה, המשלב לימוד עיוני עמוק 
            עם רוח של חדשנות ופתיחות לעולם המודרני
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
              <a
                href="/about"
                className="hero-cta group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  גלה עוד עלינו
                  <svg className="w-5 h-5 transform rtl:rotate-180 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Tilt>

            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
              <button className="hero-cta group px-8 py-4 rounded-2xl border-2 border-cyan-500 text-cyan-600 font-semibold text-lg hover:bg-cyan-50 transition-all duration-300 flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                צפה בסרטון
              </button>
            </Tilt>
          </div>

          {/* Stats avec glassmorphism */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { number: "500+", label: "תלמידים" },
              { number: "50+", label: "שנות מסורת" },
              { number: "30+", label: "רבנים ומרצים" },
            ].map((stat, index) => (
              <Tilt key={index} tiltMaxAngleX={15} tiltMaxAngleY={15}>
                <div className="hero-stat glass rounded-2xl p-6 text-center hover-3d">
                  <div className="text-4xl md:text-5xl font-bold gradient-text-modern mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500">גלול למטה</span>
          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
