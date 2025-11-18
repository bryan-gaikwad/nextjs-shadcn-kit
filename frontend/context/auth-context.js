"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check for existing auth state on mount
    const checkAuth = () => {
      try {
        const authData = localStorage.getItem('auth')
        if (authData) {
          const parsed = JSON.parse(authData)
          const isExpired = Date.now() - parsed.timestamp > 24 * 60 * 60 * 1000 // 24 hours
          
          if (!isExpired && parsed.isAuthenticated) {
            setIsAuthenticated(true)
            setUser({ email: parsed.email })
          } else {
            // Clear expired auth
            localStorage.removeItem('auth')
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error)
        localStorage.removeItem('auth')
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const login = (email) => {
    const authData = {
      email,
      isAuthenticated: true,
      timestamp: Date.now()
    }
    localStorage.setItem('auth', JSON.stringify(authData))
    setIsAuthenticated(true)
    setUser({ email })
  }

  const logout = () => {
    localStorage.removeItem('auth')
    setIsAuthenticated(false)
    setUser(null)
    router.push('/auth')
  }

  // Redirect logic
  useEffect(() => {
    if (isLoading) return

    const isAuthPage = pathname === '/auth' || pathname === '/auth/signup'
    const isPublicPage = isAuthPage

    if (!isAuthenticated && !isPublicPage) {
      router.push('/auth')
    } else if (isAuthenticated && isAuthPage) {
      router.push('/')
    } else if (isAuthenticated && pathname === '/dashboard') {
      // Redirect old dashboard route to home
      router.push('/')
    }
  }, [isAuthenticated, isLoading, pathname, router])

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      user,
      login,
      logout,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
