"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer/footer"
import { 
  BookOpen, 
  Clock,
  Users,
  GraduationCap,
  Heart,
  Calendar,
  CheckCircle,
  ArrowLeft,
  Video,
  FileText
} from "lucide-react"
import Link from "next/link"

const programs = [
  {
    icon: GraduationCap,
    title: "ישיבה גבוהה",
    description: "תכנית לימודים מקיפה בגמרא, הלכה ומחשבת ישראל",
    features: [
      "לימוד בחברותות וסדרים קבועים",
      "שיעורי עומק מרבני הישיבה",
      "ליווי אישי של אברך משגיח",
      "אפשרות להכשרה לרבנות"
    ],
    duration: "3-5 שנים",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "כולל אברכים",
    description: "כולל לאברכים נשואים עם מלגה חודשית",
    features: [
      "לימוד עצמאי ובחברותות",
      "שיעורי עיון מתקדמים",
      "תמיכה כלכלית למשפחות",
      "קהילה תומכת ומגובשת"
    ],
    duration: "ללא הגבלה",
    color: "from-teal-500 to-green-500"
  },
  {
    icon: Clock,
    title: "תכנית ערב",
    description: "תכנית לימודים לאקדמאים ועובדים",
    features: [
      "שיעורים בערב 3 פעמים בשבוע",
      "מתאים לבעלי עבודה",
      "רמה גבוהה של לימוד",
      "קהילת לומדים מגוונת"
    ],
    duration: "שנתיים",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Video,
    title: "שיעורים מוקלטים",
    description: "ספריית שיעורים עשירה ונגישה",
    features: [
      "מאות שיעורים מוקלטים",
      "גישה מכל מקום ובכל זמן",
      "נושאים מגוונים",
      "עדכון שבועי"
    ],
    duration: "גישה חופשית",
    color: "from-orange-500 to-red-500"
  }
]

const schedule = [
  { time: "06:30 - 08:00", activity: "שחרית וסדר בוקר" },
  { time: "08:00 - 09:00", activity: "ארוחת בוקר" },
  { time: "09:00 - 13:00", activity: "סדר ראשון - לימוד בחברותות" },
  { time: "13:00 - 14:00", activity: "ארוחת צהריים" },
  { time: "14:00 - 15:30", activity: "שיעור עיון" },
  { time: "15:30 - 18:00", activity: "סדר שני - המשך לימוד" },
  { time: "18:00 - 19:00", activity: "מנחה וערבית" },
  { time: "19:30 - 21:00", activity: "שיעורי מחשבה והלכה" },
]

export default function StudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-cyan-900/20" />
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6"
          >
            <BookOpen className="w-4 h-4" />
            <span>תכניות הלימודים שלנו</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="block">לימוד תורני</span>
            <span className="block gradient-text">מצוינות ומחויבות</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            תכניות לימוד מגוונות המותאמות לכל שלב בחיים - מישיבה גבוהה ועד כולל אברכים,
            עם דגש על עומק, רוחב ואיכות בלימוד התורה
          </motion.p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">תכניות הלימודים שלנו</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              בחר את התכנית המתאימה לך ולשלב בחייך
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br ${program.color} p-4`}>
                      <program.icon className="w-full h-full text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button variant="outline" className="w-full">
                      <span>למידע נוסף</span>
                      <ArrowLeft className="w-4 h-4 mr-2 rtl:rotate-180" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">מערכת השעות היומית</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              יום לימודים מובנה ומאורגן עם שילוב של לימוד עצמאי ושיעורים
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="mb-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="flex-shrink-0 w-32">
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Clock className="w-4 h-4" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.activity}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600" />
              <CardContent className="relative z-10 p-12 text-center text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  מעוניין להצטרף ללימודים?
                </h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  צור איתנו קשר לקבלת מידע נוסף על תהליך ההרשמה והקבלה
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg" asChild>
                    <Link href="/contact">
                      <span>צור קשר</span>
                      <ArrowLeft className="w-4 h-4 mr-2 rtl:rotate-180" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
                    <FileText className="w-4 h-4 ml-2" />
                    <span>הורד חוברת מידע</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

