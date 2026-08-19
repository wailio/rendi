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

function ProductCard({ product, favorites, toggleFavorite }: { product: Product; favorites: number[]; toggleFavorite: (id: number) => void }) {
  return (
    <div className="group flex-shrink-0 snap-center transition-[transform,opacity] duration-300 ease-out">
      <Link href={`/product/${product.id}`}>
        <div
          className="group/card relative flex h-full w-48 flex-col overflow-hidden bg-white cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12),0_4px_10px_rgba(0,0,0,0.06)] md:w-80 lg:w-[22rem] md:[clip-path:polygon(0_0,96%_0,100%_4%,100%_100%,4%_100%,0_96%)]"
        >
          {/* Discount Badge - Red rectangle top left */}
          {product.discount && (
            <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-2 font-bold text-xs md:text-sm z-20">
              -{product.discount}%
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
            <div className="relative overflow-hidden bg-gray-100 h-40 md:h-64 flex items-center justify-center group-hover:opacity-95 transition-opacity duration-300 w-full">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-[1.03]"
              />
            </div>

            {/* Product Info */}
            <div className="p-3 md:p-4 flex-1 flex flex-col justify-between">
              {/* Store name */}
              <p className="text-xs md:text-sm text-gray-600 font-medium mb-1">{product.name.split(' ')[0]}</p>
              
              {/* Product Title */}
              <h3 className="text-[11px] md:text-base font-serif font-bold text-gray-900 mb-1 md:mb-2 line-clamp-2 flex-1">
                {product.name}
              </h3>

              {/* Product Description */}
              <p className="text-[10px] md:text-sm text-gray-500 mb-1 md:mb-2 line-clamp-1">{product.description}</p>

              {/* Pricing */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs md:text-lg font-bold text-[#8b7344]">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs md:text-sm text-gray-400 line-through">{product.originalPrice}</span>
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

  if (window.matchMedia("(max-width: 767px)").matches) return
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

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) return

    const element = nosProduitRef.current
    if (!element) return

    let frame = 0
    const updateEdgeCards = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const laneBounds = element.getBoundingClientRect()
        Array.from(element.children).forEach((child) => {
          const bounds = child.getBoundingClientRect()
          const visibleWidth = Math.max(0, Math.min(bounds.right, laneBounds.right) - Math.max(bounds.left, laneBounds.left))
          const ratio = bounds.width ? visibleWidth / bounds.width : 1
          const isEdge = ratio < 0.72
          const card = child as HTMLElement
          card.style.transform = isEdge ? "scale(0.92)" : "scale(1)"
          card.style.opacity = isEdge ? "0.55" : "1"
          card.style.transition = "transform 350ms ease, opacity 350ms ease"
        })
      })
    }

    updateEdgeCards()
    element.addEventListener("scroll", updateEdgeCards, { passive: true })
    window.addEventListener("resize", updateEdgeCards)
    return () => {
      cancelAnimationFrame(frame)
      element.removeEventListener("scroll", updateEdgeCards)
      window.removeEventListener("resize", updateEdgeCards)
    }
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

  const scrollModelesPrets = (direction: "left" | "right") => {
    modelesPretsRef.current?.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    })
  }

  const nosProduits = catalogProducts.filter(p => p.category === "sofas" || p.category === "salle-a-manger")
  const modelesPrets = catalogProducts.filter(p => p.category === "chambres")

  return (
    <section className="relative overflow-hidden py-8 md:py-16 lg:py-24" id="products" style={{ backgroundColor: "#f5f5f5" }}>
      <img
        src="/products-gold-blob.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] top-[-100px] z-0 hidden h-auto w-[500px] max-w-none opacity-70 md:block lg:left-[-120px] lg:top-[-80px] lg:w-[560px]"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-3 md:px-6">
        {/* NOS PRODUITS Section */}
        <div className="relative z-10 mb-8 md:mb-12">
          <Reveal>
            <h2 className="mb-6 text-left font-[family-name:var(--font-cormorant)] text-[32px] font-light italic uppercase tracking-[2px] text-[#4A3826] md:text-[42px]">NOS PRODUITS</h2>
          </Reveal>

          {/* Horizontal Scroll Container */}
          <div className="relative left-0 md:left-1/2 md:w-screen md:-translate-x-1/2 group">
            <button
              type="button"
              aria-label="Produits précédents"
              onClick={() => scrollNosProduits("left")}
              className="hidden md:flex absolute left-2 top-1/2 z-10 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-900 shadow-md transition hover:bg-gray-900 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Produits suivants"
              onClick={() => scrollNosProduits("right")}
              className="hidden md:flex absolute right-2 top-1/2 z-10 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-900 shadow-md transition hover:bg-gray-900 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <div
              ref={nosProduitRef}
              className="flex min-w-0 gap-4 overflow-x-auto overscroll-x-contain pb-3 scrollbar-hide touch-pan-x select-none md:gap-6 md:scroll-smooth md:px-[12%] md:[mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%)]"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
            {nosProduits.map((product, i) => (
              <div key={product.id} className="shrink-0">
                <Reveal variant="pop" delay={i * 80}>
                  <ProductCard
                  product={product}
                  favorites={favorites}
                    toggleFavorite={toggleFavorite}
                  />
                </Reveal>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Modèles Prêts Section */}
        <div className="relative z-10 mb-8 md:mb-12">
          <Reveal>
            <h2 className="mb-6 text-left font-[family-name:var(--font-cormorant)] text-[32px] font-light italic tracking-[2px] text-[#4A3826] md:text-[42px]">Modèles prêts</h2>
          </Reveal>

          {/* Horizontal Scroll Container */}
          <div className="relative left-0 md:left-1/2 md:w-screen md:-translate-x-1/2 group">
            <button
              type="button"
              aria-label="Modèles précédents"
              onClick={() => scrollModelesPrets("left")}
              className="absolute left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-900 shadow-md transition hover:bg-gray-900 hover:text-white md:flex"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Modèles suivants"
              onClick={() => scrollModelesPrets("right")}
              className="absolute right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-900 shadow-md transition hover:bg-gray-900 hover:text-white md:flex"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <div
              ref={modelesPretsRef}
              className="flex min-w-0 gap-4 overflow-x-auto overscroll-x-contain pb-3 scrollbar-hide touch-pan-x select-none md:gap-6 md:scroll-smooth md:px-[12%] md:[mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%)]"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {modelesPrets.map((product, i) => (
                <div key={product.id} className="shrink-0">
                  <Reveal variant="pop" delay={i * 80}>
                    <ProductCard
                    product={product}
                    favorites={favorites}
                      toggleFavorite={toggleFavorite}
                    />
                  </Reveal>
                </div>
              ))}
            </div>
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
