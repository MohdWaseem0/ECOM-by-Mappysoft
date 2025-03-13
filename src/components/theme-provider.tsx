"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
      
      <style jsx global>{`
        html.light-theme-transitioning *,
        html.dark-theme-transitioning * {
          transition-property: background-color, border-color, color, fill, stroke !important;
          transition-duration: 300ms !important;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        body {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </NextThemesProvider>
  )
} 