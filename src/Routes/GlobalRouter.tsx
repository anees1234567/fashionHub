import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PageNotFound from "../ErrorPages/PageNotFound";
import { authRoutes } from "./Authroutes";
import { JSX } from "react";
import { ErrorElement } from "../ErrorPages/Error";
import ProtectedRoute from "../Auth/ProtectedRoutes";





const routelist: RouteObject[] = [
  {
    path: "/",
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: (<ProtectedRoute>
          <Home/>
        </ProtectedRoute>),
      },
      ...authRoutes,
      {
        path: "page-not-found",
        element: <PageNotFound />,
      },
      {
        path: "*",
        element: <Navigate to="page-not-found" replace />,
      },
    ],
  },
];

export const globalRouter = createBrowserRouter(routelist);
