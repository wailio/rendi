'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Reveal } from '@/components/Reveal'

export default function InstagramSection() {
  useEffect(() => {
    if (!document.querySelector('script[data-elfsight-platform]')) {
      const script = document.createElement('script')
      script.src = 'https://elfsightcdn.com/platform.js'
      script.async = true
      script.dataset.elfsightPlatform = 'true'
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section className="bg-black text-white py-12 md:py-16 px-4 md:px-6">
      <Reveal>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-sm md:text-4xl font-serif font-bold mb-2">
            NOUS SUIVRE SUR INSTAGRAM{' '}
            <span className="italic">
              <Link 
                href="https://www.instagram.com/rendi_shop_dz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity text-[#174f3d]"
              >
                @rendi_shop_dz
              </Link>
            </span>
          </h2>
        </div>

        {/* Elfsight Instagram Feed */}
        <div className="flex justify-center mb-8">
          <div className="elfsight-app-db7b59f6-f374-477a-944d-768556aef606" data-elfsight-app-lazy></div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="https://www.instagram.com/rendi_shop_dz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#174f3d] text-white px-8 py-3 font-serif uppercase text-sm tracking-widest hover:bg-[#174f3d] hover:text-white transition-all duration-300"
          >
            Nous Suivre
          </Link>
        </div>
      </div>
      </Reveal>
    </section>
  )
}
