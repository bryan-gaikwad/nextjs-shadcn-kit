"use client"

import { FieldDemo } from "@/components/examples/field-demo"
import { FieldCheckbox } from "@/components/examples/field-checkbox"
import { FieldSlider } from "@/components/examples/field-slider"
import { FieldHear } from "@/components/examples/field-hear"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function FieldPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <h1 className="text-4xl font-bold tracking-tight">Field</h1>
          <Badge variant="secondary">New</Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          A flexible field component for forms with label, description and validation.
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
                <CardTitle>Basic Field</CardTitle>
                <CardDescription>
                  Standard field with input and label.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FieldDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Field with Checkbox</CardTitle>
                <CardDescription>
                  Field component with checkbox input.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FieldCheckbox />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Field with Slider</CardTitle>
                <CardDescription>
                  Field component with range slider control.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FieldSlider />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Field Hear Example</CardTitle>
                <CardDescription>
                  Field with audio/hearing related functionality.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FieldHear />
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
                  <code>npx shadcn@latest add field</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`import { Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldDemo() {
  return (
    <Field>
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="Enter your email" />
      <FieldDescription>
        We'll never share your email with anyone else.
      </FieldDescription>
    </Field>
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
