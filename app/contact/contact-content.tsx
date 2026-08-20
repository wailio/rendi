"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Clock3, Mail, MapPin, Phone } from "lucide-react"
import { MapReveal } from "@/components/MapReveal"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"

const contactDetails = [
  { icon: Phone, label: "Téléphone", value: "0560043334" },
  { icon: Mail, label: "Email", value: "guir.yasser@gmail.com" },
  { icon: MapPin, label: "Adresse", value: "Aïn Naâdja, Algérie" },
  { icon: Clock3, label: "Horaires", value: "9:00 — 18:00" },
]

export default function ContactContent() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [productSpotlight, setProductSpotlight] = useState(false)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const subject = searchParams.get("subject")
    const message = searchParams.get("message")
    if (!(subject || message)) return

    setFormData((prev) => ({ ...prev, subject: subject || "", message: message || "" }))
    setProductSpotlight(true)

    const scrollTimeout = window.setTimeout(() => {
      messageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    }, 400)

    return () => window.clearTimeout(scrollTimeout)
  }, [searchParams])

  const dismissProductSpotlight = () => setProductSpotlight(false)

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
    <main className="min-h-screen bg-black text-white">
      <section className="relative flex min-h-[160px] items-center justify-center overflow-hidden pt-12 md:min-h-[330px] md:pt-28">
        <div className="absolute inset-0 bg-black" />
        <Reveal delay={0}>
          <h1 className="relative z-10 font-sans text-2xl font-bold tracking-[-0.04em] text-[#6fae7e] md:text-6xl">Contactez-nous</h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-20">
        <Reveal delay={120}>
          <div className="mb-6 text-center md:mb-12">
            <p className="font-serif text-2xl leading-none text-[#6fae7e] md:text-7xl">Contact</p>
            <h2 className="-mt-1 text-base font-bold tracking-tight text-white md:text-3xl">Informations de contact</h2>
          </div>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-3 border-y border-[#6fae7e]/60 py-4 md:grid md:grid-cols-4 md:gap-0 md:border-y">
          {contactDetails.map(({ icon: Icon, label, value }, index) => (
            <Reveal key={label} variant="pop" delay={index * 80}>
            <div className="flex flex-col items-center md:border-r md:border-[#6fae7e]/60 md:px-5 md:py-8 md:py-6 md:text-center">
              <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full border border-[#6fae7e] text-[#6fae7e] md:mb-4 md:h-12 md:w-12"><Icon className="h-3.5 w-3.5 md:h-5 md:w-5" strokeWidth={1.4} /></div>
              <p className="text-xs font-semibold text-white md:text-sm">{value}</p>
              <p className="mt-0.5 text-[10px] leading-3 text-[#aaa59d] md:mt-2 md:text-xs md:leading-5">{label}</p>
            </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:mt-16 md:gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-start md:gap-16">
          <Reveal>
          <div className="hidden pt-2 md:block">
            <p className="font-serif text-2xl leading-none text-[#6fae7e] md:text-6xl">Form</p>
            <h2 className="-mt-1 text-xl font-bold text-white md:text-3xl">Parlons de votre projet</h2>
            <p className="mt-3 max-w-sm text-xs leading-5 text-[#aaa59d] md:mt-5 md:text-sm md:leading-6">Une question, une idée ou un projet d&apos;aménagement ? Notre équipe vous accompagne avec attention pour trouver les pièces qui vous ressemblent.</p>
            <div className="mt-6 border-l border-[#08220e] pl-3 text-xs leading-4 text-white md:mt-8 md:pl-4 md:text-xs md:leading-5">Pourquoi choisir notre boutique ?<br /><span className="text-[#aaa59d]">Qualité premium, conseil personnalisé et design inspirant.</span></div>
          </div>
          </Reveal>
          <Reveal className="md:hidden mb-2 text-center">
            <p className="font-serif text-xl leading-none text-[#6fae7e]">Form</p>
            <h2 className="-mt-0.5 text-sm font-bold text-white">Parlons de votre projet</h2>
          </Reveal>

          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4" id="contact-form">
            <Reveal variant="pop" delay={0}><div><label className="sr-only" htmlFor="name">Nom</label><input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Nom" className="contact-field w-full rounded-full px-4 py-3.5" /></div></Reveal>
            <Reveal variant="pop" delay={70}><div><label className="sr-only" htmlFor="email">Email</label><input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="contact-field w-full rounded-full px-4 py-3.5" /></div></Reveal>
            <Reveal variant="pop" delay={140}><div><label className="sr-only" htmlFor="phone">Téléphone</label><input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Téléphone" className="contact-field w-full rounded-full px-4 py-3.5" /></div></Reveal>
            <Reveal variant="pop" delay={210}><div><label className="sr-only" htmlFor="subject">Sujet</label><input id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Sujet" className="contact-field w-full rounded-full px-4 py-3.5" /></div></Reveal>
            <Reveal variant="pop" delay={280}>
              <div className={`product-message-wrap ${productSpotlight ? "product-message-spotlight" : ""}`}>
                <span className="product-message-streak product-message-streak-left" aria-hidden="true" />
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  ref={messageRef}
                  id="message"
                  name="message"
                  value={formData.message}
                  onFocus={dismissProductSpotlight}
                  onChange={(event) => { dismissProductSpotlight(); handleChange(event) }}
                  required
                  rows={4}
                  placeholder="Message"
                  className="contact-field w-full resize-none rounded-xl px-4 py-3.5"
                />
                <span className="product-message-streak product-message-streak-right" aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex justify-start pt-1"><Button type="submit" disabled={status === "sending"} className="rounded-full bg-[#134c1f] px-8 py-3 text-xs font-medium text-white hover:bg-[#08220e]">{status === "sending" ? "Envoi..." : "Envoyer le message"}</Button></div>
            </Reveal>
            {status === "success" && <p className="text-xs text-white" role="status">Merci, votre message a bien été envoyé.</p>}
            {status === "error" && <p className="text-xs text-red-300" role="alert">Une erreur est survenue. Veuillez réessayer.</p>}
          </form>
        </div>

        <div className="mt-8 mb-16 overflow-hidden rounded-2xl border-2 border-[#0f3917] md:mt-16 md:mb-12">
          <MapReveal src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12794.015660327173!2d3.0839112!3d36.7104572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fada914385a93%3A0xbdfa983b7f25f22f!2sRendi%20shop!5e0!3m2!1sfr!2sdz!4v1787229605274!5m2!1sfr!2sdz" title="Rendi Shop location" />
        </div>
      </section>
    </main>
  )
}
