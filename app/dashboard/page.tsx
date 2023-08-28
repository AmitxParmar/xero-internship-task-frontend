import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types"

import { getServerAuthSession } from "@/lib/auth"
import { octokit } from "@/lib/octokit"
import Repositories from "@/components/common/Repositories"
import UserProfileCard from "@/components/common/UserProfileCard"

export type IRepositories = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.repos.listForAuthenticatedUser
>

const Dashboard = async () => {
  const session = await getServerAuthSession()
  console.log("session:::+1", session?.user)

  const repos = async () => {
    try {
      const repos = await octokit.rest.repos.listForAuthenticatedUser()
      return repos
    } catch (error) {
      return null
    }
  }
  const fetchedRepos = await repos()

  return (
    <div className="max-w-5xl">
      {session ? (
        <div className="p-10">
          <div>{session.user && <UserProfileCard user={session.user} />}</div>
          <div>
            {fetchedRepos?.status === 200 && (
              <Repositories repositories={fetchedRepos.data} />
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Dashboard
