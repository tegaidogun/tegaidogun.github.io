"use client"

import { useTheme } from "@/context/ThemeContext"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  )
}

export default ThemeSwitcher 