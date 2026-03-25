import type { User } from 'firebase/auth'
import { createContext } from 'react'

type AuthContextType = {
  user: User | null;
  createUser: (email: string, password: string) => Promise<unknown>;
  loginUser: (email: string, password: string) => Promise<unknown>;
  signInUser: ()=>Promise<unknown>
  logoutUser: ()=>Promise<unknown>
}

export const AuthContext = createContext<AuthContextType | null>(null)
