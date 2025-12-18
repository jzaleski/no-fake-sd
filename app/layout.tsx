import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const generateMetadata = async (): Promise<Metadata> => {
  const headersList = await headers();
  const host = headersList.get("host") || "nofakesd.com";
  const domain = host.replace(/^www\./, "");
  const baseUrl = process.env.NEXT_PUBLIC_CANONICAL_BASE_URL || "https://www.nofakesd.com";

  return {
    metadataBase: new URL(baseUrl),
    title: "No Fake SD - Service Dog Advocacy",
    description: `Promoting awareness and education about service dogs and service dog fraud. Contact us or visit ${domain}`,
    keywords:
      "service dogs, service dog advocacy, service dog fraud, legitimate service dogs, ADA service dogs",
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "No Fake SD - Service Dog Advocacy",
      description: `Promoting awareness and education about service dogs and service dog fraud. Visit ${domain}`,
      url: "/",
      siteName: "No Fake SD",
      images: [
        {
          url: "/images/hero.webp",
          width: 1200,
          height: 630,
          alt: "No Fake SD - Service Dog Advocacy",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "No Fake SD - Service Dog Advocacy",
      description: `Promoting awareness and education about service dogs and service dog fraud. Visit ${domain}`,
      images: ["/images/hero.webp"],
    },
  };
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED === "true" ? <Analytics /> : null}
        {process.env.NEXT_PUBLIC_VERCEL_SPEED_INSIGHTS_ENABLED === "true" ? (
          <SpeedInsights />
        ) : null}
      </body>
    </html>
  );
};

export default RootLayout;
