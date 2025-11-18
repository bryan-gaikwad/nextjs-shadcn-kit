import { Outfit, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context"
import { AuthProvider } from "@/context/auth-context"
import { NavigationProvider } from "@/context/navigation-context"
import { Toaster } from "@/components/ui/sonner"

/**
 * Font Optimization:
 * Only loading fonts needed by the currently selected theme (Supabase).
 * This reduces initial bundle size and improves loading performance.
 * 
 * Previously loaded 12 font families (~500KB+ of font files)
 * Now loading only 2 font families (~80KB of font files)
 * 
 * Theme selector is hidden via allowThemeChange: false in config/app.js
 * but code is preserved for future use.
 */
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shadcn Dashboard",
  description: "A modern admin dashboard built with Next.js and Skeletor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('skeletor-theme-name');
                  const savedMode = localStorage.getItem('skeletor-theme-mode');
                  
                  // Apply dark class if user previously selected dark mode
                  if (savedMode === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  // Ignore errors, will fall back to light theme
                }
              })();
            `
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${robotoMono.variable} antialiased`}
      >
        <ThemeProvider>
          <NavigationProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
            <Toaster />
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
