'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export default function ScrollAreaPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Scroll Area</h1>
        <p className="text-muted-foreground">
          Augments native scroll functionality for custom, cross-browser styling.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Basic Scroll Area
              <Badge variant="secondary">Basic</Badge>
            </CardTitle>
            <CardDescription>
              A simple scroll area with vertical scrolling content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="flex justify-center p-4 border rounded-lg">
                  <ScrollArea className="h-72 w-48 rounded-md border">
                    <div className="p-4">
                      <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                      {tags.map((tag) => (
                        <div key={tag}>
                          <div className="text-sm">{tag}</div>
                          <Separator className="my-2" />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <div key={tag}>
        <div className="text-sm">{tag}</div>
        <Separator className="my-2" />
      </div>
    ))}
  </div>
</ScrollArea>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Horizontal Scrolling
              <Badge variant="secondary">Horizontal</Badge>
            </CardTitle>
            <CardDescription>
              Scroll area with horizontal content and custom scrollbar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="flex justify-center p-4 border rounded-lg">
                  <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
                    <div className="flex w-max space-x-4 p-4">
                      {artworks.map((artwork) => (
                        <figure key={artwork.artist} className="shrink-0">
                          <div className="overflow-hidden rounded-md">
                            <img
                              src={artwork.art}
                              alt={`Photo by ${artwork.artist}`}
                              className="aspect-[3/4] h-fit w-fit object-cover"
                              width={300}
                              height={400}
                            />
                          </div>
                          <figcaption className="pt-2 text-xs text-muted-foreground">
                            Photo by{" "}
                            <span className="font-semibold text-foreground">
                              {artwork.artist}
                            </span>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {artworks.map((artwork) => (
      <figure key={artwork.artist} className="shrink-0">
        <div className="overflow-hidden rounded-md">
          <img
            src={artwork.art}
            alt={\`Photo by \${artwork.artist}\`}
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <figcaption className="pt-2 text-xs text-muted-foreground">
          Photo by{" "}
          <span className="font-semibold text-foreground">
            {artwork.artist}
          </span>
        </figcaption>
      </figure>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Text Content Scrolling
              <Badge variant="secondary">Content</Badge>
            </CardTitle>
            <CardDescription>
              Scroll area for reading long text content with proper typography.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="flex justify-center p-4 border rounded-lg">
                  <ScrollArea className="h-[400px] w-[500px] rounded-md border p-4">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">Lorem Ipsum</h2>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste 
                        natus error sit voluptatem accusantium doloremque laudantium, totam rem 
                        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
                        beatae vitae dicta sunt explicabo.
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore 
                        et dolore magnam aliquam quaerat voluptatem.
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
                        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
                        vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil 
                        molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas 
                        nulla pariatur?
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                        excepturi sint occaecati cupiditate non provident, similique sunt in culpa 
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                      </p>
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`<ScrollArea className="h-[400px] w-[500px] rounded-md border p-4">
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Lorem Ipsum</h2>
    <p className="text-sm leading-relaxed text-muted-foreground">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
    <p className="text-sm leading-relaxed text-muted-foreground">
      Excepteur sint occaecat cupidatat non proident...
    </p>
    {/* More paragraphs... */}
  </div>
</ScrollArea>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              List with Actions
              <Badge variant="secondary">Interactive</Badge>
            </CardTitle>
            <CardDescription>
              Scrollable list with interactive elements and hover states.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="flex justify-center p-4 border rounded-lg">
                  <ScrollArea className="h-72 w-80 rounded-md border">
                    <div className="p-4">
                      <h4 className="mb-4 text-sm font-medium leading-none">Notifications</h4>
                      <div className="space-y-2">
                        {notifications.map((notification, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted cursor-pointer transition-colors"
                          >
                            <div className="flex-1">
                              <div className="font-medium text-sm">{notification.title}</div>
                              <div className="text-xs text-muted-foreground">{notification.description}</div>
                              <div className="text-xs text-muted-foreground mt-1">{notification.time}</div>
                            </div>
                            <Button size="sm" variant="ghost">
                              ✓
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`<ScrollArea className="h-72 w-80 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Notifications</h4>
    <div className="space-y-2">
      {notifications.map((notification, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted cursor-pointer transition-colors"
        >
          <div className="flex-1">
            <div className="font-medium text-sm">{notification.title}</div>
            <div className="text-xs text-muted-foreground">{notification.description}</div>
            <div className="text-xs text-muted-foreground mt-1">{notification.time}</div>
          </div>
          <Button size="sm" variant="ghost">
            ✓
          </Button>
        </div>
      ))}
    </div>
  </div>
</ScrollArea>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Grid Layout Scrolling
              <Badge variant="secondary">Grid</Badge>
            </CardTitle>
            <CardDescription>
              Scroll area with grid layout for cards or tiles.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="flex justify-center p-4 border rounded-lg">
                  <ScrollArea className="h-80 w-96 rounded-md border">
                    <div className="p-4">
                      <h4 className="mb-4 text-sm font-medium leading-none">Featured Items</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Array.from({ length: 20 }, (_, i) => (
                          <div
                            key={i}
                            className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
                          >
                            <div className="text-center">
                              <div className="text-2xl mb-2">📦</div>
                              <div className="text-xs text-muted-foreground">Item {i + 1}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`<ScrollArea className="h-80 w-96 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Featured Items</h4>
    <div className="grid grid-cols-2 gap-4">
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
        >
          <div className="text-center">
            <div className="text-2xl mb-2">📦</div>
            <div className="text-xs text-muted-foreground">Item {i + 1}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</ScrollArea>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Sample data
const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const artworks = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Annie Spratt",
    art: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "John Dorian",
    art: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=300&q=80",
  },
]

const notifications = [
  {
    title: "New message received",
    description: "You have a new message from John Doe",
    time: "2 minutes ago"
  },
  {
    title: "System update available",
    description: "A new system update is ready to install",
    time: "1 hour ago"
  },
  {
    title: "Meeting reminder",
    description: "Team meeting starts in 30 minutes",
    time: "3 hours ago"
  },
  {
    title: "Task completed",
    description: "Your deployment task has been completed successfully",
    time: "5 hours ago"
  },
  {
    title: "New user signup",
    description: "A new user has joined your workspace",
    time: "1 day ago"
  },
  {
    title: "Payment processed",
    description: "Your monthly subscription payment has been processed",
    time: "2 days ago"
  },
  {
    title: "Security alert",
    description: "New login detected from unknown device",
    time: "3 days ago"
  },
  {
    title: "Report generated",
    description: "Your monthly analytics report is ready",
    time: "1 week ago"
  }
]
