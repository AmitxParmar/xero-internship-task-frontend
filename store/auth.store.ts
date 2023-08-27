"use client"

import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import { IUser } from "@/types/global"

interface IAuth {
  user: IUser | null | undefined
  loading: boolean // I'll change that later
  error: string | null | undefined
  step: number
  setNextStep: () => void
  setError: (error: string) => void
  loginStart: () => void
  loginSuccess: (user: IUser) => void
  loginFailure: (error: any | null | undefined) => void
  logout: () => void
  setLoading: (Boolean: boolean) => void
}

export const useAuth = create<IAuth>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        step: 0,
        loading: false,
        error: null,
        setNextStep: () => set((state) => ({ step: state.step + 1 })),
        setError: (error) => set({ error }),
        loginStart: () => set({ loading: true }),
        loginSuccess: (user) => set({ user, loading: false }),
        loginFailure: (error) => set({ error, loading: false, user: null }),
        logout: () => {
          localStorage.clear()
          set({ user: null })
        },
        setLoading: (Boolean) => set({ loading: Boolean }),
      }),
      {
        name: "user",
        partialize: (state) => ({ user: state.user, step: state.step }),
      }
    )
  )
)
