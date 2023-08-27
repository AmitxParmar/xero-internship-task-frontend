"use client"

import { useState } from "react"
import { redirect } from "next/navigation"
import { IPlatforms } from "@/helpers/constants"
import { useAuth } from "@/store/auth.store"
import axios from "axios"

import { UPDATE_USER } from "@/config/ApiRoutes"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Button } from "./ui/button"

const SelectHostingPlatform = ({ platforms }: { platforms: IPlatforms }) => {
  const { setNextStep, loginSuccess, user } = useAuth((store) => store)
  const [platform, setPlatform] = useState("")

  const handleSubmit = async () => {
    try {
      if (platform === "Github") {
        if (user?._id) {
          const { data } = await axios.put(`${UPDATE_USER}/${user._id}`, {
            platform,
          })
          if (data?.success) {
            loginSuccess(data.userInfo)
            redirect("https://github.com/apps/xerocode-inter-task")
            /* setNextStep() */
          }
        }
      }
    } catch (error) {
      console.log("Error:Selecting Host", error)
    }
  }
  const handleValueChange = (p: string) => setPlatform(p)

  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-16">
      <Tabs
        onValueChange={handleValueChange}
        defaultValue="Github"
        className="mx-auto flex flex-col items-center justify-center"
      >
        <TabsList className="mx-auto grid h-full grid-cols-2 grid-rows-none justify-between gap-12 bg-transparent">
          {platforms.map(({ title }, index) => (
            <TabsTrigger
              key={index}
              value={title}
              className="h-[59px] w-[266px] border border-borderSubtle font-semibold capitalize"
            >
              {title}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <Button className="font-bold" onClick={() => handleSubmit()}>
        Submit
      </Button>
    </div>
  )
}

export default SelectHostingPlatform
