"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

import { IUser } from "@/types/global"

interface IAuth {
  user: IUser | null | undefined
  loading: boolean // I'll change that later
  error: string | null | undefined
  setError: (error: string) => void
  loginStart: () => void
  loginSuccess: (user: IUser) => void
  loginFailure: (error: any | null | undefined) => void
  logout: () => void
  setLoading: (Boolean: boolean) => void
}

export const useAuth = create<IAuth>()(
  persist(
    (set) => ({
      user: null,
      loading: false,
      error: null,
      setError: (error) => set({ error }),
      loginStart: () => set({ loading: true }),
      loginSuccess: (user) => set({ user, loading: false }),
      loginFailure: (error) => set({ error, loading: false }),
      logout: () => {
        localStorage.clear()
        set({ user: null })
      },
      setLoading: (Boolean) => set({ loading: Boolean }),
    }),
    {
      name: "user",
      partialize: (state) => ({ user: state.user }),
    }
  )
)
