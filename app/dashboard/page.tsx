"use client"

import React from "react"
import { useAuth } from "@/store/auth.store"

type Props = {}

const Dashboard = (props: Props) => {
  const user = useAuth((store) => store.user)
  return <div>{JSON.stringify(user)}</div>
}

export default Dashboard
