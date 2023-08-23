import { authOptions } from '@/server/auth'
import NextAuth from 'next-auth/next'

const handler = NextAuth(authOptions)