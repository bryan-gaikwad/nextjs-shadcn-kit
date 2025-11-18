"use client"

import { ArrowUp, Copy, Info, Search, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"

function BasicInputGroupDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
      </InputGroup>
      
      <InputGroup>
        <InputGroupInput placeholder="@username" />
        <InputGroupAddon align="inline-end">
          <div className="flex size-4 items-center justify-center rounded-full bg-green-500">
            <Star className="size-3 text-white" />
          </div>
        </InputGroupAddon>
      </InputGroup>
      
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

function InputGroupWithButtonsDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <InputGroup>
        <InputGroupInput placeholder="Enter URL" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">
            <Copy className="h-4 w-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton className="rounded-full" size="icon-xs">
                <Info className="h-4 w-4" />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>This is a secure connection</TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      
      <InputGroup>
        <InputGroupInput placeholder="Select option..." />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="outline">Options</InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
              <DropdownMenuItem>Option 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

function InputGroupTextareaDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your message..." />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-muted-foreground text-xs">
            120 characters left
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      
      <InputGroup>
        <InputGroupTextarea placeholder="Ask, Search or Chat..." />
        <InputGroupAddon align="block-end">
          <InputGroupButton
            variant="outline"
            className="rounded-full"
            size="icon-xs"
          >
            <ArrowUp className="h-4 w-4" />
          </InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost">Auto</InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" align="start">
              <DropdownMenuItem>Auto</DropdownMenuItem>
              <DropdownMenuItem>Agent</DropdownMenuItem>
              <DropdownMenuItem>Manual</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroupText className="ml-auto">52% used</InputGroupText>
          <Separator orientation="vertical" className="!h-4" />
          <InputGroupButton
            variant="default"
            className="rounded-full"
            size="icon-xs"
            disabled
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      
      <InputGroup>
        <InputGroupTextarea
          placeholder="Write your code here..."
          className="min-h-[120px] font-mono"
        />
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            script.js
          </InputGroupText>
          <InputGroupButton className="ml-auto" size="icon-xs">
            <Copy className="h-4 w-4" />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton size="sm" className="ml-auto" variant="default">
            Run Code
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default function InputGroupPage() {
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
          <h1 className="text-2xl font-semibold">Input Group</h1>
          <p className="text-muted-foreground">
            Combine inputs with text, buttons, and other elements to create powerful input experiences with enhanced functionality.
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
                <CardTitle>Basic Input Groups</CardTitle>
                <CardDescription>
                  Simple input groups with icons, text addons, and status indicators.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BasicInputGroupDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Input Groups with Buttons</CardTitle>
                <CardDescription>
                  Interactive input groups featuring buttons, dropdowns, and tooltips for enhanced functionality.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InputGroupWithButtonsDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Textarea Input Groups</CardTitle>
                <CardDescription>
                  Advanced textarea layouts with header and footer addons for rich text editing experiences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InputGroupTextareaDemo />
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
{`npx shadcn-ui@latest add input-group`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Basic Usage</CardTitle>
                <CardDescription>
                  Import and use the InputGroup components with various addons.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { Search } from "lucide-react"

export function BasicInputGroup() {
  return (
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <Search className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        12 results
      </InputGroupAddon>
    </InputGroup>
  )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>With Text Addons</CardTitle>
                <CardDescription>
                  Add text prefixes and suffixes to provide context or units.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`export function PriceInputGroup() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="0.00" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>USD</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>With Buttons</CardTitle>
                <CardDescription>
                  Add interactive buttons for actions like copy, search, or submit.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { InputGroupButton } from "@/components/ui/input-group"
import { Copy } from "lucide-react"

export function ButtonInputGroup() {
  return (
    <InputGroup>
      <InputGroupInput placeholder="Enter URL" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton variant="secondary">
          <Copy className="h-4 w-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Textarea with Addons</CardTitle>
                <CardDescription>
                  Use block alignment for textarea headers and footers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { InputGroupTextarea } from "@/components/ui/input-group"

export function TextareaInputGroup() {
  return (
    <InputGroup>
      <InputGroupTextarea placeholder="Enter your message..." />
      <InputGroupAddon align="block-end">
        <InputGroupText className="text-muted-foreground text-xs">
          120 characters left
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Alignment Options</CardTitle>
                <CardDescription>
                  Control addon positioning with different alignment values.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Inline alignment (default)
<InputGroupAddon align="inline-start">Start</InputGroupAddon>
<InputGroupAddon align="inline-end">End</InputGroupAddon>

// Block alignment (for textarea)
<InputGroupAddon align="block-start">Header</InputGroupAddon>
<InputGroupAddon align="block-end">Footer</InputGroupAddon>

// Available components:
// - InputGroup: Container wrapper
// - InputGroupInput: Input field
// - InputGroupTextarea: Textarea field  
// - InputGroupAddon: Container for addons
// - InputGroupText: Text content
// - InputGroupButton: Button element`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Advanced Example</CardTitle>
                <CardDescription>
                  Complex input group with multiple addons and interactions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Tooltip } from "@/components/ui/tooltip"

export function AdvancedInputGroup() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
      <InputGroupAddon align="inline-end">
        <Tooltip>
          <TooltipTrigger asChild>
            <InputGroupButton size="icon-xs">
              <Info className="h-4 w-4" />
            </InputGroupButton>
          </TooltipTrigger>
          <TooltipContent>Secure connection</TooltipContent>
        </Tooltip>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <InputGroupButton variant="outline">
              Options
            </InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Copy</DropdownMenuItem>
            <DropdownMenuItem>Share</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </InputGroupAddon>
    </InputGroup>
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
