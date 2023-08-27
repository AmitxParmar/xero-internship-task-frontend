"use client"

import React, { ChangeEvent, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/store/auth.store"
import axios from "axios"


import { SIGN_IN } from "@/config/ApiRoutes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import PageHero from "@/components/common/PageHero"
import SSOButtons from "@/components/common/SSOButtons"

const Login = () => {
  const router = useRouter()
  const { loginFailure, loginStart, loginSuccess, loading, setLoading, error } =
    useAuth((store) => store)
  const [credentials, setCredentials] = useState<{
    email: string
    password: string
  }>({
    email: "",
    password: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const { email, password } = credentials
  const isValid = email === "" || password === ""

  const submitData = async () => {
    if (isValid) return
    try {
      loginStart()
      const { data } = await axios.post(SIGN_IN, {
        ...credentials,
      })
      console.log(data)
      if (data.success) {
        console.log(data.userInfo, "userInfo storing in state")
        loginSuccess(data?.userInfo?._doc)
        router.push("/dashboard")
      } else {
        loginFailure(data.message)
      }
    } catch (error) {
      loginFailure(error)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-between">
      <PageHero title="Welcome!" desc="Login To Your Account" />
      <div
        className="max-h-[500px] min-h-full w-full max-w-xl "
        style={{ color: "#141820" }}
      >
        <form className={cn("block w-full")}>
          {/* ********* Name Email Password************* */}
          <div className="grid auto-cols-auto gap-5">
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
                className="focus:border-focus-cyan  w-full rounded-md border p-2.5 text-sm outline-none transition-all duration-300 ease-in focus:border-2 focus:ring-0"
              />
            </div>
            {error && (
              <p className="py-1 text-sm font-medium text-red-600">{error}</p>
            )}
          </div>
          <Button
            onClick={submitData}
            type="button"
            className="disabled:bg-signup-blue/50 mx-auto mb-12 mt-6 flex  w-full items-center justify-center rounded-md bg-primary px-3 py-2.5 text-sm font-bold text-white hover:bg-primary/80 disabled:cursor-not-allowed"
            style={{ lineHeight: "1.375rem" }}
          >
            {loading ? (
              <div
                className="border-focus-cyan mr-2 h-4 w-4 animate-spin rounded-full border-2 "
                style={{ borderRightColor: "transparent" }}
              />
            ) : (
              "LOGIN"
            )}
          </Button>
        </form>

        <div style={{ margin: "0 10%" }}>
          <h5 className="mb-5 text-center font-extrabold text-subtle/50">OR</h5>
          {/* Single Tap Login Buttons */}
          <SSOButtons />

          <p className="mt-5 text-center text-sm text-subtle/50">
            Don’t have an Account ?{" "}
            <span>
              <Link
                href="/sign-up"
                className="cursor-pointer font-semibold text-primary"
              >
                SIGN UP
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
