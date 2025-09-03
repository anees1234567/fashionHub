import { JSX, lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const Login = lazy(() => import("../Pages/Auth/Login/Login"));
const Signup = lazy(() => import("../Pages/Auth/Sigup/signup"));




export const authRoutes: RouteObject[] = [

  {
    path: "/login",
    element: (
      <Suspense fallback={<div>loading..</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<div>loading..</div>}>
        <Signup />
      </Suspense>
    ),
  },
];
