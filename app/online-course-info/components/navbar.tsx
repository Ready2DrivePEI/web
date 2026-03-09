"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CarFront } from "lucide-react";

export default function Navbar() {
  const [user] = useState<{ name: string } | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Unique Touch: Detect scroll to add a "frosted glass" effect dynamically
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" // Glass effect when scrolled
          : "bg-transparent"                         // Clean look at the top
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left: Brand Name */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-blue-50 p-2 rounded-xl group-hover:bg-blue-100 transition-colors">
            <CarFront className="text-[#4285F4]" size={22} />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Ready2Drive <span className="text-[#4285F4]">PEI</span>
          </span>
        </Link>

        {/* Center: Anchor Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-500">
          <Link href="#about" className="hover:text-[#4285F4] transition-colors">
            About
          </Link>
          <Link href="#price" className="hover:text-[#4285F4] transition-colors">
            Price
          </Link>
          <Link href="#faq" className="hover:text-[#4285F4] transition-colors">
            FAQ
          </Link>
        </div>

        {/* Right: Login & Enroll / User Profile */}
        <div className="flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#4285F4] flex items-center justify-center text-white font-bold text-sm">
                {user.name.charAt(0)}
              </div>
              <span className="font-medium text-gray-700 text-sm">{user.name}</span>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-semibold text-gray-600 hover:text-[#4285F4] transition-colors hidden sm:block"
              >
                Student Login
              </Link>
              <Link
                href="/lms-course"
                className="bg-[#4285F4] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-all shadow-md shadow-blue-200 active:scale-95"
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
