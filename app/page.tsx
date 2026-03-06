"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CarFront, Send } from "lucide-react";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000); // reset after 4s
  };

  return (
      <main className="bg-white text-neutral-900 scroll-smooth">
        {/* Navbar - Kept exactly as you provided */}
        <header
          className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
            isScrolled
              ? "bg-white/90 backdrop-blur-md border-neutral-200 shadow-sm"
              : "bg-white border-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Left: Brand Name with Icon */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-50 p-1.5 rounded-lg group-hover:bg-blue-100 transition-colors">
                <CarFront className="text-[#4285F4]" size={20} />
              </div>
              <span className="text-lg font-bold tracking-tight text-gray-900">
                Ready2Drive <span className="text-[#4285F4]">PEI</span>
              </span>
            </Link>

            {/* Center: Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
              <a href="#home" className="hover:text-[#4285F4] transition-colors">
                Home
              </a>
              <Link href="/online-course-info" className="hover:text-[#4285F4] transition-colors">
                Online Course
              </Link>
              <a href="#programs" className="hover:text-[#4285F4] transition-colors">
                Programs
              </a>
              <a href="#contact" className="hover:text-[#4285F4] transition-colors">
                Contact
              </a>
            </nav>

            {/* Right: Get Started Button */}
            <div className="flex items-center">
              <Link
                href="/login"
                className="bg-[#4285F4] text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-all shadow-md shadow-blue-100 active:scale-95"
              >
                Get Started
              </Link>
            </div>
          </div>
        </header>

      {/* Hero - Kept & Lightly Polished */}
      {/* Enhanced Hero Section */}
<section id="home" className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
  {/* Subtle Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 -z-10" />

  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      {/* Left - Text Content */}
      <div className="space-y-8 md:space-y-10">

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tighter text-gray-900">
          Learn to Drive<br />
          with <span className="text-[#4285F4]">Confidence</span> in PEI
        </h1>

        <p className="text-xl text-neutral-600 max-w-lg leading-relaxed">
          Professional driving lessons and structured online preparation to help you pass your test and become a safe, confident driver.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-0">
          <a
            href="#programs"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#4285F4] text-white font-semibold rounded-2xl text-lg hover:bg-blue-600 active:scale-[0.97] transition-all shadow-lg shadow-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4285F4]"
          >
            Book a Lesson
          </a>
          
          <Link
            href="/online-course-info"
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-[#4285F4] text-[#4285F4] font-semibold rounded-2xl text-lg hover:bg-blue-50 active:scale-[0.97] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4285F4]"
          >
            Explore Online Course
          </Link>
        </div>
      </div>

      {/* Right - Image with Floating Instructor Card */}
      <div className="relative">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/70 bg-white">
          <Image
            src="/driving-hero.png"
            alt="Professional driving lesson in Prince Edward Island"
            width={720}
            height={520}
            priority
            className="w-full h-auto object-cover"
          />
          
          {/* Subtle Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Floating Instructor Badge */}
        <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-gray-100 max-w-xs">
          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
            <span className="text-2xl">👨‍🏫</span>
          </div>
          <div>
            <div className="font-semibold text-sm">Taught by an expert</div>
            <div className="text-green-600 text-xs font-medium">10+ years experience</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Programs - Kept & Slightly Refined */}
      <section id="programs" className="py-24 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold">Driving Programs</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Flexible, focused sessions tailored to your experience level and test preparation needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-200">
              <h3 className="text-xl font-semibold mb-4">Short Session (Under 1 Hour)</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Ideal for targeted practice, specific maneuver refinement, and quick preparation before your road test.
              </p>
              <div className="text-lg font-semibold mb-6">Pricing Available Upon Request</div>
              <a href="#contact" className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600">
                Book Now
              </a>
            </div>

            <div className="p-8 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-200">
              <h3 className="text-xl font-semibold mb-4">Extended Session (2+ Hours)</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Comprehensive training covering real-world road conditions, defensive driving, and complete exam preparation.
              </p>
              <div className="text-lg font-semibold mb-6">Pricing Available Upon Request</div>
              <a href="#contact" className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form - Stylish & Modern */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
            <p className="mt-4 text-lg text-neutral-600">
              Ready to start your driving journey? Send us a message and we’ll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-10">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-4xl">🎉</span>
                </div>
                <h3 className="text-2xl font-semibold text-green-600">Message Sent!</h3>
                <p className="text-neutral-600 mt-3">Thank you. We’ll reply soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:outline-none transition"
                      placeholder="(902) 555-1234"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:outline-none transition"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-3xl border border-gray-200 focus:border-blue-500 focus:outline-none resize-y transition"
                    placeholder="I'm interested in booking lessons..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4285F4] hover:bg-blue-600 active:scale-95 transition-all text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-3 shadow-md shadow-blue-200"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}