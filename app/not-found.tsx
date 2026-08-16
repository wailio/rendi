import Link from "next/link"

const armchairImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2016%20ao%C3%BBt%202026%2C%2011_43_55-aFmLhq2V2pcSc0s8OJlvrQNhMQETsI.png"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#1a1611_0%,#17130f_62%,#15120e_100%)] px-6 py-12 text-center">
      <div className="flex w-full max-w-[520px] flex-col items-center">
        <img
          src={armchairImage}
          alt="Illustration dorée d'un fauteuil"
          className="mb-8 h-auto w-full max-w-[320px] object-contain"
        />

        <h1 className="font-[family-name:var(--font-great-vibes)] text-[clamp(3.75rem,12vw,4.5rem)] font-normal leading-none text-[#d4af5f]">
          Cette pièce n&apos;existe pas
        </h1>

        <svg
          aria-hidden="true"
          viewBox="0 0 360 34"
          className="mt-5 h-7 w-[min(115%,360px)] overflow-visible"
        >
          <path
            d="M7 18 C55 5, 83 28, 128 17 S205 6, 246 18 S306 27, 353 10"
            fill="none"
            stroke="#d4af5f"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>

        <h2 className="mt-7 font-[family-name:var(--font-playfair)] text-xl font-normal leading-7 text-[#f5f2ea]">
          Page introuvable
        </h2>

        <Link
          href="/"
          className="mt-5 inline-flex min-h-12 items-center justify-center rounded-[2px] border border-[#d4af5f] px-8 py-[13px] font-serif text-xs font-normal uppercase tracking-[3px] text-[#d4af5f] transition-colors hover:bg-[#d4af5f] hover:text-[#081016] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af5f]"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  )
}
