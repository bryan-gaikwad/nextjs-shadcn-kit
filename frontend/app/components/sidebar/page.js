"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { appName, description } from "@/config/app"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  HomeIcon, 
  FileTextIcon, 
  SettingsIcon, 
  UserIcon,
  ChevronRightIcon,
  SearchIcon,
  CommandIcon,
  LifeBuoyIcon,
  SendIcon,
  ChevronsUpDownIcon
} from "lucide-react"

// Sample data for sidebar examples
const sampleData = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      icon: <HomeIcon className="w-4 h-4" />,
      isActive: true,
      items: [
        { title: "Installation", url: "#" },
        { title: "Project Structure", url: "#" },
      ],
    },
    {
      title: "Components",
      url: "#",
      icon: <FileTextIcon className="w-4 h-4" />,
      items: [
        { title: "Buttons", url: "#" },
        { title: "Forms", url: "#" },
        { title: "Navigation", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: <SettingsIcon className="w-4 h-4" />,
      items: [
        { title: "General", url: "#" },
        { title: "Security", url: "#" },
      ],
    },
  ],
}

function BasicSidebarDemo() {
  return (
    <div className="h-80 w-full max-w-4xl mx-auto border rounded-lg overflow-hidden flex">
      <div className="w-64 border-r bg-background">
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <CommandIcon className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-semibold">{appName}</div>
              <div className="text-xs text-muted-foreground">{description}</div>
            </div>
          </div>
        </div>
        
        <div className="px-2 py-4">
          <div className="space-y-1">
            <div className="px-3 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-md flex items-center gap-2">
              <HomeIcon className="w-4 h-4" />
              <span>Dashboard</span>
            </div>
            <div className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md flex items-center gap-2 cursor-pointer">
              <FileTextIcon className="w-4 h-4" />
              <span>Documents</span>
            </div>
            <div className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md flex items-center gap-2 cursor-pointer">
              <SettingsIcon className="w-4 h-4" />
              <span>Settings</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 w-64 p-4 border-t">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={sampleData.user.avatar} alt={sampleData.user.name} />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-left text-sm">
              <div className="font-medium">{sampleData.user.name}</div>
              <div className="text-xs text-muted-foreground">{sampleData.user.email}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex h-16 items-center gap-2 px-4 border-b">
          <Button variant="ghost" size="sm">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </Button>
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="text-sm font-medium">Dashboard</div>
        </div>
        <div className="flex-1 p-4">
          <div className="rounded-lg bg-muted/50 h-full flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <h3 className="text-lg font-semibold">Main Content Area</h3>
              <p className="text-sm">This is where your page content would go</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CollapsibleSidebarDemo() {
  return (
    <div className="h-80 w-full max-w-4xl mx-auto border rounded-lg overflow-hidden flex">
      <div className="w-64 border-r bg-background">
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <CommandIcon className="h-4 w-4" />
            </div>
            <div>
              <span className="text-sm font-semibold">{appName}</span>
              <div className="text-xs text-muted-foreground">{description}</div>
            </div>
          </div>
        </div>
        
        <div className="px-2 py-4">
          <div className="space-y-1">
            <div className="text-xs font-medium text-muted-foreground px-3 py-2">Navigation</div>
            
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-accent rounded-md">
                <div className="flex items-center gap-2">
                  <HomeIcon className="w-4 h-4" />
                  <span>Getting Started</span>
                </div>
                <ChevronRightIcon className="h-4 w-4 transition-transform data-[state=open]:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-6 space-y-1">
                <div className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground cursor-pointer">Installation</div>
                <div className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground cursor-pointer">Project Structure</div>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-accent rounded-md">
                <div className="flex items-center gap-2">
                  <FileTextIcon className="w-4 h-4" />
                  <span>Components</span>
                </div>
                <ChevronRightIcon className="h-4 w-4 transition-transform data-[state=open]:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-6 space-y-1">
                <div className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground cursor-pointer">Buttons</div>
                <div className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground cursor-pointer">Forms</div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex h-16 items-center gap-2 px-4 border-b">
          <Button variant="ghost" size="sm">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </Button>
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="text-sm font-medium">Collapsible Sidebar</div>
        </div>
        <div className="flex-1 p-4">
          <div className="rounded-lg bg-muted/50 h-full flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <h3 className="text-lg font-semibold">Collapsible Layout</h3>
              <p className="text-sm">Expandable navigation with nested items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarWithSearch() {
  return (
    <div className="h-80 w-full max-w-4xl mx-auto border rounded-lg overflow-hidden flex">
      <div className="w-64 border-r bg-background">
        <div className="p-4 border-b">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <CommandIcon className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-semibold">Documentation</div>
              <div className="text-xs text-muted-foreground">v2.1.0</div>
            </div>
          </div>
          <div className="relative">
            <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search docs..." className="pl-8 h-9" />
          </div>
        </div>
        
        <div className="px-2 py-4">
          <div className="space-y-4">
            <div>
              <div className="text-xs font-medium text-muted-foreground px-3 py-2">Quick Start</div>
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm bg-accent text-accent-foreground rounded-md">Introduction</div>
                <div className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md cursor-pointer">Installation</div>
              </div>
            </div>
            
            <div>
              <div className="text-xs font-medium text-muted-foreground px-3 py-2">Components</div>
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md flex items-center justify-between cursor-pointer">
                  <span>Button</span>
                  <Badge variant="secondary" className="h-5 text-xs">12</Badge>
                </div>
                <div className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md flex items-center justify-between cursor-pointer">
                  <span>Card</span>
                  <Badge variant="secondary" className="h-5 text-xs">8</Badge>
                </div>
                <div className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md flex items-center justify-between cursor-pointer">
                  <span>Dialog</span>
                  <Badge variant="secondary" className="h-5 text-xs">5</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 w-64 p-4 border-t">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start p-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={sampleData.user.avatar} alt={sampleData.user.name} />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-3 flex-1 text-left text-sm">
                  <div className="font-medium">{sampleData.user.name}</div>
                  <div className="text-xs text-muted-foreground">{sampleData.user.email}</div>
                </div>
                <ChevronsUpDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" side="top">
              <DropdownMenuItem>
                <UserIcon className="w-4 h-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex h-16 items-center gap-2 px-4 border-b">
          <Button variant="ghost" size="sm">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </Button>
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="text-sm font-medium">Documentation</div>
        </div>
        <div className="flex-1 p-4">
          <div className="rounded-lg bg-muted/50 h-full flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <h3 className="text-lg font-semibold">Documentation Content</h3>
              <p className="text-sm">Search functionality and user menu integrated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarVariants() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label className="text-base font-medium">Sidebar Variants</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Standard Sidebar */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Standard (sidebar)</Label>
            <div className="h-32 border rounded-lg overflow-hidden flex">
              <div className="w-48 border-r bg-background p-2">
                <div className="space-y-1">
                  <div className="px-3 py-2 text-sm bg-accent rounded-md flex items-center gap-2">
                    <HomeIcon className="w-4 h-4" />
                    <span>Home</span>
                  </div>
                  <div className="px-3 py-2 text-sm text-muted-foreground flex items-center gap-2">
                    <FileTextIcon className="w-4 h-4" />
                    <span>Docs</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-muted/20"></div>
            </div>
          </div>

          {/* Floating Sidebar */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Floating</Label>
            <div className="h-32 border rounded-lg overflow-hidden bg-accent/20 relative">
              <div className="absolute left-2 top-2 bottom-2 w-40 rounded-md border shadow-lg bg-background p-2">
                <div className="space-y-1">
                  <div className="px-3 py-2 text-sm bg-accent rounded-md flex items-center gap-2">
                    <HomeIcon className="w-4 h-4" />
                    <span>Home</span>
                  </div>
                  <div className="px-3 py-2 text-sm text-muted-foreground flex items-center gap-2">
                    <FileTextIcon className="w-4 h-4" />
                    <span>Docs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inset Sidebar */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Inset</Label>
            <div className="h-32 border rounded-lg overflow-hidden flex p-2 gap-2">
              <div className="w-48 border rounded-md bg-background p-2">
                <div className="space-y-1">
                  <div className="px-3 py-2 text-sm bg-accent rounded-md flex items-center gap-2">
                    <HomeIcon className="w-4 h-4" />
                    <span>Home</span>
                  </div>
                  <div className="px-3 py-2 text-sm text-muted-foreground flex items-center gap-2">
                    <FileTextIcon className="w-4 h-4" />
                    <span>Docs</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-muted/20 rounded-md"></div>
            </div>
          </div>

          {/* None (Non-collapsible) */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">None (Non-collapsible)</Label>
            <div className="h-32 border rounded-lg overflow-hidden flex">
              <div className="w-48 border-r bg-background p-2">
                <div className="space-y-1">
                  <div className="px-3 py-2 text-sm bg-accent rounded-md flex items-center gap-2">
                    <HomeIcon className="w-4 h-4" />
                    <span>Home</span>
                  </div>
                  <div className="px-3 py-2 text-sm text-muted-foreground flex items-center gap-2">
                    <FileTextIcon className="w-4 h-4" />
                    <span>Docs</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-muted/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SidebarPage() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 lg:px-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">Sidebar</h1>
          <p className="text-lg text-muted-foreground">
            A composable, themeable and customizable sidebar component.
          </p>
        </div>
      </div>
      
      <div className="px-4 lg:px-6">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Sidebar</CardTitle>
                <CardDescription>
                  A simple sidebar with navigation items, header, and footer sections.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BasicSidebarDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Collapsible Sidebar</CardTitle>
                <CardDescription>
                  A sidebar that can collapse to icons with nested navigation items.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CollapsibleSidebarDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sidebar with Search & User Menu</CardTitle>
                <CardDescription>
                  A feature-rich sidebar with search functionality and user dropdown menu.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SidebarWithSearch />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sidebar Variants</CardTitle>
                <CardDescription>
                  Different sidebar variants and collapsible options available.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SidebarVariants />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="code" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Installation</CardTitle>
                <CardDescription>
                  The Sidebar component is already included in your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`// Already available - no installation needed`}
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Basic Usage</CardTitle>
                <CardDescription>
                  Import and use the Sidebar components in your React component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2>My App</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HomeIcon />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div>Footer content</div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <SidebarTrigger />
        <main>Your main content</main>
      </SidebarInset>
    </SidebarProvider>
  )
}`}
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Collapsible Sidebar</CardTitle>
                <CardDescription>
                  Different collapsible modes and nested navigation examples.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`// Icon collapsible
<Sidebar collapsible="icon">
  <SidebarContent>
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HomeIcon />
            <span>Home</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  </SidebarContent>
</Sidebar>

// Offcanvas (mobile overlay)
<Sidebar collapsible="offcanvas">
  {/* Content */}
</Sidebar>

// Nested navigation with Collapsible
<Collapsible defaultOpen>
  <SidebarMenuItem>
    <CollapsibleTrigger asChild>
      <SidebarMenuButton>
        <span>Components</span>
        <ChevronRightIcon className="ml-auto" />
      </SidebarMenuButton>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <SidebarMenuSub>
        <SidebarMenuSubItem>
          <SidebarMenuSubButton>
            <span>Button</span>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sidebar Variants</CardTitle>
                <CardDescription>
                  Different visual variants and positioning options.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`// Standard sidebar (default)
<Sidebar variant="sidebar" />

// Floating sidebar (overlaid)
<Sidebar variant="floating" />

// Inset sidebar (with margin)
<Sidebar variant="inset" />

// Different sides
<Sidebar side="left" />  // default
<Sidebar side="right" />

// Collapsible options
<Sidebar collapsible="offcanvas" />  // mobile overlay
<Sidebar collapsible="icon" />       // collapse to icons
<Sidebar collapsible="none" />       // non-collapsible`}
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
