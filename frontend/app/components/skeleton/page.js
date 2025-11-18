"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState, useEffect } from "react"

function BasicSkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

function ProfileCardDemo() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleReload = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="space-y-4">
      <Button onClick={handleReload} size="sm">
        Reload Data
      </Button>
      <Card className="w-full max-w-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-4">
            {loading ? (
              <Skeleton className="h-12 w-12 rounded-full" />
            ) : (
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            )}
            <div className="space-y-2 flex-1">
              {loading ? (
                <>
                  <Skeleton className="h-4 w-[120px]" />
                  <Skeleton className="h-3 w-[100px]" />
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-sm text-muted-foreground">@johndoe</p>
                </>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
              <div className="flex justify-between mt-4">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-20" />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Software Engineer passionate about creating amazing user experiences 
                and building scalable applications.
              </p>
              <div className="flex justify-between mt-4">
                <Button size="sm">Follow</Button>
                <Button variant="outline" size="sm">Message</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function TableSkeletonDemo() {
  return (
    <div className="w-full space-y-3">
      <div className="space-y-2">
        <Skeleton className="h-8 w-[150px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
      
      <div className="space-y-2">
        {/* Table Header */}
        <div className="flex space-x-4 py-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-4 w-[80px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
        
        {/* Table Rows */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex space-x-4 py-2">
            <div className="flex items-center space-x-3">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-[80px]" />
            </div>
            <Skeleton className="h-4 w-[120px]" />
            <Skeleton className="h-4 w-[60px]" />
            <Skeleton className="h-4 w-[80px]" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ArticleListSkeleton() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} className="w-full">
          <CardContent className="p-6">
            <div className="flex space-x-4">
              <Skeleton className="h-20 w-20 rounded-lg flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="flex space-x-4 mt-3">
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-3 w-12" />
                  </div>
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function SkeletonVariants() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label className="text-base font-medium">Different Shapes & Sizes</Label>
        <div className="space-y-6">
          {/* Text Lines */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Text Lines</Label>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
              <Skeleton className="h-4 w-3/6" />
            </div>
          </div>

          {/* Circles */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Circles (Avatars)</Label>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-12 w-12 rounded-full" />
              <Skeleton className="h-16 w-16 rounded-full" />
            </div>
          </div>

          {/* Rectangles */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Rectangles (Images/Cards)</Label>
            <div className="flex items-end space-x-4">
              <Skeleton className="h-20 w-20 rounded-md" />
              <Skeleton className="h-24 w-32 rounded-md" />
              <Skeleton className="h-28 w-40 rounded-lg" />
              <Skeleton className="h-32 w-48 rounded-xl" />
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Buttons</Label>
            <div className="flex items-center space-x-3">
              <Skeleton className="h-8 w-16 rounded-md" />
              <Skeleton className="h-9 w-20 rounded-md" />
              <Skeleton className="h-10 w-24 rounded-md" />
              <Skeleton className="h-11 w-28 rounded-lg" />
            </div>
          </div>

          {/* Custom Shapes */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Custom Shapes</Label>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-6 w-6 rounded-sm" />
              <Skeleton className="h-8 w-8 rounded-md" />
              <Skeleton className="h-10 w-10 rounded-lg" />
              <Skeleton className="h-12 w-12 rounded-xl" />
              <Skeleton className="h-12 w-12 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SkeletonPage() {
  return (
    <div className="container mx-auto max-w-6xl p-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2H1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2H0V2z"/>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Skeleton</h1>
          <p className="text-muted-foreground">
            Use to show a placeholder while content is loading.
          </p>
        </div>
        <div className="ml-auto">
          <Badge variant="secondary">Component</Badge>
        </div>
      </div>
      
      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Skeleton</CardTitle>
                <CardDescription>
                  A simple skeleton with avatar and text lines.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BasicSkeletonDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Skeleton Card</CardTitle>
                <CardDescription>
                  A card-like skeleton layout for content placeholders.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SkeletonCard />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Interactive Loading Demo</CardTitle>
                <CardDescription>
                  A real example showing skeleton loading state transitioning to actual content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProfileCardDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Table Skeleton</CardTitle>
                <CardDescription>
                  Skeleton layout for data tables with rows and columns.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TableSkeletonDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Article List Skeleton</CardTitle>
                <CardDescription>
                  Complex skeleton layout for article or blog post lists.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ArticleListSkeleton />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Skeleton Variants</CardTitle>
                <CardDescription>
                  Different skeleton shapes, sizes, and border radius options.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SkeletonVariants />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="code">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Installation</CardTitle>
                <CardDescription>
                  Copy and paste the following code into your project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`npx shadcn-ui@latest add skeleton`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>
                  Import and use the Skeleton component in your React component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Examples</CardTitle>
                <CardDescription>
                  Different skeleton patterns and use cases.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Basic skeleton card
function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

// Loading state with conditional rendering
function ProfileCard() {
  const [loading, setLoading] = useState(true)
  
  return (
    <Card>
      <CardContent>
        {loading ? (
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[160px]" />
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h3>John Doe</h3>
              <p>Software Engineer</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// List skeleton
function ArticlesSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex space-x-4">
          <Skeleton className="h-20 w-20 rounded" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      ))}
    </div>
  )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Different Shapes</CardTitle>
                <CardDescription>
                  Examples of different skeleton shapes and sizes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Circles (for avatars)
<Skeleton className="h-12 w-12 rounded-full" />

// Rectangles (for images/cards)
<Skeleton className="h-[200px] w-[300px] rounded-xl" />

// Text lines (various widths)
<Skeleton className="h-4 w-full" />
<Skeleton className="h-4 w-5/6" />
<Skeleton className="h-4 w-2/3" />

// Buttons
<Skeleton className="h-10 w-24 rounded-md" />

// Custom shapes with different border radius
<Skeleton className="h-8 w-8 rounded-sm" />  // small radius
<Skeleton className="h-8 w-8 rounded-md" />  // medium radius
<Skeleton className="h-8 w-8 rounded-lg" />  // large radius
<Skeleton className="h-8 w-8 rounded-xl" />  // extra large radius`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
