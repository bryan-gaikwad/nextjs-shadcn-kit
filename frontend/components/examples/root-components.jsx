"use client"

import { FieldSeparator } from "@/components/ui/field"

import { AppearanceSettings } from "./appearance-settings"
import { ButtonGroupDemo } from "./button-group-demo"
import { ButtonGroupInputGroup } from "./button-group-input-group"
import { ButtonGroupNested } from "./button-group-nested"
import { ButtonGroupPopover } from "./button-group-popover"
import { EmptyAvatarGroup } from "./empty-avatar-group"
import { FieldCheckbox } from "./field-checkbox"
import { FieldDemo } from "./field-demo"
import { FieldHear } from "./field-hear"
import { FieldSlider } from "./field-slider"
import { InputGroupButtonExample } from "./input-group-button-example"
import { InputGroupDemo } from "./input-group-demo"
import { ItemDemo } from "./item-demo"
import { NotionPromptForm } from "./notion-prompt-form"
import { SpinnerBadge } from "./spinner-badge"
import { SpinnerEmpty } from "./spinner-empty"

export function RootComponents() {
  return (
    <div className="w-full max-w-none overflow-hidden">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* First Column - Field Demo */}
        <div className="flex flex-col gap-6 min-w-0">
          <div className="w-full min-w-0 overflow-hidden">
            <FieldDemo />
          </div>
        </div>

        {/* Second Column - Smaller Widgets */}
        <div className="flex flex-col gap-6 min-w-0">
          <div className="w-full min-w-0 overflow-hidden">
            <EmptyAvatarGroup />
          </div>
          <div className="w-full min-w-0 overflow-hidden">
            <SpinnerBadge />
          </div>
          <div className="w-full min-w-0 overflow-hidden">
            <ButtonGroupInputGroup />
          </div>
          <div className="w-full min-w-0 overflow-hidden">
            <FieldSlider />
          </div>
          <div className="w-full min-w-0 overflow-hidden">
            <InputGroupDemo />
          </div>
        </div>

        {/* Third Column - Medium Widgets */}
        <div className="flex flex-col gap-6 min-w-0">
          <div className="w-full min-w-0 overflow-hidden">
            <InputGroupButtonExample />
          </div>
          <div className="w-full min-w-0 overflow-hidden">
            <ItemDemo />
          </div>
          <FieldSeparator className="my-4">Appearance Settings</FieldSeparator>
          <div className="w-full min-w-0 overflow-hidden">
            <AppearanceSettings />
          </div>
        </div>

        {/* Fourth Column - Complex Widgets */}
        <div className="flex flex-col gap-6 min-w-0">
          <div className="w-full min-w-0 overflow-hidden">
            <NotionPromptForm />
          </div>
          <div className="w-full min-w-0 overflow-hidden">
            <ButtonGroupDemo />
          </div>
          <div className="w-full min-w-0 overflow-hidden">
            <FieldCheckbox />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full min-w-0">
            <div className="flex-1 min-w-0 overflow-hidden">
              <ButtonGroupNested />
            </div>
            <div className="flex-1 min-w-0 overflow-hidden">
              <ButtonGroupPopover />
            </div>
          </div>
          <div className="w-full min-w-0 overflow-hidden">
            <FieldHear />
          </div>
          <div className="w-full min-w-0 overflow-hidden">
            <SpinnerEmpty />
          </div>
        </div>
      </div>
    </div>
  )
}
