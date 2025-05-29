"use client"

import { motion } from "framer-motion"
import { services } from "@/content-option"
import { Code, Search, Gamepad2, Brain, BarChart3, Globe } from "lucide-react"

const serviceIcons = {
  "Software Development": Code,
  "Research & Development": Search,
  "Game Development": Gamepad2,
  "Artificial Intelligence": Brain,
  "Data Science": BarChart3,
  "Web Development": Globe,
}

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">What I can help you with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {services.map((service, index) => {
            const IconComponent = serviceIcons[service.title as keyof typeof serviceIcons] || Code

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
