'use client'

import React, { useState } from 'react'
import MorphTooltip from 'app/components/morph-tooltip'

interface SpoilerProps {
  text: string
  className?: string
  style?: React.CSSProperties
  showTooltip?: boolean
}

export default function BlurRevealSpoiler({ text, className = '', style = {}, showTooltip = true }: SpoilerProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(showTooltip);

  const handleToggle = () => {
    setIsRevealed(!isRevealed);
  };

  const handleMouseEnter = () => {
    setTooltipVisible(false);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(showTooltip);
  };

  return (
    <MorphTooltip content={isRevealed ? "Click to hide" : "Click to reveal"} visible={tooltipVisible}>
      <span
        className={`relative inline-block cursor-pointer select-none rounded-md ${className}`}
        onClick={handleToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          ...style,
          backgroundColor: isRevealed ? 'transparent' : 'rgba(255, 255, 255, 0.1)',
          padding: '2px 6px',
          transition: 'background-color 0.3s ease',
        }}
      >
        <span
          className={`transition-[filter] duration-300 ease-in-out ${
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
            transition: 'all 0.3s ease-in-out',
          }}
        >
          {text}
        </span>
      </span>
    </MorphTooltip>
  );
}
