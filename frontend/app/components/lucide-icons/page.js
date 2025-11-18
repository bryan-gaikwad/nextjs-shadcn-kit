"use client"

import { useState } from "react"
import { 
  Home, Search, User, Settings, Bell, Mail, Calendar, 
  Heart, Star, Bookmark, Download, Upload, Share, 
  Edit, Delete, Plus, Minus, X, Check, ChevronRight, 
  ChevronLeft, ChevronUp, ChevronDown, ArrowRight, 
  ArrowLeft, ArrowUp, ArrowDown, Menu, MoreHorizontal, 
  MoreVertical, Play, Pause, Square, Volume2, VolumeX, 
  Wifi, Battery, Signal, Bluetooth, Camera, Image, 
  File, Folder, Lock, Unlock, Eye, EyeOff, Zap, 
  Sun, Moon, Cloud, CloudRain, Thermometer, Wind,
  ShoppingCart, CreditCard, DollarSign, TrendingUp,
  Users, UserPlus, MessageCircle, Phone, Video,
  Globe, MapPin, Navigation, Compass, Map,
  Code, Terminal, Database, Server, Cpu,
  Package, Truck, Clock, AlertCircle, Info,
  CheckCircle, XCircle, HelpCircle, AlertTriangle,
  Coffee, Music, Headphones, Gamepad2, Gift,
  Award, Trophy, Target, Flag, Bookmark as BookmarkIcon
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const iconCategories = {
  "Navigation": [
    { name: "Home", component: Home },
    { name: "Menu", component: Menu },
    { name: "Search", component: Search },
    { name: "ChevronRight", component: ChevronRight },
    { name: "ChevronLeft", component: ChevronLeft },
    { name: "ChevronUp", component: ChevronUp },
    { name: "ChevronDown", component: ChevronDown },
    { name: "ArrowRight", component: ArrowRight },
    { name: "ArrowLeft", component: ArrowLeft },
    { name: "ArrowUp", component: ArrowUp },
    { name: "ArrowDown", component: ArrowDown },
    { name: "MoreHorizontal", component: MoreHorizontal },
    { name: "MoreVertical", component: MoreVertical },
  ],
  "User & Social": [
    { name: "User", component: User },
    { name: "Users", component: Users },
    { name: "UserPlus", component: UserPlus },
    { name: "MessageCircle", component: MessageCircle },
    { name: "Heart", component: Heart },
    { name: "Star", component: Star },
    { name: "Share", component: Share },
  ],
  "Communication": [
    { name: "Mail", component: Mail },
    { name: "Bell", component: Bell },
    { name: "Phone", component: Phone },
    { name: "Video", component: Video },
    { name: "MessageCircle", component: MessageCircle },
  ],
  "Actions": [
    { name: "Plus", component: Plus },
    { name: "Minus", component: Minus },
    { name: "X", component: X },
    { name: "Check", component: Check },
    { name: "Edit", component: Edit },
    { name: "Delete", component: Delete },
    { name: "Download", component: Download },
    { name: "Upload", component: Upload },
  ],
  "Media": [
    { name: "Play", component: Play },
    { name: "Pause", component: Pause },
    { name: "Square", component: Square },
    { name: "Volume2", component: Volume2 },
    { name: "VolumeX", component: VolumeX },
    { name: "Camera", component: Camera },
    { name: "Image", component: Image },
    { name: "Music", component: Music },
    { name: "Headphones", component: Headphones },
  ],
  "Files & Folders": [
    { name: "File", component: File },
    { name: "Folder", component: Folder },
    { name: "Package", component: Package },
    { name: "Bookmark", component: Bookmark },
  ],
  "Security": [
    { name: "Lock", component: Lock },
    { name: "Unlock", component: Unlock },
    { name: "Eye", component: Eye },
    { name: "EyeOff", component: EyeOff },
  ],
  "Weather": [
    { name: "Sun", component: Sun },
    { name: "Moon", component: Moon },
    { name: "Cloud", component: Cloud },
    { name: "CloudRain", component: CloudRain },
    { name: "Thermometer", component: Thermometer },
    { name: "Wind", component: Wind },
  ],
  "Technology": [
    { name: "Wifi", component: Wifi },
    { name: "Battery", component: Battery },
    { name: "Signal", component: Signal },
    { name: "Bluetooth", component: Bluetooth },
    { name: "Zap", component: Zap },
    { name: "Code", component: Code },
    { name: "Terminal", component: Terminal },
    { name: "Database", component: Database },
    { name: "Server", component: Server },
    { name: "Cpu", component: Cpu },
  ],
  "Commerce": [
    { name: "ShoppingCart", component: ShoppingCart },
    { name: "CreditCard", component: CreditCard },
    { name: "DollarSign", component: DollarSign },
    { name: "TrendingUp", component: TrendingUp },
  ],
  "Location": [
    { name: "Globe", component: Globe },
    { name: "MapPin", component: MapPin },
    { name: "Navigation", component: Navigation },
    { name: "Compass", component: Compass },
    { name: "Map", component: Map },
  ],
  "Status": [
    { name: "CheckCircle", component: CheckCircle },
    { name: "XCircle", component: XCircle },
    { name: "AlertCircle", component: AlertCircle },
    { name: "AlertTriangle", component: AlertTriangle },
    { name: "Info", component: Info },
    { name: "HelpCircle", component: HelpCircle },
  ],
  "Miscellaneous": [
    { name: "Calendar", component: Calendar },
    { name: "Clock", component: Clock },
    { name: "Settings", component: Settings },
    { name: "Truck", component: Truck },
    { name: "Coffee", component: Coffee },
    { name: "Gamepad2", component: Gamepad2 },
    { name: "Gift", component: Gift },
    { name: "Award", component: Award },
    { name: "Trophy", component: Trophy },
    { name: "Target", component: Target },
    { name: "Flag", component: Flag },
  ]
}

// Icon Search Component
function IconSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <Input
        placeholder="Search icons..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />
      <Badge variant="secondary">
        {Object.values(iconCategories).flat().length} icons
      </Badge>
    </div>
  )
}

// Icon Grid Component
function IconGrid({ filteredCategories, copyToClipboard }) {
  return (
    <div className="space-y-8">
      {filteredCategories.map(({ category, icons }) => (
        <div key={category} className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">{category}</h3>
            <p className="text-sm text-muted-foreground">{icons.length} icons</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {icons.map(({ name, component: IconComponent }) => (
              <Card 
                key={name}
                className="p-4 hover:bg-accent cursor-pointer transition-colors group"
                onClick={() => copyToClipboard(name)}
              >
                <div className="flex flex-col items-center space-y-2">
                  <IconComponent className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-center font-medium truncate w-full">
                    {name}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function LucideIconsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const copyToClipboard = (iconName) => {
    const importCode = `import { ${iconName} } from "lucide-react"`
    const usageCode = `<${iconName} className="h-4 w-4" />`
    const fullCode = `${importCode}\n\n${usageCode}`
    
    navigator.clipboard.writeText(fullCode)
    toast.success(`${iconName} code copied to clipboard!`)
  }

  const filteredCategories = Object.entries(iconCategories).map(([category, icons]) => ({
    category,
    icons: icons.filter(icon => 
      icon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(({ icons }) => icons.length > 0)

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 lg:px-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">Lucide Icons</h1>
          <p className="text-lg text-muted-foreground">
            Beautiful & consistent icon toolkit made by the community. Click any icon to copy its code.
          </p>
        </div>
      </div>

      <div className="px-4 lg:px-6">
        <Tabs defaultValue="icons" className="w-full">
          <TabsList>
            <TabsTrigger value="icons">Icons</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
          </TabsList>
          
          <TabsContent value="icons" className="space-y-6">
            <IconSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            
            <Card>
              <CardHeader>
                <CardTitle>Installation</CardTitle>
                <CardDescription>
                  Install Lucide React to use these icons in your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md bg-muted p-4">
                  <code className="text-sm">npm install lucide-react</code>
                </div>
              </CardContent>
            </Card>

            <IconGrid filteredCategories={filteredCategories} copyToClipboard={copyToClipboard} />
          </TabsContent>
          
          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Usage</CardTitle>
                <CardDescription>
                  Import and use Lucide icons in your React components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`import { Heart, Star, User } from "lucide-react"

function MyComponent() {
  return (
    <div>
      <Heart className="h-4 w-4 text-red-500" />
      <Star className="h-6 w-6 text-yellow-500" />
      <User className="h-8 w-8 text-blue-500" />
    </div>
  )
}`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>With Props</CardTitle>
                <CardDescription>
                  Icons accept standard SVG props for customization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
{`<Heart 
  className="h-4 w-4" 
  color="red" 
  fill="red" 
  size={24}
  strokeWidth={1.5}
/>`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Sizes</CardTitle>
                <CardDescription>
                  Standard icon sizes using Tailwind CSS classes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-8 p-4 rounded-md bg-muted">
                  <div className="flex flex-col items-center space-y-2">
                    <Heart className="h-3 w-3" />
                    <code className="text-xs">h-3 w-3</code>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Heart className="h-4 w-4" />
                    <code className="text-xs">h-4 w-4</code>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Heart className="h-6 w-6" />
                    <code className="text-xs">h-6 w-6</code>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Heart className="h-8 w-8" />
                    <code className="text-xs">h-8 w-8</code>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interactive Example</CardTitle>
                <CardDescription>
                  Try different icon configurations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 p-4 rounded-md bg-muted">
                  <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                  <Heart className="h-6 w-6 text-red-500 hover:fill-red-500 transition-colors cursor-pointer" />
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <AlertTriangle className="h-6 w-6 text-orange-500" />
                  <XCircle className="h-6 w-6 text-red-500" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
