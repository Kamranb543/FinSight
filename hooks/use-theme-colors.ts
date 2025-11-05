"use client"

import { useEffect, useState } from "react"
import { useTheme } from "@/contexts/theme-context"

const themeColors = {
  blue: {
    primary: "#3b82f6",
    chart2: "#10b981",
  },
  red: {
    primary: "#ef4444",
    chart2: "#10b981",
  },
  green: {
    primary: "#10b981",
    chart2: "#3b82f6",
  },
  purple: {
    primary: "#a855f7",
    chart2: "#10b981",
  },
}

export function useThemeColors() {
  const { colorTheme, theme } = useTheme()
  const [textColor, setTextColor] = useState("#9ca3af")

  useEffect(() => {
    const root = document.documentElement
    const testElement = document.createElement("div")
    testElement.style.color = "var(--muted-foreground)"
    testElement.style.position = "absolute"
    testElement.style.visibility = "hidden"
    document.body.appendChild(testElement)
    
    const computedColor = getComputedStyle(testElement).color
    document.body.removeChild(testElement)
    
    if (computedColor && computedColor !== "rgba(0, 0, 0, 0)") {
      setTextColor(computedColor)
    } else {
      setTextColor(theme === "dark" ? "#9ca3af" : "#6b7280")
    }
  }, [theme])

  return {
    ...themeColors[colorTheme] || themeColors.blue,
    textColor,
  }
}

