"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type MobileRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function MobileReveal({ children, className, delay = 0 }: MobileRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const desktopQuery = window.matchMedia("(min-width: 768px)")
    if (desktopQuery.matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "max-md:transition-all max-md:duration-700 max-md:ease-out",
        visible
          ? "max-md:translate-y-0 max-md:opacity-100"
          : "max-md:translate-y-8 max-md:opacity-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
