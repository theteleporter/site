'use client';

import { motion, useAnimation, Variants } from 'framer-motion';

const pathVariants: Variants = {
  normal: { opacity: 1 },
  animate: (i: number) => ({
    opacity: [0, 1],
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const MoonIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 12.21 4a7 7 0 0 0 0 15 8.94 8.94 0 0 0 8.79-6.21A5.97 5.97 0 0 1 21 12.79z" />
      </svg>
    </div>
  );
};

export { MoonIcon };