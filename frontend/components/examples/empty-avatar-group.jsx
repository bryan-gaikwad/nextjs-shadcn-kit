"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty"
import { Plus } from "lucide-react"

export function EmptyAvatarGroup() {
  return (
    <Empty className="flex-none border">
      <EmptyHeader>
        <EmptyMedia>
          <div className="flex -space-x-2">
            <Avatar className="h-12 w-12 ring-2 ring-background grayscale">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12 ring-2 ring-background grayscale">
              <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
              <AvatarFallback>VR</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12 ring-2 ring-background grayscale">
              <AvatarImage src="https://github.com/nextjs.png" alt="@nextjs" />
              <AvatarFallback>NX</AvatarFallback>
            </Avatar>
          </div>
        </EmptyMedia>
        <EmptyTitle>No team members yet</EmptyTitle>
        <EmptyDescription>
          Invite your team to start collaborating on projects together.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Invite Team Member
        </Button>
      </EmptyContent>
    </Empty>
  )
}
