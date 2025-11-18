import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const buttonGroupVariants = cva(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal:
          "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
      },
      size: {
        xs: "[&>*]:h-7 [&>*]:px-2 [&>*]:text-xs",
        sm: "[&>*]:h-8 [&>*]:px-3 [&>*]:text-sm",
        default: "[&>*]:h-9 [&>*]:px-4 [&>*]:text-sm",
        lg: "[&>*]:h-10 [&>*]:px-8 [&>*]:text-base",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      size: "default",
    },
  }
)

function ButtonGroup({
  className,
  orientation = "horizontal",
  size = "default",
  ...props
}) {
  return (
    <div
      data-slot="button-group"
      className={cn(buttonGroupVariants({ orientation, size }), className)}
      role="group"
      {...props}
    />
  )
}

function ButtonGroupText({ className, ...props }) {
  return (
    <span
      className={cn(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

export { ButtonGroup, ButtonGroupText }
