"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail, Youtube, Check, ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import type React from "react"

const footerBackgroundImage = "/footer-chair-sketch.png"
const atelierLampImage = "/atelier-maison-lamp.png"
const footerMapEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12794.015660327173!2d3.0839112!3d36.7104572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fada914385a93%3A0xbdfa983b7f25f22f!2sRendi%20shop!5e0!3m2!1sfr!2sdz!4v1787229605274!5m2!1sfr!2sdz"

function NewArrivalsForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "error" | "loading" | "network-error" | "success">("idle")

  useEffect(() => {
    if (status !== "success") return
    const timer = window.setTimeout(() => setStatus("idle"), 4000)
    return () => window.clearTimeout(timer)
  }, [status])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === "loading") return

    const trimmedEmail = email.trim()
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(trimmedEmail)

    if (!validEmail) {
      setStatus("error")
      return
    }

    setStatus("loading")
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 8000)

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwjNct1-7VnCZ_33EhI0k34WNKQuUf991AK1u465OL-RrxNtSPKXLkU3-O9Wzy8uVM84w/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email: trimmedEmail }).toString(),
        signal: controller.signal,
      })
      setEmail("")
      setStatus("success")
    } catch (error) {
      console.error("[Newsletter Signup Error]", error)
      setStatus("network-error")
    } finally {
      window.clearTimeout(timeout)
    }
  }

  return (
    <div className="relative flex h-full min-h-[292px] flex-col justify-between overflow-hidden bg-[#08220e] px-4 py-5 text-white sm:px-6 sm:py-6 lg:min-h-[415px] lg:px-7 lg:py-8">
      <img src={atelierLampImage} alt="Lampe de bureau articulée" className="pointer-events-none absolute left-1/2 top-[6rem] z-0 w-36 -translate-x-1/2 object-contain opacity-90 sm:top-[6.5rem] sm:w-40" />
      <div className="relative z-10">
        <p className="font-serif text-[clamp(1.2rem,1.7vw,1.7rem)] leading-tight tracking-[-0.03em]">Nouveautés | Arrivages</p>
        <p className="mt-1 max-w-[15rem] text-[11px] leading-4 text-white/80">
          Soyez les premiers à découvrir nos nouvelles pièces et collections.
        </p>
      </div>

      <div className="min-h-0 flex-1" aria-hidden="true" />

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
          <button type="submit" disabled={status === "loading"} className="bg-[#134c1f] px-3 text-[10px] font-medium uppercase tracking-wide text-[#fffaf1] transition-colors hover:bg-[#123b32] disabled:cursor-wait disabled:opacity-60">
            {status === "loading" ? "Envoi..." : "Recevoir"}
          </button>
        </div>
        <p id="new-arrivals-feedback" role="status" className="mt-2 min-h-5 text-xs text-white/80">
          {status === "error" && <span className="text-[#c98f82]">Veuillez entrer un email valide.</span>}
          {status === "network-error" && <span className="text-[#c98f82]">Une erreur est survenue, veuillez réessayer.</span>}
          {status === "success" && <span className="inline-flex items-center gap-1 text-[#134c1f]"><Check className="h-3.5 w-3.5" /> Merci, vous êtes inscrit.</span>}
        </p>
      </form>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="group relative inline-flex w-fit items-center gap-1 text-xs leading-6 lg:text-[15px] lg:leading-7 text-[#272b2d] transition-colors hover:text-[#134c1f] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#134c1f] after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full">{children}<ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" /></Link>
}

export default function Footer({ hideMobileMap = false }: { hideMobileMap?: boolean }) {
  const pathname = usePathname()
  const shouldHideMobileMap = hideMobileMap && pathname === "/contact"
  const shouldHideDesktopPanel = ["/inspirations", "/offers", "/contact", "/all-products"].includes(pathname)

  return (
    <footer className="w-full overflow-hidden bg-black text-white">
      <div className="w-full pb-3 pt-0 sm:pb-4 lg:pb-4">
        <div className="grid w-full items-stretch gap-px bg-[#d4d0c6] lg:min-h-[415px] lg:grid-cols-[1.02fr_1.02fr_1fr_1.02fr]">
          <section className="relative hidden min-h-[280px] min-w-0 flex-col items-center justify-center overflow-hidden bg-[#e9e5dc] p-6 sm:p-8 lg:flex lg:min-h-[415px] lg:p-10">
            <img src={footerBackgroundImage} alt="Illustration vintage d’un fauteuil Rendi Shop" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="relative z-10 mx-auto max-w-[18rem] text-center text-[#272b2d] drop-shadow-[0_1px_1px_rgba(244,241,233,0.7)]">
              <p className="font-[family-name:var(--font-great-vibes)] text-5xl font-normal leading-none text-[#08220e] [text-shadow:1px_0_0_#fff,-1px_0_0_#fff,0_1px_0_#fff,0_-1px_0_#fff]">Rendi Shop</p>
            </div>
            <p className="absolute bottom-5 left-1/2 z-10 w-[calc(100%-3rem)] max-w-[18rem] -translate-x-1/2 text-center text-xs leading-5 text-[#454844] sm:bottom-7">Des meubles inspirants pour des intérieurs qui vous ressemblent.</p>
          </section>

          <section className="hidden min-w-0 bg-[#08220e] lg:block">
            <NewArrivalsForm />
          </section>

          <section className="order-1 min-w-0 bg-[#f4f1e9] px-4 py-5 sm:px-8 sm:py-8 lg:order-none lg:px-8 lg:py-9">
            <h3 className="relative mb-3 w-fit text-xs font-semibold uppercase tracking-[0.16em] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-5 after:bg-[#134c1f]">Explorer</h3>
            <nav className="flex flex-col">
              <FooterLink href="/all-products">Tous les produits</FooterLink>
              <FooterLink href="/offers">Offres & promotions</FooterLink>
              <FooterLink href="/rooms">Collections</FooterLink>
              <FooterLink href="/inspirations">Inspirations</FooterLink>
            </nav>
            <div className="mt-5 hidden overflow-hidden border border-[#c7c3b9] bg-[#ddd9cf] lg:block">
              <iframe title="Rendi Shop sur Google Maps" src={footerMapEmbed} className="h-28 w-full grayscale" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
            </div>
          </section>

          <section className="min-w-0 bg-black px-6 py-7 text-white sm:px-8 sm:py-8 lg:px-8 lg:py-9">
            <h3 className="relative mb-3 w-fit text-sm font-semibold uppercase tracking-[0.16em] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-5 after:bg-[#134c1f]">Rendi Shop</h3>
            <nav className="flex flex-col">
              <FooterLink href="/about">Notre histoire</FooterLink>
              <FooterLink href="/contact">Nous trouver</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/faq">Aide & conseils</FooterLink>
            </nav>
            <h3 className="relative mb-3 mt-7 w-fit text-sm font-semibold uppercase tracking-[0.16em] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-5 after:bg-[#134c1f]">Assistance</h3>
            <nav className="flex flex-col"><FooterLink href="/contact">Livraison & retours</FooterLink><FooterLink href="/contact">Service client</FooterLink></nav>
            <div className="mt-6 flex gap-4 text-[#134c1f]">
              <Link href="https://facebook.com/profile.php?id=100063996253630" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook className="h-5 w-5" /></Link>
              <Link href="https://instagram.com/rendi_shop_dz" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="h-5 w-5" /></Link>
              <Link href="https://youtube.com/channel/UCwzQlW9G9jvJeYrNBjX-rbA" target="_blank" rel="noreferrer" aria-label="TikTok"><Youtube className="h-5 w-5" /></Link>
            </div>
          </section>
        </div>

        <div className={`order-2 overflow-hidden border-y border-[#c7c3b9] bg-[#ddd9cf] lg:hidden ${shouldHideMobileMap ? "hidden" : "block"}`}>
          <iframe title="Rendi Shop sur Google Maps" src={footerMapEmbed} className="h-40 w-full grayscale" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
        </div>

        <div className="mx-auto mt-0 flex max-w-5xl flex-col items-center justify-center gap-3 pt-4 text-center text-xs text-white sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left">
          <p>© 2026 Rendi Shop. Tous droits réservés.</p>
          <div className="flex gap-5"><Link href="/terms" className="hover:text-[#134c1f]">Conditions</Link><Link href="/privacy" className="hover:text-[#134c1f]">Confidentialité</Link><Link href="/cookies" className="hover:text-[#134c1f]">Cookies</Link></div>
        </div>
      </div>
    </footer>
  )
}
