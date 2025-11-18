import { cn } from "@/lib/utils"

function Kbd({ className, ...props }) {
  return (
    <kbd
      className={cn(
        "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 [&>kbd]:rounded-none [&>kbd:first-child]:rounded-l [&>kbd:last-child]:rounded-r",
        className
      )}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
