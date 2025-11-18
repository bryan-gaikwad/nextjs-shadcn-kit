import { cn } from '@/lib/utils'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

const typeConfig = {
  info: {
    icon: Info,
    className: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30"
  },
  warning: {
    icon: AlertTriangle,
    className: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30"
  },
  success: {
    icon: CheckCircle,
    className: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30"
  },
  error: {
    icon: XCircle,
    className: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30"
  },
  default: {
    icon: Info,
    className: ""
  }
}

export function Callout({ type = "default", children, className, ...props }) {
  const config = typeConfig[type] || typeConfig.default
  const Icon = config.icon

  return (
    <Alert className={cn(config.className, className)} {...props}>
      <Icon className="h-4 w-4" />
      <AlertDescription className="[&>p]:m-0">
        {children}
      </AlertDescription>
    </Alert>
  )
}
