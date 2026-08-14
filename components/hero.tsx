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
          <div className="animate-luxury-reveal">
            <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-[#c9a24b] md:mb-6 md:text-xs md:tracking-[0.5em]">MOBENIA FURNITURE</p>
            <h1 className="mb-3 max-w-4xl text-balance leading-none md:mb-5">
              <span className="block font-serif text-[clamp(2.2rem,5vw,3.125rem)] font-normal text-[#f5f2ea]">Meubles uniques pour</span>
              <span className="relative mt-1 inline-block font-[family-name:var(--font-great-vibes)] text-[clamp(4.5rem,9vw,5.5rem)] font-normal leading-[0.9] text-[#c9a24b] md:mt-2">
                espaces modernes
                <svg aria-hidden="true" viewBox="0 0 360 34" className="absolute -bottom-5 left-1/2 h-7 w-[115%] -translate-x-1/2 overflow-visible md:-bottom-7 md:h-8">
                  <path d="M7 18 C55 5, 83 28, 128 17 S205 6, 246 18 S306 27, 353 10" fill="none" stroke="#c9a24b" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mb-6 max-w-2xl text-[10px] uppercase leading-5 tracking-[0.18em] text-white/70 md:mb-9 md:text-sm md:tracking-[0.28em]">
              Découvrez des meubles magnifiquement conçus qui transforment votre espace
            </p>
            <Link href="/contact" className="inline-block animate-luxury-button">
              <Button className="rounded-full border border-[#c9a24b] bg-transparent px-5 py-2.5 text-xs font-medium text-[#c9a24b] shadow-none hover:bg-[#c9a24b]/10 hover:text-[#f5f2ea] md:px-8 md:py-5 md:text-sm">
                Nous Contacter
              </Button>
            </Link>
          </div>
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
      <div className="relative overflow-hidden bg-gradient-to-r from-[#06112A] via-[#132848] to-[#8b7344] text-white py-4 md:py-6 px-4 md:px-6 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:opacity-70">
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
