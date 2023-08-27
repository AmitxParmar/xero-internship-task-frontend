"use client"

import { userTypes } from "@/helpers/constants"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const SelectUserType = () => {
  return (
    <Tabs defaultValue="developer" className="flex flex-col">
      <TabsList className="mx-auto grid h-full grid-cols-3 grid-rows-none justify-between gap-12 bg-transparent">
        {userTypes.map(({ title }, index) => (
          <TabsTrigger
            key={index}
            value={title}
            className="h-[59px] w-[266px] border border-borderSubtle capitalize"
          >
            {title}
          </TabsTrigger>
        ))}
      </TabsList>

      {userTypes.map(({ title, component }, index) => (
        <TabsContent
          key={index}
          value={title}
          className="mx-auto mt-0 flex items-center p-4"
        >
          {component}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default SelectUserType
