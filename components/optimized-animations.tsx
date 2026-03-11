"use client"

import { useInView } from "react"
import { useEffect, useRef, type ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

export function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && ref.current) {
      ref.current.style.opacity = "1"
    }
  }, [isInView])

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ${className}`}
      style={{
        opacity: 0,
      }}
    >
      {children}
    </div>
  )
}

// Simple stagger container using CSS transitions
export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && ref.current) {
      ref.current.style.opacity = "1"
      ref.current.style.transform = "translateY(0)"
    }
  }, [isInView])

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ${className}`}
      style={{
        opacity: 0,
        transform: "translateY(20px)",
      }}
    >
      {children}
    </div>
  )
}

// Simple hover card
export function HoverCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`transition-transform duration-200 hover:-translate-y-1 ${className}`}>{children}</div>
}

// Simple counter without complex animations
export function AnimatedCounter({
  from,
  to,
  suffix = "",
  prefix = "",
  className = "",
}: {
  from: number
  to: number
  suffix?: string
  prefix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && ref.current) {
      let start = from
      const increment = (to - from) / 120 // 60fps * 2 seconds
      const timer = setInterval(() => {
        start += increment
        if (ref.current) {
          if (start >= to) {
            ref.current.textContent = `${prefix}${to}${suffix}`
            clearInterval(timer)
          } else {
            ref.current.textContent = `${prefix}${Math.round(start)}${suffix}`
          }
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [isInView, from, to, suffix, prefix])

  return <span className={className}>{`${prefix}${to}${suffix}`}</span>
}
