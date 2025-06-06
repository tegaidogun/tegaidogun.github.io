"use client"

import { motion } from "framer-motion"
import { skills } from "../content_option"
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
  FaJava,
  FaLinux,
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
  SiR,
  SiDotnet,
} from "react-icons/si"
import { Code2, Component } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    { title: "Languages", items: skills.languages, color: "bg-red-500" },
    { title: "Frameworks", items: skills.frameworks, color: "bg-blue-500" },
    { title: "Tools", items: skills.tools, color: "bg-green-500" },
    { title: "Databases", items: skills.databases, color: "bg-purple-500" },
  ]

  const getIcon = (name: string) => {
    const size = 24
    const nameLower = name.toLowerCase()

    switch (nameLower) {
      case "c":
        return <SiC size={size} className="text-gray-600" />
      case "c++":
        return <SiCplusplus size={size} className="text-blue-600" />
      case "python":
        return <FaPython size={size} className="text-yellow-500" />
      case "c#":
        return <SiDotnet size={size} className="text-purple-600" />
      case "javascript":
        return <FaJs size={size} className="text-yellow-400" />
      case "rust":
        return <FaRust size={size} className="text-orange-600" />
      case "java":
        return <FaJava size={size} className="text-red-500" />
      case "r":
        return <SiR size={size} className="text-blue-500" />
      case "unity":
        return <FaUnity size={size} />
      case "react":
        return <FaReact size={size} className="text-blue-500" />
      case "next.js":
        return <SiNextdotjs size={size} />
      case "opengl":
        return <SiOpengl size={size} />
      case "linux administration":
        return <FaLinux size={size} />
      case "git":
        return <FaGitAlt size={size} className="text-orange-600" />
      case "docker":
        return <FaDocker size={size} className="text-blue-500" />
      case "sql":
        return <FaDatabase size={size} className="text-indigo-500" />
      case "mongodb":
        return <SiMongodb size={size} className="text-green-600" />
      case "postgresql":
        return <SiPostgresql size={size} className="text-blue-600" />
      default:
        return <Code2 size={size} className="text-gray-500" />
    }
  }

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <div className={`w-4 h-4 ${category.color} rounded-full mr-3`}></div>
                <h3 className="text-xl font-bold text-card-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center p-3 bg-secondary rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div className="text-muted-foreground mr-4">{getIcon(skill.name)}</div>
                    <span className="text-foreground font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
