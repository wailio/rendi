"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail, Music2, Check, ArrowUpRight } from "lucide-react"
import { useState } from "react"
import type React from "react"

const chairImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2013%20ao%C3%BBt%202026%2C%2022_56_04-68bCwk2UOD9WzaDzfZVJCAdMQf6zdk.png"
const lampImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2013%20ao%C3%BBt%202026%2C%2023_00_01-9Jx8Mg07F8yutI4yA4eo05Jh4QCT1R.png"

function NewArrivalsForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email.trim())

    if (!validEmail) {
      setStatus("error")
      return
    }

    setStatus("success")
    setEmail("")
  }

  return (
    <div className="flex h-full min-h-[292px] flex-col justify-between bg-[#26313b] px-4 py-5 text-[#f1eee7] sm:px-6 sm:py-6">
      <div>
        <p className="font-serif text-[clamp(1.2rem,1.7vw,1.7rem)] leading-tight tracking-[-0.03em]">Nouveautés | Arrivages</p>
        <p className="mt-1 max-w-[15rem] text-[11px] leading-4 text-[#d1d2cd]">
          Soyez les premiers à découvrir nos nouvelles pièces et collections.
        </p>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center py-1">
        <img src={lampImage} alt="Lampe de bureau illustrée" className="h-28 w-auto max-w-[88%] object-contain sm:h-32" />
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="new-arrivals-email" className="sr-only">Votre adresse email</label>
        <div className="flex overflow-hidden border border-[#b9a387]/60 bg-[#f0ede5]">
          <input
            id="new-arrivals-email"
            type="email"
            value={email}
            onChange={(event) => { setEmail(event.target.value); setStatus("idle") }}
            placeholder="Votre email"
            aria-invalid={status === "error"}
            aria-describedby="new-arrivals-feedback"
            className="min-w-0 flex-1 bg-transparent px-2.5 py-2 text-xs text-[#26313b] outline-none placeholder:text-[#77766f]"
          />
          <button type="submit" className="bg-[#a98661] px-3 text-[10px] font-medium uppercase tracking-wide text-[#fffaf1] transition-colors hover:bg-[#92734f]">
            Recevoir
          </button>
        </div>
        <p id="new-arrivals-feedback" role="status" className="mt-2 min-h-5 text-xs text-[#d1d2cd]">
          {status === "error" && "Veuillez saisir une adresse email valide."}
          {status === "success" && <span className="inline-flex items-center gap-1"><Check className="h-3.5 w-3.5" /> Merci, vous serez informé de nos nouveaux arrivages.</span>}
        </p>
      </form>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="group relative inline-flex w-fit items-center gap-1 text-[15px] leading-7 text-[#272b2d] transition-colors hover:text-[#a98661] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#a98661] after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full">{children}<ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" /></Link>
}

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-[#ece9e1] text-[#272b2d]">
      <div className="w-full pb-3 pt-0 sm:pb-4">
        <div className="grid w-full items-stretch overflow-hidden bg-[#f4f1e9] lg:grid-cols-[0.88fr_1.02fr_1.65fr]">
          <section className="relative flex min-h-[292px] flex-col justify-end overflow-hidden border border-[#d4d0c6] px-5 pb-5 pt-5 sm:px-7 lg:min-h-[310px] lg:border-r-0">
            <img src={chairImage} alt="Illustration d'un fauteuil classique" className="absolute inset-0 h-full w-full object-contain object-center opacity-90 mix-blend-multiply" />
            <div className="relative z-10 mt-auto text-center">
              <h2 className="font-serif text-[2rem] tracking-[-0.05em] sm:text-[2.35rem]">Mobenia Furniture</h2>
              <p className="mt-1 text-[11px] font-medium tracking-wide">L&apos;art de meubler vos histoires.</p>
              <p className="mt-0.5 text-[11px]">Est. 2018</p>
            </div>
          </section>

          <div className="min-h-[292px] border-y border-r border-[#d4d0c6]">
            <NewArrivalsForm />
          </div>

          <section className="grid gap-6 border-b border-r border-[#d4d0c6] px-6 py-7 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-5 lg:px-7 lg:py-8">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em]">Explorer</h3>
              <nav className="flex flex-col">
                <FooterLink href="/all-products">Tous les produits</FooterLink>
                <FooterLink href="/offers">Offres & promotions</FooterLink>
                <FooterLink href="/rooms">Collections</FooterLink>
                <FooterLink href="/inspirations">Inspirations</FooterLink>
              </nav>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em]">Mobenia Furniture</h3>
              <nav className="flex flex-col">
                <FooterLink href="/about">Notre histoire</FooterLink>
                <FooterLink href="/contact">Nous trouver</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="/faq">Aide & conseils</FooterLink>
              </nav>
              <h3 className="mb-3 mt-7 text-sm font-semibold uppercase tracking-[0.12em]">Assistance</h3>
              <nav className="flex flex-col"><FooterLink href="/contact">Livraison & retours</FooterLink><FooterLink href="/contact">Service client</FooterLink></nav>
            </div>
            <div className="border-t border-[#d4d0c6] pt-7 sm:col-span-2 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div className="mb-5 flex gap-4 text-[#a98661]">
                <Link href="https://facebook.com/MOBENIA23" target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-transform hover:-translate-y-1"><Facebook className="h-6 w-6" /></Link>
                <Link href="https://instagram.com/mobenia_furniture" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-transform hover:-translate-y-1"><Instagram className="h-6 w-6" /></Link>
                <Link href="https://tiktok.com/@mobenia.furniture23" target="_blank" rel="noreferrer" aria-label="TikTok" className="transition-transform hover:-translate-y-1"><Music2 className="h-6 w-6" /></Link>
              </div>
              <div className="overflow-hidden border border-[#c7c3b9] bg-[#ddd9cf]">
                <iframe title="Mobenia Furniture sur Google Maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3198.5406841850314!2d3.0806421!3d36.7095739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fadc55ffe5c27%3A0xf351e61467294090!2sMOBENIA%20FURNITURE!5e0!3m2!1sfr!2sdz!4v1786702142590!5m2!1sfr!2sdz" className="h-44 w-full grayscale" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
              </div>
              <p className="mt-4 text-center text-sm leading-6">Mobenia Furniture<br />Aïn Naâdja, Alger</p>
            </div>
          </section>
        </div>

        <div className="mt-0 flex flex-col gap-3 border-t border-[#bdb8ad] pt-4 text-xs text-[#5c5d5a] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Mobenia Furniture. Tous droits réservés.</p>
          <div className="flex gap-5"><Link href="/terms" className="hover:text-[#a98661]">Conditions</Link><Link href="/privacy" className="hover:text-[#a98661]">Confidentialité</Link><Link href="/cookies" className="hover:text-[#a98661]">Cookies</Link></div>
        </div>
      </div>
    </footer>
  )
}
