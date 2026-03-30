import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { AdminDashboardClient } from "@/app/admin/_components/admin-dashboard-client";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-admin-display",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-admin-body",
});

export default function AdminPage() {
  return (
    <div
      className={`${displayFont.variable} ${bodyFont.variable} min-h-screen bg-[#f6f9fd] font-[var(--font-admin-body)] text-slate-900`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_8%,rgba(66,133,244,0.16),transparent_42%),radial-gradient(circle_at_88%_5%,rgba(15,23,42,0.08),transparent_34%),linear-gradient(180deg,#f6f9fd_0%,#fdfefe_45%,#f6f9fd_100%)]" />
      <AdminDashboardClient />
    </div>
  );
}
