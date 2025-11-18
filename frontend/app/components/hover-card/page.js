"use client"

import { Calendar, Github, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

function BasicHoverCardDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <Calendar className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline" size="icon">
            <Info className="h-4 w-4" />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">About this feature</h4>
            <p className="text-sm text-muted-foreground">
              This feature allows you to preview content without navigating away from the current page.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}

function UserProfileHoverCard() {
  return (
    <div className="flex flex-wrap items-start gap-6">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="p-0 h-auto">
            @shadcn
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80" side="top">
          <div className="flex justify-between gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@shadcn</h4>
              <p className="text-sm">
                Building @shadcn/ui - Copy and paste React components.
              </p>
              <div className="flex items-center pt-2">
                <Calendar className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  Joined March 2021
                </span>
              </div>
              <div className="flex gap-2 pt-2">
                <Badge variant="secondary" className="text-xs">
                  React
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  TypeScript
                </Badge>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="p-0 h-auto">
            @vercel
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80" side="bottom">
          <div className="flex justify-between gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@vercel</h4>
              <p className="text-sm">
                Develop. Preview. Ship. The best developer experience.
              </p>
              <div className="flex items-center pt-2">
                <Calendar className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  Joined February 2015
                </span>
              </div>
              <div className="flex gap-2 pt-2">
                <Badge variant="secondary" className="text-xs">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Vercel
                </Badge>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}

function RepositoryHoverCard() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Hover over repository names to see details:
      </p>
      <div className="flex flex-wrap gap-4">
        <HoverCard openDelay={200}>
          <HoverCardTrigger asChild>
            <Button variant="link" className="p-0 h-auto font-mono">
              shadcn-ui/ui
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-96" side="right">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <h4 className="text-sm font-semibold">shadcn-ui/ui</h4>
                <Badge variant="outline" className="text-xs">
                  Public
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Beautifully designed components that you can copy and paste into your apps. 
                Accessible. Customizable. Open Source.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  TypeScript
                </div>
                <span>★ 71.2k</span>
                <span>⑂ 4.3k</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary" className="text-xs">
                  react
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  tailwindcss
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  radix-ui
                </Badge>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        
        <HoverCard openDelay={200}>
          <HoverCardTrigger asChild>
            <Button variant="link" className="p-0 h-auto font-mono">
              vercel/next.js
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-96" side="left">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <h4 className="text-sm font-semibold">vercel/next.js</h4>
                <Badge variant="outline" className="text-xs">
                  Public
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                The React Framework for the Web. Used by some of the world's largest companies, 
                Next.js enables you to create high-quality web applications.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  JavaScript
                </div>
                <span>★ 125k</span>
                <span>⑂ 26.8k</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary" className="text-xs">
                  react
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  nextjs
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  web-framework
                </Badge>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  )
}

export default function HoverCardPage() {
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
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Hover Card</h1>
          <p className="text-muted-foreground">
            For sighted users to preview content available behind a link. Displays rich content in a popup when hovering over a trigger element.
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
          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Hover Cards</CardTitle>
                <CardDescription>
                  Simple hover cards with different content types and trigger elements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BasicHoverCardDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>User Profiles</CardTitle>
                <CardDescription>
                  Hover cards showing user profile information with different positioning.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UserProfileHoverCard />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Repository Preview</CardTitle>
                <CardDescription>
                  Rich repository information displayed in hover cards with custom delay.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RepositoryHoverCard />
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
{`npx shadcn-ui@latest add hover-card`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Basic Usage</CardTitle>
                <CardDescription>
                  Import and use the HoverCard components.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

export function BasicHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">
            The React Framework – created and maintained by @vercel.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>With Avatar and Details</CardTitle>
                <CardDescription>
                  Rich user profile hover card with avatar and metadata.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { CalendarIcon } from "@radix-ui/react-icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserProfileHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@shadcn</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@shadcn</h4>
            <p className="text-sm">
              Building @shadcn/ui - Copy and paste React components.
            </p>
            <div className="flex items-center pt-2">
              <Calendar className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined March 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Positioning and Delays</CardTitle>
                <CardDescription>
                  Control hover card position and open delay for better UX.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Different positions
<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">Hover me</Button>
  </HoverCardTrigger>
  <HoverCardContent side="top" align="center">
    Content appears above the trigger
  </HoverCardContent>
</HoverCard>

// Custom delay
<HoverCard openDelay={200} closeDelay={100}>
  <HoverCardTrigger asChild>
    <Button variant="link">Custom timing</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    Opens after 200ms delay
  </HoverCardContent>
</HoverCard>

// Side options: "top" | "right" | "bottom" | "left"
// Align options: "start" | "center" | "end"`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Rich Content Example</CardTitle>
                <CardDescription>
                  Complex hover card with badges, icons, and structured content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function RepositoryHoverCard() {
  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <Button variant="link" className="font-mono">
          shadcn-ui/ui
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-96">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            <h4 className="text-sm font-semibold">shadcn-ui/ui</h4>
            <Badge variant="outline" className="text-xs">Public</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Beautifully designed components for React applications.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>★ 71.2k</span>
            <span>⑂ 4.3k</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`}
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
