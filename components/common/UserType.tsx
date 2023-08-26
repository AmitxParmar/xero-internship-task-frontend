"use client"

import { useState, type ChangeEvent, type FC } from "react"
import { useAuth } from "@/store/auth.store"
import axios from "axios"

import { IUser } from "@/types/global"
import { UPDATE_USER } from "@/config/ApiRoutes"

import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface IUserType {
  userType: "company" | "organization"
}

const UserType: FC<IUserType> = ({ userType }) => {
  const {
    user,
    loading,
    setNextStep,
    setLoading,
    loginSuccess,
    error,
    setError,
  } = useAuth((store) => store)
  const [fieldsToUpdate, setFieldsToUpdate] = useState<
    Partial<{
      company: string | null
      organization: string | null
    }>
  >({})
  const isValid = fieldsToUpdate[userType] === ""
  console.log(isValid)

  const handleSubmit = async () => {
    if (isValid) throw new Error("enter a value")
    try {
      const { data } = await axios.put<{
        message: string
        success: boolean
        _doc: IUser
      }>(`${UPDATE_USER}/${user?._id}`, {
        userType,
        ...fieldsToUpdate,
      })
      if (data.success) {
        console.log("updated fielsd", data._doc)
        loginSuccess(data._doc)
        setNextStep()
      }
    } catch (error) {
      setError(JSON.stringify(error))
      setLoading(false)
    }
  }

  return (
    <div className="flex w-[550px] flex-row gap-5">
      <Input
        placeholder={`${userType} Name`}
        name={userType.toLowerCase()}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFieldsToUpdate((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
        className="placeholder:capitalize"
      />
      <span className="block">
        <Button
          disabled={isValid}
          placeholder="SUBMIT"
          onClick={() => handleSubmit()}
        >
          {loading ? (
            <div
              className="border-focus-cyan mr-2 h-4 w-4 animate-spin rounded-full border-2 "
              style={{ borderRightColor: "transparent" }}
            />
          ) : (
            "SUBMIT"
          )}
        </Button>
      </span>
      {error && <p>{error}</p>}
    </div>
  )
}

export default UserType
