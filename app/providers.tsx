"use client"

import * as React from "react"
import { ThemeProvider as NextThemeProvider } from "next-themes"

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
}

export function ThemeProvider(
  children,
  ...props
) {
  return (
    <NextThemeProvider {...props}>
      {children}
    </NextThemeProvider>
  )
}