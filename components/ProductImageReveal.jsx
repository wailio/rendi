"use client"

import { useEffect, useRef, useState } from "react"

export function ProductImageReveal({ src, alt }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(element)
      }
    }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden rounded-lg">
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-lg object-cover"
        style={{
          filter: isVisible ? "grayscale(0) blur(0px)" : "grayscale(1) blur(6px)",
          opacity: isVisible ? 1 : 0.85,
          transform: isVisible ? "scale(1)" : "scale(1.04)",
          transition: "filter 1.3s cubic-bezier(0.22,1,0.36,1), opacity 1.3s cubic-bezier(0.22,1,0.36,1), transform 1.3s cubic-bezier(0.22,1,0.36,1)",
        }}
      />
    </div>
  )
}
