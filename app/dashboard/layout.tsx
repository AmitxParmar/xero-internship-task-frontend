"use client"

import { ReactNode } from "react"
import { useAuth } from "@/store/auth.store"

import PageHero from "@/components/common/PageHero"

const RootLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth((store) => store)
  return (
    <div className="flex min-h-screen w-screen flex-col  items-center bg-[#ccc]">
      {user ? (
        <PageHero
          title={`Welcome ${user.firstname} ${user.lastname}!`}
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
