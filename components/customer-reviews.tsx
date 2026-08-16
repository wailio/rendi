'use client'

import { useEffect, useState, useRef } from 'react'
import { Star } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const reviews = [
  { image: "/review-rahim.png", author: "Rahim Hamdi", role: "1 avis", rating: 5, years: "il y a 3 ans", text: "Soyez les bienvenus" },
  { image: "/review-mehdi.png", author: "Mehdi", role: "", rating: 5, years: "il y a 3 mois", text: "" },
  { image: "/review-zakaria.png", author: "ZAKARIA BENAMARA", role: "1 avis · 1 photo", rating: 2, years: "il y a 8 mois", text: "Bon produit" },
  { image: "/review-illyes.png", author: "Illyes Hamdi", role: "1 avis", rating: 5, years: "il y a 3 ans", text: "" },
]

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const hasAutoScrolled = useRef(false)

  useEffect(() => {
    const element = scrollContainerRef.current
    const isMobile = window.matchMedia("(max-width: 767px)").matches
    if (!element || isMobile) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAutoScrolled.current || prefersReducedMotion) return
      hasAutoScrolled.current = true
      window.setTimeout(() => element.scrollBy({ left: 350, behavior: "smooth" }), 250)
      observer.disconnect()
    }, { threshold: 0.35 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!isMobile || prefersReducedMotion) return

    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % reviews.length)
    }, 1500)

    return () => window.clearInterval(interval)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350
      if (direction === 'left') {
        scrollContainerRef.current.scrollLeft -= scrollAmount
      } else {
        scrollContainerRef.current.scrollLeft += scrollAmount
      }
    }
  }

  return (
    <section id="offres" className="py-12 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-center text-gray-900 mb-12 md:mb-20">
            AVIS CLIENTS
          </h2>
        </Reveal>

        <Reveal delay={100}>
        {/* Desktop - Horizontal Scroll with Mouse Hover Controls */}
        <div className="hidden md:block relative group">
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 flex flex-col items-start text-left p-6 rounded-lg bg-gray-50 border border-gray-200"
              >
                <img src={review.image} alt={`Avis de ${review.author}`} className="mb-4 h-auto w-full rounded-md border border-gray-200 object-contain" />
                <div className="flex gap-1 mb-3 justify-start">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 font-medium text-sm mb-3 leading-relaxed">
                  {review.text}
                </p>
                <p className="text-gray-900 font-semibold text-sm">{review.author}</p>
                <p className="text-gray-500 text-xs">{review.role}</p>
                <p className="text-gray-500 text-xs">{review.years}</p>
              </div>
            ))}
          </div>

          {/* Hover Controls - Left */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 p-3 bg-[#1E90FF] hover:bg-[#0B5DA0] text-white rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Hover Controls - Right */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 p-3 bg-[#1E90FF] hover:bg-[#0B5DA0] text-white rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile - Carousel */}
        <div className="md:hidden">
          <div className="flex flex-col items-start text-left p-4 bg-gray-50 rounded-lg mb-6 border border-gray-200">
            <img src={reviews[currentIndex].image} alt={`Avis de ${reviews[currentIndex].author}`} className="mb-4 h-auto w-full rounded-md border border-gray-200 object-contain" />
            <div className="flex gap-1 mb-3 justify-start">
              {[...Array(reviews[currentIndex].rating)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs font-semibold text-gray-900 text-left">{reviews[currentIndex].author}</p>
            <p className="text-gray-500 text-xs mb-2">{reviews[currentIndex].role}</p>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              {reviews[currentIndex].text}
            </p>
            <p className="text-gray-500 text-xs">{reviews[currentIndex].years}</p>
          </div>

          <div className="flex justify-between items-center gap-3">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
              className="p-2 rounded-lg bg-[#0B5DA0] hover:bg-[#061632] transition-colors flex-shrink-0"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2 flex-1 justify-center">
              {reviews.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === currentIndex ? "bg-[#0B5DA0]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % reviews.length)}
              className="p-2 rounded-lg bg-[#0B5DA0] hover:bg-[#061632] transition-colors flex-shrink-0"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
