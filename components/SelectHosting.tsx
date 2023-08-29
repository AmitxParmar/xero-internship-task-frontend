"use client"

import { useState } from "react"
import { IHostings } from "@/helpers/constants"
import { useAuth } from "@/store/auth.store"
import axios from "axios"

import { UPDATE_USER } from "@/config/ApiRoutes"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Button } from "./ui/button"

const SelectHosting = ({ hostings }: { hostings: IHostings }) => {
  const { setNextStep, loginSuccess, user } = useAuth((store) => store)
  const [hosting, setHosting] = useState("self")

  const handleSubmit = async () => {
    console.log("into hosting type selection, return if empty string")
    console.log("hosting type", hosting)
    console.log("id thereis any user Id", user?._id)
    try {
      if (user?._id) {
        console.log("userid inhostingtype", user._id)
        const { data } = await axios.put(`${UPDATE_USER}/${user._id}`, {
          hostingType: hosting,
        })
        if (data?.success) {
          console.log("SelectedHostingType:", hosting, data.success)
          loginSuccess(data.userInfo)
          console.log("userInfo", data.userInfo)
          setNextStep()
          console.log("go next step")
        }
      }
    } catch (error) {
      console.log("Error:Selecting Host", error)
    }
  }

  const handleValueChange = (p: string) => setHosting(p)
  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <Tabs
        onValueChange={handleValueChange}
        defaultValue="self"
        className="mx-auto flex flex-col items-center justify-center"
      >
        <TabsList className="mx-auto flex h-full grid-cols-3 items-center justify-between gap-12 bg-transparent">
          {hostings.map(({ title }, index) => (
            <TabsTrigger
              key={index}
              onClick={() => setHosting(title)}
              value={title}
              className="h-[59px] w-[266px] border border-borderSubtle font-semibold capitalize"
            >
              <p>{title + " hosting"}</p>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <Button className="mx-auto font-semibold" onClick={() => handleSubmit()}>
        Submit
      </Button>
    </div>
  )
}

export default SelectHosting
