"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, ArrowRight, Tag, Clock } from 'lucide-react'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'
import Link from 'next/link'
import { newsItems } from '@/lib/news-data'

export function NewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative px-4 w-full z-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-4 gap-0"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/80 text-cyan-700 text-sm font-medium mb-4 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              עדכונים חמים
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              מה קורה <span className="gradient-text-modern">בישיבה?</span>
            </h2>
          </div>

          <Link
            href="/news"
            className="group flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors font-medium"
          >
            <span>לכל העדכונים</span>
            <ArrowRight className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
          </Link>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
                <Link href={`/news/${item.id}`} className="block h-full">
                  <article className="group h-full bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                      {/* Category Badge */}
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.color} shadow-lg`}>
                        {item.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                        {item.excerpt}
                      </p>

                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 group-hover:gap-3 transition-all">
                          קרא עוד
                          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
