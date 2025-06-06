"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaHtml5,
  FaPython,
  FaUnity,
  FaRust,
  FaJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa"
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiSocketdotio,
  SiD3Dotjs,
  SiPrisma,
  SiMysql,
  SiTailwindcss,
  SiStripe,
  SiCplusplus,
  SiC,
  SiOpengl,
  SiLinux,
  SiJupyter
} from "react-icons/si"
import { dataportfolio } from "../content_option"

const Portfolio = () => {
  const getTechIcon = (tech: string) => {
    const size = 24
    const techLower = tech.toLowerCase()

    switch (techLower) {
      case "react":
        return <FaReact size={size} className="text-blue-500" />
      case "next.js":
      case "nextjs":
        return <SiNextdotjs size={size} />
      case "node.js":
      case "nodejs":
        return <FaNodeJs size={size} className="text-green-500" />
      case "typescript":
        return <SiTypescript size={size} className="text-blue-700" />
      case "mongodb":
        return <SiMongodb size={size} className="text-green-600" />
      case "postgresql":
        return <SiPostgresql size={size} className="text-blue-600" />
      case "express":
        return <SiExpress size={size} />
      case "socket.io":
        return <SiSocketdotio size={size} />
      case "d3.js":
        return <SiD3Dotjs size={size} className="text-orange-500" />
      case "prisma":
        return <SiPrisma size={size} className="text-gray-700" />
      case "mysql":
        return <SiMysql size={size} className="text-blue-500" />
      case "tailwind css":
      case "tailwindcss":
        return <SiTailwindcss size={size} className="text-teal-500" />
      case "stripe":
        return <SiStripe size={size} className="text-indigo-500" />
      case "unity":
        return <FaUnity size={size} />
      case "c++":
      case "cplusplus":
        return <SiCplusplus size={size} className="text-blue-600" />
      case "c":
        return <SiC size={size} className="text-gray-600" />
      case "opengl":
        return <SiOpengl size={size} />
      case "python":
        return <FaPython size={size} className="text-yellow-500" />
      case "rust":
        return <FaRust size={size} className="text-orange-600" />
      case "javascript":
      case "js":
        return <FaJs size={size} className="text-yellow-400" />
      case "css":
        return <FaCss3Alt size={size} className="text-blue-500" />
      case "html":
        return <FaHtml5 size={size} className="text-orange-500" />
      case "jupyter":
        return <SiJupyter size={size} className="text-orange-600" />
      case "github":
        return <Github size={size} />
      default:
        return <FaDatabase size={size} className="text-gray-500" />
    }
  }

  return (
    <section id="portfolio" className="py-20 bg-secondary">
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
