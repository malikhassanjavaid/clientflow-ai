import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const newsreader = localFont({
  src: "./fonts/newsreader-latin.woff2",
  variable: "--font-newsreader",
  display: "swap",
  weight: "200 800",
  style: "normal",
  adjustFontFallback: "Times New Roman",
});

export const metadata: Metadata = {
  title: "ClientFlow AI — Clear briefs and client-ready proposals",
  description:
    "ClientFlow helps freelancers turn vague client requests into reviewed discovery questions, clear requirements, and client-ready proposals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
