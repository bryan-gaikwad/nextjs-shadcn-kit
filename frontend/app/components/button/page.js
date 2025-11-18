"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpIcon, ArrowUpRightIcon, Mail, Loader2 } from "lucide-react"

// Button Demo (from registry)
function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}

// Button Variants
function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}

// Button Sizes (from registry)
function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Icon">
        <ArrowUpRightIcon />
      </Button>
    </div>
  )
}

// Button With Icon (from registry)
function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>
        <Mail className="mr-2 h-4 w-4" />
        Login with Email
      </Button>
      <Button>
        Send Message
        <ArrowUpRightIcon className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

// Button Loading
function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  )
}

export default function ButtonComponentPage() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 lg:px-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">Button</h1>
          <p className="text-lg text-muted-foreground">
            Displays a button or a component that looks like a button.
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
                <CardTitle>Button Demo</CardTitle>
                <CardDescription>
                  Basic button with icon variant.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ButtonDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Variants</CardTitle>
                <CardDescription>
                  Different button styles.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ButtonVariants />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sizes</CardTitle>
                <CardDescription>
                  Different button sizes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ButtonSizes />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>With Icon</CardTitle>
                <CardDescription>
                  Buttons with icons.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ButtonWithIcon />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Loading State</CardTitle>
                <CardDescription>
                  Button with loading spinner.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ButtonLoading />
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
                  <code>npx shadcn@latest add button</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Button</Button>
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
                  <code>{`// Primary
<Button>Button</Button>

// Secondary  
<Button variant="secondary">Secondary</Button>

// Destructive
<Button variant="destructive">Destructive</Button>

// Outline
<Button variant="outline">Outline</Button>

// Ghost
<Button variant="ghost">Ghost</Button>

// Link
<Button variant="link">Link</Button>

// Icon
<Button size="icon">
  <ArrowUpIcon />
</Button>

// With icon
<Button>
  <Mail className="mr-2 h-4 w-4" />
  Login with Email
</Button>

// Loading
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
