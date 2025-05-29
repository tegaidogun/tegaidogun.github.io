"use client"

import { motion } from "framer-motion"
import { skills } from "@/content-option"
import * as Fa from "react-icons/fa"
import * as Si from "react-icons/si"

export default function Skills() {
  // This function dynamically gets the icon component based on icon name and type
  const getIconComponent = (iconName: string, iconType: string) => {
    if (iconType === "fa") {
      const IconComponent = Fa[iconName as keyof typeof Fa]
      return IconComponent ? (
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
          <IconComponent className="text-xl text-blue-600 dark:text-blue-400" />
        </div>
      ) : null
    } else if (iconType === "si") {
      const IconComponent = Si[iconName as keyof typeof Si]
      return IconComponent ? (
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
          <IconComponent className="text-xl text-blue-600 dark:text-blue-400" />
        </div>
      ) : null
    }
    return null
  }

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">My technical expertise and proficiency levels</p>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 w-full">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    {getIconComponent(skill.icon, skill.iconType)}
                    <span className="text-gray-400 mx-2">—</span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">{skill.value}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
