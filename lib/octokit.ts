import { env } from "@/env.mjs"
import { Octokit } from "@octokit/rest"

export const octokit = new Octokit({
  auth: env.GITHUB_SECRET,

  baseUrl: "https://api.github.com",
  log: {
    debug: () => {},
    info: () => {},
    warn: console.warn,
    error: console.error,
  },
  request: {
    agent: undefined,
    fetch: undefined,
    timeout: 0,
  },
})
