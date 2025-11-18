"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FileText } from "lucide-react"
import { useState } from "react"

function TextareaDemo() {
  return (
    <div className="flex flex-wrap items-start gap-6">
      <div className="flex flex-col gap-4">
        <div className="text-sm font-medium">Basic Textarea</div>
        <Textarea placeholder="Type your message here." />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-sm font-medium">With Label</div>
        <div className="grid gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-sm font-medium">Disabled</div>
        <Textarea placeholder="Type your message here." disabled />
      </div>
    </div>
  )
}

function TextareaSizesDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <div className="grid gap-1.5">
        <Label htmlFor="small">Small (3 rows)</Label>
        <Textarea 
          id="small"
          placeholder="Small textarea..." 
          rows={3}
          className="min-h-[80px]"
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="medium">Medium (5 rows)</Label>
        <Textarea 
          id="medium"
          placeholder="Medium textarea..." 
          rows={5}
          className="min-h-[120px]"
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="large">Large (8 rows)</Label>
        <Textarea 
          id="large"
          placeholder="Large textarea..." 
          rows={8}
          className="min-h-[200px]"
        />
      </div>
    </div>
  )
}

function TextareaWithTextDemo() {
  return (
    <div className="grid w-full max-w-md gap-1.5">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  )
}

function TextareaWithButtonDemo() {
  const [message, setMessage] = useState("")

  return (
    <div className="grid w-full max-w-md gap-2">
      <Textarea 
        placeholder="Type your message here." 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button disabled={!message.trim()}>Send message</Button>
    </div>
  )
}

function TextareaCharacterCountDemo() {
  const [text, setText] = useState("")
  const maxLength = 280

  return (
    <div className="grid w-full max-w-md gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="tweet">Tweet</Label>
        <span className={`text-sm ${text.length > maxLength ? 'text-destructive' : 'text-muted-foreground'}`}>
          {text.length}/{maxLength}
        </span>
      </div>
      <Textarea
        id="tweet"
        placeholder="What's happening?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={maxLength + 20} // Allow slight overflow for demonstration
        className={text.length > maxLength ? "border-destructive" : ""}
      />
      {text.length > maxLength && (
        <p className="text-sm text-destructive">
          Character limit exceeded by {text.length - maxLength}
        </p>
      )}
    </div>
  )
}

function TextareaVariationsDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div className="grid gap-2">
        <Label htmlFor="feedback">Feedback</Label>
        <Textarea
          id="feedback"
          placeholder="Share your thoughts..."
          className="resize-none"
        />
        <p className="text-xs text-muted-foreground">No resize</p>
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="comments">Comments</Label>
        <Textarea
          id="comments"
          placeholder="Leave a comment..."
          className="resize-y"
        />
        <p className="text-xs text-muted-foreground">Vertical resize only</p>
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          placeholder="Tell us about yourself..."
          className="min-h-[120px]"
        />
        <p className="text-xs text-muted-foreground">Minimum height set</p>
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="error-state">Error State</Label>
        <Textarea
          id="error-state"
          placeholder="This field has an error..."
          aria-invalid="true"
          className="border-destructive"
        />
        <p className="text-xs text-destructive">This field is required</p>
      </div>
    </div>
  )
}

function TextareaFormDemo() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    feedback: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="grid w-full max-w-md gap-4">
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <input
          id="title"
          type="text"
          placeholder="Enter title..."
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Tell us a little bit about yourself..."
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          className="min-h-[100px]"
        />
        <p className="text-sm text-muted-foreground">
          You can @mention other users and organizations.
        </p>
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="feedback">Additional Feedback</Label>
        <Textarea
          id="feedback"
          placeholder="Any additional feedback..."
          value={formData.feedback}
          onChange={(e) => setFormData({...formData, feedback: e.target.value})}
          rows={4}
        />
      </div>
      
      <Button type="submit" className="w-full">Submit</Button>
    </form>
  )
}

export default function TextareaPage() {
  return (
    <div className="container mx-auto max-w-6xl p-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <FileText className="size-4" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Textarea</h1>
          <p className="text-muted-foreground">
            Displays a form textarea or a component that looks like a textarea.
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
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Textarea</CardTitle>
                <CardDescription>
                  Basic textarea components with different states and configurations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TextareaDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Different Sizes</CardTitle>
                <CardDescription>
                  Textareas with different row heights and minimum sizes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TextareaSizesDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>With Help Text</CardTitle>
                <CardDescription>
                  Textarea with label and descriptive help text.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TextareaWithTextDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>With Action Button</CardTitle>
                <CardDescription>
                  Textarea paired with a submit button that responds to content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TextareaWithButtonDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Character Count</CardTitle>
                <CardDescription>
                  Textarea with character counting and limit enforcement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TextareaCharacterCountDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Textarea Variations</CardTitle>
                <CardDescription>
                  Different textarea configurations including resize options and states.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TextareaVariationsDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Form Example</CardTitle>
                <CardDescription>
                  Complete form with multiple textareas and proper labeling.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TextareaFormDemo />
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
{`npx shadcn-ui@latest add textarea`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>
                  Import and use the Textarea component in your React component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { Textarea } from "@/components/ui/textarea"

export function TextareaDemo() {
  return (
    <Textarea placeholder="Type your message here." />
  )
}

// With label
export function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
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
                  Different ways to configure and use the textarea component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Disabled textarea
<Textarea placeholder="Type your message here." disabled />

// With custom height
<Textarea 
  placeholder="Large textarea..." 
  rows={8}
  className="min-h-[200px]"
/>

// With character limit
const [text, setText] = useState("")
const maxLength = 280

<div className="grid gap-2">
  <div className="flex justify-between">
    <Label>Tweet</Label>
    <span>{text.length}/{maxLength}</span>
  </div>
  <Textarea
    value={text}
    onChange={(e) => setText(e.target.value)}
    maxLength={maxLength}
  />
</div>

// Resize options
<Textarea className="resize-none" />      // No resize
<Textarea className="resize-y" />        // Vertical only
<Textarea className="resize-x" />        // Horizontal only
<Textarea className="resize" />          // Both directions`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Form Integration</CardTitle>
                <CardDescription>
                  Using textarea in forms with proper validation and state management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// React Hook Form integration
import { useForm } from "react-hook-form"

const form = useForm()

<form onSubmit={form.handleSubmit(onSubmit)}>
  <div className="grid gap-2">
    <Label htmlFor="bio">Bio</Label>
    <Textarea
      id="bio"
      placeholder="Tell us about yourself..."
      {...form.register("bio", { 
        required: "Bio is required",
        minLength: {
          value: 10,
          message: "Bio must be at least 10 characters"
        }
      })}
      aria-invalid={!!form.formState.errors.bio}
    />
    {form.formState.errors.bio && (
      <p className="text-sm text-destructive">
        {form.formState.errors.bio.message}
      </p>
    )}
  </div>
  <Button type="submit">Submit</Button>
</form>

// Error state styling
<Textarea 
  aria-invalid="true"
  className="border-destructive focus-visible:ring-destructive"
/>`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Component Source</CardTitle>
                <CardDescription>
                  The Textarea component implementation with all styling variants.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }`}
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
