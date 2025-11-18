"use client"

import { EmptyAvatarGroup } from "@/components/examples/empty-avatar-group"
import { SpinnerEmpty } from "@/components/examples/spinner-empty"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function EmptyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <h1 className="text-4xl font-bold tracking-tight">Empty</h1>
          <Badge variant="secondary">New</Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          Display an empty state when there is no content to show.
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
                <CardTitle>Empty with Avatar Group</CardTitle>
                <CardDescription>
                  Empty state with avatar group display.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <EmptyAvatarGroup />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Empty with Spinner</CardTitle>
                <CardDescription>
                  Empty state combined with loading spinner.
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
                  <code>npx shadcn@latest add empty</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`import { Empty } from "@/components/ui/empty"

export function EmptyDemo() {
  return (
    <Empty>
      <Empty.Image />
      <Empty.Title>No data found</Empty.Title>
      <Empty.Description>
        There are no items to display at the moment.
      </Empty.Description>
    </Empty>
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
