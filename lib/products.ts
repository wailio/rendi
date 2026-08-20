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

const image = (url: string) => [url]

export const allProducts: Product[] = [
  { id: 1, name: "Salon d'Angle Beige Rendi", price: "84,990 DZD", originalPrice: "99,990 DZD", images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/484533145_1067455148731017_5802179678367532386_n-09vbcJhWiSHCuTrBrH68nhSl9rpn89.jpg"), description: "Canapé d'angle généreux en velours beige, pensé pour les moments de partage.", discount: 15, category: "sofas" },
  { id: 2, name: "Salon Gris et Moutarde", price: "72,990 DZD", originalPrice: "86,990 DZD", images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/483098311_1065279885615210_8866306506936465698_n-JxyeUBx3bKNKHRf4ql64rg1964MW5J.jpg"), description: "Composition élégante avec fauteuils coordonnés et touches moutarde.", discount: 16, category: "sofas" },
  { id: 3, name: "Salon Design Gris", price: "68,990 DZD", originalPrice: "81,990 DZD", images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/483626449_1065278642282001_3960148102670510828_n-uZdu4MoVAXhwZCO6PSypPtCamh3BAN.jpg"), description: "Ensemble contemporain de fauteuils gris autour d'une table graphique.", discount: 16, category: "sofas" },
  { id: 4, name: "Salon Signature Rouge", price: "59,990 DZD", originalPrice: "71,990 DZD", images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/484032681_1067461178730414_8441795459421655876_n-c4UIqL2nOiD2kCqLJBhgVVCflBZ9wE.jpg"), description: "Fauteuils rouges signature et table basse noire pour un intérieur affirmé.", discount: 17, category: "sofas" },
  { id: 5, name: "Salon Confort Bordeaux", price: "74,990 DZD", originalPrice: "89,990 DZD", images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482348749_1065279718948560_5190798332153847154_n-hGr2JTXHxQTBdYr6TKQbCkS6o0DAAf.jpg"), description: "Salon profond couleur bordeaux avec assises généreuses et table claire.", discount: 17, category: "sofas" },
  { id: 6, name: "Salon d'Angle Beige Doux", price: "79,990 DZD", originalPrice: "94,990 DZD", images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/484532706_1067455078731024_1050140096240918851_n-juyzjjRYW0jqqp1r2htnHOfwyPDnAn.jpg"), description: "Canapé d'angle beige aux lignes nettes, idéal pour un séjour chaleureux.", discount: 16, category: "sofas" },
  { id: 7, name: "Salon Gris Souris", price: "76,990 DZD", originalPrice: "91,990 DZD", images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D%C3%A9couvrez%20notre%20nouveau%20salon%2C%20%C3%A9l%C3%A9gant%20en%20gris%20souris%2C%20moderne%2C%20et%20parfait%20pour%20des%20moments%20de%20d-sBN1wssc2CWUlS0GEFOLptdSBbUNHh.jpg"), description: "Salon gris souris moderne avec coussins graphiques et fauteuils assortis.", discount: 16, category: "sofas" },
  { id: 8, name: "Salle à Manger Hêtre et Verre", price: "89,990 DZD", originalPrice: "105,990 DZD", images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Table%20salle%20%C3%A0%20manger%20huit%20chaises%20Rendi%20en%20bois%20h%C3%AAtre%20Plateau%20en%20verre%20tremp%C3%A9-DgL4r2gyfWqPWhWV3lK95FqDewn7g7.jpg"), description: "Table en hêtre avec plateau en verre trempé et huit chaises enveloppantes.", discount: 15, category: "salle-a-manger" },
  { id: 9, name: "Table Ronde et Fauteuils", price: "69,990 DZD", originalPrice: "82,990 DZD", images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/484556051_1067461235397075_2353318132866230949_n-uT0zZdkcaKas7IU0D4BOwzUoHqo6tj.jpg"), description: "Ensemble rond lumineux avec fauteuils capitonnés et piètement blanc.", discount: 16, category: "salle-a-manger" },
  { id: 10, name: "Table King avec Chaises", price: "64,990 DZD", originalPrice: "77,990 DZD", images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Table%20king%20disponible%20avec%2004%20chaises%20et%2006%20chaises%20en%20bois%20h%C3%AAtre%20%2C%20plateau%20MdF%20avec%20peinture.-mAIjSNji7B9kc1rDnQZVMAZAZhmyTR.jpg"), description: "Table King disponible avec quatre ou six chaises en bois hêtre.", discount: 17, category: "salle-a-manger" },
  { id: 11, name: "Chambre Blanche Élégance", price: "119,990 DZD", originalPrice: "139,990 DZD", images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2020%20ao%C3%BBt%202026%2C%2012_46_24-HK6vwdiAfwMPWBbaPJ2z855s4b1yba.png"), description: "Ensemble chambre blanc avec lit, coiffeuse, chevets et dressing miroir.", discount: 14, category: "chambres" },
  { id: 12, name: "Chambre Bois et Noir", price: "109,990 DZD", originalPrice: "129,990 DZD", images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/484486856_1070102755132923_4438494461722190101_n-4DSZnOZlpvYy4733mUBC9GmYKZpuxl.jpg"), description: "Chambre complète en bois avec tête de lit noire et armoire miroir.", discount: 15, category: "chambres" },
  { id: 13, name: "Armoire Dressing Noyer", price: "54,990 DZD", originalPrice: "64,990 DZD", images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/485151412_1070103045132894_4850971375800966819_n-y2ArLn3RWQrOyI3xJLbOU2BAt4Eou4.jpg"), description: "Armoire dressing en finition noyer avec penderie, étagères et tiroirs.", discount: 15, category: "armoire" },
  { id: 14, name: "Pouf Gris Texturé", price: "18,990 DZD", originalPrice: "23,990 DZD", images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482986103_1067696835373515_3681310997059976470_n-IhaASYz4gZn6iSg2PngSeo4tzELN1B.jpg"), description: "Pouf carré gris texturé, une assise d'appoint élégante et polyvalente.", discount: 21, category: "accessories" },
  { id: 15, name: "Table et Chaises Scandinaves", price: "42,990 DZD", originalPrice: "51,990 DZD", images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/483626449_1065278642282001_3960148102670510828_n-uZdu4MoVAXhwZCO6PSypPtCamh3BAN.jpg"), description: "Table d'appoint noire et fauteuils gris pour composer un coin convivial.", discount: 17, category: "accessories" },
]

export function getProduct(productId: string | number) {
  return allProducts.find((product) => product.id === Number(productId))
}

export default allProducts
