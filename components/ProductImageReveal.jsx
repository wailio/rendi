"use client"

import { useEffect, useRef, useState } from "react"

export function ProductImageReveal({ src, alt }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  const panelCount = 6

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setOn(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ position: "relative", width: "100%", aspectRatio: "1/1", overflow: "hidden", borderRadius: "8px" }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: on ? "scale(1)" : "scale(1.06)",
          transition: "transform 1s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
      <div style={{ position: "absolute", inset: 0, display: "flex", zIndex: 2, pointerEvents: "none" }}>
        {Array.from({ length: panelCount }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: "#141821",
              borderRight: i < panelCount - 1 ? "1px solid #c9a24b" : "none",
              transform: on ? "translateY(-100%)" : "translateY(0)",
              transition: `transform 0.7s cubic-bezier(0.76,0,0.24,1) ${i * 70}ms`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
