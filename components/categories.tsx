"use client"

import { Armchair, Sofa, Bed, Warehouse, Layout } from "lucide-react"
import Link from "next/link"

const categories = [
  { icon: Armchair, label: "Salle à manger", href: "/all-products?category=salle-a-manger" },
  { icon: Sofa, label: "Canapés", href: "/all-products?category=sofas" },
  { icon: Bed, label: "Chambres", href: "/all-products?category=chambres" },
  { icon: Layout, label: "Armoire", href: "/all-products?category=armoire" },
  { icon: Warehouse, label: "Accessoires", href: "/all-products?category=accessories" },
]

export default function Categories() {
  return (
    <section className="relative py-4 md:py-8 overflow-hidden">
      {/* Luxury gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B5DA0] via-[#061632] to-[#0A1F47]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-3 md:px-6">
        <div className="mb-4 md:mb-6 relative inline-block w-full">
          <h2 className="text-lg md:text-2xl font-serif font-bold text-white mb-2 md:mb-3 text-center">Catégories</h2>
          <div className="h-0.5 md:h-1 w-12 md:w-20 mx-auto bg-gradient-to-r from-transparent via-[#1E90FF] to-transparent"></div>
        </div>

        <div className="flex justify-start md:justify-center gap-2 md:gap-4 flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible scrollbar-hide touch-pan-x -mx-3 px-3 md:mx-0 md:px-0">
          {categories.map((cat, idx) => {
            const Icon = cat.icon

            return (
              <Link key={idx} href={cat.href} className="flex justify-center shrink-0">
                <div className="flex flex-col items-center gap-1.5 md:gap-2 p-2 md:p-3 rounded-md hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105 w-14 md:w-20 h-20 md:h-20 justify-center border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10">
                  {/* Square icon with white border */}
                  <div className="relative w-8 md:w-12 h-8 md:h-12 rounded-sm border-1.5 border-white flex items-center justify-center group-hover:border-[#1E90FF] group-hover:bg-white/10 transition-all duration-300">
                    <Icon className="w-5 md:w-6 h-5 md:h-6 text-white group-hover:text-[#1E90FF] transition-colors duration-300" />
                  </div>
                  
                  {/* Label - Extra small on mobile */}
                  <p className="text-[9px] md:text-xs font-semibold text-white text-center line-clamp-1 group-hover:text-[#1E90FF] transition-colors duration-300">{cat.label}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
