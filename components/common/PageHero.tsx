import React from "react"
import Image from "next/image"

type Props = {
  title: string
  desc: string
}

const PageHero = ({ title, desc }: Props) => {
  return (
    <div>
      <div className=" mb-5 flex items-center justify-center">
        <Image
          src={"/svg/xero-code.svg"}
          width={160}
          height={47}
          alt="xerocodee logo"
          className=""
        />
      </div>
      <div className="relative mb-5 p-1 text-center">
        <h1 className="text-[32px] font-bold">{title}</h1>
        <h4 className="text-sm font-bold text-gray-400">
          ___________ {desc}
          ___________
        </h4>
      </div>
    </div>
  )
}

export default PageHero
