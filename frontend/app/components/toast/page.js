"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"
import { Bell, CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react"
import { useState } from "react"

function BasicToastDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <Button 
        variant="outline" 
        onClick={() => toast("Event has been created")}
      >
        Show Toast
      </Button>
      <Button 
        variant="outline" 
        onClick={() => toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM"
        })}
      >
        With Description
      </Button>
      <Button 
        variant="outline" 
        onClick={() => toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => toast("Event creation undone!")
          }
        })}
      >
        With Action
      </Button>
    </div>
  )
}

function ToastTypesDemo() {
  return (
    <div className="flex flex-wrap items-start gap-3">
      <Button 
        variant="outline" 
        onClick={() => toast.success("Event has been created")}
        className="text-green-600 hover:text-green-700"
      >
        Success
      </Button>
      <Button 
        variant="outline" 
        onClick={() => toast.info("Be at the area 10 minutes before the event time")}
        className="text-blue-600 hover:text-blue-700"
      >
        Info
      </Button>
      <Button 
        variant="outline" 
        onClick={() => toast.warning("Event start time cannot be earlier than 8am")}
        className="text-yellow-600 hover:text-yellow-700"
      >
        Warning
      </Button>
      <Button 
        variant="outline" 
        onClick={() => toast.error("Event has not been created")}
        className="text-red-600 hover:text-red-700"
      >
        Error
      </Button>
      <Button 
        variant="outline" 
        onClick={() => {
          const id = toast.loading("Creating event...")
          setTimeout(() => {
            toast.success("Event created successfully!", { id })
          }, 2000)
        }}
      >
        Loading
      </Button>
    </div>
  )
}

function ToastActionsDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <Button 
        variant="outline" 
        onClick={() => toast.message("File uploaded", {
          action: {
            label: "View",
            onClick: () => toast("Opening file...")
          }
        })}
      >
        With Action
      </Button>
      <Button 
        variant="outline" 
        onClick={() => toast.message("Changes saved", {
          cancel: {
            label: "Cancel",
            onClick: () => toast("Action cancelled")
          }
        })}
      >
        With Cancel
      </Button>
      <Button 
        variant="outline" 
        onClick={() => toast.message("Task completed", {
          action: {
            label: "Undo",
            onClick: () => toast("Task undone")
          },
          cancel: {
            label: "Dismiss",
            onClick: () => toast("Toast dismissed")
          }
        })}
      >
        Both Actions
      </Button>
    </div>
  )
}

function ToastPositionDemo() {
  const positions = [
    { label: "Top Left", position: "top-left" },
    { label: "Top Center", position: "top-center" },
    { label: "Top Right", position: "top-right" },
    { label: "Bottom Left", position: "bottom-left" },
    { label: "Bottom Center", position: "bottom-center" },
    { label: "Bottom Right", position: "bottom-right" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {positions.map((pos) => (
        <Button 
          key={pos.position}
          variant="outline" 
          size="sm"
          onClick={() => toast(`Toast from ${pos.label.toLowerCase()}`, {
            position: pos.position
          })}
        >
          {pos.label}
        </Button>
      ))}
    </div>
  )
}

function ToastPromiseDemo() {
  const handlePromise = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 
          ? resolve({ name: "Event" })
          : reject(new Error("Failed to create event"))
      }, 2000)
    })

    toast.promise(promise, {
      loading: "Creating event...",
      success: (data) => `${data.name} has been created successfully!`,
      error: "Failed to create event"
    })
  }

  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" onClick={handlePromise}>
        Promise Toast
      </Button>
      <p className="text-sm text-muted-foreground">
        50% chance of success/failure
      </p>
    </div>
  )
}

function ToastCustomDemo() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-wrap items-start gap-4">
      <Button 
        variant="outline" 
        onClick={() => {
          setCount(c => c + 1)
          toast(`Toast #${count + 1}`, {
            duration: 5000,
            closeButton: true
          })
        }}
      >
        5s Duration + Close Button
      </Button>
      <Button 
        variant="outline" 
        onClick={() => toast("Persistent toast", {
          duration: Infinity
        })}
      >
        Persistent Toast
      </Button>
      <Button 
        variant="outline" 
        onClick={() => toast.custom((t) => (
          <div className="bg-background border rounded-lg p-4 shadow-lg flex items-center gap-3">
            <CheckCircle className="size-5 text-green-500" />
            <div>
              <p className="font-medium">Custom Toast</p>
              <p className="text-sm text-muted-foreground">This is a custom styled toast</p>
            </div>
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={() => toast.dismiss(t)}
            >
              ✕
            </Button>
          </div>
        ))}
      >
        Custom Style
      </Button>
    </div>
  )
}

function ToastControlDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <Button 
        variant="outline" 
        onClick={() => {
          toast("Toast 1")
          toast("Toast 2") 
          toast("Toast 3")
        }}
      >
        Show Multiple
      </Button>
      <Button 
        variant="outline" 
        onClick={() => toast.dismiss()}
      >
        Dismiss All
      </Button>
      <Button 
        variant="outline" 
        onClick={() => {
          const id = toast("Dismissible toast", {
            duration: 10000
          })
          setTimeout(() => toast.dismiss(id), 3000)
        }}
      >
        Auto Dismiss (3s)
      </Button>
    </div>
  )
}

export default function ToastPage() {
  return (
    <div className="container mx-auto max-w-6xl p-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <Bell className="size-4" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Toast</h1>
          <p className="text-muted-foreground">
            A succinct message that is displayed temporarily. Built with Sonner.
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
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="size-5 text-blue-600" />
                  Important Note
                </CardTitle>
                <CardDescription>
                  The toast component has been updated to use <strong>Sonner</strong> instead of Radix UI Toast. 
                  This provides better performance, animations, and developer experience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Basic Toast</CardTitle>
                <CardDescription>
                  Simple toast messages with optional descriptions and actions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BasicToastDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Toast Types</CardTitle>
                <CardDescription>
                  Different toast variants for various message types.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToastTypesDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Toast Actions</CardTitle>
                <CardDescription>
                  Toasts with action buttons and cancel options.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToastActionsDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Toast Positions</CardTitle>
                <CardDescription>
                  Control where toasts appear on the screen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToastPositionDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Promise Toast</CardTitle>
                <CardDescription>
                  Show loading, success, and error states for async operations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToastPromiseDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Toast</CardTitle>
                <CardDescription>
                  Custom duration, persistent toasts, and custom styling.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToastCustomDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Toast Control</CardTitle>
                <CardDescription>
                  Control multiple toasts and programmatic dismissal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToastControlDemo />
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
                  Add the Sonner toast component to your project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`npx shadcn-ui@latest add sonner`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Setup</CardTitle>
                <CardDescription>
                  Add the Toaster component to your app layout.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// app/layout.tsx
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Basic Usage</CardTitle>
                <CardDescription>
                  Import and use the toast function in your components.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { toast } from "sonner"

// Simple toast
toast("Event has been created")

// With description
toast("Event has been created", {
  description: "Sunday, December 03, 2023 at 9:00 AM"
})

// With action
toast("Event has been created", {
  description: "Your event is scheduled",
  action: {
    label: "Undo",
    onClick: () => toast("Event creation undone!")
  }
})`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Toast Types</CardTitle>
                <CardDescription>
                  Different toast variants for various message types.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Success toast
toast.success("Event created successfully!")

// Info toast
toast.info("Meeting starts in 10 minutes")

// Warning toast  
toast.warning("Event start time cannot be earlier than 8am")

// Error toast
toast.error("Failed to create event")

// Loading toast
const id = toast.loading("Creating event...")
// Later update it
toast.success("Event created!", { id })`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Promise Toast</CardTitle>
                <CardDescription>
                  Handle async operations with automatic state updates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`const promise = fetch('/api/events', { method: 'POST' })

toast.promise(promise, {
  loading: "Creating event...",
  success: (data) => "Event created successfully!",
  error: "Failed to create event"
})

// With typed response
toast.promise<{ id: string }>(promise, {
  loading: "Saving...",
  success: (data) => \`Event \${data.id} created!\`,
  error: "Save failed"
})`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Advanced Options</CardTitle>
                <CardDescription>
                  Customize duration, position, and dismiss behavior.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Custom duration
toast("Auto-close in 5 seconds", {
  duration: 5000
})

// Persistent toast
toast("Click to dismiss", {
  duration: Infinity
})

// Position
toast("Top-right toast", {
  position: "top-right"
})

// With close button
toast("Closable toast", {
  closeButton: true
})

// Dismiss programmatically
const id = toast("Temporary toast")
setTimeout(() => toast.dismiss(id), 3000)

// Dismiss all toasts
toast.dismiss()`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Toast</CardTitle>
                <CardDescription>
                  Create completely custom toast components.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`toast.custom((t) => (
  <div className="bg-background border rounded-lg p-4 shadow-lg">
    <div className="flex items-center gap-3">
      <CheckCircle className="size-5 text-green-500" />
      <div>
        <p className="font-medium">Custom Success</p>
        <p className="text-sm text-muted-foreground">
          Your action completed successfully
        </p>
      </div>
      <Button 
        size="sm" 
        variant="ghost" 
        onClick={() => toast.dismiss(t)}
      >
        ×
      </Button>
    </div>
  </div>
))`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Toaster Configuration</CardTitle>
                <CardDescription>
                  Configure global toast settings in your layout.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`<Toaster 
  position="top-right"
  theme="dark"
  richColors
  closeButton
  duration={4000}
  toastOptions={{
    style: {
      background: 'hsl(var(--background))',
      border: '1px solid hsl(var(--border))',
      color: 'hsl(var(--foreground))'
    }
  }}
/>`}
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
