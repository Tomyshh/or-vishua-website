import React from "react"
import Link from "next/link"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Youtube, 
  Instagram,
  ExternalLink,
  Heart
} from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  about: {
    title: "אודות הישיבה",
    links: [
      { name: "חזון ומטרה", href: "/about/vision" },
      { name: "צוות הישיבה", href: "/about/team" },
      { name: "היסטוריה", href: "/about/history" },
      { name: "מבנה הישיבה", href: "/about/facilities" },
    ],
  },
  studies: {
    title: "לימודים",
    links: [
      { name: "תכנית הישיבה הגבוהה", href: "/studies/program" },
      { name: "כולל אברכים", href: "/studies/kollel" },
      { name: "תכנית ערב", href: "/studies/evening" },
      { name: "מערכת שעות", href: "/studies/schedule" },
    ],
  },
  resources: {
    title: "משאבים",
    links: [
      { name: "שיעורים מוקלטים", href: "/resources/recordings" },
      { name: "ספריית הישיבה", href: "/resources/library" },
      { name: "פרסומים", href: "/resources/publications" },
      { name: "שאלות ותשובות", href: "/resources/faq" },
    ],
  },
  community: {
    title: "קהילה",
    links: [
      { name: "חדשות ואירועים", href: "/community/news" },
      { name: "איגוד הבוגרים", href: "/community/alumni" },
      { name: "תרומות", href: "/community/donate" },
      { name: "התנדבות", href: "/community/volunteer" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold gradient-text">אור וישועה</h3>
            </Link>
            <p className="text-muted-foreground mb-6">
              ישיבה גבוהה וישיבת הסדר בחיפה, המשלבת לימוד תורני עמוק 
              עם גישה פתוחה ומכבדת לעולם המודרני.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="https://maps.google.com/?q=רחוב+חניתה+96+חיפה"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 group"
              >
                <MapPin className="w-4 h-4 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>רחוב חניתה 96, חיפה</span>
              </a>
              <a 
                href="tel:04-8121048"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span dir="ltr">04-8121048</span>
              </a>
              <a 
                href="mailto:info@orvishua.org.il"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span dir="ltr">info@orvishua.org.il</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 mt-6">
              <Button variant="ghost" size="icon" className="hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 hover:scale-110 transition-all duration-300">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 hover:scale-110 transition-all duration-300">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950 hover:scale-110 transition-all duration-300">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 flex items-center gap-1 group hover:translate-x-1"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="font-semibold mb-2">הצטרפו לרשימת התפוצה</h4>
              <p className="text-sm text-muted-foreground">
                קבלו עדכונים על שיעורים, אירועים וחדשות הישיבה
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="הכניסו כתובת אימייל"
                className="flex-1 px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                dir="ltr"
              />
              <Button type="submit" variant="gradient">
                הרשמה
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span>© 2024 ישיבת אור וישועה. כל הזכויות שמורות.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:underline hover:underline-offset-4">
              מדיניות פרטיות
            </Link>
            <Link href="/terms" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:underline hover:underline-offset-4">
              תנאי שימוש
            </Link>
            <Link href="/accessibility" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:underline hover:underline-offset-4">
              נגישות
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <span>נבנה באהבה</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  )
}
