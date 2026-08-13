"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const armoires = [
  {
    id: 9,
    name: "Armoire Coulissante Blanche",
    description: "Armoire moderne avec portes coulissantes et miroir intégré pour un look contemporain",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9--WtuPBrTSG9iosuccrJ4MdQerxt5HAb.png",
    price: "19,990 DZD",
  },
  {
    id: 10,
    name: "Armoire Bois Noir Moderne",
    description: "Armoire design avec miroirs coulissants et rangements spacieux pour la chambre",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10--Oiu63bo4oiKdeIAiICTn24XMtap3xX.png",
    price: "22,990 DZD",
  },
  {
    id: 11,
    name: "Armoire Miroir 3 Portes",
    description: "Armoire élégante à portes coulissantes avec miroir de haute qualité et finition premium",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11--Eyp1DAPC0P6vfP6JEPlLyb8YsbFQPh.png",
    price: "18,990 DZD",
  },
]

export default function ArmoinePage() {
  return (
    <div className="relative">
      <Header />

      <main className="min-h-screen pt-20 md:pt-24" style={{ backgroundColor: "#eff0f1" }}>
        <div className="max-w-7xl mx-auto px-3 md:px-6 py-8 md:py-12">
          <Link href="/" className="flex items-center gap-2 text-[#1E90FF] hover:text-[#0B5DA0] mb-6 md:mb-12 font-semibold text-xs md:text-base">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            Retour
          </Link>

          {/* Header Section */}
          <div className="mb-8 md:mb-16">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-2 md:mb-4">Armoires</h1>
            <div className="h-0.5 md:h-1 w-16 md:w-32 bg-[#1E90FF] mb-4 md:mb-8"></div>
            <p className="text-xs md:text-lg text-gray-700 max-w-3xl leading-relaxed hidden md:block">
              Découvrez notre collection d&apos;armoires modernes avec miroirs et rangements premium. Chaque pièce allie style et fonctionnalité.
            </p>
          </div>

          {/* Armoires Grid */}
          <div className="grid grid-cols-1 gap-6 md:gap-12">
            {armoires.map((armoire) => (
              <Link key={armoire.id} href={`/product/${armoire.id}`}>
                <div className="group cursor-pointer bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden bg-white h-48 md:h-96 flex items-center justify-center">
                    <img
                      src={armoire.image || "/placeholder.svg"}
                      alt={armoire.name}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                  </div>

                  <div className="p-3 md:p-8">
                    <div className="flex items-start justify-between mb-2 md:mb-4">
                      <div>
                        <h3 className="text-base md:text-2xl font-serif font-bold text-gray-900 mb-1 md:mb-2">{armoire.name}</h3>
                        <div className="h-0.5 w-8 md:w-12 bg-[#1E90FF]"></div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs md:text-base mb-3 md:mb-6 leading-relaxed hidden md:block">{armoire.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[#1E90FF] font-bold text-base md:text-2xl">{armoire.price}</p>
                      <button className="bg-[#1E90FF] hover:bg-[#0B5DA0] text-white px-3 md:px-6 py-1 md:py-2 font-semibold transition-colors text-xs md:text-base">
                        Détails
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Professional Spacing */}
        <div className="h-12 md:h-24 md:h-32"></div>
      </main>

      <Footer />
    </div>
  )
}
