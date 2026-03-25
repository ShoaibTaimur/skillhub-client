import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "@/Firebase/firebase.init";

type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const loginUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutUser=()=>{
    return signOut(auth);
  }

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const userState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return userState;
  });

  const userInfo = {
    user,
    createUser,
    loginUser,
    signInUser,
    logoutUser
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
}

export default AuthProvider;
