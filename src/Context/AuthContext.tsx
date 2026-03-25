import { createContext } from 'react'

type AuthContextType = {
  createUser: (email: string, password: string) => Promise<unknown>
  loginUser: (email: string, password: string) => Promise<unknown>
}

export const AuthContext = createContext<AuthContextType | null>(null)
