import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { DocsSidebar } from '@/components/docs-sidebar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { Search, Github, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

// Custom Callout component
const Callout = ({ children, type = "info", ...props }) => (
  <Alert className={cn("my-6", {
    "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200": type === "info",
    "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200": type === "warning",
    "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200": type === "danger",
  })} {...props}>
    <AlertDescription>{children}</AlertDescription>
  </Alert>
)

// Custom components for MDX
const components = {
  h1: (props) => (
    <h1 className="font-heading mt-2 scroll-m-20 text-4xl font-bold" {...props} />
  ),
  h2: (props) => (
    <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0" {...props} />
  ),
  h3: (props) => (
    <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight" {...props} />
  ),
  h4: (props) => (
    <h4 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight" {...props} />
  ),
  h5: (props) => (
    <h5 className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight" {...props} />
  ),
  h6: (props) => (
    <h6 className="mt-8 scroll-m-20 text-base font-semibold tracking-tight" {...props} />
  ),
  ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
  ol: (props) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
  li: (props) => <li {...props} />,
  blockquote: (props) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />
  ),
  img: (props) => (
    <img className="rounded-md border" {...props} />
  ),
  hr: (props) => <Separator className="my-4 md:my-8" {...props} />,
  table: (props) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full" {...props} />
    </div>
  ),
  tr: (props) => <tr className="m-0 border-t p-0 even:bg-muted" {...props} />,
  th: (props) => (
    <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right" {...props} />
  ),
  td: (props) => (
    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right" {...props} />
  ),
  pre: (props) => (
    <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900" {...props} />
  ),
  code: (props) => (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm" {...props} />
  ),
  // Custom UI components
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Alert,
  AlertDescription,
  Callout,
}

async function getDocFromParams(params) {
  const resolvedParams = await params
  const slug = resolvedParams?.slug ?? []
  const docPath = path.join(process.cwd(), 'content/docs', `${slug.join('/')}.mdx`)
  
  // Debug logging
  console.log('Debug - slug:', slug)
  console.log('Debug - docPath:', docPath)
  console.log('Debug - file exists:', fs.existsSync(docPath))
  
  // If the file doesn't exist, try index.mdx
  if (!fs.existsSync(docPath)) {
    const indexPath = path.join(process.cwd(), 'content/docs', slug.join('/'), 'index.mdx')
    console.log('Debug - trying indexPath:', indexPath)
    console.log('Debug - indexPath exists:', fs.existsSync(indexPath))
    
    if (fs.existsSync(indexPath)) {
      const fileContents = fs.readFileSync(indexPath, 'utf8')
      const { data, content } = matter(fileContents)
      return { frontMatter: data, content, slug: slug.join('/') }
    }
    return null
  }
  
  const fileContents = fs.readFileSync(docPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    frontMatter: data,
    content,
    slug: slug.join('/'),
  }
}

export async function generateMetadata({ params }) {
  const doc = await getDocFromParams(params)
  
  if (!doc) {
    return {}
  }
  
  return {
    title: doc.frontMatter.title,
    description: doc.frontMatter.description,
  }
}

export default async function DocPage({ params }) {
  const doc = await getDocFromParams(params)
  
  if (!doc) {
    notFound()
  }
  
  return (
    <div className="flex min-h-screen bg-background">
      <DocsSidebar />
      
      {/* Main Content */}
      <div className="flex-1 md:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center justify-between px-6">
            <div className="flex items-center gap-2">
              <Link href="/docs" className="flex items-center space-x-2">
                <span className="font-bold">Skeletor UI</span>
              </Link>
              <Badge variant="outline" className="ml-2">v1.0.0</Badge>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="gap-2">
                <Search className="h-4 w-4" />
                <span className="hidden sm:inline">Search...</span>
                <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
              
              <Separator orientation="vertical" className="mx-2 h-4" />
              
              <ThemeToggle />
            </div>
          </div>
        </header>
        
        <main className="container max-w-4xl mx-auto py-8 md:py-12 lg:py-16 px-6">
          <div className="mx-auto w-full min-w-0">
            {doc.frontMatter.title && (
              <div className="space-y-2 mb-6">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                  {doc.frontMatter.title}
                </h1>
                {doc.frontMatter.description && (
                  <p className="text-xl text-muted-foreground">
                    {doc.frontMatter.description}
                  </p>
                )}
              </div>
            )}
            <Separator className="my-4 md:my-6" />
            <div className="mdx prose prose-slate dark:prose-invert max-w-none">
              <MDXRemote source={doc.content} components={components} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
