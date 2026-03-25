import type { User, UserCredential } from 'firebase/auth'
import { createContext } from 'react'

type AuthContextType = {
  user: User | null;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  signInUser: ()=>Promise<UserCredential>
  logoutUser: ()=>Promise<unknown>
}

export const AuthContext = createContext<AuthContextType | null>(null)
