import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}

function SwitchAdvancedDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Switch id="switch-demo-airplane-mode" />
        <Label htmlFor="switch-demo-airplane-mode">Airplane Mode</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id="switch-demo-bluetooth"
          className="data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-600"
          defaultChecked
        />
        <Label htmlFor="switch-demo-bluetooth">Bluetooth</Label>
      </div>
      <Label className="flex items-center gap-6 rounded-lg border p-4 has-[[data-state=checked]]:border-blue-600">
        <div className="flex flex-col gap-1">
          <div className="font-medium">Share across devices</div>
          <div className="text-muted-foreground text-sm font-normal">
            Focus is shared across devices, and turns off when you leave the app.
          </div>
        </div>
        <Switch
          id="switch-demo-focus-mode"
          className="data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-600"
        />
      </Label>
    </div>
  )
}

export default function SwitchPage() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 lg:px-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">Switch</h1>
          <p className="text-lg text-muted-foreground">
            A control that allows the user to toggle between checked and not checked.
          </p>
        </div>
      </div>
      
      <div className="px-4 lg:px-6">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Switch Demo</CardTitle>
                <CardDescription>
                  A simple toggle switch control.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SwitchDemo />
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
                <code>{`npx shadcn@latest add switch`}</code>
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
import { Switch } from "@/components/ui/switch"

function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
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
                <SwitchAdvancedDemo />
              </div>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`function SwitchAdvancedDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id="bluetooth"
          className="data-[state=checked]:bg-blue-500"
          defaultChecked
        />
        <Label htmlFor="bluetooth">Bluetooth</Label>
      </div>
      <Label className="flex items-center gap-6 rounded-lg border p-4">
        <div className="flex flex-col gap-1">
          <div className="font-medium">Share across devices</div>
          <div className="text-muted-foreground text-sm">
            Focus is shared across devices
          </div>
        </div>
        <Switch id="focus-mode" />
      </Label>
    </div>
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
