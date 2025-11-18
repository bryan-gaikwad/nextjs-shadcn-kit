'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { themes, defaultTheme } from '@/config/themes'
import { appConfig } from '@/config/app'

const ThemeContext = createContext({
  theme: defaultTheme,
  mode: 'system',
  setTheme: () => null,
  setMode: () => null,
  applyTheme: () => null,
})

export function useTheme() {
  const context = useContext(ThemeContext)
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  
  return context
}

export function ThemeProvider({
  children,
  defaultTheme: propDefaultTheme = appConfig.theme.defaultTheme,
  defaultMode = appConfig.theme.defaultMode,
  storageKey = 'skeletor-theme',
  ...props
}) {
  const [theme, setTheme] = useState(propDefaultTheme)
  const [mode, setMode] = useState(defaultMode)

  // Apply theme immediately on mount
  useEffect(() => {
    applyTheme(theme, mode)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && appConfig.theme.rememberPreference) {
      // Load saved preferences
      const savedTheme = localStorage.getItem(`${storageKey}-name`)
      const savedMode = localStorage.getItem(`${storageKey}-mode`)
      
      if (savedTheme && themes[savedTheme]) {
        setTheme(savedTheme)
      }
      
      if (savedMode && ['light', 'dark', 'system'].includes(savedMode)) {
        setMode(savedMode)
      }
    }
  }, [storageKey])

  const applyTheme = React.useCallback((themeName, themeMode) => {
    if (typeof window === 'undefined') return

    const root = window.document.documentElement
    const currentTheme = themes[themeName] || themes[defaultTheme]
    
    // Determine the actual mode to apply
    let actualMode = themeMode
    if (themeMode === 'system') {
      actualMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    // Remove existing theme classes
    root.classList.remove('light', 'dark')
    
    // Apply new theme class
    root.classList.add(actualMode)
    
    // Apply CSS custom properties including font variables
    const colors = currentTheme.colors[actualMode]
    if (colors) {
      Object.entries(colors).forEach(([key, value]) => {
        root.style.setProperty(key, value)
      })
    }

    // Force a reflow to ensure font changes are applied immediately
    document.body.offsetHeight
  }, [themes])

  const changeTheme = React.useCallback((newTheme) => {
    if (!themes[newTheme]) return
    
    setTheme(newTheme)
    applyTheme(newTheme, mode)
    
    if (appConfig.theme.rememberPreference) {
      localStorage.setItem(`${storageKey}-name`, newTheme)
    }
  }, [mode, applyTheme, storageKey])

  const changeMode = React.useCallback((newMode) => {
    if (!['light', 'dark', 'system'].includes(newMode)) return
    
    setMode(newMode)
    applyTheme(theme, newMode)
    
    if (appConfig.theme.rememberPreference) {
      localStorage.setItem(`${storageKey}-mode`, newMode)
    }
  }, [theme, applyTheme, storageKey])

  // Apply theme when theme or mode changes
  useEffect(() => {
    applyTheme(theme, mode)
  }, [theme, mode, applyTheme])

  // Listen for system theme changes
  useEffect(() => {
    if (mode !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = () => {
      applyTheme(theme, mode)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme, mode, applyTheme])

  const value = {
    theme,
    mode,
    setTheme: changeTheme,
    setMode: changeMode,
    applyTheme,
    themes,
    availableThemes: Object.keys(themes),
    currentThemeData: themes[theme] || themes[defaultTheme],
  }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
