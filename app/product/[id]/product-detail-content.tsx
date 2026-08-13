'use client'

import { useState, useRef } from "react"
import Link from "next/link"
import { Heart } from "lucide-react"
import { allProducts, getProduct } from "@/lib/products"

/* Legacy inline catalog removed; lib/products.ts is the source of truth. */
/*
  // Canapés (Sofas)
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
  // Chambres (Bedrooms)
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
  // Salle à Manger (Dining)
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
] */

export default function ProductDetailContent({ productId }: { productId: string }) {
  const product = getProduct(productId)
  const [quantity, setQuantity] = useState(1)
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const relatedProductsRef = useRef<HTMLDivElement>(null)

  if (!product) {
    return (
      <div className="pt-8 md:pt-12 pb-12 md:pb-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Produit non trouvé</h1>
        <Link href="/">
          <button className="px-8 py-3 bg-[#0B5DA0] text-white rounded-lg">Retour à l&apos;accueil</button>
        </Link>
      </div>
    )
  }

  const relatedProducts = [
    ...allProducts.filter((p) => p.category === product.category && p.id !== product.id),
    ...allProducts.filter((p) => p.category !== product.category && p.id !== product.id),
  ].slice(0, 4)

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id])
  }

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">Accueil</Link>
            <span>›</span>
            <Link href="/all-products" className="hover:text-gray-900">Produits</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Product Images */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center bg-gray-50 p-3 md:p-6 rounded-lg h-64 md:h-80 cursor-pointer hover:bg-gray-100 transition-colors">
              <img src={product.images[selectedImageIndex] ?? product.images[0]} alt={product.name} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all ${
                    selectedImageIndex === idx 
                      ? 'border-2 border-[#0B5DA0] scale-105' 
                      : 'border-2 border-gray-200 hover:border-[#0B5DA0]'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-start space-y-3 md:space-y-4">
            <div>
              <p className="text-xs md:text-sm text-gray-600 font-medium mb-1">IdealInstitute</p>
              <h1 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-bold text-[#020817]">{product.price}</span>
                {product.originalPrice && <span className="text-base md:text-lg text-gray-400 line-through">{product.originalPrice}</span>}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <span key={i} className="text-gray-300 text-sm">★</span>)}
              </div>
              <span className="text-xs text-gray-600">0 Reviews</span>
            </div>

            <div className="space-y-1.5 text-xs md:text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Premium design and craftsmanship</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>High-quality materials and durability</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Modern aesthetic for contemporary spaces</span>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-1"></div>

            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2 md:px-3 py-1.5 text-gray-600 hover:bg-gray-100 text-sm">−</button>
                <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-10 text-center border-l border-r border-gray-300 py-1.5 text-sm text-black" min="1" />
                <button onClick={() => setQuantity(quantity + 1)} className="px-2 md:px-3 py-1.5 text-gray-600 hover:bg-gray-100 text-sm">+</button>
              </div>
              <Link href={`/contact?subject=Commande&message=${encodeURIComponent(`Je souhaite commander ce produit: ${product.name}`)}#form`}>
                <button className="flex-1 md:flex-auto px-6 md:px-8 py-2 md:py-2.5 bg-[#020817] hover:bg-[#00030A] text-white font-semibold rounded-lg transition-colors text-sm md:text-base">Commandez maintenant</button>
              </Link>
            </div>

            <button onClick={() => toggleFavorite(product.id)} className="flex items-center gap-2 text-xs md:text-sm text-gray-600 hover:text-[#0B5DA0] transition-colors">
              <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? "fill-current text-[#0B5DA0]" : ""}`} />
              <span>Ajouter à la liste de souhaits</span>
            </button>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-12 md:mb-16 bg-gradient-to-b from-gray-50 to-white p-4 md:p-8 rounded-lg">
          <h2 className="text-base md:text-lg font-serif font-bold text-gray-900 mb-3">Luxurious Living Space</h2>
          <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-3">{product.description}</p>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Elevate your interior design with this exquisite piece. Carefully crafted to combine elegance with functionality, this product transforms any space into a sophisticated sanctuary.</p>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mb-12 md:mb-16">
            <h2 className="inline-block border-b border-[#0B2A4A] px-1 pb-2 text-base md:text-xl font-serif font-semibold tracking-wide text-[#0B2A4A] shadow-[0_2px_3px_-2px_rgba(11,42,74,0.45)] mb-4 md:mb-6">RELATED PRODUCTS</h2>
            <div ref={relatedProductsRef} className="flex gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide touch-pan-x" style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}>
              {relatedProducts.map((relProduct) => (
                <Link key={relProduct.id} href={`/product/${relProduct.id}`}>
                  <div className="group flex-shrink-0 w-32 md:w-40 bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col">
                    <div className="relative w-full h-24 md:h-32 bg-gray-100 overflow-hidden rounded-t-lg">
                      {relProduct.discount && <div className="absolute top-1.5 left-1.5 bg-red-600 text-white px-1.5 py-0.5 rounded text-[10px] font-bold z-10">-{relProduct.discount}%</div>}
                      <img src={relProduct.images[0]} alt={relProduct.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <button onClick={(e) => { e.preventDefault(); toggleFavorite(relProduct.id) }} className="absolute top-1.5 right-1.5 bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors">
                        <Heart className={`w-3 h-3 ${favorites.includes(relProduct.id) ? "fill-red-600 text-red-600" : "text-gray-600"}`} />
                      </button>
                    </div>
                    <div className="p-1.5 md:p-2 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-[8px] md:text-[9px] text-gray-600 mb-0.5">IdealInstitute</p>
                        <h3 className="text-[9px] md:text-xs font-bold text-gray-900 line-clamp-2">{relProduct.name}</h3>
                      </div>
                      <div className="pt-1.5 border-t border-gray-200 mt-1.5">
                        <div className="flex justify-between items-center gap-1">
                          <span className="text-[8px] md:text-xs font-bold text-[#020817]">{relProduct.price}</span>
                          {relProduct.originalPrice && <span className="text-[7px] md:text-[8px] text-gray-400 line-through">{relProduct.originalPrice}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Categories Section */}
        <div className="pt-8 md:pt-12 border-t border-gray-200">
          <div className="flex flex-wrap gap-2 md:gap-3 p-4 md:p-6 bg-white rounded-xl border border-gray-200 shadow-sm justify-center">
            {["Tous les Produits", "Chaises", "Canapés", "Chambres", "Éclairage", "Accessoires"].map((category) => (
              <Link key={category} href="/all-products">
                <button className="px-2 md:px-4 py-1.5 md:py-2 rounded-lg font-medium transition-all duration-300 text-xs md:text-sm bg-gray-900 text-white hover:bg-[#0B5DA0] border border-gray-300 whitespace-nowrap">
                  {category}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
