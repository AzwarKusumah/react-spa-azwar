import React from "react";
import { useRoutes } from "react-router-dom";
import Middleware from "../middleware/Middleware";

import LoginPage from "../../pages/auth/LoginPage";
import RegisterPage from "../../pages/auth/RegisterPage";
import HomePage from "../../pages/HomePage";
import DetailPageWrapper from "../../pages/DetailPage";
import ArchivePage from "../../pages/ArchivePage";
import AddPage from "../../pages/AddPage";
import Page404 from "../../pages/Page404";

const Route = () =>
  useRoutes([
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
    {
      path: "/",
      element: (
        <Middleware middleware="auth">
          <HomePage />
        </Middleware>
      ),
    },
    {
      path: "/notes/:id",
      element: (
        <Middleware middleware="auth">
          <DetailPageWrapper />
        </Middleware>
      ),
    },
    {
      path: "/archives",
      element: (
        <Middleware middleware="auth">
          <ArchivePage />
        </Middleware>
      ),
    },
    {
      path: "/notes/new",
      element: (
        <Middleware middleware="auth">
          <AddPage />
        </Middleware>
      ),
    },
    {
      path: "/*",
      element: (
        <Middleware middleware="public">
          <Page404 />
        </Middleware>
      ),
    },
  ]);

export default Route;
