"use client"

import Link from "next/link"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { ThemeSelector } from "@/components/layout/theme-selector"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Search, Settings, User, LogOut, Menu, PanelsTopLeft, FileText } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import { useNavigation } from "@/context/navigation-context"
import { features } from "@/config/app"
import { useState } from "react"
import { GlobalSearchDialog } from "@/components/layout/global-search"

export function SiteHeader() {
  const { user, logout } = useAuth()
  const { navMode, toggleNavMode, showToggleButton, canToggle } = useNavigation()
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        <div className="ml-auto flex items-center gap-2 px-4">
          {/* Global Search Button */}
          <Button
            variant="outline"
            className="relative hidden md:flex h-9 w-[200px] justify-start text-sm text-muted-foreground lg:w-[300px]"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="mr-2 h-4 w-4" />
            <span>Search dashboard and docs...</span>
            <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        
        {showToggleButton && canToggle && (
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleNavMode}
            title={`Switch to ${navMode === 'sidebar' ? 'top navigation' : 'sidebar navigation'}`}
          >
            {navMode === 'sidebar' ? (
              <PanelsTopLeft className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        )}
        <Button variant="ghost" size="icon" asChild>
          <Link href="/docs" title="Documentation">
            <FileText className="h-4 w-4" />
            <span className="sr-only">Documentation</span>
          </Link>
        </Button>
        <ThemeSelector />
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
              <span className="sr-only">User menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem disabled>
              <User className="mr-2 h-4 w-4" />
              {user?.email}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
    
    {/* Global Search Dialog */}
    <GlobalSearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
  </>
)
}
