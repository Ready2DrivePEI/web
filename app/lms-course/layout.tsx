import type { ReactNode } from "react"
import Sidebar from "@/components/lms-sidebar"

interface LMSLayoutProps {
  children: ReactNode
}

export default function LMSLayout({ children }: LMSLayoutProps) {
  return (
    <div className="lms-shell flex min-h-screen">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-6 sm:p-10">
        {children}
      </main>
    </div>
  )
}
