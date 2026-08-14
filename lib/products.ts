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
  {
    id: 1,
    name: "Canapé-lit Gris Confort",
    price: "69,990 DZD",
    originalPrice: "82,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/489487372_1033224112070334_5652122833400361724_n-dXEUuYLrQxb75CTz2BHmrEhKQhdDGS.jpg"),
    description: "Canapé-lit gris généreux avec assise profonde et couchage confortable.",
    discount: 16,
    category: "sofas",
  },
  {
    id: 2,
    name: "Salon Modulable Écru",
    price: "84,990 DZD",
    originalPrice: "99,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/592899574_1210994964293247_3814348985714086308_n-5CceXQqfEeSmRxjLIZPEsbxgTj9Wcg.jpg"),
    description: "Composition modulable claire avec méridienne et poufs assortis.",
    discount: 15,
    category: "sofas",
  },
  {
    id: 3,
    name: "Salon d'Angle Gris Perle",
    price: "79,990 DZD",
    originalPrice: "94,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/491427064_17903889531144793_1818672150372352014_n-BFb7XTqmvX5UumUuPc5pZsd85OdE8Y.jpg"),
    description: "Grand canapé d'angle en tissu gris avec méridienne spacieuse.",
    discount: 16,
    category: "sofas",
  },
  {
    id: 4,
    name: "Salon Scandinave Gris",
    price: "72,990 DZD",
    originalPrice: "86,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/476152020_985929606799785_2540105098817843571_n-YQif8qnbSbiHR9a0OvG98foBlmRXPx.jpg"),
    description: "Ensemble salon trois places avec fauteuils et table basse graphique.",
    discount: 16,
    category: "sofas",
  },
  {
    id: 5,
    name: "Salon Classique Beige",
    price: "64,990 DZD",
    originalPrice: "76,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/475648995_979997514059661_7264096071427420269_n-9hIkfCwa06NsvqB3pJ3J0WWbhYQIA0.jpg"),
    description: "Salon chaleureux deux et trois places avec coussins décoratifs.",
    discount: 16,
    category: "sofas",
  },
  {
    id: 6,
    name: "Chambre Complète Beige",
    price: "89,990 DZD",
    originalPrice: "106,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/593112896_1210994944293249_7932880374047739571_n-dl6449VZ8jW7pst8GCQWc2D3JxFYgO.jpg"),
    description: "Ensemble chambre complet avec lit, commode, miroir et chevet.",
    discount: 16,
    category: "chambres",
  },
  {
    id: 7,
    name: "Chambre Moderne avec Dressing",
    price: "109,990 DZD",
    originalPrice: "129,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/594305254_1210994937626583_7388069356829733011_n-0axNlabohPU6rarb9QogPblRWFZC56.jpg"),
    description: "Chambre contemporaine avec dressing coulissant et tête de lit capitonnée.",
    discount: 15,
    category: "chambres",
  },
  {
    id: 8,
    name: "Canapé-lit pour Chambre",
    price: "69,990 DZD",
    originalPrice: "82,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/489487372_1033224112070334_5652122833400361724_n-dXEUuYLrQxb75CTz2BHmrEhKQhdDGS.jpg"),
    description: "Solution convertible idéale pour une chambre d'appoint élégante.",
    discount: 16,
    category: "chambres",
  },
  {
    id: 9,
    name: "Salle à Manger Contemporaine",
    price: "74,990 DZD",
    originalPrice: "89,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/739470789_1379246520801423_4729814231576310216_n-y3K09oWrUohb8J4UI16F4w1ElAMpUn.jpg"),
    description: "Ensemble table ronde et assises design pour une salle à manger lumineuse.",
    discount: 17,
    category: "salle-a-manger",
  },
  {
    id: 10,
    name: "Salle à Manger Verre Noir",
    price: "82,990 DZD",
    originalPrice: "97,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/491423227_17903896506144793_1540078557285421641_n-pkxvriAYnLDzT6ulniESxMoK6xU9Oa.jpg"),
    description: "Table extensible en verre noir avec chaises rembourrées.",
    discount: 15,
    category: "salle-a-manger",
  },
  {
    id: 11,
    name: "Salle à Manger Bois Classique",
    price: "69,990 DZD",
    originalPrice: "82,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/490966401_17903896488144793_1986405347262106861_n-5AwLrM5dw3Toas7To0Kz0f1c5gT8ES.jpg"),
    description: "Table en bois massif et six chaises au style classique intemporel.",
    discount: 16,
    category: "salle-a-manger",
  },
  {
    id: 12,
    name: "Salle à Manger Chêne Moderne",
    price: "79,990 DZD",
    originalPrice: "94,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/592743626_1210994940959916_3797544592518705392_n-as9R2EivTRF5HKdRbBAcpM6SZLe2Ap.jpg"),
    description: "Ensemble chaleureux en chêne avec table rectangulaire et fauteuils enveloppants.",
    discount: 16,
    category: "salle-a-manger",
  },
  {
    id: 13,
    name: "Armoire Dressing Blanche",
    price: "54,990 DZD",
    originalPrice: "64,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20ao%C3%BBt%202026%2C%2014_23_17-dPe9F44wfw190GWOgosQpzDVJCWQHu.png"),
    description: "Dressing blanc contemporain avec portes coulissantes et rangements généreux.",
    discount: 15,
    category: "armoire",
  },
  {
    id: 14,
    name: "Armoire Miroir Blanche",
    price: "44,990 DZD",
    originalPrice: "54,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480064076_992031269522952_5818835402125102106_n-6Q6df4khAIjOi4MOw5iflTYZ15GYSf.jpg"),
    description: "Armoire trois portes avec miroirs, penderie et tiroirs intégrés.",
    discount: 18,
    category: "armoire",
  },
  {
    id: 15,
    name: "Table Basse Design Noir",
    price: "24,990 DZD",
    originalPrice: "29,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/740314369_1379246800801395_5250627839017220222_n-iUIpdsLzZm89t507DembX7GUt6Y0bt.jpg"),
    description: "Table basse noire contemporaine avec plateau brillant et rangement discret.",
    discount: 17,
    category: "accessories",
  },
  {
    id: 16,
    name: "Table d'Appoint Blanche",
    price: "18,990 DZD",
    originalPrice: "23,990 DZD",
    images: image("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/737912073_1379246334134775_2486882298059408016_n-0n5t4iu3sgRzw6vKAvKWNAA6LslSE5.jpg"),
    description: "Table d'appoint blanche aux lignes douces et finition bois naturel.",
    discount: 21,
    category: "accessories",
  },
]

export function getProduct(productId: string | number) {
  return allProducts.find((product) => product.id === Number(productId))
}

export default allProducts
