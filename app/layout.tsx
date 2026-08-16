import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Geist, Geist_Mono, Great_Vibes, Playfair_Display } from "next/font/google"
import "./globals.css"
import ClientLayout from "./_client-layout"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const _greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-great-vibes" })
const _cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "300", style: "italic", variable: "--font-cormorant" })

export const metadata: Metadata = {
  title: "Mobenia Furniture | Meubles Luxe",
  description: "Découvrez notre collection exclusive de meubles de luxe pour transformer votre espace",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${_playfair.variable} ${_greatVibes.variable} ${_cormorant.variable} bg-background`}>
      <body className={`font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
