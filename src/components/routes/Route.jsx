import React from "react";
import { useRoutes } from "react-router-dom";
import Middleware from "../middleware/Middleware";

import LoginPage from "../../pages/auth/LoginPage";
import RegisterPage from "../../pages/auth/RegisterPage";

const Route = () =>
  useRoutes([
    {
      path: "/",
      element: <Middleware middleware="auth"></Middleware>,
    },
    {
      path: "/login",
      element: (
        <Middleware middleware="public">
          <LoginPage />
        </Middleware>
      ),
    },
    {
      path: "/register",
      element: (
        <Middleware middleware="public">
          <RegisterPage />
        </Middleware>
      ),
    },
  ]);

export default Route;
