"use client"

import { motion } from "framer-motion"
import { dataportfolio } from "@/content-option"
import { ExternalLink, Github } from "lucide-react"
import {
  SiRust,
  SiUnity,
  SiPython,
  SiJupyter,
  SiHtml5,
  SiMarkdown,
  SiCplusplus,
  SiJavascript,
  SiCss3,
} from "react-icons/si"

const iconMap = {
  rust: SiRust,
  unity: SiUnity,
  python: SiPython,
  jupyter: SiJupyter,
  html: SiHtml5,
  markdown: SiMarkdown,
  cplusplus: SiCplusplus,
  javascript: SiJavascript,
  css: SiCss3,
  github: Github,
}

export default function Portfolio() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Portfolio</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Some of my recent projects and work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {dataportfolio.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.icons.map((iconName, iconIndex) => {
                    const IconComponent = iconMap[iconName as keyof typeof iconMap]
                    return IconComponent ? (
                      <div
                        key={iconIndex}
                        className="w-8 h-8 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-sm"
                      >
                        <IconComponent className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </div>
                    ) : null
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
