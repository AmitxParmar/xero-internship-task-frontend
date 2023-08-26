import { ReactNode } from "react"

import PageHero from "@/components/common/PageHero"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-screen flex h-screen max-h-[800px] w-screen max-w-screen-xl overflow-y-hidden p-28">
      <div className="mx-auto flex max-w-screen-2xl flex-col">
        <PageHero
          title="Welcome Amit Parmar!"
          desc="Choose From The Following"
        />
        {children}
      </div>
    </div>
  )
}
