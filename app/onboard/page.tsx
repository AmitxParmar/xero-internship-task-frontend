"use client"

import { hostings, platforms, userTypes } from "@/helpers/constants"
import { useAuth } from "@/store/auth.store"

import SelectHosting from "@/components/SelectHosting"
import SelectHostingPlatform from "@/components/SelectHostingPlatform"
import SelectUserType from "@/components/SelectUserType"

const Onboarding = () => {
  const { step } = useAuth((store) => store)
  return (
    <div>
      {step === 0 && <SelectUserType userTypes={userTypes} />}
      {step === 1 && <SelectHosting hostings={hostings} />}
      {step === 2 && <SelectHostingPlatform platforms={platforms} />}
    </div>
  )
}

export default Onboarding
