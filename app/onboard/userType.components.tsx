import { UserTypes } from "@/types/global"
import UserType from "@/components/common/UserType"

const userType = [
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

export default userType
