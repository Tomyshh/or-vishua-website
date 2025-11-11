"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer/footer"
import { 
  Heart,
  Users,
  Gift,
  Handshake,
  Newspaper,
  Calendar,
  GraduationCap,
  MessageCircle,
  ArrowLeft,
  ExternalLink
} from "lucide-react"
import Link from "next/link"

const communityAreas = [
  {
    icon: Newspaper,
    title: "חדשות ואירועים",
    description: "עדכונים שוטפים על פעילות הישיבה, אירועים מיוחדים וחדשות מהקהילה",
    link: "/community/news",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: GraduationCap,
    title: "איגוד הבוגרים",
    description: "קהילת בוגרי הישיבה, מפגשים, שיעורים והזדמנויות לשמירת הקשר",
    link: "/community/alumni",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Gift,
    title: "תרומות",
    description: "תמכו בפעילות הישיבה ובתלמידיה והיו שותפים למפעל התורה",
    link: "/community/donate",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Handshake,
    title: "התנדבות",
    description: "הצטרפו לפעילות התנדבותית ותרמו מזמנכם ומכישוריכם",
    link: "/community/volunteer",
    color: "from-green-500 to-teal-500"
  }
]

const recentNews = [
  {
    date: "10 נובמבר 2024",
    title: "סיום מסכת גדול בישיבה",
    excerpt: "בשמחה רבה חגגנו סיום מסכת בבא קמא עם מאות תלמידים ואורחים",
    image: "https://images.unsplash.com/photo-1531537571171-a707bf2683da?w=400&h=300&fit=crop",
    category: "אירועים"
  },
  {
    date: "5 נובמבר 2024",
    title: "שיעור מיוחד מהרב הראשי",
    excerpt: "הרב הראשי לישראל ביקר בישיבה ומסר שיעור מרתק בנושא אמונה ומדע",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop",
    category: "שיעורים"
  },
  {
    date: "1 נובמבר 2024",
    title: "מלגות חדשות לתלמידים מצטיינים",
    description: "הושקה תכנית מלגות חדשה לתמיכה בתלמידים מצטיינים",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop",
    category: "חדשות"
  }
]

const stats = [
  { number: "1000+", label: "בוגרים", icon: Users },
  { number: "50+", label: "שנות פעילות", icon: Calendar },
  { number: "500+", label: "תלמידים פעילים", icon: GraduationCap },
  { number: "30+", label: "רבנים ומרצים", icon: MessageCircle }
]

export default function CommunityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-pink-900/20" />
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium mb-6"
          >
            <Heart className="w-4 h-4" />
            <span>הקהילה שלנו</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="block">קהילה חמה</span>
            <span className="block gradient-text">ותומכת</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            הצטרפו לקהילת אור וישועה - משפחה של לומדים, בוגרים ותומכים 
            המחוברים לערכי התורה והלימוד
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Areas */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">תחומי הקהילה</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              דרכים שונות להיות חלק מקהילת אור וישועה
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${area.color} p-4`}>
                      <area.icon className="w-full h-full text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
                    <p className="text-muted-foreground mb-6">{area.description}</p>
                    
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
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

      {/* Recent News */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">חדשות אחרונות</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              מה קורה בקהילת אור וישועה
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentNews.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-xs font-medium">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">
                      {news.date}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {news.excerpt}
                    </p>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      <span>קרא עוד</span>
                      <ArrowLeft className="w-3 h-3 mr-1 rtl:rotate-180" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <span>כל החדשות</span>
              <ExternalLink className="w-4 h-4 mr-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600" />
                <CardContent className="relative z-10 p-8 text-white h-full flex flex-col justify-center">
                  <Gift className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    תמכו בישיבה
                  </h3>
                  <p className="text-lg mb-6 opacity-90">
                    היו שותפים במפעל התורה ותמכו בדור העתיד
                  </p>
                  <Button variant="secondary" size="lg" className="w-fit">
                    <span>לתרומה</span>
                    <ArrowLeft className="w-4 h-4 mr-2 rtl:rotate-180" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-teal-600" />
                <CardContent className="relative z-10 p-8 text-white h-full flex flex-col justify-center">
                  <Handshake className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    הצטרפו כמתנדבים
                  </h3>
                  <p className="text-lg mb-6 opacity-90">
                    תרמו מזמנכם ומכישוריכם לקהילה
                  </p>
                  <Button variant="secondary" size="lg" className="w-fit">
                    <span>הצטרפות</span>
                    <ArrowLeft className="w-4 h-4 mr-2 rtl:rotate-180" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

