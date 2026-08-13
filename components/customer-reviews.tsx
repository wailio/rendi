'use client'

import { useState, useRef } from 'react'
import { Star } from 'lucide-react'

const reviews = [
  {
    text: "Excellente qualité de meubles ! J'ai acheté un canapé et une table basse chez Rais Meuble. Les produits sont vraiment magnifiques et bien finis. L'équipe a été très attentive et m'a conseillée sur les meilleures options. Je recommande vivement !",
    author: "Amira Kebab",
    role: "Client Vérifiée",
    rating: 5,
    years: "il y a 2 mois"
  },
  {
    text: "Transformé mon salon complètement ! Les meubles de Rais Meuble ont une qualité exceptionnelle. Le design est moderne et élégant, exactement ce que je cherchais. Livraison rapide et service client très professionnel.",
    author: "Karim Bouhadj",
    role: "Client Vérifiée",
    rating: 5,
    years: "il y a 1 mois"
  },
  {
    text: "Très satisfaite de mes achats. Les meubles sont confortables et de bonne qualité. Les prix sont raisonnables comparé à la qualité offerte. Je reviendrai certainement pour d'autres achats.",
    author: "Fatima Meziane",
    role: "Client Vérifiée",
    rating: 4,
    years: "il y a 3 semaines"
  },
  {
    text: "Réception à la hauteur ! L'équipe de Rais Meuble a été très accueillante et professionnelle. Ils m'ont aidé à choisir les meilleurs meubles pour mon espace. Je suis très heureux du résultat final.",
    author: "Hassan Medjahed",
    role: "Client Vérifiée",
    rating: 5,
    years: "il y a 1 mois"
  },
  {
    text: "Produit de haute qualité ! J'ai commandé plusieurs pièces et elles sont toutes impeccables. Les finitions sont soignées et les matériaux utilisés sont de premier ordre. Rais Meuble, c'est mon choix désormais !",
    author: "Yasmine Lahlou",
    role: "Client Vérifiée",
    rating: 5,
    years: "il y a 2 semaines"
  },
  {
    text: "Excellent choix pour les meubles. Prix raisonnable et qualité au rendez-vous. Le mobilier que j'ai choisi a transformé mon intérieur. Je conseille Rais Meuble à tous mes amis.",
    author: "Omar Belhadj",
    role: "Client Vérifiée",
    rating: 5,
    years: "il y a 3 jours"
  },
]

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
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
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-center text-gray-900 mb-12 md:mb-20">
          AVIS CLIENTS
        </h2>

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
      </div>
    </section>
  )
}
