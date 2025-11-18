"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

function BasicSliderDemo() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Default Slider</Label>
        <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
      </div>
      
      <div className="space-y-2">
        <Label>Range Slider</Label>
        <Slider defaultValue={[25, 75]} max={100} step={1} className="w-[60%]" />
      </div>
      
      <div className="space-y-2">
        <Label>Step Slider (10 increments)</Label>
        <Slider defaultValue={[30]} max={100} step={10} className="w-[60%]" />
      </div>
    </div>
  )
}

function ControlledSliderDemo() {
  const [volume, setVolume] = useState([50])
  const [brightness, setBrightness] = useState([75])
  const [priceRange, setPriceRange] = useState([200, 800])
  
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="volume">Volume</Label>
          <span className="text-sm text-muted-foreground">{volume[0]}%</span>
        </div>
        <Slider
          id="volume"
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
          className="w-full"
        />
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="brightness">Screen Brightness</Label>
          <span className="text-sm text-muted-foreground">{brightness[0]}%</span>
        </div>
        <Slider
          id="brightness"
          value={brightness}
          onValueChange={setBrightness}
          max={100}
          step={5}
          className="w-full"
        />
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="priceRange">Price Range</Label>
          <span className="text-sm text-muted-foreground">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
        <Slider
          id="priceRange"
          value={priceRange}
          onValueChange={setPriceRange}
          max={1000}
          min={0}
          step={10}
          className="w-full"
        />
      </div>
    </div>
  )
}

function VerticalSliderDemo() {
  const [temp, setTemp] = useState([0.7])
  const [quality, setQuality] = useState([720])
  
  return (
    <div className="flex items-end gap-8 h-64">
      <div className="flex flex-col items-center gap-4 h-full">
        <Label className="text-sm">Temperature</Label>
        <Slider
          orientation="vertical"
          value={temp}
          onValueChange={setTemp}
          max={1}
          min={0}
          step={0.1}
          className="h-full"
        />
        <span className="text-xs text-muted-foreground">{temp[0].toFixed(1)}</span>
      </div>
      
      <div className="flex flex-col items-center gap-4 h-full">
        <Label className="text-sm">Quality</Label>
        <Slider
          orientation="vertical"
          value={quality}
          onValueChange={setQuality}
          max={1080}
          min={360}
          step={360}
          className="h-full"
        />
        <span className="text-xs text-muted-foreground">{quality[0]}p</span>
      </div>
      
      <div className="flex flex-col items-center gap-4 h-full">
        <Label className="text-sm">Volume</Label>
        <Slider
          orientation="vertical"
          defaultValue={[30]}
          max={100}
          step={1}
          className="h-full"
        />
      </div>
    </div>
  )
}

function MediaPlayerDemo() {
  const [volume, setVolume] = useState([65])
  const [progress, setProgress] = useState([25])
  const [bass, setBass] = useState([0])
  const [treble, setTreble] = useState([0])
  
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 010 1.414A4.978 4.978 0 0117 10a4.978 4.978 0 01-1.343 2.243 1 1 0 11-1.414-1.414A2.978 2.978 0 0015 10a2.978 2.978 0 00-.757-1.829 1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          Music Player
        </CardTitle>
        <CardDescription>Currently playing: Ambient Dreams</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>2:14</span>
            <span className="text-muted-foreground">Progress</span>
            <span>4:32</span>
          </div>
          <Slider
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm">Volume</Label>
              <span className="text-xs text-muted-foreground">{volume[0]}%</span>
            </div>
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm">Bass</Label>
              <span className="text-xs text-muted-foreground">{bass[0] > 0 ? '+' : ''}{bass[0]}</span>
            </div>
            <Slider
              value={bass}
              onValueChange={setBass}
              max={10}
              min={-10}
              step={1}
              className="w-full"
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm">Treble</Label>
            <span className="text-xs text-muted-foreground">{treble[0] > 0 ? '+' : ''}{treble[0]}</span>
          </div>
          <Slider
            value={treble}
            onValueChange={setTreble}
            max={10}
            min={-10}
            step={1}
            className="w-full"
          />
        </div>
      </CardContent>
    </Card>
  )
}

function SliderVariations() {
  const [disabled] = useState([40])
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label className="text-base font-medium">Different Configurations</Label>
        
        <div className="space-y-6">
          {/* Small Steps */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Fine Control (0.01 steps)</Label>
            <Slider defaultValue={[0.5]} max={1} min={0} step={0.01} className="w-full" />
          </div>
          
          {/* Large Steps */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Coarse Control (25 steps)</Label>
            <Slider defaultValue={[50]} max={100} min={0} step={25} className="w-full" />
          </div>
          
          {/* Custom Range */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Temperature (-20°C to 50°C)</Label>
            <Slider defaultValue={[20]} max={50} min={-20} step={5} className="w-full" />
          </div>
          
          {/* Multiple Thumbs */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Multi-Range Selection</Label>
            <Slider defaultValue={[10, 30, 60, 90]} max={100} min={0} step={1} className="w-full" />
          </div>
          
          {/* Disabled State */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">Disabled Slider</Label>
            <Slider value={disabled} max={100} step={1} disabled className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

function InteractiveDemo() {
  const [sliderConfig, setSliderConfig] = useState({
    min: 0,
    max: 100,
    step: 1,
    value: [50]
  })
  
  const updateConfig = (key, value) => {
    setSliderConfig(prev => ({
      ...prev,
      [key]: value
    }))
  }
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Min Value</Label>
          <Slider
            value={[sliderConfig.min]}
            onValueChange={([val]) => updateConfig('min', val)}
            max={50}
            min={-50}
            step={1}
          />
          <span className="text-xs text-muted-foreground">{sliderConfig.min}</span>
        </div>
        
        <div className="space-y-2">
          <Label>Max Value</Label>
          <Slider
            value={[sliderConfig.max]}
            onValueChange={([val]) => updateConfig('max', val)}
            max={200}
            min={50}
            step={1}
          />
          <span className="text-xs text-muted-foreground">{sliderConfig.max}</span>
        </div>
        
        <div className="space-y-2">
          <Label>Step</Label>
          <Slider
            value={[sliderConfig.step]}
            onValueChange={([val]) => updateConfig('step', val)}
            max={20}
            min={1}
            step={1}
          />
          <span className="text-xs text-muted-foreground">{sliderConfig.step}</span>
        </div>
        
        <div className="space-y-2">
          <Label>Current Value</Label>
          <span className="text-sm font-mono bg-muted px-2 py-1 rounded">
            {sliderConfig.value[0]}
          </span>
        </div>
      </div>
      
      <div className="space-y-3 p-4 border rounded-lg">
        <Label>Interactive Slider</Label>
        <Slider
          value={sliderConfig.value}
          onValueChange={(val) => updateConfig('value', val)}
          max={sliderConfig.max}
          min={sliderConfig.min}
          step={sliderConfig.step}
          className="w-full"
        />
        <div className="text-xs text-muted-foreground">
          Range: {sliderConfig.min} to {sliderConfig.max}, Step: {sliderConfig.step}
        </div>
      </div>
    </div>
  )
}

export default function SliderPage() {
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
            <path d="M4.5 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path d="M4.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM11.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4z"/>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Slider</h1>
          <p className="text-muted-foreground">
            An input where the user selects a value from within a given range.
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
                <CardTitle>Basic Sliders</CardTitle>
                <CardDescription>
                  Simple sliders with default values, range selection, and step increments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BasicSliderDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Controlled Sliders</CardTitle>
                <CardDescription>
                  Sliders with controlled state showing real-time value updates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ControlledSliderDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Vertical Orientation</CardTitle>
                <CardDescription>
                  Sliders displayed in vertical orientation for different layouts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <VerticalSliderDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Media Player Demo</CardTitle>
                <CardDescription>
                  A realistic example using sliders for media player controls.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <MediaPlayerDemo />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Slider Variations</CardTitle>
                <CardDescription>
                  Different configurations including fine control, coarse steps, custom ranges, and disabled state.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SliderVariations />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Interactive Configuration</CardTitle>
                <CardDescription>
                  Dynamically configure slider properties to see how they affect behavior.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo />
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
{`npx shadcn-ui@latest add slider`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>
                  Import and use the Slider component in your React component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`import { Slider } from "@/components/ui/slider"

export function SliderDemo() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className="w-[60%]"
    />
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
                  Different slider configurations and use cases.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`// Basic slider
<Slider defaultValue={[50]} max={100} step={1} />

// Range slider with two thumbs
<Slider defaultValue={[25, 75]} max={100} step={1} />

// Controlled slider with state
function VolumeSlider() {
  const [value, setValue] = useState([50])
  
  return (
    <Slider
      value={value}
      onValueChange={setValue}
      max={100}
      step={1}
    />
  )
}

// Vertical orientation
<Slider
  orientation="vertical"
  defaultValue={[50]}
  max={100}
  step={1}
  className="h-64"
/>

// Custom range and steps
<Slider
  defaultValue={[20]}
  max={50}
  min={-20}
  step={5}
/>

// Fine control with decimal steps
<Slider
  defaultValue={[0.5]}
  max={1}
  min={0}
  step={0.01}
/>

// Multiple thumbs
<Slider
  defaultValue={[10, 30, 60, 90]}
  max={100}
  min={0}
  step={1}
/>

// Disabled state
<Slider
  value={[40]}
  max={100}
  disabled
/>`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Props</CardTitle>
                <CardDescription>
                  Slider component props and their descriptions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`interface SliderProps {
  defaultValue?: number[]        // Default value for uncontrolled
  value?: number[]              // Current value for controlled
  onValueChange?: (value: number[]) => void  // Callback when value changes
  min?: number                  // Minimum value (default: 0)
  max?: number                  // Maximum value (default: 100)
  step?: number                 // Step increment (default: 1)
  orientation?: "horizontal" | "vertical"  // Slider orientation
  disabled?: boolean            // Whether slider is disabled
  className?: string           // Additional CSS classes
}

// Usage with all props
<Slider
  value={value}
  onValueChange={setValue}
  min={0}
  max={100}
  step={1}
  orientation="horizontal"
  disabled={false}
  className="w-full"
/>`}
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
