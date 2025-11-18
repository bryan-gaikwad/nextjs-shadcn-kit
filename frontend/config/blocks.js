// Configuration for components navigation
import { componentsNavigation, widgetsNavigation } from "./navigation"

export const componentsConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Blocks", 
      href: "/blocks",
    }
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/blocks",
          items: [],
        }
      ],
    },
    {
      title: "Components",
      items: componentsNavigation.map(component => ({
        title: component.title,
        href: component.url,
        items: [],
      })),
    },
    {
      title: "Widgets",
      items: [
        {
          title: "Widget Showcase",
          href: "/dashboard/widgets",
          items: [],
        }
      ],
    },
  ],
}
