# App Configuration Guide

## Overview

The Skeletor dashboard now uses a centralized configuration system to manage app settings, branding, navigation preferences, and layout options. This ensures consistency across all components and allows developers to easily customize the application.

## Configuration File

The main configuration is located at `/config/app.js` and exports an `appConfig` object with the following sections:

### App Identity
- `name`: Main application name
- `shortName`: Short version of the app name
- `description`: App description
- `version`: Current version

### Company/Organization
- `company.name`: Organization name (used in sidebars)
- `company.shortName`: Organization short name/initials
- `company.description`: Organization description (e.g., "Enterprise")

### Navigation Configuration
- `navigation.defaultMode`: Default navigation layout ('sidebar' | 'topnav')
- `navigation.allowModeToggle`: Allow users to switch navigation modes
- `navigation.rememberPreference`: Save user's navigation preference
- `navigation.showToggleButton`: Show navigation toggle button in UI

### Key Features

1. **Consistent Branding**: App name and company information are centralized and used consistently across:
   - Sidebar headers
   - Top navigation
   - Dashboard pages
   - Documentation examples

2. **Navigation Mode Management**: 
   - Developers can set the default navigation mode
   - Users can toggle between sidebar and top navigation (if enabled)
   - User preferences are saved in localStorage
   - Navigation toggle buttons respect configuration settings

3. **Developer Control**: 
   - All navigation behavior is configurable
   - Easy to disable user toggles for locked navigation modes
   - Consistent theming and layout options

## Usage Examples

### Import Configuration
```javascript
import { appName, company, navConfig } from '@/config/app'
```

### Using in Components
```javascript
// Display app name
<span>{appName}</span>

// Display company name
<span>{company.name}</span>

// Check if navigation toggle is allowed
{navConfig.showToggleButton && <ToggleButton />}
```

### Navigation Context
The navigation context automatically uses the app configuration:
- Loads default mode from config
- Respects toggle permissions
- Saves user preferences when enabled

## Migration Notes

All hardcoded references to "Acme Inc" and "Skeletor" have been replaced with configuration values, ensuring consistency and making the application easy to rebrand.

## Files Updated

1. `/config/app.js` - New configuration file
2. `/context/navigation-context.js` - Enhanced with config integration
3. `/components/layout/app-sidebar.jsx` - Uses company config
4. `/components/navigation/top-navigation.jsx` - Uses app name config
5. `/components/layout/site-header.jsx` - Respects navigation config
6. Dashboard pages and documentation examples - Use consistent branding

This configuration system makes the Skeletor dashboard more maintainable and easier to customize for different projects and organizations.
