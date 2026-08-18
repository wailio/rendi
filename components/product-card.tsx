"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
  favorites: number[]
  toggleFavorite: (id: number) => void
}

export function ProductCard({ product, favorites, toggleFavorite }: ProductCardProps) {
  return (
    <div className="group flex-shrink-0 snap-center transition-[transform,opacity] duration-300 ease-out">
      <Link href={`/product/${product.id}`}>
        <div
          className="group/card relative flex h-full w-48 cursor-pointer flex-col overflow-hidden bg-white shadow-none transition-[transform,box-shadow,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:w-80 md:shadow-[0_8px_24px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.06)] md:hover:-translate-y-1 md:hover:shadow-[0_12px_28px_rgba(0,0,0,0.12),0_4px_10px_rgba(0,0,0,0.06)] lg:w-[22rem]"
          style={{ clipPath: "polygon(0 0, 96% 0, 100% 4%, 100% 100%, 4% 100%, 0 96%)" }}
        >
          {product.discount && (
            <div className="absolute left-0 top-0 z-20 bg-red-600 px-3 py-2 text-xs font-bold text-white md:text-sm">
              -{product.discount}%
            </div>
          )}
          <button
            onClick={(event) => {
              event.preventDefault()
              toggleFavorite(product.id)
            }}
            aria-label={`Ajouter ${product.name} aux favoris`}
            className="absolute right-3 top-3 z-20 rounded-full p-2 transition-opacity hover:opacity-80"
          >
            <Heart className={`h-5 w-5 transition-all md:h-6 md:w-6 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-500"}`} />
          </button>
          <div className="flex h-full flex-col">
            <div className="group relative flex h-40 w-full items-center justify-center overflow-hidden bg-gray-100 transition-opacity duration-300 group-hover:opacity-95 md:h-64">
              <img src={product.images[0] || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover/card:scale-[1.03]" />
            </div>
            <div className="flex flex-1 flex-col justify-between p-3 md:p-4">
              <p className="mb-1 text-xs font-medium text-gray-600 md:text-sm">{product.name.split(" ")[0]}</p>
              <h3 className="mb-1 line-clamp-2 flex-1 font-serif text-[11px] font-bold text-gray-900 md:mb-2 md:text-base">{product.name}</h3>
              <p className="mb-1 line-clamp-1 text-[10px] text-gray-500 md:mb-2 md:text-sm">{product.description}</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#8b7344] md:text-lg">{product.price}</span>
                {product.originalPrice && <span className="text-xs text-gray-400 line-through md:text-sm">{product.originalPrice}</span>}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
