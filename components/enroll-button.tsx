"use client";

import { useState, type ReactNode } from "react";
import EnrollModal from "@/components/enroll-modal";

interface EnrollButtonProps {
  className?: string;
  children: ReactNode;
}

export default function EnrollButton({ className, children }: EnrollButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        type="button" 
        className={className} 
        onClick={() => setIsOpen(true)}
      >
        {children}
      </button>
      <EnrollModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
