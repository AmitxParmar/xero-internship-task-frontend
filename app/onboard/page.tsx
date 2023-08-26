"use client"

import React, { useState } from "react"
import { useAuth } from "@/store/auth.store"

import SelectHosting from "@/components/SelectHosting"
import SelectUserType from "@/components/SelectUserType"

const Onboarding = () => {
  const { step, setNextStep } = useAuth((store) => store)
  return (
    <div>
      {step === 0 && <SelectUserType />}
      {step === 1 && <SelectHosting />}
    </div>
  )
}

export default Onboarding
