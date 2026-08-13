import LuxuryHeader from "@/components/luxury-header"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { allProducts } from "@/lib/products"

export default function InspirationsPage() {
  const inspirations = allProducts

  return (
    <main className="min-h-screen bg-white">
      <LuxuryHeader />
      <Header />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .inspiration-card {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .inspiration-card:nth-child(1) { animation-delay: 0.1s; }
        .inspiration-card:nth-child(2) { animation-delay: 0.2s; }
        .inspiration-card:nth-child(3) { animation-delay: 0.3s; }
        .inspiration-card:nth-child(4) { animation-delay: 0.4s; }
        .inspiration-card:nth-child(5) { animation-delay: 0.5s; }
        .inspiration-card:nth-child(6) { animation-delay: 0.6s; }

        .inspiration-card:hover .inspiration-image {
          transform: scale(1.1);
          filter: brightness(1.15);
        }
      `}</style>

      {/* Hero Section */}
      <div className="pt-32 md:pt-48 pb-16 md:pb-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-xl md:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            Get <span className="text-[#0B5DA0]">Inspired</span> by Design
          </h1>
          <p className="text-xs md:text-lg text-gray-700 max-w-2xl mx-auto font-light">
            Explore design styles and interior trends that will transform your living spaces into expressions of your personal style.
          </p>
        </div>
      </div>

      {/* Inspirations Grid */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {inspirations.map((item, idx) => (
              <div
                key={item.id}
                className="inspiration-card group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-44 md:h-80 overflow-hidden bg-gray-300">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="inspiration-image w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="p-3 md:p-6 bg-white">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                  <div className="text-sm font-semibold text-[#0B5DA0] mb-4">{item.price}</div>

                  <Link href={`/product/${item.id}`}>
                    <button className="w-full border border-[#0B5DA0] text-[#0B5DA0] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#0B5DA0] hover:text-white transition-all duration-300">
                      Explore Style
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Tips Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 text-center mb-12">
            Design Tips & Ideas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-3">Mix & Match Styles</h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Don't be afraid to combine different design aesthetics. Mixing modern with vintage or bohemian with minimalist creates a unique, personalized space.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-3">Focus on Proportion</h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Balance is key in interior design. Mix large statement pieces with smaller decorative items to create visual harmony in your space.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-3">Lighting Matters</h3>
              <p className="text-gray-700 leading-relaxed font-light">
                The right lighting can completely transform a space. Layer different light sources to create ambiance and highlight your favorite pieces.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-3">Quality Over Quantity</h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Invest in fewer, high-quality pieces that will last. Timeless furniture is more valuable than trendy items that quickly become dated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#2a2a2a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
            Ready to Redesign Your Space?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
            Find the perfect pieces from our collection or consult with our design experts.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/all-products">
              <button className="bg-[#0B5DA0] hover:bg-[#061632] text-white px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                Browse Collection
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-3 font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
