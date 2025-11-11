import type { Metadata } from "next"
import { Heebo, Rubik } from "next/font/google"
import "./globals.css"
import { ModernNavbar } from "@/components/modern/modern-navbar"
import { Footer } from "@/components/footer/footer"

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heebo",
  display: "swap",
})

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
  display: "swap",
})

export const metadata: Metadata = {
  title: "אור וישועה - ישיבה גבוהה חיפה | מרכז תורני לדורות הבאים",
  description: "ישיבת אור וישועה בחיפה - בית מדרש לתורה ולחכמה, המשלב לימוד עיוני עמוק עם רוח של חדשנות ופתיחות לעולם המודרני",
  keywords: "ישיבה, תורה, חיפה, לימודים, יהדות, אור וישועה",
  openGraph: {
    title: "אור וישועה - ישיבה גבוהה חיפה",
    description: "מרכז תורני מוביל בחיפה",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body
        className={`${heebo.variable} ${rubik.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ModernNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}