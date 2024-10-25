'use client'

import React, { useEffect, useState } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'

interface MorphTooltipProps {
  children: React.ReactNode
  content: string
  visible: boolean
}

const MorphTooltip = ({ children, content, visible }: MorphTooltipProps) => {
  const [animationStyles, setAnimationStyles] = useState({});

  useEffect(() => {
    if (visible) {
      setAnimationStyles({
        animation: 'morphIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      });
    } else {
      setAnimationStyles({
        animation: 'morphOut 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      });
    }
  }, [visible]);

  return (
    <Tooltip.Provider delayDuration={0}>
      <style jsx global>{`
        @keyframes morphIn {
          0% { transform: scale(0.8) translateY(10px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes morphOut {
          0% { transform: scale(1) translateY(0); opacity: 1; }
          100% { transform: scale(0.8) translateY(10px); opacity: 0; }
        }
        .tooltip-content {
          filter: url(#gooey);
        }
        .tooltip-arrow {
          fill: black;
          filter: url(#gooey);
        }
      `}</style>
      <svg width="0" height="0">
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey" />
          <feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
        </filter>
      </svg>
      <Tooltip.Root open={visible}>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content sideOffset={5} className="tooltip-content">
            <div
              style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '8px 12px',
                fontSize: '13px',
                fontWeight: '500',
                lineHeight: '1.4',
                borderRadius: '8px',
                transformOrigin: 'bottom center',
                ...animationStyles,
              }}
            >
              {content}
            </div>
            <Tooltip.Arrow className="tooltip-arrow" width={14} height={7} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default MorphTooltip;
