import type { Metadata } from "next"
import { meta } from "@/content-option"
import Hero from "@/components/hero"
import About from "@/components/about"
import WorkTimeline from "@/components/work-timeline"
import Skills from "@/components/skills"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: "software developer, computer science, portfolio, Eric Idogun",
  authors: [{ name: meta.title }],
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <About />
      <WorkTimeline />
      <Skills />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
