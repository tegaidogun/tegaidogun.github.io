"use client"

import { motion } from "framer-motion"
import { blogposts } from "@/content-option"
import { ExternalLink, Calendar } from "lucide-react"
import { SiMedium, SiDevdotto } from "react-icons/si"

const platformIcons = {
  medium: SiMedium,
  devto: SiDevdotto,
}

export default function Blog() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog Posts</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">My thoughts and insights on technology</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogposts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {post.platforms.map((platform, platformIndex) => {
                    const IconComponent = platformIcons[platform as keyof typeof platformIcons]
                    return IconComponent ? (
                      <IconComponent key={platformIndex} className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    ) : null
                  })}
                </div>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h3>

              <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
