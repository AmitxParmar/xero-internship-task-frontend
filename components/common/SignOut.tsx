"use client"

import React from "react"
import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/button"

type Props = {}

const SignOut = (props: Props) => {
  return (
    <div>
      <Button className="flex-1 shrink-0" onClick={() => signIn()} {...props}>
        Sign out
      </Button>
    </div>
  )
}

export default SignOut
