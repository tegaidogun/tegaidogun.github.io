import type React from "react"
import type { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import "./globals.css"
import { meta } from "../content_option"
import { ThemeProvider } from "@/context/ThemeContext"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
})

export const metadata: Metadata = {
  metadataBase: new URL(meta.siteUrl),
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  authors: [{ name: meta.author }],
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.siteUrl,
    siteName: meta.title,
    images: [
      {
        url: meta.image,
        width: 1200,
        height: 630,
        alt: meta.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [meta.image],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ubuntu.variable} font-ubuntu antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
