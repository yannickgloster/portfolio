"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({
  theme: "dark",
  setTheme: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null
    const initial = stored ?? "dark"
    setThemeState(initial)
    document.documentElement.classList.toggle("dark", initial === "dark")
    setMounted(true)
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  // Prevent flash — the inline script in layout handles initial class,
  // but we still need to wait for mount to avoid hydration mismatch
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
