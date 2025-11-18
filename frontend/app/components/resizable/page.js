'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'

export default function ResizablePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Resizable</h1>
        <p className="text-muted-foreground">
          Resizable panel groups and layouts using react-resizable-panels.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Basic Resizable
              <Badge variant="secondary">Basic</Badge>
            </CardTitle>
            <CardDescription>
              A simple resizable panel layout with horizontal divider.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="h-[200px] w-full">
                  <ResizablePanelGroup
                    direction="horizontal"
                    className="max-w-md rounded-lg border"
                  >
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">One</span>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Two</span>
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`<ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">One</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Two</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Nested Panels
              <Badge variant="secondary">Advanced</Badge>
            </CardTitle>
            <CardDescription>
              Resizable panels with nested layouts and multiple dividers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="h-[400px] w-full">
                  <ResizablePanelGroup
                    direction="horizontal"
                    className="max-w-4xl rounded-lg border"
                  >
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">One</span>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={50}>
                      <ResizablePanelGroup direction="vertical">
                        <ResizablePanel defaultSize={25}>
                          <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Two</span>
                          </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={75}>
                          <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Three</span>
                          </div>
                        </ResizablePanel>
                      </ResizablePanelGroup>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`<ResizablePanelGroup direction="horizontal" className="max-w-4xl rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">One</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Three</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Vertical Layout
              <Badge variant="secondary">Layout</Badge>
            </CardTitle>
            <CardDescription>
              Resizable panels arranged vertically with handle grip.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="h-[300px] w-full max-w-md mx-auto">
                  <ResizablePanelGroup direction="vertical" className="rounded-lg border">
                    <ResizablePanel defaultSize={25}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Header</span>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Content</span>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={25}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Footer</span>
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`<ResizablePanelGroup direction="vertical" className="rounded-lg border">
  <ResizablePanel defaultSize={25}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Header</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Content</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={25}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Footer</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Dashboard Layout
              <Badge variant="secondary">Application</Badge>
            </CardTitle>
            <CardDescription>
              A complete dashboard layout with sidebar, main content, and panel areas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="h-[500px] w-full">
                  <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
                    <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
                      <div className="flex h-full flex-col p-4">
                        <div className="font-semibold mb-4">Sidebar</div>
                        <div className="space-y-2 text-sm">
                          <div className="p-2 rounded bg-muted">Dashboard</div>
                          <div className="p-2 rounded hover:bg-muted cursor-pointer">Analytics</div>
                          <div className="p-2 rounded hover:bg-muted cursor-pointer">Reports</div>
                          <div className="p-2 rounded hover:bg-muted cursor-pointer">Settings</div>
                        </div>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={60}>
                      <ResizablePanelGroup direction="vertical">
                        <ResizablePanel defaultSize={70}>
                          <div className="flex h-full items-center justify-center p-6">
                            <div className="text-center">
                              <h3 className="font-semibold text-lg mb-2">Main Content</h3>
                              <p className="text-muted-foreground">Your primary content area</p>
                            </div>
                          </div>
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel defaultSize={30}>
                          <div className="flex h-full items-center justify-center p-6">
                            <div className="text-center">
                              <h4 className="font-semibold mb-2">Console</h4>
                              <p className="text-muted-foreground text-sm">Debug output</p>
                            </div>
                          </div>
                        </ResizablePanel>
                      </ResizablePanelGroup>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
                      <div className="flex h-full flex-col p-4">
                        <div className="font-semibold mb-4">Properties</div>
                        <div className="space-y-2 text-sm">
                          <div>
                            <label className="text-muted-foreground">Width</label>
                            <div className="p-1 border rounded">Auto</div>
                          </div>
                          <div>
                            <label className="text-muted-foreground">Height</label>
                            <div className="p-1 border rounded">Auto</div>
                          </div>
                          <div>
                            <label className="text-muted-foreground">Margin</label>
                            <div className="p-1 border rounded">0</div>
                          </div>
                        </div>
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`<ResizablePanelGroup direction="horizontal" className="rounded-lg border">
  <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
    <div className="flex h-full flex-col p-4">
      <div className="font-semibold mb-4">Sidebar</div>
      <div className="space-y-2 text-sm">
        <div className="p-2 rounded bg-muted">Dashboard</div>
        <div className="p-2 rounded hover:bg-muted cursor-pointer">Analytics</div>
        <div className="p-2 rounded hover:bg-muted cursor-pointer">Reports</div>
        <div className="p-2 rounded hover:bg-muted cursor-pointer">Settings</div>
      </div>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={60}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center p-6">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Main Content</h3>
            <p className="text-muted-foreground">Your primary content area</p>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={30}>
        <div className="flex h-full items-center justify-center p-6">
          <div className="text-center">
            <h4 className="font-semibold mb-2">Console</h4>
            <p className="text-muted-foreground text-sm">Debug output</p>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
    <div className="flex h-full flex-col p-4">
      <div className="font-semibold mb-4">Properties</div>
      <div className="space-y-2 text-sm">
        <div>
          <label className="text-muted-foreground">Width</label>
          <div className="p-1 border rounded">Auto</div>
        </div>
        <div>
          <label className="text-muted-foreground">Height</label>
          <div className="p-1 border rounded">Auto</div>
        </div>
        <div>
          <label className="text-muted-foreground">Margin</label>
          <div className="p-1 border rounded">0</div>
        </div>
      </div>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Handle Customization
              <Badge variant="secondary">Styling</Badge>
            </CardTitle>
            <CardDescription>
              Different handle styles and customization options.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="grid gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Simple Handle</h4>
                    <div className="h-[150px] max-w-md">
                      <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
                        <ResizablePanel defaultSize={50}>
                          <div className="flex h-full items-center justify-center p-4">
                            <span className="font-semibold">Left</span>
                          </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={50}>
                          <div className="flex h-full items-center justify-center p-4">
                            <span className="font-semibold">Right</span>
                          </div>
                        </ResizablePanel>
                      </ResizablePanelGroup>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Handle with Grip</h4>
                    <div className="h-[150px] max-w-md">
                      <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
                        <ResizablePanel defaultSize={50}>
                          <div className="flex h-full items-center justify-center p-4">
                            <span className="font-semibold">Left</span>
                          </div>
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel defaultSize={50}>
                          <div className="flex h-full items-center justify-center p-4">
                            <span className="font-semibold">Right</span>
                          </div>
                        </ResizablePanel>
                      </ResizablePanelGroup>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// Simple handle
<ResizablePanelGroup direction="horizontal" className="rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-4">
      <span className="font-semibold">Left</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-4">
      <span className="font-semibold">Right</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>

// Handle with grip
<ResizablePanelGroup direction="horizontal" className="rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-4">
      <span className="font-semibold">Left</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-4">
      <span className="font-semibold">Right</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
