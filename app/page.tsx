"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white text-neutral-900 scroll-smooth">

      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">
            Ready2Drive PEI
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#home"
              className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Home
            </a>

            <Link
              href="/online-course"
              className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Online Course
            </Link>

            <a
              href="#programs"
              className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Programs
            </a>

            <a
              href="#contact"
              className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Contact
            </a>

            <Link
              href="/login"
              className="ml-4 inline-flex items-center justify-center min-h-[44px] px-5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="pt-28 pb-24 px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Learn to Drive with Confidence in Prince Edward Island
            </h1>
            <div className="w-16 h-1 bg-blue-600 rounded" />

            <p className="text-lg text-neutral-600 max-w-xl leading-relaxed">
              Professional offline driving lessons and structured online preparation designed to help you pass your test and build real road confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#programs"
                className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                Book a Lesson
              </a>

              <Link
                href="/online"
                className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-md border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                Explore Online Course
              </Link>
            </div>
          </div>

          <div className="relative w-full h-80 md:h-[460px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/driving-hero.jpg"
              alt="Driving instructor teaching student in Prince Edward Island"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* Programs */}
      <section
        id="programs"
        className="py-24 px-6 bg-neutral-50"
      >
        <div className="max-w-6xl mx-auto space-y-16">

          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Driving Programs
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Flexible, focused sessions tailored to your experience level and test preparation needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Short Session */}
            <div className="p-8 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-200">
              <h3 className="text-xl font-semibold mb-4">
                Short Session (Under 1 Hour)
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Ideal for targeted practice, specific maneuver refinement, and quick preparation before your road test.
              </p>
              <div className="text-lg font-semibold mb-6">
                Pricing Available Upon Request
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                Book Now
              </a>
            </div>

            {/* Extended Session */}
            <div className="p-8 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-200">
              <h3 className="text-xl font-semibold mb-4">
                Extended Session (2+ Hours)
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Comprehensive training covering real-world road conditions, defensive driving, and complete exam preparation.
              </p>
              <div className="text-lg font-semibold mb-6">
                Pricing Available Upon Request
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                Book Now
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Contact Ready2Drive PEI
          </h2>

          <p className="text-neutral-600 leading-relaxed">
            Have questions about our programs or ready to schedule your lesson? Get in touch and we’ll help you take the next step toward safe, confident driving.
          </p>

          <div className="space-y-2 text-neutral-800 font-medium">
            <div>Email: contact@ready2drivepei.com</div>
            <div>Phone: (000) 000-0000</div>
          </div>
        </div>
      </section>

    </main>
  );
}
