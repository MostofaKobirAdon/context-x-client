import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
export default router;
