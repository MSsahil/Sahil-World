import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SAHIL - Traveler, Creator & Developer",
  description:
    "Join Sahil on adventures across Asia. Authentic travel stories, genuine product recommendations, and creative projects.",
  keywords: ["travel", "lifestyle", "reviews", "creator", "design", "development"],
  openGraph: {
    title: "SAHIL - Traveler, Creator & Developer",
    description: "Authentic travel experiences, honest reviews, and creative work",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
