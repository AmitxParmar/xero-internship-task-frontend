"use client"

import { Separator } from "@/components/ui/separator"
import LoginSignUpVector from "@/components/common/LoginSignUpVector"
import { ThemeToggle } from "@/components/theme-toggle"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-w-screen flex h-screen max-h-[800px] w-screen max-w-screen-xl overflow-y-hidden">
      <ThemeToggle />
      <div className="max-h-[800px] overflow-y-auto px-12 pb-28 pt-8 scrollbar-thin md:w-6/12">
        {children}
      </div>
      <Separator orientation="vertical" className="mx-12 my-auto h-4/5" />
      <LoginSignUpVector />
    </div>
  )
}
