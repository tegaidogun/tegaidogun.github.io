"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { dataportfolio } from "../content_option"
import { getTechIcon } from "@/lib/icons"

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-secondary-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {dataportfolio.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {project.technologies.map((tech) => (
                    <div key={tech} className="flex items-center space-x-2" title={tech}>
                      {getTechIcon(tech)}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-secondary">
                <div className="flex space-x-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 bg-secondary-foreground text-secondary rounded-lg hover:bg-secondary-foreground/90 transition-colors duration-200"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </motion.a>

                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
