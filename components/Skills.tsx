"use client"

import { motion } from "framer-motion"
import { skills } from "../content_option"
import { getTechIcon } from "@/lib/icons"

const Skills = () => {
  const skillCategories = [
    { title: "Languages", items: skills.languages, color: "bg-red-500" },
    { title: "Frameworks", items: skills.frameworks, color: "bg-blue-500" },
    { title: "Tools", items: skills.tools, color: "bg-green-500" },
    { title: "Databases", items: skills.databases, color: "bg-purple-500" },
  ]

  return (
    <section id="skills" className="py-20 bg-secondary-dark">
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
                    className="flex items-center p-3 bg-secondary rounded-lg shadow-sm hover:shadow-md transition-all duration-100 cursor-pointer"
                  >
                    <div className="mr-4">{getTechIcon(skill.name)}</div>
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
