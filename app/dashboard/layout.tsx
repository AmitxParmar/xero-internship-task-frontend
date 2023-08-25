import { ReactNode } from "react"

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <div className="bg-[#ccc] h-screen w-screen">{children}</div>
}
export default RootLayout
