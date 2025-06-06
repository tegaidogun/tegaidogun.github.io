"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"
import { contactConfig, socialprofils } from "../content_option"
import { useForm, ValidationError } from "@formspree/react"

const Contact = () => {
  const [state, handleSubmit] = useForm(contactConfig.YOUR_SERVICE_ID)
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {contactConfig.description}
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${contactConfig.YOUR_EMAIL}`}
                className="flex items-center text-muted-foreground hover:text-primary"
              >
                <Mail size={20} className="mr-3" />
                {contactConfig.YOUR_EMAIL}
              </a>
              <a
                href={`tel:${contactConfig.YOUR_FONE}`}
                className="flex items-center text-muted-foreground hover:text-primary"
              >
                <Phone size={20} className="mr-3" />
                {contactConfig.YOUR_FONE}
              </a>
            </div>
            <div className="flex space-x-4 mt-8">
              <a
                href={socialprofils.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github size={24} />
              </a>
              <a
                href={socialprofils.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={socialprofils.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {state.succeeded ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative dark:bg-green-900 dark:border-green-700 dark:text-green-300">
                <strong className="font-bold">Thanks for your message!</strong>
                <span className="block sm:inline"> I'll get back to you soon.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card p-8 rounded-lg shadow-lg"
              >
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-card-foreground text-sm font-bold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-foreground leading-tight focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-card-foreground text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-foreground leading-tight focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <div className="flex items-center justify-end">
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline disabled:bg-muted"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
