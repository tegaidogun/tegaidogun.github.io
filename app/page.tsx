"use client"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Services from "../components/Services"
import Portfolio from "../components/Portfolio"
import Blog from "../components/Blog"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
