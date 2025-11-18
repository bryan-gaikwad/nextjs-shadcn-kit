"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { PlayIcon, PauseIcon, RotateCcwIcon, DownloadIcon } from "lucide-react"
import * as React from "react"

function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <Progress value={progress} className="w-full" />
    </div>
  )
}

function ProgressSizes() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label className="text-sm">Small (h-1)</Label>
        <Progress value={25} className="w-full h-1" />
      </div>
      <div className="space-y-2">
        <Label className="text-sm">Default (h-2)</Label>
        <Progress value={50} className="w-full" />
      </div>
      <div className="space-y-2">
        <Label className="text-sm">Large (h-3)</Label>
        <Progress value={75} className="w-full h-3" />
      </div>
      <div className="space-y-2">
        <Label className="text-sm">Extra Large (h-4)</Label>
        <Progress value={90} className="w-full h-4" />
      </div>
    </div>
  )
}

function ProgressWithStates() {
  const [uploadProgress, setUploadProgress] = React.useState(0)
  const [downloadProgress, setDownloadProgress] = React.useState(0)
  const [installProgress, setInstallProgress] = React.useState(100)

  React.useEffect(() => {
    const uploadTimer = setInterval(() => {
      setUploadProgress((prev) => (prev >= 100 ? 0 : prev + 10))
    }, 600)

    const downloadTimer = setInterval(() => {
      setDownloadProgress((prev) => (prev >= 85 ? 0 : prev + 5))
    }, 400)

    return () => {
      clearInterval(uploadTimer)
      clearInterval(downloadTimer)
    }
  }, [])

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label className="text-sm">Uploading files...</Label>
          <span className="text-sm text-muted-foreground">{uploadProgress}%</span>
        </div>
        <Progress value={uploadProgress} className="w-full" />
        <p className="text-xs text-muted-foreground">Uploading 3 of 10 files</p>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label className="text-sm flex items-center gap-2">
            <DownloadIcon className="w-4 h-4" />
            Download in progress
          </Label>
          <span className="text-sm text-muted-foreground">{downloadProgress}%</span>
        </div>
        <Progress value={downloadProgress} className="w-full" />
        <p className="text-xs text-muted-foreground">129 MB of 1 GB downloaded</p>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label className="text-sm text-green-600">Installation complete</Label>
          <span className="text-sm text-green-600">{installProgress}%</span>
        </div>
        <Progress value={installProgress} className="w-full" />
        <p className="text-xs text-muted-foreground">All packages installed successfully</p>
      </div>
    </div>
  )
}

function ProgressInteractive() {
  const [progress, setProgress] = React.useState(33)
  const [isPlaying, setIsPlaying] = React.useState(false)

  React.useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false)
          return 100
        }
        return prev + 1
      })
    }, 100)

    return () => clearInterval(interval)
  }, [isPlaying])

  const handleReset = () => {
    setProgress(0)
    setIsPlaying(false)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label className="text-sm">Interactive Progress</Label>
          <span className="text-sm text-muted-foreground">{progress}%</span>
        </div>
        <Progress value={progress} className="w-full" />
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePlayPause}
          disabled={progress >= 100}
        >
          {isPlaying ? (
            <PauseIcon className="w-4 h-4" />
          ) : (
            <PlayIcon className="w-4 h-4" />
          )}
          {isPlaying ? "Pause" : "Play"}
        </Button>
        
        <Button variant="outline" size="sm" onClick={handleReset}>
          <RotateCcwIcon className="w-4 h-4" />
          Reset
        </Button>
      </div>
    </div>
  )
}

export default function ProgressPage() {
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
            <path d="M10 2c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm3 2.5c0 .275-.225.5-.5.5h-8c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h8c.275 0 .5.225.5.5zm-1 2c0 .275-.225.5-.5.5h-6c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h6c.275 0 .5.225.5.5zm-1 2c0 .275-.225.5-.5.5h-4c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h4c.275 0 .5.225.5.5z"/>
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8z"/>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Progress</h1>
          <p className="text-muted-foreground">
            Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
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
                <CardTitle>Basic Progress</CardTitle>
                <CardDescription>
                  A simple progress bar that animates from 13% to 66%.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProgressDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Progress Sizes</CardTitle>
                <CardDescription>
                  Different progress bar heights for various use cases.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProgressSizes />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Progress with States</CardTitle>
                <CardDescription>
                  Progress bars showing different loading states and contexts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProgressWithStates />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Interactive Progress</CardTitle>
                <CardDescription>
                  A controllable progress bar with play, pause, and reset functionality.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProgressInteractive />
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
{`npx shadcn-ui@latest add progress`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>
                  Import and use the Progress component in your React component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Examples</CardTitle>
                <CardDescription>
                  Different progress bar implementations and customizations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Different sizes
<Progress value={25} className="w-full h-1" />
<Progress value={50} className="w-full h-2" />
<Progress value={75} className="w-full h-3" />

// With label and percentage
<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Loading...</span>
    <span>{progress}%</span>
  </div>
  <Progress value={progress} className="w-full" />
</div>

// Animated progress
function AnimatedProgress() {
  const [progress, setProgress] = React.useState(0)
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10))
    }, 600)
    return () => clearInterval(timer)
  }, [])
  
  return <Progress value={progress} />
}`}
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
