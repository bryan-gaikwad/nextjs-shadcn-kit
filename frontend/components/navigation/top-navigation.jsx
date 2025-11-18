"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Home, BarChart3, Folder, Users, Settings, Package, Proportions, ChevronDown, Search, Menu, PanelsTopLeft, User, LogOut } from "lucide-react"
import { componentsNavigation, mainNavigation, widgetsNavigation } from "@/config/navigation"
import { appName, shortName, branding, features } from "@/config/app"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { useNavigation } from "@/context/navigation-context"
import { useAuth } from "@/context/auth-context"
import { cn } from "@/lib/utils"

// Icon mapping for dynamic icon rendering
const iconMap = {
  Home,
  BarChart3,
  Folder,
  Users,
  Settings,
  Package,
  Proportions,
  Bone: require("lucide-react").Bone
}

export function TopNavigation() {
  const pathname = usePathname()
  const { toggleNavMode, showToggleButton, canToggle } = useNavigation()
  const { user, logout } = useAuth()

  return (
    <div className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {(() => {
              const IconComponent = iconMap[branding.logo.icon]
              return <IconComponent className="h-8 w-8" />
            })()}
            <span className="hidden font-bold sm:inline-block tracking-tight text-foreground text-lg">
              {shortName}
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {mainNavigation.map((item) => {
              const IconComponent = iconMap[item.icon]
              return (
                <Link
                  key={item.title}
                  href={item.url}
                  className={cn(
                    "transition-colors hover:text-foreground/80 flex items-center space-x-1",
                    pathname === item.url ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="hidden md:inline">{item.title}</span>
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Search */}
          <div className="relative hidden lg:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] pl-8"
            />
          </div>
          
          {/* Components Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <Package className="h-4 w-4 mr-2" />
                Components
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 max-h-96 overflow-y-auto">
              {componentsNavigation.map((component) => (
                <DropdownMenuItem key={component.title} asChild>
                  <Link 
                    href={component.url}
                    className={cn(
                      "w-full",
                      pathname === component.url && "bg-accent text-accent-foreground"
                    )}
                  >
                    {component.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Widgets Button */}
          <Button variant="ghost" size="sm" asChild>
            <Link
              href={widgetsNavigation.url}
              className={cn(
                "transition-colors",
                pathname === widgetsNavigation.url && "bg-accent text-accent-foreground"
              )}
            >
              <Proportions className="h-4 w-4 mr-2" />
              {widgetsNavigation.title}
            </Link>
          </Button>
          
          {/* Navigation Toggle */}
          {showToggleButton && canToggle && (
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleNavMode}
              title="Switch to sidebar navigation"
            >
              <Menu className="h-4 w-4" />
            </Button>
          )}
          
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full">
                <User className="h-4 w-4" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  {user?.email && (
                    <p className="text-sm font-medium leading-none">
                      {user.email}
                    </p>
                  )}
                  <p className="text-xs leading-none text-muted-foreground">
                    Signed in
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onClick={logout}
                className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-900/20"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
