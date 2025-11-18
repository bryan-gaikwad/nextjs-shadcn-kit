"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { Button } from "@/components/ui/button"
import { appConfig } from "@/config/app"

export function ThemeToggle() {
  const { mode, setMode } = useTheme()

  if (!appConfig.theme.allowModeToggle) {
    return null
  }

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark")
  }

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className="h-9 w-9 px-0" 
      onClick={toggleMode}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme mode</span>
    </Button>
  )
}
