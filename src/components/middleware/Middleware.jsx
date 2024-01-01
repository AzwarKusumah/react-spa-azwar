import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Middleware({ children, middleware }) {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  const isAuthRequired = middleware === "auth";
  const isPublicOnly = middleware === "public";

  if ((isAuthRequired && !auth) || (isPublicOnly && auth)) {
    return (
      <Navigate
        to={isAuthRequired ? "/login" : "/"}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}

export default Middleware;
