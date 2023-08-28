"use client"

import { ReactNode } from "react"

import { getServerAuthSession } from "@/lib/auth"
import PageHero from "@/components/common/PageHero"

const RootLayout = ({ children }: { children: ReactNode }) => {
  const session = getServerAuthSession()
  return (
    <div className="flex min-h-screen w-screen flex-col  items-center bg-primary/40">
      {!!session ? (
        <PageHero
          title={`Welcome ${session}`}
          desc="Choose From The Following"
        />
      ) : (
        "loading....."
      )}
      {children}
    </div>
  )
}
export default RootLayout
