"use client"

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Share2, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getNewsItem } from '@/lib/news-data'

export default function SingleNewsPage() {
    const params = useParams()
    const id = Number(params.id)
    const item = getNewsItem(id)

    if (!item) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50" dir="rtl">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">הכתבה לא נמצאה</h1>
                    <Link href="/news" className="text-cyan-600 hover:underline">
                        חזרה לכל העדכונים
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-white pt-24 pb-16" dir="rtl">
            <article className="container mx-auto max-w-4xl px-4">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-cyan-600 transition-colors">בית</Link>
                    <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                    <Link href="/news" className="hover:text-cyan-600 transition-colors">חדשות</Link>
                    <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                    <span className="text-gray-900 font-medium truncate max-w-[200px]">{item.title}</span>
                </nav>

                {/* Header Content */}
                <div className="mb-10">
                    <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white bg-gradient-to-r ${item.color} mb-6 shadow-lg`}>
                        {item.category}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        {item.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm md:text-base border-b border-gray-100 pb-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-cyan-600" />
                            {item.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-cyan-600" />
                            {item.readTime}
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12 group"
                >
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 ring-1 ring-black/10 rounded-3xl" />
                </motion.div>

                {/* Article Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-lg prose-cyan max-w-none"
                >
                    <div className="text-xl md:text-2xl font-medium text-gray-600 mb-10 leading-relaxed border-r-4 border-cyan-500 pr-6 bg-gray-50/50 py-4 rounded-l-xl">
                        {item.excerpt}
                    </div>

                    <div
                        dangerouslySetInnerHTML={{ __html: item.content || '' }}
                        className="text-gray-800 leading-relaxed space-y-6"
                    />
                </motion.div>

                {/* Share & Navigation */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors font-medium group"
                    >
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-cyan-50 transition-colors">
                            <ArrowRight className="w-5 h-5 rtl:rotate-180 text-gray-600 group-hover:text-cyan-600" />
                        </div>
                        <span>חזרה לכל העדכונים</span>
                    </Link>

                    <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-medium">
                        <Share2 className="w-5 h-5" />
                        שתף כתבה
                    </button>
                </div>
            </article>
        </main>
    )
}
