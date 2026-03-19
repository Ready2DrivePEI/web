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

const offlinePlans = [
  {
    title: "Single Lesson Package",
    duration: "Around 1 hour",
    description:
      "This course is designed for drivers who need just one class of driving.",
    points: ["One class is around 1 hour."],
  },
  {
    title: "Multi Lesson Package",
    duration: "4.5 to 6 hours",
    description:
      "This course is designed for drivers who need multiple lessons to improve their driving skills.",
    points: ["We offer packages of 4.5 to 6 hour lessons."],
  },
  {
    title: "Co-Pilot Package",
    duration: "Package pricing",
    description: "Select test-day support with or without a one-hour lesson add-on.",
    points: [
      "Co-pilot and vehicle only: $75 + HST",
      "1 hour lesson + co-pilot and vehicle: $130 + HST",
    ],
  },
];

const trustSignals = [
  "PEI-focused instructor guidance",
  "Practical, one-on-one road coaching",
  "Structured online theory now available",
  "Clear progress path from first lesson to exam day",
];

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const lastScrollY = useRef(0);
  const navDirection = useRef<"up" | "down" | null>(null);
  const directionalDistance = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      const absDelta = Math.abs(delta);

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

  return (
    <main
      id="home"
      className={`${displayFont.variable} ${bodyFont.variable} bg-[#f8fbff] font-[var(--font-landing-body)] text-slate-900`}
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(66,133,244,0.2),transparent_44%),radial-gradient(circle_at_90%_5%,rgba(15,23,42,0.1),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#fdfefe_42%,#f8fbff_100%)]" />

        <header
          className={`fixed inset-x-0 top-0 z-[100] border-b transform-gpu transition-[transform,opacity,background-color,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
            isNavVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } ${
            isScrolled
              ? "border-blue-100 bg-white/85 shadow-[0_10px_35px_rgba(15,23,42,0.1)] backdrop-blur-xl"
              : "border-transparent bg-white/65 backdrop-blur-lg"
          }`}
        >
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
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

            <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-[#4285F4] focus-visible:text-[#4285F4] focus-visible:outline-none"
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
              className="border-t border-blue-100 bg-white/95 px-6 pb-6 pt-4 shadow-lg backdrop-blur-xl md:hidden"
            >
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-[#4285F4]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-slate-700"
                >
                  Login
                </Link>
                <a
                  href="#plans"
                  onClick={closeMobileMenu}
                  className="flex-1 rounded-lg bg-[#4285F4] px-4 py-2 text-center text-sm font-semibold text-white"
                >
                  View Plans
                </a>
              </div>
            </div>
          )}
        </header>

        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-32 md:gap-16 md:pt-40 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="landing-reveal space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#4285F4] shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Licensed Driving Instruction in PEI
            </div>
            <h1 className="font-[var(--font-landing-display)] text-5xl leading-[1.03] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Practical driving lessons built for confidence on real roads.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Train one-on-one with a focused instructor, then strengthen your theory with our new
              online course modules. One learning path. One clear result.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#plans"
                className="inline-flex items-center justify-center rounded-2xl bg-[#4285F4] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
              >
                See Offline Lesson Plans
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <Link
                href="/online-course-info"
                className="inline-flex items-center justify-center rounded-2xl border border-blue-200 bg-white px-8 py-4 text-base font-semibold text-[#4285F4] transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
              >
                Explore the New Online Course
              </Link>
            </div>
            <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
              <div className="rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm">
                <p className="font-semibold text-slate-900">One-on-one coaching</p>
                <p className="mt-1 text-slate-500">Personalized road training</p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm">
                <p className="font-semibold text-slate-900">Offline-first path</p>
                <p className="mt-1 text-slate-500">Practical skills prioritized</p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm">
                <p className="font-semibold text-slate-900">New online upgrade</p>
                <p className="mt-1 text-slate-500">Theory support at home</p>
              </div>
            </div>
          </div>

          <div className="landing-reveal relative" style={{ animationDelay: "120ms" }}>
            <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_32px_70px_rgba(15,23,42,0.18)]">
              <Image
                src="/landing/hero-offline-premium.png"
                alt="Editorial wide-angle photo of a calm professional driving instructor coaching a young adult in a modern car on a clean Prince Edward Island suburban street during golden hour, natural light, authentic candid style, high detail, trust-focused composition."
                width={1200}
                height={900}
                priority
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-5 rounded-2xl border border-blue-100 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm sm:left-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4285F4]">
                Instructor-Led
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Real-road sessions tailored to your learning pace.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section id="plans" className="scroll-mt-28 py-20 md:scroll-mt-32 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative">
            <div className="landing-reveal mb-12 max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4285F4]">
                Offline Plans
              </p>
              <h2 className="font-[var(--font-landing-display)] text-4xl leading-tight text-slate-900 md:text-5xl">
                Pick the lesson style that fits your current stage.
              </h2>
              <p className="text-lg text-slate-600">
                Every plan leads directly to instructor support
                through our on-page inquiry flow.
              </p>
            </div>

            <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <article
                className="landing-reveal overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
                style={{ animationDelay: "120ms" }}
              >
                  <Image
                    src="/landing/offline-lesson-detail.png"
                    alt="Close interior car shot of instructor pointing to mirrors and road signs while student takes notes, professional training atmosphere, neutral tones with subtle blue accents, documentary style."
                    width={1000}
                    height={1200}
                    className="aspect-[5/6] w-full object-cover object-top"
                />
                <div className="space-y-3 p-6">
                  <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#4285F4]">
                    <Clock3 className="h-3.5 w-3.5" />
                    Practical Session Focus
                  </p>
                  <h3 className="font-[var(--font-landing-display)] text-2xl text-slate-900">
                    Learn with direct, in-car feedback from your instructor.
                  </h3>
                  <p className="text-slate-600">
                    Build road awareness, mirror routine, lane control, and confident decision-making
                    with structured live practice.
                  </p>
                </div>
              </article>

              <div className="grid gap-6">
                {offlinePlans.map((plan, index) => (
                  <article
                    key={plan.title}
                    className="landing-reveal rounded-3xl border border-blue-100 bg-white p-7 shadow-[0_12px_30px_rgba(15,23,42,0.1)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(15,23,42,0.15)]"
                    style={{ animationDelay: `${200 + index * 80}ms` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4285F4]">
                          {plan.duration}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-slate-900">{plan.title}</h3>
                      </div>
                      <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#4285F4]">
                        Pricing on request
                      </span>
                    </div>

                    <p className="mt-4 text-slate-600">{plan.description}</p>

                    <ul className="mt-5 space-y-2">
                      {plan.points.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-[#4285F4]" />
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
        </div>
      </section>

      <section id="online-course" className="scroll-mt-28 pb-16 md:scroll-mt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative">
            <div className="landing-reveal overflow-hidden rounded-[2.2rem] border border-blue-100 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
              <div className="grid items-center gap-10 px-6 py-8 md:px-10 md:py-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#4285F4]">
                    <Sparkles className="h-3.5 w-3.5" />
                    New Addition
                  </div>
                  <h2 className="font-[var(--font-landing-display)] text-4xl leading-tight text-slate-900 md:text-5xl">
                    Online theory course that complements your road sessions.
                  </h2>
                  <p className="text-lg text-slate-600">
                    Continue learning off the road with guided modules, quizzes, and certificate-focused
                    progression that supports your practical driving training.
                  </p>

                  <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                    <li className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/40 px-3 py-2">
                      <BookOpenCheck className="h-4 w-4 text-[#4285F4]" />
                      Structured multi-module lessons
                    </li>
                    <li className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/40 px-3 py-2">
                      <CheckCircle2 className="h-4 w-4 text-[#4285F4]" />
                      Unlimited quiz attempts
                    </li>
                    <li className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/40 px-3 py-2">
                      <Award className="h-4 w-4 text-[#4285F4]" />
                      Completion certificate
                    </li>
                    <li className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/40 px-3 py-2">
                      <ShieldCheck className="h-4 w-4 text-[#4285F4]" />
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
                    className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-blue-300 hover:text-[#4285F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
                  >
                    Go to Course Dashboard
                  </Link>
                </div>
                </div>

                <div className="landing-reveal" style={{ animationDelay: "140ms" }}>
                  <div className="overflow-hidden rounded-3xl border border-blue-100">
                    <Image
                      src="/landing/online-course-new-addition.png"
                      alt=" Cinematic laptop-and-phone desk scene showing a driving theory e-learning dashboard with progress modules, blue and white UI theme, premium educational brand feel, soft shadows, realistic photography."
                      width={1200}
                      height={900}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <ul className="landing-reveal grid gap-4 md:grid-cols-2 lg:grid-cols-4" style={{ animationDelay: "80ms" }}>
            {trustSignals.map((signal) => (
              <li
                key={signal}
                className="rounded-2xl border border-blue-100 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
              >
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 pb-12 md:scroll-mt-32 md:pb-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="landing-reveal rounded-[2rem] border border-blue-100 bg-white p-8 shadow-[0_14px_40px_rgba(15,23,42,0.1)]">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4285F4]">Contact</p>
            <h2 className="mt-4 font-[var(--font-landing-display)] text-4xl leading-tight text-slate-900">
              Tell us your goals and we will recommend your next lesson.
            </h2>
            <p className="mt-4 text-slate-600">
              Share your current driving stage, availability, and which plan interests you. We
              normally respond within one business day.
            </p>
            <div className="mt-8 space-y-3 text-sm text-slate-600">
              <p className="rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3">
                Primary path: Offline lesson inquiry first.
              </p>
              <p className="rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3">
                Optional add-on: Online course access after plan discussion.
              </p>
            </div>
          </div>

          <div
            className="landing-reveal rounded-[2rem] border border-blue-100 bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.12)] sm:p-9"
            style={{ animationDelay: "120ms" }}
          >
            {formSubmitted ? (
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-10 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                <h3 className="mt-4 text-2xl font-semibold text-emerald-700">Inquiry sent</h3>
                <p className="mt-2 text-sm text-emerald-800">
                  Thank you. We received your request and will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-semibold text-slate-700">
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
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
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
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">
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
                    <label htmlFor="plan" className="text-sm font-semibold text-slate-700">
                      Interested plan
                    </label>
                    <select
                      id="plan"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/30"
                    >
                      <option>Focused Skill Session</option>
                      <option>Road Test Intensive</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us your availability and current driving experience."
                    className="w-full resize-y rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/30"
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
        </div>
      </section>

      <footer className="border-t border-blue-100/80 bg-white/70 py-6 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
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

      <style jsx global>{`
        @media (prefers-reduced-motion: no-preference) {
          .landing-reveal {
            opacity: 0;
            transform: translateY(24px);
            animation: landing-fade-up 760ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .landing-reveal {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }

        @keyframes landing-fade-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
