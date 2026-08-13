"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Music2 } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  
  return (
    <footer className={`relative py-5 md:py-20 overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%208%20nov.%202025%2C%2016_52_02-58aR3ivw7SRjNIpV7B6kudRoWQqbRl.png)",
          filter: "blur(10px)",
        }}
      ></div>

      <div className="absolute inset-0 bg-[#071225]/48"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-12 mb-6 md:mb-12 text-white">
          {/* Brand Logo */}
          <div>
            <Image 
              src="/logo-rais-meuble.png" 
              alt="Rais Meuble" 
              width={140} 
              height={60}
              className="h-12 md:h-16 w-auto mb-3 md:mb-4"
            />
            <p className="text-xs md:text-sm text-ivory/70 font-light leading-relaxed">
              Meubles artisanaux de luxe pour transformer vos espaces en havres de paix.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-2 md:mb-4">Boutique</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/all-products" className="hover:text-[#7E8EA6] transition-colors">
                  Tous les Produits
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-[#7E8EA6] transition-colors">
                  Offres & Promotions
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-[#7E8EA6] transition-colors">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-2 md:mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#7E8EA6] transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/inspirations" className="hover:text-[#7E8EA6] transition-colors">
                  Inspirations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#7E8EA6] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-2 md:mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@raismeuble.dz" className="hover:text-[#9AAAC1] transition-colors">
                  info@raismeuble.dz
                </a>
              </li>
              <li className="hover:text-[#9AAAC1] transition-colors">
                0554 37 84 95
              </li>
              <li className="text-white/80 text-xs">
                Aïn Naâdja, Algérie
              </li>
              <li className="text-white/80 text-xs font-medium mt-2">
                Horaires: 9:00-19:00
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brass/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-ivory/60">© 2026 Rais Meuble. Tous droits réservés.</p>

          {/* Social Links */}
          <div className="flex gap-5">
            <Link 
              href="https://facebook.com/p/Rais-meuble-100063890029935" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7E8EA6] transition-colors text-ivory/80 p-2 hover:bg-[#7E8EA6]/10 rounded-lg"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link 
              href="https://instagram.com/raismeuble" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7E8EA6] transition-colors text-ivory/80 p-2 hover:bg-[#7E8EA6]/10 rounded-lg"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link 
              href="https://tiktok.com/@rais.meuble" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7E8EA6] transition-colors text-ivory/80 p-2 hover:bg-[#7E8EA6]/10 rounded-lg"
            >
              <Music2 className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
