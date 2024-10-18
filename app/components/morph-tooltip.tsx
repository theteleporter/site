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
        animation: 'morphIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      });
    } else {
      setAnimationStyles({
        animation: 'morphOut 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      });
    }
  }, [visible]);

  return (
    <Tooltip.Provider delayDuration={0}>
      <style jsx global>{`
        @keyframes morphIn {
          0% { transform: scale(0.1) translateY(-10px); opacity: 0; border-radius: 50%; }
          20% { transform: scale(0.3) translateY(-8px); opacity: 0.2; border-radius: 40%; }
          40% { transform: scale(0.5) translateY(-6px); opacity: 0.4; border-radius: 30%; }
          60% { transform: scale(0.7) translateY(-4px); opacity: 0.6; border-radius: 20%; }
          80% { transform: scale(0.9) translateY(-2px); opacity: 0.8; border-radius: 10%; }
          100% { transform: scale(1) translateY(0); opacity: 1; border-radius: 6px; }
        }
        @keyframes morphOut {
          0% { transform: scale(1) translateY(0); opacity: 1; border-radius: 6px; }
          20% { transform: scale(0.9) translateY(2px); opacity: 0.8; border-radius: 10%; }
          40% { transform: scale(0.7) translateY(4px); opacity: 0.6; border-radius: 20%; }
          60% { transform: scale(0.5) translateY(6px); opacity: 0.4; border-radius: 30%; }
          80% { transform: scale(0.3) translateY(8px); opacity: 0.2; border-radius: 40%; }
          100% { transform: scale(0.1) translateY(10px); opacity: 0; border-radius: 50%; }
        }
      `}</style>
      <Tooltip.Root open={visible}>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content sideOffset={5}>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#000000',
                padding: '6px 10px',
                fontSize: '11px',
                fontWeight: '500',
                borderRadius: '7px',
                boxShadow: '0 2px 10px rgba(255, 255, 255, 0.2)',
                transformOrigin: 'bottom center',
                ...animationStyles,
              }}
            >
              {content}
            </div>
            <Tooltip.Arrow 
              style={{
                fill: 'rgba(255, 255, 255, 0.9)',
              }}
            />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default MorphTooltip;
