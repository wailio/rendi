"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import ContactMap from "@/components/contact-map"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export default function ContactContent() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const subject = searchParams.get("subject")
    const message = searchParams.get("message")
    
    if (subject || message) {
      setFormData(prev => ({
        ...prev,
        subject: subject || "",
        message: message || ""
      }))
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '0d0cce56-b5a8-4fbf-a998-ac6be78e3152',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        alert("Merci de nous avoir contactés ! Nous vous répondrons bientôt.")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        alert("Erreur lors de l'envoi du message. Veuillez réessayer.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Erreur lors de l'envoi du message. Veuillez réessayer.")
    }
  }

  return (
    <section className="pt-20 md:pt-48 pb-12 md:pb-16 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-2xl md:text-4xl font-serif font-bold text-[#0B5DA0] mb-2 md:mb-4">Nous Contacter</h1>
          <p className="text-xs md:text-xl text-[#1E90FF] max-w-2xl mx-auto">
            Question ? Contactez-nous
          </p>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-3 gap-3 md:gap-8 mb-8 md:mb-20">
          {/* Contact Info Cards */}
          <div
            style={{ backgroundColor: "#2a2a2a" }}
            className="rounded-2xl border border-[#0B5DA0]/30 p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0B5DA0]/60"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-2 md:mb-4">
              <div className="w-6 md:w-12 h-6 md:h-12 bg-gradient-to-br from-[#0B5DA0] to-[#1E90FF] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-3 md:w-6 h-3 md:h-6 text-white" />
              </div>
              <h3 className="text-[8px] md:text-xl font-semibold text-white text-left">Adresse</h3>
            </div>
            <p className="text-[7px] md:text-base text-gray-300 text-left"><span className="md:hidden">Ain Naadja</span><span className="hidden md:inline">Ain Naâdja, Algérie</span></p>
          </div>

          <div
            style={{ backgroundColor: "#2a2a2a" }}
            className="rounded-2xl border border-[#0B5DA0]/30 p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0B5DA0]/60"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-2 md:mb-4">
              <div className="w-6 md:w-12 h-6 md:h-12 bg-gradient-to-br from-[#0B5DA0] to-[#1E90FF] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-3 md:w-5 h-3 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-[8px] md:text-xl font-semibold text-white text-left">Numero De Téléphone</h3>
            </div>
            <p className="text-[7px] md:text-base text-gray-300 text-left"><span className="md:hidden">0554 37 84 95</span><span className="hidden md:inline">0554 37 84 95</span></p>
          </div>

          <div
            style={{ backgroundColor: "#2a2a2a" }}
            className="rounded-2xl border border-[#0B5DA0]/30 p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0B5DA0]/60"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-2 md:mb-4">
              <div className="w-6 md:w-12 h-6 md:h-12 bg-gradient-to-br from-[#0B5DA0] to-[#1E90FF] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-3 md:w-6 h-3 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
              </div>
              <h3 className="text-[8px] md:text-xl font-semibold text-white text-left">Horaires</h3>
            </div>
            <p className="text-[7px] md:text-base text-gray-300 text-left"><span className="md:hidden">9:00-19:00</span><span className="hidden md:inline">9:00-19:00</span></p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div style={{ backgroundColor: "#2a2a2a" }} className="p-6 md:p-12 rounded-3xl border border-[#0B5DA0]/30 shadow-lg">
            <div className="mb-4 md:mb-10">
              <h2 className="text-lg md:text-4xl font-serif font-bold text-white whitespace-nowrap">
                Envoyez-nous un message
              </h2>
            </div>

            <form onSubmit={handleSubmit} id="form" className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-200 mb-1 md:mb-2">Nom</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#1f1f1f] border border-[#0B5DA0]/30 focus:border-[#0B5DA0] focus:outline-none text-white placeholder-gray-500 transition-colors text-xs md:text-base rounded-xl"
                  />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-200 mb-1 md:mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@mail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#1f1f1f] border border-[#0B5DA0]/30 focus:border-[#0B5DA0] focus:outline-none text-white placeholder-gray-500 transition-colors text-xs md:text-base rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-200 mb-1 md:mb-2">Tél</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#1f1f1f] border border-[#0B5DA0]/30 focus:border-[#0B5DA0] focus:outline-none text-white placeholder-gray-500 transition-colors text-xs md:text-base rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-200 mb-1 md:mb-2">Sujet</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#1f1f1f] border border-[#0B5DA0]/30 focus:border-[#0B5DA0] focus:outline-none text-white transition-colors text-xs md:text-base"
                >
                  <option value="" className="bg-[#1f1f1f] text-white">Sélectionnez</option>
                  <option value="product-inquiry" className="bg-[#1f1f1f] text-white">Produit</option>
                  <option value="bulk-order" className="bg-[#1f1f1f] text-white">Commande</option>
                  <option value="custom-design" className="bg-[#1f1f1f] text-white">Design</option>
                  <option value="general" className="bg-[#1f1f1f] text-white">Général</option>
                </select>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-200 mb-1 md:mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Votre message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#1f1f1f] border border-[#0B5DA0]/30 focus:border-[#0B5DA0] focus:outline-none text-white placeholder-gray-500 transition-colors resize-none text-xs md:text-base"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0B5DA0] hover:bg-[#061632] text-white py-2 md:py-3 text-sm md:text-lg font-semibold transition-colors"
              >
                Envoyer
              </Button>
            </form>
          </div>

          <div style={{ backgroundColor: "#2a2a2a" }}
            className="p-6 md:p-12 flex flex-col justify-center rounded-3xl border border-[#0B5DA0]/30 shadow-lg">
            {/* Mobile: Simple list */}
            <div className="md:hidden">
              <h2 className="text-base font-serif font-bold text-white mb-4">Pourquoi nous</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#0B5DA0] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-[10px]">✓</span>
                  </div>
                  <p className="text-xs text-gray-300">Qualité premium</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#0B5DA0] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-[10px]">✓</span>
                  </div>
                  <p className="text-xs text-gray-300">Écoresponsable</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#0B5DA0] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-[10px]">✓</span>
                  </div>
                  <p className="text-xs text-gray-300">Design sur mesure</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#0B5DA0] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-[10px]">✓</span>
                  </div>
                  <p className="text-xs text-gray-300">Support 24/7</p>
                </div>
              </div>
            </div>

            {/* Desktop: Full layout */}
            <div className="hidden md:block">
              <div className="mb-10">
                <h2 className="text-4xl font-serif font-bold text-white mb-1">
                  Pourquoi Choisir
                </h2>
                <h3 className="text-4xl font-serif font-bold text-[#0B5DA0]">
                  Notre Boutique
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#0B5DA0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Qualité premium
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#0B5DA0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Écoresponsable
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#0B5DA0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Design sur mesure
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#0B5DA0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-base leading-relaxed">Support 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8 md:mt-24 mb-8 md:mb-24 flex justify-center">
          <div className="w-full max-w-4xl rounded-3xl overflow-hidden border border-[#1B2433] shadow-xl" style={{ backgroundColor: "#111827" }}>
            <div className="p-0">
              <ContactMap />
            </div>
          </div>
        </div>
      </div>

      <section className="hidden md:block py-5 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-2 animate-slide-in-up">
            Prêt à Transformer votre Espace ?
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
            Découvrez notre collection exclusive de meubles premium conçus pour créer des environnements qui reflètent
            votre style unique et vos aspirations. Notre équipe d'experts est là pour vous aider à trouver les pièces
            parfaites pour vos besoins.
          </p>
          <Button
            className="bg-[#020817] hover:bg-[#00030A] text-white px-6 py-2 text-sm font-semibold transition-colors cursor-pointer"
            onClick={() => (window.location.href = "/all-products")}
          >
            Parcourir nos Produits
          </Button>
        </div>
      </section>

      <section className="h-24 md:h-32 bg-white"></section>
    </section>
  )
}
