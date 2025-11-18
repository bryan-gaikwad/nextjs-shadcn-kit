"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { HomeIcon, FileTextIcon, SettingsIcon, UserIcon } from "lucide-react"

function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}

function SeparatorNavigation() {
  const navItems = [
    { icon: <HomeIcon className="w-4 h-4" />, label: "Dashboard", count: "12" },
    { icon: <FileTextIcon className="w-4 h-4" />, label: "Documents", count: "3" },
    { icon: <SettingsIcon className="w-4 h-4" />, label: "Settings", count: null },
    { icon: <UserIcon className="w-4 h-4" />, label: "Profile", count: null }
  ]

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Navigation Menu</h3>
        <p className="text-sm text-muted-foreground">
          Access your main features
        </p>
      </div>
      
      <Separator className="my-4" />
      
      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 cursor-pointer">
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </div>
              {item.count && (
                <Badge variant="secondary" className="h-5 min-w-5 text-xs">
                  {item.count}
                </Badge>
              )}
            </div>
            {index < navItems.length - 1 && <Separator className="my-2" />}
          </div>
        ))}
      </nav>
    </div>
  )
}

function SeparatorWithContent() {
  const tags = Array.from({ length: 12 }, (_, i) => `v1.2.${i}-beta`)
  
  return (
    <ScrollArea className="h-72 w-64 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Version Tags</h4>
        {tags.map((tag, index) => (
          <div key={tag}>
            <div className="text-sm py-1">{tag}</div>
            {index < tags.length - 1 && <Separator className="my-2" />}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

function SeparatorLayouts() {
  return (
    <div className="space-y-8">
      {/* Horizontal Layout */}
      <div className="space-y-4">
        <Label className="text-base font-medium">Horizontal Separators</Label>
        <div className="space-y-4 max-w-md">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium">John Doe</div>
              <div className="text-xs text-muted-foreground">Software Engineer</div>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium">Jane Smith</div>
              <div className="text-xs text-muted-foreground">Product Manager</div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Layout */}
      <div className="space-y-4">
        <Label className="text-base font-medium">Vertical Separators</Label>
        <div className="flex items-center gap-4 text-sm">
          <Button variant="ghost" size="sm">Home</Button>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="ghost" size="sm">About</Button>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="ghost" size="sm">Services</Button>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="ghost" size="sm">Contact</Button>
        </div>
      </div>

      {/* Mixed Layout */}
      <div className="space-y-4">
        <Label className="text-base font-medium">Mixed Layout</Label>
        <div className="max-w-lg">
          <div className="flex items-center justify-between py-2">
            <span className="text-sm font-medium">Account Settings</span>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Last updated</span>
              <Separator orientation="vertical" className="h-3" />
              <span>2 days ago</span>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between py-2">
            <span className="text-sm font-medium">Privacy Settings</span>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Last updated</span>
              <Separator orientation="vertical" className="h-3" />
              <span>1 week ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SeparatorPage() {
  return (
    <div className="container mx-auto max-w-6xl p-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM1 3a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 3zm0 10a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 13z"/>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Separator</h1>
          <p className="text-muted-foreground">
            Visually or semantically separates content.
          </p>
        </div>
        <div className="ml-auto">
          <Badge variant="secondary">Component</Badge>
        </div>
      </div>
      
      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Separator</CardTitle>
                <CardDescription>
                  Simple horizontal and vertical separators for organizing content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SeparatorDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Navigation with Separators</CardTitle>
                <CardDescription>
                  Using separators to organize navigation items and menu sections.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SeparatorNavigation />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Content List with Separators</CardTitle>
                <CardDescription>
                  Separators between list items in a scrollable area.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SeparatorWithContent />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Layout Examples</CardTitle>
                <CardDescription>
                  Different ways to use separators in various layouts and orientations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SeparatorLayouts />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="code">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Installation</CardTitle>
                <CardDescription>
                  Copy and paste the following code into your project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`npx shadcn-ui@latest add separator`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>
                  Import and use the Separator component in your React component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { Separator } from "@/components/ui/separator"

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Examples</CardTitle>
                <CardDescription>
                  Different separator orientations and use cases.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Horizontal separator (default)
<Separator className="my-4" />

// Vertical separator
<div className="flex items-center gap-4">
  <span>Item 1</span>
  <Separator orientation="vertical" className="h-6" />
  <span>Item 2</span>
</div>

// In a list with spacing
{items.map((item, index) => (
  <div key={item.id}>
    <div>{item.content}</div>
    {index < items.length - 1 && <Separator className="my-2" />}
  </div>
))}

// With custom styling
<Separator className="my-6 bg-red-200" />
<Separator orientation="vertical" className="h-8 w-0.5 bg-blue-500" />`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
