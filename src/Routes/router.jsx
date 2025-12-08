import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import NotFound from "../Pages/NotFound";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../Pages/dashboard/MyProfile";
import AddContest from "../Pages/dashboard/AddContest";
import AllContests from "../Pages/AllContests";
import ContestDetails from "../Pages/ContestDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contests",
        element: <AllContests />,
      },
      {
        path: "/contests/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ContestDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/*",
    Component: NotFound,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "add-contest",
        element: <AddContest></AddContest>,
      },
    ],
  },
]);
export default router;
