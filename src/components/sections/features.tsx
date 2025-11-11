"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { 
  BookOpen, 
  Users, 
  Heart, 
  GraduationCap, 
  Globe, 
  Sparkles,
  Mountain,
  Lightbulb
} from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "לימוד תורני עמוק",
    description: "תכנית לימודים מקיפה המשלבת גמרא, הלכה, מחשבת ישראל ופילוסופיה",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "קהילה חמה ותומכת",
    description: "סביבה משפחתית המעודדת צמיחה אישית ורוחנית בתוך קהילה תוססת",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "ליווי אישי",
    description: "כל תלמיד זוכה לליווי אישי ממרצי הישיבה להתפתחות מיטבית",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: GraduationCap,
    title: "הכנה לחיים",
    description: "הכשרה מקצועית לרבנות, חינוך והוראה לצד פיתוח כישורי חיים",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "חיבור לעולם המודרני",
    description: "גישור בין עולם התורה לחיים המודרניים בגישה פתוחה ומכבדת",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Mountain,
    title: "מיקום ייחודי בחיפה",
    description: "נוף הכרמל המרהיב משרה אווירה של שלווה והתעלות רוחנית",
    gradient: "from-teal-500 to-cyan-500",
  },
]

export function Features() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>מה מייחד אותנו</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            הערכים שלנו
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            בישיבת אור וישועה אנו מאמינים בחינוך תורני המשלב מצוינות אקדמית, 
            צמיחה רוחנית ומעורבות חברתית
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-full h-full" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-0">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-2xl font-bold mb-4">מוכנים להצטרף אלינו?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              הצטרף למסורת של למידה, צמיחה והתפתחות אישית בישיבת אור וישועה
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              צור קשר עוד היום
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
