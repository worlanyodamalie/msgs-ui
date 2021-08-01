import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        alias: "/messages",
        name: "messages",
        component: () => import("./components/Messages")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes 
});

export default router;