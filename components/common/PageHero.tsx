"use client"

import React from "react"
import Image from "next/image"

type Props = {
  title: string
  desc: string
}

const PageHero = ({ title, desc }: Props) => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <div className="mb-5 flex items-center justify-center">
        <Image
          src={"/svg/xero-code.svg"}
          width={160}
          height={47}
          alt="xerocodee logo"
          className=""
        />
      </div>
      <div className="relative mb-5 flex flex-col p-1 text-center">
        <h1 className="mb-3 text-[32px] font-bold capitalize">
          {title && <span>{title}</span>}
        </h1>
        <h4 className="justify-baseline flex flex-row items-center whitespace-nowrap text-sm font-bold leading-none text-gray-400">
          <svg
            width="150"
            height="1"
            viewBox="0 0 150 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-4 align-baseline"
          >
            <line
              y1="0.5"
              x2="150"
              y2="0.5"
              stroke="#AAB2C8"
              strokeOpacity="0.45"
            />
            <line
              y1="0.5"
              x2="150"
              y2="0.5"
              stroke="#AAB2C8"
              strokeOpacity="0.45"
            />
            <line
              y1="0.5"
              x2="150"
              y2="0.5"
              stroke="#AAB2C8"
              strokeOpacity="0.45"
            />
            <line
              y1="0.5"
              x2="150"
              y2="0.5"
              stroke="#AAB2C8"
              strokeOpacity="0.45"
            />
          </svg>
          {desc && <span>{desc}</span>}
          <svg
            width="150"
            height="1"
            viewBox="0 0 150 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-4 align-baseline"
          >
            <line
              y1="0.5"
              x2="150"
              y2="0.5"
              stroke="#AAB2C8"
              strokeOpacity="0.45"
            />
            <line
              y1="0.5"
              x2="150"
              y2="0.5"
              stroke="#AAB2C8"
              strokeOpacity="0.45"
            />
            <line
              y1="0.5"
              x2="150"
              y2="0.5"
              stroke="#AAB2C8"
              strokeOpacity="0.45"
            />
            <line
              y1="0.5"
              x2="150"
              y2="0.5"
              stroke="#AAB2C8"
              strokeOpacity="0.45"
            />
          </svg>
        </h4>
      </div>
    </div>
  )
}

export default PageHero
