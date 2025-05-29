"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { introdata } from "@/content-option"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const animatedTexts = Object.values(introdata.animated)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = animatedTexts[currentIndex]

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1))

          if (currentText === "") {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % animatedTexts.length)
          }
        } else {
          setCurrentText(current.substring(0, currentText.length + 1))

          if (currentText === current) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, animatedTexts])

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    aboutSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {introdata.title}
            </motion.h1>

            <div className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6 h-12 flex items-center justify-center lg:justify-start">
              <span className="font-semibold">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {introdata.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToNext}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
              >
                Learn More
              </button>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-center"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-2xl">
                <Image
                  src={introdata.your_img_url || "/placeholder.svg"}
                  alt={introdata.title}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-600 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400 animate-bounce" />
      </motion.div>
    </section>
  )
}
