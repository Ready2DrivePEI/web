"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CarFront } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[90] border-b transition-[background-color,border-color,box-shadow] duration-500 ${
        isScrolled
          ? "border-blue-100 bg-white/85 shadow-[0_10px_28px_rgba(15,23,42,0.1)] backdrop-blur-xl"
          : "border-transparent bg-white/60 backdrop-blur-lg"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-2">
            <CarFront className="h-5 w-5 text-[#4285F4]" />
          </div>
          <div className="leading-none">
            <span className="block text-base font-semibold tracking-tight text-slate-900">
              Ready2Drive <span className="text-[#4285F4]">PEI</span>
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Driver Training
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          <Link href="#about" className="transition-colors hover:text-[#4285F4]">
            About
          </Link>
          <Link href="#price" className="transition-colors hover:text-[#4285F4]">
            Price
          </Link>
          <Link href="#faq" className="transition-colors hover:text-[#4285F4]">
            FAQ
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {user ? (
            <div className="flex items-center gap-3 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4285F4] text-sm font-bold text-white">
                {user.name.charAt(0)}
              </div>
              <span className="text-sm font-medium text-slate-700">{user.name}</span>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden text-sm font-semibold text-slate-600 transition-colors hover:text-[#4285F4] sm:block"
              >
                Student Login
              </Link>
              <Link
                href="/lms-course"
                className="inline-flex items-center justify-center rounded-xl bg-[#4285F4] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2 sm:px-6"
              >
                Enroll Now
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
