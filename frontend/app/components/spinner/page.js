"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Spinner } from "@/components/ui/spinner"
import { Loader2 } from "lucide-react"
import { useState, useEffect } from "react"

function SpinnerDemo() {
  return (
    <div className="flex flex-wrap items-start gap-6">
      <div className="flex flex-col items-center gap-4">
        <div className="text-sm font-medium">Basic Spinner</div>
        <Spinner />
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="text-sm font-medium">Different Sizes</div>
        <div className="flex items-center gap-4">
          <Spinner className="size-3" />
          <Spinner className="size-4" />
          <Spinner className="size-6" />
          <Spinner className="size-8" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="text-sm font-medium">Loading Buttons</div>
        <div className="flex items-center gap-2">
          <Button disabled size="sm">
            <Spinner />
            Loading...
          </Button>
          <Button variant="outline" disabled size="sm">
            <Spinner />
            Please wait
          </Button>
        </div>
      </div>
    </div>
  )
}

function SpinnerColorDemo() {
  return (
    <div className="flex items-center justify-center gap-6">
      <Spinner className="size-6 text-red-500" />
      <Spinner className="size-6 text-green-500" />
      <Spinner className="size-6 text-blue-500" />
      <Spinner className="size-6 text-yellow-500" />
      <Spinner className="size-6 text-purple-500" />
    </div>
  )
}

function SpinnerButtonsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>
        <Spinner />
        Loading...
      </Button>
      <Button variant="outline" disabled>
        <Spinner />
        Please wait
      </Button>
      <Button variant="secondary" disabled>
        <Spinner />
        Processing
      </Button>
      <Button variant="destructive" disabled>
        <Spinner />
        Deleting
      </Button>
      <Button variant="ghost" disabled>
        <Spinner />
        Saving
      </Button>
    </div>
  )
}

function SpinnerBadgeDemo() {
  return (
    <div className="flex items-center gap-4">
      <Badge>
        <Spinner />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner />
        Processing
      </Badge>
      <Badge variant="destructive">
        <Spinner />
        Error
      </Badge>
    </div>
  )
}

function SpinnerVariationsDemo() {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-sm font-medium">Default Spinner</h4>
          <Spinner />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-sm font-medium">Custom Color</h4>
          <Spinner className="text-blue-500" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-sm font-medium">Large Size</h4>
          <Spinner className="size-8" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-sm font-medium">Interactive Loading</h4>
          <Button onClick={handleClick} disabled={isLoading}>
            {isLoading && <Spinner />}
            {isLoading ? 'Loading...' : 'Click to Load'}
          </Button>
        </div>
      </div>
    </div>
  )
}

function SpinnerStatesDemo() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsLoading(false)
            return 0
          }
          return prev + 10
        })
      }, 200)
      return () => clearInterval(timer)
    }
  }, [isLoading])

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid grid-cols-2 gap-8">
        <Card className="p-4">
          <div className="flex flex-col items-center gap-3">
            <Spinner className="size-6" />
            <p className="text-sm text-muted-foreground">Loading data...</p>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex flex-col items-center gap-3">
            <Spinner className="size-6 text-green-500" />
            <p className="text-sm text-muted-foreground">Syncing files...</p>
          </div>
        </Card>
      </div>
      
      <div className="flex items-center gap-4">
        <Button 
          onClick={() => setIsLoading(true)} 
          disabled={isLoading}
          variant="outline"
        >
          {isLoading && <Spinner />}
          Start Process {isLoading && `(${progress}%)`}
        </Button>
      </div>
    </div>
  )
}

export default function SpinnerPage() {
  return (
    <div className="container mx-auto max-w-6xl p-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <Loader2 className="size-4 animate-spin" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Spinner</h1>
          <p className="text-muted-foreground">
            An indicator that can be used to show a loading state.
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
                <CardTitle>Basic Spinner</CardTitle>
                <CardDescription>
                  Simple spinner component with different sizes and usage in buttons.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SpinnerDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Color Variations</CardTitle>
                <CardDescription>
                  Spinners with different colors using utility classes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SpinnerColorDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Loading Buttons</CardTitle>
                <CardDescription>
                  Buttons with loading states using spinners.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SpinnerButtonsDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Badge with Spinner</CardTitle>
                <CardDescription>
                  Spinners inside badges for status indicators.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SpinnerBadgeDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Spinner Variations</CardTitle>
                <CardDescription>
                  Different spinner configurations and interactive states.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SpinnerVariationsDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Loading States</CardTitle>
                <CardDescription>
                  Real-world loading scenarios with progress indication.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SpinnerStatesDemo />
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
{`npx shadcn-ui@latest add spinner`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>
                  Import and use the Spinner component in your React component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { Spinner } from "@/components/ui/spinner"

export function SpinnerDemo() {
  return <Spinner />
}

// Basic loading button
export function LoadingButton() {
  return (
    <Button disabled>
      <Spinner />
      Loading...
    </Button>
  )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Size Variations</CardTitle>
                <CardDescription>
                  Different spinner sizes using Tailwind CSS classes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Different sizes
<Spinner className="size-3" />  // Small
<Spinner className="size-4" />  // Default
<Spinner className="size-6" />  // Medium
<Spinner className="size-8" />  // Large

// Custom colors
<Spinner className="text-red-500" />
<Spinner className="text-green-500" />
<Spinner className="text-blue-500" />`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Loading States</CardTitle>
                <CardDescription>
                  Using spinners in different loading scenarios.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Button loading states
<Button disabled>
  <Spinner />
  Processing...
</Button>

<Button variant="outline" disabled>
  <Spinner />
  Please wait
</Button>

// Badge with spinner
<Badge>
  <Spinner />
  Syncing
</Badge>

// Conditional loading
{isLoading ? (
  <div className="flex items-center gap-2">
    <Spinner />
    <span>Loading...</span>
  </div>
) : (
  <span>Content loaded!</span>
)}`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Component Source</CardTitle>
                <CardDescription>
                  The Spinner component is built using Lucide icons.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { Loader2Icon } from "lucide-react"
import { cn } from "@/lib/utils"

function Spinner({ className, ...props }) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }`}
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
