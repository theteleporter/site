"use client"

import * as React from "react"
import { useTheme } from "next-themes"

// Adjusted icon components
const SystemIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2zm10 12h-4v-1h4v1z"/>
  </svg>
)

const SunIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="4" />
    <path d="M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162z"/>
  </svg>
)

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = React.useState(resolvedTheme)

  // Update the local state whenever resolvedTheme changes
  React.useEffect(() => {
    setCurrentTheme(resolvedTheme)
  }, [resolvedTheme])

  return (
    <div className="inline-flex rounded-full dark:bg-[#1a1a1a] p-0 border dark:border-[#6F6F6F] bg-[#F7F7F7] border-[#6F6F6F]">
      <div className="flex">
        <button
          onClick={() => setTheme("system")}
          className={`rounded-full p-1 cursor-pointer transition-colors ${
            currentTheme === "system"
              ? "dark:text-white text-[#707070] dark:bg-[#333] border dark:border-[#6F6F6F] bg-[#ECECEC] border-[#6F6F6F]"
              : "text-[#8C8C8C] border border-transparent dark:hover:text-white hover:text-[#4A4A4A]"
          }`}
          aria-label="Use system theme"
        >
          <SystemIcon />
        </button>
        <button
          onClick={() => setTheme("light")}
          className={`rounded-full p-1 cursor-pointer transition-colors ${
            currentTheme === "light"
              ? "dark:text-white text-[#707070] dark:bg-[#333] border dark:border-[#6F6F6F] bg-[#ECECEC] border-[#6F6F6F]"
              : "text-[#8C8C8C] border border-transparent dark:hover:text-white hover:text-[#4A4A4A]"
          }`}
          aria-label="Use light theme"
        >
          <SunIcon />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`rounded-full p-1 cursor-pointer transition-colors ${
            currentTheme === "dark"
              ? "dark:text-white text-[#707070] dark:bg-[#333] border dark:border-[#6F6F6F] bg-[#ECECEC] border-[#6F6F6F]"
              : "text-[#8C8C8C] border border-transparent dark:hover:text-white hover:text-[#4A4A4A]"
          }`}
          aria-label="Use dark theme"
        >
          <MoonIcon />
        </button>
      </div>
    </div>
  )
}