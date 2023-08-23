"use client"

import React, { useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import PageHero from "@/components/common/PageHero"
import SSOButtons from "@/components/common/SSOButtons"

const SignIn = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleChange = () => {}

  const submitData = () => {}

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
                name="firstName"
                onChange={handleChange}
                value={name}
                placeholder="First Name"
                type="text"
                {...{ minLength: 5, maxLength: 40 }}
              />
            </div>
            <div className="relative flex flex-col">
              <Input
                name="lastName"
                onChange={handleChange}
                value={name}
                placeholder="Enter Your Full Name"
                type="text"
                {...{ minLength: 5, maxLength: 40 }}
              />
            </div>

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
            <div className="relative">
              <Input
                placeholder="Confirm Password"
                name="password"
                type="password"
                style={{ lineHeight: 1.15 }}
                onChange={handleChange}
                value={password}
                className="focus:border-focus-cyan mb-2.5 w-full rounded-md border p-2.5 text-sm outline-none transition-all duration-300 ease-in focus:border-2 focus:ring-0"
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

          <p
            className="mt-5 text-center"
            style={{ fontSize: "15px", color: "#788699" }}
          >
            Already have an Account?{" "}
            <Link
              href="/"
              className="cursor-pointer font-semibold text-primary"
            >
              LOG IN
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignIn
