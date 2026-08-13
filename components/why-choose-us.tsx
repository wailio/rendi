"use client"

import { useEffect, useRef, useState } from "react"

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      
      setMousePos({ x, y })

      const icons = containerRef.current.querySelectorAll('.icon-3d')
      icons.forEach((icon) => {
        const el = icon as HTMLElement
        const rotateX = y * 15
        const rotateY = x * 15
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`
      })
    }

    const handleMouseLeave = () => {
      const icons = containerRef.current?.querySelectorAll('.icon-3d')
      icons?.forEach((icon) => {
        const el = icon as HTMLElement
        el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`
      })
    }

    const container = containerRef.current
    container?.addEventListener('mousemove', handleMouseMove)
    container?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container?.removeEventListener('mousemove', handleMouseMove)
      container?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section 
      ref={containerRef}
      className="py-8 md:py-24 px-4 md:px-8 lg:px-16" 
      style={{ backgroundColor: "#111827" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 md:mb-16 text-center">
          <h2 className="text-xl md:text-5xl font-bold text-white">
            Nous <span className="text-[#7E8EA6] md:hidden">sommes là</span><span className="hidden md:inline text-[#7E8EA6]">sommes là pour vous aider</span>
          </h2>
        </div>

        {/* Mobile Layout - Simple List */}
        <div className="md:hidden space-y-0">
          <div className="bg-[#1B2433] p-3 border-b border-gray-600 flex items-start gap-3">
            <div className="flex-shrink-0 pt-1">
              <div className="text-xl text-[#7E8EA6] icon-3d transition-transform duration-200">✦</div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white mb-0.5">Solutions Complètes</h3>
              <p className="text-[11px] text-gray-300">Gestion complète de votre projet</p>
            </div>
          </div>
          <div className="bg-[#1B2433] p-3 border-b border-gray-600 flex items-start gap-3">
            <div className="flex-shrink-0 pt-1">
              <div className="text-xl text-[#7E8EA6] icon-3d transition-transform duration-200">◆</div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white mb-0.5">Support 24/7</h3>
              <p className="text-[11px] text-gray-300">Assistance continue et fiable</p>
            </div>
          </div>
          <div className="bg-[#1B2433] p-3 flex items-start gap-3">
            <div className="flex-shrink-0 pt-1">
              <div className="text-xl text-[#00BFFF] icon-3d transition-transform duration-200">★</div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white mb-0.5">Qualité Supérieure</h3>
              <p className="text-[11px] text-gray-300">Meilleurs matériaux garantis</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Bento Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {/* Card 1: Solutions Complètes */}
          <div className="bg-[#1B2433] rounded-3xl p-8 flex flex-col justify-between h-64 animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#444444] border border-gray-600">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Solutions Complètes</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nous gérons chaque aspect de votre projet d'ameublement, vous faisant gagner du temps et des ressources.
              </p>
            </div>
            <div className="text-5xl text-[#7E8EA6] icon-3d transition-transform duration-200">✦</div>
          </div>

          {/* Card 2: Support Après-Vente */}
          <div
            className="bg-[#1B2433] rounded-3xl p-8 flex flex-col justify-between h-64 animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#444444] border border-gray-600"
            style={{ animationDelay: "0.1s" }}
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Support Après-Vente</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nous nous engageons à fournir un support continu et un service après-vente pour répondre à vos besoins.
              </p>
            </div>
            <div className="text-5xl text-[#7E8EA6] icon-3d transition-transform duration-200">◆</div>
          </div>

          {/* Card 3: Absence de Restrictions */}
          <div
            className="bg-[#25344B] rounded-3xl p-8 flex flex-col justify-between h-64 text-[#1a1a1a] animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#7E8EA6]"
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#7E8EA6]">Absence de Restrictions</h3>
              <p className="text-[#111827] text-sm leading-relaxed">
                Nous nous associons à tous les fournisseurs pour offrir la plus large sélection de solutions
                d'ameublement.
              </p>
            </div>
            <div className="text-5xl icon-3d transition-transform duration-200 text-[#7E8EA6]">★</div>
          </div>

          {/* Card 4: Qualité Supérieure */}
          <div
            className="md:col-span-2 rounded-3xl overflow-hidden h-80 flex items-end bg-cover bg-center relative animate-fade-in-up hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 border border-gray-600"
            style={{
              backgroundImage:
                "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modern-bedroom-furniture-set-pxXjpIrGkZQnmSu1E5wJP39OghOmj9.jpg)",
              animationDelay: "0.3s",
            }}
          >
            <div className="absolute inset-0 bg-black/50 hover:bg-black/60 transition-all duration-300"></div>
            <div className="relative z-10 p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">Qualité Supérieure</h3>
              <p className="text-gray-200 text-sm">
                Nos partenariats avec les meilleurs fournisseurs nous donnent accès aux meilleurs matériaux et processus
                de contrôle qualité.
              </p>
            </div>
          </div>

          {/* Card 5: Mobilier Personnalisé */}
          <div
            className="bg-[#1B2433] rounded-3xl p-8 flex flex-col justify-between h-80 text-white animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#444444] border border-gray-600"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-3">Mobilier Personnalisé</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nous spécialisons dans la création de meubles sur mesure qui correspondent parfaitement à votre vision
                unique et vos besoins.
              </p>
            </div>
            <div className="text-5xl text-[#7E8EA6] icon-3d transition-transform duration-200">◇</div>
          </div>
        </div>
      </div>
    </section>
  )
}
