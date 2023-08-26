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

export const userTypes = [
  {
    title: UserTypes.Developer,
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
