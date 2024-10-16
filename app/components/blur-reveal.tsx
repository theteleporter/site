'use client'

import React, { useState } from 'react'

interface SpoilerProps {
  text: string;
  className: string;
  style: string;
}

export default function BlurRevealSpoiler({ text, className, style }: SpoilerProps) {
  const [isRevealed, setIsRevealed] = useState(false)

  const handleToggle = () => {
    setIsRevealed(!isRevealed)
  }

  return (
    <span
      className="relative inline-block cursor-pointer select-none rounded-sm"
      onClick={handleToggle}
    >
      <span
        className={`transition-[filter] duration-500 ease-in-out rounded-sm ${
          isRevealed ? 'blur-none' : 'blur-sm'
        }`}
        style={{
          WebkitMaskImage: isRevealed
            ? 'linear-gradient(to right, black 100%, black 100%)'
            : 'linear-gradient(to right, black 0%, transparent 100%)',
          maskImage: isRevealed
            ? 'linear-gradient(to right, black 100%, black 100%)'
            : 'linear-gradient(to right, black 0%, transparent 100%)',
          WebkitMaskSize: '200% 100%',
          maskSize: '200% 100%',
          WebkitMaskPosition: isRevealed ? 'left center' : 'right center',
          maskPosition: isRevealed ? 'left center' : 'right center',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          transition: 'all 0.5s ease-in-out',
        }}
      >
        {text}
      </span>
    </span>
  )
}
