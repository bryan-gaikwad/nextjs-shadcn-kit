import { DynamicLayout } from "@/components/layout/dynamic-layout"

export default function ComponentsLayout({ children }) {
  return (
    <DynamicLayout>
      {children}
    </DynamicLayout>
  )
}
