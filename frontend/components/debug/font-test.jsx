import { useTheme } from '@/contexts/theme-context'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function FontTestComponent() {
  const { setTheme, theme, themes } = useTheme()
  const [debugInfo, setDebugInfo] = useState({})

  const updateDebugInfo = () => {
    if (typeof window === 'undefined') return
    
    const rootEl = document.documentElement
    const info = {
      currentTheme: theme,
      fontSans: getComputedStyle(rootEl).getPropertyValue('--font-sans').trim(),
      fontMono: getComputedStyle(rootEl).getPropertyValue('--font-mono').trim(),
      bodyFontFamily: getComputedStyle(document.body).fontFamily,
      rootFontVars: Array.from(rootEl.style).filter(prop => prop.startsWith('--font'))
    }
    setDebugInfo(info)
    console.log('=== FONT DEBUG INFO ===', info)
  }

  useEffect(() => {
    updateDebugInfo()
  }, [theme])

  const handleThemeChange = (themeName) => {
    console.log('Switching to theme:', themeName)
    setTheme(themeName)
    setTimeout(updateDebugInfo, 100)
  }

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold font-sans">Font Test Component</h1>
        <p className="text-lg font-sans">This text should change font when theme changes (Candyland = Poppins, Ocean = Inter, Forest = Source Sans)</p>
        <code className="text-sm font-mono bg-gray-100 p-2 rounded block">
          This is monospace text (Candyland = Roboto Mono, Ocean = JetBrains Mono)
        </code>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Theme Selector</h2>
        <div className="flex gap-2 flex-wrap">
          {Object.keys(themes).map((themeName) => (
            <Button
              key={themeName}
              onClick={() => handleThemeChange(themeName)}
              variant={theme === themeName ? "default" : "outline"}
              size="sm"
            >
              {themes[themeName].name}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <Button onClick={updateDebugInfo} variant="secondary" size="sm">
          Refresh Debug Info
        </Button>
        
        <div className="text-sm text-gray-600 space-y-1 font-mono bg-gray-50 p-4 rounded">
          <div><strong>Current theme:</strong> {debugInfo.currentTheme}</div>
          <div><strong>--font-sans:</strong> {debugInfo.fontSans}</div>
          <div><strong>--font-mono:</strong> {debugInfo.fontMono}</div>
          <div><strong>Body computed font:</strong> {debugInfo.bodyFontFamily}</div>
          <div><strong>Root font CSS vars:</strong> {JSON.stringify(debugInfo.rootFontVars)}</div>
        </div>
      </div>
    </div>
  )
}
