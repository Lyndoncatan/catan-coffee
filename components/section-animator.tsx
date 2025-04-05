"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export default function SectionAnimator({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            entry.target.classList.remove("hidden")
          } else {
            entry.target.classList.remove("visible")
            entry.target.classList.add("hidden")
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className={`section-animate hidden ${className}`}>
      {children}
    </div>
  )
}

