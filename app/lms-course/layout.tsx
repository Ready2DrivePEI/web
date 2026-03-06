import type { ReactNode } from "react"
import Sidebar from "@/components/lms-sidebar"

interface LMSLayoutProps {
  children: ReactNode
}

export default function LMSLayout({ children }: LMSLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#0b1220] text-slate-200">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-10">
        {children}
      </main>
    </div>
  )
}