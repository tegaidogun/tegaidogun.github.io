"use client"

import { motion } from "framer-motion"
import { dataabout } from "@/content-option"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">{dataabout.title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center">{dataabout.aboutme}</p>
        </motion.div>
      </div>
    </section>
  )
}
