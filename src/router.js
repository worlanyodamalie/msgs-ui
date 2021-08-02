import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/subscription",
        alias: "/subscription",
        name: "subscription",
        component: () => import("./components/Messages")
    },
    {
        path: "/create-message",
        alias: "/create-message",
        name: "create-message",
        component: () => import("./components/CreateMessage")
    },
    {
        path: "/subscribers",
        alias: "/subscribers",
        name: "subscribers",
        component: () => import("./components/Subscribers")
    },
    {
        path: "/",
        alias: "/",
        name: "login",
        component: () => import("./components/Login")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes 
});

export default router;