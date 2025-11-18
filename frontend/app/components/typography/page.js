"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

// Typography Demo (Main example)
function TypographyDemo() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Taxing Laughter: The Joke Tax Chronicles
      </h1>
      <p className="text-xl text-muted-foreground">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
      </p>
      <Separator className="my-6" />
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        The People of the Kingdom
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The king, seeing how much happier his subjects were, realized the importance of
        humor in his realm. He promptly abolished the joke tax and instead encouraged
        jesters and comedians to perform regularly in the town square.
      </p>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        The Joke Tax
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Once upon a time, in a far-off land, there was a very lazy king who spent all
        day lounging on his throne. One day his advisors came to him with a problem:
        the kingdom was running out of money.
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        "After all," he said, "everyone enjoys a good joke, so it's only fair that
        they should pay for the privilege."
      </blockquote>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        The People's Reaction
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The people of the kingdom were not amused. They grumbled and complained, but
        the king was firm:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        As a result, people stopped telling jokes, and the kingdom became a very
        dreary place. But there was a small group of rebels who refused to let
        the king's foolishness get them down, and they continued to tell jokes in secret.
      </p>
    </div>
  )
}

// Individual Typography Examples
function TypographyH1() {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Heading 1
    </h1>
  )
}

function TypographyH2() {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Heading 2
    </h2>
  )
}

function TypographyH3() {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Heading 3
    </h3>
  )
}

function TypographyH4() {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      Heading 4
    </h4>
  )
}

function TypographyP() {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      The king, seeing how much happier his subjects were, realized the importance
      of humor in his realm. He promptly abolished the joke tax and instead encouraged
      jesters and comedians to perform regularly in the town square.
    </p>
  )
}

function TypographyBlockquote() {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      "After all," he said, "everyone enjoys a good joke, so it's only fair that
      they should pay for the privilege."
    </blockquote>
  )
}

function TypographyTable() {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              King's Treasury
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              People's happiness
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Empty
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Overflowing
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Modest
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Satisfied
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Full
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Ecstatic
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function TypographyList() {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners: 20 gold coins</li>
    </ul>
  )
}

function TypographyInlineCode() {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      You can use the <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">mark</code> tag to{" "}
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">highlight</code> text.
    </p>
  )
}

function TypographyLead() {
  return (
    <p className="text-xl text-muted-foreground">
      A modal dialog that interrupts the user with important content and expects
      a response.
    </p>
  )
}

function TypographyLarge() {
  return <div className="text-lg font-semibold">Are you absolutely sure?</div>
}

function TypographySmall() {
  return (
    <small className="text-sm font-medium leading-none">Email address</small>
  )
}

function TypographyMuted() {
  return (
    <p className="text-sm text-muted-foreground">Enter your email address.</p>
  )
}

export default function TypographyPage() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 lg:px-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">Typography</h1>
          <p className="text-lg text-muted-foreground">
            Styles for headings, paragraphs, lists...etc
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
                <CardTitle>Typography Demo</CardTitle>
                <CardDescription>
                  A collection of typographic elements styled using utility classes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyDemo />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Headings</CardTitle>
                <CardDescription>
                  Different heading sizes with proper styling.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <TypographyH1 />
                <TypographyH2 />
                <TypographyH3 />
                <TypographyH4 />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Paragraph</CardTitle>
                <CardDescription>
                  Standard paragraph with proper line height and spacing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyP />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Blockquote</CardTitle>
                <CardDescription>
                  Styled blockquote with border and italic text.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyBlockquote />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Table</CardTitle>
                <CardDescription>
                  Styled table with borders and alternating row colors.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyTable />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>List</CardTitle>
                <CardDescription>
                  Unordered list with proper spacing and bullets.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyList />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Text Variations</CardTitle>
                <CardDescription>
                  Different text styles and sizes for various use cases.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Lead Text</h4>
                  <TypographyLead />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Large Text</h4>
                  <TypographyLarge />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Small Text</h4>
                  <TypographySmall />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Muted Text</h4>
                  <TypographyMuted />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Inline Code</h4>
                  <TypographyInlineCode />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="code" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Typography Classes</CardTitle>
                <CardDescription>
                  Utility classes for consistent typography throughout your application.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Heading 1</h3>
                  <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
  Heading 1
</h1>`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Heading 2</h3>
                  <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
  Heading 2
</h2>`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Heading 3</h3>
                  <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
  Heading 3
</h3>`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Heading 4</h3>
                  <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
  Heading 4
</h4>`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Paragraph</h3>
                  <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`<p className="leading-7 [&:not(:first-child)]:mt-6">
  Your paragraph text...
</p>`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Blockquote</h3>
                  <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`<blockquote className="mt-6 border-l-2 pl-6 italic">
  "Your quote text..."
</blockquote>`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Lead Text</h3>
                  <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`<p className="text-xl text-muted-foreground">
  Lead paragraph text...
</p>`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Large Text</h3>
                  <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`<div className="text-lg font-semibold">
  Large text
</div>`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Small Text</h3>
                  <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`<small className="text-sm font-medium leading-none">
  Small text
</small>`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Muted Text</h3>
                  <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`<p className="text-sm text-muted-foreground">
  Muted text
</p>`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Inline Code</h3>
                  <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`<code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
  code
</code>`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
