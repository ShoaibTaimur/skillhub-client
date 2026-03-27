import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import AuthProvider from "./Context/AuthProvider";
import { ThemeProvider } from "./components/theme-provider";
import MainLayout from "./components/MainLayout";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Skills from "./components/Skills";
import Dashboard from "./components/Dashboard";
import Private from "./components/Private";
import AddSkill from "./components/AddSkill";
import SkillDetail from "./components/SkillDetail";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "skills",
        element: (
          <Private>
            <Skills />
          </Private>
        ),
      },
      {
        path: "skills/:id",
        element: (
          <Private>
            <SkillDetail />
          </Private>
        ),
      },
      {
        path: "dashboard",
        element: (
          <Private>
            <Dashboard />
          </Private>
        ),
      },
      {
        path: "add-skill",
        element: (
          <Private>
            <AddSkill />
          </Private>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
