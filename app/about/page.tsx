import LuxuryHeader from "@/components/luxury-header"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <LuxuryHeader />
      <Header />

      {/* Hero Section */}
      <section className="pt-48 pb-16 px-6 md:px-12 bg-gradient-to-b from-[#2a2a2a] to-[#1f1f1f]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-xl md:text-4xl font-serif font-bold text-white mb-6">
            À Propos Rais Meuble
          </h1>
          <p className="text-xs md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Nous nous consacrons à apporter le luxe et l&apos;élégance à votre maison grâce à des collections de mobilier minutieusement sélectionnées qui allient design intemporel et confort moderne.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#1f1f1f]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">Notre Mission</h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 font-light">
                Chez Rais Meuble, nous croyons que votre maison doit refléter votre style personnel et vos valeurs. Notre mission est de fournir des meubles exceptionnels qui transforment les espaces en havres de confort et d&apos;élégance.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                Nous travaillons avec les meilleurs artisans et fournisseurs pour garantir que chaque pièce de notre collection répond à nos normes rigoureuses en matière de qualité, de conception et de durabilité.
              </p>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Ik6kS6vRPmOFU4gcSF7z0UhAZDGShz.jpg"
                alt="Our Mission"
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#2a2a2a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-12 text-center">Nos Valeurs Fondamentales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="p-8 bg-[#1f1f1f] rounded-lg border-l-4 border-[#0B5DA0] hover:shadow-lg transition-all duration-300 hover:border-[#1E90FF]">
              <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Nous poursuivons l&apos;excellence dans chaque détail, de la conceptualisation du design à la livraison finale. La qualité n&apos;est jamais compromise.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-8 bg-[#1f1f1f] rounded-lg border-l-4 border-[#0B5DA0] hover:shadow-lg transition-all duration-300 hover:border-[#1E90FF]">
              <h3 className="text-xl font-semibold text-white mb-4">Authenticité</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Chaque pièce raconte une histoire. Nous croyons en un design authentique qui résiste à l&apos;épreuve du temps, sans tendances ni artifices.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-8 bg-[#1f1f1f] rounded-lg border-l-4 border-[#0B5DA0] hover:shadow-lg transition-all duration-300 hover:border-[#1E90FF]">
              <h3 className="text-xl font-semibold text-white mb-4">Service Client</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Votre satisfaction est notre priorité. Nous offrons un soutien complet avant, pendant et après votre achat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#1f1f1f]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg h-96 order-2 md:order-1 border-l-4 border-[#0B5DA0]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-YEUeqvNEaVRSsuLyvMGCwxIJjDlhDS.jpg"
                alt="Our Story"
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">Notre Histoire</h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 font-light">
                Fondée avec une vision de redéfinir le mobilier de luxe, Rais Meuble a commencé comme un projet passionné pour apporter des pièces soigneusement sélectionnées et de haute qualité aux clients discernants.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 font-light">
                Au fil des années, nous sommes devenus une destination de confiance pour le mobilier de luxe, reconnue pour notre engagement envers un design exceptionnel, un savoir-faire de qualité et un service client exceptionnel.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                Aujourd&apos;hui, nous continuons à évoluer, en recherchant constamment des innovations en matière de design tout en honorant les principes intemporels qui définissent la vie de luxe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-r from-[#2a2a2a] to-[#1f1f1f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">Prêt à Transformer Votre Espace ?</h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed font-light">
            Explorez nos collections soigneusement sélectionnées et découvrez les pièces parfaites pour élever votre maison.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/all-products">
              <Button className="bg-[#020817] hover:bg-[#00030A] text-white px-8 py-3 font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105">
                Explorer Collection
              </Button>
            </a>
            <a href="/contact">
              <Button className="border-2 border-[#020817] text-white hover:bg-[#020817] hover:text-white px-8 py-3 font-semibold cursor-pointer transition-all duration-300">
                Nous Contacter
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Spacing before footer */}
      <section className="h-24 md:h-32 bg-[#1f1f1f]"></section>
    </main>
  )
}
