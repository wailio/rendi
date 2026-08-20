"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Facebook, Gift, Instagram, Lightbulb, Sofa, Youtube } from "lucide-react"

export default function LuxuryHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerBgClass = isScrolled
    ? "bg-black/90 backdrop-blur-md border-b border-white/10 shadow-md"
    : "bg-black/60 backdrop-blur-md border-b border-white/10"
  const topBarBgClass = "bg-black"
  const headerTextColor = "text-white"
  const topBarTextColor = "text-white"

  return (
    <header className={`hidden md:block fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${isScrolled ? "translate-y-0" : "-translate-y-full"}`}>
      {/* Top Bar - Thinner */}
      <div className={`w-full py-2 px-6 ${topBarBgClass}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 text-xs">
          {/* Left Side - Social Icons */}
          <div className="flex items-center gap-3">
            <Link href="https://facebook.com/profile.php?id=100063996253630" target="_blank" rel="noopener noreferrer" className={`hover:text-[#6f9f87] transition-colors duration-300 ${topBarTextColor}`}>
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="https://instagram.com/rendi_shop_dz" target="_blank" rel="noopener noreferrer" className={`hover:text-[#6f9f87] transition-colors duration-300 ${topBarTextColor}`}>
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="https://youtube.com/channel/UCwzQlW9G9jvJeYrNBjX-rbA" target="_blank" rel="noopener noreferrer" className={`hover:text-[#6f9f87] transition-colors duration-300 ${topBarTextColor}`}>
              <Youtube className="w-4 h-4" />
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <div className="flex items-center gap-6">
            <Link href="/rooms" className={`flex items-center gap-1 hover:text-[#6f9f87] transition-colors duration-300 ${topBarTextColor}`}>
              <Sofa className="h-3.5 w-3.5" aria-hidden="true" /> PIÈCES
            </Link>
            <span className={`${topBarTextColor}`}>•</span>
            <Link href="/inspirations" className={`flex items-center gap-1 hover:text-[#6f9f87] transition-colors duration-300 ${topBarTextColor}`}>
              <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" /> INSPIRATIONS
            </Link>
            <span className={`${topBarTextColor}`}>•</span>
            <Link href="/offers" className={`flex items-center gap-1 hover:text-[#6f9f87] transition-colors duration-300 ${topBarTextColor}`}>
              <Gift className="h-3.5 w-3.5" aria-hidden="true" /> OFFRES
            </Link>
          </div>

          {/* Right Side - Empty for balance */}
          <div className="w-16"></div>
        </div>
      </div>

      {/* Main Navigation Bar - Thinner with big logo */}
      <div className={`w-full py-2.5 px-6 ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo - Simple and clean */}
          <Link href="/" className="site-logo flex items-center flex-shrink-0 hover:opacity-80 transition-opacity">
            <span className="group inline-flex items-center cursor-pointer">
              <Image src="/rendi-logo.png" alt="Rendi Shop" width={240} height={80} className="h-10 w-auto object-contain drop-shadow-[0_3px_8px_rgba(8,34,14,0.8)] transition-transform duration-[450ms] ease-out group-hover:scale-105" />
            </span>
          </Link>

          {/* Center Menu - Compact */}
          <nav className="flex items-center gap-8 flex-1 justify-center px-8 min-w-0">
            <Link href="/all-products" className={`font-semibold hover:text-[#6f9f87] transition-colors duration-300 text-sm whitespace-nowrap ${headerTextColor}`}>
              Produits
            </Link>
            <Link href="/contact" className={`font-semibold hover:text-[#6f9f87] transition-colors duration-300 text-sm whitespace-nowrap ${headerTextColor}`}>
              Contact
            </Link>
            <Link href="/about" className={`font-semibold hover:text-[#6f9f87] transition-colors duration-300 text-sm whitespace-nowrap ${headerTextColor}`}>
              À Propos
            </Link>
          </nav>

          {/* Right Side - Explorer Button */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link href="/all-products">
              <Button className="bg-[#050907] hover:bg-[#123b32] text-white px-6 py-2 font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 text-xs">
                Découvrir
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
