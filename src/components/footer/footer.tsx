import React from "react"
import Link from "next/link"
import Image from "next/image"
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
      <div className="container py-8 md:py-12 lg:py-16 px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 md:gap-4 mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 relative flex-shrink-0">
                <Image
                  src="/logo/or_vishua_logo.png"
                  alt="אור וישועה - ישיבה גבוהה חיפה"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold gradient-text">אור וישועה</h3>
            </Link>
            <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
              ישיבה גבוהה וישיבת הסדר בחיפה, המשלבת לימוד תורני עמוק 
              עם גישה פתוחה ומכבדת לעולם המודרני.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2.5 md:space-y-3">
              <a 
                href="https://maps.google.com/?q=רחוב+חניתה+96+חיפה"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 md:gap-3 text-xs sm:text-sm text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 group"
              >
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span>רחוב חניתה 96, חיפה</span>
              </a>
              <a 
                href="tel:04-8121048"
                className="flex items-center gap-2.5 md:gap-3 text-xs sm:text-sm text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 group"
              >
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span dir="ltr">04-8121048</span>
              </a>
              <a 
                href="mailto:info@orvishua.org.il"
                className="flex items-center gap-2.5 md:gap-3 text-xs sm:text-sm text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 group"
              >
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span dir="ltr" className="break-all">info@orvishua.org.il</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-1.5 md:gap-2 mt-4 md:mt-6">
              <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 hover:scale-110 transition-all duration-300">
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 hover:scale-110 transition-all duration-300">
                <Youtube className="w-4 h-4 md:w-5 md:h-5" />
                <span className="sr-only">YouTube</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950 hover:scale-110 transition-all duration-300">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{section.title}</h4>
              <ul className="space-y-1.5 md:space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 flex items-center gap-1 group hover:translate-x-1"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-2.5 h-2.5 md:w-3 md:h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12 flex-shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
            <div>
              <h4 className="font-semibold mb-1.5 md:mb-2 text-sm md:text-base">הצטרפו לרשימת התפוצה</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                קבלו עדכונים על שיעורים, אירועים וחדשות הישיבה
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="הכניסו כתובת אימייל"
                className="flex-1 px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm"
                dir="ltr"
              />
              <Button type="submit" variant="gradient" className="text-xs sm:text-sm px-4 md:px-6">
                הרשמה
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1 text-center">
            <span>© 2024 ישיבת אור וישועה. כל הזכויות שמורות.</span>
          </div>
          <div className="flex items-center gap-3 md:gap-4 flex-wrap justify-center">
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
            <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  )
}
