"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowLeft, MoreHorizontal, MailCheck, Pin, UserCircle } from "lucide-react"

export function ButtonGroupDemo() {
  const [label, setLabel] = React.useState("personal")

  return (
    <div className="space-y-4">
      <ButtonGroup>
        <ButtonGroup className="hidden sm:flex">
          <Button variant="outline" size="icon" aria-label="Go Back">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="sm">
            Archive
          </Button>
          <Button variant="outline" size="sm">
            Report
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="sm">
            Snooze
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="More Options">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <MailCheck className="mr-2 h-4 w-4" />
                Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Pin className="mr-2 h-4 w-4" />
                Pin Message
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserCircle className="mr-2 h-4 w-4" />
                View Profile
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  )
}
