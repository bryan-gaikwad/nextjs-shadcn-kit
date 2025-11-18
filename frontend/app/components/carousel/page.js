"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useRef, useEffect } from "react";

// Basic Carousel Demo
function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs mx-auto">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

// Carousel with Different Sizes
function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm mx-auto"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

// Carousel with Spacing
function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-sm mx-auto">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

// Vertical Orientation
function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs mx-auto"
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

// API Example with State
function CarouselApi() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}

export default function CarouselPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Carousel</h1>
        <p className="text-muted-foreground text-lg">
          A carousel with motion and swipe built using Embla.
        </p>
        <div className="flex gap-2 mt-4">
          <Badge variant="secondary">Interactive</Badge>
          <Badge variant="outline">Accessible</Badge>
        </div>
      </div>

      <Tabs defaultValue="preview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-8">
          {/* Basic Demo */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Basic Carousel</h2>
            <p className="text-muted-foreground">
              A carousel with 5 items and navigation buttons.
            </p>
            <div className="border rounded-lg p-8 bg-background">
              <CarouselDemo />
            </div>
          </div>

          {/* Size Example */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Different Sizes</h2>
            <p className="text-muted-foreground">
              A carousel with items that have different basis sizes.
            </p>
            <div className="border rounded-lg p-8 bg-background">
              <CarouselSize />
            </div>
          </div>

          {/* Spacing Example */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Custom Spacing</h2>
            <p className="text-muted-foreground">
              A carousel with custom spacing between items.
            </p>
            <div className="border rounded-lg p-8 bg-background">
              <CarouselSpacing />
            </div>
          </div>

          {/* Orientation Example */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Vertical Orientation</h2>
            <p className="text-muted-foreground">
              A carousel with vertical orientation.
            </p>
            <div className="border rounded-lg p-8 bg-background">
              <CarouselOrientation />
            </div>
          </div>

          {/* API Example */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">API Usage</h2>
            <p className="text-muted-foreground">
              A carousel with API access for programmatic control.
            </p>
            <div className="border rounded-lg p-8 bg-background">
              <CarouselApi />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Installation</h2>
            <div className="bg-muted rounded-md p-4">
              <code className="text-sm">npm install embla-carousel-react</code>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Import</h2>
            <pre className="bg-muted rounded-md p-4 overflow-x-auto">
              <code className="text-sm">{`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"`}</code>
            </pre>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Usage</h2>
            <pre className="bg-muted rounded-md p-4 overflow-x-auto">
              <code className="text-sm">{`<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</code>
            </pre>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Basic Example</h2>
            <pre className="bg-muted rounded-md p-4 overflow-x-auto">
              <code className="text-sm">{`export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}`}</code>
            </pre>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">API Example</h2>
            <pre className="bg-muted rounded-md p-4 overflow-x-auto">
              <code className="text-sm">{`export function CarouselWithApi() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {/* ... items ... */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}`}</code>
            </pre>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Vertical Orientation</h2>
            <pre className="bg-muted rounded-md p-4 overflow-x-auto">
              <code className="text-sm">{`<Carousel
  opts={{
    align: "start",
  }}
  orientation="vertical"
  className="w-full max-w-xs"
>
  <CarouselContent className="-mt-1 h-[200px]">
    {/* ... items ... */}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</code>
            </pre>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Options</h2>
            <pre className="bg-muted rounded-md p-4 overflow-x-auto">
              <code className="text-sm">{`<Carousel
  opts={{
    align: "start",
    loop: true,
    skipSnaps: false,
    containScroll: "trimSnaps"
  }}
>
  {/* ... */}
</Carousel>`}</code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
