"use client"

import * as React from "react"
import { addDays } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Basic Calendar Demo (from official shadcn registry)
function CalendarDemo() {
  const [date, setDate] = React.useState(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
  )
}

// Multiple Dates Demo (from official shadcn registry)
function CalendarMultiple() {
  const [dates, setDates] = React.useState([
    new Date(2025, 5, 12),
    new Date(2025, 5, 24),
  ])

  return (
    <Calendar
      mode="multiple"
      numberOfMonths={2}
      defaultMonth={dates[0]}
      required
      selected={dates}
      onSelect={setDates}
      max={5}
      className="rounded-lg border shadow-sm"
    />
  )
}

// Calendar with Presets (from official shadcn registry)
function CalendarWithPresets() {
  const [date, setDate] = React.useState(
    new Date(2025, 5, 12)
  )

  return (
    <Card className="max-w-[300px] py-4">
      <CardContent className="px-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          defaultMonth={date}
          className="bg-transparent p-0"
        />
      </CardContent>
      <CardContent className="flex flex-wrap gap-2 border-t px-4 pb-0 pt-4">
        {[
          { label: "Today", value: 0 },
          { label: "Tomorrow", value: 1 },
          { label: "In 3 days", value: 3 },
          { label: "In a week", value: 7 },
        ].map((preset) => (
          <Button
            key={preset.value}
            size="sm"
            variant="outline"
            className="h-7 text-xs"
            onClick={() => {
              const newDate = addDays(new Date(), preset.value)
              setDate(newDate)
            }}
          >
            {preset.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}

export default function CalendarComponentPage() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 lg:px-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
            <Badge variant="secondary">New</Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            A date field component that allows users to enter and edit date.
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
                <CardTitle>Basic Calendar</CardTitle>
                <CardDescription>
                  A simple calendar with single date selection.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <CalendarDemo />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Multiple Dates Selection</CardTitle>
                <CardDescription>
                  Select multiple dates with two-month view (max 5 dates).
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <CalendarMultiple />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Calendar with Presets</CardTitle>
                <CardDescription>
                  Quick date selection with preset buttons.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <CalendarWithPresets />
                </div>
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
                  <code>npx shadcn@latest add calendar</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

export default function CalendarDemo() {
  const [date, setDate] = React.useState(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
  )
}`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Multiple Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

export default function CalendarMultiple() {
  const [dates, setDates] = React.useState([
    new Date(2025, 5, 12),
    new Date(2025, 5, 24),
  ])

  return (
    <Calendar
      mode="multiple"
      numberOfMonths={2}
      defaultMonth={dates[0]}
      required
      selected={dates}
      onSelect={setDates}
      max={5}
      className="rounded-lg border shadow-sm"
    />
  )
}`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Props</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <code className="bg-muted px-2 py-1 rounded">mode</code>
                    <span className="text-muted-foreground ml-2">
                      "single" | "multiple" | "range" - The selection mode
                    </span>
                  </div>
                  <div>
                    <code className="bg-muted px-2 py-1 rounded">selected</code>
                    <span className="text-muted-foreground ml-2">
                      Date | Date[] | DateRange - The selected date(s)
                    </span>
                  </div>
                  <div>
                    <code className="bg-muted px-2 py-1 rounded">onSelect</code>
                    <span className="text-muted-foreground ml-2">
                      Function - Callback when selection changes
                    </span>
                  </div>
                  <div>
                    <code className="bg-muted px-2 py-1 rounded">disabled</code>
                    <span className="text-muted-foreground ml-2">
                      Function | Date[] - Disable specific dates
                    </span>
                  </div>
                  <div>
                    <code className="bg-muted px-2 py-1 rounded">numberOfMonths</code>
                    <span className="text-muted-foreground ml-2">
                      Number - Number of months to display
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
