"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Clock3, Mail, MapPin, Phone } from "lucide-react"
import ContactMap from "@/components/contact-map"
import { Button } from "@/components/ui/button"

const contactDetails = [
  { icon: Phone, label: "Téléphone", value: "+213 656 373 378" },
  { icon: Mail, label: "Email", value: "mobenia23@gmail.com" },
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      <section className="relative flex min-h-[160px] items-center justify-center overflow-hidden pt-12 md:min-h-[330px] md:pt-28">
        <img src="/contact-inspiration.jpg" alt="Salon Mobenia avec fauteuil et table basse" className="absolute inset-0 h-full w-full object-cover object-center opacity-40 blur-[1px]" />
        <div className="absolute inset-0 bg-[#111111]/70" />
        <h1 className="relative z-10 font-sans text-2xl font-bold tracking-[-0.04em] text-white md:text-6xl">Contactez-nous</h1>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-20">
        <div className="mb-6 text-center md:mb-12">
          <p className="font-serif text-2xl leading-none text-[#a89163]/35 md:text-7xl">Contact</p>
          <h2 className="-mt-1 text-base font-bold tracking-tight text-white md:text-3xl">Informations de contact</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 border-y border-[#a89163]/20 py-4 md:grid md:grid-cols-4 md:gap-0 md:border-y">
          {contactDetails.map(({ icon: Icon, label, value }, index) => (
            <div key={label} className="flex flex-col items-center md:border-r md:border-[#a89163]/20 md:px-5 md:py-8 md:py-6 md:text-center">
              <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full border border-[#a89163] text-[#d2b979] md:mb-4 md:h-12 md:w-12"><Icon className="h-3.5 w-3.5 md:h-5 md:w-5" strokeWidth={1.4} /></div>
              <p className="text-xs font-semibold text-white md:text-sm">{value}</p>
              <p className="mt-0.5 text-[10px] leading-3 text-[#aaa59d] md:mt-2 md:text-xs md:leading-5">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:mt-16 md:gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-start md:gap-16">
          <div className="hidden pt-2 md:block">
            <p className="font-serif text-2xl leading-none text-[#a89163]/35 md:text-6xl">Form</p>
            <h2 className="-mt-1 text-xl font-bold text-white md:text-3xl">Parlons de votre projet</h2>
            <p className="mt-3 max-w-sm text-xs leading-5 text-[#aaa59d] md:mt-5 md:text-sm md:leading-6">Une question, une idée ou un projet d&apos;aménagement ? Notre équipe vous accompagne avec attention pour trouver les pièces qui vous ressemblent.</p>
            <div className="mt-6 border-l border-[#a89163] pl-3 text-xs leading-4 text-[#d2b979] md:mt-8 md:pl-4 md:text-xs md:leading-5">Pourquoi choisir notre boutique ?<br /><span className="text-[#aaa59d]">Qualité premium, conseil personnalisé et design inspirant.</span></div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design_sans_titre__9_-removebg-preview-BaUqPqE1FFSgmwWuggbywFj8oh8fL9.png"
              alt="Logo Mobenia"
              className="mt-8 hidden w-40 object-contain md:block"
            />
          </div>
          <div className="md:hidden mb-2 text-center">
            <p className="font-serif text-xl leading-none text-[#a89163]/35">Form</p>
            <h2 className="-mt-0.5 text-sm font-bold text-white">Parlons de votre projet</h2>
          </div>

          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4" id="contact-form">
            <label className="sr-only" htmlFor="name">Nom</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Nom" className="contact-field w-full rounded-full px-4 py-3.5" />
            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="contact-field w-full rounded-full px-4 py-3.5" />
            <label className="sr-only" htmlFor="phone">Téléphone</label>
            <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Téléphone" className="contact-field w-full rounded-full px-4 py-3.5" />
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Message" className="contact-field w-full resize-none rounded-xl px-4 py-3.5" />
            <div className="flex justify-start pt-1"><Button type="submit" disabled={status === "sending"} className="rounded-full bg-[#e8b843] px-8 py-3 text-xs font-medium text-[#282014] hover:bg-[#f0ca55]">{status === "sending" ? "Envoi..." : "Envoyer le message"}</Button></div>
            {status === "success" && <p className="text-xs text-[#d2b979]" role="status">Merci, votre message a bien été envoyé.</p>}
            {status === "error" && <p className="text-xs text-red-300" role="alert">Une erreur est survenue. Veuillez réessayer.</p>}
          </form>
        </div>

        <div className="mt-8 mb-16 overflow-hidden rounded-2xl border border-[#a89163]/30 md:mt-16 md:mb-12"><ContactMap /></div>
      </section>
    </main>
  )
}
