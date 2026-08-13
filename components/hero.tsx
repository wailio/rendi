"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Truck, Check } from "lucide-react"

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroImages = [
    "/hero-room-1.png",
    "/hero-room-2.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section className="relative">
      {/* Main Hero with Rolling Images */}
      <div className="relative w-full h-[400px] md:h-[700px] lg:h-[850px] overflow-hidden">
        {/* Image Carousel */}
        {heroImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Hero room ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-6 text-center">
          <h1 className="text-xl md:text-4xl lg:text-6xl font-serif font-bold text-white mb-2 md:mb-4 max-w-3xl leading-tight">
            Meubles Uniques pour Espaces Modernes
          </h1>
          <p className="text-xs md:text-lg lg:text-xl text-white/90 mb-3 md:mb-8 max-w-2xl">
            Découvrez des meubles magnifiquement conçus qui transforment votre espace
          </p>
          <Link href="/contact">
            <Button className="bg-[#071225] hover:bg-[#020817] text-white rounded-full px-3 md:px-8 py-1 md:py-6 text-xs md:text-base font-medium">
              Nous Contacter
            </Button>
          </Link>
        </div>

        {/* Image carousel indicators */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "w-8 md:w-10 bg-white"
                  : "w-2 md:w-3 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Delivery Banner */}
      <div className="bg-[#06112A] text-white py-4 md:py-6 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="flex items-center justify-center gap-3">
            <Check className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-[#7E8EA6]" />
            <span className="text-xs md:text-base font-medium text-white">Livraison + montage dans les 58 wilayas</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Truck className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-[#7E8EA6]" />
            <span className="text-xs md:text-base font-medium text-white">Gratuit sur Alger – Blida – Boumerdès – Médéa – Tipaza</span>
          </div>
        </div>
      </div>
    </section>
  )
}
