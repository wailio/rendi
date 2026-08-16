"use client"

import { useReveal } from "@/hooks/useReveal"

export function Reveal({ children, delay = 0, className = "", variant: _variant = undefined }) {
  const { ref, isVisible } = useReveal()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
