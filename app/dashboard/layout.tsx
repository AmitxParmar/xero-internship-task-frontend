"use client"

import { ReactNode } from "react"

import { getServerAuthSession } from "@/lib/auth"
import PageHero from "@/components/common/PageHero"

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerAuthSession()
  return (
    <div className="flex min-h-screen w-screen flex-col  items-center bg-primary/40">
      {/* {session?.user?.name ? (
        <PageHero
          title={`Welcome ${session?.user.name}`}
          desc="Choose From The Following"
        />
      ) : (
        "loading....."
      )} */}
      {children}
    </div>
  )
}
export default RootLayout
