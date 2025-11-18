"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { BoldIcon, ItalicIcon, UnderlineIcon, AlignLeftIcon, AlignCenterIcon, AlignRightIcon, AlignJustifyIcon, FontIcon, TypeIcon, PaletteIcon } from "lucide-react"
import { useState } from "react"

function ToggleGroupDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

function ToggleGroupSingle() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <ToggleGroup type="single" defaultValue="center">
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRightIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="justify" aria-label="Justify">
          <AlignJustifyIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

function ToggleGroupVariants() {
  return (
    <div className="flex flex-wrap items-start gap-6">
      <div className="space-y-2">
        <p className="text-sm font-medium">Default</p>
        <ToggleGroup type="multiple" variant="default">
          <ToggleGroupItem value="bold" aria-label="Bold">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">Outline</p>
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem value="bold" aria-label="Bold">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}

function ToggleGroupSizes() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="space-y-2">
        <p className="text-sm font-medium">Small</p>
        <ToggleGroup type="single" size="sm">
          <ToggleGroupItem value="left" aria-label="Left">
            <AlignLeftIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center">
            <AlignCenterIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right">
            <AlignRightIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">Default</p>
        <ToggleGroup type="single" size="default">
          <ToggleGroupItem value="left" aria-label="Left">
            <AlignLeftIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center">
            <AlignCenterIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right">
            <AlignRightIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">Large</p>
        <ToggleGroup type="single" size="lg">
          <ToggleGroupItem value="left" aria-label="Left">
            <AlignLeftIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center">
            <AlignCenterIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right">
            <AlignRightIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}

function ToggleGroupWithText() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <ToggleGroup type="multiple" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <BoldIcon />
          Bold
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <ItalicIcon />
          Italic
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <UnderlineIcon />
          Underline
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

function ToggleGroupControlled() {
  const [alignment, setAlignment] = useState("center")
  const [formatting, setFormatting] = useState(["bold"])
  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Text Alignment</p>
        <p className="text-sm text-muted-foreground">
          Current: {alignment || "None"}
        </p>
        <ToggleGroup type="single" value={alignment} onValueChange={setAlignment}>
          <ToggleGroupItem value="left" aria-label="Left">
            <AlignLeftIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center">
            <AlignCenterIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right">
            <AlignRightIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="justify" aria-label="Justify">
            <AlignJustifyIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">Text Formatting</p>
        <p className="text-sm text-muted-foreground">
          Current: {formatting.length > 0 ? formatting.join(", ") : "None"}
        </p>
        <ToggleGroup type="multiple" value={formatting} onValueChange={setFormatting}>
          <ToggleGroupItem value="bold" aria-label="Bold">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}

function ToggleGroupDisabled() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <ToggleGroup type="single" disabled>
        <ToggleGroupItem value="left" aria-label="Left">
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Center">
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Right">
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

export default function ToggleGroupPage() {
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
            <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Toggle Group</h1>
          <p className="text-muted-foreground">
            A set of two-state buttons that can be toggled on or off.
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
                <CardTitle>Multiple Selection</CardTitle>
                <CardDescription>
                  Toggle group allowing multiple items to be selected simultaneously.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToggleGroupDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Single Selection</CardTitle>
                <CardDescription>
                  Toggle group allowing only one item to be selected at a time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToggleGroupSingle />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Variants</CardTitle>
                <CardDescription>
                  Toggle group comes in different variants: default and outline.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToggleGroupVariants />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sizes</CardTitle>
                <CardDescription>
                  Toggle group supports small, default, and large sizes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToggleGroupSizes />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>With Text</CardTitle>
                <CardDescription>
                  Toggle group items can include both icons and text labels.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToggleGroupWithText />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Controlled</CardTitle>
                <CardDescription>
                  Control the toggle group state programmatically.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToggleGroupControlled />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Disabled</CardTitle>
                <CardDescription>
                  Toggle group can be disabled to prevent interaction.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToggleGroupDisabled />
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
{`npx shadcn-ui@latest add toggle-group`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>
                  Import and use the ToggleGroup component in your React component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
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
                  Different toggle group configurations and use cases.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Multiple selection
<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">
    <BoldIcon />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic">
    <ItalicIcon />
  </ToggleGroupItem>
</ToggleGroup>

// Single selection
<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left">
    <AlignLeftIcon />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenterIcon />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRightIcon />
  </ToggleGroupItem>
</ToggleGroup>

// Different variants
<ToggleGroup type="multiple" variant="outline">
  <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
  <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
</ToggleGroup>

// Different sizes
<ToggleGroup type="single" size="sm">
  <ToggleGroupItem value="left">
    <AlignLeftIcon />
  </ToggleGroupItem>
</ToggleGroup>

// Controlled
const [value, setValue] = useState(["bold"])

<ToggleGroup 
  type="multiple" 
  value={value} 
  onValueChange={setValue}
>
  <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
  <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
</ToggleGroup>`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
                <CardDescription>
                  The complete API reference for the ToggleGroup component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`interface ToggleGroupProps {
  type: "single" | "multiple"
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  value?: string | string[]
  defaultValue?: string | string[]
  onValueChange?: (value: string | string[]) => void
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

interface ToggleGroupItemProps {
  value: string
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  disabled?: boolean
  className?: string
  children: React.ReactNode
  "aria-label": string
}

// Type behavior:
// - "single": Only one item can be selected
// - "multiple": Multiple items can be selected

// Value types:
// - single: string (selected value)
// - multiple: string[] (array of selected values)

// Sizes:
// - sm: 32px height
// - default: 36px height
// - lg: 40px height`}
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
