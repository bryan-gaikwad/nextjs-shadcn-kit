'use client'

import { useState, createContext, useContext } from 'react'
import { SearchDialog } from '@/components/docs/search-dialog'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

const SearchContext = createContext()

export function SearchProvider({ children }) {
  const [searchOpen, setSearchOpen] = useState(false)

  const value = {
    searchOpen,
    setSearchOpen
  }

  return (
    <SearchContext.Provider value={value}>
      {children}
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </SearchContext.Provider>
  )
}

export function SearchButton() {
  const { setSearchOpen } = useContext(SearchContext)

  return (
    <Button variant="ghost" size="sm" className="gap-2" onClick={() => setSearchOpen(true)}>
      <Search className="h-4 w-4" />
      <span className="hidden sm:inline">Search...</span>
      <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  )
}
