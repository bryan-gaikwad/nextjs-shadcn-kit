"use client"

import { BadgeCheck, ChevronRight, ExternalLink, Plus, ShieldAlert, Star } from "lucide-react"
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
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function BasicItemDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Two-factor authentication</ItemTitle>
          <ItemDescription>
            Verify via email or phone number for enhanced security.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Enable</Button>
        </ItemActions>
      </Item>
      
      <Item variant="outline" size="sm" asChild>
        <a href="#">
          <ItemMedia>
            <BadgeCheck className="h-5 w-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRight className="h-4 w-4" />
          </ItemActions>
        </a>
      </Item>
      
      <Item variant="muted">
        <ItemMedia variant="icon">
          <ShieldAlert className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Security Alert</ItemTitle>
          <ItemDescription>
            New login detected from unknown device.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}

function ItemVariantsDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Item>
        <ItemContent>
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>
            Standard styling with subtle background.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
      </Item>
      
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>
            Outlined style with clear borders and transparent background.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
      </Item>
      
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Muted Variant</ItemTitle>
          <ItemDescription>
            Subdued appearance with muted colors for secondary content.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}

function ItemGroupDemo() {
  const people = [
    {
      username: "shadcn",
      avatar: "https://github.com/shadcn.png",
      email: "shadcn@vercel.com",
    },
    {
      username: "maxleiter",
      avatar: "https://github.com/maxleiter.png",
      email: "maxleiter@vercel.com",
    },
    {
      username: "evilrabbit",
      avatar: "https://github.com/evilrabbit.png",
      email: "evilrabbit@vercel.com",
    },
  ]

  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <ItemGroup>
        {people.map((person, index) => (
          <div key={person.username}>
            <Item>
              <ItemMedia>
                <Avatar>
                  <AvatarImage src={person.avatar} className="grayscale" />
                  <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent className="gap-1">
                <ItemTitle>{person.username}</ItemTitle>
                <ItemDescription>{person.email}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Plus className="h-4 w-4" />
                </Button>
              </ItemActions>
            </Item>
            {index !== people.length - 1 && <ItemSeparator />}
          </div>
        ))}
      </ItemGroup>
      
      <Item variant="outline">
        <ItemMedia>
          <div className="flex -space-x-2">
            <Avatar className="ring-2 ring-background">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="ring-2 ring-background">
              <AvatarImage src="https://github.com/maxleiter.png" />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
            <Avatar className="ring-2 ring-background">
              <AvatarImage src="https://github.com/evilrabbit.png" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Design Team</ItemTitle>
          <ItemDescription>
            Meet our team of designers, engineers, and researchers.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}

function InteractiveItemsDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Item asChild>
        <a href="#">
          <ItemContent>
            <ItemTitle>Visit our documentation</ItemTitle>
            <ItemDescription>
              Learn how to get started with our components.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRight className="h-4 w-4" />
          </ItemActions>
        </a>
      </Item>
      
      <Item variant="outline" asChild>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <ItemContent>
            <ItemTitle>External resource</ItemTitle>
            <ItemDescription>
              Opens in a new tab with security attributes.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ExternalLink className="h-4 w-4" />
          </ItemActions>
        </a>
      </Item>
      
      <Item variant="outline">
        <ItemMedia>
          <Avatar>
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>Last seen 5 months ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Star className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Add to favorites</DropdownMenuItem>
              <DropdownMenuItem>Send message</DropdownMenuItem>
              <DropdownMenuItem>Block user</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ItemActions>
      </Item>
    </div>
  )
}

export default function ItemPage() {
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
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Item</h1>
          <p className="text-muted-foreground">
            A flexible container component for displaying content with consistent layout patterns including media, titles, descriptions, and actions.
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
                <CardTitle>Basic Items</CardTitle>
                <CardDescription>
                  Simple item examples with different content types and interactive elements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BasicItemDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Item Variants</CardTitle>
                <CardDescription>
                  Different visual styles available for various use cases and contexts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ItemVariantsDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Item Groups</CardTitle>
                <CardDescription>
                  Organize multiple items with separators and nested layouts for user lists and teams.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ItemGroupDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Interactive Items</CardTitle>
                <CardDescription>
                  Items as links and with dropdown menus for enhanced user interactions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveItemsDemo />
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
{`npx shadcn-ui@latest add item`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Basic Usage</CardTitle>
                <CardDescription>
                  Import and use the Item components to build flexible layouts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"

export function BasicItem() {
  return (
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>Two-factor authentication</ItemTitle>
        <ItemDescription>
          Verify via email or phone number for enhanced security.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm">Enable</Button>
      </ItemActions>
    </Item>
  )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>With Media</CardTitle>
                <CardDescription>
                  Add icons, avatars, or images using ItemMedia component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { ItemMedia } from "@/components/ui/item"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ShieldAlert } from "lucide-react"

// With Icon
<Item variant="muted">
  <ItemMedia variant="icon">
    <ShieldAlert className="h-4 w-4" />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Security Alert</ItemTitle>
    <ItemDescription>New login detected.</ItemDescription>
  </ItemContent>
</Item>

// With Avatar
<Item>
  <ItemMedia>
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </ItemMedia>
  <ItemContent>
    <ItemTitle>shadcn</ItemTitle>
    <ItemDescription>@shadcn</ItemDescription>
  </ItemContent>
</Item>`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Item Groups</CardTitle>
                <CardDescription>
                  Organize multiple items with separators and consistent spacing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { ItemGroup, ItemSeparator } from "@/components/ui/item"

export function ItemList() {
  return (
    <ItemGroup>
      {users.map((user, index) => (
        <div key={user.id}>
          <Item>
            <ItemMedia>
              <Avatar>
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{user.name}</ItemTitle>
              <ItemDescription>{user.email}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </ItemActions>
          </Item>
          {index !== users.length - 1 && <ItemSeparator />}
        </div>
      ))}
    </ItemGroup>
  )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Interactive Items</CardTitle>
                <CardDescription>
                  Make items interactive with links and dropdown menus.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// As Link
<Item asChild>
  <a href="/docs">
    <ItemContent>
      <ItemTitle>Visit Documentation</ItemTitle>
      <ItemDescription>Learn how to get started.</ItemDescription>
    </ItemContent>
    <ItemActions>
      <ChevronRight className="h-4 w-4" />
    </ItemActions>
  </a>
</Item>

// With Dropdown
<Item variant="outline">
  <ItemContent>
    <ItemTitle>User Settings</ItemTitle>
  </ItemContent>
  <ItemActions>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </ItemActions>
</Item>`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Variants and Sizes</CardTitle>
                <CardDescription>
                  Control appearance with different variants and size options.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Variants
<Item variant="default">Default styling</Item>
<Item variant="outline">Outlined with borders</Item>
<Item variant="muted">Subdued appearance</Item>

// Sizes
<Item size="default">Standard size</Item>
<Item size="sm">Compact size</Item>

// Media Variants
<ItemMedia variant="default">Default styling</ItemMedia>
<ItemMedia variant="icon">Icon container with background</ItemMedia>
<ItemMedia variant="image">Optimized for images</ItemMedia>

// Available components:
// - Item: Main container
// - ItemContent: Content wrapper
// - ItemTitle: Title text
// - ItemDescription: Description text
// - ItemMedia: Media container (icons, avatars, images)
// - ItemActions: Action buttons container
// - ItemGroup: Group multiple items
// - ItemSeparator: Visual separator
// - ItemHeader: Header section
// - ItemFooter: Footer section`}
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
