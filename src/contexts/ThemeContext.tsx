import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(() => {
    // Default to light mode
    if (typeof window !== 'undefined') {
      // Ensure we start with light mode (remove dark class if present)
      document.documentElement.classList.remove('dark')
      
      // Check localStorage for saved preference
      const saved = localStorage.getItem('theme')
      if (saved === 'dark') {
        document.documentElement.classList.add('dark')
        return true
      }
      // Default to light mode
      localStorage.setItem('theme', 'light')
      return false
    }
    return false
  })

  useEffect(() => {
    // Update document class for dark mode
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // Save to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => {
    console.log('toggleTheme called, current isDark:', isDark)
    setIsDark((prev) => {
      const newValue = !prev
      console.log('Setting theme to:', newValue ? 'dark' : 'light')
      // Immediately update the DOM class on html element
      const html = document.documentElement
      if (newValue) {
        html.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        console.log('Added dark class, html classes:', html.className)
      } else {
        html.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        console.log('Removed dark class, html classes:', html.className)
      }
      // Force a reflow to ensure styles update
      void html.offsetHeight
      return newValue
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

