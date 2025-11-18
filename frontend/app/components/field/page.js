"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function BasicFieldDemo() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="basic-name">Name</FieldLabel>
        <Input id="basic-name" placeholder="Enter your name" />
      </Field>
      <Field>
        <FieldLabel htmlFor="basic-email">Email</FieldLabel>
        <Input
          id="basic-email"
          type="email"
          placeholder="email@example.com"
        />
        <FieldDescription>
          We'll never share your email with anyone.
        </FieldDescription>
      </Field>
    </FieldGroup>
  )
}

function PaymentFormDemo() {
  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Payment Method</FieldLegend>
        <FieldDescription>
          All transactions are secure and encrypted
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="card-name">Name on Card</FieldLabel>
            <Input
              id="card-name"
              placeholder="Evil Rabbit"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="card-number">Card Number</FieldLabel>
            <Input
              id="card-number"
              placeholder="1234 5678 9012 3456"
              required
            />
            <FieldDescription>
              Enter your 16-digit card number
            </FieldDescription>
          </Field>
          <div className="grid grid-cols-3 gap-4">
            <Field>
              <FieldLabel htmlFor="exp-month">Month</FieldLabel>
              <Select defaultValue="">
                <SelectTrigger id="exp-month">
                  <SelectValue placeholder="MM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="01">01</SelectItem>
                  <SelectItem value="02">02</SelectItem>
                  <SelectItem value="03">03</SelectItem>
                  <SelectItem value="04">04</SelectItem>
                  <SelectItem value="05">05</SelectItem>
                  <SelectItem value="06">06</SelectItem>
                  <SelectItem value="07">07</SelectItem>
                  <SelectItem value="08">08</SelectItem>
                  <SelectItem value="09">09</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="11">11</SelectItem>
                  <SelectItem value="12">12</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="exp-year">Year</FieldLabel>
              <Select defaultValue="">
                <SelectTrigger id="exp-year">
                  <SelectValue placeholder="YYYY" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2026">2026</SelectItem>
                  <SelectItem value="2027">2027</SelectItem>
                  <SelectItem value="2028">2028</SelectItem>
                  <SelectItem value="2029">2029</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="cvv">CVV</FieldLabel>
              <Input id="cvv" placeholder="123" required />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
    </FieldGroup>
  )
}

function ContactFormDemo() {
  return (
    <FieldGroup>
      <div className="grid grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="first-name">First Name</FieldLabel>
          <Input id="first-name" placeholder="John" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
          <Input id="last-name" placeholder="Doe" required />
        </Field>
      </div>
      <Field>
        <FieldLabel htmlFor="contact-email">Email</FieldLabel>
        <Input
          id="contact-email"
          type="email"
          placeholder="john.doe@example.com"
          required
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="message">Message</FieldLabel>
        <Textarea
          id="message"
          placeholder="Tell us how we can help you"
          className="min-h-[100px]"
        />
      </Field>
      <FieldSeparator />
      <Field orientation="horizontal">
        <Checkbox id="newsletter" />
        <FieldLabel htmlFor="newsletter" className="font-normal">
          Subscribe to our newsletter
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}

export default function FieldPage() {
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
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Field</h1>
          <p className="text-muted-foreground">
            Form field components for building accessible and structured forms with labels, descriptions, and error handling.
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
          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Fields</CardTitle>
                <CardDescription>
                  Simple form fields with labels and descriptions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BasicFieldDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Payment Form</CardTitle>
                <CardDescription>
                  Complex form with fieldsets, legends, and grouped fields.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PaymentFormDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>
                  Form with grid layout, textarea, and checkbox fields.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactFormDemo />
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
{`npx shadcn-ui@latest add field`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Basic Usage</CardTitle>
                <CardDescription>
                  Import and use the Field components in your forms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function BasicForm() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input id="name" placeholder="Enter your name" />
      </Field>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="email@example.com" />
        <FieldDescription>
          We'll never share your email with anyone.
        </FieldDescription>
      </Field>
    </FieldGroup>
  )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>With FieldSet and Legend</CardTitle>
                <CardDescription>
                  Group related fields using FieldSet and FieldLegend components.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"

export function PaymentForm() {
  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Payment Method</FieldLegend>
        <FieldDescription>
          All transactions are secure and encrypted
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="card-name">Name on Card</FieldLabel>
            <Input id="card-name" placeholder="Evil Rabbit" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="card-number">Card Number</FieldLabel>
            <Input
              id="card-number"
              placeholder="1234 5678 9012 3456"
              required
            />
            <FieldDescription>
              Enter your 16-digit card number
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </FieldGroup>
  )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Grid Layout and Separators</CardTitle>
                <CardDescription>
                  Use grid layouts and field separators for complex forms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { Checkbox } from "@/components/ui/checkbox"
import { FieldSeparator } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <FieldGroup>
      <div className="grid grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="first-name">First Name</FieldLabel>
          <Input id="first-name" placeholder="John" />
        </Field>
        <Field>
          <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
          <Input id="last-name" placeholder="Doe" />
        </Field>
      </div>
      <Field>
        <FieldLabel htmlFor="message">Message</FieldLabel>
        <Textarea
          id="message"
          placeholder="Tell us how we can help you"
          className="min-h-[100px]"
        />
      </Field>
      <FieldSeparator />
      <Field orientation="horizontal">
        <Checkbox id="newsletter" />
        <FieldLabel htmlFor="newsletter" className="font-normal">
          Subscribe to our newsletter
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Field Orientations</CardTitle>
                <CardDescription>
                  Fields support different orientations for various layouts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Vertical orientation (default)
<Field>
  <FieldLabel htmlFor="name">Name</FieldLabel>
  <Input id="name" />
</Field>

// Horizontal orientation
<Field orientation="horizontal">
  <Checkbox id="terms" />
  <FieldLabel htmlFor="terms" className="font-normal">
    I agree to the terms
  </FieldLabel>
</Field>

// Responsive orientation
<Field orientation="responsive">
  <FieldLabel htmlFor="settings">Settings</FieldLabel>
  <Switch id="settings" />
</Field>`}
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
