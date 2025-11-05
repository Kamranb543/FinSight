"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type ColorTheme = "blue" | "red" | "green" | "purple"
type Mode = "light" | "dark"

interface ThemeContextType {
  theme: Mode
  mode: Mode
  colorTheme: ColorTheme
  setTheme: (mode: Mode) => void
  setMode: (mode: Mode) => void
  setColorTheme: (theme: ColorTheme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("dark")
  const [colorTheme, setColorThemeState] = useState<ColorTheme>("blue")

  useEffect(() => {
    const savedMode = localStorage.getItem("theme-mode") as Mode | null
    const savedColorTheme = localStorage.getItem("theme-color") as ColorTheme | null

    const root = document.documentElement
    const initialMode = savedMode || "dark"
    const initialColorTheme = savedColorTheme || "blue"

    setModeState(initialMode)
    setColorThemeState(initialColorTheme)

    root.setAttribute("data-color-theme", initialColorTheme)
    if (initialMode === "light") {
      root.classList.add("light")
      root.classList.remove("dark")
    } else {
      root.classList.add("dark")
      root.classList.remove("light")
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (mode === "dark") {
      root.classList.add("dark")
      root.classList.remove("light")
    } else {
      root.classList.add("light")
      root.classList.remove("dark")
    }
    localStorage.setItem("theme-mode", mode)
  }, [mode])

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute("data-color-theme", colorTheme)
    localStorage.setItem("theme-color", colorTheme)
  }, [colorTheme])

  const setMode = (newMode: Mode) => {
    setModeState(newMode)
  }

  const setColorTheme = (theme: ColorTheme) => {
    setColorThemeState(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme: mode, mode, colorTheme, setTheme: setMode, setMode, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
