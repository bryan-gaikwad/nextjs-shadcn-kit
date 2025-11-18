"use client"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { AudioLines, Plus } from "lucide-react"

export function ButtonGroupInputGroup() {
  return (
    <TooltipProvider>
      <ButtonGroup className="rounded-full">
        <ButtonGroup>
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <InputGroup>
            <InputGroupInput placeholder="Send a message..." />
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupAddon align="inline-end">
                  <InputGroupButton size="icon" aria-label="Voice Mode">
                    <AudioLines className="h-4 w-4" />
                  </InputGroupButton>
                </InputGroupAddon>
              </TooltipTrigger>
              <TooltipContent>Voice Mode</TooltipContent>
            </Tooltip>
          </InputGroup>
        </ButtonGroup>
      </ButtonGroup>
    </TooltipProvider>
  )
}
