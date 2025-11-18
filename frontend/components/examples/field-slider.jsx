"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export function FieldSlider() {
  const [volume, setVolume] = useState([50])
  const [brightness, setBrightness] = useState([75])
  const [rating, setRating] = useState([7])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Slider Fields</CardTitle>
        <CardDescription>Different slider field configurations</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="volume">Volume</FieldLabel>
            <Slider
              id="volume"
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
            />
            <FieldDescription>
              Current volume: {volume[0]}%
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="brightness">Screen Brightness</FieldLabel>
            <Slider
              id="brightness"
              value={brightness}
              onValueChange={setBrightness}
              max={100}
              step={5}
            />
            <FieldDescription>
              Current brightness: {brightness[0]}%
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="rating">Rating</FieldLabel>
            <Slider
              value={rating}
              onValueChange={setRating}
              max={10}
              min={1}
              step={1}
              id="rating"
            />
            <FieldDescription>
              Poor (1) /{" "}
              <span className="font-medium">Rating: {rating[0]}</span> /
              Excellent (10)
            </FieldDescription>
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
