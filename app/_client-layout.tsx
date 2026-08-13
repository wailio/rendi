"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Analytics } from "@vercel/analytics/next"

function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ScrollToTop />
      {children}
      <Analytics />
    </>
  )
}
