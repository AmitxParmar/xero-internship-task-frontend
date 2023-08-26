"use client"

import { useState, type ChangeEvent, type FC } from "react"
import { useAuth } from "@/store/auth.store"
import axios from "axios"

import { UPDATE_USER } from "@/config/ApiRoutes"

import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface IUserType {
  userType: string
}

const UserType: FC<IUserType> = ({ userType }) => {
  const userId = useAuth((store) => store.user?._id)
  const [fieldsToUpdate, setFieldsToUpdate] = useState<
    Partial<{
      company: string | null
      organization: string | null
    }>
  >({})
  const handleSubmit = () => {
    axios.put(`${UPDATE_USER}/${userId}`, {
      userType: "",
    })
  }

  return (
    <div className="flex flex-row">
      <Input
        placeholder={`${userType} Name`}
        name={userType.toLowerCase()}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFieldsToUpdate((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <span>
        <Button placeholder="SUBMIT" />
      </span>
    </div>
  )
}

export default UserType
