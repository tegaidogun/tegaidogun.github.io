"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"
import { worktimeline } from "../content_option"

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>

            {worktimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                <div className="ml-20 bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-card-foreground">
                      {item.jobtitle}
                    </h3>
                    <div className="flex items-center text-primary text-sm mt-2 sm:mt-0">
                      <Calendar size={16} className="mr-1" />
                      {item.date}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Building2 size={16} className="mr-2" />
                      {item.where}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm mt-2 sm:mt-0">
                      <MapPin size={16} className="mr-1" />
                      {item.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.duties && item.duties.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {item.duties.map((duty, i) => (
                        <li key={i}>{duty}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
