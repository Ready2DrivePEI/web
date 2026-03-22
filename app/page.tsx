"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { useEffect, useRef, useState } from "react";
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
} from "lucide-react";
import RevealOnScroll from "./components/motion/reveal-on-scroll";
import SubtleFloat from "./components/motion/subtle-float";

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
  { label: "Online Course", href: "#online-course" },
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
  "Practical, one-on-one road coaching",
  "Structured online theory",
  "Clear progress path to exam day",
];

const inquiryTemplates = [
  {
    label: "Offline lesson booking",
    text: "Hi, I want to book an offline driving package. My current level is [beginner/intermediate], and I am available on [days/times]. Please suggest the best plan.",
  },
  {
    label: "Online course purchase",
    text: "Hi, I want to purchase the online course. Please share the payment steps and account setup process.",
  },
  {
    label: "Questions or support",
    text: "Hi, I have a question about [lessons/course/account]. I need help with [issue]. Please guide me on the next steps.",
  },
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

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [messageDraft, setMessageDraft] = useState("");
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const lastScrollY = useRef(0);
  const navDirection = useRef<"up" | "down" | null>(null);
  const directionalDistance = useRef(0);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const updateActiveSection = () => {
      const probePosition = window.scrollY + 160;
      let nextActive = sectionIds[0];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }

        if (probePosition >= section.offsetTop) {
          nextActive = id;
        }
      }

      setActiveSection((current) => (current === nextActive ? current : nextActive));
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      const absDelta = Math.abs(delta);

      updateActiveSection();
      setIsScrolled(currentScrollY > 16);

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
    window.setTimeout(() => setFormSubmitted(false), 4200);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const applyInquiryTemplate = (text: string) => {
    setMessageDraft(text);
    window.requestAnimationFrame(() => {
      messageRef.current?.focus();
      messageRef.current?.setSelectionRange(text.length, text.length);
    });
  };

  return (
    <main
      id="home"
      className={`${displayFont.variable} ${bodyFont.variable} bg-[#f6f9fd] font-[var(--font-landing-body)] text-slate-900`}
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(66,133,244,0.16),transparent_44%),radial-gradient(circle_at_90%_4%,rgba(15,23,42,0.08),transparent_30%),linear-gradient(180deg,#f6f9fd_0%,#fdfefe_42%,#f6f9fd_100%)]" />

        <header
          className={`fixed inset-x-0 top-0 z-[100] border-b transform-gpu transition-[transform,opacity,background-color,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
            isNavVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } ${
            isScrolled
              ? "border-blue-100 bg-white/88 shadow-[0_10px_35px_rgba(15,23,42,0.1)] backdrop-blur-xl"
              : "border-transparent bg-white/70 backdrop-blur-lg"
          }`}
        >
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-100 bg-blue-50">
                <CarFront className="h-[18px] w-[18px] text-[#4285F4]" />
              </div>
              <div className="leading-none">
                <span className="block text-[1.03rem] font-semibold tracking-tight text-slate-900">
                  Ready2Drive <span className="text-[#4285F4]">PEI</span>
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
                  Driver Training
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
                  className={`rounded-lg px-2 py-1 transition-colors focus-visible:outline-none ${
                    activeSection === item.href.slice(1)
                      ? "bg-blue-50 text-[#2563eb]"
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
                className="rounded-xl bg-[#4285F4] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
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

        <section className="mx-auto grid max-w-7xl items-center gap-6 px-4 pb-14 pt-24 sm:gap-8 sm:px-6 sm:pb-20 sm:pt-28 md:gap-16 md:pt-36 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <RevealOnScroll className="min-w-0 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#4285F4] shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="sm:hidden">Licensed in PEI</span>
              <span className="hidden sm:inline">Licensed Driving Instruction in PEI</span>
            </div>
            <h1 className="font-[var(--font-landing-display)] text-[1.95rem] leading-[1.1] tracking-tight text-slate-950 sm:text-5xl sm:leading-[1.03] lg:text-7xl">
              Practical driving lessons built for confidence on real roads.
            </h1>
            <p className="max-w-2xl text-[15px] leading-[1.65] text-slate-700 sm:text-xl sm:leading-[1.72]">
              Train one-on-one with a focused instructor, then reinforce what you learn with our
              online theory modules. One calm, complete path from first drive to test day.
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

            <div className="flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-0.5 pb-1 text-sm text-slate-600 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
              <div className="min-w-[185px] snap-start rounded-full border border-slate-200 bg-white/95 px-3.5 py-2 shadow-sm sm:min-w-0 sm:rounded-2xl sm:px-4 sm:py-3">
                <p className="text-xs font-semibold text-slate-900 sm:text-sm">One-on-one coaching</p>
                <p className="mt-1 hidden text-slate-600 sm:block">Personalized road training</p>
              </div>
              <div className="min-w-[185px] snap-start rounded-full border border-slate-200 bg-white/95 px-3.5 py-2 shadow-sm sm:min-w-0 sm:rounded-2xl sm:px-4 sm:py-3">
                <p className="text-xs font-semibold text-slate-900 sm:text-sm">Offline-first path</p>
                <p className="mt-1 hidden text-slate-600 sm:block">Practical skills prioritized</p>
              </div>
              <div className="min-w-[185px] snap-start rounded-full border border-slate-200 bg-white/95 px-3.5 py-2 shadow-sm sm:min-w-0 sm:rounded-2xl sm:px-4 sm:py-3">
                <p className="text-xs font-semibold text-slate-900 sm:text-sm">Online reinforcement</p>
                <p className="mt-1 hidden text-slate-600 sm:block">Theory support at home</p>
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
              <div className="mt-3 rounded-xl border border-blue-100 bg-white/95 px-4 py-3 shadow-sm sm:hidden">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4285F4]">
                  Instructor-Led
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Real-road sessions tailored to your learning pace.
                </p>
              </div>
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
        </section>
      </div>

      <section id="plans" className="relative scroll-mt-28 bg-[linear-gradient(180deg,#edf3fb_0%,#eef4fb_100%)] pb-16 pt-12 md:scroll-mt-32 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <RevealOnScroll className="relative mb-12 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#2563eb]">
              <CarFront className="h-4 w-4" />
              Offline Plans
            </div>
            <h2 className="font-[var(--font-landing-display)] text-3xl leading-tight text-slate-950 sm:text-4xl md:text-5xl">
              Pick the lesson package that matches where you are today.
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
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

          <div className="relative grid items-stretch gap-7 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <RevealOnScroll delayMs={120} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <Image
                  src="/landing/offline-lesson-detail.png"
                  alt="Close interior car shot of instructor pointing to mirrors and road signs while student takes notes, professional training atmosphere, neutral tones with subtle blue accents, documentary style."
                  width={1000}
                  height={1200}
                  sizes="(max-width: 1023px) calc(100vw - 2rem), 36vw"
                  className="aspect-[4/3] w-full object-cover object-top sm:aspect-[4/5]"
                />
                <div className="flex flex-1 flex-col space-y-4 p-5 sm:p-6">
                  <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
                    <Clock3 className="h-3.5 w-3.5" />
                    Practical Session Focus
                  </p>
                  <h3 className="font-[var(--font-landing-display)] text-2xl text-slate-900">
                    Learn with direct, in-car feedback from your instructor.
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    Build lane control and confident decision-making through calm, structured
                    in-car coaching.
                  </p>
                  <details className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80">
                    <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-slate-700">
                      <span>Our Driving Program</span>
                      <span className="text-base text-[#2563eb] transition-transform group-open:rotate-90">
                        &gt;
                      </span>
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
                  <div className="mt-auto rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                      Lessons
                    </p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {lessonCards.map((lesson) => (
                        <div
                          key={lesson.title}
                          className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
                        >
                          <p className="text-center text-[0.92rem] font-semibold text-slate-800">
                            {lesson.title}
                          </p>
                          <p className="mt-1 text-center text-xs leading-relaxed text-slate-600">
                            {lesson.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </RevealOnScroll>

            <div className="grid gap-6">
              {offlinePlans.map((plan) => (
                <article
                  key={plan.title}
                  className={`rounded-3xl border p-5 sm:p-7 shadow-[0_12px_30px_rgba(15,23,42,0.1)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(15,23,42,0.14)] ${
                    plan.recommended
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
                        <h3 className="mt-2 text-2xl font-semibold text-slate-900">{plan.title}</h3>
                      </div>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700 sm:text-xs">
                        {plan.pricingLabel}
                      </span>
                    </div>

                    <p className="mt-4 leading-relaxed text-slate-700">{plan.description}</p>

                    {plan.bestFor && (
                      <p className="mt-4 rounded-xl border border-blue-200 bg-white/75 px-4 py-3 text-sm leading-relaxed text-slate-700">
                        <span className="font-semibold text-slate-900">Best for:</span> {plan.bestFor}
                      </p>
                    )}

                    <ul className="mt-5 space-y-2.5">
                      {plan.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2563eb]" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center rounded-xl bg-[#4285F4] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
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

      <section id="online-course" className="scroll-mt-28 bg-white py-12 md:scroll-mt-32 md:py-20">
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
                  <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                    Continue learning off the road with guided modules, quizzes, and
                    certificate-focused progression that supports your practical driving training.
                  </p>

                  <div className="space-y-5">
                    <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
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

                    <div className="grid gap-3 sm:grid-cols-2">
                      <Link
                        href="/online-course-info"
                        className="inline-flex w-full items-center justify-center rounded-xl bg-[#4285F4] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
                      >
                        Explore Online Course Details
                      </Link>
                      <Link
                        href="/lms-course"
                        className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-blue-300 hover:text-[#2563eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
                      >
                        Go to Course Dashboard
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

      <section id="contact" className="scroll-mt-28 bg-[#eaf1fa] py-8 md:scroll-mt-32 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-[2.2rem] border border-blue-100 bg-[#f4f8fe] p-3 sm:rounded-[2.4rem] sm:p-6 md:p-8">
            <div className="mb-3 grid grid-cols-2 gap-2 md:grid-cols-2 md:gap-2.5 xl:grid-cols-4">
              {contactNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[13px] font-medium text-slate-700 shadow-sm sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
                >
                  {note}
                </div>
              ))}
            </div>
            <div className="grid gap-5 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <RevealOnScroll className="h-full">
                <div className="flex h-full flex-col rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:rounded-[2rem] sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
                    Contact
                  </p>
                  <h2 className="mt-3 font-[var(--font-landing-display)] text-3xl leading-tight text-slate-950 sm:mt-4 sm:text-4xl">
                    Tell us your current stage. We will guide your next lesson.
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-700">
                    Choose a starter below and click it. We will auto-fill your message box so
                    you can send your inquiry faster.
                  </p>
                  <div className="mt-auto space-y-2 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
                      Quick message starters
                    </p>
                    <div className="space-y-2.5">
                      {inquiryTemplates.map((template) => (
                        <button
                          key={template.label}
                          type="button"
                          onClick={() => applyInquiryTemplate(template.text)}
                          className="group flex w-full items-center justify-between rounded-xl border border-blue-200 bg-blue-50/55 px-4 py-3 text-left text-sm font-semibold text-[#1d4ed8] transition-colors hover:bg-blue-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
                        >
                          <span>{template.label}</span>
                          <span className="text-base font-bold text-[#2563eb] transition-transform group-hover:translate-x-0.5">
                            &gt;
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delayMs={120} className="h-full">
                <div className="h-full rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.1)] sm:rounded-[2rem] sm:p-9">
                  {formSubmitted ? (
                    <div className="rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-10 text-center">
                      <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                      <h3 className="mt-4 text-2xl font-semibold text-emerald-700">Inquiry sent</h3>
                      <p className="mt-2 text-sm text-emerald-800">
                        Thank you. We received your request and will contact you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="fullName" className="text-sm font-semibold text-slate-800">
                            Full name
                          </label>
                          <input
                            id="fullName"
                            type="text"
                            required
                            placeholder="John Doe"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/30"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-semibold text-slate-800">
                            Phone number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            required
                            placeholder="(902) 555-1234"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/30"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-semibold text-slate-800">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            placeholder="you@email.com"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/30"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="plan" className="text-sm font-semibold text-slate-800">
                            Interested plan
                          </label>
                          <select
                            id="plan"
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/30"
                          >
                            <option>Single Lesson Package</option>
                            <option>Multi Lesson Package</option>
                            <option>Co-Pilot Package</option>
                            <option>Online Course Purchase</option>
                            <option>Not sure yet</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-semibold text-slate-800">
                          Message
                        </label>
                        <textarea
                          ref={messageRef}
                          id="message"
                          required
                          rows={7}
                          placeholder="Tell us your availability and current driving experience."
                          value={messageDraft}
                          onChange={(event) => setMessageDraft(event.target.value)}
                          className="min-h-[190px] w-full resize-y rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/30"
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-2xl bg-[#4285F4] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
                      >
                        Submit Inquiry
                      </button>
                    </form>
                  )}
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
