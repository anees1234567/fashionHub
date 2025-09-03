import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import PageNotFound from "../ErrorPages/PageNotFound";

import {  Suspense } from "react";
import { ErrorElement } from "../ErrorPages/Error";
import ProtectedRoute from "../Auth/ProtectedRoutes";
import ProductList from "../Pages/products/Index";
import MainLayout from "../Layouts";
import Loadingpage from "../uitilities/CustomComponents/Loadingpage";

import ProfilePage from "../Pages/Profile";
import Login from "../Pages/Auth/Login/Login";
import Signup from "../Pages/Auth/Sigup/signup";

const routelist: RouteObject[] = [

  {
    path: "/",
    element: <Navigate to="/user/products" replace />,
  },

  {
    path: "/login",
    element: (
      <Suspense fallback={<Loadingpage />}>
        <Login />
      </Suspense>
    ),
  },

  {
    path: "/signup",
    element: (
      <Suspense fallback={<Loadingpage />}>
        <Signup />
      </Suspense>
    ),
  },
  {
    path: "/user",
    errorElement: <ErrorElement />,
    element: <MainLayout />,
    children: [
      {
        index: true, 
        element: <Navigate to="/user/products" replace />, 
      },
      {
        path: "products",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loadingpage/>}>
            <ProductList />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loadingpage/>}>
            <ProfilePage/>
            </Suspense>
          </ProtectedRoute>
        ),
      },
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