import { useState, useEffect } from 'react'

type Theme = 'dark' | 'light'

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('dark')
  
  useEffect(() => {
    // Check if user has a theme preference in local storage
    const savedTheme = localStorage.getItem('theme') as Theme | null
    
    // If they do, use that theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
    // If they don't, check their system preference
    else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])
  
  // Update the theme in local storage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme)
    
    // Add or remove the 'dark' class from the document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  
  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  return { theme, toggleTheme }
}