import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ready2Drive PEI",
  description:
    "Professional driving lessons and structured online driving courses in Prince Edward Island.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-neutral-50 text-neutral-900 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}