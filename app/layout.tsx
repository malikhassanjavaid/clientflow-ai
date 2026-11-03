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
  title: "ClientFlow AI — From vague requests to clear proposals",
  description:
    "ClientFlow AI helps freelancers turn unclear client requests into reviewed discovery questions, requirements, and professional proposals.",
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
