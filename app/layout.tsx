"use client"

import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import LoginSignUpVector from "@/components/common/LoginSignUpVector"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative mx-auto flex min-h-screen max-w-screen-xl flex-col">
              {/* <SiteHeader /> */}
              <div className="flex-1">
                <div className="min-w-screen flex h-screen max-h-[800px] w-screen max-w-screen-xl overflow-y-hidden">
                  <div className="px-12 pt-8 md:w-6/12">{children}</div>
                  <Separator
                    orientation="vertical"
                    className="mx-12 my-auto h-4/5"
                  />
                  <LoginSignUpVector />
                </div>
              </div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
