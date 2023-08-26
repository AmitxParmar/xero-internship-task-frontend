"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import userTypes from "./userType.components"

const OnboardUser = () => {
  return (
    <Tabs defaultValue="Developer" className="w-full">
      <TabsList className="mx-auto grid grid-cols-3 grid-rows-none justify-between gap-12 bg-transparent">
        {userTypes.map(({ title }, index) => (
          <TabsTrigger
            key={index}
            value={title}
            className="h-[59px] w-[266px] border border-borderSubtle"
          >
            {title}
          </TabsTrigger>
        ))}
      </TabsList>
      {userTypes.map(({ title, component }, index) => (
        <TabsContent
          key={index}
          aria-disabled={title === "Developer"}
          value={title}
        >
          {component}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default OnboardUser
