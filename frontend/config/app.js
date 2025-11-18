// Application configuration for next-shadcn-admin-dashboard
export const appConfig = {
  // App Identity
  name: "Skeletor Dashboard",
  shortName: "Skeletor", 
  description: "Skeletor",
  version: "1.0.0",
  
  // Navigation Configuration
  navigation: {
    // Default navigation mode: 'sidebar' | 'topnav'
    defaultMode: 'sidebar',
    // Allow users to toggle navigation mode via UI
    allowModeToggle: false,
    // Remember user's navigation preference in localStorage
    rememberPreference: false,
    // Show navigation toggle button
    showToggleButton: false,
  },
  
  // Layout Configuration  
  layout: {
    // Sidebar configuration
    sidebar: {
      defaultOpen: true,
      collapsible: true,
      width: "16rem", // 256px
      collapsedWidth: "3rem", // 48px
    },
    
    // Header configuration
    header: {
      height: "3.5rem", // 56px
      sticky: true,
      showLogo: true,
      showSearch: true,
    },
  },
  
  // Theme Configuration
  theme: {
    defaultMode: 'system', // 'light' | 'dark' | 'system'
    defaultTheme: 'supabase', // Currently using 'supabase' theme
    allowModeToggle: true,
    allowThemeChange: false, // Hidden but keep code for future use
    rememberPreference: true,
    // Font Configuration - Note: Next.js font loaders require static literals
    // Update both this config AND layout.js when changing fonts
    fonts: {
      sans: {
        name: "Outfit",
        weights: ["400", "500", "600"],
        variable: "--font-outfit"
      },
      mono: {
        name: "Roboto Mono", 
        weights: ["400", "500", "600"],
        variable: "--font-roboto-mono"
      }
    }
  },
  
  // Feature Flags
  features: {
    search: true,
    notifications: true,
    userMenu: true,
    breadcrumbs: true,
    fullscreenToggle: false,
  },
  
  // Branding
  branding: {
    logo: {
      icon: "Bone", // Lucide icon name
      showIcon: true,
      showText: true,
      url: "/",
    },
    favicon: "/favicon.ico",
    colors: {
      primary: "hsl(var(--primary))",
      secondary: "hsl(var(--secondary))",
    },
  },
  
  // External Links
  links: {
    documentation: "/docs",
    components: "/components", 
    support: "#",
    github: "#",
    website: "#",
  },
  
  // Developer Settings
  development: {
    showConfigInConsole: false,
    enableDebugMode: false,
  }
}

// Export individual configurations for easy access
export const { name: appName, shortName, description, navigation: navConfig, layout, theme, features, branding, links } = appConfig

export default appConfig
