"use client"

import { InputGroupDemo } from "@/components/examples/input-group-demo"
import { InputGroupButtonExample } from "@/components/examples/input-group-button-example"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function InputGroupPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <h1 className="text-4xl font-bold tracking-tight">Input Group</h1>
          <Badge variant="secondary">New</Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          Group form controls and text together on a single line.
        </p>
      </div>

      <div className="space-y-6">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Input Group</CardTitle>
                <CardDescription>
                  Input with addon text and buttons.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InputGroupDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Input Group with Button</CardTitle>
                <CardDescription>
                  Input group combined with action buttons.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InputGroupButtonExample />
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
                  <code>npx shadcn@latest add input-group</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`import { InputGroup, InputGroupText } from "@/components/ui/input-group"
import { Input } from "@/components/ui/input"

export function InputGroupDemo() {
  return (
    <InputGroup>
      <InputGroupText>@</InputGroupText>
      <Input placeholder="username" />
      <InputGroupText>.example.com</InputGroupText>
    </InputGroup>
  )
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
