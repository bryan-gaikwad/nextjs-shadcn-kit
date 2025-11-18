"use client"

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
} from "@/components/ui/field"

export function FieldHear() {
  return (
    <Card>
      <CardContent>
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldLegend>How did you hear about us?</FieldLegend>
              <FieldDescription>
                Select the option that best describes how you heard about us.
              </FieldDescription>
              <FieldGroup className="flex flex-row flex-wrap gap-2 [--radius:9999rem] **:data-[slot=checkbox]:rounded-full **:data-[slot=field]:gap-2 **:data-[slot=field]:overflow-hidden **:data-[slot=field]:px-2.5 **:data-[slot=field]:py-2 *:data-[slot=field-label]:w-fit">
                <FieldLabel htmlFor="social-media">
                  <Field orientation="horizontal">
                    <Checkbox value="social-media" id="social-media" />
                    <FieldContent>
                      <FieldLabel className="font-normal">Social Media</FieldLabel>
                    </FieldContent>
                  </Field>
                </FieldLabel>
                <FieldLabel htmlFor="search-engine">
                  <Field orientation="horizontal">
                    <Checkbox value="search-engine" id="search-engine" />
                    <FieldContent>
                      <FieldLabel className="font-normal">Search Engine</FieldLabel>
                    </FieldContent>
                  </Field>
                </FieldLabel>
                <FieldLabel htmlFor="friend">
                  <Field orientation="horizontal">
                    <Checkbox value="friend" id="friend" />
                    <FieldContent>
                      <FieldLabel className="font-normal">Friend</FieldLabel>
                    </FieldContent>
                  </Field>
                </FieldLabel>
                <FieldLabel htmlFor="advertisement">
                  <Field orientation="horizontal">
                    <Checkbox value="advertisement" id="advertisement" />
                    <FieldContent>
                      <FieldLabel className="font-normal">Advertisement</FieldLabel>
                    </FieldContent>
                  </Field>
                </FieldLabel>
                <FieldLabel htmlFor="other">
                  <Field orientation="horizontal">
                    <Checkbox value="other" id="other" />
                    <FieldContent>
                      <FieldLabel className="font-normal">Other</FieldLabel>
                    </FieldContent>
                  </Field>
                </FieldLabel>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
