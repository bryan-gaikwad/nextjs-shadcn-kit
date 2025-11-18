"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Search, Command } from "lucide-react"

function BasicKbdDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Kbd>Ctrl</Kbd>
      <Kbd>⌘K</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Enter</Kbd>
      <Kbd>Space</Kbd>
    </div>
  )
}

function KbdGroupDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>B</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Alt</Kbd>
        <Kbd>Tab</Kbd>
      </KbdGroup>
    </div>
  )
}

function KbdVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Kbd>↑</Kbd>
      <Kbd>↓</Kbd>
      <Kbd>←</Kbd>
      <Kbd>→</Kbd>
      <Kbd>
        <Command className="h-3 w-3" />
      </Kbd>
      <Kbd>F1</Kbd>
      <Kbd>Delete</Kbd>
      <Kbd>Backspace</Kbd>
    </div>
  )
}

function KbdInContextDemo() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="outline" size="sm" className="pr-2">
          Save <Kbd>⌘S</Kbd>
        </Button>
        <Button variant="outline" size="sm" className="pr-2">
          Cancel <Kbd>Esc</Kbd>
        </Button>
        <Button variant="outline" size="sm" className="pr-2">
          Print <Kbd>⌘P</Kbd>
        </Button>
      </div>
      
      <InputGroup className="max-w-sm">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
      
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              Open Command
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              Open Command Palette{" "}
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>Shift</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}

export default function KbdPage() {
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
            <path d="M1 4.5A2.5 2.5 0 0 1 3.5 2h9A2.5 2.5 0 0 1 15 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 11.5v-7zm2.5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-9z"/>
            <path d="M3.5 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm2.5 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm2.5 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm2.5 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-7.5 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-1z"/>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Kbd</h1>
          <p className="text-muted-foreground">
            Used to display textual user input from keyboard. Perfect for showing keyboard shortcuts and key combinations.
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
                <CardTitle>Basic Kbd</CardTitle>
                <CardDescription>
                  Simple keyboard key representations for common keys and shortcuts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BasicKbdDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Keyboard Groups</CardTitle>
                <CardDescription>
                  Group related keyboard keys together with KbdGroup component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <KbdGroupDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Key Variants</CardTitle>
                <CardDescription>
                  Different types of keys including arrow keys, function keys, and special characters.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <KbdVariantsDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Kbd in Context</CardTitle>
                <CardDescription>
                  Examples of using Kbd component within buttons, input groups, and tooltips.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <KbdInContextDemo />
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
{`npx shadcn-ui@latest add kbd`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>
                  Import and use the Kbd and KbdGroup components in your React component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function KbdDemo() {
  return (
    <div className="flex items-center gap-2">
      <Kbd>Ctrl</Kbd>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
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
                  Different ways to use the Kbd component in your application.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Basic keyboard keys
<Kbd>Ctrl</Kbd>
<Kbd>⌘K</Kbd>
<Kbd>Enter</Kbd>

// Grouped keys
<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>Shift</Kbd>
  <Kbd>P</Kbd>
</KbdGroup>

// In buttons
<Button variant="outline" className="pr-2">
  Save <Kbd>⌘S</Kbd>
</Button>

// In tooltips
<TooltipContent>
  <div className="flex items-center gap-2">
    Open Command{" "}
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  </div>
</TooltipContent>

// In input groups
<InputGroup>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon align="inline-end">
    <Kbd>⌘</Kbd>
    <Kbd>K</Kbd>
  </InputGroupAddon>
</InputGroup>`}
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
