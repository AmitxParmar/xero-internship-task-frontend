import {
  JetBrains_Mono as FontMono,
  Nunito as FontSans,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  preload: true,
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
