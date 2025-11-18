'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from '@/components/ui/native-select'

export default function NativeSelectPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Native Select</h1>
        <p className="text-muted-foreground">
          A native HTML select component with styled appearance and consistent design.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Basic Native Select
              <Badge variant="secondary">Basic</Badge>
            </CardTitle>
            <CardDescription>
              A simple native select with options.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="flex items-center space-x-4 p-4 border rounded-lg">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="basic-select">Theme</Label>
                    <NativeSelect id="basic-select" defaultValue="">
                      <NativeSelectOption value="" disabled>Select a theme</NativeSelectOption>
                      <NativeSelectOption value="light">Light</NativeSelectOption>
                      <NativeSelectOption value="dark">Dark</NativeSelectOption>
                      <NativeSelectOption value="system">System</NativeSelectOption>
                    </NativeSelect>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`<NativeSelect defaultValue="">
  <NativeSelectOption value="" disabled>
    Select a theme
  </NativeSelectOption>
  <NativeSelectOption value="light">Light</NativeSelectOption>
  <NativeSelectOption value="dark">Dark</NativeSelectOption>
  <NativeSelectOption value="system">System</NativeSelectOption>
</NativeSelect>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Grouped Options
              <Badge variant="secondary">Groups</Badge>
            </CardTitle>
            <CardDescription>
              Native select with grouped options using optgroup.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="flex items-center space-x-4 p-4 border rounded-lg">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="grouped-select">Timezone</Label>
                    <NativeSelect id="grouped-select" defaultValue="">
                      <NativeSelectOption value="" disabled>Select a timezone</NativeSelectOption>
                      <NativeSelectOptGroup label="North America">
                        <NativeSelectOption value="est">Eastern Standard Time (EST)</NativeSelectOption>
                        <NativeSelectOption value="cst">Central Standard Time (CST)</NativeSelectOption>
                        <NativeSelectOption value="mst">Mountain Standard Time (MST)</NativeSelectOption>
                        <NativeSelectOption value="pst">Pacific Standard Time (PST)</NativeSelectOption>
                      </NativeSelectOptGroup>
                      <NativeSelectOptGroup label="Europe">
                        <NativeSelectOption value="gmt">Greenwich Mean Time (GMT)</NativeSelectOption>
                        <NativeSelectOption value="cet">Central European Time (CET)</NativeSelectOption>
                        <NativeSelectOption value="eet">Eastern European Time (EET)</NativeSelectOption>
                      </NativeSelectOptGroup>
                    </NativeSelect>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`<NativeSelect defaultValue="">
  <NativeSelectOption value="" disabled>
    Select a timezone
  </NativeSelectOption>
  <NativeSelectOptGroup label="North America">
    <NativeSelectOption value="est">
      Eastern Standard Time (EST)
    </NativeSelectOption>
    <NativeSelectOption value="cst">
      Central Standard Time (CST)
    </NativeSelectOption>
    <NativeSelectOption value="mst">
      Mountain Standard Time (MST)
    </NativeSelectOption>
    <NativeSelectOption value="pst">
      Pacific Standard Time (PST)
    </NativeSelectOption>
  </NativeSelectOptGroup>
  <NativeSelectOptGroup label="Europe">
    <NativeSelectOption value="gmt">
      Greenwich Mean Time (GMT)
    </NativeSelectOption>
    <NativeSelectOption value="cet">
      Central European Time (CET)
    </NativeSelectOption>
    <NativeSelectOption value="eet">
      Eastern European Time (EET)
    </NativeSelectOption>
  </NativeSelectOptGroup>
</NativeSelect>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Disabled States
              <Badge variant="secondary">States</Badge>
            </CardTitle>
            <CardDescription>
              Native select with disabled options and states.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <div className="grid gap-4 p-4 border rounded-lg">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="disabled-select">Disabled Select</Label>
                    <NativeSelect id="disabled-select" disabled>
                      <NativeSelectOption value="option1">Option 1</NativeSelectOption>
                      <NativeSelectOption value="option2">Option 2</NativeSelectOption>
                    </NativeSelect>
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="mixed-select">Mixed States</Label>
                    <NativeSelect id="mixed-select" defaultValue="">
                      <NativeSelectOption value="" disabled>Choose an option</NativeSelectOption>
                      <NativeSelectOption value="available">Available</NativeSelectOption>
                      <NativeSelectOption value="unavailable" disabled>Unavailable</NativeSelectOption>
                      <NativeSelectOption value="pending">Pending</NativeSelectOption>
                    </NativeSelect>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// Disabled select
<NativeSelect disabled>
  <NativeSelectOption value="option1">Option 1</NativeSelectOption>
  <NativeSelectOption value="option2">Option 2</NativeSelectOption>
</NativeSelect>

// Mixed states
<NativeSelect defaultValue="">
  <NativeSelectOption value="" disabled>
    Choose an option
  </NativeSelectOption>
  <NativeSelectOption value="available">Available</NativeSelectOption>
  <NativeSelectOption value="unavailable" disabled>
    Unavailable
  </NativeSelectOption>
  <NativeSelectOption value="pending">Pending</NativeSelectOption>
</NativeSelect>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Form Integration
              <Badge variant="secondary">Forms</Badge>
            </CardTitle>
            <CardDescription>
              Native select used within form context with validation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-4">
                <form className="space-y-6 p-4 border rounded-lg max-w-md">
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="country">Country</Label>
                    <NativeSelect id="country" required>
                      <NativeSelectOption value="" disabled>Select a country</NativeSelectOption>
                      <NativeSelectOption value="us">United States</NativeSelectOption>
                      <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
                      <NativeSelectOption value="ca">Canada</NativeSelectOption>
                      <NativeSelectOption value="au">Australia</NativeSelectOption>
                    </NativeSelect>
                  </div>

                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="subscription">Subscription</Label>
                    <NativeSelect id="subscription" defaultValue="free">
                      <NativeSelectOption value="free">Free</NativeSelectOption>
                      <NativeSelectOption value="pro">Pro</NativeSelectOption>
                      <NativeSelectOption value="enterprise">Enterprise</NativeSelectOption>
                    </NativeSelect>
                  </div>

                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`<form className="space-y-6">
  <div className="grid w-full items-center gap-1.5">
    <Label htmlFor="name">Name</Label>
    <Input id="name" placeholder="Enter your name" />
  </div>
  
  <div className="grid w-full items-center gap-1.5">
    <Label htmlFor="country">Country</Label>
    <NativeSelect id="country" required>
      <NativeSelectOption value="" disabled>
        Select a country
      </NativeSelectOption>
      <NativeSelectOption value="us">United States</NativeSelectOption>
      <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
      <NativeSelectOption value="ca">Canada</NativeSelectOption>
      <NativeSelectOption value="au">Australia</NativeSelectOption>
    </NativeSelect>
  </div>

  <div className="grid w-full items-center gap-1.5">
    <Label htmlFor="subscription">Subscription</Label>
    <NativeSelect id="subscription" defaultValue="free">
      <NativeSelectOption value="free">Free</NativeSelectOption>
      <NativeSelectOption value="pro">Pro</NativeSelectOption>
      <NativeSelectOption value="enterprise">Enterprise</NativeSelectOption>
    </NativeSelect>
  </div>

  <Button type="submit" className="w-full">
    Submit
  </Button>
</form>`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
