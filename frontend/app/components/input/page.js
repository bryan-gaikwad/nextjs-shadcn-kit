"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Input Demo (from GitHub registry)
function InputDemo() {
  return (
    <div className="flex flex-col flex-wrap gap-4 md:flex-row">
      <Input type="email" placeholder="Email" />
      <Input type="text" placeholder="Error" aria-invalid="true" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Number" />
      <Input type="file" placeholder="File" />
      <Input type="tel" placeholder="Tel" />
      <Input type="text" placeholder="Text" />
      <Input type="url" placeholder="URL" />
      <Input type="search" placeholder="Search" />
      <Input type="date" placeholder="Date" />
      <Input type="datetime-local" placeholder="Datetime Local" />
      <Input type="month" placeholder="Month" />
      <Input type="time" placeholder="Time" />
      <Input type="week" placeholder="Week" />
      <Input disabled placeholder="Disabled" />
    </div>
  )
}

export default function InputComponentPage() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 lg:px-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold tracking-tight">Input</h1>
            <Badge variant="secondary">Components</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            Displays a form input field or a component that looks like an input field.
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
                <CardTitle>Input Demo</CardTitle>
                <CardDescription>
                  Different input types and states including email, password, number, file, and disabled inputs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InputDemo />
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
                  <code>npx shadcn@latest add input</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`import { Input } from "@/components/ui/input"

export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`// Different input types
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Number" />
<Input type="file" placeholder="File" />
<Input type="tel" placeholder="Phone" />
<Input type="url" placeholder="URL" />
<Input type="search" placeholder="Search" />
<Input type="date" placeholder="Date" />

// Input states
<Input type="text" placeholder="Error" aria-invalid="true" />
<Input disabled placeholder="Disabled" />

// Input with Label
<div className="grid gap-3">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Email" />
</div>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
