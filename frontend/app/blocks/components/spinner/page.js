"use client"

import { SpinnerBadge } from "@/components/examples/spinner-badge"
import { SpinnerEmpty } from "@/components/examples/spinner-empty"
import { Spinner } from "@/components/ui/spinner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function SpinnerPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <h1 className="text-4xl font-bold tracking-tight">Spinner</h1>
          <Badge variant="secondary">New</Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          Display a loading indicator to show that content is being loaded.
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
                <CardTitle>Basic Spinner</CardTitle>
                <CardDescription>
                  Simple loading spinner indicator.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <Spinner />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Spinner with Badge</CardTitle>
                <CardDescription>
                  Spinner integrated with badge components.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SpinnerBadge />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Spinner in Empty State</CardTitle>
                <CardDescription>
                  Spinner used within empty state layouts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SpinnerEmpty />
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
                  <code>npx shadcn@latest add spinner</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`import { Spinner } from "@/components/ui/spinner"

export function SpinnerDemo() {
  return <Spinner />
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
