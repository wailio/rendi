"use client"

import { useReveal } from "@/hooks/useReveal"

export function Reveal({ children, variant = "fade", delay = 0, className = "" }) {
  const { ref, isVisible } = useReveal()
  const base = "transition-all duration-700 ease-out"
  const hidden = variant === "pop" ? "opacity-0 translate-y-7 scale-95" : "opacity-0 translate-y-6"
  const shown = "opacity-100 translate-y-0 scale-100"

  return (
    <div
      ref={ref}
      className={`${base} ${isVisible ? shown : hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
