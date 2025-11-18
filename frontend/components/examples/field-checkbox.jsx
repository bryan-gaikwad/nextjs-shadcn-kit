"use client"

import React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldSet, FieldLegend, FieldLabel, FieldContent, FieldDescription } from "@/components/ui/field"

export function FieldCheckbox() {
  const [selectedOptions, setSelectedOptions] = React.useState([])

  const options = [
    { id: "notifications", label: "Email Notifications", description: "Receive updates via email" },
    { id: "marketing", label: "Marketing Updates", description: "Product news and updates" },
    { id: "security", label: "Security Alerts", description: "Important security notifications" },
    { id: "newsletter", label: "Weekly Newsletter", description: "Our weekly digest" }
  ]

  return (
    <FieldSet>
      <FieldLegend>Communication Preferences</FieldLegend>
      <FieldDescription>
        Choose how you'd like to receive updates from us.
      </FieldDescription>
      <FieldGroup className="gap-4">
        {options.map((option) => (
          <Field key={option.id} orientation="horizontal">
            <Checkbox 
              id={option.id} 
              checked={selectedOptions.includes(option.id)}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedOptions([...selectedOptions, option.id])
                } else {
                  setSelectedOptions(selectedOptions.filter(id => id !== option.id))
                }
              }}
            />
            <FieldContent>
              <FieldLabel htmlFor={option.id} className="font-normal">
                {option.label}
              </FieldLabel>
              <FieldDescription className="text-sm">
                {option.description}
              </FieldDescription>
            </FieldContent>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  )
}
