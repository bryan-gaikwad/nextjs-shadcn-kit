"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StarIcon, CreditCardIcon, SmartphoneIcon, DollarSignIcon } from "lucide-react"
import * as React from "react"

function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}

function RadioGroupPlans() {
  const plans = [
    {
      id: "free",
      name: "Free Plan",
      description: "Perfect for personal projects and testing",
      price: "$0",
      icon: <DollarSignIcon className="w-4 h-4" />
    },
    {
      id: "starter",
      name: "Starter Plan", 
      description: "Perfect for small businesses getting started with our platform",
      price: "$10",
      icon: <StarIcon className="w-4 h-4" />
    },
    {
      id: "pro",
      name: "Pro Plan",
      description: "Advanced features for growing businesses with higher demands",
      price: "$20",
      icon: <CreditCardIcon className="w-4 h-4" />
    }
  ]

  const [selectedPlan, setSelectedPlan] = React.useState("starter")

  return (
    <div className="space-y-4">
      <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="max-w-lg">
        {plans.map((plan) => (
          <Label
            key={plan.id}
            htmlFor={plan.id}
            className="flex items-start gap-3 rounded-lg border p-4 cursor-pointer hover:bg-accent/50 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-accent"
          >
            <RadioGroupItem value={plan.id} id={plan.id} />
            <div className="grid gap-1 font-normal flex-1">
              <div className="flex items-center gap-2 font-medium">
                {plan.icon}
                {plan.name}
                <span className="ml-auto font-mono text-sm">{plan.price}</span>
              </div>
              <div className="text-muted-foreground text-sm leading-snug">
                {plan.description}
              </div>
            </div>
          </Label>
        ))}
      </RadioGroup>
      
      <div className="text-sm text-muted-foreground">
        Selected: <span className="font-medium">{plans.find(p => p.id === selectedPlan)?.name}</span>
      </div>
    </div>
  )
}

function RadioGroupPayment() {
  const [paymentMethod, setPaymentMethod] = React.useState("card")

  const paymentMethods = [
    {
      id: "card",
      name: "Credit Card",
      description: "Pay with your credit or debit card",
      icon: <CreditCardIcon className="w-5 h-5" />
    },
    {
      id: "paypal",
      name: "PayPal",
      description: "Pay with your PayPal account",
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.28C5.026 1.751 5.474 1.337 6.002 1.337h7.3c1.918 0 3.724.698 5.095 1.966 1.371 1.267 2.138 2.956 2.138 4.817 0 3.583-2.906 6.5-6.5 6.5h-2.67l-1.454 6.257c-.082.353-.421.557-.774.557-.051 0-.104-.005-.16-.017z"/>
      </svg>
    },
    {
      id: "apple",
      name: "Apple Pay", 
      description: "Pay with Touch ID or Face ID",
      icon: <SmartphoneIcon className="w-5 h-5" />
    }
  ]

  return (
    <div className="space-y-4">
      <Label className="text-base font-medium">Payment Method</Label>
      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid gap-3">
        {paymentMethods.map((method) => (
          <Label
            key={method.id}
            htmlFor={method.id}
            className="flex items-center gap-3 rounded-lg border p-4 cursor-pointer hover:bg-accent/50 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-accent"
          >
            <RadioGroupItem value={method.id} id={method.id} />
            <div className="flex items-center gap-3 flex-1">
              {method.icon}
              <div className="grid gap-0.5">
                <div className="font-medium">{method.name}</div>
                <div className="text-muted-foreground text-sm">{method.description}</div>
              </div>
            </div>
          </Label>
        ))}
      </RadioGroup>
    </div>
  )
}

function RadioGroupNotifications() {
  const [notification, setNotification] = React.useState("all")

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-base font-medium">Notify me about...</Label>
        <p className="text-sm text-muted-foreground mt-1">
          Choose what notifications you want to receive
        </p>
      </div>
      
      <RadioGroup value={notification} onValueChange={setNotification} className="space-y-3">
        <div className="flex items-center gap-3">
          <RadioGroupItem value="all" id="all" />
          <Label htmlFor="all" className="font-normal">All new messages</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="mentions" id="mentions" />
          <Label htmlFor="mentions" className="font-normal">Direct messages and mentions</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="none" id="none" />
          <Label htmlFor="none" className="font-normal">Nothing</Label>
        </div>
      </RadioGroup>
      
      <div className="text-sm text-muted-foreground">
        Current setting: <span className="font-medium">
          {notification === "all" ? "All new messages" :
           notification === "mentions" ? "Direct messages and mentions" : 
           "Nothing"}
        </span>
      </div>
    </div>
  )
}

export default function RadioGroupPage() {
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
            <circle cx="8" cy="8" r="3"/>
            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Radio Group</h1>
          <p className="text-muted-foreground">
            A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
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
                <CardTitle>Basic Radio Group</CardTitle>
                <CardDescription>
                  A simple radio group with three options.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroupDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Subscription Plans</CardTitle>
                <CardDescription>
                  Radio group with rich content including icons, descriptions, and pricing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroupPlans />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>
                  Choose from different payment options with visual indicators.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroupPayment />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Configure notification preferences with descriptive labels.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroupNotifications />
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
{`npx shadcn-ui@latest add radio-group`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>
                  Import and use the RadioGroup components in your React component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
    </RadioGroup>
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
                  Different radio group implementations and use cases.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Controlled radio group
const [value, setValue] = React.useState("option1")

<RadioGroup value={value} onValueChange={setValue}>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="option1" id="opt1" />
    <Label htmlFor="opt1">Option 1</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="option2" id="opt2" />
    <Label htmlFor="opt2">Option 2</Label>
  </div>
</RadioGroup>

// Rich content radio group
<RadioGroup defaultValue="plan1">
  <Label 
    htmlFor="plan1" 
    className="flex items-center gap-3 rounded border p-4 cursor-pointer"
  >
    <RadioGroupItem value="plan1" id="plan1" />
    <div>
      <div className="font-medium">Starter Plan</div>
      <div className="text-sm text-muted-foreground">$10/month</div>
    </div>
  </Label>
</RadioGroup>`}
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
