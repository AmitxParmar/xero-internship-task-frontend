import React from "react"
import Image from "next/image"

const LoginSignUpVector = () => {
  return (
    <div
      className="flex w-6/12 flex-col-reverse overflow-hidden !bg-contain !bg-center !bg-no-repeat"
      style={{
        backgroundImage: "url('/sign-up-vector.png')",
      }}
    >
      <Image
        src={"/sign-up-vector-bottom.png"}
        height={144}
        width={538}
        alt="vector"
      />
    </div>
  )
}

export default LoginSignUpVector
