import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function LabelDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}

function LabelAdvancedDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <div className="flex items-center gap-3">
        <Checkbox id="label-demo-terms" />
        <Label htmlFor="label-demo-terms">Accept terms and conditions</Label>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="label-demo-username">Username</Label>
        <Input id="label-demo-username" placeholder="Username" />
      </div>
      <div className="group grid gap-3" data-disabled={true}>
        <Label htmlFor="label-demo-disabled">Disabled</Label>
        <Input id="label-demo-disabled" placeholder="Disabled" disabled />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="label-demo-message">Message</Label>
        <Textarea id="label-demo-message" placeholder="Message" />
      </div>
    </div>
  )
}

export default function LabelPage() {
  return (
    <div className="container mx-auto px-4 lg:px-6 space-y-3">
      <div className="flex items-center space-x-2">
        <h1 className="text-3xl font-bold">Label</h1>
        <Badge variant="outline">component</Badge>
      </div>
      <p className="text-muted-foreground">
        Renders an accessible label associated with controls.
      </p>
      
      <Tabs defaultValue="preview" className="w-full">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview">
          <Card>
            <CardContent className="p-6">
              <LabelDemo />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="code" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`npx shadcn@latest add label`}</code>
              </pre>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

function LabelDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}`}</code>
              </pre>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Advanced Example</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <LabelAdvancedDemo />
              </div>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`function LabelAdvancedDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="Username" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Message" />
      </div>
    </div>
  )
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
