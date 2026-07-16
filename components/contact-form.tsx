"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { 
  User, 
  Phone, 
  Mail, 
  CreditCard, 
  ChevronDown, 
  Pencil, 
  Loader2, 
  Send, 
  ShieldCheck, 
  CheckCircle2 
} from "lucide-react";
import { sendContactInquiry } from "@/app/actions/contact";
import { contactSchema } from "@/lib/contact-schema";

export const inquiryTemplates = [
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

interface ContactFormProps {
  defaultPlan?: string;
  defaultMessage?: string;
  hideTemplates?: boolean;
  onSuccess?: () => void;
}

export default function ContactForm({
  defaultPlan,
  defaultMessage,
  hideTemplates = false,
  onSuccess,
}: ContactFormProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [messageDraft, setMessageDraft] = useState(defaultMessage ?? "");

  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const planSelectRef = useRef<HTMLSelectElement | null>(null);

  // Sync props to state if they change after mount (e.g., landing page URLSearchParams delay)
  useEffect(() => {
    if (defaultMessage !== undefined) {
      setMessageDraft(defaultMessage);
    }
  }, [defaultMessage]);

  useEffect(() => {
    if (defaultPlan !== undefined && planSelectRef.current) {
      planSelectRef.current.value = defaultPlan;
    }
  }, [defaultPlan]);

  const applyInquiryTemplate = (text: string) => {
    setMessageDraft(text);
    window.requestAnimationFrame(() => {
      if (messageRef.current) {
        messageRef.current.focus();
        messageRef.current.setSelectionRange(text.length, text.length);
      }
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(event.currentTarget);
    
    // Generate UUID immediately before submission for duplicate check safety
    const submissionId = crypto.randomUUID();
    formData.append("submissionId", submissionId);

    // Perform client-side Zod validation
    const rawData = {
      submissionId,
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      plan: formData.get("plan"),
      message: formData.get("message"),
    };

    const validation = contactSchema.safeParse(rawData);
    if (!validation.success) {
      const firstError = validation.error.issues[0]?.message || "Validation failed.";
      setSubmitError(firstError);
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await sendContactInquiry(formData);
      if (result.success) {
        setFormSubmitted(true);
        event.currentTarget.reset();
        setMessageDraft("");
        if (onSuccess) {
          onSuccess();
        }
      } else {
        setSubmitError(result.message || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("[contact-form] Submission error:", err);
      setSubmitError("Failed to submit inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formSubmitted) {
    return (
      <div className="flex min-h-[400px] flex-col justify-center rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-10 text-center animate-in fade-in duration-300">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <h3 className="mt-4 text-2xl font-semibold text-emerald-700">Inquiry sent</h3>
        <p className="mt-2 text-sm text-emerald-800">
          Thank you. We received your request and will contact you soon.
        </p>
      </div>
    );
  }

  const gridClass = hideTemplates ? "grid gap-5" : "grid gap-5 sm:grid-cols-2";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-5 sm:space-y-6">
      {/* Honeypot field for bot spam detection */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0 pointer-events-none"
      />

      <div className={gridClass}>
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-semibold text-slate-800">
            Full name
          </label>
          <div className="relative flex items-center">
            <User className="absolute left-4 h-4 w-4 text-slate-500 pointer-events-none" />
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="John Doe"
              autoComplete="name"
              className="w-full rounded-xl border border-slate-300 pl-11 pr-4 py-3 text-sm text-slate-900 transition-all focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-semibold text-slate-800">
            Phone number
          </label>
          <div className="relative flex items-center">
            <Phone className="absolute left-4 h-4 w-4 text-slate-500 pointer-events-none" />
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="(902) 555-1234"
              autoComplete="tel"
              className="w-full rounded-xl border border-slate-300 pl-11 pr-4 py-3 text-sm text-slate-900 transition-all focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20"
            />
          </div>
        </div>
      </div>

      <div className={gridClass}>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-slate-800">
            Email
          </label>
          <div className="relative flex items-center">
            <Mail className="absolute left-4 h-4 w-4 text-slate-500 pointer-events-none" />
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              autoComplete="email"
              className="w-full rounded-xl border border-slate-300 pl-11 pr-4 py-3 text-sm text-slate-900 transition-all focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="plan" className="text-sm font-semibold text-slate-800">
            Interested plan
          </label>
          <div className="relative flex items-center">
            <CreditCard className="absolute left-4 h-4 w-4 text-slate-500 pointer-events-none" />
            <select
              ref={planSelectRef}
              id="plan"
              name="plan"
              defaultValue={defaultPlan}
              className="w-full appearance-none rounded-xl border border-slate-300 bg-white pl-11 pr-10 py-3 text-sm text-slate-900 transition-all focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20"
            >
              <option>Single Lesson Package</option>
              <option>Multi Lesson Package</option>
              <option>Co-Pilot Package</option>
              <option>Online Course Purchase</option>
              <option>Not sure yet</option>
            </select>
            <ChevronDown className="absolute right-4 h-4 w-4 text-slate-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {hideTemplates ? (
        <input type="hidden" name="message" value={messageDraft} />
      ) : (
        <div className="space-y-2 flex-1 flex flex-col">
          <label htmlFor="message" className="text-sm font-semibold text-slate-800">
            Message
          </label>
          <div className="flex gap-2 overflow-x-auto pb-1.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:hidden">
            {inquiryTemplates.map((template) => (
              <button
                key={template.label}
                type="button"
                onClick={() => applyInquiryTemplate(template.text)}
                className="shrink-0 rounded-full border border-blue-200 bg-blue-50/70 px-3 py-1.5 text-xs font-semibold text-blue-500 transition-colors active:bg-blue-100"
              >
                {template.label}
              </button>
            ))}
          </div>
          <div className="relative flex-1 flex flex-col">
            <Pencil className="absolute left-4 top-3.5 h-4 w-4 text-slate-500 pointer-events-none" />
            <textarea
              ref={messageRef}
              id="message"
              name="message"
              required
              maxLength={500}
              rows={5}
              placeholder="Any questions or specific requirements?"
              value={messageDraft}
              onChange={(event) => setMessageDraft(event.target.value)}
              className="w-full resize-y rounded-2xl border border-slate-300 pl-11 pr-16 py-3 text-sm text-slate-900 transition-all focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 sm:min-h-[150px] flex-1"
            />
            <span className="absolute bottom-3 right-4 text-[10px] font-semibold text-slate-400 select-none pointer-events-none">
              {messageDraft.length} / 500
            </span>
          </div>
        </div>
      )}

      {submitError && (
        <div aria-live="polite" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {submitError}
        </div>
      )}

      <div className="space-y-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-500/10 transition-all hover:from-[#1d4ed8] hover:to-[#1e40af] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 disabled:from-blue-400 disabled:to-blue-500 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
        </button>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
          <span>No spam. No pressure. Just a real conversation.</span>
        </div>
      </div>
    </form>
  );
}
