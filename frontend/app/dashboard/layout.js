import { DynamicLayout } from "@/components/layout/dynamic-layout"

export default function DashboardLayout({ children }) {
  return (
    <DynamicLayout>
      {children}
    </DynamicLayout>
  )
}
