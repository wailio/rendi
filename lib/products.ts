export type ProductCategory = "sofas" | "chambres" | "accessories" | "salle-a-manger" | "armoire"

export interface Product {
  id: number
  name: string
  price: string
  originalPrice?: string
  images: string[]
  description: string
  discount?: number
  category: ProductCategory
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: "Ensemble Canapé Bordeaux",
    price: "32,990 DZD",
    originalPrice: "42,990 DZD",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%209%20ao%C3%BBt%202026%2C%2022_56_35-zuvqGqeQ3x2graJ5FESZac74YQvGXe.png"],
    description: "Ensemble canapé en velours bordeaux avec fauteuils assortis et tables gigognes dorées.",
    discount: 23,
    category: "sofas",
  },
  {
    id: 2,
    name: "Ensemble Canapé Bleu Velours",
    price: "36,990 DZD",
    originalPrice: "46,990 DZD",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/484993631_1091176399688684_5385034495848953151_n-tV0GiG7u89DI3s0Qk37yGcrWJpMG0y.jpg"],
    description: "Salon complet en velours bleu avec coussins clairs et table basse en verre.",
    discount: 21,
    category: "sofas",
  },
  {
    id: 3,
    name: "Chambre à Coucher Complète",
    price: "42,990 DZD",
    originalPrice: "54,990 DZD",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482345810_1085882810218043_4768745548754319138_n-5sxjFrWhBV0kOblD7T9nvsIRwH1IEH.jpg"],
    description: "Ensemble chambre avec lit double, tête de lit capitonnée et chevets assortis.",
    discount: 22,
    category: "chambres",
  },
  {
    id: 4,
    name: "Vitrine Salle à Manger en Bois",
    price: "28,990 DZD",
    originalPrice: "37,990 DZD",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/486438817_1098273072312350_7141434025095592249_n-GSvzVyPbFvCEENBxbM4rdUnTeolaLu.jpg"],
    description: "Vitrine élégante en bois avec portes vitrées et éclairage intérieur.",
    discount: 23,
    category: "salle-a-manger",
  },
  {
    id: 5,
    name: "Ensemble Salle à Manger Marbre",
    price: "34,990 DZD",
    originalPrice: "44,990 DZD",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/674931883_1421411873331800_4146247339400367547_n-buNGHsitvWKuPMtKqUesbs8uVh2EVX.jpg"],
    description: "Table en marbre avec six chaises capitonnées et détails dorés.",
    discount: 22,
    category: "salle-a-manger",
  },
  {
    id: 6,
    name: "Salle à Manger Grise et Dorée",
    price: "31,990 DZD",
    originalPrice: "41,990 DZD",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/489928417_1109488387857485_1639833618783020462_n-Lc33iabqDUXhQeb4c1huq4UqDQbsfR.jpg"],
    description: "Table à manger en verre avec chaises grises et structure dorée.",
    discount: 24,
    category: "salle-a-manger",
  },
  {
    id: 7,
    name: "Salle à Manger Bois Clair",
    price: "29,990 DZD",
    originalPrice: "38,990 DZD",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/629176824_1363110222495299_7226500243100090780_n-ic0Ye5SoC2Bwghrx1MQNTi5YaoAjRY.jpg"],
    description: "Ensemble table ovale en bois clair avec assises confortables.",
    discount: 23,
    category: "salle-a-manger",
  },
  {
    id: 8,
    name: "Armoire Coulissante Blanche",
    price: "19,990 DZD",
    originalPrice: "25,990 DZD",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9--WtuPBrTSG9iosuccrJ4MdQerxt5HAb.png"],
    description: "Armoire avec portes coulissantes et miroir intégré.",
    discount: 23,
    category: "armoire",
  },
  {
    id: 9,
    name: "Armoire Bois Noir Moderne",
    price: "22,990 DZD",
    originalPrice: "29,990 DZD",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10--Oiu63bo4oiKdeIAiICTn24XMtap3xX.png"],
    description: "Armoire design avec miroirs coulissants et rangements.",
    discount: 23,
    category: "armoire",
  },
  {
    id: 10,
    name: "Meuble Console Doré",
    price: "14,990 DZD",
    originalPrice: "19,990 DZD",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/483755383_1086603220146002_2882301614431455451_n-T3IEpDtHuaRef2X7i9hRuQCet719Km.jpg"],
    description: "Console élégante avec miroir décoratif et finition dorée.",
    discount: 25,
    category: "accessories",
  },
  {
    id: 11,
    name: "Meuble TV avec Cheminée",
    price: "16,990 DZD",
    originalPrice: "22,990 DZD",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/483489349_1086603210146003_3791062025086524196_n-3ILDefMNVSoYLwyXXMNHMnMvItrl4A.jpg"],
    description: "Meuble TV miroir avec cheminée électrique décorative.",
    discount: 26,
    category: "accessories",
  },
  {
    id: 12,
    name: "Ensemble Tables Gigognes Marbre",
    price: "8,990 DZD",
    originalPrice: "11,990 DZD",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/486684314_1098273422312315_106704469016233699_n-hvScCNmvXBwjNdcFXtal1OdcxYE7r4.jpg"],
    description: "Ensemble de tables gigognes ovales avec plateaux effet marbre et pieds dorés.",
    discount: 25,
    category: "accessories",
  },
  {
    id: 13,
    name: "Meuble d'Entrée Moderne",
    price: "15,990 DZD",
    originalPrice: "20,990 DZD",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/627778993_1363110269161961_4436234669891325216_n-UTBRXiOm3v0r1i2V4sLJRuzEOUx5jb.jpg"],
    description: "Meuble d'entrée fonctionnel en bois et blanc avec rangements ouverts.",
    discount: 24,
    category: "accessories",
  },
]

export function getProduct(productId: string | number) {
  return allProducts.find((product) => product.id === Number(productId))
}
