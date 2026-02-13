"use client"

import { useState, useEffect, useRef } from "react"
import { Moon, Sun } from "@phosphor-icons/react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [animate, setAnimate] = useState(false)
  const hasInteracted = useRef(false)

  useEffect(() => {
    setMounted(true)
    // Enable animations after initial paint, but only once user interacts
  }, [])

  const handleToggle = () => {
    if (!hasInteracted.current) {
      hasInteracted.current = true
      setAnimate(true)
    }
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const isDark = theme === "dark"
  const transition = animate ? "transition-all duration-300" : ""

  return (
    <button
      onClick={handleToggle}
      className="fixed top-4 right-4 z-50 p-2.5 rounded-full
        bg-foreground/10 backdrop-blur-md border border-foreground/10
        hover:bg-foreground/20 active:scale-95
        transition-all duration-200 cursor-pointer
        shadow-lg shadow-black/5"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="relative w-5 h-5">
        <Sun
          weight="bold"
          className={`absolute inset-0 w-5 h-5 text-amber-400 ${transition}
            ${mounted && isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`}
        />
        <Moon
          weight="bold"
          className={`absolute inset-0 w-5 h-5 text-slate-700 ${transition}
            ${mounted && !isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"}`}
        />
      </div>
    </button>
  )
}
