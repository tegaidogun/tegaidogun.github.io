"use client"

import { motion } from "framer-motion"
import { socialprofils, logotext } from "@/content-option"
import { Github, Linkedin, Twitter, Youtube } from "lucide-react"

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">{logotext}</h3>

          <div className="flex justify-center space-x-6 mb-8">
            {Object.entries(socialprofils).map(([platform, url]) => {
              const IconComponent = socialIcons[platform as keyof typeof socialIcons]
              return IconComponent ? (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              ) : null
            })}
          </div>

          <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
            <p className="text-gray-400">
              © {currentYear} {logotext}. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
