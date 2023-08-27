"use client"

import React, { useEffect, useState } from "react"
import { useAuth } from "@/store/auth.store"

import { getServerAuthSession } from "@/lib/auth"
import { octokit } from "@/lib/octokit"

const Dashboard = () => {
  const [repos, setRepos] = useState([])
  const user = useAuth((store) => store.user)
  const session = getServerAuthSession()
  console.log("session:::", session)

  const fetchUserRepo = async () => {
    const repos = await octokit.rest.repos.listForAuthenticatedUser()
  }

  useEffect(() => {
    if (session.body) fetchUserRepo()
  }, [])

  return (
    <div className="max-w-5xl">
      {JSON.stringify(user)}
      <div>AUTH user REPOS</div>
      <div className="p-10">
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <div>{}</div>
      </div>
    </div>
  )
}

export default Dashboard
