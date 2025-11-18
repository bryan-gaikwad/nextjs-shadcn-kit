"use client"

import { DownloadIcon, PlusIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { Progress } from "@/components/ui/progress"

const people = [
  {
    username: "shadcn",
    name: "shadcn",
    avatar: "https://github.com/shadcn.png",
    role: "Developer",
    status: "online",
  },
  {
    username: "vercel",
    name: "Vercel",
    avatar: "https://github.com/vercel.png",
    role: "Company",
    status: "away",
  },
  {
    username: "nextjs",
    name: "Next.js",
    avatar: "https://github.com/vercel.png",
    role: "Framework",
    status: "offline",
  },
]

const files = [
  {
    name: "project-docs.pdf",
    size: "2.1 MB",
    type: "PDF",
    progress: 100,
  },
  {
    name: "design-assets.zip",
    size: "15.3 MB", 
    type: "Archive",
    progress: 75,
  },
  {
    name: "presentation.pptx",
    size: "5.8 MB",
    type: "PowerPoint",
    progress: 45,
  },
]

export function ItemDemo() {
  return (
    <div className="grid w-full max-w-md gap-6">
      <ItemGroup>
        <div className="px-4 py-2">
          <ItemTitle>Team Members</ItemTitle>
        </div>
        {people.map((person, index) => (
          <div key={person.username}>
            <Item>
              <ItemMedia>
                <Avatar className="size-8">
                  <AvatarImage src={person.avatar} alt={person.name} />
                  <AvatarFallback>{person.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{person.name}</ItemTitle>
                <ItemDescription>{person.role}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <div className={`size-2 rounded-full ${
                  person.status === 'online' ? 'bg-green-500' :
                  person.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                }`} />
              </ItemActions>
            </Item>
            {index < people.length - 1 && <ItemSeparator />}
          </div>
        ))}
      </ItemGroup>

      <ItemGroup>
        <div className="px-4 py-2 flex items-center justify-between">
          <ItemTitle>Downloads</ItemTitle>
          <ItemActions>
            <Button variant="ghost" size="icon-sm">
              <PlusIcon />
            </Button>
          </ItemActions>
        </div>
        {files.map((file, index) => (
          <div key={file.name}>
            <Item>
              <ItemMedia>
                <div className="flex size-8 items-center justify-center rounded bg-muted text-xs font-medium">
                  {file.type.slice(0, 3)}
                </div>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{file.name}</ItemTitle>
                <ItemDescription>{file.size}</ItemDescription>
                <ItemFooter>
                  <Progress value={file.progress} className="h-1" />
                </ItemFooter>
              </ItemContent>
              <ItemActions>
                <Button variant="ghost" size="icon-sm">
                  <DownloadIcon />
                </Button>
              </ItemActions>
            </Item>
            {index < files.length - 1 && <ItemSeparator />}
          </div>
        ))}
      </ItemGroup>
    </div>
  )
}
