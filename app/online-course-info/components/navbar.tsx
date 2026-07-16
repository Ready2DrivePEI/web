"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type React from "react";
import BrandLogo from "@/components/brand-logo";
import EnrollButton from "@/components/enroll-button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Plans", href: "/#plans" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("online-course-info");
  const [isMounted, setIsMounted] = useState(false);
  const [user] = useState<{ name: string } | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sliding pill state
  const [pillStyle, setPillStyle] = useState<React.CSSProperties>({ left: 0, width: 0, opacity: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const lastScrollY = useRef(0);
  const navDirection = useRef<"up" | "down" | null>(null);
  const directionalDistance = useRef(0);

  // Page-load entrance animation
  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Close mobile menu on ESC
  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    if (isMobileMenuOpen) {
      window.addEventListener("keydown", onEscape);
    }
    return () => window.removeEventListener("keydown", onEscape);
  }, [isMobileMenuOpen]);

  // Scroll tracking: hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      const absDelta = Math.abs(delta);

      setIsScrolled(currentScrollY > 16);

      if (currentScrollY < 24) {
        setIsNavVisible(true);
        directionalDistance.current = 0;
        navDirection.current = null;
        lastScrollY.current = currentScrollY;
        return;
      }

      if (absDelta < 2) {
        return;
      }

      const direction = delta > 0 ? "down" : "up";
      if (direction !== navDirection.current) {
        navDirection.current = direction;
        directionalDistance.current = 0;
      }

      directionalDistance.current += absDelta;

      if (direction === "down" && directionalDistance.current > 140 && currentScrollY > 240) {
        setIsNavVisible(false);
        directionalDistance.current = 0;
      } else if (direction === "up" && directionalDistance.current > 70) {
        setIsNavVisible(true);
        directionalDistance.current = 0;
      }

      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll-spy active section highlighting
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const intersecting = entries.find((entry) => entry.isIntersecting);
      if (intersecting) {
        setActiveSection(intersecting.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-40% 0px -40% 0px", // active zone is 20% band in middle of screen
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Sliding pill coordinate calculation (scroll-based only)
  useEffect(() => {
    if (!activeSection) {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const index = navItems.findIndex((item) => item.href.slice(1) === activeSection);
    if (index !== -1 && linkRefs.current[index]) {
      const el = linkRefs.current[index]!;
      const rect = el.getBoundingClientRect();
      const parentRect = containerRef.current?.getBoundingClientRect();
      if (parentRect) {
        setPillStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
          opacity: 1,
        });
      }
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] border-b transform-gpu motion-safe:transition-[transform,opacity,background-color,border-color,box-shadow] motion-safe:duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
        isMounted && isNavVisible ? "translate-y-0 opacity-100" : !isMounted ? "-translate-y-2 opacity-0" : "-translate-y-full opacity-0"
      } ${
        isScrolled
          ? "border-blue-100 bg-white/88 shadow-[0_10px_35px_rgba(15,23,42,0.1)] backdrop-blur-xl"
          : "border-transparent bg-white/70 backdrop-blur-lg"
      }`}
    >
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <BrandLogo />

        <nav
          ref={containerRef}
          className="absolute left-1/2 -translate-x-1/2 hidden items-center gap-2 text-sm font-semibold md:flex"
        >
          {/* Sliding background pill */}
          <div
            className="absolute top-1 bottom-1 rounded-lg bg-blue-100/60 will-change-[left,width] motion-safe:transition-[left,width,opacity] motion-safe:duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={pillStyle}
          />
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              ref={(el) => { linkRefs.current[idx] = el; }}
              href={item.href}
              className={`relative z-10 rounded-lg px-3 py-1.5 focus-visible:outline-none motion-safe:transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-[#2563eb]"
                  : "text-slate-600 hover:text-[#4285F4] focus-visible:text-[#4285F4]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
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
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#4285F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
              >
                Student Login
              </Link>
              <EnrollButton
                className="rounded-xl bg-[#4285F4] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-200 motion-safe:transition-[transform,box-shadow] motion-safe:duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
              >
                Enroll Now
              </EnrollButton>
            </>
          )}
        </div>

        <button
          type="button"
          className="rounded-xl border border-slate-200 bg-white/90 p-2 text-slate-700 transition-colors hover:border-blue-200 hover:text-[#4285F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-blue-100 bg-white/95 px-4 pb-6 pt-4 shadow-lg backdrop-blur-xl sm:px-6 md:hidden"
        >
          <div className="space-y-2 border-b border-slate-200/80 pb-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
                onClick={closeMobileMenu}
                className={`block min-h-12 rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "bg-blue-50 text-[#2563eb]"
                    : "text-slate-700 hover:bg-blue-50 hover:text-[#4285F4]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-slate-700"
            >
              Login
            </Link>
            <EnrollButton
              className="flex-grow flex-shrink-0 flex-1 rounded-xl bg-[#4285F4] px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Enroll Now
            </EnrollButton>
          </div>
        </div>
      )}
    </header>
  );
}
