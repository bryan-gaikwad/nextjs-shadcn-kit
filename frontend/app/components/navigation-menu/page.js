'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

// ListItem component for navigation content
const ListItem = ({ className, title, children, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

export default function NavigationMenuPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Navigation Menu</h1>
        <p className="text-muted-foreground">
          A collection of links for navigating websites with keyboard accessible dropdowns.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Basic Navigation
              <Badge variant="secondary">Basic</Badge>
            </CardTitle>
            <CardDescription>
              A simple navigation menu with dropdown content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="flex justify-center p-6 border rounded-lg">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                              <NavigationMenuLink asChild>
                                <a
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                  href="/"
                                >
                                  <div className="mb-2 mt-4 text-lg font-medium">
                                    shadcn/ui
                                  </div>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    Beautifully designed components built with Radix UI and
                                    Tailwind CSS.
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="Introduction">
                              Re-usable components built using Radix UI and Tailwind CSS.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Installation">
                              How to install dependencies and structure your app.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Typography">
                              Styles for headings, paragraphs, lists...etc
                            </ListItem>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                              <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                              >
                                {component.description}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Documentation
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
          <li>
            <NavigationMenuLink asChild>
              <a href="/" className="...">
                <div className="text-lg font-medium">shadcn/ui</div>
                <p className="text-sm text-muted-foreground">
                  Beautifully designed components...
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          {/* More items... */}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Documentation
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Horizontal Navigation
              <Badge variant="secondary">Layout</Badge>
            </CardTitle>
            <CardDescription>
              A horizontal navigation bar with multiple links.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="flex justify-center p-6 border rounded-lg">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Home
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          About
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Services
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Contact
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Home
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        About
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Services
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Contact
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Multi-Level Navigation
              <Badge variant="secondary">Advanced</Badge>
            </CardTitle>
            <CardDescription>
              Navigation with multiple levels and rich content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="flex justify-center p-6 border rounded-lg">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="text-sm font-medium">Web Development</h4>
                              <ul className="space-y-1">
                                <li>
                                  <NavigationMenuLink asChild>
                                    <a className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                      React Components
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                                <li>
                                  <NavigationMenuLink asChild>
                                    <a className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                      Vue Components
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                              </ul>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-medium">Mobile Development</h4>
                              <ul className="space-y-1">
                                <li>
                                  <NavigationMenuLink asChild>
                                    <a className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                      React Native
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                                <li>
                                  <NavigationMenuLink asChild>
                                    <a className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                      Flutter
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[500px]">
                            <ListItem title="Documentation" href="/docs">
                              Learn how to use our products with comprehensive guides.
                            </ListItem>
                            <ListItem title="API Reference" href="/api">
                              Complete API documentation with examples.
                            </ListItem>
                            <ListItem title="Tutorials" href="/tutorials">
                              Step-by-step tutorials to get you started.
                            </ListItem>
                            <ListItem title="Community" href="/community">
                              Join our community of developers and designers.
                            </ListItem>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Pricing
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-6 md:w-[400px] lg:grid-cols-2">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Web Development</h4>
            <ul className="space-y-1">
              <li>
                <NavigationMenuLink asChild>
                  <a className="block select-none rounded-md p-2...">
                    React Components
                  </a>
                </NavigationMenuLink>
              </li>
              {/* More items... */}
            </ul>
          </div>
          {/* More sections... */}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
    {/* More items... */}
  </NavigationMenuList>
</NavigationMenu>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Navigation with Icons
              <Badge variant="secondary">Styled</Badge>
            </CardTitle>
            <CardDescription>
              Navigation menu with icons and enhanced styling.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="flex justify-center p-6 border rounded-lg">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          <span className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>👤</AvatarFallback>
                            </Avatar>
                            Account
                          </span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-4 w-[300px]">
                            <ListItem title="Profile" href="/profile">
                              Manage your account settings and preferences.
                            </ListItem>
                            <ListItem title="Billing" href="/billing">
                              View and manage your subscription and payments.
                            </ListItem>
                            <ListItem title="Security" href="/security">
                              Update your password and security settings.
                            </ListItem>
                            <ListItem title="Notifications" href="/notifications">
                              Control how you receive notifications.
                            </ListItem>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          <span className="flex items-center gap-2">
                            <span>⚙️</span>
                            Settings
                          </span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          <span className="flex items-center gap-2">
                            <span>❓</span>
                            Help
                          </span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <span className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarFallback>👤</AvatarFallback>
          </Avatar>
          Account
        </span>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[300px]">
          <ListItem title="Profile" href="/profile">
            Manage your account settings and preferences.
          </ListItem>
          <ListItem title="Billing" href="/billing">
            View and manage your subscription and payments.
          </ListItem>
          {/* More items... */}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <span className="flex items-center gap-2">
          <span>⚙️</span>
          Settings
        </span>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Sample components data
const components = [
  {
    title: "Alert Dialog",
    href: "/docs/components/alert-dialog",
    description: "A modal dialog that interrupts the user with important content."
  },
  {
    title: "Hover Card",
    href: "/docs/components/hover-card",
    description: "For sighted users to preview content available behind a link."
  },
  {
    title: "Progress",
    href: "/docs/components/progress",
    description: "Displays an indicator showing the completion progress of a task."
  },
  {
    title: "Scroll-area",
    href: "/docs/components/scroll-area",
    description: "Augments native scroll functionality for custom, cross-browser styling."
  },
  {
    title: "Tabs",
    href: "/docs/components/tabs",
    description: "A set of layered sections of content—known as tab panels."
  },
  {
    title: "Tooltip",
    href: "/docs/components/tooltip",
    description: "A popup that displays information related to an element."
  }
]
