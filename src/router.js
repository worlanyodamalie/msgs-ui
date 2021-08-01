import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        alias: "/messages",
        name: "messages",
        component: () => import("./components/Messages")
    },
    {
        path: "/create-message",
        alias: "/create-message",
        name: "create-message",
        component: () => import("./components/CreateMessage")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes 
});

export default router;