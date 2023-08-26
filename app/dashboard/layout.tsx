import { ReactNode } from "react"

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <div className="h-screen w-screen bg-[#ccc]">{children}</div>
}
export default RootLayout
