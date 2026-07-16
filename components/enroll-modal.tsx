"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ContactForm, { inquiryTemplates } from "@/components/contact-form";

interface EnrollModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EnrollModal({ open, onOpenChange }: EnrollModalProps) {
  const [success, setSuccess] = useState(false);

  // When modal closes, reset success state
  useEffect(() => {
    if (!open) {
      setSuccess(false);
    }
  }, [open]);

  // Handle auto-closing on success
  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      onOpenChange(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [success, onOpenChange]);

  // Handle success callback from ContactForm
  const handleSuccess = () => {
    setSuccess(true);
  };

  const onlineCourseTemplate = inquiryTemplates.find(
    (t) => t.label === "Online course purchase"
  )?.text;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="flex flex-col gap-0 sm:max-w-[500px] bg-white px-6 md:px-8 pt-8 pb-5 max-h-[90vh] overflow-y-auto"
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="space-y-1.5 text-center">
          <DialogTitle className="text-2xl font-bold tracking-tight text-slate-900">
            {success ? "Registration Received!" : "Enroll in the Online Driving Course"}
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-600">
            {success 
              ? "We have received your enrollment request and will reach out shortly." 
              : "Share your details below and we'll email you the payment link and account setup steps."
            }
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <ContactForm
            defaultPlan="Online Course Purchase"
            defaultMessage={onlineCourseTemplate}
            hideTemplates={true}
            onSuccess={handleSuccess}
          />
        </div>

        {success && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => onOpenChange(false)}
              className="w-full rounded-2xl bg-emerald-600 py-3 text-sm font-semibold text-white shadow-md hover:bg-emerald-700 transition-colors"
            >
              Close
            </button>
          </div>
        )}

        {/* Small log-in redirect for users who clicked by mistake */}
        {!success && (
          <div className="mt-4 text-center text-xs text-slate-500 border-t border-slate-100 pt-4">
            Already enrolled?{" "}
            <Link 
              href="/login" 
              className="font-semibold text-[#2563eb] hover:underline"
              onClick={() => onOpenChange(false)}
            >
              Log in here
            </Link>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
