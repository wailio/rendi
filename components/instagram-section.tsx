'use client'

import Link from 'next/link'
import { useEffect } from 'react'

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
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-sm md:text-4xl font-serif font-bold mb-2">
            NOUS SUIVRE SUR INSTAGRAM{' '}
            <span className="italic">
              <Link 
                href="https://www.instagram.com/raismeuble/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity text-[#9AAAC1]"
              >
                @raismeuble
              </Link>
            </span>
          </h2>
        </div>

        {/* Elfsight Instagram Feed */}
        <div className="flex justify-center mb-8">
          <div className="elfsight-app-251f5212-7a9a-4935-8bf9-44c9eb7f82c5" data-elfsight-app-lazy></div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="https://www.instagram.com/raismeuble/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#9AAAC1] text-white px-8 py-3 font-serif uppercase text-sm tracking-widest hover:bg-[#9AAAC1] hover:text-white transition-all duration-300"
          >
            Nous Suivre
          </Link>
        </div>
      </div>
    </section>
  )
}
