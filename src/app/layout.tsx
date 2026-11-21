import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const mono = Roboto_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const siteDescription =
  "B Cisse personal portfolio for full-stack software engineering, frontend systems, AI/data products, intelligent automation, and premium web development work.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ballacisse.com"),
  icons: {
    icon: "/images/bdevlogo.png",
  },
  title: {
    default: "B Cisse | Full-Stack Software Engineer",
    template: "%s | B Cisse",
  },
  description: siteDescription,
  keywords: ["Balla Cisse", "B Cisse", "Full-Stack Software Engineer", "AI Engineer", "Frontend Developer", "Data Systems", "Portfolio"],
  authors: [{ name: "Balla Cisse", url: "https://ballacisse.com" }],
  creator: "Balla Cisse",
  openGraph: {
    title: "B Cisse | Full-Stack Software Engineer",
    description: siteDescription,
    url: "https://ballacisse.com",
    siteName: "B PRSNL Webby",
    images: [{ url: "/images/b-cisse-portrait.svg", width: 700, height: 900, alt: "B Cisse portfolio portrait placeholder" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B Cisse | Full-Stack Software Engineer",
    description: siteDescription,
    images: ["/images/b-cisse-portrait.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#05050a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} antialiased`}>{children}</body>
    </html>
  );
}
