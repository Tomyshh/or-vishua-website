"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer/footer"
import { 
  Target, 
  Eye, 
  Heart,
  Users,
  GraduationCap,
  Building,
  Award,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Target,
    title: "מצוינות אקדמית",
    description: "שאיפה למצוינות בלימוד התורה תוך שמירה על רמה אקדמית גבוהה",
  },
  {
    icon: Heart,
    title: "אהבת התורה",
    description: "טיפוח אהבת התורה והלימוד מתוך שמחה והתלהבות",
  },
  {
    icon: Users,
    title: "קהילתיות",
    description: "בניית קהילה חמה ותומכת של לומדים וחברים",
  },
  {
    icon: Eye,
    title: "ראייה רחבה",
    description: "פתיחות לעולם המודרני תוך שמירה על ערכי היהדות",
  },
]

const milestones = [
  { year: "1973", event: "הקמת הישיבה על ידי הרב יוסף כהן זצ״ל" },
  { year: "1985", event: "פתיחת הכולל לאברכים" },
  { year: "1995", event: "הרחבת המבנה והוספת בית המדרש החדש" },
  { year: "2005", event: "פתיחת תכנית הערב לאקדמאים" },
  { year: "2015", event: "שיפוץ כולל של מתחם הישיבה" },
  { year: "2023", event: "חגיגות 50 שנה להיווסד הישיבה" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20" />
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6"
          >
            <Building className="w-4 h-4" />
            <span>אודות הישיבה</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="block">מסורת של</span>
            <span className="block gradient-text">למידה ומצוינות</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            ישיבת אור וישועה נוסדה בשנת 1973 והפכה לאחד ממרכזי התורה המובילים בצפון הארץ,
            תוך שילוב ייחודי של לימוד תורני עמוק עם פתיחות לעולם המודרני
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">החזון שלנו</h2>
              <p className="text-muted-foreground mb-6">
                להיות מרכז תורני מוביל המכשיר תלמידי חכמים בעלי ידע רחב ועומק בתורה,
                המסוגלים להתמודד עם אתגרי הדור ולהנהיג את הקהילה היהודית בדרך של תורה ודרך ארץ.
              </p>
              <p className="text-muted-foreground mb-6">
                אנו שואפים ליצור סביבת לימוד המעודדת חשיבה ביקורתית, יצירתיות ומצוינות אקדמית,
                תוך שמירה על ערכי היהדות המסורתיים והתאמתם לחיים בעידן המודרני.
              </p>
              <Button variant="gradient" asChild>
                <Link href="/contact">
                  <span>בואו להכיר אותנו</span>
                  <ArrowLeft className="w-4 h-4 mr-2 rtl:rotate-180" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop"
                  alt="בית המדרש"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">הערכים המנחים אותנו</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              הערכים שלנו מעצבים את דרך הלימוד והחיים בישיבה
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ציוני דרך בהיסטוריה שלנו</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              מסע של יותר מ-50 שנה של הוראה, חינוך והנחלת ערכי התורה
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex gap-4 mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </Card>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "תלמידים" },
              { number: "50+", label: "שנות פעילות" },
              { number: "1000+", label: "בוגרים" },
              { number: "30+", label: "רבנים ומרצים" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
