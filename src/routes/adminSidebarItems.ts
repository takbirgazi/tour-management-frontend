import type { ISidebarItems } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));
const AddDivision = lazy(() => import("@/pages/Admin/AddDivision"));
const AddTourTypes = lazy(() => import("@/pages/Admin/AddTourTypes"));
const AddTour = lazy(() => import("@/pages/Admin/AddTour"));

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
                title: "Add Tour Types",
                url: "/admin/add-tour-types",
                component: AddTourTypes
            },
            {
                title: "Add Division",
                url: "/admin/add-division",
                component: AddDivision
            },
            {
                title: "Add Tour",
                url: "/admin/add-tour",
                component: AddTour
            },
        ],
    },


];