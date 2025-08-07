import App from "@/App";
import About from "@/pages/About";
import Error from "@/pages/Error";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Verify from "@/pages/Verify";
import { createBrowserRouter } from "react-router";


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