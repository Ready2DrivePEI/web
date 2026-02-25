import Link from "next/link";
import Navbar from "./components/navbar";
import { 
  CheckCircle2, 
  ShieldCheck, 
  PlayCircle, 
  Award, 
  MessageCircleQuestion, 
  ChevronDown, 
  Laptop, 
  GraduationCap 
} from "lucide-react";

export default function OnlineCoursePage() {
  const faqCategories = [
    {
      title: "Outcome & Recognition",
      icon: <ShieldCheck size={20} className="text-[#4285F4]" />,
      questions: [
        {
          q: "Will I receive a certificate after completing the course?",
          a: "Absolutely. As soon as you complete the final module and quizzes, your digital certificate will be generated immediately for download."
        },
        {
          q: "Is this certificate valid and recognized?",
          a: "Yes. This certificate officially confirms completion of structured training covering essential road rules and theory requirements—perfect for proving your readiness."
        }
      ]
    },
    {
      title: "Ease of Use & Access",
      icon: <Laptop size={20} className="text-[#4285F4]" />,
      questions: [
        {
          q: "How do I access the course after enrolling?",
          a: "You'll get instant access. Once your enrollment is confirmed, all 6 modules will appear on your personal dashboard, ready for you to start learning."
        },
        {
          q: "Can I study on my phone or computer?",
          a: "Both. The platform is fully responsive, meaning you can switch between mobile, tablet, and desktop whenever you like without losing your place."
        },
        {
          q: "Is my progress saved automatically?",
          a: "Yes. Every lesson you finish and every quiz you take is saved in real-time. You can close your browser and pick up exactly where you left off."
        }
      ]
    },
    {
      title: "Academic Support",
      icon: <GraduationCap size={20} className="text-[#4285F4]" />,
      questions: [
        {
          q: "What happens if I fail a quiz?",
          a: "Don't worry—there's no penalty. You can retry quizzes as many times as needed until you feel confident and pass the module."
        },
        {
          q: "How long do I have to complete the course?",
          a: "You have full 90-day access. The course is entirely self-paced, so you can finish it in a weekend or take your time over several weeks."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-[#4285F4] selection:text-white">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        
        {/* Hero Section */}
        <section className="text-center space-y-8 max-w-3xl mx-auto pt-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#4285F4] px-4 py-2 rounded-full text-sm font-semibold border border-blue-100">
            <ShieldCheck size={18} />
            PEI Government Approved
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Master the rules of the road with a <span className="text-[#4285F4]">structured</span> learning
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Progress through 6 structured modules, practical video lessons, and quizzes <br className="hidden md:block" />
            designed to help you complete your training and earn your certificate.
          </p>

          <div className="pt-4">
            <Link
              href="/lms-course"
              className="inline-block bg-[#4285F4] text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors shadow-md shadow-blue-200 active:scale-95"
            >
              Enroll Now
            </Link>
          </div>
        </section>

        {/* Feature Grid */}
        <section id="about" className="grid md:grid-cols-3 gap-6 scroll-mt-24">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <PlayCircle className="text-[#4285F4] mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-3">Interactive Modules</h3>
            <p className="text-gray-600">
              6 complete modules featuring rich illustrations and clear video explanations to keep you engaged.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <CheckCircle2 className="text-[#4285F4] mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
            <p className="text-gray-600">
              Automatic progress tracking and post-section quizzes ensure you understand before moving forward.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <Award className="text-[#4285F4] mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-3">Official Certificate</h3>
            <p className="text-gray-600">
              Upon successful completion, receive a certificate approved by the PEI Government validating your achievement.
            </p>
          </div>
        </section>

        {/* Value Proposition & Pricing Section */}
        <section id="price" className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm scroll-mt-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Why choose this course?</h2>
            <p className="text-gray-600">
              Our system ensures true mastery instead of passive watching.
            </p>
            <ul className="space-y-4">
              {[
                "Unlimited quiz attempts",
                "Full 90-day access period",
                "Step-by-step guided modules",
                "Official completion certificate"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 size={20} className="text-[#4285F4] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center">
            <h3 className="text-lg font-semibold text-gray-500 mb-2">Complete Access</h3>
            <div className="text-5xl font-bold text-gray-900 mb-4">₹4,000</div>
            <p className="text-gray-600 mb-8">
              One-time payment. Full 90-day access.
            </p>
            <Link
              href="/lms-course"
              className="block w-full bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-black transition-all active:scale-95"
            >
              Get Started Today
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="max-w-5xl mx-auto space-y-16 pb-24 scroll-mt-24">
          {/* Main Title Area */}
          <div className="text-center space-y-3 mb-20">
            <div className="flex items-center gap-3 justify-center">
              <MessageCircleQuestion className="text-[#4285F4]" size={28} />
              <h2 className="text-3xl font-bold">Common Questions</h2>
            </div>
            <p className="text-gray-600 italic">Everything you need to know about the training and certification.</p>
          </div>

          {/* Categorized FAQ List */}
          <div className="space-y-8">
            {faqCategories.map((category, catIdx) => (
              <div key={catIdx} className="space-y-4">
                {/* Category Header: Balanced Size & High Attention */}
                <div className="flex items-center gap-3 pb-2 border-b-2 border-blue-50">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Question List */}
                <div className="space-y-4">
                  {category.questions.map((faq, faqIdx) => (
                    <details 
                      key={faqIdx} 
                      className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-blue-200 transition-all"
                    >
                      <summary className="flex items-center justify-between p-6 font-semibold text-lg outline-none text-gray-800 cursor-pointer">
                        {faq.q}
                        <ChevronDown 
                          className="text-gray-400 group-open:rotate-180 group-open:text-[#4285F4] transition-transform duration-300" 
                          size={22} 
                        />
                      </summary>
                      <div className="px-6 pb-6">
                        <div className="pl-5 border-l-2 border-blue-100 ml-1">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
{/* Bold Trust CTA */}
          <div className="mt-24 p-12 bg-blue-900 rounded-[3rem] text-center shadow-2xl shadow-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <ShieldCheck size={120} className="text-white" />
            </div>
            <h3 className="text-white text-2xl font-bold mb-4 relative z-10">Still have a question?</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto relative z-10">
Our team is ready to assist you with enrollment, payment processing, or technical inquiries.            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors relative z-10"
            >
              Contact us
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}