import type { ReactNode } from "react"
import { LMSShell } from "@/app/lms-course/_components/lms-shell"

interface LMSLayoutProps {
  children: ReactNode
}

export default function LMSLayout({ children }: LMSLayoutProps) {
  return (
    <LMSShell>{children}</LMSShell>
  )
}
