"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface User {
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const DEMO_CREDENTIALS = [
  { email: "demo@netlabs.ai", password: "demo123", name: "Demo User" },
  { email: "admin@finsight.com", password: "admin123", name: "Admin User" },
  { email: "user@example.com", password: "user123", name: "Test User" },
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const savedUser = localStorage.getItem("fin-user")
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser)
        setUser(userData)
        setIsAuthenticated(true)
      } catch (error) {
        localStorage.removeItem("fin-user")
      }
    }
  }, [])

  const login = (email: string, password: string): boolean => {
    const credential = DEMO_CREDENTIALS.find(
      (cred) => cred.email === email && cred.password === password
    )

    if (credential) {
      const userData = { email: credential.email, name: credential.name }
      setUser(userData)
      setIsAuthenticated(true)
      localStorage.setItem("fin-user", JSON.stringify(userData))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("fin-user")
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

