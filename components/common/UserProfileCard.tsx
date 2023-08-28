import Image from "next/image"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import SignOut from "./SignOut"

type CardProps = React.ComponentProps<typeof Card>

type UserProfile = {
  user: {
    name?: string | undefined | null
    email?: string | undefined | null
    image?: string | undefined | null
    id: string | undefined | null
  }
}
export default function UserProfileCard({
  className,
  user,
  ...props
}: CardProps & UserProfile) {
  const { email, name, image } = user
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border p-4">
          <div className="flex flex-1 flex-row items-center justify-between space-x-4 space-y-1">
            <div className="">
              <Image
                className="rounded-full"
                priority
                src={image as string}
                width={70}
                height={70}
                alt={`${name}'s profile pic`}
              />
            </div>
            <div className="">
              <p className="text-sm font-medium capitalize leading-none">
                {name}
              </p>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
            <div>
              <SignOut />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
