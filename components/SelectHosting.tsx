"use client"

import { useState } from "react"
import { hostings } from "@/helpers/constants"
import { useAuth } from "@/store/auth.store"
import axios from "axios"

import { UPDATE_USER } from "@/config/ApiRoutes"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Button } from "./ui/button"

const SelectHosting = () => {
  const { setNextStep, loginSuccess, user } = useAuth((store) => store)
  const [hosting, setHosting] = useState("")

  const handleSubmit = async () => {
    try {
      if (user?._id) {
        const { data } = await axios.put(`${UPDATE_USER}/${user._id}`, {
          hostingType: hosting,
        })
        if (data?.success) {
          loginSuccess(data.userInfo)
          setNextStep()
        }
      }
    } catch (error) {
      console.log("Error:Selecting Host", error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <Tabs
        defaultValue="self"
        className="mx-auto flex flex-col items-center justify-center"
      >
        <TabsList className="mx-auto flex h-full grid-cols-3 items-center justify-between gap-12 bg-transparent">
          {hostings.map(({ title }, index) => (
            <TabsTrigger
              key={index}
              onClick={() => setHosting(title)}
              value={title}
              className="h-[59px] w-[266px] border border-borderSubtle capitalize"
            >
              <p>{title + " hosting"}</p>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <Button className="mx-auto" onClick={() => handleSubmit()}>
        Submit
      </Button>
    </div>
  )
}

export default SelectHosting
