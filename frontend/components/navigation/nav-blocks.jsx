"use client"

import Link from "next/link"
import { ChevronRight, Package, Proportions } from "lucide-react"
import { usePathname } from "next/navigation"
import { componentsNavigation, widgetsNavigation } from "@/config/navigation"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavBlocks() {
  const pathname = usePathname()
  const { state, isMobile } = useSidebar()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Building Blocks</SidebarGroupLabel>
      <SidebarMenu>
        {/* Components Navigation */}
        {state === "collapsed" && !isMobile ? (
          // Collapsed state - show dropdown
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton tooltip="Components">
                  <Package className="h-4 w-4" />
                  <span>Components</span>
                  <ChevronRight className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 space-y-1" side="right" align="start">
                {componentsNavigation.map((component) => (
                  <DropdownMenuItem key={component.title} asChild>
                    <Link href={component.url} className="w-full">
                      {component.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ) : (
          // Expanded state - show collapsible
          <Collapsible className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  <Package className="h-4 w-4" />
                  <span>Components</span>
                  <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {componentsNavigation.map((component) => (
                    <SidebarMenuSubItem key={component.title}>
                      <SidebarMenuSubButton 
                        asChild 
                        isActive={pathname === component.url}
                      >
                        <Link href={component.url}>
                          {component.title}
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        )}
        
        {/* Widgets Navigation */}
        <SidebarMenuItem>
          <SidebarMenuButton asChild isActive={pathname === widgetsNavigation.url} tooltip={widgetsNavigation.title}>
            <Link href={widgetsNavigation.url}>
              <Proportions className="h-4 w-4" />
              <span>{widgetsNavigation.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
