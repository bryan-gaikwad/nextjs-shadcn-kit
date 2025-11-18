"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function FieldDemo() {
  return (
    <div className="@container w-full">
      <div className="bg-muted grid gap-4 p-4 @3xl:grid-cols-2 @5xl:grid-cols-3 @[120rem]:grid-cols-4 @[140rem]:grid-cols-5">
        <div className="flex flex-col gap-6">
          <BasicFields />
          <PrivacySettings />
          <SubscriptionPlan />
        </div>
      </div>
    </div>
  )
}

function BasicFields() {
  return (
    <Card>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name-basic">Name</FieldLabel>
              <Input id="name-basic" type="text" />
              <FieldDescription>
                Enter your name so it is long enough to test the layout.
              </FieldDescription>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="terms-basic" />
              <FieldLabel htmlFor="terms-basic">
                Accept terms and conditions
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="dark-mode-basic">Dark Mode</FieldLabel>
              <Switch id="dark-mode-basic" />
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}

function PrivacySettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Privacy Settings</CardTitle>
        <CardDescription>Manage your privacy preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="privacy-analytics">Analytics</FieldLabel>
              <FieldDescription>
                Help us improve by sharing anonymous usage data
              </FieldDescription>
            </FieldContent>
            <Switch id="privacy-analytics" />
          </Field>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="privacy-marketing">Marketing emails</FieldLabel>
              <FieldDescription>
                Receive updates about new features and offers
              </FieldDescription>
            </FieldContent>
            <Switch id="privacy-marketing" />
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}

function SubscriptionPlan() {
  return (
    <Card>
      <CardContent>
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Choose a plan</FieldLegend>
              <FieldDescription>
                Select the plan that works best for you.
              </FieldDescription>
              <RadioGroup defaultValue="pro">
                <FieldLabel htmlFor="basic-plan">
                  <Field orientation="horizontal">
                    <RadioGroupItem value="basic" id="basic-plan" />
                    <FieldContent>
                      <FieldTitle>Basic</FieldTitle>
                      <FieldDescription>$9/month</FieldDescription>
                    </FieldContent>
                    <Badge variant="secondary" className="ml-auto">
                      Popular
                    </Badge>
                  </Field>
                </FieldLabel>
                <FieldLabel htmlFor="pro-plan">
                  <Field orientation="horizontal">
                    <RadioGroupItem value="pro" id="pro-plan" />
                    <FieldContent>
                      <FieldTitle>Pro</FieldTitle>
                      <FieldDescription>$29/month</FieldDescription>
                    </FieldContent>
                  </Field>
                </FieldLabel>
              </RadioGroup>
            </FieldSet>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
