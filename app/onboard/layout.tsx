"use client"

import { ReactNode } from "react"
import { useAuth } from "@/store/auth.store"

import PageHero from "@/components/common/PageHero"

export default function RootLayout({ children }: { children: ReactNode }) {
  const user = useAuth((store) => store.user)
  return (
    <div className="min-w-screen flex h-screen max-h-[800px] w-screen max-w-screen-xl overflow-y-hidden pt-12">
      <div className="mx-auto flex max-w-screen-xl flex-col justify-start gap-12">
        <PageHero
          title={`Welcome ${user?.firstname} ${user?.lastname}!`}
          desc="Choose From The Following"
        />
        {children}
      </div>
    </div>
  )
}
