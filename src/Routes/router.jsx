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
import ParticipatedContests from "../Pages/dashboard/ParticipatedContests";
import ManageUser from "../Pages/dashboard/ManageUser";
import AdminRoute from "./AdminRoute";
import CreatorRoute from "./CreatorRoute";
import MyCreatedContests from "../Pages/dashboard/MyCreatedContests";
import ManageContests from "../Pages/dashboard/ManageContests";
import EditContest from "../Pages/dashboard/EditContest";
import About from "../Pages/About";
import PaymentSuccess from "../Pages/dashboard/PaymentSuccess";
import PaymentCancel from "../Pages/dashboard/PaymentCancel";
import Submissions from "../Pages/dashboard/Submissions";
import Faq from "../Pages/Faq";
import Contact from "../Pages/Contact";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <Faq />,
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
        path: "payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "payment-canceled",
        element: <PaymentCancel />,
      },
      {
        path: "add-contest",
        element: (
          <CreatorRoute>
            {" "}
            <AddContest></AddContest>
          </CreatorRoute>
        ),
      },
      {
        path: "participated-contests",
        element: <ParticipatedContests></ParticipatedContests>,
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUser />
          </AdminRoute>
        ),
      },
      {
        path: "my-created-contests",
        element: (
          <CreatorRoute>
            <MyCreatedContests />
          </CreatorRoute>
        ),
      },
      {
        path: "manage-contests",
        element: (
          <AdminRoute>
            <ManageContests />
          </AdminRoute>
        ),
      },
      {
        path: "edit-contest/:id",
        element: (
          <CreatorRoute>
            <EditContest></EditContest>
          </CreatorRoute>
        ),
      },
      {
        path: "submissions",
        element: (
          <CreatorRoute>
            <Submissions></Submissions>
          </CreatorRoute>
        ),
      },
    ],
  },
]);
export default router;
