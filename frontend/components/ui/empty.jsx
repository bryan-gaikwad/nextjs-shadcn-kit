import { cn } from "@/lib/utils"

function Empty({ className, ...props }) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex flex-col items-center justify-center gap-6 rounded-lg border border-dashed p-8 text-center",
        className
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }) {
  return (
    <div
      data-slot="empty-header"
      className={cn("flex flex-col items-center gap-4", className)}
      {...props}
    />
  )
}

function EmptyMedia({ className, ...props }) {
  return (
    <div
      data-slot="empty-media"
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full bg-muted [&_svg]:h-6 [&_svg]:w-6 [&_svg]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }) {
  return (
    <h3
      data-slot="empty-title"
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }) {
  return (
    <p
      data-slot="empty-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }) {
  return (
    <div
      data-slot="empty-content"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
}
