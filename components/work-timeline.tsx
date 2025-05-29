"use client"

import { motion } from "framer-motion"
import { worktimeline } from "@/content-option"
import { MapPin, Calendar, ChevronRight } from "lucide-react"

export default function WorkTimeline() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">My professional journey and achievements</p>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4">
          {worktimeline.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 ml-8 relative w-full">
                <div className="absolute -left-4 top-6 w-8 h-8 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                {index !== worktimeline.length - 1 && (
                  <div className="absolute -left-2 top-14 w-1 h-full bg-gray-200 dark:bg-gray-700"></div>
                )}

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{work.jobtitle}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{work.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {work.date}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {work.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">{work.description}</p>

                <div className="space-y-2">
                  {work.duties.map((duty, dutyIndex) => (
                    <div key={dutyIndex} className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{duty}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
