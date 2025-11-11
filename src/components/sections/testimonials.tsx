"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "יוסף כהן",
    role: "בוגר תשפ״ב",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop",
    content: "הישיבה שינתה את חיי. מצאתי כאן לא רק מקום ללמוד תורה, אלא משפחה אמיתית וחברים לכל החיים. המרצים מדהימים והאווירה מעוררת השראה.",
    rating: 5,
  },
  {
    name: "דוד לוי",
    role: "תלמיד שנה ג׳",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    content: "הגישה הפתוחה והמכבדת של הישיבה מאפשרת לי לשלב בין לימודי התורה לבין הלימודים האקדמיים שלי. זה מקום שמעודד חשיבה ביקורתית.",
    rating: 5,
  },
  {
    name: "משה ישראלי",
    role: "אברך בכולל",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop",
    content: "הכולל מספק סביבה אידיאלית ללימוד מעמיק. התמיכה הכלכלית והרוחנית מאפשרת לי להתמסר ללימוד ולהתפתח כתלמיד חכם.",
    rating: 5,
  },
  {
    name: "אברהם שמעון",
    role: "הורה לתלמיד",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    content: "אני רואה את ההתפתחות המדהימה של הבן שלי מאז שהתחיל ללמוד בישיבה. הוא צמח לא רק בידע התורני אלא גם כאדם וכמנהיג.",
    rating: 5,
  },
  {
    name: "יעקב רוזנברג",
    role: "בוגר תש״ף",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    content: "הישיבה הכינה אותי לחיים. קיבלתי כלים להתמודד עם אתגרים רוחניים ומעשיים, ויצאתי עם תעודת הוראה וידע רחב.",
    rating: 5,
  },
  {
    name: "שמואל גרין",
    role: "תלמיד תכנית ערב",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    content: "תכנית הערב מאפשרת לי לשלב עבודה ולימודי תורה. השיעורים מרתקים והגמישות בזמנים מתאימה בדיוק לצרכים שלי.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-sm font-medium mb-4">
            <Quote className="w-4 h-4" />
            <span>סיפורי הצלחה</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            מה אומרים עלינו
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            שמענו מתלמידים, בוגרים והורים על החוויה שלהם בישיבת אור וישועה
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <Quote className="w-8 h-8 text-primary/20 mb-3" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">98%</div>
              <div className="text-sm text-muted-foreground">שביעות רצון</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">85%</div>
              <div className="text-sm text-muted-foreground">ממשיכים להוראה</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">1000+</div>
              <div className="text-sm text-muted-foreground">בוגרים</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">50+</div>
              <div className="text-sm text-muted-foreground">שנות ניסיון</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
