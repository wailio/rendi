"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Truck, Check } from "lucide-react"
import { Reveal } from "@/components/Reveal"

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
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,10,16,0.45)] via-[rgba(8,10,16,0.6)] to-[rgba(8,10,16,0.82)]"></div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center md:px-6">
          <div className="flex max-w-3xl flex-col items-center">
            <Reveal delay={0}>
              <p className="font-sans text-[11px] font-semibold tracking-[5px] text-[#d4af5f] md:text-[13px]">MOBENIA FURNITURE</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-[22px] text-balance leading-none">
                <span className="block font-[family-name:var(--font-playfair)] text-[30px] font-normal text-[#f5f2ea]">Meubles uniques pour</span>
                <span className="relative mt-2 inline-block px-1 pb-8 font-[family-name:var(--font-great-vibes)] text-[clamp(4.75rem,13vw,6.5rem)] font-normal leading-none text-[#d4af5f]">
                  espaces modernes
                  <svg aria-hidden="true" viewBox="0 0 360 34" className="absolute bottom-0 left-1/2 h-7 w-[115%] -translate-x-1/2 overflow-visible">
                    <path d="M7 18 C55 5, 83 28, 128 17 S205 6, 246 18 S306 27, 353 10" fill="none" stroke="#d4af5f" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-[38px] max-w-[440px] font-sans text-[17px] font-normal leading-[1.5] text-[#efece4]">
                Des meubles conçus pour transformer votre espace
              </p>
            </Reveal>
            <Reveal delay={360}>
              <Link href="/contact" className="mt-7 inline-block">
                <Button className="rounded-[2px] border border-[#d4af5f] bg-[#06112a] px-8 py-[13px] font-serif text-xs font-normal uppercase tracking-[3px] text-[#d4af5f] shadow-none hover:bg-[#d4af5f] hover:text-[#081016] focus-visible:bg-[#d4af5f] focus-visible:text-[#081016]">
                  Nous contacter
                </Button>
              </Link>
            </Reveal>
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
        <Reveal delay={480} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="delivery-benefit flex items-center justify-center gap-3">
            <Check className="delivery-benefit-icon w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-[#7E8EA6]" />
            <span className="text-xs md:text-base font-medium text-white">Livraison + montage dans les 58 wilayas</span>
          </div>
          <div className="delivery-benefit flex items-center justify-center gap-3 [animation-delay:1.1s]">
            <Truck className="delivery-benefit-icon w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-[#7E8EA6]" />
            <span className="text-xs md:text-base font-medium text-white">Gratuit sur Alger – Blida – Boumerdès – Médéa – Tipaza</span>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
