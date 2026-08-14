"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Clock3, Mail, MapPin, Phone } from "lucide-react"
import ContactMap from "@/components/contact-map"
import { Button } from "@/components/ui/button"

const contactDetails = [
  { icon: Phone, label: "Téléphone", value: "+213 656 373 378" },
  { icon: Mail, label: "Email", value: "info@mobenia.dz" },
  { icon: MapPin, label: "Adresse", value: "Aïn Naâdja, Algérie" },
  { icon: Clock3, label: "Horaires", value: "9:00 — 19:00" },
]

export default function ContactContent() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  useEffect(() => {
    const subject = searchParams.get("subject")
    const message = searchParams.get("message")
    if (subject || message) setFormData((prev) => ({ ...prev, subject: subject || "", message: message || "" }))
  }, [searchParams])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setStatus("sending")
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: "0d0cce56-b5a8-4fbf-a998-ac6be78e3152", ...formData }),
      })
      if (!response.ok) throw new Error("Request failed")
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <main className="min-h-screen bg-[#1b1b1b] text-[#f6f1e9]">
      <section className="relative flex min-h-[250px] items-center justify-center overflow-hidden pt-20 md:min-h-[330px] md:pt-28">
        <img src="/contact-hero.jpg" alt="Salon Mobenia avec fauteuil et table basse" className="absolute inset-0 h-full w-full object-cover object-center opacity-35 blur-[2px]" />
        <div className="absolute inset-0 bg-[#111111]/65" />
        <h1 className="relative z-10 font-sans text-4xl font-bold tracking-[-0.04em] text-white md:text-6xl">Contactez-nous</h1>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="mb-12 text-center">
          <p className="font-serif text-5xl leading-none text-[#a89163]/35 md:text-7xl">Contact</p>
          <h2 className="-mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">Informations de contact</h2>
        </div>

        <div className="grid border-y border-[#a89163]/20 md:grid-cols-4">
          {contactDetails.map(({ icon: Icon, label, value }, index) => (
            <div key={label} className={`px-5 py-8 text-center md:py-6 ${index < contactDetails.length - 1 ? "border-b border-[#a89163]/20 md:border-b-0 md:border-r" : ""}`}>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#a89163] text-[#d2b979]"><Icon className="h-5 w-5" strokeWidth={1.4} /></div>
              <p className="text-sm font-semibold text-white">{value}</p>
              <p className="mt-2 text-xs leading-5 text-[#aaa59d]">{label} · Mobenia Furniture</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-start md:gap-16">
          <div className="pt-2">
            <p className="font-serif text-5xl leading-none text-[#a89163]/35 md:text-6xl">Form</p>
            <h2 className="-mt-1 text-3xl font-bold text-white">Parlons de votre projet</h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#aaa59d]">Une question, une idée ou un projet d&apos;aménagement ? Notre équipe vous accompagne avec attention pour trouver les pièces qui vous ressemblent.</p>
            <div className="mt-8 border-l border-[#a89163] pl-4 text-xs leading-5 text-[#d2b979]">Pourquoi choisir notre boutique ?<br /><span className="text-[#aaa59d]">Qualité premium, conseil personnalisé et design inspirant.</span></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3" id="contact-form">
            <label className="sr-only" htmlFor="name">Nom</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Nom" className="contact-field" />
            <div className="grid gap-3 sm:grid-cols-2">
              <div><label className="sr-only" htmlFor="email">Email</label><input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="contact-field" /></div>
              <div><label className="sr-only" htmlFor="phone">Téléphone</label><input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Téléphone" className="contact-field" /></div>
            </div>
            <label className="sr-only" htmlFor="subject">Sujet</label>
            <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="contact-field"><option value="">Sujet</option><option value="product-inquiry">Produit</option><option value="bulk-order">Commande</option><option value="custom-design">Design</option><option value="general">Général</option></select>
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Message" className="contact-field resize-none" />
            <div className="flex justify-center pt-2"><Button type="submit" disabled={status === "sending"} className="rounded-full bg-[#d2b43c] px-10 text-xs font-medium text-[#282014] hover:bg-[#e3c94c]">{status === "sending" ? "Envoi..." : "Envoyer le message"}</Button></div>
            {status === "success" && <p className="text-center text-xs text-[#d2b979]" role="status">Merci, votre message a bien été envoyé.</p>}
            {status === "error" && <p className="text-center text-xs text-red-300" role="alert">Une erreur est survenue. Veuillez réessayer.</p>}
          </form>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-[#a89163]/30"><ContactMap /></div>
      </section>
    </main>
  )
}
