"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { 
  Item, 
  ItemActions, 
  ItemContent, 
  ItemDescription, 
  ItemGroup, 
  ItemMedia, 
  ItemSeparator, 
  ItemTitle,
  ItemFooter 
} from "@/components/ui/item"
import { 
  Empty, 
  EmptyContent, 
  EmptyDescription, 
  EmptyHeader, 
  EmptyMedia, 
  EmptyTitle 
} from "@/components/ui/empty"
import { 
  InputGroup, 
  InputGroupAddon, 
  InputGroupButton, 
  InputGroupInput, 
  InputGroupText 
} from "@/components/ui/input-group"
import { ButtonGroup } from "@/components/ui/button-group"
import { 
  Field, 
  FieldContent, 
  FieldDescription, 
  FieldLabel, 
  FieldTitle 
} from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

// Widget: Item Avatar - Item components with avatars
export function ItemAvatar() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-4">
      <Item variant="outline">
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>shadcn</ItemTitle>
          <ItemDescription>Last seen 5 minutes ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            size="sm"
            variant="outline"
            className="rounded-full"
            aria-label="Invite"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar className="hidden sm:flex">
              <AvatarImage src="https://github.com/maxleiter.png" />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/evilrabbit.png" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>+2</AvatarFallback>
            </Avatar>
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Design Team</ItemTitle>
          <ItemDescription>4 members online</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="sm">
            View
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}

// Widget: Spinner Badge - Spinners inside badges
export function SpinnerBadge() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge>
        <Spinner size="xs" className="mr-2" />
        Processing
      </Badge>
      <Badge variant="secondary">
        <Spinner size="xs" className="mr-2" />
        Loading
      </Badge>
      <Badge variant="destructive">
        <Spinner size="xs" className="mr-2" />
        Error
      </Badge>
      <Badge variant="outline">
        <Spinner size="xs" className="mr-2" />
        Pending
      </Badge>
    </div>
  )
}

// Widget: Empty Avatar Group - Empty states with avatar groups
export function EmptyAvatarGroup() {
  return (
    <Empty className="flex-none border">
      <EmptyHeader>
        <EmptyMedia>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </EmptyMedia>
        <EmptyContent>
          <EmptyTitle>No team members yet</EmptyTitle>
          <EmptyDescription>
            Invite your first team member to get started collaborating.
          </EmptyDescription>
        </EmptyContent>
      </EmptyHeader>
      <Button>
        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Invite Member
      </Button>
    </Empty>
  )
}

// Widget: Input Group Button Examples - Specialized input group components
export function InputGroupButtonWidget() {
  return (
    <div className="space-y-4">
      <Field>
        <FieldLabel htmlFor="search-action">Search with action</FieldLabel>
        <InputGroup>
          <InputGroupInput 
            id="search-action" 
            placeholder="Search..." 
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="default">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Field>
      
      <Field>
        <FieldLabel htmlFor="url-builder">URL Builder</FieldLabel>
        <ButtonGroup>
          <InputGroupText>https://</InputGroupText>
          <InputGroup>
            <InputGroupInput 
              id="url-builder" 
              placeholder="example" 
            />
          </InputGroup>
          <InputGroupText>.com</InputGroupText>
        </ButtonGroup>
      </Field>

      <Field>
        <FieldLabel htmlFor="copy-action">Copy to clipboard</FieldLabel>
        <InputGroup>
          <InputGroupInput 
            id="copy-action" 
            defaultValue="npm install @shadcn/ui" 
            readOnly
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton 
              variant="outline" 
              size="sm"
              onClick={() => navigator.clipboard?.writeText("npm install @shadcn/ui")}
            >
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </div>
  )
}

// Widget: Advanced Button Groups
export function ButtonGroupAdvanced() {
  const [selection, setSelection] = React.useState("all")
  
  return (
    <div className="space-y-4">
      <div>
        <Label className="text-sm font-medium mb-2 block">Filter Options</Label>
        <ButtonGroup>
          {["all", "active", "pending", "completed"].map((option) => (
            <Button
              key={option}
              variant={selection === option ? "default" : "outline"}
              size="sm"
              onClick={() => setSelection(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      
      <div>
        <Label className="text-sm font-medium mb-2 block">Formatting Tools</Label>
        <ButtonGroup>
          <Button variant="outline" size="sm">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h7a4 4 0 014 4 4 4 0 01-4 4H6z" />
            </svg>
          </Button>
          <Button variant="outline" size="sm">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 4v12" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 6 2-2 2 2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 14 2 2 2-2" />
            </svg>
          </Button>
          <Button variant="outline" size="sm">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17h16" />
            </svg>
          </Button>
        </ButtonGroup>
      </div>

      <div>
        <Label className="text-sm font-medium mb-2 block">Actions with Dropdown</Label>
        <ButtonGroup>
          <Button variant="outline">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>New Project</DropdownMenuItem>
              <DropdownMenuItem>New Folder</DropdownMenuItem>
              <DropdownMenuItem>Import</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      </div>
    </div>
  )
}

// Widget: Field Advanced - More complex field examples
export function FieldAdvanced() {
  const [notifications, setNotifications] = React.useState(true)
  const [marketing, setMarketing] = React.useState(false)
  
  return (
    <div className="space-y-6">
      <Field className="flex flex-row items-center justify-between rounded-lg border p-4">
        <FieldContent>
          <FieldTitle>Push Notifications</FieldTitle>
          <FieldDescription>
            Receive push notifications on your devices.
          </FieldDescription>
        </FieldContent>
        <Switch checked={notifications} onCheckedChange={setNotifications} />
      </Field>

      <Field className="flex flex-row items-center justify-between rounded-lg border p-4">
        <FieldContent>
          <FieldTitle>Marketing Communications</FieldTitle>
          <FieldDescription>
            Receive emails about new products and features.
          </FieldDescription>
        </FieldContent>
        <Switch checked={marketing} onCheckedChange={setMarketing} />
      </Field>

      <Field>
        <FieldLabel htmlFor="team-size">Team Size</FieldLabel>
        <FieldDescription>
          How many team members do you plan to invite?
        </FieldDescription>
        <ButtonGroup>
          {["1-5", "6-20", "21-50", "50+"].map((size) => (
            <Button key={size} variant="outline" size="sm">
              {size}
            </Button>
          ))}
        </ButtonGroup>
      </Field>
    </div>
  )
}

// Widget: Activity Feed Enhanced
export function ActivityFeedEnhanced() {
  const activities = [
    {
      id: 1,
      type: "user",
      avatar: "https://github.com/shadcn.png",
      title: "New user signed up",
      description: "shadcn joined the platform",
      time: "2 minutes ago",
      status: "success"
    },
    {
      id: 2,
      type: "payment",
      title: "Payment received",
      description: "$99.99 subscription payment",
      time: "1 hour ago",
      status: "success"
    },
    {
      id: 3,
      type: "system",
      title: "System maintenance",
      description: "Scheduled maintenance completed",
      time: "3 hours ago",
      status: "info"
    },
    {
      id: 4,
      type: "error",
      title: "API rate limit exceeded",
      description: "Rate limit hit for user @johndoe",
      time: "6 hours ago",
      status: "warning"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "success": return "bg-green-500"
      case "info": return "bg-blue-500"
      case "warning": return "bg-orange-500"
      case "error": return "bg-red-500"
      default: return "bg-gray-500"
    }
  }

  const getStatusIcon = (type) => {
    switch (type) {
      case "user":
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        )
      case "payment":
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        )
      case "system":
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      default:
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
    }
  }

  return (
    <ItemGroup>
      {activities.map((activity, index) => (
        <React.Fragment key={activity.id}>
          <Item>
            <ItemMedia>
              {activity.avatar ? (
                <Avatar className="size-8">
                  <AvatarImage src={activity.avatar} />
                  <AvatarFallback>
                    {activity.title.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <div className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-white",
                  getStatusColor(activity.status)
                )}>
                  {getStatusIcon(activity.type)}
                </div>
              )}
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-sm">{activity.title}</ItemTitle>
              <ItemDescription className="text-xs">
                {activity.description}
              </ItemDescription>
              <ItemFooter>
                <span className="text-xs text-muted-foreground">
                  {activity.time}
                </span>
              </ItemFooter>
            </ItemContent>
          </Item>
          {index !== activities.length - 1 && <ItemSeparator />}
        </React.Fragment>
      ))}
    </ItemGroup>
  )
}

// Widget: Loading States
export function LoadingStates() {
  return (
    <div className="space-y-4">
      <Item>
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Processing payment...</ItemTitle>
          <ItemDescription>Please wait while we process your payment</ItemDescription>
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm font-medium">$99.99</span>
        </ItemContent>
      </Item>

      <Item>
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Uploading files...</ItemTitle>
          <Progress value={65} className="mt-1" />
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm text-muted-foreground">65%</span>
        </ItemContent>
      </Item>

      <Item>
        <ItemMedia>
          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Upload complete</ItemTitle>
          <ItemDescription>All files have been successfully uploaded</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
