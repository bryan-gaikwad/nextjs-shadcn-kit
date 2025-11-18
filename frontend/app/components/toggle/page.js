"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toggle } from "@/components/ui/toggle"
import { BoldIcon, ItalicIcon, UnderlineIcon, FontIcon, AlignLeftIcon, AlignCenterIcon, AlignRightIcon, MicIcon, MicOffIcon } from "lucide-react"
import { useState } from "react"

function ToggleDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <Toggle aria-label="Toggle italic">
        <ItalicIcon />
      </Toggle>
      
      <Toggle aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
      
      <Toggle aria-label="Toggle underline">
        <UnderlineIcon />
      </Toggle>
    </div>
  )
}

function ToggleVariants() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Default</p>
        <Toggle variant="default" aria-label="Toggle italic">
          <ItalicIcon />
        </Toggle>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">Outline</p>
        <Toggle variant="outline" aria-label="Toggle bold">
          <BoldIcon />
        </Toggle>
      </div>
    </div>
  )
}

function ToggleSizes() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Small</p>
        <Toggle size="sm" aria-label="Toggle italic">
          <ItalicIcon />
        </Toggle>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">Default</p>
        <Toggle size="default" aria-label="Toggle bold">
          <BoldIcon />
        </Toggle>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">Large</p>
        <Toggle size="lg" aria-label="Toggle underline">
          <UnderlineIcon />
        </Toggle>
      </div>
    </div>
  )
}

function ToggleWithText() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <Toggle aria-label="Toggle italic">
        <ItalicIcon />
        Italic
      </Toggle>
      
      <Toggle aria-label="Toggle bold">
        <BoldIcon />
        Bold
      </Toggle>
      
      <Toggle variant="outline" aria-label="Toggle underline">
        <UnderlineIcon />
        Underline
      </Toggle>
    </div>
  )
}

function ToggleControlled() {
  const [pressed, setPressed] = useState(false)
  
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Current state: {pressed ? "On" : "Off"}
      </p>
      <Toggle 
        pressed={pressed} 
        onPressedChange={setPressed}
        aria-label="Toggle microphone"
      >
        {pressed ? <MicOffIcon /> : <MicIcon />}
        {pressed ? "Mute" : "Unmute"}
      </Toggle>
    </div>
  )
}

function ToggleDisabled() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <Toggle disabled aria-label="Disabled toggle">
        <ItalicIcon />
      </Toggle>
      
      <Toggle disabled pressed aria-label="Disabled toggle pressed">
        <BoldIcon />
      </Toggle>
    </div>
  )
}

export default function TogglePage() {
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
            <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135z"/>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Toggle</h1>
          <p className="text-muted-foreground">
            A two-state button that can be either on or off.
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
                <CardTitle>Basic Toggle</CardTitle>
                <CardDescription>
                  Simple toggle buttons for common formatting actions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToggleDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Variants</CardTitle>
                <CardDescription>
                  Toggle comes in different variants: default and outline.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToggleVariants />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sizes</CardTitle>
                <CardDescription>
                  Toggle supports small, default, and large sizes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToggleSizes />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>With Text</CardTitle>
                <CardDescription>
                  Toggle can include both icons and text labels.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToggleWithText />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Controlled</CardTitle>
                <CardDescription>
                  Control the toggle state programmatically.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToggleControlled />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Disabled</CardTitle>
                <CardDescription>
                  Toggle can be disabled in both on and off states.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToggleDisabled />
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
{`npx shadcn-ui@latest add toggle`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>
                  Import and use the Toggle component in your React component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { Toggle } from "@/components/ui/toggle"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
    </Toggle>
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
                  Different toggle configurations and use cases.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Basic toggle
<Toggle aria-label="Toggle italic">
  <ItalicIcon />
</Toggle>

// With text
<Toggle aria-label="Toggle bold">
  <BoldIcon />
  Bold
</Toggle>

// Different variants
<Toggle variant="default" aria-label="Default">
  <ItalicIcon />
</Toggle>
<Toggle variant="outline" aria-label="Outline">
  <BoldIcon />
</Toggle>

// Different sizes
<Toggle size="sm" aria-label="Small">
  <ItalicIcon />
</Toggle>
<Toggle size="default" aria-label="Default">
  <BoldIcon />
</Toggle>
<Toggle size="lg" aria-label="Large">
  <UnderlineIcon />
</Toggle>

// Controlled toggle
const [pressed, setPressed] = useState(false)

<Toggle 
  pressed={pressed} 
  onPressedChange={setPressed}
  aria-label="Toggle microphone"
>
  {pressed ? <MicOffIcon /> : <MicIcon />}
  {pressed ? "Mute" : "Unmute"}
</Toggle>

// Disabled toggle
<Toggle disabled aria-label="Disabled">
  <ItalicIcon />
</Toggle>`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
                <CardDescription>
                  The complete API reference for the Toggle component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`interface ToggleProps {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  pressed?: boolean
  onPressedChange?: (pressed: boolean) => void
  disabled?: boolean
  className?: string
  children?: React.ReactNode
  "aria-label": string
}

// Variants:
// - default: Transparent background
// - outline: Border with transparent background

// Sizes:
// - sm: 32px height
// - default: 36px height 
// - lg: 40px height

// States:
// - data-state="off": Toggle is off
// - data-state="on": Toggle is on`}
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
