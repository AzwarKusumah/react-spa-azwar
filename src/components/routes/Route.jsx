import React from "react";
import { useRoutes } from "react-router-dom";

import LoginPage from "../../pages/auth/LoginPage";
import RegisterPage from "../../pages/auth/RegisterPage";

const Route = () =>
  useRoutes([
    /*     {
      path: "/",
      element: (
        <RouteMiddleware middleware="auth">
          <HomePage />
        </RouteMiddleware>
      ),
    }, */
    {
      path: "/login",
      element: (
        <RouteMiddleware middleware="public">
          <LoginPage />
        </RouteMiddleware>
      ),
    },
    {
      path: "/register",
      element: (
        <RouteMiddleware middleware="public">
          <RegisterPage />
        </RouteMiddleware>
      ),
    },
  ]);

export default Route;
