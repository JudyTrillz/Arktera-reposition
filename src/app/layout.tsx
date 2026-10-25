import type { Metadata } from "next";
import { MotionConfig } from "motion/react";
import { bebasNeue, inter } from "@/lib/fonts";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { ToastProvider } from "@/components/ui/toast";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arktera Systems | Find What's Holding Back Your Revenue",
    template: "%s | Arktera Systems",
  },
  description:
    "Arktera Systems helps service businesses uncover and fix the problems stopping them from getting more customers, winning more sales, and growing revenue.",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Arktera Systems | Find What's Holding Back Your Revenue",
    description:
      "We find the cause, design the solution, and help put it into action.",
    url: siteUrl,
    siteName: "Arktera Systems",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arktera Systems | Find What's Holding Back Your Revenue",
    description:
      "We find the cause, design the solution, and help put it into action.",
  },
};

export const viewport = {
  themeColor: "#0A0A0C",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="min-h-dvh bg-ink text-paper antialiased selection:bg-accent selection:text-paper">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-paper focus:px-5 focus:py-3 focus:font-sans focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to main content
        </a>
        <MotionConfig reducedMotion="user">
          <LoadingScreen />
          <CustomCursor />
          <ToastProvider>{children}</ToastProvider>
          <ScrollToTop />
        </MotionConfig>
      </body>
    </html>
  );
}
