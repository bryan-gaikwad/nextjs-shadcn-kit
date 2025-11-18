import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

function Item({ className, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp
      data-slot="item"
      className={cn(
        "flex items-start gap-4 p-4 transition-colors hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

function ItemGroup({ className, ...props }) {
  return (
    <div
      data-slot="item-group"
      className={cn("grid gap-0", className)}
      {...props}
    />
  )
}

function ItemMedia({ className, variant = "icon", ...props }) {
  if (variant === "image") {
    return (
      <div
        data-slot="item-media"
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-lg bg-muted [&_img]:h-full [&_img]:w-full [&_img]:rounded-lg [&_img]:object-cover",
          className
        )}
        {...props}
      />
    )
  }

  return (
    <div
      data-slot="item-media"
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-lg bg-muted [&_svg]:h-5 [&_svg]:w-5 [&_svg]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }) {
  return (
    <div
      data-slot="item-content"
      className={cn("flex flex-1 flex-col gap-1", className)}
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }) {
  return (
    <div
      data-slot="item-title"
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    />
  )
}

function ItemDescription({ className, ...props }) {
  return (
    <div
      data-slot="item-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }) {
  return (
    <div
      data-slot="item-actions"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
}

function ItemFooter({ className, ...props }) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className
      )}
      {...props}
    />
  )
}

function ItemSeparator({ className, ...props }) {
  return (
    <Separator
      data-slot="item-separator"
      className={cn("mx-4", className)}
      {...props}
    />
  )
}

export {
  Item,
  ItemGroup,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemFooter,
  ItemSeparator,
}
