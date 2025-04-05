"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  size?: "small" | "medium" | "large"
  showImage?: boolean
  className?: string
}

export default function Logo({ size = "medium", showImage = true, className = "" }: LogoProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const fontSizes = {
    small: "text-xl",
    medium: "text-2xl",
    large: "text-4xl",
  }

  const imageSize = {
    small: 30,
    medium: 50,
    large: 80,
  }

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      {showImage && (
        <div className="relative mr-3">
          <Image
            src="/images/logo.png"
            alt="Catan Coffee"
            width={imageSize[size]}
            height={imageSize[size]}
            className="object-contain"
          />
        </div>
      )}
      <div className="flex flex-col">
        <span className={`font-serif italic ${fontSizes[size]} font-light tracking-wider`}>Catan</span>
        <span className={`${fontSizes[size]} font-bold tracking-[0.2em] leading-none`}>COFFEE</span>
      </div>
    </Link>
  )
}

