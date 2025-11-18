"use client"

import { ButtonGroupDemo } from "@/components/examples/button-group-demo"
import { ButtonGroupInputGroup } from "@/components/examples/button-group-input-group"
import { ButtonGroupNested } from "@/components/examples/button-group-nested"
import { ButtonGroupPopover } from "@/components/examples/button-group-popover"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ButtonGroupPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <h1 className="text-4xl font-bold tracking-tight">Button Group</h1>
          <Badge variant="secondary">New</Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          A set of related buttons grouped together.
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
                <CardTitle>Basic Button Group</CardTitle>
                <CardDescription>
                  Simple button group with multiple actions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ButtonGroupDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button Group with Input</CardTitle>
                <CardDescription>
                  Button group combined with input elements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ButtonGroupInputGroup />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nested Button Group</CardTitle>
                <CardDescription>
                  Complex button group with nested elements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ButtonGroupNested />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button Group with Popover</CardTitle>
                <CardDescription>
                  Button group integrated with popover functionality.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ButtonGroupPopover />
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
                  <code>npx shadcn@latest add button-group</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`import { ButtonGroup } from "@/components/ui/button-group"

export function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </ButtonGroup>
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
