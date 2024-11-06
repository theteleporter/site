"use client"

import * as React from "react"
import { useTheme } from "next-themes"

// Extracted and cleaned up SVG icons from the provided file
const SystemIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M192.888397,277.086365 C190.713425,267.846344 186.340637,263.666840 177.671478,263.515259 C165.346741,263.299713 153.007736,263.264404 140.687668,263.610077 C130.162308,263.905365 125.053177,269.541199 125.018349,280.141571 C124.961967,297.302917 124.999565,314.464539 124.997589,331.626068 C124.997292,334.246094 124.997551,336.866150 124.997551,339.689362 C147.890396,339.689362 170.265152,339.689362 192.940979,339.689362 C192.940979,318.908356 192.940979,298.444855 192.888397,277.086365z" />
  </svg>
)

const SunIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M391.283936,306.492188 C389.782318,319.710358 380.963165,329.770050 368.529236,332.773773 C356.772491,335.613892 343.942963,330.542084 337.184784,320.382538 C330.461273,310.275116 330.595459,296.164001 337.506226,286.575623 C345.213379,275.882324 358.745819,271.668243 371.687286,275.856140 C381.900299,279.161102 392.529388,290.449097 391.283936,306.492188z" />
  </svg>
)

const MoonIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M589.873840,346.930847 C573.467712,354.693695 557.576233,354.732178 541.927612,345.843201 C518.713196,332.656464 511.042480,301.052795 525.297546,278.565521 C530.915039,269.703979 538.124207,263.018677 547.834534,259.155640 C548.984070,258.698334 550.988525,259.086365 552.017273,259.856476 C556.303833,263.065063 558.212219,266.500366 557.019348,272.811768 C552.326050,297.642365 575.631897,319.259705 600.226196,313.262329z" />
  </svg>
)

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: 'class' | 'data-theme'
  defaultTheme?: string
  enableSystem?: boolean
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <div className="next-themes-provider" {...props}>
      {children}
    </div>
  )
}

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="inline-flex rounded-full bg-[#000000] p-[2px]">
      <div className="flex gap-[2px]">
        <button
          onClick={() => setTheme("system")}
          className={`rounded-full p-2 transition-colors ${
            theme === "system" ? "text-white" : "text-[#8C8C8C] hover:text-white"
          }`}
          aria-label="Use system theme"
        >
          <SystemIcon />
        </button>
        <button
          onClick={() => setTheme("light")}
          className={`rounded-full p-2 transition-colors ${
            theme === "light" ? "text-white" : "text-[#8C8C8C] hover:text-white"
          }`}
          aria-label="Use light theme"
        >
          <SunIcon />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`rounded-full p-2 transition-colors ${
            theme === "dark" ? "text-white" : "text-[#8C8C8C] hover:text-white"
          }`}
          aria-label="Use dark theme"
        >
          <MoonIcon />
        </button>
      </div>
    </div>
  )
}