import Link from "next/link";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Navbar from "./components/navbar";
import {
  Award,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Laptop,
  MessageCircleQuestion,
  PlayCircle,
  ShieldCheck,
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

export default function OnlineCoursePage() {
  const faqCategories = [
    {
      title: "Outcome & Recognition",
      icon: <ShieldCheck size={20} className="text-[#4285F4]" />,
      questions: [
        {
          q: "Will I receive a certificate after completing the course?",
          a: "Absolutely. As soon as you complete the final module and quizzes, your digital certificate will be generated immediately for download.",
        },
        {
          q: "Is this certificate valid and recognized?",
          a: "Yes. This certificate officially confirms completion of structured training covering essential road rules and theory requirements, perfect for proving your readiness.",
        },
      ],
    },
    {
      title: "Ease of Use & Access",
      icon: <Laptop size={20} className="text-[#4285F4]" />,
      questions: [
        {
          q: "How do I access the course after enrolling?",
          a: "You'll get instant access. Once your enrollment is confirmed, all 6 modules will appear on your personal dashboard, ready for you to start learning.",
        },
        {
          q: "Can I study on my phone or computer?",
          a: "Both. The platform is fully responsive, meaning you can switch between mobile, tablet, and desktop whenever you like without losing your place.",
        },
        {
          q: "Is my progress saved automatically?",
          a: "Yes. Every lesson you finish and every quiz you take is saved in real-time. You can close your browser and pick up exactly where you left off.",
        },
      ],
    },
    {
      title: "Academic Support",
      icon: <GraduationCap size={20} className="text-[#4285F4]" />,
      questions: [
        {
          q: "What happens if I fail a quiz?",
          a: "Don't worry-there's no penalty. You can retry quizzes as many times as needed until you feel confident and pass the module.",
        },
        {
          q: "How long do I have to complete the course?",
          a: "You have full 90-day access. The course is entirely self-paced, so you can finish it in a weekend or take your time over several weeks.",
        },
      ],
    },
  ];

  return (
    <div
      className={`${displayFont.variable} ${bodyFont.variable} min-h-screen bg-[#f8fbff] font-[var(--font-landing-body)] text-slate-900 selection:bg-[#4285F4] selection:text-white`}
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_6%,rgba(66,133,244,0.18),transparent_42%),radial-gradient(circle_at_92%_2%,rgba(15,23,42,0.08),transparent_32%),linear-gradient(180deg,#f8fbff_0%,#fdfefe_45%,#f8fbff_100%)]" />
        <Navbar />

        <main className="mx-auto max-w-6xl space-y-20 px-6 pb-20 pt-12 md:space-y-24 md:pt-16">
          <section className="mx-auto max-w-3xl space-y-8 pt-6 text-center md:pt-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-[#4285F4] shadow-sm">
              <ShieldCheck size={18} />
              PEI Government Approved
            </div>

            <h1 className="font-[var(--font-landing-display)] text-4xl leading-tight tracking-tight text-slate-900 md:text-5xl">
              Master the rules of the road with a{" "}
              <span className="text-[#4285F4]">structured</span> learning path
            </h1>

            <p className="text-lg leading-relaxed text-slate-600">
              Progress through 6 structured modules, practical video lessons, and quizzes{" "}
              <br className="hidden md:block" />
              designed to help you complete your training and earn your certificate.
            </p>

            <div className="pt-2">
              <Link
                href="/lms-course"
                className="inline-flex items-center justify-center rounded-2xl bg-[#4285F4] px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2 active:scale-[0.99]"
              >
                Enroll Now
              </Link>
            </div>
          </section>

          <section id="about" className="grid scroll-mt-28 gap-6 md:grid-cols-3 md:scroll-mt-32">
            <article className="rounded-[1.75rem] border border-blue-100 bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
              <PlayCircle className="mb-4 text-[#4285F4]" size={32} />
              <h3 className="text-xl font-semibold text-slate-900">Interactive Modules</h3>
              <p className="mt-3 text-slate-600">
                6 complete modules featuring rich illustrations and clear video explanations to keep
                you engaged.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-blue-100 bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
              <CheckCircle2 className="mb-4 text-[#4285F4]" size={32} />
              <h3 className="text-xl font-semibold text-slate-900">Progress Tracking</h3>
              <p className="mt-3 text-slate-600">
                Automatic progress tracking and post-section quizzes ensure you understand before
                moving forward.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-blue-100 bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
              <Award className="mb-4 text-[#4285F4]" size={32} />
              <h3 className="text-xl font-semibold text-slate-900">Official Certificate</h3>
              <p className="mt-3 text-slate-600">
                Upon successful completion, receive a certificate approved by the PEI Government
                validating your achievement.
              </p>
            </article>
          </section>

          <section
            id="price"
            className="grid scroll-mt-28 items-center gap-8 rounded-[2rem] border border-blue-100 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.1)] md:grid-cols-2 md:scroll-mt-32 md:p-12"
          >
            <div className="space-y-6">
              <h2 className="font-[var(--font-landing-display)] text-3xl leading-tight text-slate-900 md:text-4xl">
                Why choose this course?
              </h2>
              <p className="text-lg text-slate-600">
                Our system ensures true mastery instead of passive watching.
              </p>
              <ul className="space-y-4">
                {[
                  "Unlimited quiz attempts",
                  "Full 90-day access period",
                  "Step-by-step guided modules",
                  "Official completion certificate",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base font-medium text-slate-700">
                    <CheckCircle2 size={20} className="shrink-0 text-[#4285F4]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <article className="rounded-[1.75rem] border border-blue-100 bg-blue-50/40 p-8 text-center shadow-[0_10px_26px_rgba(15,23,42,0.08)]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4285F4]">
                Complete Access
              </h3>
              <p className="mt-3 font-[var(--font-landing-display)] text-5xl text-slate-900">$4,000</p>
              <p className="mt-4 text-slate-600">One-time payment. Full 90-day access.</p>
              <Link
                href="/lms-course"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#4285F4] px-8 py-4 text-lg font-semibold text-white shadow-md shadow-blue-200 transition-all hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2 active:scale-[0.99]"
              >
                Get Started Today
              </Link>
            </article>
          </section>

          <section id="faq" className="mx-auto max-w-5xl scroll-mt-28 space-y-14 pb-16 md:scroll-mt-32">
            <div className="mb-14 space-y-3 text-center">
              <div className="flex items-center justify-center gap-3">
                <MessageCircleQuestion className="text-[#4285F4]" size={28} />
                <h2 className="font-[var(--font-landing-display)] text-4xl text-slate-900">
                  Common Questions
                </h2>
              </div>
              <p className="text-slate-600 italic">
                Everything you need to know about the training and certification.
              </p>
            </div>

            <div className="space-y-8">
              {faqCategories.map((category) => (
                <div key={category.title} className="space-y-4">
                  <div className="flex items-center gap-3 border-b-2 border-blue-50 pb-2">
                    <div className="rounded-lg bg-blue-50 p-2">{category.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.questions.map((faq) => (
                      <details
                        key={faq.q}
                        className="group rounded-2xl border border-blue-100 bg-white shadow-sm transition-all hover:border-blue-200"
                      >
                        <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-semibold text-slate-800 outline-none">
                          {faq.q}
                          <ChevronDown
                            className="text-slate-400 transition-transform duration-300 group-open:rotate-180 group-open:text-[#4285F4]"
                            size={22}
                          />
                        </summary>
                        <div className="px-6 pb-6">
                          <div className="ml-1 border-l-2 border-blue-100 pl-5">
                            <p className="leading-relaxed text-slate-600">{faq.a}</p>
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-16 overflow-hidden rounded-[2.2rem] border border-blue-100 bg-white p-8 text-center shadow-[0_18px_45px_rgba(15,23,42,0.12)] md:p-12">
              <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_85%_0%,rgba(66,133,244,0.16),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,251,255,0.95))]" />
              <div className="relative z-10 mx-auto max-w-xl">
                <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#4285F4] shadow-sm">
                  <ShieldCheck size={14} />
                  Support Team
                </p>
                <h3 className="mt-4 font-[var(--font-landing-display)] text-3xl text-slate-900">
                  Still have a question?
                </h3>
                <p className="mt-3 text-lg text-slate-600">
                  Our team is ready to assist you with enrollment, payment processing, or technical
                  inquiries.
                </p>
                <Link
                  href="/#contact"
                  className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#4285F4] px-8 py-3 text-base font-semibold text-white shadow-md shadow-blue-200 transition-all hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
