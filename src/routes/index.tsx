import App from "@/App";
import About from "@/pages/About";
import Error from "@/pages/Error";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Verify from "@/pages/Verify";
import { createBrowserRouter, Navigate } from "react-router";
import { generateRoutes } from "@/utils/generateRoutes";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <Error />,
        children: [
            {
                path: "about",
                Component: About
            },
        ]
    },

    // For Admin Routes 
    {
        path: "/admin",
        Component: DashboardLayout,
        children: [
            { index: true, element: <Navigate to="/admin/analytics" /> },
            ...generateRoutes(adminSidebarItems)
        ]
    },

    // For User Routes 
    {
        path: "/user",
        Component: DashboardLayout,
        children: [
            { index: true, element: <Navigate to="/user/booking" /> },
            ...generateRoutes(userSidebarItems)
        ]
    },

    // Out Of App
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/signup",
        Component: SignUp
    },
    {
        path: "/verify",
        Component: Verify
    },
]);