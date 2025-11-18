import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

function Field({ className, ...props }) {
  return (
    <div
      data-slot="field"
      className={cn("grid w-full gap-1.5", className)}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }) {
  return (
    <div
      data-slot="field-group"
      className={cn("grid w-full gap-6", className)}
      {...props}
    />
  )
}

function FieldSet({ className, ...props }) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn("grid w-full gap-6 border-0 p-0 m-0", className)}
      {...props}
    />
  )
}

function FieldLegend({ className, ...props }) {
  return (
    <legend
      data-slot="field-legend"
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
}

function FieldLabel({ className, ...props }) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }) {
  return (
    <div
      data-slot="field-title"
      className={cn(
        "text-base font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }) {
  return (
    <div
      data-slot="field-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function FieldError({ className, ...props }) {
  return (
    <div
      data-slot="field-error"
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        className
      )}
      {...props}
    />
  )
}

function FieldSeparator({ className, children, ...props }) {
  return (
    <div className={cn("grid w-full gap-6", className)} {...props}>
      {children && (
        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <div className="text-sm font-medium text-muted-foreground">
            {children}
          </div>
          <Separator className="flex-1" />
        </div>
      )}
      {!children && <Separator />}
    </div>
  )
}

export {
  Field,
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldLabel,
  FieldTitle,
  FieldDescription,
  FieldError,
  FieldContent,
  FieldSeparator,
}
