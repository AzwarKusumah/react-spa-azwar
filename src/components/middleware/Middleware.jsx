import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import PropTypes from "prop-types";

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

Middleware.propTypes = {
  children: PropTypes.element.isRequired,
  middleware: PropTypes.string.isRequired,
};

export default Middleware;
