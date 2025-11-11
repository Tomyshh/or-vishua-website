"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    title: "תכנית הישיבה הגבוהה",
    duration: "4 שנים",
    schedule: "יום מלא",
    description: "לימוד תורני מעמיק הכולל גמרא, הלכה, תנ״ך ומחשבת ישראל",
    features: [
      "סדרי לימוד בבוקר ובערב",
      "שיעורים בקבוצות קטנות",
      "חברותא אישית",
      "הכנה לבחינות הרבנות",
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "כולל אברכים",
    duration: "גמיש",
    schedule: "בוקר",
    description: "לימוד מתקדם לאברכים המבקשים להעמיק בסוגיות תלמודיות",
    features: [
      "לימוד עצמאי מונחה",
      "סדרת שיעורים מתקדמים",
      "מלגה חודשית",
      "ליווי אישי מראש הכולל",
    ],
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=300&fit=crop",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "תכנית ערב",
    duration: "2 שנים",
    schedule: "ערב",
    description: "תכנית מיוחדת לעובדים ואקדמאים המעוניינים בלימוד תורני",
    features: [
      "שיעורים 3 פעמים בשבוע",
      "גמישות בזמני הלימוד",
      "אפשרות ללימוד מרחוק",
      "תעודת סיום מוכרת",
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    color: "from-green-500 to-green-600",
  },
]

export function Programs() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            <span>תכניות הלימוד שלנו</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            מסלולי למידה מותאמים
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            בחר את המסלול המתאים לך ביותר והצטרף לקהילת הלומדים שלנו
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4">
                      {program.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{program.schedule}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {program.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full group/button">
                    <span>למידע נוסף</span>
                    <ArrowLeft className="w-4 h-4 mr-2 rtl:rotate-180 group-hover/button:translate-x-1 rtl:group-hover/button:-translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Schedule Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">סדר יום טיפוסי בישיבה</h3>
                <p className="text-muted-foreground mb-6">
                  יום לימודים בישיבה משלב סדרי לימוד אינטנסיביים עם זמני תפילה ופעילויות קהילתיות
                </p>
                <Button variant="gradient" asChild>
                  <Link href="/schedule">
                    <span>צפה במערכת המלאה</span>
                    <ArrowLeft className="w-4 h-4 mr-2 rtl:rotate-180" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-3">
                {[
                  { time: "07:00", activity: "תפילת שחרית" },
                  { time: "08:30", activity: "ארוחת בוקר" },
                  { time: "09:00", activity: "סדר א׳ - לימוד גמרא" },
                  { time: "13:00", activity: "ארוחת צהריים" },
                  { time: "15:00", activity: "סדר ב׳ - שיעורי בחירה" },
                  { time: "19:00", activity: "תפילת ערבית וסדר ג׳" },
                ].map((item) => (
                  <div key={item.time} className="flex items-center gap-4 p-3 rounded-lg bg-white dark:bg-gray-900">
                    <div className="text-sm font-medium text-muted-foreground w-16">
                      {item.time}
                    </div>
                    <div className="flex-1 font-medium">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
