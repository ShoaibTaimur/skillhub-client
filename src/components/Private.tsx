import { AuthContext } from "@/Context/AuthContext";
import React, { use } from "react";
import { Navigate } from "react-router";

const Private = ({ children }) => {
  const { user } = use(AuthContext);
  if (user) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default Private;
