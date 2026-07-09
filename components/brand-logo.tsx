import Link from "next/link";
import { CarFront } from "lucide-react";

interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
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
  );
}
