"use client"

export default function BlocksPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Blocks</h1>
        <p className="text-xl text-muted-foreground">
          Beautifully designed components that you can copy and paste into your apps.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Getting Started</h2>
          <p className="text-muted-foreground">
            Welcome to our comprehensive component library built with shadcn/ui. Explore our collection of reusable components and widgets.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Components</h2>
          <p className="text-muted-foreground">
            A complete collection of copy-and-paste components built on top of Radix UI and styled with Tailwind CSS. 
            Each component is fully accessible and customizable.
          </p>
          <p className="text-sm text-muted-foreground">
            Use the sidebar navigation to explore individual components with examples, API references, and usage instructions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Widgets</h2>
          <p className="text-muted-foreground">
            Pre-built widget compositions that demonstrate real-world usage patterns and advanced component combinations.
          </p>
        </section>
      </div>
    </div>
  )
}
