"use client"

import { createContext, useContext, useState, useEffect } from 'react'
import { navConfig } from '@/config/app'

const NavigationContext = createContext({})

export function NavigationProvider({ children }) {
  // Initialize with config default, but will be overridden by localStorage if available
  const [navMode, setNavMode] = useState(navConfig.defaultMode)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load navigation preference from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && navConfig.rememberPreference) {
      const savedMode = localStorage.getItem('navigation-mode')
      const savedDefault = localStorage.getItem('navigation-default')
      
      // If config default changed, clear saved preference and use new default
      if (savedDefault !== navConfig.defaultMode) {
        localStorage.removeItem('navigation-mode')
        localStorage.setItem('navigation-default', navConfig.defaultMode)
        setNavMode(navConfig.defaultMode)
      } else if (savedMode && (savedMode === 'sidebar' || savedMode === 'topnav')) {
        setNavMode(savedMode)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save navigation preference to localStorage when it changes
  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined' && navConfig.rememberPreference) {
      localStorage.setItem('navigation-mode', navMode)
    }
  }, [navMode, isLoaded])

  const toggleNavMode = () => {
    if (navConfig.allowModeToggle) {
      setNavMode(prev => prev === 'sidebar' ? 'topnav' : 'sidebar')
    }
  }

  const setNavModeDirectly = (mode) => {
    if ((mode === 'sidebar' || mode === 'topnav') && navConfig.allowModeToggle) {
      setNavMode(mode)
    }
  }

  return (
    <NavigationContext.Provider value={{
      navMode,
      setNavMode: setNavModeDirectly,
      toggleNavMode,
      isSidebarMode: navMode === 'sidebar',
      isTopNavMode: navMode === 'topnav',
      canToggle: navConfig.allowModeToggle,
      showToggleButton: navConfig.showToggleButton,
      isLoaded,
    }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}
