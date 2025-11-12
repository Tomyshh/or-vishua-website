"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Users, Heart, GraduationCap, Globe, Sparkles } from 'lucide-react'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'

const features = [
  {
    icon: BookOpen,
    title: "לימוד תורני עמוק",
    description: "תכנית לימודים מקיפה המשלבת גמרא, הלכה, מחשבת ישראל ופילוסופיה יהודית",
    color: "from-cyan-500 to-blue-500",
    delay: 0,
    image: "/images/havrouta-yioun.jpg",
  },
  {
    icon: Users,
    title: "קהילה חמה ותומכת",
    description: "סביבה משפחתית המעודדת צמיחה אישית ורוחנית בתוך קהילה תוססת ומגוונת",
    color: "from-teal-500 to-green-500",
    delay: 0.1,
    image: "/images/kehila.jpg",
  },
  {
    icon: Heart,
    title: "ליווי אישי",
    description: "כל תלמיד זוכה לליווי אישי ממרצי הישיבה להתפתחות מיטבית ומותאמת אישית",
    color: "from-amber-500 to-orange-500",
    delay: 0.2,
    image: "/images/harav.jpg",
  },
  {
    icon: GraduationCap,
    title: "הכנה מקצועית",
    description: "הכשרה מקצועית לרבנות, חינוך והוראה לצד פיתוח כישורי חיים ומנהיגות",
    color: "from-purple-500 to-pink-500",
    delay: 0.3,
    image: "/images/havrouta.jpg",
  },
  {
    icon: Globe,
    title: "חיבור לעולם המודרני",
    description: "גישור בין עולם התורה לחיים המודרניים בגישה פתוחה, מכבדת וחכמה",
    color: "from-indigo-500 to-purple-500",
    delay: 0.4,
    image: "/images/modern.jpg",
  },
  {
    icon: Sparkles,
    title: "מצוינות אקדמית",
    description: "שאיפה למצוינות בלימוד התורה תוך שמירה על רמה אקדמית גבוהה ומחויבות",
    color: "from-rose-500 to-red-500",
    delay: 0.5,
    image: "/images/arme-livouy.jpg",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 188 212) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-xs sm:text-sm font-medium mb-4 md:mb-6">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <span>מה מייחד אותנו</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="block text-gray-900">הערכים</span>
            <span className="block gradient-text-modern">המנחים אותנו</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            בישיבת אור וישועה אנו מאמינים בחינוך תורני המשלב מצוינות אקדמית,
            צמיחה רוחנית ומעורבות חברתית משמעותית
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} tiltEnable={typeof window !== 'undefined' && window.innerWidth >= 768}>
                <div className="group h-full p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl glass transition-all duration-500 hover:shadow-2xl relative overflow-hidden hover:border-cyan-300">
                  {/* Background Image avec overlay */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay blanc avec opacité */}
                    <div className="absolute inset-0 bg-white/90 md:bg-white/85 group-hover:bg-white/75 transition-all duration-500" />
                    {/* Gradient overlay coloré */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                  </div>
                  
                  {/* Icon */}
                  <div className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${feature.color} p-3 md:p-4 mb-4 md:mb-6 group-hover:scale-110 md:group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:gradient-text-modern transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="relative z-10 text-sm sm:text-base text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 font-medium">
                    {feature.description}
                  </p>

                  {/* Hover Arrow - Hidden on mobile */}
                  <div className="relative z-10 mt-4 md:mt-6 hidden md:flex items-center gap-2 text-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                    <span className="text-sm font-medium">קרא עוד</span>
                    <svg className="w-4 h-4 transform rtl:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <div className="relative rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 animated-gradient opacity-90" />
            
            {/* Glass Overlay */}
            <div className="absolute inset-0 glass" />
            
            {/* Content */}
            <div className="relative z-10 text-center text-white">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">
                מוכנים להצטרף למשפחה שלנו?
              </h3>
              
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto px-4">
                הצטרף למסורת של למידה, צמיחה והתפתחות אישית בישיבת אור וישועה
              </p>
              
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl md:rounded-2xl bg-white text-cyan-600 font-semibold text-base sm:text-lg hover:bg-gray-100 active:scale-95 md:hover:scale-105 transition-all duration-300 shadow-xl">
                צור קשר עוד היום
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
