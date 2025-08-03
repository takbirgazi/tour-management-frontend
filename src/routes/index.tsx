import App from "@/App";
import About from "@/pages/About";
import Error from "@/pages/Error";
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
    }
]);