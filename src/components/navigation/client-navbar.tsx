"use client"

import dynamic from "next/dynamic"

export const ClientNavbar = dynamic(
  () => import("./navbar").then((mod) => mod.Navbar),
  {
    ssr: false,
    loading: () => (
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 bg-background/80 backdrop-blur-xl shadow-lg" />
    ),
  }
)

