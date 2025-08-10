import Booking from "@/pages/User/Booking";
import type { ISidebarItems } from "@/types";
import { lazy } from "react";


const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const adminSidebarItems: ISidebarItems[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "Analytics",
                url: "/admin/analytics",
                component: Analytics
            },
        ],
    },
    {
        title: "Management",
        items: [
            {
                title: "Add Tour",
                url: "/admin/nothing",
                component: Booking
            },
            {
                title: "Add Tour Types",
                url: "/admin/analytics",
                component: Booking
            },
        ],
    },


];