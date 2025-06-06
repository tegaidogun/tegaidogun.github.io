"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Youtube, Heart } from "lucide-react"
import { meta, socialprofils } from "../content_option"

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", icon: Github, url: socialprofils.github },
    { name: "LinkedIn", icon: Linkedin, url: socialprofils.linkedin },
    { name: "Twitter", icon: Twitter, url: socialprofils.twitter },
    { name: "YouTube", icon: Youtube, url: socialprofils.youtube },
  ]

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-8"
          >
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-card-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  aria-label={social.name}
                >
                  <IconComponent size={20} />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground"
          >
            <p className="flex items-center justify-center">
              Made with <Heart size={16} className="mx-2 text-red-500" /> by {meta.author}
            </p>
            <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
