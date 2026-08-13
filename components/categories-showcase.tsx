'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
  { name: 'SOFAS', icon: '🛋️' },
  { name: 'WARDROBES', icon: '🚪' },
  { name: 'CHAIRS', icon: '🪑' },
  { name: 'DESKS', icon: '📝' },
  { name: 'TABLES', icon: '🛏️' },
  { name: 'LIGHTING', icon: '💡' },
  { name: 'CABINETS', icon: '🗄️' },
]

export default function CategoriesShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 7
  const totalSlides = Math.ceil(categories.length / itemsPerView)

  const goToSlide = (index) => {
    setCurrentIndex(index % totalSlides)
  }

  return (
    <section className="py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-gray-900 mb-12 md:mb-20">
          DISCOVER OUR BEST!
        </h2>

        {/* Desktop - All 7 categories visible */}
        <div className="hidden md:grid grid-cols-7 gap-6 mb-12">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/all-products?category=${cat.name.toLowerCase()}`}
              className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 stroke-gray-900 stroke-2 fill-none group-hover:stroke-[#1E90FF] transition-colors" viewBox="0 0 24 24">
                  {cat.name === 'SOFAS' && <path d="M2 8h20v8H2z M2 8v-2h20v2" />}
                  {cat.name === 'WARDROBES' && <path d="M4 2h16v20H4z M12 2v20 M4 6h16 M4 12h16" />}
                  {cat.name === 'CHAIRS' && <path d="M6 4h12l-1 4v8l-1 2H8l-1-2v-8l-1-4z M5 16h14v2H5z" />}
                  {cat.name === 'DESKS' && <path d="M3 8h18v10H3z M6 8V5h2v3 M16 8V5h2v3" />}
                  {cat.name === 'TABLES' && <path d="M4 6h16v10H4z M2 16h20" />}
                  {cat.name === 'LIGHTING' && <path d="M12 2v8 M8 10h8 M9 12h6v6H9z" />}
                  {cat.name === 'CABINETS' && <path d="M3 2h18v20H3z M12 2v20 M3 8h18 M3 14h18" />}
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 text-center">{cat.name}</h3>
            </Link>
          ))}
        </div>

        {/* Mobile - Carousel */}
        <div className="md:hidden mb-8">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/all-products?category=${cat.name.toLowerCase()}`}
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-all flex-shrink-0 w-24"
              >
                <div className="w-12 h-12 flex items-center justify-center text-2xl">
                  <svg className="w-10 h-10 stroke-gray-900 stroke-2 fill-none" viewBox="0 0 24 24">
                    {cat.name === 'SOFAS' && <path d="M2 8h20v8H2z M2 8v-2h20v2" />}
                    {cat.name === 'WARDROBES' && <path d="M4 2h16v20H4z M12 2v20 M4 6h16 M4 12h16" />}
                    {cat.name === 'CHAIRS' && <path d="M6 4h12l-1 4v8l-1 2H8l-1-2v-8l-1-4z M5 16h14v2H5z" />}
                    {cat.name === 'DESKS' && <path d="M3 8h18v10H3z M6 8V5h2v3 M16 8V5h2v3" />}
                    {cat.name === 'TABLES' && <path d="M4 6h16v10H4z M2 16h20" />}
                    {cat.name === 'LIGHTING' && <path d="M12 2v8 M8 10h8 M9 12h6v6H9z" />}
                    {cat.name === 'CABINETS' && <path d="M3 2h18v20H3z M12 2v20 M3 8h18 M3 14h18" />}
                  </svg>
                </div>
                <h3 className="text-xs font-semibold text-gray-900 text-center">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Avis Google Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://maps.app.goo.gl/cjjvrBX2X2M2UMbv5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#1E90FF] hover:bg-[#0B5DA0] text-white rounded-lg py-3 px-6 text-sm md:text-base font-semibold transition-colors"
          >
            <MapPin size={18} />
            Avis Google
          </a>
        </div>
      </div>
    </section>
  )
}
