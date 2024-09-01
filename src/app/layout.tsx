import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./styles/globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Lynbrook DevX Club",
  description: "Gain the tools to build your passion projects.",
  openGraph: {
    // images: "/devxlogoblue.png",
    title: "Lynbrook DevX Club",
    description: "Gain the tools to build your passion projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
