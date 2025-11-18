"use client"

import { AlertCircleIcon, CheckCircle2Icon, Terminal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Alert Demo (from shadcn registry)
function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}

// Destructive Alert
function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <AlertCircleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}

// Success Alert
function AlertSuccess() {
  return (
    <Alert>
      <CheckCircle2Icon className="h-4 w-4" />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  )
}

// Alert with only description
function AlertSimple() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertDescription>
        This is a simple alert with just a description and icon.
      </AlertDescription>
    </Alert>
  )
}

export default function AlertComponentPage() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 lg:px-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">Alert</h1>
          <p className="text-lg text-muted-foreground">
            Displays a callout for user attention.
          </p>
        </div>
      </div>

      <div className="px-4 lg:px-6">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Default Alert</CardTitle>
                <CardDescription>
                  A basic alert with icon, title, and description.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AlertDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Success Alert</CardTitle>
                <CardDescription>
                  A success alert to show positive feedback.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AlertSuccess />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Destructive Alert</CardTitle>
                <CardDescription>
                  An error alert for critical information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AlertDestructive />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Simple Alert</CardTitle>
                <CardDescription>
                  An alert with just an icon and description.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AlertSimple />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="code" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>npx shadcn@latest add alert</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`// Default alert
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>

// Destructive alert
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>

// Simple alert with description only
<Alert>
  <CheckCircle className="h-4 w-4" />
  <AlertDescription>
    Your changes have been saved.
  </AlertDescription>
</Alert>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
