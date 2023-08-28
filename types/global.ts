

export interface IUser {
  _id: string
  email: string
  password: string
  firstname: string
  lastname: string
  userType?: string
  company?: string
  organization?: string
}

export enum UserTypes {
  Developer = "developer",
  Organization = "organization",
  Company = "company",
}

export type GitHubRepository = {
  repositories: {
    id: number
    node_id: string
    name: string
    full_name: string
    private: boolean
    owner: {
      login: string
      id: number
      node_id: string
      avatar_url: string
      gravatar_id: string
      url: string
      html_url: string
      followers_url: string
      following_url: string
      gists_url: string
      starred_url: string
      subscriptions_url: string
      organizations_url: string
      repos_url: string
      events_url: string
      received_events_url: string
      type: string
      site_admin: boolean
    }
  }
}