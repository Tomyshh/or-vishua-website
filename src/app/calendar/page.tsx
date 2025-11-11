"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer/footer"
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  Bell,
  Download,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
  {
    date: "15 נובמבר 2024",
    time: "19:00",
    title: "שיעור מיוחד - הרב יוסף כהן",
    description: "שיעור בנושא 'אמונה ובטחון בעידן המודרני'",
    location: "בית המדרש הראשי",
    category: "שיעור",
    color: "blue"
  },
  {
    date: "20 נובמבר 2024",
    time: "17:30",
    title: "מסיבת חנוכה",
    description: "ערב חגיגי לכל תלמידי הישיבה והמשפחות",
    location: "אולם האירועים",
    category: "אירוע",
    color: "purple"
  },
  {
    date: "25 נובמבר 2024",
    time: "20:00",
    title: "כנס בוגרים שנתי",
    description: "מפגש שנתי של בוגרי הישיבה עם דברי תורה וחידושים",
    location: "אולם הכנסים",
    category: "כנס",
    color: "green"
  },
  {
    date: "1 דצמבר 2024",
    time: "18:00",
    title: "ערב עיון בהלכה",
    description: "סדרת שיעורים בהלכות חנוכה",
    location: "חדר השיעורים",
    category: "לימוד",
    color: "orange"
  },
  {
    date: "10 דצמבר 2024",
    time: "19:30",
    title: "הדלקת נרות חנוכה",
    description: "הדלקה מרכזית עם שירה וזמרה",
    location: "חצר הישיבה",
    category: "אירוע",
    color: "cyan"
  },
  {
    date: "15 דצמבר 2024",
    time: "16:00",
    title: "יום עיון במחשבת ישראל",
    description: "שיעורים והרצאות בנושאי אמונה ומחשבה",
    location: "בית המדרש",
    category: "כנס",
    color: "pink"
  }
]

const regularSchedule = [
  {
    day: "ראשון",
    activities: [
      { time: "06:30", activity: "שחרית" },
      { time: "09:00", activity: "סדר ראשון" },
      { time: "14:00", activity: "שיעור עיון" },
      { time: "19:30", activity: "שיעור הלכה" }
    ]
  },
  {
    day: "שני",
    activities: [
      { time: "06:30", activity: "שחרית" },
      { time: "09:00", activity: "סדר ראשון" },
      { time: "14:00", activity: "שיעור עיון" },
      { time: "20:00", activity: "שיעור מחשבה" }
    ]
  },
  {
    day: "שלישי",
    activities: [
      { time: "06:30", activity: "שחרית" },
      { time: "09:00", activity: "סדר ראשון" },
      { time: "14:00", activity: "שיעור עיון" },
      { time: "19:30", activity: "שיעור גמרא" }
    ]
  },
  {
    day: "רביעי",
    activities: [
      { time: "06:30", activity: "שחרית" },
      { time: "09:00", activity: "סדר ראשון" },
      { time: "14:00", activity: "שיעור עיון" },
      { time: "20:00", activity: "חבורת לימוד" }
    ]
  },
  {
    day: "חמישי",
    activities: [
      { time: "06:30", activity: "שחרית" },
      { time: "09:00", activity: "סדר ראשון" },
      { time: "14:00", activity: "שיעור עיון" },
      { time: "19:30", activity: "שיעור משניות" }
    ]
  }
]

const categoryColors = {
  שיעור: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  אירוע: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  כנס: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  לימוד: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
}

export default function CalendarPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20" />
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6"
          >
            <Calendar className="w-4 h-4" />
            <span>לוח הזמנים והאירועים</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="block">לוח זמנים</span>
            <span className="block gradient-text">ואירועים קרובים</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            עקוב אחר כל האירועים, השיעורים והפעילויות המתקיימים בישיבה
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex gap-4 justify-center"
          >
            <Button variant="gradient" size="lg">
              <Download className="w-4 h-4 ml-2" />
              <span>הורד לוח שנה</span>
            </Button>
            <Button variant="outline" size="lg">
              <Bell className="w-4 h-4 ml-2" />
              <span>הירשם לעדכונים</span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">אירועים קרובים</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              שיעורים מיוחדים, כנסים ואירועי קהילה
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[event.category as keyof typeof categoryColors]}`}>
                        {event.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{event.description}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>

                    <Button variant="outline" className="w-full">
                      <span>פרטים נוספים</span>
                      <ArrowLeft className="w-4 h-4 mr-2 rtl:rotate-180" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">מערכת שעות שבועית</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              לוח הזמנים הקבוע לפעילות השוטפת בישיבה
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {regularSchedule.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-4 text-center pb-3 border-b">
                      {day.day}
                    </h3>
                    <div className="space-y-3">
                      {day.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="text-sm">
                          <div className="font-semibold text-primary mb-1">
                            {activity.time}
                          </div>
                          <div className="text-muted-foreground">
                            {activity.activity}
                          </div>
                        </div>
                      ))}
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600" />
              <CardContent className="relative z-10 p-12 text-center text-white">
                <Star className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  רוצה לקבל עדכונים על אירועים?
                </h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  הירשם לרשימת התפוצה שלנו וקבל עדכונים על כל השיעורים והאירועים
                </p>
                <Button variant="secondary" size="lg">
                  <Bell className="w-4 h-4 ml-2" />
                  <span>הרשמה לעדכונים</span>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

