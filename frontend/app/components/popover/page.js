"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { Settings, Calendar, Plus } from "lucide-react"

function BasicPopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function PopoverWithFormDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <form className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Profile Settings</h4>
            <p className="text-sm text-muted-foreground">
              Update your profile information.
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Tell us about yourself" rows={3} />
          </div>
          <div className="flex gap-2">
            <Button size="sm">Save changes</Button>
            <Button size="sm" variant="outline">Cancel</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

function PopoverPositionsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {["top", "right", "bottom", "left"].map((side) => (
        <Popover key={side}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </PopoverTrigger>
          <PopoverContent side={side} className="w-56">
            <div className="text-center">
              <p className="text-sm">This popover appears on the {side}</p>
            </div>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}

function PopoverVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Schedule
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="grid gap-2">
            <h4 className="font-medium">Schedule a meeting</h4>
            <p className="text-sm text-muted-foreground">
              Choose a date and time for the meeting.
            </p>
            <div className="grid gap-2 mt-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" />
              <Label htmlFor="time">Time</Label>
              <Input id="time" type="time" />
            </div>
            <Button size="sm" className="mt-2">
              Schedule Meeting
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Add Item
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <h4 className="font-medium">Add New Item</h4>
            <div className="grid gap-2">
              <Label htmlFor="item-name">Item Name</Label>
              <Input id="item-name" placeholder="Enter item name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Enter description" 
                rows={2}
              />
            </div>
            <div className="flex gap-2">
              <Button size="sm">Add Item</Button>
              <Button size="sm" variant="secondary">
                Cancel
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="sm">
            Quick Info
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <div className="space-y-3">
            <div>
              <h4 className="font-medium">Quick Information</h4>
              <p className="text-sm text-muted-foreground mt-1">
                This is a compact popover with essential information and actions.
              </p>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Status:</span>
              <Badge variant="secondary">Active</Badge>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Last updated:</span>
              <span className="text-muted-foreground">2 hours ago</span>
            </div>
            <Button size="sm" className="w-full">
              View Details
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default function PopoverPage() {
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
          <h1 className="text-2xl font-semibold">Popover</h1>
          <p className="text-muted-foreground">
            Displays rich content in a portal, triggered by a button. Perfect for forms, menus, and additional information without leaving the current context.
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
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Popover</CardTitle>
                <CardDescription>
                  A basic popover with form elements for setting dimensions and properties.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BasicPopoverDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Popover with Form</CardTitle>
                <CardDescription>
                  A more complex popover containing a complete form with multiple input types.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PopoverWithFormDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Popover Positions</CardTitle>
                <CardDescription>
                  Popovers can be positioned on different sides of the trigger element.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PopoverPositionsDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Popover Variants</CardTitle>
                <CardDescription>
                  Different popover styles and use cases with various content types and layouts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PopoverVariantsDemo />
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
{`npx shadcn-ui@latest add popover`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>
                  Import and use the Popover components in your React component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
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
                  Different popover configurations for various use cases.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Basic popover
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    Place content for the popover here.
  </PopoverContent>
</Popover>

// Popover with positioning
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Top</Button>
  </PopoverTrigger>
  <PopoverContent side="top" className="w-56">
    <p>This popover appears on the top</p>
  </PopoverContent>
</Popover>

// Popover with form
<Popover>
  <PopoverTrigger asChild>
    <Button>Settings</Button>
  </PopoverTrigger>
  <PopoverContent className="w-96">
    <form className="grid gap-4">
      <h4 className="font-medium">Profile Settings</h4>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your name" />
      </div>
      <Button size="sm">Save</Button>
    </form>
  </PopoverContent>
</Popover>

// Compact info popover
<Popover>
  <PopoverTrigger asChild>
    <Button variant="ghost" size="sm">Info</Button>
  </PopoverTrigger>
  <PopoverContent className="w-72">
    <div className="space-y-3">
      <h4 className="font-medium">Quick Information</h4>
      <p className="text-sm text-muted-foreground">
        Essential information and actions.
      </p>
      <Button size="sm" className="w-full">
        View Details
      </Button>
    </div>
  </PopoverContent>
</Popover>`}
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
