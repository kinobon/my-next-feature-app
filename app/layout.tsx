import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aurora Control Center",
    template: "%s | Aurora Control Center",
  },
  description:
    "モダンな管理画面を Next.js 16 のベストプラクティスで構築したデモアプリです。",
  keywords: [
    "Next.js 16",
    "Partial Prerendering",
    "React Suspense",
    "Admin Dashboard",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Aurora Control Center",
    description:
      "Next.js 16 の App Router と最新機能を活用した管理画面モックアップ",
    url: "https://example.com",
    siteName: "Aurora Control Center",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
