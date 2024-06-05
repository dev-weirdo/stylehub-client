import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  if (user) {
    return children;
  }
  <Navigate to={"/login"} />;
}

export default PrivateRoute;
