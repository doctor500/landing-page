'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

/**
 * Theme Provider Component
 * 
 * Provides theme context for dark/light mode switching
 * Features:
 * - Automatic system preference detection
 * - localStorage persistence
 * - No flash on page load
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
