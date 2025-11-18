'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Search, File, Hash, Settings, User, Home, BarChart3, Package, Users, DollarSign } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

// Helper function to highlight search terms in text
function highlightText(text, searchTerm) {
  if (!text || !searchTerm) return text
  
  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  const parts = text.split(regex)
  
  return parts.map((part, index) => {
    if (regex.test(part)) {
      return (
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-900 px-0.5 rounded">
          {part}
        </mark>
      )
    }
    return part
  })
}

// Helper function to extract and highlight snippet from content
function getHighlightedSnippet(content, searchTerm, maxLength = 120) {
  if (!content || !searchTerm) return ''
  
  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  const match = content.match(regex)
  
  if (!match) return ''
  
  const matchIndex = content.toLowerCase().indexOf(searchTerm.toLowerCase())
  if (matchIndex === -1) return ''
  
  // Extract snippet around the match
  const start = Math.max(0, matchIndex - 50)
  const end = Math.min(content.length, matchIndex + searchTerm.length + 50)
  let snippet = content.slice(start, end)
  
  // Clean up snippet boundaries
  if (start > 0) snippet = '...' + snippet
  if (end < content.length) snippet = snippet + '...'
  
  // Truncate if too long
  if (snippet.length > maxLength) {
    snippet = snippet.slice(0, maxLength) + '...'
  }
  
  // Highlight the search term in the snippet
  return highlightText(snippet, searchTerm)
}

// Dashboard navigation items for search
const dashboardItems = [
  {
    id: 'dashboard-home',
    title: 'Dashboard',
    description: 'Main dashboard overview',
    url: '/dashboard',
    type: 'dashboard',
    icon: Home
  },
  {
    id: 'dashboard-analytics',
    title: 'Analytics',
    description: 'View analytics and reports',
    url: '/dashboard/analytics',
    type: 'dashboard',
    icon: BarChart3
  },
  {
    id: 'dashboard-products',
    title: 'Products',
    description: 'Manage products',
    url: '/dashboard/products',
    type: 'dashboard',
    icon: Package
  },
  {
    id: 'dashboard-customers',
    title: 'Customers',
    description: 'Manage customers',
    url: '/dashboard/customers',
    type: 'dashboard',
    icon: Users
  },
  {
    id: 'dashboard-sales',
    title: 'Sales',
    description: 'View sales data',
    url: '/dashboard/sales',
    type: 'dashboard',
    icon: DollarSign
  },
  {
    id: 'dashboard-settings',
    title: 'Settings',
    description: 'Dashboard settings',
    url: '/dashboard/settings',
    type: 'dashboard',
    icon: Settings
  }
]

export function GlobalSearchDialog({ open, onOpenChange }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [docsResults, setDocsResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Debounced search function for docs
  const debouncedDocsSearch = useCallback(
    async (query) => {
      if (!query || query.trim().length < 2) {
        setDocsResults([])
        setIsLoading(false)
        return
      }

      setIsLoading(true)
      
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        const data = await response.json()
        
        if (response.ok) {
          setDocsResults(data.results || [])
        } else {
          console.error('Search API error:', data.error)
          setDocsResults([])
        }
      } catch (error) {
        console.error('Docs search error:', error)
        setDocsResults([])
      } finally {
        setIsLoading(false)
      }
    },
    []
  )

  // Debounce the search
  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedDocsSearch(searchTerm)
    }, 500) // Increased from 300ms to 500ms for better UX

    return () => clearTimeout(timer)
  }, [searchTerm, debouncedDocsSearch])

  // Filter dashboard items based on search term
  const filteredDashboardItems = useMemo(() => {
    if (!searchTerm || searchTerm.trim().length < 2) {
      return dashboardItems.slice(0, 4) // Show first 4 items when no search or query too short
    }
    
    return dashboardItems.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  const handleSelect = (url) => {
    router.push(url)
    onOpenChange(false)
    setSearchTerm('')
    setDocsResults([])
  }

  // Handle keyboard shortcut
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(true)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [onOpenChange])

  // Group docs results by type
  const groupedDocsResults = useMemo(() => {
    const pages = docsResults.filter(item => item.type === 'page')
    const headings = docsResults.filter(item => item.type === 'heading')
    
    return { pages, headings }
  }, [docsResults])

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput 
        placeholder="Search dashboard and docs..." 
        value={searchTerm}
        onValueChange={setSearchTerm}
      />
      <CommandList>
        {!searchTerm && (
          <CommandEmpty>Type at least 2 characters to search dashboard and documentation...</CommandEmpty>
        )}
        
        {searchTerm && searchTerm.length < 2 && (
          <CommandEmpty>Type at least 2 characters to search...</CommandEmpty>
        )}
        
        {searchTerm && searchTerm.length >= 2 && filteredDashboardItems.length === 0 && docsResults.length === 0 && !isLoading && (
          <CommandEmpty>No results found for "{searchTerm}"</CommandEmpty>
        )}
        
        {/* Dashboard Items */}
        {filteredDashboardItems.length > 0 && (
          <CommandGroup heading="Dashboard">
            {filteredDashboardItems.map((item) => {
              const IconComponent = item.icon
              return (
                <CommandItem
                  key={item.id}
                  value={`${item.title} ${item.description}`}
                  onSelect={() => handleSelect(item.url)}
                  className="flex items-center gap-2 px-4 py-3"
                >
                  <IconComponent className="h-4 w-4 text-muted-foreground" />
                  <div className="flex flex-col">
                    <span className="font-medium">{highlightText(item.title, searchTerm)}</span>
                    <span className="text-sm text-muted-foreground">{highlightText(item.description, searchTerm)}</span>
                  </div>
                </CommandItem>
              )
            })}
          </CommandGroup>
        )}
        
        {/* Documentation Pages */}
        {groupedDocsResults.pages.length > 0 && (
          <CommandGroup heading="Documentation">
            {groupedDocsResults.pages.map((item) => {
              // Check if search term is in title or description
              const titleHasMatch = item.title?.toLowerCase().includes(searchTerm.toLowerCase())
              const descHasMatch = item.description?.toLowerCase().includes(searchTerm.toLowerCase())
              const showSnippet = !titleHasMatch && !descHasMatch && item.content
              
              return (
                <CommandItem
                  key={item.id}
                  value={`${item.title} ${item.description} ${item.content}`}
                  onSelect={() => handleSelect(item.url)}
                  className="flex items-center gap-2 px-4 py-3"
                >
                  <File className="h-4 w-4 text-muted-foreground" />
                  <div className="flex flex-col">
                    <span className="font-medium">{highlightText(item.title, searchTerm)}</span>
                    <span className="text-sm text-muted-foreground">{highlightText(item.description, searchTerm)}</span>
                    {showSnippet && (
                      <span className="text-xs text-muted-foreground mt-1 italic">
                        {getHighlightedSnippet(item.content, searchTerm)}
                      </span>
                    )}
                  </div>
                </CommandItem>
              )
            })}
          </CommandGroup>
        )}
        
        {/* Documentation Sections */}
        {groupedDocsResults.headings.length > 0 && (
          <CommandGroup heading="Doc Sections">
            {groupedDocsResults.headings.map((item) => {
              // Check if search term is in title or description
              const titleHasMatch = item.title?.toLowerCase().includes(searchTerm.toLowerCase())
              const descHasMatch = item.description?.toLowerCase().includes(searchTerm.toLowerCase())
              const showSnippet = !titleHasMatch && !descHasMatch && item.content
              
              return (
                <CommandItem
                  key={item.id}
                  value={`${item.title} ${item.description} ${item.content}`}
                  onSelect={() => handleSelect(item.url)}
                  className="flex items-center gap-2 px-4 py-3"
                >
                  <Hash className="h-4 w-4 text-muted-foreground" />
                  <div className="flex flex-col">
                    <span className="font-medium">{highlightText(item.title, searchTerm)}</span>
                    <span className="text-sm text-muted-foreground">{highlightText(item.description, searchTerm)}</span>
                    {showSnippet && (
                      <span className="text-xs text-muted-foreground mt-1 italic">
                        {getHighlightedSnippet(item.content, searchTerm)}
                      </span>
                    )}
                  </div>
                </CommandItem>
              )
            })}
          </CommandGroup>
        )}
        
        {/* Loading state */}
        {isLoading && searchTerm && (
          <div className="flex items-center justify-center py-6">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-r-transparent" />
            <span className="ml-2 text-sm text-muted-foreground">Searching docs...</span>
          </div>
        )}
      </CommandList>
    </CommandDialog>
  )
}
