"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Newspaper, Users, BookOpen, Mic } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    type: "אירוע",
    title: "כנס בוגרים שנתי",
    description: "מפגש מרגש של בוגרי הישיבה מכל השנים עם שיעורים, הרצאות ופאנלים",
    date: "15 בדצמבר 2024",
    time: "17:00-22:00",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    icon: Users,
    color: "text-blue-600 bg-blue-50",
  },
  {
    id: 2,
    type: "שיעור מיוחד",
    title: "סדרת שיעורים על הרמב״ם",
    description: "ראש הישיבה מעביר סדרת שיעורים מיוחדת על משנה תורה להרמב״ם",
    date: "החל מ-20 בנובמבר",
    time: "20:30",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
    icon: BookOpen,
    color: "text-purple-600 bg-purple-50",
  },
  {
    id: 3,
    type: "חדשות",
    title: "פתיחת מחזור חדש",
    description: "נפתחה ההרשמה למחזור החדש של הישיבה הגבוהה לשנת תשפ״ה",
    date: "1 בנובמבר 2024",
    time: "",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=250&fit=crop",
    icon: Newspaper,
    color: "text-green-600 bg-green-50",
  },
  {
    id: 4,
    type: "הרצאה",
    title: "הרצאת אורח מיוחדת",
    description: "פרופ׳ ישראל אומן מרצה על ״תורה ומדע בעידן המודרני״",
    date: "25 בנובמבר 2024",
    time: "19:00",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    icon: Mic,
    color: "text-orange-600 bg-orange-50",
  },
]

export function News() {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            <span>חדשות ואירועים</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            מה קורה בישיבה
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            הישארו מעודכנים עם החדשות האחרונות, אירועים מיוחדים ופעילויות הישיבה
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${item.color}`}>
                      <div className="flex items-center gap-1">
                        <item.icon className="w-3 h-3" />
                        <span>{item.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    {item.time && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.time}</span>
                      </div>
                    )}
                  </div>
                  
                  <Button variant="ghost" size="sm" className="mt-4 -mr-2 group/btn">
                    <span>קרא עוד</span>
                    <ArrowLeft className="w-4 h-4 mr-2 rtl:rotate-180 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 text-center bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-0">
            <Newspaper className="w-12 h-12 mx-auto mb-4 text-orange-500" />
            <h3 className="text-2xl font-bold mb-4">הישארו מעודכנים</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              הירשמו לניוזלטר שלנו וקבלו עדכונים על אירועים, שיעורים וחדשות הישיבה ישירות למייל
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="כתובת אימייל"
                className="flex-1 px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                dir="ltr"
              />
              <Button type="submit" variant="gradient">
                הירשמו
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
