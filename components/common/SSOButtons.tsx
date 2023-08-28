import React from "react"
import Image from "next/image"
import { signIn } from "next-auth/react"

import { Button } from "../ui/button"

type Props = {}

const SSOButtons = (props: Props) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Button
        variant={"outline"}
        className="relative px-2 text-subtle/50"
        onClick={() => void signIn("google")}
      >
        Sign in with Google
        <Image
          src={"/svg/google.svg"}
          alt="google icon"
          width={32}
          height={32}
          className="p-1"
        />
      </Button>
      <Button
        variant={"outline"}
        className="relative px-2 text-subtle/50"
        onClick={() =>
          signIn("github").then((d) =>
            console.log("used then in singIN button", d)
          )
        }
      >
        Sign in with Github
        <Image
          src={"/svg/github.svg"}
          alt="google icon"
          width={32}
          height={32}
          className="p-1"
        />
      </Button>
    </div>
  )
}

export default SSOButtons
