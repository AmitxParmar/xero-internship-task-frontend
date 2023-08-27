"use client"

import React, { ChangeEvent, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { validateUserCredentials } from "@/helpers"
import { useAuth } from "@/store/auth.store"
import axios from "axios"
import { z } from "zod"

import { IUser } from "@/types/global"
import { SIGN_UP } from "@/config/ApiRoutes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import PageHero from "@/components/common/PageHero"
import SSOButtons from "@/components/common/SSOButtons"

const SignIn = () => {
  const { loading, loginStart, loginFailure, loginSuccess, error, setError } =
    useAuth((store) => store)
  const router = useRouter()
  const [credentials, setCredentials] = useState({
    firstname: undefined,
    lastname: undefined,
    email: undefined,
    password: undefined,
  })
  const [confirmPassword, setConfirmPassword] = useState<string>("")

  const credentialsSchema = z
    .object({
      firstname: z.string().min(3).max(25),
      lastname: z.string().min(3).max(25),
      email: z.string().email({ message: "Invalid email" }).min(4).max(25),
      password: z.string().min(8).max(25),
    })
    .required()

  const isValid = () => {
    try {
      credentialsSchema.parse(credentials)
      return true
    } catch (error) {
      if (error instanceof z.ZodError) setError(error.message)
      return false
    }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    console.log(credentials)
  }

  const submitData = async () => {
    if (!isValid) return
    try {
      loginStart()
      const res = await axios.post<{
        success: boolean
        message: string
        userInfo: IUser
      }>(SIGN_UP, credentials)
      console.log(res?.data)
      if (res.data.success) {
        loginSuccess(res.data.userInfo)
        router.replace("onboard")
      }
    } catch (error) {
      console.log(error)
      loginFailure(error)
    } finally {
      console.log("finally, singup")
    }
  }

  return (
    <>
      <PageHero title="Hello!" desc="Create Your Account" />
      <div
        className="flex w-full max-w-xl flex-col justify-end"
        style={{ color: "#141820" }}
      >
        <form className={cn("block w-full")}>
          {/* ********* Name Email Password************* */}
          <div className="grid auto-cols-auto gap-5">
            <div className="relative flex flex-col">
              <Input
                name="firstname"
                onChange={handleChange}
                value={credentials.firstname}
                placeholder="First Name"
                type="text"
                {...{ minLength: 5, maxLength: 40 }}
              />
            </div>
            <div className="relative flex flex-col">
              <Input
                name="lastname"
                onChange={handleChange}
                value={credentials.lastname}
                placeholder="Last Name"
                type="text"
                {...{ minLength: 5, maxLength: 40 }}
              />
            </div>

            <div className="relative mt-0.5 flex flex-col ">
              <Input
                name="email"
                onChange={handleChange}
                value={credentials.email}
                placeholder="Email-Id"
                type="email"
              />
            </div>
            <div className="relative">
              <Input
                placeholder="Enter Password"
                name="password"
                style={{ lineHeight: 1.15 }}
                onChange={handleChange}
                value={credentials.password}
                type="password"
                className="focus:border-focus-cyan  w-full rounded-md border p-2.5 text-sm outline-none transition-all duration-300 ease-in focus:border-2 focus:ring-0"
              />
            </div>
            <div className="relative">
              <Input
                placeholder="Confirm Password"
                name="password"
                type="password"
                style={{ lineHeight: 1.15 }}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setConfirmPassword(e.target.value)
                }
                value={confirmPassword}
                className="focus:border-focus-cyan mb-2.5 w-full rounded-md border p-2.5 text-sm outline-none transition-all duration-300 ease-in focus:border-2 focus:ring-0"
              />
            </div>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button
            onClick={submitData}
            type="button"
            className="disabled:bg-signup-blue/50 mx-auto mb-12 mt-6 flex  w-full items-center justify-center  rounded-md bg-primary px-3 py-2.5 text-sm font-bold text-white hover:bg-primary/80 disabled:cursor-not-allowed"
            style={{ lineHeight: "1.375rem" }}
          >
            {loading ? (
              <div
                className="border-focus-cyan mr-2 h-4 w-4 animate-spin rounded-full border-2 "
                style={{ borderRightColor: "transparent" }}
              />
            ) : (
              "SIGN UP"
            )}
          </Button>
        </form>

        <div style={{ margin: "0 10%" }}>
          <h5 className="mb-5 text-center font-extrabold text-subtle/50">OR</h5>
          {/* Single Tap Login Buttons */}
          <SSOButtons />

          <p
            className="mt-5 text-center"
            style={{ fontSize: "15px", color: "#788699" }}
          >
            Already have an Account ?{" "}
            <span>
              <Link
                href="/login"
                className="cursor-pointer font-semibold text-primary"
              >
                LOG IN
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignIn
