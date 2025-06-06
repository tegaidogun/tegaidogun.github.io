"use client"

import React, { createContext, useState, useEffect, useContext, ReactNode } from "react"

interface ThemeContextType {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme")
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      setTheme(systemTheme)
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      window.localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      window.localStorage.setItem("theme", "light")
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
} 