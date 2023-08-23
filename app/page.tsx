"use client"

import React, { useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import PageHero from "@/components/common/PageHero"
import SSOButtons from "@/components/common/SSOButtons"

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleChange = () => {}

  const submitData = () => {}

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
                value={email}
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
                value={password}
                className="focus:border-focus-cyan  w-full rounded-md border p-2.5 text-sm outline-none transition-all duration-300 ease-in focus:border-2 focus:ring-0"
              />
            </div>
          </div>

          <Button
            onClick={submitData}
            type="button"
            className="disabled:bg-signup-blue/50 mx-auto mb-12 mt-6 flex  w-full items-center justify-center  rounded-md bg-primary px-3 py-2.5 text-sm font-bold text-white hover:bg-primary/80 disabled:cursor-not-allowed"
            style={{ lineHeight: "1.375rem" }}
          >
            {false /* NOTE:Add loading state */ ? (
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
