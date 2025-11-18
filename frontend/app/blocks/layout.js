"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { BlocksSidebar } from "@/components/navigation/blocks-sidebar"

export default function BlocksLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <BlocksSidebar />
        <SidebarInset className="flex-1 overflow-auto">
          <div className="container mx-auto p-6">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
