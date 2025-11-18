"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CircleCheck, ChevronDown, Cloud, Github, Settings } from "lucide-react"

export function ButtonGroupPopover() {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <CircleCheck className="mr-2 h-4 w-4" />
        Mark as Done
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <h4 className="font-medium">Quick Actions</h4>
            <div className="grid gap-2">
              <Button variant="ghost" size="sm" className="justify-start">
                <Cloud className="mr-2 h-4 w-4" />
                Deploy to Production
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                <Github className="mr-2 h-4 w-4" />
                Create Pull Request
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Configure Settings
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}
