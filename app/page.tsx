"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import type React from "react";
import type { FormEvent } from "react";
import {
  Award,
  BookOpenCheck,
  CarFront,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
  RefreshCw,
  User,
  Phone,
  Mail,
  CreditCard,
  Pencil,
  Calendar,
  GraduationCap,
  Clock,
  SendHorizontal,
  ChevronDown,
  CircleHelp,
  Compass,
  BookOpen,
  Loader2,
} from "lucide-react";
import RevealOnScroll from "./components/motion/reveal-on-scroll";
import SubtleFloat from "./components/motion/subtle-float";
import BrandLogo from "@/components/brand-logo";
import ContactForm, { inquiryTemplates } from "@/components/contact-form";

const SteeringWheelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v7M12 15v7M2 12h7M15 12h7" />
  </svg>
);

const displayFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-landing-display",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-landing-body",
});

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Plans", href: "#plans" },
  { label: "Online Course", href: "/online-course-info" },
  { label: "Contact", href: "#contact" },
];

type OfflinePlan = {
  title: string;
  duration: string;
  description: string;
  pricingLabel: string;
  points: string[];
  bestFor?: string;
  recommended?: boolean;
};

const offlinePlans: OfflinePlan[] = [
  {
    title: "Single Lesson Package",
    duration: "Around 1 hour",
    description:
      "A focused one-class session built for quick skill reinforcement before your road test.",
    pricingLabel: "Quote shared after consultation",
    bestFor: "Quick refresh before a test or after a long break from driving.",
    points: [
      "One practical class (about 1 hour)",
      "Targeted correction on specific weak points",
    ],
  },
  {
    title: "Multi Lesson Package",
    duration: "4.5 to 6 hours",
    description:
      "A progressive lesson pathway that builds confidence step by step over multiple sessions.",
    pricingLabel: "Quote shared after consultation",
    bestFor: "Recommended for beginners building confidence from the basics.",
    recommended: true,
    points: [
      "Multiple practical sessions across 4.5 to 6 hours",
      "Structured pacing for beginner skill development",
    ],
  },
  {
    title: "Co-Pilot Package",
    duration: "Package pricing",
    description: "Test-day support with or without a one-hour lesson add-on.",
    pricingLabel: "Fixed package pricing",
    points: [
      "Co-pilot and vehicle only: $75 + HST",
      "1 hour lesson + co-pilot and vehicle: $130 + HST",
    ],
  },
];

const contactNotes = [
  "PEI-focused instructor guidance",
  "One-on-one road coaching",
  "Structured online theory",
  "Clear progress path to exam day",
];


const drivingProgramTopics = [
  "Basic vehicle controls",
  "Space management",
  "Controlled and uncontrolled intersections",
  "Lane changing and merging",
  "Parking techniques",
  "Emergency response and accident avoidance skills",
];

const lessonCards = [
  {
    title: "Beginner",
    description: "Core controls, confidence, and safe habits from the start.",
  },
  {
    title: "Defensive",
    description: "Risk awareness and safer decisions in real traffic situations.",
  },
  {
    title: "Refresher",
    description: "Skill sharpening for licensed drivers returning to the road.",
  },
  {
    title: "Advanced",
    description: "Highway flow, tighter control, and test-day readiness.",
  },
];

const getLessonIcon = (title: string) => {
  switch (title) {
    case "Beginner":
      return <Sparkles className="h-4 w-4 text-[#2563eb]/70 shrink-0" />;
    case "Defensive":
      return <ShieldCheck className="h-4 w-4 text-[#2563eb]/70 shrink-0" />;
    case "Refresher":
      return <RefreshCw className="h-4 w-4 text-[#2563eb]/70 shrink-0" />;
    case "Advanced":
      return <Award className="h-4 w-4 text-[#2563eb]/70 shrink-0" />;
    default:
      return <CheckCircle2 className="h-4 w-4 text-[#2563eb]/70 shrink-0" />;
  }
};

const getTemplateIcon = (label: string) => {
  switch (label) {
    case "Offline lesson booking":
      return <Calendar className="h-5 w-5 text-blue-600 shrink-0" />;
    case "Online course purchase":
      return <GraduationCap className="h-5 w-5 text-blue-600 shrink-0" />;
    case "Questions or support":
      return <CircleHelp className="h-5 w-5 text-blue-600 shrink-0" />;
    default:
      return null;
  }
};

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [defaultPlan, setDefaultPlan] = useState<string | undefined>(undefined);
  const [defaultMessage, setDefaultMessage] = useState<string | undefined>(undefined);
  const [mobileTab, setMobileTab] = useState<"curriculum" | "levels">("curriculum");
  const [openAccordion, setOpenAccordion] = useState<"program" | "lessons" | null>("lessons");

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

  // Pre-fill message starter and select plan from query param if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const starter = params.get("starter");
      if (starter) {
        if (starter === "online-course") {
          const template = inquiryTemplates.find((t) => t.label === "Online course purchase");
          if (template) {
            setDefaultPlan("Online Course Purchase");
            setDefaultMessage(template.text);
          }
        }
        // Delay scroll slightly to ensure page/layout is hydrated
        const timer = setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const applyInquiryTemplate = (text: string) => {
    setDefaultMessage(text);
  };

  // Scroll tracking: hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      const absDelta = Math.abs(delta);

      setIsScrolled(currentScrollY > 16);

      if (currentScrollY < 60) {
        setActiveSection("home");
      }

      if (isMobileMenuOpen || currentScrollY < 24) {
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
  }, [isMobileMenuOpen]);

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

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <main
      id="home"
      className={`${displayFont.variable} ${bodyFont.variable} bg-[#f6f9fd] font-[var(--font-landing-body)] text-slate-900`}
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(66,133,244,0.16),transparent_44%),radial-gradient(circle_at_90%_4%,rgba(15,23,42,0.08),transparent_30%),linear-gradient(180deg,#f6f9fd_0%,#fdfefe_42%,#f6f9fd_100%)]" />

        <header
          className={`fixed inset-x-0 top-0 z-[100] border-b transform-gpu motion-safe:transition-[transform,opacity,background-color,border-color,box-shadow] motion-safe:duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
            isMounted && isNavVisible ? "translate-y-0 opacity-100" : !isMounted ? "-translate-y-2 opacity-0" : "-translate-y-full opacity-0"
            } ${isScrolled
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
              <Link
                href="/login"
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#4285F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
              >
                Student Login
              </Link>
              <a
                href="#plans"
                className="rounded-xl bg-[#4285F4] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-200 motion-safe:transition-[transform,box-shadow] motion-safe:duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
              >
                View Plans
              </a>
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
                    className={`block min-h-12 rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${activeSection === item.href.slice(1)
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
                <a
                  href="#plans"
                  onClick={closeMobileMenu}
                  className="flex-1 rounded-xl bg-[#4285F4] px-4 py-2.5 text-center text-sm font-semibold text-white"
                >
                  View Plans
                </a>
              </div>
            </div>
          )}
        </header>

        <section className="mx-auto grid max-w-7xl items-center gap-6 px-4 pb-14 pt-22 sm:gap-8 sm:px-6 sm:pb-20 sm:pt-26 md:gap-16 md:pt-32 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <RevealOnScroll className="min-w-0 space-y-6 sm:space-y-8">
            {/* Badge — sparkles icon hidden on mobile for cleaner look */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#4285F4] shadow-sm">
              <Sparkles className="hidden h-3.5 w-3.5 sm:block" />
              <span className="sm:hidden">Licensed in PEI</span>
              <span className="hidden sm:inline">Licensed Driving Instruction in PEI</span>
            </div>
            <h1 className="font-[var(--font-landing-display)] text-[1.95rem] leading-[1.1] tracking-tight text-slate-950 sm:text-5xl sm:leading-[1.03] lg:text-7xl">
              Practical driving lessons built for confidence on real roads
            </h1>
             {/* Mobile: simplified, punchier subtext; Desktop: original detailed paragraph */}
             <p className="max-w-2xl text-[15px] leading-[1.65] text-slate-700 sm:hidden">
               One-on-one PEI road lessons backed by online theory. A calm, complete path from first drive to test day.
             </p>
             <p className="max-w-2xl text-[15px] leading-[1.65] text-slate-700 hidden sm:block sm:text-xl sm:leading-[1.72]">
               Train one-on-one with a focused instructor, then reinforce what you learn with our
               online theory modules. One calm, complete path from first drive to test day 
             </p>

             <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
               <a
                 href="#plans"
                 className="inline-flex min-w-0 w-full items-center justify-center rounded-2xl bg-[#4285F4] px-4 py-3.5 text-center text-sm font-semibold leading-tight text-white shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
               >
                 <span className="sm:hidden">See Offline Plans</span>
                 <span className="hidden sm:inline">See Offline Lesson Plans</span>
                 <ChevronRight className="ml-2 h-4 w-4" />
               </a>
               <Link
                 href="/online-course-info"
                 className="inline-flex min-w-0 w-full items-center justify-center rounded-2xl border border-blue-200 bg-white px-4 py-3.5 text-center text-sm font-semibold leading-tight text-[#2563eb] transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
               >
                 <span className="sm:hidden">Explore Online Course</span>
                 <span className="hidden sm:inline">Explore the New Online Course</span>
               </Link>
             </div>

             {/* Desktop/Tablet: original 3 cards block inside the left column (exactly as original) */}
             <div className="hidden sm:grid sm:grid-cols-3 sm:gap-2.5 sm:overflow-visible sm:px-0 sm:pb-0 text-sm text-slate-600">
               <div className="min-w-0 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-sm">
                 <p className="text-sm font-semibold text-slate-900">One-on-one coaching</p>
                 <p className="mt-1 text-slate-600">Personalized road training</p>
               </div>
               <div className="min-w-0 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-sm">
                 <p className="text-sm font-semibold text-slate-900">Offline-first path</p>
                 <p className="mt-1 text-slate-600">Practical skills prioritized</p>
               </div>
               <div className="min-w-0 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-sm">
                 <p className="text-sm font-semibold text-slate-900">Online reinforcement</p>
                 <p className="mt-1 text-slate-600">Theory support at home</p>
               </div>
             </div>
           </RevealOnScroll>

           <RevealOnScroll className="relative min-w-0" delayMs={120}>
             <SubtleFloat className="relative" maxShiftPx={6} speed={0.68}>
               <div className="mx-auto w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_28px_65px_rgba(15,23,42,0.17)]">
                 <Image
                   src="/landing/hero-offline-premium.png"
                   alt="Editorial wide-angle photo of a calm professional driving instructor coaching a young adult in a modern car on a clean Prince Edward Island suburban street during golden hour, natural light, authentic candid style, high detail, trust-focused composition."
                   width={1200}
                   height={900}
                   priority
                   sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 80vw, 44vw"
                   className="aspect-[4/3] w-full object-cover object-center sm:aspect-[5/4]"
                 />
               </div>
               {/* Desktop-only floating caption */}
               <div className="absolute -bottom-8 left-5 hidden rounded-2xl border border-blue-100 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm sm:left-8 sm:block">
                 <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4285F4]">
                   Instructor-Led
                 </p>
                 <p className="mt-1 text-sm font-semibold text-slate-900">
                   Real-road sessions tailored to your learning pace.
                 </p>
               </div>
             </SubtleFloat>
           </RevealOnScroll>

           {/* Mobile Benefit Points: 2x2 Micro-Grid Capsule Layout — hidden on sm and above */}
           <div className="rounded-2xl border border-blue-100/80 bg-white/90 p-4 shadow-sm sm:hidden">
             <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
               {[
                 "One-on-one coaching",
                 "Offline-first path",
                 "Online reinforcement",
                 "PEI licensed instruction",
               ].map((point) => (
                 <div key={point} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                   <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2563eb]" />
                   <span>{point}</span>
                 </div>
               ))}
             </div>
           </div>
        </section>
      </div>

      <section id="plans" className="relative scroll-mt-0 bg-[linear-gradient(180deg,#edf3fb_0%,#eef4fb_100%)] pb-16 pt-12 md:scroll-mt-0 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <RevealOnScroll className="relative mb-12 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#2563eb]">
              <CarFront className="h-4 w-4" />
              Offline Plans
            </div>
            <h2 className="font-[var(--font-landing-display)] text-3xl leading-tight text-slate-950 sm:text-4xl md:text-5xl">
              Pick the lesson package that matches where you are today.
            </h2>
             <p className="text-lg leading-relaxed text-slate-700 hidden sm:block">
               Each package leads to direct instructor guidance. Start with the right practical
               level, then continue to contact for scheduling and package details.
             </p>
            <div className="flex items-center gap-3 pt-1">
              <span className="h-px w-14 bg-blue-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
                Instructor-led practical pathway
              </span>
            </div>
          </RevealOnScroll>

          <div className="relative grid items-start gap-7 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <RevealOnScroll delayMs={120} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <Image
                  src="/landing/offline-lesson-detail.png"
                  alt="Close interior car shot of instructor pointing to mirrors and road signs while student takes notes, professional training atmosphere, neutral tones with subtle blue accents, documentary style."
                  width={1000}
                  height={1200}
                  sizes="(max-width: 1023px) calc(100vw - 2rem), 36vw"
                  className="aspect-[4/3] w-full object-cover object-center sm:aspect-[1.1/1]"
                />
                <div className="flex flex-1 flex-col space-y-4 p-5 sm:p-6">
                  <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
                    <Clock3 className="h-3.5 w-3.5" />
                    Practical Session Focus
                  </p>
                  <h3 className="font-[var(--font-landing-display)] text-[1.25rem] leading-snug text-slate-900 sm:text-2xl">
                    Build lane control and confident decision-making through calm, structured in-car coaching.
                  </h3>

                  {/* Mobile Tab Switcher: Curriculum | Levels */}
                  <div className="sm:hidden">
                    <div className="flex rounded-xl border border-slate-200 bg-slate-50 p-1">
                      <button
                        type="button"
                        onClick={() => setMobileTab("curriculum")}
                        className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                          mobileTab === "curriculum"
                            ? "bg-white text-[#2563eb] shadow-sm"
                            : "text-slate-600"
                        }`}
                      >
                        Curriculum
                      </button>
                      <button
                        type="button"
                        onClick={() => setMobileTab("levels")}
                        className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                          mobileTab === "levels"
                            ? "bg-white text-[#2563eb] shadow-sm"
                            : "text-slate-600"
                        }`}
                      >
                        Levels
                      </button>
                    </div>
                     {mobileTab === "curriculum" ? (
                       <div className="mt-3 space-y-2.5 text-sm text-slate-700">
                         {drivingProgramTopics.map((topic) => (
                           <div key={topic} className="relative pl-4.5">
                             <span className="absolute left-1.5 top-[0.6em] h-1.5 w-1.5 shrink-0 -translate-y-1/2 rounded-full bg-[#2563eb]" />
                             <span>{topic}</span>
                           </div>
                         ))}
                       </div>
                    ) : (
                      <div className="mt-3 space-y-2">
                        {lessonCards.map((lesson) => (
                          <div
                            key={lesson.title}
                            className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5"
                          >
                            <p className="text-sm font-semibold text-slate-800">
                              {lesson.title}
                            </p>
                            <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                              {lesson.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Desktop: Collapsible Our Driving Program Accordion */}
                  <details
                    open={openAccordion === "program"}
                    className="group hidden overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/40 sm:block"
                  >
                    <summary
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenAccordion(openAccordion === "program" ? null : "program");
                      }}
                      className="flex cursor-pointer items-center justify-between px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-slate-700 transition-all hover:bg-blue-50/40 hover:text-[#2563eb] focus:outline-none focus:ring-0"
                    >
                      <span>Our Driving Program</span>
                      <ChevronRight className="h-4 w-4 text-[#2563eb] transition-transform duration-200 group-open:rotate-90" />
                    </summary>
                    <div className="max-h-0 overflow-hidden transition-[max-height] duration-300 ease-out group-open:max-h-64">
                      <div className="max-h-52 space-y-2 overflow-y-auto border-t border-slate-200 px-4 py-3 pr-2 text-sm text-slate-700">
                        {drivingProgramTopics.map((topic) => (
                          <div key={topic} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2563eb]" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </details>

                  <details
                    open={openAccordion === "lessons"}
                    className="group mt-3 hidden overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/40 sm:block"
                  >
                    <summary
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenAccordion(openAccordion === "lessons" ? null : "lessons");
                      }}
                      className="flex cursor-pointer items-center justify-between px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-slate-500 transition-all hover:bg-blue-50/40 hover:text-[#2563eb] focus:outline-none focus:ring-0"
                    >
                      <span>Lessons & Skill Levels</span>
                      <ChevronRight className="h-4 w-4 text-[#2563eb]/70 transition-transform duration-200 group-open:rotate-90" />
                    </summary>
                    <div className="max-h-0 overflow-hidden transition-[max-height] duration-300 ease-out group-open:max-h-80">
                      <div className="bg-white px-4 py-4">
                        <div className="grid grid-cols-2 gap-3">
                          {lessonCards.map((lesson) => (
                            <div
                              key={lesson.title}
                              className="rounded-xl border border-slate-100 bg-[#2563eb]/[0.01] px-3.5 py-3 hover:border-slate-300 transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                {getLessonIcon(lesson.title)}
                                <p className="text-sm font-semibold text-slate-600">
                                  {lesson.title}
                                </p>
                              </div>
                              <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                                {lesson.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </article>
            </RevealOnScroll>

             <div className="grid gap-6">
               {offlinePlans.map((plan) => (
                 <article
                   key={plan.title}
                   className={`rounded-3xl border p-5 sm:p-6 shadow-[0_12px_30px_rgba(15,23,42,0.1)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(15,23,42,0.14)] ${plan.recommended
                       ? "border-blue-300 bg-blue-50/60"
                       : "border-slate-200 bg-white"
                     }`}
                 >
                   <div className="flex flex-wrap items-start justify-between gap-3">
                     <div>
                       <div className="flex flex-wrap items-center gap-2">
                         <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2563eb] sm:text-xs sm:tracking-[0.16em]">
                           {plan.duration}
                         </p>
                         {plan.recommended && (
                           <span className="rounded-full border border-blue-300 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1d4ed8] sm:text-[11px] sm:tracking-[0.12em]">
                             Recommended
                           </span>
                         )}
                       </div>
                       <h3 className="mt-1.5 text-2xl font-semibold text-slate-900">{plan.title}</h3>
                     </div>
                     <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700 sm:text-xs">
                       {plan.pricingLabel}
                     </span>
                   </div>

                   <p className="mt-3.5 leading-relaxed text-slate-700">{plan.description}</p>

                   {plan.bestFor && (
                     <p className="mt-3.5 rounded-xl border border-blue-200 bg-white/75 px-4 py-2.5 text-sm leading-relaxed text-slate-700">
                       <span className="font-semibold text-slate-900">Best for:</span> {plan.bestFor}
                     </p>
                   )}

                   <ul className="mt-4.5 space-y-2">
                     {plan.points.map((point) => (
                       <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                         <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2563eb]" />
                         {point}
                       </li>
                     ))}
                   </ul>

                   <a
                     href="#contact"
                     className="mt-5 inline-flex items-center rounded-xl bg-[#4285F4] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
                   >
                     Continue to Contact Form
                     <ChevronRight className="ml-1.5 h-4 w-4" />
                   </a>
                 </article>
               ))}
             </div>
          </div>
        </div>
      </section>

      <section id="online-course" className="scroll-mt-0 bg-white py-12 md:scroll-mt-0 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <RevealOnScroll>
            <div className="relative overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.1)]">
              <div className="grid items-center gap-8 px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
                    <Sparkles className="h-3.5 w-3.5" />
                    New Addition
                  </div>
                  <h2 className="font-[var(--font-landing-display)] text-3xl leading-tight text-slate-950 sm:text-4xl md:text-5xl">
                    Online theory course that complements your road sessions.
                  </h2>
                   <p className="text-base leading-relaxed text-slate-700 sm:hidden">
                     Study for your PEI license test at home with interactive modules and practice quizzes.
                   </p>
                   <p className="text-base leading-relaxed text-slate-700 hidden sm:block sm:text-lg">
                     Continue learning off the road with guided modules, quizzes, and
                     certificate-focused progression that supports your practical driving training.
                   </p>

                  <div className="space-y-5">
                    {/* Mobile: clean vertical checklist */}
                    <ul className="space-y-2 text-sm text-slate-700 sm:hidden">
                      {[
                        { icon: BookOpenCheck, text: "Structured multi-module lessons" },
                        { icon: CheckCircle2, text: "Unlimited quiz attempts" },
                        { icon: Award, text: "Completion certificate" },
                        { icon: ShieldCheck, text: "Progress saved automatically" },
                      ].map(({ icon: Icon, text }) => (
                        <li key={text} className="flex items-center gap-2.5">
                          <Icon className="h-4 w-4 shrink-0 text-[#2563eb]" />
                          {text}
                        </li>
                      ))}
                    </ul>

                    {/* Desktop: original card grid (unchanged) */}
                    <ul className="hidden gap-3 text-sm text-slate-700 sm:grid sm:grid-cols-2">
                      <li className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2">
                        <BookOpenCheck className="h-4 w-4 text-[#2563eb]" />
                        Structured multi-module lessons
                      </li>
                      <li className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2">
                        <CheckCircle2 className="h-4 w-4 text-[#2563eb]" />
                        Unlimited quiz attempts
                      </li>
                      <li className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2">
                        <Award className="h-4 w-4 text-[#2563eb]" />
                        Completion certificate
                      </li>
                      <li className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2">
                        <ShieldCheck className="h-4 w-4 text-[#2563eb]" />
                        Progress saved automatically
                      </li>
                    </ul>

                    {/* Mobile: single CTA; Desktop: both buttons */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Link
                        href="/online-course-info"
                        className="inline-flex w-full items-center justify-center rounded-xl bg-[#4285F4] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
                      >
                        Explore Online Course Details
                      </Link>
                      <Link
                        href="/login"
                        className="hidden w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-blue-300 hover:text-[#2563eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2 sm:inline-flex"
                      >
                        Go to Student Login
                      </Link>
                    </div>
                  </div>
                </div>

                <RevealOnScroll delayMs={180}>
                  <SubtleFloat maxShiftPx={5} speed={0.58}>
                    <div className="overflow-hidden rounded-3xl border border-blue-100">
                      <Image
                        src="/landing/online-course-new-addition.png"
                        alt="Cinematic laptop-and-phone desk scene showing a driving theory e-learning dashboard with progress modules, blue and white UI theme, premium educational brand feel, soft shadows, realistic photography."
                        width={1200}
                        height={900}
                        sizes="(max-width: 1023px) calc(100vw - 2rem), 38vw"
                        className="aspect-[16/10] w-full object-cover sm:aspect-[4/3]"
                      />
                    </div>
                  </SubtleFloat>
                </RevealOnScroll>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section id="contact" className="scroll-mt-0 bg-[#eaf1fa] py-10 md:scroll-mt-0 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Mobile: 2x2 Micro-Grid in its own white capsule */}
          <div className="rounded-2xl border border-blue-100 bg-white/95 p-4 mb-4 shadow-[0_4px_12px_rgba(15,23,42,0.03)] sm:hidden">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {contactNotes.map((note) => (
                <div key={note} className="flex items-start gap-1.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500/75 mt-0.5" />
                  <span className="leading-tight">{note}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.2rem] border border-blue-100 bg-[#f4f8fe] p-3 sm:rounded-[2.4rem] sm:p-6 md:p-8">
            <div className="mb-4 hidden grid-cols-2 gap-3 sm:grid md:gap-4 xl:grid-cols-4">
              {contactNotes.map((note, index) => {
                const Icon =
                  index === 0
                    ? Compass
                    : index === 1
                      ? SteeringWheelIcon
                      : index === 2
                        ? BookOpen
                        : CheckCircle2;
                return (
                  <div
                    key={note}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-4 text-sm font-semibold text-slate-800 shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-colors hover:border-slate-200"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-blue-500/75" />
                    <span className="leading-tight">{note}</span>
                  </div>
                );
              })}
            </div>
            <div className="grid gap-5 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Desktop: full left panel with description and starters */}
              <RevealOnScroll className="hidden h-full sm:block">
                <div className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
                    Contact
                  </p>
                  <h2 className="mt-4 font-[var(--font-landing-display)] text-4xl leading-tight text-slate-950">
                    Tell us your current stage. We will guide your next steps
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-700">
                    Choose a starter below and click it. We will auto-fill your message box so
                    you can send your inquiry faster.
                  </p>
                  <div className="mt-7 space-y-3.5 pt-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
                        Quick message starters
                      </p>
                      <span className="inline-flex items-center gap-1 rounded-full border border-blue-100 bg-blue-50/60 px-2 py-0.5 text-[10px] font-semibold text-[#2563eb]">
                        <Clock className="h-3 w-3" />
                        Usually responds within 24 hours
                      </span>
                    </div>
                    <div className="space-y-3">
                      {inquiryTemplates.map((template) => (
                        <button
                          key={template.label}
                          type="button"
                          onClick={() => applyInquiryTemplate(template.text)}
                          className="group flex w-full items-center justify-between rounded-2xl border border-blue-100/80 bg-blue-50/[0.03] px-5 py-4 text-left text-sm font-semibold text-[#2563eb] transition-all hover:bg-blue-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
                        >
                          <div className="flex items-center gap-3.5">
                            {getTemplateIcon(template.label)}
                            <span>{template.label}</span>
                          </div>
                          <ChevronRight className="h-4 w-4 text-blue-600 transition-transform group-hover:translate-x-0.5" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Mobile: compact heading + starters above form */}
              <div className="sm:hidden">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563eb]">
                  Contact
                </p>
                <h2 className="mt-2 font-[var(--font-landing-display)] text-2xl leading-tight text-slate-950">
                  Tell us your current stage
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Tap a starter to pre-fill your message, or type your own.
                </p>
              </div>

              <RevealOnScroll delayMs={120} className="h-full">
                <div className="h-full rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.1)] sm:rounded-[2rem] sm:p-9">
                  <ContactForm defaultPlan={defaultPlan} defaultMessage={defaultMessage} />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-blue-100/80 bg-white/80 py-6 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Ready2Drive PEI. Practical lessons + online support for PEI learners.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="#plans" className="transition-colors hover:text-[#4285F4]">
              Plans
            </a>
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
    </main>
  );
}
