import { z } from "zod"

import { UserTypes } from "@/types/global"
import UserType from "@/components/common/UserType"

export const hostings = [
  {
    title: "self",
  },
  {
    title: "xerocode",
  },
]
export const platforms = [{ title: "AWS cloud" }, { title: "Github" }] as const
export type IPlatforms = typeof platforms

export const userTypes = [
  {
    title: UserTypes.Developer,
    component: <UserType userType={UserTypes.Developer} />,
  },
  {
    title: UserTypes.Organization,
    component: <UserType userType={UserTypes.Organization} />,
  },
  {
    title: UserTypes.Company,
    component: <UserType userType={UserTypes.Company} />,
  },
]
