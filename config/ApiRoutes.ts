import { env } from "@/env.mjs"

export const BASE_URL = env.API_BASE_URL
export const SIGN_UP = `${BASE_URL}/sign-up`
export const SIGN_IN = `${BASE_URL}/sign-in`
export const UPDATE_USER = `${BASE_URL}/update`
