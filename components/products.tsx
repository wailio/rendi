"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { allProducts as catalogProducts, type Product } from "@/lib/products"
import { Reveal } from "@/components/Reveal"

interface LegacyProduct {
  id: number
  name: string
  price: string
  originalPrice?: string
  image: string
  description: string
  discount?: number
  category?: "sofas" | "chambres" | "accessories" | "salle-a-manger" | "armoire"
}

const legacyProducts: LegacyProduct[] = [
  // Canapés (Sofas) - ID 1
  {
    id: 1,
    name: "Canapés Sectionnels Beige",
    price: "32,990 DZD",
    originalPrice: "42,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1--lzF5JpbtxjzuoLqkBOnun0vROEqEUM.png",
    description: "Ensemble canapé modulable avec sièges confortables et design contemporain",
    discount: 23,
    category: "sofas"
  },

  // Chambres (Bedrooms) - IDs 2, 3, 4
  {
    id: 2,
    name: "Chambre Bois Massif Complète",
    price: "42,990 DZD",
    originalPrice: "54,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2--LT69Fp8yDeqVesEMnPbV1Vp6dT6vcn.png",
    description: "Ensemble chambre en bois noble avec lit double et armoire",
    discount: 22,
    category: "chambres"
  },
  {
    id: 3,
    name: "Lit Plateforme Beige Premium",
    price: "24,990 DZD",
    originalPrice: "31,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3--xibVNqUSqy8rcbXS9vCakiFKMfHEgW.png",
    description: "Lit design avec tête de lit capitonnée et rangements intégrés",
    discount: 22,
    category: "chambres"
  },
  {
    id: 4,
    name: "Chambre Grise Moderne",
    price: "38,990 DZD",
    originalPrice: "49,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4--PzHUzJJQwqMSmBkQHqnWEAXPuqiGne.png",
    description: "Suite chambre avec miroir et rangements modernes",
    discount: 22,
    category: "chambres"
  },

  // Salle à Manger (Dining) - IDs 5, 6, 7, 8
  {
    id: 5,
    name: "Table Salle à Manger Bois Moderne",
    price: "28,990 DZD",
    originalPrice: "37,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5--fGdAtjdw4UyqcC2kgXsSw95lpD0gH6.png",
    description: "Table de salle à manger avec chaises design et miroir mural",
    discount: 24,
    category: "salle-a-manger"
  },
  {
    id: 6,
    name: "Ensemble Table Bois Sculptée",
    price: "34,990 DZD",
    originalPrice: "44,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6--Lg9J9UmCoaicHqq56OizLZ04FhkrAL.png",
    description: "Table de salle à manger en bois massif avec 6 chaises",
    discount: 22,
    category: "salle-a-manger"
  },
  {
    id: 7,
    name: "Table Marbre Blanc Élégante",
    price: "26,990 DZD",
    originalPrice: "34,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7--HQSBCXxTMXqvTdhwvEh6vE0HRM0ALZ.png",
    description: "Table de salle à manger en marbre blanc avec chaises grises",
    discount: 23,
    category: "salle-a-manger"
  },
  {
    id: 8,
    name: "Table Classique Bois Foncé",
    price: "31,990 DZD",
    originalPrice: "41,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8--vaObrjsnbwwjtgFBSXm7LbD1bzyyzG.png",
    description: "Table de salle à manger élégante avec chaises et miroir",
    discount: 24,
    category: "salle-a-manger"
  },

  // Armoire (Wardrobes) - IDs 9, 10, 11
  {
    id: 9,
    name: "Armoire Coulissante Blanche",
    price: "19,990 DZD",
    originalPrice: "25,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9--WtuPBrTSG9iosuccrJ4MdQerxt5HAb.png",
    description: "Armoire avec portes coulissantes et miroir intégré",
    discount: 23,
    category: "armoire"
  },
  {
    id: 10,
    name: "Armoire Bois Noir Moderne",
    price: "22,990 DZD",
    originalPrice: "29,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10--Oiu63bo4oiKdeIAiICTn24XMtap3xX.png",
    description: "Armoire design avec miroirs coulissants et rangements",
    discount: 23,
    category: "armoire"
  },
  {
    id: 11,
    name: "Armoire Miroir 3 Portes",
    price: "18,990 DZD",
    originalPrice: "24,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11--Eyp1DAPC0P6vfP6JEPlLyb8YsbFQPh.png",
    description: "Armoire à portes coulissantes avec miroir de haute qualité",
    discount: 24,
    category: "armoire"
  },

  // Accessoires (Accessories) - IDs 12, 13, 14, 15, 16
  {
    id: 12,
    name: "Tables Gigognes Blanches",
    price: "8,990 DZD",
    originalPrice: "11,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12--d5ZGimmzW9zP8HXujiuu6ZsDlBQqdb.png",
    description: "Ensemble de 3 tables gigognes en blanc avec pieds naturels",
    discount: 25,
    category: "accessories"
  },
  {
    id: 13,
    name: "Fauteuil Moderne et Table Verre",
    price: "12,990 DZD",
    originalPrice: "16,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13--fq6tyoBjOezfgFP4FmXJuA0Jpkqpnh.png",
    description: "Fauteuil design avec table basse en verre moderne",
    discount: 24,
    category: "accessories"
  },
  {
    id: 14,
    name: "Commode Bois avec Miroir",
    price: "14,990 DZD",
    originalPrice: "19,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14--cgs8MbgIEJUQ7NuZmWwcCgdy9y0YCY.png",
    description: "Commode en bois avec miroir supérieur et rangements",
    discount: 25,
    category: "accessories"
  },
  {
    id: 15,
    name: "Meuble TV Mur Design",
    price: "16,990 DZD",
    originalPrice: "22,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15--B1F5UcTa70JPPUz5bwMumloDnXG7D2.png",
    description: "Unité murale avec vitrine et rangements pour téléviseur",
    discount: 26,
    category: "accessories"
  },
  {
    id: 16,
    name: "Vitrine Bois Massif",
    price: "15,990 DZD",
    originalPrice: "21,990 DZD",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16--8nb2yKJZqTrKXn37TbchgRPgAIZfCJ.png",
    description: "Vitrine élégante avec portes vitrées et rangements intérieurs",
    discount: 27,
    category: "accessories"
  }
]

function ProductCard({ product, favorites, toggleFavorite, luxury = false }: { product: Product; favorites: number[]; toggleFavorite: (id: number) => void; luxury?: boolean }) {
  return (
    <div className="group flex-shrink-0">
      <Link href={`/product/${product.id}`}>
        <div className={`overflow-hidden transition-all duration-300 h-full flex flex-col relative cursor-pointer w-40 md:w-72 lg:w-80 ${luxury ? "border border-[#c9b088]/30 bg-[#fffdf8] shadow-[0_2px_12px_rgba(0,0,0,0.06)] [clip-path:polygon(10%_0,100%_0,100%_90%,90%_100%,0_100%,0_10%)]" : "bg-white hover:shadow-lg"}`}>
          {product.discount && (
            <div className={`absolute left-0 top-0 z-20 h-[22%] w-[22%] [clip-path:polygon(0_0,100%_0,0_100%)] ${luxury ? "bg-[#d4af5f]" : "bg-red-600"}`} aria-label={`Réduction de ${product.discount}%`}>
              {luxury && <span className="absolute left-1 top-1 font-sans text-[8px] font-bold text-[#1E1912] md:left-2 md:top-2 md:text-[10px]">-{product.discount}%</span>}
            </div>
          )}

          {/* Heart Icon - Top Right */}
          <button
            onClick={(e) => {
              e.preventDefault()
              toggleFavorite(product.id)
            }}
            className="absolute top-3 right-3 z-20 p-2 rounded-full hover:opacity-80 transition-opacity"
          >
            <Heart
              className={`w-5 h-5 md:w-6 md:h-6 transition-all ${
                favorites.includes(product.id)
                  ? "fill-red-500 text-red-500"
                  : "text-gray-400 hover:text-red-500"
              }`}
            />
          </button>

          {/* Image and Content in unified container */}
          <div className="h-full flex flex-col">
            {/* Image Container */}
            <div className="relative overflow-hidden bg-gray-100 h-32 md:h-56 flex items-center justify-center group-hover:opacity-95 transition-opacity duration-300 w-full">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-[400ms] ease-out ${luxury ? "group-hover:scale-[1.04]" : ""}`}
              />
            </div>

            {/* Product Info */}
            <div className={`flex-1 flex flex-col justify-between ${luxury ? "p-4 md:p-5" : "p-3 md:p-4"}`}>
              <p className={`uppercase tracking-[1.5px] ${luxury ? "mb-2 text-[9px] text-[#9b8355] md:text-[10px]" : "mb-1 text-xs font-medium text-gray-600 md:text-sm"}`}>{product.name.split(' ')[0]}</p>
              <h3 className={`line-clamp-2 flex-1 font-serif font-bold ${luxury ? "mb-2 text-xs leading-5 text-[#2C2416] md:text-base" : "mb-1 text-[11px] text-gray-900 md:mb-2 md:text-base"}`}>
                {product.name}
              </h3>
              <p className={`line-clamp-1 ${luxury ? "mb-3 text-[10px] leading-4 text-[#776f62] md:text-sm" : "mb-1 text-[10px] text-gray-500 md:mb-2 md:text-sm"}`}>{product.description}</p>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className={`font-semibold ${luxury ? "text-base text-[#2C2416] md:text-xl" : "text-xs text-[#8b7344] md:text-lg"}`}>{product.price}</span>
                {product.originalPrice && (
                  <span className={`line-through ${luxury ? "text-[10px] text-gray-400 md:text-xs" : "text-xs text-gray-400 md:text-sm"}`}>{product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default function Products() {
  const [favorites, setFavorites] = useState<number[]>([])
  const nosProduitRef = useRef<HTMLDivElement>(null)
  const modelesPretsRef = useRef<HTMLDivElement>(null)
  const hasAutoScrolled = useRef(false)

  useEffect(() => {
    const element = nosProduitRef.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAutoScrolled.current || prefersReducedMotion) return
      hasAutoScrolled.current = true
      window.setTimeout(() => element.scrollBy({ left: 420, behavior: "smooth" }), 250)
      observer.disconnect()
    }, { threshold: 0.35 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    )
  }

  const scrollNosProduits = (direction: "left" | "right") => {
    nosProduitRef.current?.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    })
  }

  const nosProduits = catalogProducts.filter(p => p.category === "sofas" || p.category === "salle-a-manger")
  const modelesPrets = catalogProducts.filter(p => p.category === "chambres")

  return (
    <section className="bg-[#F5F1E8] py-8 md:py-16 lg:py-24" id="products">
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        {/* NOS PRODUITS Section */}
        <div className="mb-8 md:mb-12">
          <Reveal>
            <h2 className="mb-6 text-left font-[family-name:var(--font-cormorant)] text-[32px] font-light italic tracking-[2px] text-[#4A3826] md:text-[42px]">NOS PRODUITS</h2>
          </Reveal>

          {/* Horizontal Scroll Container */}
          <div className="relative group">
            <button
              type="button"
              aria-label="Produits précédents"
              onClick={() => scrollNosProduits("left")}
              className="hidden md:flex absolute left-2 top-1/2 z-10 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-[#d4af5f] bg-[#1E1912]/70 text-[#d4af5f] shadow-sm backdrop-blur-sm transition hover:bg-[#d4af5f]/20 hover:text-[#f5f2ea]"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Produits suivants"
              onClick={() => scrollNosProduits("right")}
              className="hidden md:flex absolute right-2 top-1/2 z-10 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-[#d4af5f] bg-[#1E1912]/70 text-[#d4af5f] shadow-sm backdrop-blur-sm transition hover:bg-[#d4af5f]/20 hover:text-[#f5f2ea]"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <div
              ref={nosProduitRef}
              className="pc-scroll-lane flex gap-5 md:gap-6 overflow-x-auto pb-3 scrollbar-hide touch-pan-x"
              style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
            >
            {nosProduits.map((product, i) => (
              <Reveal key={product.id} variant="pop" delay={Math.min(i * 60, 300)}>
                <ProductCard
                  product={product}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                  luxury
                />
              </Reveal>
            ))}
            </div>
          </div>
        </div>

        {/* Modèles Prêts Section */}
        <div className="mb-8 md:mb-12">
          <Reveal>
            <h2 className="text-xl md:text-4xl font-serif font-bold text-gray-900 mb-6 md:mb-6 text-left">Modèles prêts</h2>
          </Reveal>

          {/* Horizontal Scroll Container */}
          <div
            ref={modelesPretsRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-2 scrollbar-hide touch-pan-x"
            style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
          >
            {modelesPrets.map((product, i) => (
              <Reveal key={product.id} variant="pop" delay={i * 80}>
                <ProductCard
                  product={product}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Show All Button */}
        <Reveal delay={200}>
          <div className="mt-8 md:mt-12 flex justify-center">
            <Link href="/all-products">
              <button className="border-2 border-gray-900 text-gray-900 px-8 md:px-12 py-2 md:py-3 font-serif uppercase text-xs md:text-sm tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300">
              SHOW ALL PRODUCTS
              </button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
