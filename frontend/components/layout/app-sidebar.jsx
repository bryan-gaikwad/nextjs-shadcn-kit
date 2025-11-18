"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  BarChart3,
  Users,
  Folder,
  Settings,
  HelpCircle,
  Search,
  FileText,
  Camera,
  LifeBuoy,
  Send,
  Activity,
  CreditCard,
  DollarSign,
  Download,
  TrendingUp,
  User,
  Bone
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "@/components/navigation/nav-main"
import { NavBlocks } from "@/components/navigation/nav-blocks"
import { NavSecondary } from "@/components/navigation/nav-secondary" 
import { NavUser } from "@/components/navigation/nav-user"
import { appName, shortName, description, branding } from "@/config/app"

// Icon mapping for dynamic icon rendering
const iconMap = {
  Home,
  BarChart3,
  Users,
  Folder,
  Settings,
  HelpCircle,
  Search,
  FileText,
  Camera,
  LifeBuoy,
  Send,
  Activity,
  CreditCard,
  DollarSign,
  Download,
  TrendingUp,
  User,
  Bone,
  Bone: require("lucide-react").Bone
}

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "API Demo",
      url: "/api-demo",
      icon: Activity,
    },
    {
      title: "Analytics",
      url: "#",
      icon: BarChart3,
    },
    {
      title: "Projects",
      url: "#",
      icon: Folder,
    },
    {
      title: "Team",
      url: "#",
      icon: Users,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
  navSecondary: [
    // {
    //   title: "Support",
    //   url: "#",
    //   icon: LifeBuoy,
    // },
    // {
    //   title: "Feedback",
    //   url: "#",
    //   icon: Send,
    // },
  ],
}

export function AppSidebar({ collapsible = "icon", ...props }) {
  const pathname = usePathname()

  // Create navigation items with dynamic active state
  const navMainWithActiveState = data.navMain.map(item => ({
    ...item,
    isActive: pathname === item.url || (item.url === "/dashboard" && pathname === "/")
  }))

  return (
    <Sidebar variant="inset" collapsible={collapsible} {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:p-1.5!">
              <Link href="/">
                <Bone className="size-6!" />
                <span className="text-base font-semibold">{appName}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMainWithActiveState} />
        <NavBlocks />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  )
}
