"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronDown, Menu, BookOpen, Palette, Layout, Zap } from 'lucide-react'

const docsNavigation = [
  {
    title: "Getting Started",
    href: "/docs",
    icon: BookOpen,
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Configuration", href: "/docs/configuration" },
    ]
  }
]

function NavItem({ item, isActive, level = 0 }) {
  const [isOpen, setIsOpen] = useState(isActive)
  const pathname = usePathname()
  
  if (item.items && item.items.length > 0) {
    // For parent items with children, check if any child is active
    const hasActiveChild = item.items.some(subItem => pathname === subItem.href)
    
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-between text-sm font-medium",
              level > 0 && "pl-6",
              // Don't highlight parent if child is active
              !hasActiveChild && isActive && "bg-accent text-accent-foreground"
            )}
          >
            <div className="flex items-center gap-2">
              {item.icon && <item.icon className="h-4 w-4" />}
              {item.title}
            </div>
            <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1">
          {item.items.map((subItem) => (
            <NavItem
              key={subItem.href}
              item={subItem}
              isActive={pathname === subItem.href}
              level={level + 1}
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <Button
      asChild
      variant={isActive ? "secondary" : "ghost"}
      className={cn(
        "w-full justify-start text-sm",
        level > 0 && "pl-6",
        level > 1 && "pl-8"
      )}
    >
      <Link href={item.href}>
        {item.icon && level === 0 && <item.icon className="h-4 w-4 mr-2" />}
        {item.title}
      </Link>
    </Button>
  )
}

function SidebarContent() {
  const pathname = usePathname()
  
  return (
    <div className="space-y-4 py-4">
      <div className="px-3 py-2">
        <div className="space-y-1">
          {docsNavigation.map((item) => (
            <NavItem
              key={item.href}
              item={item}
              isActive={pathname.startsWith(item.href)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function DocsSidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-screen w-64 flex-col fixed left-0 top-0 z-30 border-r bg-background overflow-hidden">
        {/* Spacer for header */}
        <div className="h-14 border-b flex items-center px-6">
          <h2 className="text-lg font-semibold tracking-tight">
            Documentation
          </h2>
        </div>
        <ScrollArea className="flex-1">
          <SidebarContent />
        </ScrollArea>
      </div>
      
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden fixed top-4 left-4 z-40"
          >
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <ScrollArea className="h-full">
            <SidebarContent />
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  )
}
