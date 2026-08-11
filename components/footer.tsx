import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100/80 bg-white/80 py-6 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>Ready2Drive PEI. Practical lessons + online support for PEI learners.</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <Link href="/#plans" className="transition-colors hover:text-[#4285F4]">
            Plans
          </Link>
          <Link href="/online-course-info" className="transition-colors hover:text-[#4285F4]">
            Online Course
          </Link>
          <Link href="/login" className="transition-colors hover:text-[#4285F4]">
            Login
          </Link>
          <span className="text-slate-400">(902) 555-0147</span>
        </div>
      </div>
    </footer>
  );
}
