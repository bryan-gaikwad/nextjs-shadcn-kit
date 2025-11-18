'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Search, File, Hash, Loader2 } from 'lucide-react'
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

export function SearchDialog({ open, onOpenChange }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Debounced search function
  const debouncedSearch = useCallback(
    async (query) => {
      if (!query || query.trim().length < 2) {
        setSearchResults([])
        setIsLoading(false)
        return
      }

      setIsLoading(true)
      
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        const data = await response.json()
        
        if (response.ok) {
          setSearchResults(data.results || [])
        } else {
          console.error('Search API error:', data.error)
          setSearchResults([])
        }
      } catch (error) {
        console.error('Search error:', error)
        setSearchResults([])
      } finally {
        setIsLoading(false)
      }
    },
    []
  )

  // Debounce the search
  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedSearch(searchTerm)
    }, 500) // Increased from 300ms to 500ms for better UX

    return () => clearTimeout(timer)
  }, [searchTerm, debouncedSearch])

  const handleSelect = (url) => {
    router.push(url)
    onOpenChange(false)
    setSearchTerm('')
    setSearchResults([])
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

  // Group results by type
  const groupedResults = useMemo(() => {
    if (!Array.isArray(searchResults) || searchResults.length === 0) {
      return { pages: [], headings: [] }
    }
    
    const pages = searchResults.filter(item => item.type === 'page')
    const headings = searchResults.filter(item => item.type === 'heading')
    
    return { pages, headings }
  }, [searchResults])

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput 
        placeholder="Search documentation..." 
        value={searchTerm}
        onValueChange={setSearchTerm}
      />
      <CommandList>
        {isLoading && (
          <div className="flex items-center justify-center py-6">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="ml-2 text-sm text-muted-foreground">Searching...</span>
          </div>
        )}
        
        {!isLoading && searchTerm && searchResults.length === 0 && (
          <CommandEmpty>No results found.</CommandEmpty>
        )}
        
        {!isLoading && groupedResults.pages.length > 0 && (
          <CommandGroup heading="Pages">
            {groupedResults.pages.map((item) => {
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
                    <span className="font-medium">
                      {highlightText(item.title, searchTerm)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {highlightText(item.description, searchTerm)}
                    </span>
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

        {!isLoading && groupedResults.headings.length > 0 && (
          <CommandGroup heading="Sections">
            {groupedResults.headings.map((item) => {
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
                    <span className="font-medium">
                      {highlightText(item.title, searchTerm)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {highlightText(item.description, searchTerm)}
                    </span>
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
      </CommandList>
    </CommandDialog>
  )
}