"use client"

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { newsItems } from '@/lib/news-data'
import Tilt from 'react-parallax-tilt'

export default function NewsPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-16" dir="rtl">
            {/* Hero Section */}
            <section className="relative mb-16 px-4">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            חדשות <span className="gradient-text-modern">הישיבה</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                            הישארו מעודכנים בכל מה שקורה בישיבה. אירועים, עדכונים, וחדשות חמות מהקהילה שלנו.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* News Grid */}
            <section className="px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.02} className="h-full">
                                    <Link href={`/news/${item.id}`} className="block h-full">
                                        <article className="group h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100">
                                            {/* Image Container */}
                                            <div className="relative h-56 overflow-hidden">
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

                                                <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                                                    {item.title}
                                                </h3>

                                                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
                                                    {item.excerpt}
                                                </p>

                                                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
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
        </main>
    )
}
