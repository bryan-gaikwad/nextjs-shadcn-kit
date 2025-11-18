"use client"

import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function InputGroupButtonExample() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <InputGroupButton>
            Search
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      
      <InputGroup>
        <InputGroupInput placeholder="Enter text..." />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton
                className="rounded-full"
                size="icon-xs"
                aria-label="Send"
              >
                <ArrowUpIcon />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>Send message</TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Type message..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="outline" size="sm">
            Cancel
          </InputGroupButton>
          <InputGroupButton size="sm">
            Send
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Password" type="password" />
        <InputGroupAddon>
          <InputGroupButton variant="ghost" size="icon-sm">
            👁️
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
