"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ArrowDown } from "lucide-react"
import { introdata } from "../content_option"
import Image from "next/image"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6"
            >
              {introdata.title}
            </motion.h1>

            <div className="text-2xl lg:text-3xl text-primary mb-8 h-20">
              <TypeAnimation
                sequence={[
                  introdata.animated.first,
                  2000,
                  introdata.animated.second,
                  2000,
                  introdata.animated.third,
                  2000,
                  introdata.animated.fourth,
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
            >
              {introdata.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-secondary border-t-primary"
              />
              <Image
                src={introdata.your_img_url || "/placeholder.svg?height=400&width=400"}
                alt="Profile"
                width={400}
                height={400}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <ArrowDown className="text-muted-foreground" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
