import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";

import Root from "../Root";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ForgetPassword from "../Pages/ForgetPassword";
import ProtectedRouter from "./ProtectedRouter";
import MyProfile from "../Pages/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile";
import SkillDetails from "../Pages/SkillDetails";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("/Skill.json"),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/forget-password",
        Component: ForgetPassword,
      },
      {
        path: "/profile",
        Component: () => (
          <ProtectedRouter>
            <MyProfile></MyProfile>
          </ProtectedRouter>
        ),
      },
      {
        path: "/update-profile",
        Component: () => (
          <ProtectedRouter>
            <UpdateProfile />
          </ProtectedRouter>
        ),
      },
      {
        path: "/skill/:id",
        Component: () => (
          <ProtectedRouter>
            <SkillDetails></SkillDetails>
          </ProtectedRouter>
        ),
      },
    ],
  },
]);
export default router;
