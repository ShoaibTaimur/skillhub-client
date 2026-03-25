import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import AuthProvider from './Context/AuthProvider'
import { ThemeProvider } from './components/theme-provider'
import MainLayout from './components/MainLayout'
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup'

const router = createBrowserRouter([
  { path: '/', 
    Component: MainLayout ,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"login",
        Component:Login
      },
      {
        path:"signup",
        Component:Signup
      }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
