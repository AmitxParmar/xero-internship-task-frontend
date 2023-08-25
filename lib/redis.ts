import { env } from "@/env.mjs"
import { Redis } from "@upstash/redis"

export const redis = new Redis({
  url: getRedisUrl(),
  token: String(env.UPSTASH_REDIS_REST_TOKEN),
})

function getRedisUrl() {
  if (env.UPSTASH_REDIS_REST_URL) {
    return env.UPSTASH_REDIS_REST_URL
  }

  throw new Error("REDIS_URL is not defined!")
}

/* export const redis =new Redis(getRedisUrl()) */
